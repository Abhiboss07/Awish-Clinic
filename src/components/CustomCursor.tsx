"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);

    const bindHovers = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea, .hotspot"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    bindHovers();

    // Re-bind hovers when DOM mutations occur (e.g. page changes)
    const observer = new MutationObserver(bindHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="custom-cursor hidden lg:block"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered ? "var(--color-brand-pink)" : "var(--color-brand-blue)",
        }}
      />
      {/* Spring Ring */}
      <motion.div
        className="custom-cursor-glow hidden lg:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: hovered ? 1.6 : 1,
          borderColor: hovered ? "rgba(219, 39, 119, 0.4)" : "rgba(79, 70, 229, 0.2)",
          backgroundColor: hovered ? "rgba(219, 39, 119, 0.03)" : "rgba(79, 70, 229, 0.01)",
        }}
      />
    </>
  );
}
