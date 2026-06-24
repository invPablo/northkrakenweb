import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, ShoppingBag } from "lucide-react";
import { TEMPLATES, getTemplateById } from "@/lib/templates";
import type { Metadata } from "next";

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tpl = getTemplateById(slug);
  if (!tpl) return {};
  return {
    title: `${tpl.title} | North Kraken Studio`,
    description: tpl.description,
  };
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tpl = getTemplateById(slug);
  if (!tpl) notFound();

  return (
    <div className="bg-background-dark text-foreground-light min-h-screen font-sans">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="font-display uppercase text-lg tracking-tight">
          NORTH <span className="glow-text">KRAKEN</span>
        </Link>
        <Link href="/#shop" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to shop
        </Link>
      </header>

      {/* HERO */}
      <section className="relative px-6 lg:px-20 pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="glow-blob w-[450px] h-[450px] -top-32 -right-20 opacity-60" />

        <div className="relative z-10">
          <span className="tech-text text-accent">{tpl.type}</span>
          <h1 className="mt-6 font-display uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            {tpl.title}
          </h1>
          <p className="mt-6 max-w-xl text-zinc-400 leading-relaxed text-lg">{tpl.description}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="font-display uppercase text-3xl glow-text">{tpl.price}</span>
            <a
              href={tpl.checkoutUrl}
              className="inline-flex items-center gap-2 bg-accent text-background-dark font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition"
            >
              <ShoppingBag className="w-4 h-4" /> Buy now
            </a>
            {tpl.demoUrl && (
              <a
                href={tpl.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 px-7 py-3.5 rounded-full text-zinc-300 hover:border-white/30 transition"
              >
                Live demo <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {tpl.docsUrl && (
              <a
                href={tpl.docsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Documentation <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* PREVIEW GALLERY */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 border-t border-white/10">
        <span className="tech-text text-accent">Preview</span>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {tpl.images
            ? tpl.images.map((src) => (
                <div key={src} className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10">
                  <Image src={src} alt={tpl.title} fill className="object-cover" />
                </div>
              ))
            : ["01", "02", "03"].map((n) => (
                <div key={n} className="aspect-[4/3] card-surface rounded-2xl flex items-center justify-center">
                  <span className="font-display uppercase text-4xl text-zinc-700">{n}</span>
                </div>
              ))}
        </div>
        {!tpl.images && (
          <p className="text-xs text-zinc-500 mt-4">Preview images coming soon — placeholder</p>
        )}
      </section>

      {/* FEATURES + PAGES */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10">
        <div>
          <span className="tech-text text-accent">Features</span>
          <ul className="mt-6 flex flex-col gap-3">
            {tpl.features.map((f) => (
              <li key={f} className="flex items-center gap-3 border-t border-white/10 pt-3">
                <span className="text-accent">→</span>
                <span className="text-zinc-300">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="tech-text text-accent">Pages included</span>
          <ul className="mt-6 flex flex-col gap-3">
            {tpl.pages.map((p) => (
              <li key={p} className="flex items-center gap-3 border-t border-white/10 pt-3">
                <span className="text-accent">→</span>
                <span className="text-zinc-300">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-20 lg:py-28 text-center border-t border-white/10">
        <h2 className="font-display uppercase text-3xl lg:text-5xl tracking-tight">
          Ready to ship it?
        </h2>
        <a
          href={tpl.checkoutUrl}
          className="mt-8 inline-flex items-center gap-2 bg-accent text-background-dark font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition"
        >
          Get {tpl.title} <ArrowRight className="w-4 h-4" />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 lg:px-20 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display uppercase text-sm opacity-70">NORTH KRAKEN</span>
        <div className="flex gap-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} North Kraken Studio</span>
          <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
