"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../../_data/mockData";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a] border-t border-[#f4f4f4]/5">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-oswald)] font-black text-[#f4f4f4] uppercase mb-2">FAQs</h2>
          <p className="text-[#f4f4f4]/50">Got questions? We've got answers. Everything you need to know before stepping in.</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[var(--card-bg)] border border-[#f4f4f4]/5 overflow-hidden transition-all duration-300 hover:border-[#f4f4f4]/10"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-6 px-8 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-xl font-[family-name:var(--font-oswald)] font-bold uppercase text-[#f4f4f4] tracking-wide">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-[#f4f4f4]/5 flex items-center justify-center text-[var(--accent)]"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 text-[#f4f4f4]/60 text-lg leading-relaxed border-t border-[#f4f4f4]/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
