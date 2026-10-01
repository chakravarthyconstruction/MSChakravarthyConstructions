import React, { useState, useRef } from 'react';
import { Layers, Scan, Sliders } from 'lucide-react';

interface BlueprintInspectorProps {
  imageSrc: string;
  alt: string;
  title: string;
  category: string;
  className?: string;
}

export const BlueprintInspector: React.FC<BlueprintInspectorProps> = ({
  imageSrc,
  alt,
  title,
  category,
  className = '',
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      className={`relative rounded-[24px] sm:rounded-[32px] overflow-hidden select-none cursor-ew-resize border border-black/10 shadow-xl group aspect-[16/10] bg-[#0E0E0E] ${className}`}
      aria-label={`Interactive Civil CAD Blueprint Scanner for ${title}`}
    >
      {/* Layer 1: Photographic Image (Base Layer) */}
      <img
        src={imageSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

      {/* Layer 2: Glowing Blueprint / CAD Schematic Simulation (Clipped by sliderPos) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-[#0B3A5E]/90 mix-blend-color-burn" />
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter contrast-[200%] grayscale invert opacity-75"
        />
        {/* CAD Grid Overlay Pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 240, 255, 0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 240, 255, 0.35) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Blueprint HUD Telemetry */}
        <div className="absolute top-4 left-4 font-mono text-[10px] text-[#FFF200] space-y-1 bg-black/75 px-3 py-1.5 rounded-lg border border-[#FFF200]/30 backdrop-blur-md">
          <div className="flex items-center gap-1.5 font-bold">
            <Scan className="w-3 h-3 text-[#FFF200] animate-spin" />
            <span>CAD SCHEMATIC ANALYSIS</span>
          </div>
          <div>STRATA DENSITY: 2.45 t/m³</div>
          <div>ELEVATION TOLERANCE: ±2.5mm</div>
        </div>
      </div>

      {/* Vertical Laser Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-[#FFF200] shadow-[0_0_15px_#FFF200] pointer-events-none z-20"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Center Drag Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0E0E0E] border-2 border-[#FFF200] text-[#FFF200] shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize">
          <Sliders className="w-4 h-4 rotate-90" />
        </div>
      </div>

      {/* Floating Badges */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md font-mono text-[11px] text-[#FFF200] border border-white/10 flex items-center gap-1.5">
            <Layers className="w-3 h-3" />
            <span>{category}</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-neutral-300">
            {title}
          </span>
        </div>

        <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-neutral-300">
          ◀ Slide to Inspect Blueprint ▶
        </span>
      </div>
    </div>
  );
};
