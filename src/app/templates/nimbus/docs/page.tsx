"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, FolderTree, Palette, CreditCard, LayoutGrid, Info, AlertTriangle } from "lucide-react";

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "structure", label: "Project Structure" },
  { id: "content", label: "Editing Content" },
  { id: "pricing", label: "Pricing Plans" },
  { id: "styling", label: "Styling" },
  { id: "checkout", label: "Connecting Checkout" },
];

export default function NimbusDocs() {
  return (
    <div className="bg-[#0a0a0d] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/templates/nimbus" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[#39ff8c] transition-colors mb-10">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to template
        </Link>

        <p className="text-xs uppercase tracking-widest text-[#39ff8c] mb-2">NIMBUS — TEMPLATE GUIDE</p>
        <h1 className="text-3xl font-bold mb-2">Documentation</h1>
        <p className="text-zinc-400 mb-12">
          A Next.js + Tailwind CSS SaaS landing page. Everything lives in one file — no config layer, no CMS.
        </p>

        <nav className="flex flex-wrap gap-3 mb-16">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-xs uppercase tracking-widest border border-[#39ff8c]/20 rounded-full px-4 py-2 text-zinc-400 hover:border-[#39ff8c] hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* OVERVIEW */}
        <section id="overview" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#39ff8c] pl-4 mb-6">1. Overview</h2>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
            <h3 className="text-[#39ff8c] font-semibold mb-3">Key sections</h3>
            <ul className="space-y-2 text-sm text-zinc-400 list-disc pl-5">
              <li>Hero with a CSS-built dashboard mockup — no external screenshots required.</li>
              <li>Feature grid, stats bar and integrations grid.</li>
              <li>Three-tier pricing with a monthly/yearly toggle.</li>
              <li>Testimonials, FAQ accordion and closing CTA.</li>
            </ul>
          </div>
        </section>

        {/* STRUCTURE */}
        <section id="structure" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#39ff8c] pl-4 mb-6 flex items-center gap-2">
            <FolderTree className="w-4 h-4 text-[#39ff8c]" /> 2. Project structure
          </h2>
          <pre className="bg-black/40 border border-white/10 rounded-xl p-5 text-xs sm:text-sm text-[#9cdcfe] overflow-x-auto leading-relaxed">
{`src/app/templates/nimbus/
├── demo/
│   └── page.tsx   // the entire landing page — hero, features,
│                  // stats, integrations, testimonials, pricing, FAQ
└── docs/
    └── page.tsx   // this page`}
          </pre>
          <p className="text-sm text-zinc-400 mt-4">
            All copy and data is declared as constants at the top of <code className="text-[#39ff8c]">demo/page.tsx</code>:{" "}
            <code className="text-[#39ff8c]">FEATURES</code>, <code className="text-[#39ff8c]">PLANS</code>,{" "}
            <code className="text-[#39ff8c]">STATS</code>, <code className="text-[#39ff8c]">INTEGRATIONS</code>,{" "}
            <code className="text-[#39ff8c]">TESTIMONIALS</code> and <code className="text-[#39ff8c]">FAQS</code>.
          </p>
        </section>

        {/* CONTENT */}
        <section id="content" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#39ff8c] pl-4 mb-6 flex items-center gap-2">
            <LayoutGrid className="w-4 h-4 text-[#39ff8c]" /> 3. Editing content
          </h2>
          <p className="text-zinc-400 mb-4">
            Each array maps directly to a section. To rename a feature, edit its entry in <code className="text-[#39ff8c]">FEATURES</code>:
          </p>
          <pre className="bg-black/40 border border-white/10 rounded-xl p-5 text-xs sm:text-sm text-[#d4d4d4] overflow-x-auto leading-relaxed">
{`const FEATURES = [
  { icon: Zap, title: "Instant deploys", desc: "..." },
  // add, remove or reorder entries — the grid adapts automatically
];`}
          </pre>
          <div className="flex gap-3 bg-[#39ff8c]/8 border border-[#39ff8c]/30 rounded-xl p-4 text-sm mt-6">
            <Info className="w-4 h-4 text-[#39ff8c] shrink-0 mt-0.5" />
            <p className="text-white">
              Icons come from <code className="text-[#39ff8c]">lucide-react</code>. Swap the imported icon name to change one.
            </p>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#39ff8c] pl-4 mb-6 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#39ff8c]" /> 4. Pricing plans
          </h2>
          <p className="text-zinc-400 mb-4">
            The pricing toggle reads <code className="text-[#39ff8c]">monthly</code> and{" "}
            <code className="text-[#39ff8c]">yearly</code> prices from the same object — no separate yearly table:
          </p>
          <pre className="bg-black/40 border border-white/10 rounded-xl p-5 text-xs sm:text-sm text-[#d4d4d4] overflow-x-auto leading-relaxed">
{`const PLANS = [
  {
    name: "Growth",
    monthly: 49,
    yearly: 39,        // shown when the Yearly toggle is active
    featured: true,    // highlights this plan with the accent border
    features: ["5 workspaces", "25 team seats", "..."],
  },
];`}
          </pre>
        </section>

        {/* STYLING */}
        <section id="styling" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#39ff8c] pl-4 mb-6 flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#39ff8c]" /> 5. Styling
          </h2>
          <p className="text-zinc-400 mb-4">
            Colors are inline Tailwind hex classes throughout <code className="text-[#39ff8c]">demo/page.tsx</code> — find-and-replace to rebrand:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              ["#0a0a0d", "Background"],
              ["#101013", "Surface (mockup card)"],
              ["#39ff8c", "Accent"],
              ["#ffffff", "Text"],
            ].map(([hex, label]) => (
              <div key={hex} className="border border-white/10 rounded-lg p-3">
                <div className="w-full h-10 rounded-md mb-2" style={{ backgroundColor: hex }} />
                <p className="text-xs text-zinc-400">{label}</p>
                <p className="text-xs text-[#39ff8c]">{hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CHECKOUT */}
        <section id="checkout" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#39ff8c] pl-4 mb-6">6. Connecting checkout</h2>
          <div className="flex gap-3 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-white">
              The &quot;Choose plan&quot; and &quot;Start free trial&quot; buttons are static — they don&apos;t charge anyone yet.
            </p>
          </div>
          <p className="text-zinc-400">
            Point each button&apos;s <code className="text-[#39ff8c]">onClick</code> (or wrap it in an <code className="text-[#39ff8c]">&lt;a&gt;</code>) at
            your checkout link — e.g. a LemonSqueezy or Stripe Checkout URL per plan — to make the pricing section live.
          </p>
        </section>

        <p className="text-xs text-zinc-500 mt-20 pt-8 border-t border-white/10">
          North Kraken Studio — Nimbus v1.0
        </p>
      </div>
    </div>
  );
}
