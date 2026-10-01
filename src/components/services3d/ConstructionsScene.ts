import * as THREE from 'three';
import { createConcreteTexture } from './textures';

export interface SceneInstance {
  disposables: { dispose: () => void }[];
  update: (time: number, delta: number) => void;
  reset?: () => void;
}

export function buildConstructionsScene(
  worldGroup: THREE.Group,
  camera: THREE.PerspectiveCamera
): SceneInstance {
  const disposables: { dispose: () => void }[] = [];

  camera.position.set(11, 10, 16);
  camera.lookAt(0, 3.5, 0);

  const concreteTex = createConcreteTexture();
  concreteTex.repeat.set(2, 2);
  disposables.push(concreteTex);

  // 1. Excavated Ground & Raft Foundation Slab
  const groundGeo = new THREE.PlaneGeometry(28, 28);
  groundGeo.rotateX(-Math.PI / 2);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.95 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.position.y = -0.01;
  worldGroup.add(ground);
  disposables.push(groundGeo, groundMat);

  const raftGeo = new THREE.BoxGeometry(16, 0.8, 14);
  const raftMat = new THREE.MeshStandardMaterial({
    map: concreteTex,
    roughness: 0.8,
    metalness: 0.1,
  });
  const raft = new THREE.Mesh(raftGeo, raftMat);
  raft.position.y = 0.4;
  worldGroup.add(raft);
  disposables.push(raftGeo, raftMat);

  // Raft surveyor grid
  const grid = new THREE.GridHelper(16, 16, 0xf2c230, 0x3f3f46);
  grid.position.y = 0.82;
  worldGroup.add(grid);
  disposables.push(grid);

  // 2. 3-Story Concrete Building Frame (Columns + Beams + Slabs)
  const stories = 3;
  const storyHeight = 2.4;
  const colGeo = new THREE.BoxGeometry(0.55, storyHeight * stories, 0.55);
  const colMat = new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 0.7 });
  disposables.push(colGeo, colMat);

  const gridX = [-5, -1.7, 1.7, 5];
  const gridZ = [-4.5, 0, 4.5];

  // Erect 12 RCC Columns
  gridX.forEach((gx) => {
    gridZ.forEach((gz) => {
      const col = new THREE.Mesh(colGeo, colMat);
      col.position.set(gx, 0.8 + (storyHeight * stories) / 2, gz);
      worldGroup.add(col);

      // Rebar starter ties at the top of each column
      const rebarGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.8, 8);
      const rebarMat = new THREE.MeshStandardMaterial({ color: 0xf2c230, metalness: 0.9, roughness: 0.2 });
      [-0.15, 0.15].forEach((rx) => {
        [-0.15, 0.15].forEach((rz) => {
          const rebar = new THREE.Mesh(rebarGeo, rebarMat);
          rebar.position.set(gx + rx, 0.8 + storyHeight * stories + 0.4, gz + rz);
          worldGroup.add(rebar);
        });
      });
      disposables.push(rebarGeo, rebarMat);
    });
  });

  // Floor Slabs & Girders for each story
  const slabGeo = new THREE.BoxGeometry(11.8, 0.3, 10.8);
  const slabMat = new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 0.75 });
  disposables.push(slabGeo, slabMat);

  for (let s = 1; s <= stories; s++) {
    const slabY = 0.8 + s * storyHeight;
    const slab = new THREE.Mesh(slabGeo, slabMat);
    slab.position.set(0, slabY - 0.15, 0);
    worldGroup.add(slab);

    // Cantilever Balcony / Formwork Shuttering on Story 2 & 3
    if (s >= 2) {
      const formworkGeo = new THREE.BoxGeometry(12.4, 0.05, 11.4);
      const formworkMat = new THREE.MeshStandardMaterial({ color: 0xf2c230, roughness: 0.4 });
      const formwork = new THREE.Mesh(formworkGeo, formworkMat);
      formwork.position.set(0, slabY - 0.32, 0);
      worldGroup.add(formwork);
      disposables.push(formworkGeo, formworkMat);
    }
  }

  // Modern Glass Curtain Wall Infill on Story 1 & 2
  const glassGeo = new THREE.PlaneGeometry(3.2, storyHeight - 0.3);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x0284c7,
    roughness: 0.1,
    transmission: 0.75,
    thickness: 0.5,
    transparent: true,
    opacity: 0.65,
    reflectivity: 0.9,
  });
  disposables.push(glassGeo, glassMat);

  [-3.35, 0, 3.35].forEach((gx) => {
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(gx, 0.8 + storyHeight / 2, 4.52);
    worldGroup.add(glass);
  });

  // 3. Steel Scaffolding with Green Safety Netting on Right Facade
  const scaffoldGroup = new THREE.Group();
  worldGroup.add(scaffoldGroup);
  scaffoldGroup.position.set(5.7, 0.8, 0);

  const tubeGeo = new THREE.CylinderGeometry(0.04, 0.04, storyHeight * stories, 8);
  const tubeMat = new THREE.MeshStandardMaterial({ color: 0xa1a1aa, metalness: 0.8, roughness: 0.3 });
  disposables.push(tubeGeo, tubeMat);

  [-4, 0, 4].forEach((sz) => {
    [0, 0.8].forEach((sx) => {
      const tube = new THREE.Mesh(tubeGeo, tubeMat);
      tube.position.set(sx, (storyHeight * stories) / 2, sz);
      scaffoldGroup.add(tube);
    });
  });

  // Green Safety Netting
  const netGeo = new THREE.PlaneGeometry(0.8, storyHeight * stories);
  netGeo.rotateY(Math.PI / 2);
  const netMat = new THREE.MeshStandardMaterial({
    color: 0x16a34a,
    transparent: true,
    opacity: 0.45,
    side: THREE.DoubleSide,
  });
  const netMesh = new THREE.Mesh(netGeo, netMat);
  netMesh.position.set(0.82, (storyHeight * stories) / 2, 0);
  scaffoldGroup.add(netMesh);
  disposables.push(netGeo, netMat);

  // 4. Heavy Yellow Tower Crane on Roof
  const craneGroup = new THREE.Group();
  const roofLevel = 0.8 + stories * storyHeight;
  craneGroup.position.set(-2.5, roofLevel, -2.5);
  worldGroup.add(craneGroup);

  // Crane Mast (Lattice tower)
  const mastHeight = 7.0;
  const mastGeo = new THREE.BoxGeometry(0.8, mastHeight, 0.8);
  const craneMat = new THREE.MeshStandardMaterial({ color: 0xf2c230, metalness: 0.6, roughness: 0.3 });
  const mast = new THREE.Mesh(mastGeo, craneMat);
  mast.position.y = mastHeight / 2;
  craneGroup.add(mast);
  disposables.push(mastGeo, craneMat);

  // Rotating Jib & Operator Cab Group
  const slewGroup = new THREE.Group();
  slewGroup.position.y = mastHeight;
  craneGroup.add(slewGroup);

  // Operator Cab
  const cabGeo = new THREE.BoxGeometry(0.9, 1.1, 0.9);
  const cabMat = new THREE.MeshStandardMaterial({ color: 0x0e0e0e });
  const cab = new THREE.Mesh(cabGeo, cabMat);
  cab.position.set(0.5, 0.4, 0);
  slewGroup.add(cab);
  disposables.push(cabGeo, cabMat);

  // Crane Apex Pyramid
  const apexGeo = new THREE.ConeGeometry(0.7, 1.8, 4);
  apexGeo.rotateY(Math.PI / 4);
  const apex = new THREE.Mesh(apexGeo, craneMat);
  apex.position.y = 1.0;
  slewGroup.add(apex);
  disposables.push(apexGeo);

  // Horizontal Working Jib (Boom)
  const jibLength = 11.0;
  const jibGeo = new THREE.BoxGeometry(0.45, 0.45, jibLength);
  const jib = new THREE.Mesh(jibGeo, craneMat);
  jib.position.set(0, 0.2, jibLength / 2 - 2.0);
  slewGroup.add(jib);
  disposables.push(jibGeo);

  // Counter-Jib & Concrete Counterweights
  const cJibGeo = new THREE.BoxGeometry(0.45, 0.45, 3.5);
  const cJib = new THREE.Mesh(cJibGeo, craneMat);
  cJib.position.set(0, 0.2, -2.5);
  slewGroup.add(cJib);
  disposables.push(cJibGeo);

  const counterweightGeo = new THREE.BoxGeometry(1.2, 0.9, 1.4);
  const cwMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.9 });
  const counterweight = new THREE.Mesh(counterweightGeo, cwMat);
  counterweight.position.set(0, 0.6, -3.2);
  slewGroup.add(counterweight);
  disposables.push(counterweightGeo, cwMat);

  // Hoist Trolley, Cable & Precast Concrete Beam
  const trolleyGeo = new THREE.BoxGeometry(0.5, 0.3, 0.6);
  const trolley = new THREE.Mesh(trolleyGeo, cabMat);
  trolley.position.set(0, -0.1, 5.5);
  slewGroup.add(trolley);
  disposables.push(trolleyGeo);

  const cableGeo = new THREE.CylinderGeometry(0.015, 0.015, 3.8, 6);
  const cableMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cable = new THREE.Mesh(cableGeo, cableMat);
  cable.position.set(0, -2.0, 5.5);
  slewGroup.add(cable);
  disposables.push(cableGeo, cableMat);

  // Hoisted Precast Concrete Beam
  const hoistBeamGeo = new THREE.BoxGeometry(3.5, 0.4, 0.4);
  const hoistBeam = new THREE.Mesh(hoistBeamGeo, colMat);
  hoistBeam.position.set(0, -3.9, 5.5);
  slewGroup.add(hoistBeam);
  disposables.push(hoistBeamGeo);

  // 5. Transit Concrete Mixer Truck on Ground
  const mixerGroup = new THREE.Group();
  mixerGroup.position.set(6.2, 0.4, -5.5);
  mixerGroup.rotation.y = -Math.PI / 4;
  worldGroup.add(mixerGroup);

  // Chassis
  const truckChassisGeo = new THREE.BoxGeometry(1.6, 0.5, 4.2);
  const chassisMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.6 });
  const chassis = new THREE.Mesh(truckChassisGeo, chassisMat);
  chassis.position.y = 0.5;
  mixerGroup.add(chassis);
  disposables.push(truckChassisGeo, chassisMat);

  // Cabin
  const truckCabGeo = new THREE.BoxGeometry(1.5, 1.2, 1.2);
  const cabTruckMat = new THREE.MeshStandardMaterial({ color: 0xf2c230 });
  const truckCab = new THREE.Mesh(truckCabGeo, cabTruckMat);
  truckCab.position.set(0, 1.2, 1.2);
  mixerGroup.add(truckCab);
  disposables.push(truckCabGeo, cabTruckMat);

  // Rotating Concrete Drum
  const drumGeo = new THREE.CylinderGeometry(0.8, 0.6, 2.4, 16);
  drumGeo.rotateX(Math.PI / 2);
  drumGeo.rotateZ(0.2);
  const drumMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
  const drum = new THREE.Mesh(drumGeo, drumMat);
  drum.position.set(0, 1.4, -0.8);
  mixerGroup.add(drum);
  disposables.push(drumGeo, drumMat);

  return {
    disposables,
    update: (time) => {
      // Rotate crane slewing arm smoothly back and forth
      slewGroup.rotation.y = Math.sin(time * 0.45) * 0.85;

      // Slight pendulum swing on hoisted beam
      hoistBeam.rotation.y = Math.sin(time * 1.5) * 0.08;
      hoistBeam.position.y = -3.9 + Math.sin(time * 0.8) * 0.25;
      cable.position.y = -2.0 + (Math.sin(time * 0.8) * 0.25) / 2;

      // Rotate concrete mixer drum
      drum.rotation.z += 0.05;
    },
  };
}
