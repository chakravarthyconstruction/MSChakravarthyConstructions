import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, RotateCw, Eye } from 'lucide-react';
import { buildConstructionsScene } from './services3d/ConstructionsScene';
import { buildRoadsScene } from './services3d/RoadsScene';
import { buildCanalsScene } from './services3d/CanalsScene';
import { buildReservoirsScene } from './services3d/ReservoirsScene';
import { buildCheckDamsScene } from './services3d/CheckDamsScene';
import type { SceneInstance } from './services3d/ConstructionsScene';

export type ServiceId =
  | 'constructions'
  | 'civil-constructions'
  | 'roads'
  | 'roads-construction'
  | 'canals'
  | 'canals-construction'
  | 'reservoirs'
  | 'reservoirs-construction'
  | 'checkdams'
  | 'checkdams-construction';

interface ServiceScene3DProps {
  serviceId: ServiceId | string;
  className?: string;
  showControls?: boolean;
}

interface ServiceMetadata {
  title: string;
  badge: string;
  hudItems: { label: string; value: string }[];
}

const SERVICE_META: Record<string, ServiceMetadata> = {
  constructions: {
    title: '3-Story RCC Framed Skeleton & Slewing Tower Crane',
    badge: 'RCC Construction 3D',
    hudItems: [
      { label: 'GRADE', value: 'M35 Concrete' },
      { label: 'CRANE', value: 'Lattice Tower' },
      { label: 'REBAR', value: 'Fe550D TMT' },
      { label: 'STATUS', value: 'Active Pouring' },
    ],
  },
  'civil-constructions': {
    title: '3-Story RCC Framed Skeleton & Slewing Tower Crane',
    badge: 'RCC Construction 3D',
    hudItems: [
      { label: 'GRADE', value: 'M35 Concrete' },
      { label: 'CRANE', value: 'Lattice Tower' },
      { label: 'REBAR', value: 'Fe550D TMT' },
      { label: 'STATUS', value: 'Active Pouring' },
    ],
  },
  roads: {
    title: '4-Lane Asphalt Expressway & Tandem Compactor',
    badge: 'Highway Corridor 3D',
    hudItems: [
      { label: 'HIGHWAY', value: 'NH-44 Corridor' },
      { label: 'COMPACT', value: '98.8% Density' },
      { label: 'PAVEMENT', value: 'VG-30 Bitumen' },
      { label: 'SPEED', value: '100 km/h Design' },
    ],
  },
  'roads-construction': {
    title: '4-Lane Asphalt Expressway & Tandem Compactor',
    badge: 'Highway Corridor 3D',
    hudItems: [
      { label: 'HIGHWAY', value: 'NH-44 Corridor' },
      { label: 'COMPACT', value: '98.8% Density' },
      { label: 'PAVEMENT', value: 'VG-30 Bitumen' },
      { label: 'SPEED', value: '100 km/h Design' },
    ],
  },
  canals: {
    title: 'Trapezoidal Hydraulic Canal & Dual Sluice Gates',
    badge: 'Hydraulic Canal 3D',
    hudItems: [
      { label: 'PRISM', value: 'Trapezoidal 1.5:1' },
      { label: 'DISCHARGE', value: '85.0 m³/s' },
      { label: 'LINING', value: 'M15 Concrete' },
      { label: 'SLOPE', value: '1 in 5,000' },
    ],
  },
  'canals-construction': {
    title: 'Trapezoidal Hydraulic Canal & Dual Sluice Gates',
    badge: 'Hydraulic Canal 3D',
    hudItems: [
      { label: 'PRISM', value: 'Trapezoidal 1.5:1' },
      { label: 'DISCHARGE', value: '85.0 m³/s' },
      { label: 'LINING', value: 'M15 Concrete' },
      { label: 'SLOPE', value: '1 in 5,000' },
    ],
  },
  reservoirs: {
    title: 'Zoned Earthen Embankment & Intake Tower Reservoir',
    badge: 'Water Reservoir 3D',
    hudItems: [
      { label: 'STORAGE', value: '2.45 TMC Balancing' },
      { label: 'CORE', value: 'Clay Cut-Off' },
      { label: 'ARMOR', value: 'Boulder Rip-Rap' },
      { label: 'TELEMETRY', value: 'Active Buoy' },
    ],
  },
  'reservoirs-construction': {
    title: 'Zoned Earthen Embankment & Intake Tower Reservoir',
    badge: 'Water Reservoir 3D',
    hudItems: [
      { label: 'STORAGE', value: '2.45 TMC Balancing' },
      { label: 'CORE', value: 'Clay Cut-Off' },
      { label: 'ARMOR', value: 'Boulder Rip-Rap' },
      { label: 'TELEMETRY', value: 'Active Buoy' },
    ],
  },
  checkdams: {
    title: 'Stone Masonry Gravity Dam & Cascading Waterfall Spillway',
    badge: 'Check Dam Weir 3D',
    hudItems: [
      { label: 'WALL', value: 'RR Stone Masonry' },
      { label: 'WEIR', value: 'Stepped Ogee' },
      { label: 'HEAD', value: '0.75m Cascade' },
      { label: 'RECHARGE', value: 'Subsurface Strata' },
    ],
  },
  'checkdams-construction': {
    title: 'Stone Masonry Gravity Dam & Cascading Waterfall Spillway',
    badge: 'Check Dam Weir 3D',
    hudItems: [
      { label: 'WALL', value: 'RR Stone Masonry' },
      { label: 'WEIR', value: 'Stepped Ogee' },
      { label: 'HEAD', value: '0.75m Cascade' },
      { label: 'RECHARGE', value: 'Subsurface Strata' },
    ],
  },
};

