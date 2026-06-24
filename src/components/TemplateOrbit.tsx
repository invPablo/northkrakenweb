"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShoppingBag, ExternalLink } from "lucide-react";
import { TEMPLATES } from "@/lib/templates";

export default function TemplateOrbit() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState<typeof TEMPLATES[0] | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TEMPLATES.length);
    }, 3000); // Change template every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const orbitRadius = 300; // pixels from center
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
    <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
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
              className={`w-28 h-28 rounded-lg border overflow-hidden transition-all cursor-pointer flex-shrink-0 ${
                isActive
                  ? "border-accent ring-2 ring-accent/50 scale-110 shadow-lg shadow-accent/30"
                  : "border-white/20 opacity-70 hover:opacity-100 hover:border-white/40"
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

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedTemplate && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTemplate(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-6"
            >
              <div className="bg-background-dark border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Image */}
                {selectedTemplate.images && (
                  <div className="relative w-full aspect-video">
                    <Image
                      src={selectedTemplate.images[0]}
                      alt={selectedTemplate.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <span className="tech-text text-accent text-xs">{selectedTemplate.type}</span>
                  <h2 className="font-display text-5xl uppercase mt-3 mb-4">{selectedTemplate.title}</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">{selectedTemplate.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <span className="tech-text text-zinc-500 text-xs uppercase">Features</span>
                      <ul className="mt-3 space-y-2">
                        {selectedTemplate.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                            <span className="text-accent mt-1">→</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="tech-text text-zinc-500 text-xs uppercase">Pages Included</span>
                      <ul className="mt-3 space-y-2">
                        {selectedTemplate.pages.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-zinc-300">
                            <span className="text-accent mt-1">→</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                    <span className="font-display text-3xl glow-text">{selectedTemplate.price}</span>
                    <a
                      href={selectedTemplate.checkoutUrl}
                      className="inline-flex items-center gap-2 bg-accent text-background-dark font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
                    >
                      <ShoppingBag className="w-4 h-4" /> Buy now
                    </a>
                    <Link
                      href={`/templates/${selectedTemplate.id}`}
                      className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 px-6 py-3 rounded-full text-zinc-300 transition-colors"
                    >
                      Full details <ArrowRight className="w-4 h-4" />
                    </Link>
                    {selectedTemplate.demoUrl && (
                      <a
                        href={selectedTemplate.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        Live demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
