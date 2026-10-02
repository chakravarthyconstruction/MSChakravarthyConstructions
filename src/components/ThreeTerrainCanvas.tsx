import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeTerrainCanvasProps {
  className?: string;
}

type SimulationMode = 'topography' | 'hydraulics' | 'highway';

export const ThreeTerrainCanvas: React.FC<ThreeTerrainCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<SimulationMode>('topography');
  const [hoveredCoords, setHoveredCoords] = useState({ x: '77.6006° E', y: '14.6819° N', elev: '412.5m' });
  const activeModeRef = useRef<SimulationMode>(activeMode);
  useEffect(() => {
    activeModeRef.current = activeMode;
  }, [activeMode]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e0e0e, 0.025);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 14, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Create 3D Topographic Mesh
    const gridCols = 54;
    const gridRows = 54;
    const geometry = new THREE.PlaneGeometry(32, 32, gridCols, gridRows);
    geometry.rotateX(-Math.PI / 2);

    // Store base vertices
    const count = geometry.attributes.position.count;
    const originalPositions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      originalPositions[i] = geometry.attributes.position.array[i];
    }

    // Wireframe Mesh Material in Gold / Yellow
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xf2c230,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const terrainMesh = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(terrainMesh);

    // Glowing Node Points at vertices
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xfff200,
      size: 0.12,
      transparent: true,
      opacity: 0.8,
    });
    const pointsMesh = new THREE.Points(geometry, pointsMaterial);
    scene.add(pointsMesh);

    // Add ambient and subtle directional light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = nx;
      mouse.targetY = ny;

      // Update HUD coordinates
      const lon = (77.6006 + nx * 0.04).toFixed(4);
      const lat = (14.6819 + ny * 0.04).toFixed(4);
      const elev = (410 + (nx + ny) * 8 + 4).toFixed(1);
      setHoveredCoords({ x: `${lon}° E`, y: `${lat}° N`, elev: `${elev}m` });
    };

    container.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getElapsedTime();
      const positions = geometry.attributes.position.array as Float32Array;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const mode = activeModeRef.current;

      if (!prefersReducedMotion) {
        for (let i = 0; i < count; i++) {
          const ix = originalPositions[i * 3];
          const iz = originalPositions[i * 3 + 2];

          let elevation = 0;
          if (mode === 'topography') {
            // Complex multi-layered elevation contour
            elevation =
              Math.sin(ix * 0.35 + delta * 0.8) * 1.2 +
              Math.cos(iz * 0.35 + delta * 0.6) * 1.2 +
              Math.sin((ix + iz) * 0.2 + delta * 0.4) * 0.8;

            // Ripple from cursor
            const dist = Math.sqrt(Math.pow(ix - mouse.x * 12, 2) + Math.pow(iz - mouse.y * -12, 2));
            elevation += Math.sin(dist * 1.5 - delta * 4) * Math.max(0, 1.8 - dist * 0.3);
          } else if (mode === 'hydraulics') {
            // Flowing canal channel wave
            elevation =
              Math.sin(iz * 0.8 - delta * 2.8) * 1.4 +
              Math.sin(ix * 0.5) * 0.6;
          } else {
            // Highway grading alignment profile
            elevation =
              Math.cos(ix * 0.4 + delta * 0.5) * 1.5 +
              Math.sin(iz * 0.2) * 0.4;
          }

          positions[i * 3 + 1] = elevation;
        }

        geometry.attributes.position.needsUpdate = true;
      }

      // Camera orbital wobble based on mouse
      camera.position.x = mouse.x * 4;
      camera.position.y = 14 + mouse.y * 2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMaterial.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-[380px] sm:h-[440px] rounded-[28px] sm:rounded-[36px] bg-[#0E0E0E] overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between ${className}`}>
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 cursor-crosshair" />

      {/* Top HUD Controls */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E] animate-ping" />
          <span className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
            3D Civil Terrain Simulator
          </span>
        </div>

        {/* Mode Selector Pill Buttons */}
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/10 pointer-events-auto">
          <button
            type="button"
            onClick={() => setActiveMode('topography')}
            className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold transition-all ${
              activeMode === 'topography'
                ? 'bg-[#C8102E] text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Topography
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('hydraulics')}
            className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold transition-all ${
              activeMode === 'hydraulics'
                ? 'bg-[#C8102E] text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Canal Wave
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('highway')}
            className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold transition-all ${
              activeMode === 'highway'
                ? 'bg-[#C8102E] text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Road Grade
          </button>
        </div>
      </div>

      {/* Bottom HUD Coordinates & Instructions */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 pointer-events-none">
        <div>
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
            SURVEY STATION / ANANTAPUR SECTOR
          </div>
          <div className="flex items-center gap-4 text-xs font-mono font-bold text-white mt-1">
            <span>LON: <span className="text-red-400">{hoveredCoords.x}</span></span>
            <span>LAT: <span className="text-red-400">{hoveredCoords.y}</span></span>
            <span>ELEV: <span className="text-red-400">{hoveredCoords.elev}</span></span>
          </div>
        </div>

        <div className="text-[11px] font-mono text-neutral-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          Move cursor to interact with topographic contour
        </div>
      </div>
    </div>
  );
};
