"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, ShoppingBag } from "lucide-react";
import { TEMPLATES } from "@/lib/templates";
import TemplateSlider from "@/components/TemplateSlider";

const NAV_LINKS = [
  { href: "#shop", label: "Shop" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const TESTIMONIALS = [
  {
    quote: "We launched our agency site in a weekend. The template did 90% of the work for us.",
    name: "Mara Lindqvist",
    role: "Founder, Studio Halo",
  },
  {
    quote: "Cleanest Next.js codebase I've bought. No bloat, no mystery dependencies.",
    name: "Theo Brandt",
    role: "Frontend Engineer",
  },
  {
    quote: "Support actually replied within a day and fixed our deploy issue for free.",
    name: "Inés Calvo",
    role: "Indie Maker",
  },
];

const FAQS = [
  {
    q: "What exactly do I get when I buy a template?",
    a: "The full source code of a production-ready Next.js + Tailwind CSS project, ready to customize and deploy on your own hosting.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No coding is required to deploy as-is. Customizing colors, text and images is beginner-friendly.",
  },
  {
    q: "What license do I get?",
    a: "A single-project commercial license: use it for one live website, yours or a client's.",
  },
  {
    q: "Is support included?",
    a: "Yes — 30 days of technical support after purchase, covering bugs and setup questions.",
  },
];

function SectionHeader({ num, label }: { num: string; label: string }) {
  return (
    <div className="section-divider mb-12">
      <span className="tech-text text-accent">{num}.</span>
      <span className="tech-text text-zinc-400">{label}</span>
    </div>
  );
}

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-6 py-6 text-left">
        <span className="font-display uppercase text-lg lg:text-xl">{q}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-accent transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-text leading-relaxed max-w-2xl text-zinc-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const newestTemplate = TEMPLATES[TEMPLATES.length - 1];

  return (
    <div className="bg-background-dark text-foreground-light min-h-screen font-sans">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
        <Link href="#top" className="font-display uppercase text-lg tracking-tight">
          NORTH <span className="glow-text">KRAKEN</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#shop"
            className="inline-flex items-center gap-2 bg-accent text-background-dark text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition"
          >
            Browse Templates
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/15"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background-dark z-[100] flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display uppercase text-4xl"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex flex-col justify-between px-6 lg:px-20 pt-32 pb-12 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] -top-40 -right-20" />
        <div className="glow-blob w-[400px] h-[400px] bottom-0 left-0 opacity-50" />

        {/* top row: eyebrow + category chip, like Puki's ©16-26 / 03. Brand Identity */}
        <div className="relative z-10 flex items-center justify-between text-xs tech-text text-zinc-500">
          <span>© 24–26</span>
          <span className="bg-surface border border-white/10 rounded-full px-4 py-2 text-zinc-300">
            01. Templates Shop
          </span>
        </div>

        {/* centered template slider */}
        <div className="relative z-20 flex-1 w-full max-w-5xl hidden md:flex">
          <TemplateSlider />
        </div>

        {/* bottom: split wordmark + floating preview card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h1 className="font-display text-[16vw] sm:text-7xl lg:text-8xl uppercase leading-[0.85] tracking-tight">
              NORTH
            </h1>
            <p className="max-w-xs text-zinc-400 text-sm leading-relaxed mb-4 hidden md:block">
              Production-ready Next.js templates for agencies, founders and
              creatives. Buy, customize, deploy.
            </p>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h1 className="font-display text-[16vw] sm:text-7xl lg:text-8xl uppercase leading-[0.85] tracking-tight glow-text">
              KRAKEN
            </h1>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 bg-accent text-background-dark font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition mb-2"
            >
              Browse Templates <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs tech-text text-zinc-500">
            <span>Since 2024</span>
            <span>Remote — worldwide</span>
          </div>
        </motion.div>

      </section>

      {/* TECH MARQUEE */}
      <div className="border-y border-white/10 bg-surface/40 py-4 overflow-hidden">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center shrink-0">
              {["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"].map((tool) => (
                <span key={tool} className="font-display uppercase text-xl px-8 text-zinc-600">
                  {tool}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* SHOP — grid */}
      <section id="shop" className="relative px-6 lg:px-12 py-16 border-b border-white/10">
        <div className="flex flex-col gap-6 mb-12 max-w-2xl">
          <SectionHeader num="02" label="Shop" />
          <h2 className="font-display text-4xl lg:text-5xl uppercase leading-tight">
            Showcase of our templates
          </h2>
          <p className="text-zinc-400 max-w-sm">
            Discover templates designed to help you ship faster, with clean
            code and zero bloat.
          </p>
          <p className="tech-text text-zinc-500">{TEMPLATES.length} templates available</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEMPLATES.map((tpl) => (
            <div
              key={tpl.id}
              role="link"
              tabIndex={0}
              onClick={() => router.push(`/templates/${tpl.id}`)}
              onKeyDown={(e) => e.key === "Enter" && router.push(`/templates/${tpl.id}`)}
              className="relative group block aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 via-background-dark to-background-dark cursor-pointer hover:border-accent/40 transition-colors"
            >
              {tpl.images ? (
                <>
                  <Image
                    src={tpl.images[0]}
                    alt={tpl.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-65 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <span className="font-display uppercase text-3xl lg:text-4xl text-zinc-700 group-hover:text-zinc-600 transition-colors text-center">
                    {tpl.title}
                  </span>
                </div>
              )}

              <span className="absolute top-4 left-4 tech-text text-zinc-400">{tpl.title}</span>
              <span className="absolute top-4 right-4 tech-text text-zinc-400 text-right">({tpl.type})</span>

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 rounded-full bg-accent text-background-dark flex items-center justify-center font-display uppercase text-[10px] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all">
                  View
                </span>
              </span>

              <span className="absolute bottom-4 left-4 font-display uppercase text-lg glow-text">
                {tpl.price}
              </span>
              <a
                href={tpl.checkoutUrl}
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 text-xs bg-white/10 hover:bg-accent hover:text-background-dark px-3 py-1.5 rounded-full transition-colors"
              >
                <ShoppingBag className="w-3 h-3" /> Buy
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* VISUAL BANNER */}
      <section className="relative px-6 lg:px-20 py-28 lg:py-36 text-center overflow-hidden">
        <div className="glow-blob w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-40" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 font-display text-6xl sm:text-7xl lg:text-9xl uppercase tracking-tight"
        >
          BUILT TO <span className="glow-text">SHIP</span>
        </motion.h2>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-6 lg:px-20 py-24 lg:py-32 bg-surface/40">
        <SectionHeader num="03" label="Reviews" />
        <h2 className="mb-12 font-display text-4xl lg:text-5xl uppercase">What people are shipping</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-surface rounded-2xl p-6 flex flex-col justify-between gap-6"
            >
              <p className="text-lg leading-snug">
                <span className="glow-text text-2xl leading-none">&ldquo;</span>
                {t.quote}
              </p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 lg:px-20 py-24 lg:py-32">
        <SectionHeader num="04" label="FAQ" />
        <h2 className="mb-12 font-display text-4xl lg:text-5xl uppercase">Questions before you buy</h2>

        <div className="max-w-3xl">
          {FAQS.map((item, idx) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openFaq === idx}
              onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-6 lg:px-20 py-28 lg:py-36 overflow-hidden">
        <div className="glow-blob w-[450px] h-[450px] top-0 left-1/2 -translate-x-1/2 opacity-60" />

        <SectionHeader num="05" label="Contact" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl mx-auto text-center mt-12"
        >
          <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tight">
            Questions before you buy?
          </h2>
          <p className="mt-4 text-zinc-400">We usually reply within a day.</p>
          <a
            href="mailto:hi@northkraken.studio"
            className="mt-8 inline-flex items-center gap-2 bg-accent text-background-dark font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition"
          >
            hi@northkraken.studio <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 lg:px-20 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display uppercase text-sm opacity-70">NORTH KRAKEN</span>
        <div className="flex gap-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} North Kraken Studio</span>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
