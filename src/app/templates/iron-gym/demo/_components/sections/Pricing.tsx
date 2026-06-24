"use client";

import { motion } from "framer-motion";
import { pricingData } from "../../_data/mockData";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-[family-name:var(--font-oswald)] font-black text-white uppercase mb-4"
          >
            Membership
          </motion.h2>
          <p className="text-white/50 max-w-lg mx-auto">No contracts. No hidden fees. Just results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 border relative ${
                plan.popular 
                  ? "border-[var(--accent)] bg-[var(--card-bg)] scale-105 z-10" 
                  : "border-white/10 bg-black"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent)] text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-[family-name:var(--font-oswald)] font-bold text-white uppercase mb-2">{plan.tier}</h3>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-white/50 mb-1">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <Check size={18} className="text-[var(--accent)] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 uppercase font-bold tracking-widest transition-colors ${
                plan.popular 
                  ? "bg-[var(--accent)] text-black hover:bg-white" 
                  : "bg-white/10 text-white hover:bg-white hover:text-black"
              }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
