"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "../../_data/mockData";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] border-t border-[#f4f4f4]/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-oswald)] font-black text-[#f4f4f4] uppercase mb-2">Success Stories</h2>
          <p className="text-[#f4f4f4]/50 max-w-lg mx-auto">Hear it from the ones who pushed through. Real results from real athletes.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[var(--card-bg)] p-8 border border-[#f4f4f4]/5 relative flex flex-col justify-between hover:border-[var(--accent)] transition-all duration-300 group"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[var(--accent)] text-[var(--accent)]" />
                  ))}
                </div>
                <p className="text-[#f4f4f4]/75 italic mb-8 leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#f4f4f4]/5 pt-6 mt-auto">
                <div>
                  <h4 className="text-lg font-[family-name:var(--font-oswald)] font-bold text-[#f4f4f4] uppercase">{test.name}</h4>
                  <span className="text-[var(--accent)] text-xs font-bold tracking-widest uppercase">{test.role}</span>
                </div>
                <div className="text-6xl font-[family-name:var(--font-oswald)] font-black text-[#f4f4f4]/5 group-hover:text-[var(--accent)]/10 transition-colors pointer-events-none select-none">
                  ”
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