export const ServiceScene3D: React.FC<ServiceScene3DProps> = ({
  serviceId,
  className = '',
  showControls = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isWireframe, setIsWireframe] = useState(false);

  const isPlayingRef = useRef(isPlaying);
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const meta = SERVICE_META[serviceId] || SERVICE_META['constructions'];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Renderer Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e0e0e, 0.028);

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 350;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. High-End Studio & Sun Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff200, 1.6);
    sunLight.position.set(12, 22, 14);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x0284c7, 1.2);
    fillLight.position.set(-14, 8, -10);
    scene.add(fillLight);

    // World group for 360-degree user orbiting
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 3. Build Distinct Prototype Scene per Service
    let instance: SceneInstance;
    const normId = serviceId.toLowerCase();

    if (normId.includes('road')) {
      instance = buildRoadsScene(worldGroup, camera);
    } else if (normId.includes('canal')) {
      instance = buildCanalsScene(worldGroup, camera);
    } else if (normId.includes('reservoir')) {
      instance = buildReservoirsScene(worldGroup, camera);
    } else if (normId.includes('checkdam') || normId.includes('dam')) {
      instance = buildCheckDamsScene(worldGroup, camera);
    } else {
      // Default & Civil Constructions
      instance = buildConstructionsScene(worldGroup, camera);
    }

    // 4. Smooth 360-Degree Mouse / Touch Orbit Drag Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotationVelocityX = 0;
    let rotationVelocityY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        rotationVelocityY += deltaX * 0.005;
        rotationVelocityX += deltaY * 0.003;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        rotationVelocityY += deltaX * 0.005;
        rotationVelocityX += deltaY * 0.003;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    // 5. Animation & Render Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible || !isPlayingRef.current) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Apply rotation inertia
      worldGroup.rotation.y += rotationVelocityY;
      worldGroup.rotation.x += rotationVelocityX;

      // Dampen rotation velocity
      rotationVelocityX *= 0.92;
      rotationVelocityY *= 0.92;

      // Limit X pitch rotation so scene doesn't flip upside down
      worldGroup.rotation.x = Math.max(-0.6, Math.min(0.6, worldGroup.rotation.x));

      // Subtle ambient auto-rotation when user is not dragging
      if (!isDragging && !prefersReducedMotion) {
        worldGroup.rotation.y += 0.0018;
      }

      // Update per-scene animations
      instance.update(elapsedTime, delta);

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      observer.disconnect();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }

      instance.disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
  }, [serviceId]);

  return (
    <div
      className={`relative w-full h-[340px] sm:h-[400px] rounded-[24px] sm:rounded-[28px] bg-[#0E0E0E] overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between select-none ${className}`}
      aria-label={`${meta.title} - Interactive 3D Simulation`}
    >
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        title="Click and drag to rotate 360°"
      />

      {/* Top HUD Overlay */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFF200] animate-ping" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#FFF200] uppercase">
            {meta.badge}
          </span>
        </div>

        {/* Live Controls */}
        {showControls && (
          <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md p-1 rounded-full border border-white/15 pointer-events-auto">
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? 'Pause 3D Simulation' : 'Play 3D Simulation'}
              className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#FFF200]" />}
            </button>

            <button
              type="button"
              onClick={() => setIsWireframe((prev) => !prev)}
              aria-label="Toggle Wireframe"
              className={`p-1.5 rounded-full transition-colors ${
                isWireframe ? 'bg-[#F2C230] text-[#0E0E0E]' : 'text-neutral-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Bottom Telemetry HUD Matrix */}
      <div className="relative z-10 p-4 sm:p-5 pointer-events-none">
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5">
          <span className="font-semibold text-neutral-300 truncate max-w-[280px] sm:max-w-none">
            {meta.title}
          </span>
          <span className="flex items-center gap-1 text-[#FFF200] shrink-0">
            <Eye className="w-3 h-3" />
            <span>Drag to Orbit 360°</span>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-black/75 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
          {meta.hudItems.map((item) => (
            <div key={item.label} className="font-mono">
              <div className="text-[9px] text-neutral-400 uppercase tracking-wider">{item.label}</div>
              <div className="text-[11px] font-bold text-white tracking-tight">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
