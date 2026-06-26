import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
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

export default async function CaseStudyPage({
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
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-background-dark/95 backdrop-blur-md border-b-2 border-black">
        <Link href="/" className="font-display uppercase text-lg tracking-tight">
          North Kraken
        </Link>
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to work
        </Link>
      </header>

      {/* HERO */}
      <section className="px-6 lg:px-10 pt-32 pb-16 lg:pb-20 max-w-4xl mx-auto">
        <span className="text-sm font-bold uppercase tracking-widest">{tpl.type}</span>
        <h1 className="mt-4 font-display uppercase text-5xl sm:text-6xl lg:text-7xl tracking-tight">
          {tpl.title}
        </h1>
        <p className="mt-6 max-w-xl text-zinc-600 leading-relaxed text-lg">{tpl.description}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {tpl.demoUrl && (
            <a
              href={tpl.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 hover:bg-zinc-800 transition"
            >
              View live build <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {tpl.docsUrl && (
            <a
              href={tpl.docsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity"
            >
              Documentation <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </section>

      {/* PREVIEW GALLERY */}
      <section className="px-6 lg:px-10 py-16 lg:py-20 border-t-2 border-black max-w-4xl mx-auto">
        <span className="text-sm font-bold uppercase tracking-widest">Preview</span>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {tpl.images
            ? tpl.images.map((src) => (
                <div key={src} className="aspect-[4/3] overflow-hidden relative border-2 border-black">
                  <Image src={src} alt={tpl.title} fill className="object-cover" />
                </div>
              ))
            : ["01", "02", "03"].map((n) => (
                <div key={n} className="aspect-[4/3] border-2 border-black flex items-center justify-center">
                  <span className="font-display text-3xl text-zinc-300">{n}</span>
                </div>
              ))}
        </div>
        {!tpl.images && (
          <p className="text-xs text-zinc-500 mt-4">Preview images coming soon — placeholder</p>
        )}
      </section>

      {/* FEATURES + PAGES */}
      <section className="px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t-2 border-black max-w-4xl mx-auto">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest">What it includes</span>
          <ul className="mt-5 flex flex-col gap-3">
            {tpl.features.map((f) => (
              <li key={f} className="flex items-center gap-3 border-t border-black/15 pt-3">
                <span>→</span>
                <span className="text-zinc-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-widest">Pages built</span>
          <ul className="mt-5 flex flex-col gap-3">
            {tpl.pages.map((p) => (
              <li key={p} className="flex items-center gap-3 border-t border-black/15 pt-3">
                <span>→</span>
                <span className="text-zinc-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-20 lg:py-24 text-center border-t-2 border-black">
        <h2 className="font-display uppercase text-3xl lg:text-5xl tracking-tight">
          Want something like this?
        </h2>
        <p className="mt-4 text-zinc-600">Tell us what you&apos;re building and we&apos;ll take it from there.</p>
        <Link
          href="/#contact"
          className="mt-8 inline-flex items-center gap-2 bg-black text-white font-semibold px-7 py-3.5 hover:bg-zinc-800 transition"
        >
          Start a project <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-black px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display uppercase text-sm">North Kraken</span>
        <div className="flex gap-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} North Kraken Studio</span>
          <Link href="/#contact" className="hover:text-black transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
