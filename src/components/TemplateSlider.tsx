"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingBag } from "lucide-react";
import { TEMPLATES } from "@/lib/templates";

export default function TemplateSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TEMPLATES.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? TEMPLATES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === TEMPLATES.length - 1 ? 0 : prev + 1));
  };

  const current = TEMPLATES[currentIdx];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -400 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6"
        >
          {/* Left: Template Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            {current.images ? (
              <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-accent/20">
                <Image
                  src={current.images[0]}
                  alt={current.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full max-w-sm aspect-video rounded-xl bg-surface border border-white/10 flex items-center justify-center">
                <span className="font-display text-2xl text-zinc-700">{current.title}</span>
              </div>
            )}
          </div>

          {/* Right: Template Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
              <span className="tech-text text-accent text-xs">{current.type}</span>
              <h2 className="font-display text-4xl md:text-5xl uppercase mt-3 leading-tight">
                {current.title}
              </h2>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              {current.description}
            </p>

            {/* Features */}
            <div className="max-w-lg">
              <p className="tech-text text-zinc-500 text-xs uppercase mb-3">Key Features</p>
              <ul className="space-y-2">
                {current.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="text-accent">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <span className="font-display text-3xl glow-text">{current.price}</span>
              <a
                href={current.checkoutUrl}
                className="inline-flex items-center gap-2 bg-accent text-background-dark font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
              >
                <ShoppingBag className="w-4 h-4" /> Buy
              </a>
              <Link
                href={`/templates/${current.id}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Full details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 text-white flex items-center justify-center transition-all"
        aria-label="Previous template"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 text-white flex items-center justify-center transition-all"
        aria-label="Next template"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {TEMPLATES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`transition-all ${
              idx === currentIdx ? "bg-accent w-8 h-2 rounded-full" : "bg-white/30 w-2 h-2 rounded-full hover:bg-white/50"
            }`}
            aria-label={`Go to template ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
