import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background-dark text-foreground-light min-h-screen font-sans">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-background-dark/90 backdrop-blur-md border-b border-black/10">
        <Link href="/" className="font-display uppercase text-lg tracking-tight text-zinc-900">
          North <span className="text-accent">Kraken</span>
        </Link>
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to shop
        </Link>
      </header>

      <section className="px-6 lg:px-10 pt-32 pb-24 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">{title}</h1>
        <p className="mt-4 text-xs uppercase tracking-wide text-zinc-500">Last updated: {updated}</p>

        <div className="mt-12 flex flex-col gap-8 text-zinc-600 leading-relaxed [&_h2]:font-semibold [&_h2]:text-xl [&_h2]:text-zinc-900 [&_h2]:mt-4 [&_p]:text-base [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_a]:text-accent [&_a]:underline [&_a:hover]:opacity-80">
          {children}
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display uppercase text-sm text-zinc-900">North Kraken</span>
        <span className="text-xs text-zinc-500">© {new Date().getFullYear()} North Kraken Studio</span>
      </footer>
    </div>
  );
}
