"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "../../_data/mockData";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-start gap-4">
      {/* Nav Pill */}
      <motion.nav
        layout
        initial={{ borderRadius: "9999px" }}
        animate={{
          borderRadius: isOpen ? "32px" : "9999px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`bg-black/90 dark:bg-[var(--card-bg)] backdrop-blur-xl border border-white/20 shadow-2xl flex items-center overflow-hidden ${
          isOpen ? "flex-col p-6 w-[90vw] max-w-sm" : "p-2 w-auto"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-[family-name:var(--font-oswald)] font-black text-white pl-4"
            >
              IRON<span className="text-[var(--accent)]">.</span>
            </motion.div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center justify-center rounded-full transition-colors ${
              isOpen 
                ? "w-12 h-12 bg-white/10 hover:bg-white/20 text-white" 
                : "w-14 h-14 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black"
            }`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 w-full mt-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-[family-name:var(--font-oswald)] font-bold text-center text-white hover:text-[var(--accent)] uppercase transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-[1px] bg-white/10 my-2" />
              <Link
                href="#join"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 text-center bg-white text-black font-bold uppercase tracking-widest hover:bg-[var(--accent)] transition-colors rounded-xl"
              >
                Join Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
