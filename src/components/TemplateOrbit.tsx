"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TEMPLATES } from "@/lib/templates";

export default function TemplateOrbit() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TEMPLATES.length);
    }, 3000); // Change template every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const orbitRadius = 220; // pixels from center
  const angleSlice = (360 / TEMPLATES.length) * (Math.PI / 180);

  const getPosition = (index: number) => {
    const angle = angleSlice * index - Math.PI / 2;
    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle) * orbitRadius;
    return { x, y };
  };

  const currentPos = getPosition(currentIdx);
  const nextIdx = (currentIdx + 1) % TEMPLATES.length;
  const nextPos = getPosition(nextIdx);

  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Orbit Circle (faint) */}
      <div className="absolute w-full h-full rounded-full border border-white/10" />

      {/* Center Badge (existing) */}
      <div className="absolute z-20">
        <svg viewBox="0 0 200 200" className="w-44 h-44 badge-spin">
          <defs>
            <path id="badge-circle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
          </defs>
          <text fill="currentColor" className="fill-zinc-400 text-[11px] uppercase tracking-[0.2em]">
            <textPath href="#badge-circle">
              Next.js • Tailwind • Ready to ship • North Kraken •
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Templates in Orbit */}
      {TEMPLATES.map((tpl, idx) => {
        const pos = getPosition(idx);
        const isActive = idx === currentIdx;

        return (
          <motion.div
            key={tpl.id}
            className="absolute"
            animate={{
              x: pos.x,
              y: pos.y,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div
              className={`w-16 h-16 rounded-lg border overflow-hidden transition-all cursor-pointer flex-shrink-0 ${
                isActive
                  ? "border-accent ring-2 ring-accent/50 scale-110 shadow-lg shadow-accent/30"
                  : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/40"
              }`}
            >
              {tpl.images ? (
                <Image
                  src={tpl.images[0]}
                  alt={tpl.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-background-dark flex items-center justify-center">
                  <span className="font-display text-[10px] text-zinc-600 text-center px-1 line-clamp-2">
                    {tpl.title}
                  </span>
                </div>
              )}
            </div>
            {isActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-accent font-semibold"
              >
                {tpl.title}
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Animated Cursor */}
      <motion.div
        className="absolute z-30 pointer-events-none"
        animate={{
          x: currentPos.x - 8,
          y: currentPos.y - 8,
        }}
        transition={{
          duration: 2.8,
          ease: "easeInOut",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-accent drop-shadow-lg"
          strokeWidth={2}
        >
          {/* Custom cursor pointer */}
          <path d="M3 3l7.07 18.97.5.56.89-.28L20.22 3.5a.5.5 0 00-.62-.62L3.28 11.62l-.28.89.56.5L21 10" />
        </svg>
      </motion.div>

      {/* Tooltip for current template */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        key={currentIdx}
        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface border border-white/10 rounded-lg px-3 py-2 text-xs whitespace-nowrap z-10"
      >
        <span className="text-zinc-300">{TEMPLATES[currentIdx].title}</span>
        <span className="text-accent ml-2">{TEMPLATES[currentIdx].price}</span>
      </motion.div>
    </div>
  );
}
