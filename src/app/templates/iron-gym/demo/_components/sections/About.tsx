"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-oswald)] font-black text-white uppercase mb-6 leading-tight">
              Not for the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-[var(--accent)]">weak.</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-md">
              We believe in the transformative power of hard work. Our facility is designed for those who want to push their limits, break boundaries, and achieve true greatness. No gimmicks, just iron.
            </p>
            <div className="flex gap-8">
              <div>
                <h3 className="text-4xl font-[family-name:var(--font-oswald)] font-bold text-[var(--accent)]">50+</h3>
                <p className="text-white/50 text-sm uppercase tracking-wider">Machines</p>
              </div>
              <div>
                <h3 className="text-4xl font-[family-name:var(--font-oswald)] font-bold text-[var(--accent)]">24/7</h3>
                <p className="text-white/50 text-sm uppercase tracking-wider">Access</p>
              </div>
              <div>
                <h3 className="text-4xl font-[family-name:var(--font-oswald)] font-bold text-[var(--accent)]">100%</h3>
                <p className="text-white/50 text-sm uppercase tracking-wider">Dedication</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-[var(--accent)]/10 translate-x-4 translate-y-4" />
            <img 
              src="/templates/iron-gym/about-img.jpg" 
              alt="Gym Equipment" 
              className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
