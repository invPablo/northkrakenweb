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
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-background-dark/90 backdrop-blur-md border-b border-black/10">
        <Link href="/" className="font-display uppercase text-lg tracking-tight text-zinc-900">
          North <span className="text-accent">Kraken</span>
        </Link>
        <Link href="/#shop" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to shop
        </Link>
      </header>

      {/* HERO */}
      <section className="px-6 lg:px-10 pt-32 pb-16 lg:pb-20 max-w-4xl mx-auto">
        <span className="text-sm font-medium text-accent">{tpl.type}</span>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
          {tpl.title}
        </h1>
        <p className="mt-6 max-w-xl text-zinc-600 leading-relaxed text-lg">{tpl.description}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <span className="text-2xl font-semibold text-accent">{tpl.price}</span>
          <a
            href={tpl.checkoutUrl}
            className="inline-flex items-center gap-2 bg-zinc-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-zinc-800 transition"
          >
            <ShoppingBag className="w-4 h-4" /> Buy now
          </a>
          {tpl.demoUrl && (
            <a
              href={tpl.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-black/10 px-6 py-3 rounded-lg text-zinc-700 hover:border-black/20 transition"
            >
              Live demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {tpl.docsUrl && (
            <a
              href={tpl.docsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Documentation <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </section>

      {/* PREVIEW GALLERY */}
      <section className="px-6 lg:px-10 py-16 lg:py-20 border-t border-black/10 max-w-4xl mx-auto">
        <span className="text-sm font-medium text-accent">Preview</span>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {tpl.images
            ? tpl.images.map((src) => (
                <div key={src} className="aspect-[4/3] rounded-xl overflow-hidden relative border border-black/10">
                  <Image src={src} alt={tpl.title} fill className="object-cover" />
                </div>
              ))
            : ["01", "02", "03"].map((n) => (
                <div key={n} className="aspect-[4/3] card-surface rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-semibold text-zinc-300">{n}</span>
                </div>
              ))}
        </div>
        {!tpl.images && (
          <p className="text-xs text-zinc-500 mt-4">Preview images coming soon — placeholder</p>
        )}
      </section>

      {/* FEATURES + PAGES */}
      <section className="px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/10 max-w-4xl mx-auto">
        <div>
          <span className="text-sm font-medium text-accent">Features</span>
          <ul className="mt-5 flex flex-col gap-3">
            {tpl.features.map((f) => (
              <li key={f} className="flex items-center gap-3 border-t border-black/10 pt-3">
                <span className="text-accent">→</span>
                <span className="text-zinc-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-sm font-medium text-accent">Pages included</span>
          <ul className="mt-5 flex flex-col gap-3">
            {tpl.pages.map((p) => (
              <li key={p} className="flex items-center gap-3 border-t border-black/10 pt-3">
                <span className="text-accent">→</span>
                <span className="text-zinc-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-20 lg:py-24 text-center border-t border-black/10">
        <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-zinc-900">
          Ready to ship it?
        </h2>
        <a
          href={tpl.checkoutUrl}
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-lg hover:brightness-110 transition"
        >
          Get {tpl.title} <ArrowRight className="w-4 h-4" />
        </a>
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
