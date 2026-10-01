import * as THREE from 'three';
import { createConcreteTexture, createRipRapTexture } from './textures';
import type { SceneInstance } from './ConstructionsScene';

export function buildReservoirsScene(
  worldGroup: THREE.Group,
  camera: THREE.PerspectiveCamera
): SceneInstance {
  const disposables: { dispose: () => void }[] = [];

  camera.position.set(0, 11, 16);
  camera.lookAt(0, 1.0, -1);

  const riprapTex = createRipRapTexture();
  riprapTex.repeat.set(4, 2);
  disposables.push(riprapTex);

  const concreteTex = createConcreteTexture();
  disposables.push(concreteTex);

  // 1. Zoned Earthen Embankment Dam
  // Dam Crest Roadway
  const crestLength = 28;
  const crestWidth = 3.6;
  const damHeight = 4.2;

  const crestRoadGeo = new THREE.PlaneGeometry(crestWidth, crestLength);
  crestRoadGeo.rotateX(-Math.PI / 2);
  const crestMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 });
  const crestRoad = new THREE.Mesh(crestRoadGeo, crestMat);
  crestRoad.position.set(2.0, damHeight, 0);
  worldGroup.add(crestRoad);
  disposables.push(crestRoadGeo, crestMat);

  // Upstream Rip-Rap Boulder Armor Slope (facing the reservoir water on left)
  const upSlopeWidth = 9.0;
  const upSlopeGeo = new THREE.PlaneGeometry(upSlopeWidth, crestLength, 15, 20);
  upSlopeGeo.rotateX(-Math.PI / 2);
  const riprapMat = new THREE.MeshStandardMaterial({
    map: riprapTex,
    roughness: 0.95,
  });
  const upSlope = new THREE.Mesh(upSlopeGeo, riprapMat);
  upSlope.position.set(-2.0, damHeight / 2, 0);
  upSlope.rotation.z = -0.52; // ~30 deg slope into reservoir
  worldGroup.add(upSlope);
  disposables.push(upSlopeGeo, riprapMat);

  // Downstream Turf Grass Slope (facing valley on right)
  const downSlopeWidth = 9.0;
  const downSlopeGeo = new THREE.PlaneGeometry(downSlopeWidth, crestLength);
  downSlopeGeo.rotateX(-Math.PI / 2);
  const turfMat = new THREE.MeshStandardMaterial({ color: 0x365314, roughness: 0.9 });
  const downSlope = new THREE.Mesh(downSlopeGeo, turfMat);
  downSlope.position.set(6.0, damHeight / 2, 0);
  downSlope.rotation.z = 0.52;
  worldGroup.add(downSlope);
  disposables.push(downSlopeGeo, turfMat);

  // Crest Safety Parapet Walls along Dam
  const parapetGeo = new THREE.BoxGeometry(0.2, 0.9, crestLength);
  const parapetMat = new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 0.8 });
  disposables.push(parapetGeo, parapetMat);

  const leftParapet = new THREE.Mesh(parapetGeo, parapetMat);
  leftParapet.position.set(2.0 - crestWidth / 2, damHeight + 0.45, 0);
  worldGroup.add(leftParapet);

  const rightParapet = new THREE.Mesh(parapetGeo, parapetMat);
  rightParapet.position.set(2.0 + crestWidth / 2, damHeight + 0.45, 0);
  worldGroup.add(rightParapet);

  // 2. Vast Deep Blue Reservoir Lake Body
  const waterWidth = 24;
  const waterLength = 32;
  const waterCols = 40;
  const waterRows = 40;
  const waterGeo = new THREE.PlaneGeometry(waterWidth, waterLength, waterCols, waterRows);
  waterGeo.rotateX(-Math.PI / 2);
  const waterMat = new THREE.MeshPhysicalMaterial({
    color: 0x0369a1, // Deep reservoir cobalt / navy
    roughness: 0.1,
    transmission: 0.6,
    transparent: true,
    opacity: 0.9,
    reflectivity: 0.9,
  });
  const reservoirWater = new THREE.Mesh(waterGeo, waterMat);
  reservoirWater.position.set(-10, damHeight - 0.7, 0);
  worldGroup.add(reservoirWater);
  disposables.push(waterGeo, waterMat);

  // 3. Cylindrical Intake Well / Pump House Tower out in the lake
  const intakeX = -7.5;
  const intakeZ = -1.5;
  const intakeGroup = new THREE.Group();
  intakeGroup.position.set(intakeX, 0, intakeZ);
  worldGroup.add(intakeGroup);

  const intakeGeo = new THREE.CylinderGeometry(1.6, 1.8, damHeight + 3.0, 24);
  const intakeMat = new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 0.7 });
  const intakeTower = new THREE.Mesh(intakeGeo, intakeMat);
  intakeTower.position.y = (damHeight + 3.0) / 2;
  intakeGroup.add(intakeTower);
  disposables.push(intakeGeo, intakeMat);

  // Control Room on top of Intake Well
  const roomGeo = new THREE.CylinderGeometry(1.7, 1.7, 1.4, 16);
  const roomMat = new THREE.MeshStandardMaterial({ color: 0xf2c230, roughness: 0.4 });
  const controlRoom = new THREE.Mesh(roomGeo, roomMat);
  controlRoom.position.y = damHeight + 3.0 + 0.7;
  intakeGroup.add(controlRoom);
  disposables.push(roomGeo, roomMat);

  // Conical Roof on Control Room
  const roofGeo = new THREE.ConeGeometry(2.1, 1.0, 16);
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x0e0e0e });
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.y = damHeight + 3.0 + 1.4 + 0.5;
  intakeGroup.add(roof);
  disposables.push(roofGeo, roofMat);

  // 4. Steel Pratt Truss Footbridge connecting Dam Crest to Intake Tower
  const bridgeLength = Math.abs(intakeX - (2.0 - crestWidth / 2));
  const bridgeGroup = new THREE.Group();
  bridgeGroup.position.set(intakeX + bridgeLength / 2, damHeight + 0.3, intakeZ);
  worldGroup.add(bridgeGroup);

  const bridgeDeckGeo = new THREE.BoxGeometry(bridgeLength, 0.15, 1.2);
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.25 });
  const bridgeDeck = new THREE.Mesh(bridgeDeckGeo, steelMat);
  bridgeGroup.add(bridgeDeck);
  disposables.push(bridgeDeckGeo, steelMat);

  // Steel Handrails on Bridge
  const railGeo = new THREE.CylinderGeometry(0.03, 0.03, bridgeLength, 8);
  railGeo.rotateZ(Math.PI / 2);
  [-0.55, 0.55].forEach((rz) => {
    const rail = new THREE.Mesh(railGeo, steelMat);
    rail.position.set(0, 0.55, rz);
    bridgeGroup.add(rail);
  });
  disposables.push(railGeo);

  // 5. Radial Wave Ripples expanding from Intake Well
  const rippleRings: THREE.Mesh[] = [];
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5,
  });
  disposables.push(ringMat);

  for (let i = 0; i < 4; i++) {
    const rGeo = new THREE.RingGeometry(1.9, 2.05, 32);
    rGeo.rotateX(-Math.PI / 2);
    const ring = new THREE.Mesh(rGeo, ringMat);
    ring.position.set(intakeX, damHeight - 0.68, intakeZ);
    worldGroup.add(ring);
    rippleRings.push(ring);
    disposables.push(rGeo);
  }

  // 6. Floating Meteorological & Water Level Telemetry Buoy
  const buoyGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.8, 12);
  const buoyMat = new THREE.MeshStandardMaterial({ color: 0xf2c230, metalness: 0.6 });
  const buoy = new THREE.Mesh(buoyGeo, buoyMat);
  buoy.position.set(intakeX - 4.5, damHeight - 0.4, 5.0);
  worldGroup.add(buoy);
  disposables.push(buoyGeo, buoyMat);

  const buoyLedGeo = new THREE.SphereGeometry(0.08, 8, 8);
  const buoyLedMat = new THREE.MeshBasicMaterial({ color: 0xfff200 });
  const buoyLed = new THREE.Mesh(buoyLedGeo, buoyLedMat);
  buoyLed.position.set(intakeX - 4.5, damHeight + 0.25, 5.0);
  worldGroup.add(buoyLed);
  disposables.push(buoyLedGeo, buoyLedMat);

  return {
    disposables,
    update: (time) => {
      // Undulating gentle lake water surface
      const pos = waterGeo.attributes.position.array as Float32Array;
      const count = waterGeo.attributes.position.count;
      for (let i = 0; i < count; i++) {
        const x = pos[i * 3];
        const z = pos[i * 3 + 2];
        pos[i * 3 + 1] =
          Math.sin(x * 0.4 + time * 1.5) * 0.08 +
          Math.cos(z * 0.5 + time * 1.2) * 0.06;
      }
      waterGeo.attributes.position.needsUpdate = true;

      // Concentric wave propagation from intake well
      rippleRings.forEach((ring, idx) => {
        const phase = (time * 0.5 + idx * 0.25) % 1;
        const scale = 1.0 + phase * 6.5;
        ring.scale.set(scale, scale, scale);
        (ring.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.6 * (1 - phase));
      });

      // Floating buoy gentle bobbing
      buoy.position.y = damHeight - 0.4 + Math.sin(time * 2.0) * 0.05;
      buoyLed.position.y = damHeight + 0.25 + Math.sin(time * 2.0) * 0.05;
      buoyLedMat.color.setHex(Math.sin(time * 4) > 0 ? 0xfff200 : 0x000000);
    },
  };
}
