"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

const CURSOR_QUERY = "(pointer: fine) and (prefers-reduced-motion: no-preference)";
function subscribeCursor(onChange) {
  const media = window.matchMedia(CURSOR_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}
function getCursorSnapshot() {
  return window.matchMedia(CURSOR_QUERY).matches;
}
function getServerCursorSnapshot() {
  return false;
}

export default function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const isVisible = useSyncExternalStore(subscribeCursor, getCursorSnapshot, getServerCursorSnapshot);

  useEffect(() => {
    if (!isVisible) return;
    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "interactive";

      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", updateMouse, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Punto del cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
        }}
        style={{ width: 8, height: 8 }}
      />

      {/* Anillo exterior del cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-primary/40"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
        style={{ width: 40, height: 40 }}
      />
    </>
  );
}
