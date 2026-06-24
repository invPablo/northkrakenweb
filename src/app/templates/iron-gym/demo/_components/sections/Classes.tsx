"use client";

import { motion } from "framer-motion";
import { classesData } from "../../_data/mockData";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Classes() {
  return (
    <section id="classes" className="py-24 bg-[var(--card-bg)]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-oswald)] font-black text-[#f4f4f4] uppercase mb-2">Our Programs</h2>
            <p className="text-[#f4f4f4]/50">Choose your weapon. Train with the best.</p>
          </div>
          <a href="#" className="text-[var(--accent)] hover:text-[#f4f4f4] transition-colors uppercase tracking-widest font-bold mt-4 md:mt-0 flex items-center gap-2">
            View Schedule <ArrowUpRight size={20} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classesData.map((cls, idx) => (
            <Link key={cls.id} href={`/templates/iron-gym/demo/classes/${cls.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#0a0a0a] p-8 border border-[#f4f4f4]/5 hover:border-[var(--accent)] transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-[var(--accent)] font-bold text-sm tracking-widest uppercase mb-4 block">{cls.time}</span>
                  <h3 className="text-3xl font-[family-name:var(--font-oswald)] font-bold text-[#f4f4f4] uppercase mb-4">{cls.title}</h3>
                  <p className="text-[#f4f4f4]/60 mb-8 flex-grow">{cls.description}</p>
                  <div className="flex justify-between items-center border-t border-[#f4f4f4]/10 pt-4 mt-auto">
                    <span className="text-[#f4f4f4]/40 uppercase text-xs tracking-wider">Coach {cls.trainer}</span>
                    <div className="w-10 h-10 rounded-full bg-[#f4f4f4]/5 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-[#0a0a0a] transition-colors">
                      <ArrowUpRight size={18} />
                    </div>
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
