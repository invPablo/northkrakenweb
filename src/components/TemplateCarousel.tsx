"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingBag } from "lucide-react";
import { TEMPLATES } from "@/lib/templates";

export default function TemplateCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? TEMPLATES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === TEMPLATES.length - 1 ? 0 : prev + 1));
  };

  const current = TEMPLATES[currentIdx];
  const nextIdx = (currentIdx + 1) % TEMPLATES.length;
  const nextTemplate = TEMPLATES[nextIdx];

  return (
    <div className="relative w-full">
      {/* Main Carousel Display */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 via-background-dark to-background-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12"
          >
            {/* Left: Content */}
            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <span className="tech-text text-zinc-500 text-xs">{current.type}</span>
                <h3 className="mt-4 font-display text-3xl lg:text-5xl uppercase leading-tight">
                  {current.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 mt-auto lg:mt-0">
                <span className="font-display text-2xl glow-text">{current.price}</span>
                <Link
                  href={`/templates/${current.id}`}
                  className="inline-flex items-center gap-2 bg-accent text-background-dark font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition text-sm"
                >
                  View details <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={current.checkoutUrl}
                  className="inline-flex items-center gap-2 text-xs bg-white/10 hover:bg-accent hover:text-background-dark px-3.5 py-2.5 rounded-full transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Buy
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:flex flex-1 h-full items-center justify-center">
              {current.images ? (
                <div className="relative w-full h-full max-w-sm rounded-xl overflow-hidden">
                  <Image
                    src={current.images[0]}
                    alt={current.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-full max-w-sm rounded-xl bg-surface flex items-center justify-center">
                  <span className="font-display text-xl text-zinc-700">{current.title}</span>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 text-white flex items-center justify-center transition-colors"
          aria-label="Previous template"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 text-white flex items-center justify-center transition-colors"
          aria-label="Next template"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {TEMPLATES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIdx ? "bg-accent w-6" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to template ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip Below */}
      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {TEMPLATES.map((tpl, idx) => (
          <button
            key={tpl.id}
            onClick={() => setCurrentIdx(idx)}
            className={`shrink-0 transition-all ${
              idx === currentIdx ? "border-accent ring-2 ring-accent/50" : "border-white/20 hover:border-white/40"
            }`}
          >
            <div className="relative w-20 h-20 rounded-lg border overflow-hidden bg-gradient-to-br from-accent/10 to-background-dark">
              {tpl.images ? (
                <Image src={tpl.images[0]} alt={tpl.title} fill className="object-cover opacity-70" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-display text-[8px] text-zinc-600 text-center px-1">{tpl.title}</span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
