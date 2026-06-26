"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ArrowUpRight, Code2, Search, Hammer, Rocket } from "lucide-react";
import { TEMPLATES } from "@/lib/templates";
import ContactForm from "@/components/ContactForm";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    n: "01",
    title: "Web Applications",
    desc: "Custom Next.js products built from a blank page — dashboards, internal tools, customer-facing apps.",
  },
  {
    n: "02",
    title: "Marketing Sites",
    desc: "High-conversion landing pages and brand sites that load fast and don't feel like a template.",
  },
  {
    n: "03",
    title: "E-commerce & Booking",
    desc: "Stores, reservation flows and checkout systems wired to real payment and inventory providers.",
  },
  {
    n: "04",
    title: "Ongoing Development",
    desc: "Retained engineering for teams who need a dependable hand shipping features month over month.",
  },
];

const PROCESS = [
  { icon: Search, title: "Discover", desc: "We map the problem, the users and the constraints before any code gets written." },
  { icon: Code2, title: "Design & Build", desc: "Interface and engineering happen in parallel, in short, visible iterations." },
  { icon: Hammer, title: "Test & Refine", desc: "Real devices, real data, real edge cases — until it holds up under use." },
  { icon: Rocket, title: "Ship & Support", desc: "We deploy it, hand it over, and stay reachable for the weeks after launch." },
];

export default function Home() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-background-dark text-foreground-light min-h-screen font-sans">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-background-dark/95 backdrop-blur-md border-b-2 border-black">
        <Link href="#top" className="font-display uppercase text-lg tracking-tight">
          North Kraken
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium hover:opacity-60 transition-opacity">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-black text-white text-sm font-semibold px-5 py-2.5 hover:bg-zinc-800 transition"
          >
            Start a project
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden w-10 h-10 flex items-center justify-center border-2 border-black"
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
            className="fixed inset-0 bg-white z-[100] flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center border-2 border-black"
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
                  className="text-3xl font-display uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="top" className="relative px-6 pt-36 pb-20 lg:pt-48 lg:pb-32 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-2 border-black px-3 py-1 mb-8">
            Software Development Studio
          </span>

          <h1 className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            We build the
            <br />
            software you&apos;d
            <br />
            ship yourself.
          </h1>

          <p className="text-lg text-zinc-600 max-w-xl leading-relaxed mt-8">
            North Kraken designs and builds production-grade web software — from
            the first sketch to a live, maintained product.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black text-white font-semibold px-7 py-3.5 hover:bg-zinc-800 transition"
            >
              Start a project <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 border-2 border-black hover:bg-black hover:text-white transition"
            >
              See our work
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 lg:px-10 py-24 lg:py-32 max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 mb-16 max-w-xl">
          <span className="text-sm font-bold uppercase tracking-widest">01 — Services</span>
          <h2 className="font-display uppercase text-4xl lg:text-5xl tracking-tight">
            What we build
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 border-2 border-black divide-y-2 sm:divide-y-0 divide-black">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`p-8 lg:p-10 ${i % 2 === 0 ? "sm:border-r-2 sm:border-black" : ""} ${
                i < 2 ? "sm:border-b-2 sm:border-black" : ""
              }`}
            >
              <span className="font-display text-sm text-zinc-400">{s.n}</span>
              <h3 className="font-display uppercase text-2xl mt-3 mb-3">{s.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK — case studies */}
      <section id="work" className="px-6 lg:px-10 py-24 lg:py-32 border-t-2 border-black max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 mb-16 max-w-xl">
          <span className="text-sm font-bold uppercase tracking-widest">02 — Work</span>
          <h2 className="font-display uppercase text-4xl lg:text-5xl tracking-tight">
            Selected projects
          </h2>
          <p className="text-zinc-600">
            A sample of what we&apos;ve shipped — explore the live builds below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black">
          {TEMPLATES.map((tpl, i) => (
            <div
              key={tpl.id}
              role="link"
              tabIndex={0}
              onClick={() => router.push(`/templates/${tpl.id}`)}
              onKeyDown={(e) => e.key === "Enter" && router.push(`/templates/${tpl.id}`)}
              className={`group flex flex-col cursor-pointer border-black ${
                (i + 1) % 3 !== 0 ? "sm:border-r-2" : ""
              } border-b-2 sm:border-b-2`}
            >
              <div className="relative aspect-[4/3] bg-surface overflow-hidden border-b-2 border-black">
                {tpl.images ? (
                  <Image
                    src={tpl.images[0]}
                    alt={tpl.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display uppercase text-2xl text-zinc-300">{tpl.title}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <p className="font-display uppercase text-lg">{tpl.title}</p>
                  <p className="text-xs uppercase tracking-wide text-zinc-500">{tpl.type}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="px-6 lg:px-10 py-24 lg:py-32 border-t-2 border-black max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 mb-16 max-w-xl">
          <span className="text-sm font-bold uppercase tracking-widest">03 — Process</span>
          <h2 className="font-display uppercase text-4xl lg:text-5xl tracking-tight">
            How we work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-black divide-y-2 sm:divide-y-0 lg:divide-x-2 divide-black sm:[&>*:nth-child(odd)]:border-r-2 sm:[&>*:nth-child(odd)]:border-black lg:[&>*:nth-child(odd)]:border-r-0">
          {PROCESS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="p-8 flex flex-col gap-4">
              <span className="font-display text-sm text-zinc-400">0{i + 1}</span>
              <Icon className="w-6 h-6" />
              <h3 className="font-display uppercase text-xl">{title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 lg:px-10 py-24 lg:py-32 border-t-2 border-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto flex flex-col items-center gap-5"
        >
          <span className="text-sm font-bold uppercase tracking-widest">04 — Contact</span>
          <h2 className="font-display uppercase text-4xl lg:text-6xl tracking-tight">
            Tell us what you&apos;re building
          </h2>
          <p className="text-zinc-600">We usually reply within a day.</p>
          <ContactForm />
          <a
            href="mailto:hi@northkraken.studio"
            className="text-sm text-zinc-500 hover:text-black transition-colors"
          >
            or email us directly at hi@northkraken.studio
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-black px-6 lg:px-10 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-display uppercase">North Kraken</span>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed max-w-xs">
              Software development studio. Since 2024, remote, worldwide.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-3">Studio</p>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
              <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-black transition-colors">Work</a></li>
              <li><a href="#process" className="hover:text-black transition-colors">Process</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-3">Legal</p>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
              <li><Link href="/legal/terms" className="hover:text-black transition-colors">Terms</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-black transition-colors">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-3">Connect</p>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
              <li><a href="mailto:hi@northkraken.studio" className="hover:text-black transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-black transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-black/20 text-xs text-zinc-400">
          © {new Date().getFullYear()} North Kraken Studio
        </div>
      </footer>
    </div>
  );
}
