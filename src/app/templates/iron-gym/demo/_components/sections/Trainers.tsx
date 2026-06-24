"use client";

import { motion } from "framer-motion";
import { trainersData } from "../../_data/mockData";
import Link from "next/link";

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[var(--card-bg)] border-t border-[#f4f4f4]/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-oswald)] font-black text-[#f4f4f4] uppercase mb-2">Our Coaches</h2>
          <p className="text-[#f4f4f4]/50">Guided by professionals. Forged in iron.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainersData.map((trainer, idx) => (
            <Link key={trainer.id} href={`/templates/iron-gym/demo/trainers/${trainer.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer h-full"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a] mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-[family-name:var(--font-oswald)] font-bold text-white uppercase">{trainer.name}</h3>
                    <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase">{trainer.role}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
