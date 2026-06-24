"use client";

import { motion } from "framer-motion";

const words = ["STRENGTH", "ENDURANCE", "POWER", "DISCIPLINE", "FOCUS", "RESILIENCE"];

export default function Marquee() {
  return (
    <div className="bg-[var(--accent)] py-6 overflow-hidden flex items-center whitespace-nowrap">
      <motion.div
        className="flex gap-12 text-black font-[family-name:var(--font-oswald)] font-black text-5xl uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Render the words twice for infinite loop effect */}
        {[...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center gap-12">
            <span>{word}</span>
            <span className="w-3 h-3 rounded-full bg-black"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
