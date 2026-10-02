import * as THREE from 'three';
import { createAsphaltTexture } from './textures';
import type { SceneInstance } from './ConstructionsScene';

export function buildRoadsScene(
  worldGroup: THREE.Group,
  camera: THREE.PerspectiveCamera
): SceneInstance {
  const disposables: { dispose: () => void }[] = [];

  camera.position.set(0, 6, 12);
  camera.lookAt(0, 1.2, -4);

  // 1. Asphalt Highway Surface with Seamless Scrolling Texture
  const asphaltTex = createAsphaltTexture();
  asphaltTex.repeat.set(1, 6);
  disposables.push(asphaltTex);

  const roadLength = 48;
  const roadWidth = 9.0;
  const roadGeo = new THREE.PlaneGeometry(roadWidth, roadLength, 20, 40);
  roadGeo.rotateX(-Math.PI / 2);
  const roadMat = new THREE.MeshStandardMaterial({
    map: asphaltTex,
    roughness: 0.85,
    metalness: 0.15,
  });
  const roadMesh = new THREE.Mesh(roadGeo, roadMat);
  roadMesh.position.y = 0.05;
  worldGroup.add(roadMesh);
  disposables.push(roadGeo, roadMat);

  // 2. Concrete Curbs & Paved Shoulders
  const curbGeo = new THREE.BoxGeometry(0.35, 0.25, roadLength);
  const curbMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.8 });
  disposables.push(curbGeo, curbMat);

  const leftCurb = new THREE.Mesh(curbGeo, curbMat);
  leftCurb.position.set(-roadWidth / 2 - 0.175, 0.125, 0);
  worldGroup.add(leftCurb);

  const rightCurb = new THREE.Mesh(curbGeo, curbMat);
  rightCurb.position.set(roadWidth / 2 + 0.175, 0.125, 0);
  worldGroup.add(rightCurb);

  // 3. Galvanized Steel W-Beam Crash Barriers (Guardrails)
  const railGeo = new THREE.BoxGeometry(0.12, 0.35, roadLength);
  const railMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85, roughness: 0.25 });
  disposables.push(railGeo, railMat);

  const leftRail = new THREE.Mesh(railGeo, railMat);
  leftRail.position.set(-roadWidth / 2 - 0.55, 0.65, 0);
  worldGroup.add(leftRail);

  const rightRail = new THREE.Mesh(railGeo, railMat);
  rightRail.position.set(roadWidth / 2 + 0.55, 0.65, 0);
  worldGroup.add(rightRail);

  // Guardrail I-beam Support Posts & Reflector Studs
  const postGeo = new THREE.BoxGeometry(0.1, 0.7, 0.1);
  const postMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.7 });
  const studGeo = new THREE.BoxGeometry(0.08, 0.08, 0.04);
  const studMat = new THREE.MeshBasicMaterial({ color: 0xfff200 });
  disposables.push(postGeo, postMat, studGeo, studMat);

  for (let z = -roadLength / 2; z <= roadLength / 2; z += 4) {
    const p1 = new THREE.Mesh(postGeo, postMat);
    p1.position.set(-roadWidth / 2 - 0.55, 0.35, z);
    worldGroup.add(p1);

    const p2 = new THREE.Mesh(postGeo, postMat);
    p2.position.set(roadWidth / 2 + 0.55, 0.35, z);
    worldGroup.add(p2);

    // Yellow Reflector on each post
    const s1 = new THREE.Mesh(studGeo, studMat);
    s1.position.set(-roadWidth / 2 - 0.48, 0.65, z);
    worldGroup.add(s1);

    const s2 = new THREE.Mesh(studGeo, studMat);
    s2.position.set(roadWidth / 2 + 0.48, 0.65, z);
    worldGroup.add(s2);
  }

  // 4. Surrounding Earthen Embankment & Deccan Soil Slopes
  const slopeGeo = new THREE.PlaneGeometry(6, roadLength);
  slopeGeo.rotateX(-Math.PI / 2);
  const slopeMat = new THREE.MeshStandardMaterial({ color: 0x3d332a, roughness: 1.0 });
  disposables.push(slopeGeo, slopeMat);

  const leftSlope = new THREE.Mesh(slopeGeo, slopeMat);
  leftSlope.position.set(-roadWidth / 2 - 3.7, -0.6, 0);
  leftSlope.rotation.z = 0.35;
  worldGroup.add(leftSlope);

  const rightSlope = new THREE.Mesh(slopeGeo, slopeMat);
  rightSlope.position.set(roadWidth / 2 + 3.7, -0.6, 0);
  rightSlope.rotation.z = -0.35;
  worldGroup.add(rightSlope);

  // 5. Overhead Highway Signage Gantry
  const gantryGroup = new THREE.Group();
  gantryGroup.position.set(0, 0, -8);
  worldGroup.add(gantryGroup);

  const gantryColumnGeo = new THREE.CylinderGeometry(0.18, 0.18, 5.2, 12);
  const gantryMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.75, roughness: 0.3 });
  disposables.push(gantryColumnGeo, gantryMat);

  const gantryP1 = new THREE.Mesh(gantryColumnGeo, gantryMat);
  gantryP1.position.set(-roadWidth / 2 - 0.8, 2.6, 0);
  gantryGroup.add(gantryP1);

  const gantryP2 = new THREE.Mesh(gantryColumnGeo, gantryMat);
  gantryP2.position.set(roadWidth / 2 + 0.8, 2.6, 0);
  gantryGroup.add(gantryP2);

  const gantryCrossGeo = new THREE.BoxGeometry(roadWidth + 2.2, 0.5, 0.5);
  const gantryCross = new THREE.Mesh(gantryCrossGeo, gantryMat);
  gantryCross.position.set(0, 5.0, 0);
  gantryGroup.add(gantryCross);
  disposables.push(gantryCrossGeo);

  // Green Highway Sign Board
  const signGeo = new THREE.BoxGeometry(5.2, 1.6, 0.1);
  const signCanvas = document.createElement('canvas');
  signCanvas.width = 512;
  signCanvas.height = 160;
  const sCtx = signCanvas.getContext('2d')!;
  sCtx.fillStyle = '#047857'; // Highway Green
  sCtx.fillRect(0, 0, 512, 160);
  sCtx.strokeStyle = '#ffffff';
  sCtx.lineWidth = 6;
  sCtx.strokeRect(8, 8, 496, 144);
  sCtx.fillStyle = '#ffffff';
  sCtx.font = 'bold 26px sans-serif';
  sCtx.fillText('NH-44 EXPRESS CORRIDOR', 30, 55);
  sCtx.fillStyle = '#ffffff';
  sCtx.font = 'bold 22px monospace';
  sCtx.fillText('HYDERABAD ◀ 280 KM  |  BENGALURU 160 KM ▶', 30, 110);

  const signTex = new THREE.CanvasTexture(signCanvas);
  disposables.push(signTex);
  const signMat = new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.4 });
  const signBoard = new THREE.Mesh(signGeo, signMat);
  signBoard.position.set(0, 4.2, 0.28);
  gantryGroup.add(signBoard);
  disposables.push(signGeo, signMat);

  // 6. Heavy Vibratory Asphalt Road Roller
  const rollerGroup = new THREE.Group();
  rollerGroup.position.set(1.8, 0, 2);
  worldGroup.add(rollerGroup);

  // Front Steel Compactor Drum
  const frontDrumGeo = new THREE.CylinderGeometry(0.85, 0.85, 2.2, 24);
  frontDrumGeo.rotateZ(Math.PI / 2);
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.9, roughness: 0.2 });
  const frontDrum = new THREE.Mesh(frontDrumGeo, steelMat);
  frontDrum.position.set(0, 0.85, -1.8);
  rollerGroup.add(frontDrum);
  disposables.push(frontDrumGeo, steelMat);

  // Rear Compactor Drum
  const rearDrum = new THREE.Mesh(frontDrumGeo, steelMat);
  rearDrum.position.set(0, 0.85, 1.8);
  rollerGroup.add(rearDrum);

  // Machine Body Chassis in Brand Yellow
  const chassisGeo = new THREE.BoxGeometry(1.8, 1.2, 3.4);
  const yellowBodyMat = new THREE.MeshStandardMaterial({ color: 0xf2c230, metalness: 0.5, roughness: 0.3 });
  const chassis = new THREE.Mesh(chassisGeo, yellowBodyMat);
  chassis.position.set(0, 1.5, 0);
  rollerGroup.add(chassis);
  disposables.push(chassisGeo, yellowBodyMat);

  // Operator Cabin Canopy with ROPS frame
  const ropsGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.4, 8);
  const ropsMat = new THREE.MeshStandardMaterial({ color: 0x18181b });
  disposables.push(ropsGeo, ropsMat);
  [-0.7, 0.7].forEach((rx) => {
    [-0.8, 0.8].forEach((rz) => {
      const p = new THREE.Mesh(ropsGeo, ropsMat);
      p.position.set(rx, 2.8, rz);
      rollerGroup.add(p);
    });
  });

  const roofGeo = new THREE.BoxGeometry(1.9, 0.1, 2.0);
  const roof = new THREE.Mesh(roofGeo, ropsMat);
  roof.position.set(0, 3.5, 0);
  rollerGroup.add(roof);
  disposables.push(roofGeo);

  // Rotating Yellow Safety Beacon
  const beaconGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.25, 12);
  const beaconMat = new THREE.MeshBasicMaterial({ color: 0xfff200 });
  const beacon = new THREE.Mesh(beaconGeo, beaconMat);
  beacon.position.set(0, 3.7, 0);
  rollerGroup.add(beacon);
  disposables.push(beaconGeo, beaconMat);

  // Dynamic Compaction Laser Sensor Line
  const compLaserGeo = new THREE.PlaneGeometry(2.3, 0.12);
  compLaserGeo.rotateX(-Math.PI / 2);
  const compLaserMat = new THREE.MeshBasicMaterial({ color: 0xfff200, transparent: true, opacity: 0.85 });
  const compLaser = new THREE.Mesh(compLaserGeo, compLaserMat);
  compLaser.position.set(0, 0.1, -1.8);
  rollerGroup.add(compLaser);
  disposables.push(compLaserGeo, compLaserMat);

  return {
    disposables,
    update: (time) => {
      // Infinite highway motion: scroll asphalt texture along Y
      asphaltTex.offset.y = (time * 0.45) % 1;

      // Roller machine oscillating compaction work
      const rollerZ = Math.sin(time * 0.7) * 4.0;
      rollerGroup.position.z = rollerZ;

      // Rotate drums while rolling
      frontDrum.rotation.x = time * -2.5;
      rearDrum.rotation.x = time * -2.5;

      // Flashing safety beacon
      beaconMat.color.setHex(Math.sin(time * 12) > 0 ? 0xfff200 : 0x713f12);
    },
  };
}
