import * as THREE from 'three';
import { createStoneMasonryTexture, createRipRapTexture } from './textures';
import type { SceneInstance } from './ConstructionsScene';

export function buildCheckDamsScene(
  worldGroup: THREE.Group,
  camera: THREE.PerspectiveCamera
): SceneInstance {
  const disposables: { dispose: () => void }[] = [];

  camera.position.set(0, 7, 14);
  camera.lookAt(0, 1.2, 0);

  const stoneTex = createStoneMasonryTexture();
  stoneTex.repeat.set(3, 2);
  disposables.push(stoneTex);

  const riprapTex = createRipRapTexture();
  disposables.push(riprapTex);

  // 1. Natural Ravine Riverbed & Rock Canyon Flanks
  const canyonGeo = new THREE.PlaneGeometry(24, 28, 20, 20);
  canyonGeo.rotateX(-Math.PI / 2);
  const canyonMat = new THREE.MeshStandardMaterial({
    color: 0x27272a,
    roughness: 0.95,
  });
  const canyon = new THREE.Mesh(canyonGeo, canyonMat);
  canyon.position.y = -0.5;
  worldGroup.add(canyon);
  disposables.push(canyonGeo, canyonMat);

  // Left & Right Canyon Rock Abutments
  const flankGeo = new THREE.BoxGeometry(6, 6, 24);
  const flankMat = new THREE.MeshStandardMaterial({
    map: riprapTex,
    roughness: 0.95,
  });
  disposables.push(flankGeo, flankMat);

  const leftFlank = new THREE.Mesh(flankGeo, flankMat);
  leftFlank.position.set(-10, 2.0, 0);
  worldGroup.add(leftFlank);

  const rightFlank = new THREE.Mesh(flankGeo, flankMat);
  rightFlank.position.set(10, 2.0, 0);
  worldGroup.add(rightFlank);

  // 2. Stepped Gravity Stone Masonry Check Dam Wall
  // Base Wall (Level 1)
  const baseDamGeo = new THREE.BoxGeometry(14, 1.6, 4.2);
  const stoneMat = new THREE.MeshStandardMaterial({
    map: stoneTex,
    roughness: 0.85,
    metalness: 0.1,
  });
  const baseDam = new THREE.Mesh(baseDamGeo, stoneMat);
  baseDam.position.set(0, 0.8, 0);
  worldGroup.add(baseDam);
  disposables.push(baseDamGeo, stoneMat);

  // Middle Tier (Tier 2 - Stepped Upstream)
  const midDamGeo = new THREE.BoxGeometry(14, 1.4, 2.8);
  const midDam = new THREE.Mesh(midDamGeo, stoneMat);
  midDam.position.set(0, 2.3, -0.6);
  worldGroup.add(midDam);
  disposables.push(midDamGeo);

  // Top Weir Crest (Tier 3 - With central overflow notch)
  const crestWingsGeo = new THREE.BoxGeometry(3.5, 0.8, 1.8);
  disposables.push(crestWingsGeo);

  const leftWing = new THREE.Mesh(crestWingsGeo, stoneMat);
  leftWing.position.set(-5.25, 3.4, -1.0);
  worldGroup.add(leftWing);

  const rightWing = new THREE.Mesh(crestWingsGeo, stoneMat);
  rightWing.position.set(5.25, 3.4, -1.0);
  worldGroup.add(rightWing);

  // Central Overflow Weir Notch (Lowered to allow water spillway)
  const notchGeo = new THREE.BoxGeometry(7.0, 0.35, 1.8);
  const notchMat = new THREE.MeshStandardMaterial({ color: 0xf2c230, roughness: 0.6 });
  const notch = new THREE.Mesh(notchGeo, notchMat);
  notch.position.set(0, 3.175, -1.0);
  worldGroup.add(notch);
  disposables.push(notchGeo, notchMat);

  // 3. Upstream Retained Water Reservoir Pool
  const upWaterGeo = new THREE.PlaneGeometry(13.6, 12, 20, 20);
  upWaterGeo.rotateX(-Math.PI / 2);
  const upWaterMat = new THREE.MeshPhysicalMaterial({
    color: 0x0284c7, // Clear reservoir turquoise
    roughness: 0.15,
    transmission: 0.7,
    transparent: true,
    opacity: 0.85,
    reflectivity: 0.8,
  });
  const upWater = new THREE.Mesh(upWaterGeo, upWaterMat);
  upWater.position.set(0, 3.15, -7.0);
  worldGroup.add(upWater);
  disposables.push(upWaterGeo, upWaterMat);

  // 4. Cascading Multi-Tier Waterfall Sheet
  // Top crest cascade waterfall
  const fallWidth = 6.8;
  const fallGeo = new THREE.PlaneGeometry(fallWidth, 3.8, 20, 20);
  const fallMat = new THREE.MeshPhysicalMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.85,
    roughness: 0.1,
    transmission: 0.6,
  });
  const waterfall = new THREE.Mesh(fallGeo, fallMat);
  waterfall.position.set(0, 1.85, 0.45);
  waterfall.rotation.x = 0.58; // Cascading angle over stepped stones
  worldGroup.add(waterfall);
  disposables.push(fallGeo, fallMat);

  // 5. Downstream Stilling Basin / Stored Recharge Pool
  const downWaterGeo = new THREE.PlaneGeometry(14, 10);
  downWaterGeo.rotateX(-Math.PI / 2);
  const downWaterMat = new THREE.MeshPhysicalMaterial({
    color: 0x0369a1,
    roughness: 0.2,
    transmission: 0.6,
    transparent: true,
    opacity: 0.8,
  });
  const downWater = new THREE.Mesh(downWaterGeo, downWaterMat);
  downWater.position.set(0, 0.1, 7.0);
  worldGroup.add(downWater);
  disposables.push(downWaterGeo, downWaterMat);

  // Downstream Boulder Rip-Rap Apron (Energy Dissipation)
  const apronGeo = new THREE.PlaneGeometry(14, 4);
  apronGeo.rotateX(-Math.PI / 2);
  const apronMat = new THREE.MeshStandardMaterial({ map: riprapTex, roughness: 1.0 });
  const apron = new THREE.Mesh(apronGeo, apronMat);
  apron.position.set(0, 0.05, 3.0);
  worldGroup.add(apron);
  disposables.push(apronGeo, apronMat);

  // 6. Dense Boiling White Foam & Splashing Mist Droplets
  const splashCount = 140;
  const splashGeo = new THREE.BufferGeometry();
  const splashPositions = new Float32Array(splashCount * 3);
  for (let i = 0; i < splashCount; i++) {
    splashPositions[i * 3] = (Math.random() - 0.5) * (fallWidth + 0.8);
    splashPositions[i * 3 + 1] = 0.15 + Math.random() * 0.9;
    splashPositions[i * 3 + 2] = 1.6 + Math.random() * 1.8;
  }
  splashGeo.setAttribute('position', new THREE.Float32BufferAttribute(splashPositions, 3));
  const splashMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.16,
    transparent: true,
    opacity: 0.9,
  });
  const splash = new THREE.Points(splashGeo, splashMat);
  worldGroup.add(splash);
  disposables.push(splashGeo, splashMat);

  return {
    disposables,
    update: (time) => {
      // Dynamic cascading water sheet displacement
      const fPos = fallGeo.attributes.position.array as Float32Array;
      const count = fallGeo.attributes.position.count;
      for (let i = 0; i < count; i++) {
        const y = fPos[i * 3 + 1];
        fPos[i * 3 + 2] = Math.sin(y * 4.0 - time * 12.0) * 0.08;
      }
      fallGeo.attributes.position.needsUpdate = true;

      // Upstream water gentle ripples
      const uPos = upWaterGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < upWaterGeo.attributes.position.count; i++) {
        const x = uPos[i * 3];
        const z = uPos[i * 3 + 2];
        uPos[i * 3 + 1] =
          Math.sin(x * 1.5 + time * 2.0) * 0.03 +
          Math.cos(z * 1.2 + time * 2.5) * 0.03;
      }
      upWaterGeo.attributes.position.needsUpdate = true;

      // Boiling splash particles turbulence
      const sPos = splashGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < splashCount; i++) {
        sPos[i * 3 + 1] += Math.sin(time * 14 + i) * 0.04;
        if (sPos[i * 3 + 1] < 0.1) sPos[i * 3 + 1] = 0.2 + Math.random() * 0.6;
      }
      splashGeo.attributes.position.needsUpdate = true;
    },
  };
}
