"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TEMPLATES } from "@/lib/templates";

export default function ShowcaseFrame() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TEMPLATES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = TEMPLATES[currentIdx];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl border border-black/10 bg-white shadow-xl overflow-hidden">
        {/* Browser-frame top bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-black/10 bg-surface/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-xs text-zinc-500 bg-white border border-black/10 rounded-full px-4 py-1">
              northkraken.studio/templates/{current.id}
            </span>
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative aspect-video bg-surface overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {current.images ? (
                <Image src={current.images[0]} alt={current.title} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-semibold text-zinc-300">{current.title}</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Caption row */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {TEMPLATES.map((tpl, idx) => (
            <button
              key={tpl.id}
              onClick={() => setCurrentIdx(idx)}
              className={`transition-all rounded-full ${
                idx === currentIdx ? "bg-zinc-900 w-6 h-1.5" : "bg-zinc-300 w-1.5 h-1.5 hover:bg-zinc-400"
              }`}
              aria-label={`Show ${tpl.title}`}
            />
          ))}
        </div>
        <Link
          href={`/templates/${current.id}`}
          className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          {current.title} — {current.price} →
        </Link>
      </div>
    </div>
  );
}
