"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-100 shadow-lg cursor-ew-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Background Image: AFTER */}
      <img
        src="/assets/after_skin.png"
        alt="Skin After Treatment"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <div className="absolute right-4 bottom-4 bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full pointer-events-none uppercase">
        After 8 Weeks
      </div>

      {/* Foreground Image: BEFORE (clipped based on slider position) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src="/assets/before_skin.png"
          alt="Skin Before Treatment"
          className="absolute inset-0 w-full h-full object-cover max-w-none select-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width }}
        />
        <div className="absolute left-4 bottom-4 bg-indigo-600/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full pointer-events-none uppercase">
          Before
        </div>
      </div>

      {/* Center Drag Handle Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-30"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handles Circle */}
        <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center -translate-x-1/2 relative">
          <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
