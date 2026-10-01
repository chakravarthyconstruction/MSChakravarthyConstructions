import * as THREE from 'three';
import { createConcreteTexture } from './textures';
import type { SceneInstance } from './ConstructionsScene';

export function buildCanalsScene(
  worldGroup: THREE.Group,
  camera: THREE.PerspectiveCamera
): SceneInstance {
  const disposables: { dispose: () => void }[] = [];

  camera.position.set(0, 8, 14);
  camera.lookAt(0, 0, -2);

  const concreteTex = createConcreteTexture();
  concreteTex.repeat.set(2, 6);
  disposables.push(concreteTex);

  const canalLength = 36;
  const bedWidth = 5.0;
  const slopeWidth = 4.8;
  const canalDepth = 2.4;

  // 1. Concrete Canal Bed
  const bedGeo = new THREE.PlaneGeometry(bedWidth, canalLength, 10, 30);
  bedGeo.rotateX(-Math.PI / 2);
  const concreteMat = new THREE.MeshStandardMaterial({
    map: concreteTex,
    roughness: 0.7,
    metalness: 0.1,
  });
  const bed = new THREE.Mesh(bedGeo, concreteMat);
  bed.position.y = -canalDepth;
  worldGroup.add(bed);
  disposables.push(bedGeo, concreteMat);

  // 2. Sloped Canal Bank Walls (1.5:1 side slope)
  const bankGeo = new THREE.PlaneGeometry(slopeWidth, canalLength, 10, 30);
  bankGeo.rotateX(-Math.PI / 2);
  disposables.push(bankGeo);

  // Left Bank
  const leftBank = new THREE.Mesh(bankGeo, concreteMat);
  leftBank.position.set(-bedWidth / 2 - 1.8, -canalDepth / 2, 0);
  leftBank.rotation.z = -0.58; // ~33 degree slope
  worldGroup.add(leftBank);

  // Right Bank
  const rightBank = new THREE.Mesh(bankGeo, concreteMat);
  rightBank.position.set(bedWidth / 2 + 1.8, -canalDepth / 2, 0);
  rightBank.rotation.z = 0.58;
  worldGroup.add(rightBank);

  // 3. Embankment Service Roadways on Both Banks
  const bermWidth = 5.0;
  const bermGeo = new THREE.PlaneGeometry(bermWidth, canalLength);
  bermGeo.rotateX(-Math.PI / 2);
  const bermMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.95 });
  disposables.push(bermGeo, bermMat);

  const leftBerm = new THREE.Mesh(bermGeo, bermMat);
  leftBerm.position.set(-bedWidth / 2 - 3.6 - bermWidth / 2, 0, 0);
  worldGroup.add(leftBerm);

  const rightBerm = new THREE.Mesh(bermGeo, bermMat);
  rightBerm.position.set(bedWidth / 2 + 3.6 + bermWidth / 2, 0, 0);
  worldGroup.add(rightBerm);

  // 4. Head Regulator / Sluice Gate Structure Spanning Canal
  const gateZ = -3.0;
  const regulatorGroup = new THREE.Group();
  regulatorGroup.position.set(0, 0, gateZ);
  worldGroup.add(regulatorGroup);

  // Central Pier & Abutments
  const pierGeo = new THREE.BoxGeometry(0.8, canalDepth + 2.8, 3.2);
  const pierMat = new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 0.65 });
  disposables.push(pierGeo, pierMat);

  // Left Abutment
  const leftAbutment = new THREE.Mesh(pierGeo, pierMat);
  leftAbutment.position.set(-bedWidth / 2 - 0.4, (-canalDepth + 2.8) / 2, 0);
  regulatorGroup.add(leftAbutment);

  // Center Dividing Pier
  const centerPier = new THREE.Mesh(pierGeo, pierMat);
  centerPier.position.set(0, (-canalDepth + 2.8) / 2, 0);
  regulatorGroup.add(centerPier);

  // Right Abutment
  const rightAbutment = new THREE.Mesh(pierGeo, pierMat);
  rightAbutment.position.set(bedWidth / 2 + 0.4, (-canalDepth + 2.8) / 2, 0);
  regulatorGroup.add(rightAbutment);

  // Overhead Service Bridge / Winch Deck
  const deckGeo = new THREE.BoxGeometry(bedWidth + 2.5, 0.4, 3.4);
  const deck = new THREE.Mesh(deckGeo, pierMat);
  deck.position.y = 2.0;
  regulatorGroup.add(deck);
  disposables.push(deckGeo);

  // Steel Radial Sluice Gates (2 bays)
  const gatePlateGeo = new THREE.BoxGeometry(2.1, 2.0, 0.15);
  const gateSteelMat = new THREE.MeshStandardMaterial({
    color: 0xf2c230, // Brand Yellow Structural Steel
    metalness: 0.75,
    roughness: 0.25,
  });
  disposables.push(gatePlateGeo, gateSteelMat);

  const leftGate = new THREE.Mesh(gatePlateGeo, gateSteelMat);
  leftGate.position.set(-1.45, -0.6, 0);
  regulatorGroup.add(leftGate);

  const rightGate = new THREE.Mesh(gatePlateGeo, gateSteelMat);
  rightGate.position.set(1.45, -0.6, 0);
  regulatorGroup.add(rightGate);

  // Sluice Winch Drums & Cable Hoists
  const drumGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.6, 16);
  drumGeo.rotateZ(Math.PI / 2);
  const drumMat = new THREE.MeshStandardMaterial({ color: 0x0e0e0e, metalness: 0.8 });
  disposables.push(drumGeo, drumMat);

  [-1.45, 1.45].forEach((gx) => {
    const drum = new THREE.Mesh(drumGeo, drumMat);
    drum.position.set(gx, 2.5, 0);
    regulatorGroup.add(drum);

    // Steel Hoist Cables
    const cableGeo = new THREE.CylinderGeometry(0.015, 0.015, 2.6, 6);
    const cableMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cable = new THREE.Mesh(cableGeo, cableMat);
    cable.position.set(gx, 0.8, 0);
    regulatorGroup.add(cable);
    disposables.push(cableGeo, cableMat);
  });

  // Metric Depth Staff Gauge Board on Left Wall
  const gaugeGeo = new THREE.PlaneGeometry(0.25, canalDepth);
  gaugeGeo.rotateY(Math.PI / 2);
  const gaugeCanvas = document.createElement('canvas');
  gaugeCanvas.width = 64;
  gaugeCanvas.height = 256;
  const gCtx = gaugeCanvas.getContext('2d')!;
  gCtx.fillStyle = '#ffffff';
  gCtx.fillRect(0, 0, 64, 256);
  gCtx.fillStyle = '#000000';
  for (let y = 0; y < 256; y += 16) {
    gCtx.fillRect(0, y, y % 32 === 0 ? 36 : 20, 3);
  }
  gCtx.font = 'bold 18px monospace';
  gCtx.fillText('4M', 32, 28);
  gCtx.fillText('2M', 32, 130);
  gCtx.fillText('0M', 32, 245);

  const gaugeTex = new THREE.CanvasTexture(gaugeCanvas);
  disposables.push(gaugeTex);
  const gaugeMat = new THREE.MeshBasicMaterial({ map: gaugeTex });
  const gauge = new THREE.Mesh(gaugeGeo, gaugeMat);
  gauge.position.set(-bedWidth / 2 - 0.02, -canalDepth / 2, 2);
  worldGroup.add(gauge);
  disposables.push(gaugeGeo, gaugeMat);

  // 5. Flowing Hydraulic Water Mesh
  const waterWidth = bedWidth + 2.8;
  const waterCols = 32;
  const waterRows = 48;
  const waterGeo = new THREE.PlaneGeometry(waterWidth, canalLength, waterCols, waterRows);
  waterGeo.rotateX(-Math.PI / 2);

  const waterMat = new THREE.MeshPhysicalMaterial({
    color: 0x0284c7, // Vibrant turquoise / azure hydraulic water
    roughness: 0.1,
    transmission: 0.7,
    transparent: true,
    opacity: 0.85,
    reflectivity: 0.8,
  });
  const waterMesh = new THREE.Mesh(waterGeo, waterMat);
  waterMesh.position.y = -0.55;
  worldGroup.add(waterMesh);
  disposables.push(waterGeo, waterMat);

  // 6. Churning Hydraulic Foam / Wake Downstream of Sluice Gates
  const foamCount = 110;
  const foamGeo = new THREE.BufferGeometry();
  const foamPositions = new Float32Array(foamCount * 3);
  for (let i = 0; i < foamCount; i++) {
    foamPositions[i * 3] = (Math.random() - 0.5) * (bedWidth + 1.5);
    foamPositions[i * 3 + 1] = -0.52 + Math.random() * 0.1;
    foamPositions[i * 3 + 2] = gateZ + 1.2 + Math.random() * 8.0;
  }
  foamGeo.setAttribute('position', new THREE.Float32BufferAttribute(foamPositions, 3));
  const foamMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.18,
    transparent: true,
    opacity: 0.8,
  });
  const foamPoints = new THREE.Points(foamGeo, foamMat);
  worldGroup.add(foamPoints);
  disposables.push(foamGeo, foamMat);

  return {
    disposables,
    update: (time) => {
      // Flowing water wave vertex perturbation
      const pos = waterGeo.attributes.position.array as Float32Array;
      const count = waterGeo.attributes.position.count;
      for (let i = 0; i < count; i++) {
        const x = pos[i * 3];
        const z = pos[i * 3 + 2];
        pos[i * 3 + 1] =
          Math.sin(z * 0.75 - time * 5.0) * 0.07 +
          Math.cos(x * 1.8 + time * 3.0) * 0.04;
      }
      waterGeo.attributes.position.needsUpdate = true;

      // Foam particles surging downstream
      const fPos = foamGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < foamCount; i++) {
        fPos[i * 3 + 2] += 0.14;
        if (fPos[i * 3 + 2] > gateZ + 9.0) {
          fPos[i * 3 + 2] = gateZ + 1.0;
          fPos[i * 3] = (Math.random() - 0.5) * (bedWidth + 1.5);
        }
      }
      foamGeo.attributes.position.needsUpdate = true;

      // Subtle gate regulator oscillation (sluice gate height adjustment)
      leftGate.position.y = -0.6 + Math.sin(time * 0.5) * 0.15;
      rightGate.position.y = -0.6 + Math.sin(time * 0.5 + 1) * 0.15;
    },
  };
}
