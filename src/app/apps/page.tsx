import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { APPS } from "@/lib/apps";

export const metadata: Metadata = {
  title: "What we built | North Kraken Studio",
  description: "Real apps and products built by North Kraken Studio.",
};

export default function AppsPage() {
  return (
    <div className="bg-background-dark text-foreground-light min-h-screen font-sans">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-background-dark/90 backdrop-blur-md border-b border-black/10">
        <Link href="/" className="font-display uppercase text-lg tracking-tight text-zinc-900">
          North <span className="text-accent">Kraken</span>
        </Link>
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to shop
        </Link>
      </header>

      {/* HERO */}
      <section className="px-6 lg:px-10 pt-36 pb-16 lg:pt-44 lg:pb-20 max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
        <span className="text-sm font-medium text-accent">What we built</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
          Beyond templates — real products, shipped
        </h1>
        <p className="text-lg text-zinc-600 max-w-xl leading-relaxed">
          North Kraken Studio isn&apos;t just a template shop. Here&apos;s a look at the apps we
          design, build and run ourselves.
        </p>
      </section>

      {/* APPS GRID */}
      <section className="px-6 lg:px-10 pb-24 lg:pb-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {APPS.map((app) => (
            <div
              key={app.id}
              className="flex flex-col rounded-2xl border border-black/10 bg-white overflow-hidden hover:border-black/20 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[4/3] bg-surface overflow-hidden">
                {app.image ? (
                  <Image src={app.image} alt={app.name} fill className="object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-zinc-300">{app.name}</span>
                  </div>
                )}
                {app.status === "coming-soon" && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-xs font-medium bg-white/90 text-zinc-700 px-3 py-1.5 rounded-full backdrop-blur">
                    <Clock className="w-3 h-3" /> Coming soon
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3 p-6">
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900">{app.name}</h2>
                  <p className="text-sm text-accent font-medium mt-0.5">{app.tagline}</p>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">{app.description}</p>

                <div className="pt-3 border-t border-black/5 mt-auto">
                  {app.status === "live" && app.url ? (
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:text-accent transition-colors"
                    >
                      Visit {app.name} <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-400">Launching soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display uppercase text-sm text-zinc-900">North Kraken</span>
        <div className="flex gap-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} North Kraken Studio</span>
          <Link href="/#contact" className="hover:text-zinc-900 transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
