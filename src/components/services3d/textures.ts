import * as THREE from 'three';

/**
 * Procedural PBR Texture Generators for Civil Engineering Prototypes
 * These generate high-quality textures on in-memory canvas elements
 * ensuring zero network latency, instant rendering, and realistic surfaces.
 */

// 1. Concrete Texture with Formwork Lines and Aggregate Grain
export function createConcreteTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Base concrete gray
  ctx.fillStyle = '#6b7280';
  ctx.fillRect(0, 0, 512, 512);

  // Noise / Aggregate speckles
  const imgData = ctx.getImageData(0, 0, 512, 512);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 35;
    data[i] = Math.min(255, Math.max(0, data[i] + noise));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
  }
  ctx.putImageData(imgData, 0, 0);

  // Formwork shuttering panel seams
  ctx.strokeStyle = 'rgba(30, 35, 45, 0.45)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let y = 0; y <= 512; y += 128) {
    ctx.moveTo(0, y);
    ctx.lineTo(512, y);
  }
  for (let x = 0; x <= 512; x += 256) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 512);
  }
  ctx.stroke();

  // Formwork tie holes (circular anchor marks)
  ctx.fillStyle = '#22252a';
  for (let y = 64; y < 512; y += 128) {
    for (let x = 64; x < 512; x += 128) {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// 2. Asphalt Highway Texture with Markings and Aggregate Grain
export function createAsphaltTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Dark bitumen base
  ctx.fillStyle = '#202224';
  ctx.fillRect(0, 0, 512, 512);

  // Asphalt gravel aggregate texture
  const imgData = ctx.getImageData(0, 0, 512, 512);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 40;
    data[i] = Math.min(255, Math.max(0, data[i] + noise));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
  }
  ctx.putImageData(imgData, 0, 0);

  // Edge solid white safety lines
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(32, 0);
  ctx.lineTo(32, 512);
  ctx.moveTo(480, 0);
  ctx.lineTo(480, 512);
  ctx.stroke();

  // Lane dash line (white)
  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth = 8;
  ctx.setLineDash([48, 48]);
  ctx.beginPath();
  ctx.moveTo(180, 0);
  ctx.lineTo(180, 512);
  ctx.stroke();

  // Center double yellow median lines
  ctx.strokeStyle = '#f2c230';
  ctx.lineWidth = 8;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(250, 0);
  ctx.lineTo(250, 512);
  ctx.moveTo(262, 0);
  ctx.lineTo(262, 512);
  ctx.stroke();

  // Right lane dash line
  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth = 8;
  ctx.setLineDash([48, 48]);
  ctx.beginPath();
  ctx.moveTo(332, 0);
  ctx.lineTo(332, 512);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// 3. Stone Masonry Texture (Coursed Rubble Granite Blocks with Mortar Joints)
export function createStoneMasonryTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Mortar gray background
  ctx.fillStyle = '#52525b';
  ctx.fillRect(0, 0, 512, 512);

  // Generate varied stone blocks in rows
  const rowHeight = 42;
  const numRows = Math.ceil(512 / rowHeight);

  for (let r = 0; r < numRows; r++) {
    const y = r * rowHeight + 3;
    let x = (r % 2 === 0 ? 0 : -35);

    while (x < 512) {
      const stoneWidth = 60 + Math.floor(Math.random() * 55);
      const shade = 90 + Math.floor(Math.random() * 50);
      const rColor = shade + Math.floor(Math.random() * 15);
      const gColor = shade + Math.floor(Math.random() * 10);
      const bColor = shade - Math.floor(Math.random() * 10);

      ctx.fillStyle = `rgb(${rColor}, ${gColor}, ${bColor})`;
      ctx.fillRect(x + 3, y, stoneWidth - 6, rowHeight - 6);

      // Stone chiseling highlights
      ctx.strokeStyle = `rgba(255, 255, 255, 0.15)`;
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 5, y + 2, stoneWidth - 10, rowHeight - 10);

      x += stoneWidth;
    }
  }

  // Weathering noise
  const imgData = ctx.getImageData(0, 0, 512, 512);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 30;
    data[i] = Math.min(255, Math.max(0, data[i] + noise));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
  }
  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// 4. Rip-Rap Boulder & Earth Strata Texture
export function createRipRapTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#44403c';
  ctx.fillRect(0, 0, 256, 256);

  // Large angular boulders
  for (let i = 0; i < 70; i++) {
    const bx = Math.random() * 256;
    const by = Math.random() * 256;
    const br = 12 + Math.random() * 18;
    const stoneTone = 70 + Math.floor(Math.random() * 60);

    ctx.fillStyle = `rgb(${stoneTone}, ${stoneTone - 5}, ${stoneTone - 10})`;
    ctx.beginPath();
    ctx.arc(bx, by, br, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}
