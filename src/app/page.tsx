"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ArrowUpRight, ChevronDown, ShoppingBag, Code2, Rocket, LifeBuoy } from "lucide-react";
import { TEMPLATES } from "@/lib/templates";
import ShowcaseFrame from "@/components/ShowcaseFrame";
import TestimonialWall from "@/components/TestimonialWall";

const NAV_LINKS = [
  { href: "#shop", label: "Templates" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const VALUES = [
  {
    icon: Code2,
    title: "Production-ready code",
    desc: "Clean Next.js + Tailwind, no mystery dependencies or throwaway boilerplate.",
  },
  {
    icon: Rocket,
    title: "Deploy in minutes",
    desc: "Built for Vercel. Swap the content, push, and your site is live.",
  },
  {
    icon: LifeBuoy,
    title: "Real support",
    desc: "30 days of email support after purchase, for actual humans, not bots.",
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

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-black/10">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-6 py-6 text-left">
        <span className="font-semibold text-lg text-zinc-900">{q}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
            <p className="pb-6 leading-relaxed max-w-2xl text-zinc-600">{a}</p>
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

  return (
    <div className="bg-background-dark text-foreground-light min-h-screen font-sans">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-background-dark/90 backdrop-blur-md border-b border-black/10">
        <Link href="#top" className="font-display uppercase text-lg tracking-tight text-zinc-900">
          North <span className="text-accent">Kraken</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#shop"
            className="inline-flex items-center gap-1.5 bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-zinc-800 transition"
          >
            Browse templates
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-black/10"
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
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/10"
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
                  className="text-3xl font-semibold text-zinc-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="top" className="relative px-6 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 border border-black/10 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> New: SOUR template now available
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-zinc-900">
            Ship your next site in days, not weeks.
          </h1>

          <p className="text-lg text-zinc-600 max-w-xl leading-relaxed">
            Production-ready Next.js &amp; Tailwind templates for agencies, founders and
            creatives. Buy, customize, deploy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-zinc-800 transition"
            >
              Browse templates <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#testimonials"
              className="inline-flex items-center gap-2 text-zinc-700 font-medium px-6 py-3 rounded-lg border border-black/10 hover:border-black/20 transition"
            >
              See what people built
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 lg:mt-20"
        >
          <ShowcaseFrame />
        </motion.div>
      </section>

      {/* TECH MARQUEE */}
      <div className="border-y border-black/10 bg-surface/50 py-5 overflow-hidden">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center shrink-0">
              {["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"].map((tool) => (
                <span key={tool} className="flex items-center shrink-0">
                  <span className="text-sm font-semibold uppercase tracking-wide px-6 text-zinc-600">
                    {tool}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* SHOP — grid */}
      <section id="shop" className="px-6 lg:px-10 py-24 lg:py-32 max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 mb-14 max-w-xl">
          <span className="text-sm font-medium text-accent">Templates</span>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900">
            Pick your starting point
          </h2>
          <p className="text-zinc-600">
            {TEMPLATES.length} production-ready templates, each with a live demo you can click
            through before you buy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map((tpl) => (
            <div
              key={tpl.id}
              role="link"
              tabIndex={0}
              onClick={() => router.push(`/templates/${tpl.id}`)}
              onKeyDown={(e) => e.key === "Enter" && router.push(`/templates/${tpl.id}`)}
              className="group flex flex-col rounded-2xl border border-black/10 bg-white overflow-hidden cursor-pointer hover:border-black/20 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[4/3] bg-surface overflow-hidden">
                {tpl.video ? (
                  <video
                    src={tpl.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                ) : tpl.images ? (
                  <Image
                    src={tpl.images[0]}
                    alt={tpl.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-zinc-300">{tpl.title}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-zinc-900">{tpl.title}</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wide">{tpl.type}</span>
                </div>
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-black/5">
                  <span className="font-semibold text-accent">{tpl.price}</span>
                  <a
                    href={tpl.checkoutUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-zinc-900 text-white px-3.5 py-2 rounded-full hover:bg-zinc-800 transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Buy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 lg:px-10 py-24 lg:py-28 border-t border-black/10 bg-surface/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-zinc-900">{title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-6 lg:px-10 py-24 lg:py-32 max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 mb-14 max-w-xl">
          <span className="text-sm font-medium text-accent">Reviews</span>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900">
            What people are shipping
          </h2>
        </div>

        <TestimonialWall />
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 lg:px-10 py-24 lg:py-32 border-t border-black/10 max-w-3xl mx-auto">
        <div className="flex flex-col gap-3 mb-12">
          <span className="text-sm font-medium text-accent">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900">
            Questions before you buy
          </h2>
        </div>

        <div>
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
      <section id="contact" className="px-6 lg:px-10 py-24 lg:py-32 border-t border-black/10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto flex flex-col items-center gap-5"
        >
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-zinc-900">
            Questions before you buy?
          </h2>
          <p className="text-zinc-600">We usually reply within a day.</p>
          <a
            href="mailto:hi@northkraken.studio"
            className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-lg hover:brightness-110 transition"
          >
            hi@northkraken.studio <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 px-6 lg:px-10 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-display uppercase text-zinc-900">North Kraken</span>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed max-w-xs">
              Production-ready Next.js templates. Since 2024, remote, worldwide.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-3">Shop</p>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
              <li><a href="#shop" className="hover:text-zinc-900 transition-colors">Templates</a></li>
              <li><a href="#testimonials" className="hover:text-zinc-900 transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-3">Legal</p>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
              <li><Link href="/legal/terms" className="hover:text-zinc-900 transition-colors">Terms</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-zinc-900 transition-colors">Privacy</Link></li>
              <li><Link href="/legal/refunds" className="hover:text-zinc-900 transition-colors">Refunds</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-3">Connect</p>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
              <li><a href="mailto:hi@northkraken.studio" className="hover:text-zinc-900 transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-black/10 text-xs text-zinc-400">
          © {new Date().getFullYear()} North Kraken Studio
        </div>
      </footer>
    </div>
  );
}
