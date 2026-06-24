"use client";

import { motion } from "framer-motion";
import { galleryImages } from "../../_data/mockData";

export default function Gallery() {
  // Configuración de grid asimétrica de Tailwind
  const gridClasses = [
    "md:col-span-2 md:row-span-2", // Foto 1 (Grande)
    "md:col-span-1 md:row-span-1", // Foto 2 (Pequeña)
    "md:col-span-1 md:row-span-1", // Foto 3 (Pequeña)
    "md:col-span-1 md:row-span-2", // Foto 4 (Vertical)
    "md:col-span-2 md:row-span-1", // Foto 5 (Horizontal)
    "md:col-span-1 md:row-span-1", // Foto 6 (Pequeña)
  ];

  return (
    <section id="gallery" className="py-24 bg-[var(--card-bg)] border-t border-[#f4f4f4]/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-oswald)] font-black text-[#f4f4f4] uppercase mb-2">Inside The Cage</h2>
          <p className="text-[#f4f4f4]/50 max-w-lg mx-auto">Take a visual tour of our state-of-the-art facilities and elite training environment.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative overflow-hidden rounded-xl group bg-[#0a0a0a] border border-[#f4f4f4]/5 ${gridClasses[idx] || ""}`}
            >
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-300" />
              <img 
                src={img} 
                alt={`Gym Gallery ${idx + 1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
