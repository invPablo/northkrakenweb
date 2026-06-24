"use client";

import Link from "next/link";
import { ArrowLeft, FolderTree, Palette, Dumbbell, Image as ImageIcon, Info, AlertTriangle } from "lucide-react";

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "structure", label: "Project Structure" },
  { id: "content", label: "Editing Content" },
  { id: "styling", label: "Styling" },
  { id: "media", label: "Replacing Images" },
  { id: "booking", label: "Schedule & Booking" },
];

export default function IronDocs() {
  return (
    <div className="bg-[#0a0a0a] text-[#f4f4f4] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/templates/iron-gym" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[#ccff00] transition-colors mb-10">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to template
        </Link>

        <p className="text-xs uppercase tracking-widest text-[#ccff00] mb-2">IRON — TEMPLATE GUIDE</p>
        <h1 className="text-3xl font-bold mb-2">Documentation</h1>
        <p className="text-zinc-400 mb-12">
          A Next.js + Tailwind CSS gym & fitness template, with dedicated detail pages for classes and trainers.
        </p>

        <nav className="flex flex-wrap gap-3 mb-16">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-xs uppercase tracking-widest border border-[#ccff00]/20 rounded-full px-4 py-2 text-zinc-400 hover:border-[#ccff00] hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* OVERVIEW */}
        <section id="overview" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#ccff00] pl-4 mb-6">1. Overview</h2>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
            <h3 className="text-[#ccff00] font-semibold mb-3">Key sections</h3>
            <ul className="space-y-2 text-sm text-zinc-400 list-disc pl-5">
              <li>Hero, About, Classes, Schedule, Trainers, Gallery, Testimonials, Pricing and FAQ — all on the homepage.</li>
              <li>Each class and each trainer has its own detail page with a real URL (<code className="text-[#ccff00]">/classes/[slug]</code>, <code className="text-[#ccff00]">/trainers/[slug]</code>).</li>
              <li>Neon-on-black styling, fully isolated from this marketplace&apos;s own design system — safe to drop into any project.</li>
            </ul>
          </div>
        </section>

        {/* STRUCTURE */}
        <section id="structure" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#ccff00] pl-4 mb-6 flex items-center gap-2">
            <FolderTree className="w-4 h-4 text-[#ccff00]" /> 2. Project structure
          </h2>
          <pre className="bg-black/40 border border-white/10 rounded-xl p-5 text-xs sm:text-sm text-[#9cdcfe] overflow-x-auto leading-relaxed">
{`src/app/
├── page.tsx                  // homepage — assembles every section
├── layout.tsx                // fonts (Inter + Oswald) and CSS scope
├── iron.css                  // color variables, scoped under .iron-scope
├── classes/[slug]/page.tsx   // class detail page
├── trainers/[slug]/page.tsx  // trainer detail page
├── _components/
│   ├── layout/                Navbar.tsx, Footer.tsx
│   ├── sections/               Hero, About, Classes, Schedule,
│   │                           Trainers, Gallery, Testimonials,
│   │                           Pricing, FAQ, Marquee
│   └── ui/ScrollReveal.tsx    // scroll-in animation wrapper
└── _data/mockData.ts         // all text content + class/trainer data`}
          </pre>
          <p className="text-sm text-zinc-400 mt-4">
            The <code className="text-[#ccff00]">_components</code> and <code className="text-[#ccff00]">_data</code> folders use a leading underscore
            so Next.js never treats them as routes — only <code className="text-[#ccff00]">page.tsx</code> files are routable.
          </p>
        </section>

        {/* CONTENT */}
        <section id="content" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#ccff00] pl-4 mb-6 flex items-center gap-2">
            <Dumbbell className="w-4 h-4 text-[#ccff00]" /> 3. Editing content
          </h2>
          <p className="text-zinc-400 mb-4">
            Everything — nav links, classes, trainers, schedule, gallery, testimonials, pricing plans, FAQs — lives in one file:{" "}
            <code className="text-[#ccff00]">_data/mockData.ts</code>.
          </p>
          <pre className="bg-black/40 border border-white/10 rounded-xl p-5 text-xs sm:text-sm text-[#d4d4d4] overflow-x-auto leading-relaxed mb-6">
{`export const classesData = [
  {
    slug: "powerlifting",        // becomes the URL: /classes/powerlifting
    title: "Powerlifting",
    description: "Build raw strength with heavy compound movements.",
    longDescription: "...",      // shown on the detail page
    trainer: "Mark Titan",
    trainerSlug: "mark-titan",   // links to /trainers/mark-titan
  },
];`}
          </pre>
          <div className="flex gap-3 bg-[#ccff00]/8 border border-[#ccff00]/30 rounded-xl p-4 text-sm">
            <Info className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
            <p className="text-white">
              Adding a new class or trainer to the array automatically creates its detail page — no extra routing needed.
            </p>
          </div>
        </section>

        {/* STYLING */}
        <section id="styling" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#ccff00] pl-4 mb-6 flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#ccff00]" /> 4. Styling
          </h2>
          <p className="text-zinc-400 mb-4">
            Colors are CSS variables defined in <code className="text-[#ccff00]">iron.css</code>, scoped under the{" "}
            <code className="text-[#ccff00]">.iron-scope</code> wrapper so they never leak outside this template:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              ["#0a0a0a", "Background"],
              ["#111111", "Card background"],
              ["#ccff00", "Accent (neon)"],
              ["#f4f4f4", "Text"],
            ].map(([hex, label]) => (
              <div key={hex} className="border border-white/10 rounded-lg p-3">
                <div className="w-full h-10 rounded-md mb-2" style={{ backgroundColor: hex }} />
                <p className="text-xs text-zinc-400">{label}</p>
                <p className="text-xs text-[#ccff00]">{hex}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-400">
            To rebrand, edit the <code className="text-[#ccff00]">:root</code>-style variables at the top of{" "}
            <code className="text-[#ccff00]">iron.css</code> — every component reads color through{" "}
            <code className="text-[#ccff00]">var(--accent)</code> etc., so one edit updates the whole site.
            Headings use Oswald, body text uses Inter — both loaded in <code className="text-[#ccff00]">layout.tsx</code> via{" "}
            <code className="text-[#ccff00]">next/font/google</code>.
          </p>
        </section>

        {/* MEDIA */}
        <section id="media" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#ccff00] pl-4 mb-6 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-[#ccff00]" /> 5. Replacing images
          </h2>
          <p className="text-zinc-400 mb-4">
            Photography lives in <code className="text-[#ccff00]">public/</code>: a hero background, an about-section photo,
            three trainer portraits and six gallery shots. Swap any file keeping the same name, or update the path in{" "}
            <code className="text-[#ccff00]">_data/mockData.ts</code> (trainers, gallery) or directly in{" "}
            <code className="text-[#ccff00]">Hero.tsx</code> / <code className="text-[#ccff00]">About.tsx</code> (hero and about images).
          </p>
        </section>

        {/* BOOKING */}
        <section id="booking" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#ccff00] pl-4 mb-6">6. Schedule &amp; booking</h2>
          <div className="flex gap-3 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-white">
              The schedule&apos;s booking flow shows a confirmation modal locally — it doesn&apos;t send a real reservation anywhere yet.
            </p>
          </div>
          <p className="text-zinc-400">
            Open <code className="text-[#ccff00]">_components/sections/Schedule.tsx</code> and connect the booking handler to your
            own backend, a form service like Formspree, or a calendar/CRM API before going live.
          </p>
        </section>

        <p className="text-xs text-zinc-500 mt-20 pt-8 border-t border-white/10">
          North Kraken Studio — Iron v1.0
        </p>
      </div>
    </div>
  );
}
