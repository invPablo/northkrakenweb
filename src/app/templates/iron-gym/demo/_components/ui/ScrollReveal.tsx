"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, type: "spring", bounce: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
