"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img 
          src="/templates/iron-gym/hero-bg.jpg" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-60 scale-105 transform animate-pulse-slow" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-[family-name:var(--font-oswald)] font-black text-white leading-none tracking-tighter uppercase mb-4">
            Forged in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-white">Iron</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-white/80 max-w-2xl uppercase tracking-widest font-medium mb-10"
        >
          Break your limits. Build your legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#classes"
            className="px-10 py-4 bg-white text-black font-[family-name:var(--font-oswald)] font-bold text-xl uppercase tracking-widest hover:bg-[var(--accent)] transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Start Training
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[2px] h-16 bg-gradient-to-b from-[var(--accent)] to-transparent" />
      </div>
    </section>
  );
}
