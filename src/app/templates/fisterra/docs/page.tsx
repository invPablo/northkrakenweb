"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, FolderTree, Palette, CalendarCheck, Languages, Info, AlertTriangle } from "lucide-react";

type Lang = "en" | "es";

const NAV = [
  { id: "overview", en: "Overview", es: "Resumen" },
  { id: "structure", en: "Project Structure", es: "Estructura del Proyecto" },
  { id: "content", en: "Editing Text & Menus", es: "Editar Textos y Menús" },
  { id: "styling", en: "Styling", es: "Estilos" },
  { id: "booking", en: "Booking Form", es: "Formulario de Reserva" },
];

export default function FisterraDocs() {
  const [lang, setLang] = useState<Lang>("en");
  const isEn = lang === "en";

  return (
    <div className="bg-[#07090e] text-[#f5f6f8] min-h-screen font-[family-name:var(--font-montserrat,_inherit)]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <Link href="/templates/fisterra" className="inline-flex items-center gap-2 text-sm text-[#a0aec0] hover:text-[#c5a880] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> {isEn ? "Back to template" : "Volver al template"}
          </Link>
          <div className="flex items-center gap-1 border border-[#c5a880]/30 rounded-full px-1 py-1">
            {(["en", "es"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  lang === l ? "bg-[#c5a880] text-[#07090e]" : "text-[#a0aec0] hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs uppercase tracking-widest text-[#c5a880] mb-2">FISTERRA — TEMPLATE GUIDE</p>
        <h1 className="text-3xl font-bold mb-2">{isEn ? "Documentation" : "Documentación"}</h1>
        <p className="text-[#a0aec0] mb-12">
          {isEn
            ? "This is a Next.js + Tailwind CSS template — not the original static HTML version. Edit the files below directly; there is no config.js or build step beyond Next.js itself."
            : "Esta es la versión Next.js + Tailwind CSS del template, no la versión HTML estática original. Edita los archivos indicados directamente; no existe config.js ni ningún paso de build adicional aparte del propio Next.js."}
        </p>

        <nav className="flex flex-wrap gap-3 mb-16">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-xs uppercase tracking-widest border border-[#c5a880]/20 rounded-full px-4 py-2 text-[#a0aec0] hover:border-[#c5a880] hover:text-white transition-colors"
            >
              {isEn ? n.en : n.es}
            </a>
          ))}
        </nav>

        {/* OVERVIEW */}
        <section id="overview" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#c5a880] pl-4 mb-6">
            {isEn ? "1. Overview" : "1. Resumen"}
          </h2>
          <div className="bg-[#0d1117] border border-[#c5a880]/15 rounded-xl p-6">
            <h3 className="text-[#e2cca9] font-semibold mb-3">{isEn ? "Key features" : "Características clave"}</h3>
            <ul className="space-y-2 text-sm text-[#a0aec0] list-disc pl-5">
              <li>
                {isEn
                  ? "Bilingual ES/EN switcher built with a plain TypeScript dictionary — no i18n library required."
                  : "Selector bilingüe ES/EN con un diccionario en TypeScript — sin librería de i18n."}
              </li>
              <li>
                {isEn
                  ? "Tabbed tasting menus (Alborada / Fisterra / Cellar) with translated dish data per language."
                  : "Menús degustación por pestañas (Alborada / Fisterra / Bodega) con platos traducidos por idioma."}
              </li>
              <li>
                {isEn
                  ? "Reservation form with time-slot picker and a success confirmation modal."
                  : "Formulario de reserva con selector de franja horaria y modal de confirmación."}
              </li>
              <li>
                {isEn
                  ? "Editorial photo gallery using the bundled restaurant photography."
                  : "Galería editorial de fotos usando la fotografía incluida del restaurante."}
              </li>
            </ul>
          </div>
        </section>

        {/* STRUCTURE */}
        <section id="structure" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#c5a880] pl-4 mb-6 flex items-center gap-2">
            <FolderTree className="w-4 h-4 text-[#c5a880]" /> {isEn ? "2. Project structure" : "2. Estructura del proyecto"}
          </h2>
          <pre className="bg-black/40 border border-white/10 rounded-xl p-5 text-xs sm:text-sm text-[#9cdcfe] overflow-x-auto leading-relaxed">
{`src/app/templates/fisterra/
├── demo/
│   ├── page.tsx          ${isEn ? "// the live site (hero, menu, reservations, contact)" : "// la web en vivo (hero, menú, reservas, contacto)"}
│   ├── translations.ts   ${isEn ? "// all UI text + menu data, in ES and EN" : "// todos los textos + datos del menú, en ES y EN"}
│   └── layout.tsx        ${isEn ? "// loads the Cinzel / Playfair Display / Montserrat fonts" : "// carga las fuentes Cinzel / Playfair Display / Montserrat"}
└── docs/
    └── page.tsx          ${isEn ? "// this page" : "// esta página"}

public/templates/fisterra/
├── hero_dish.png
├── chef_plating.png
└── restaurant_interior.png`}
          </pre>
        </section>

        {/* CONTENT */}
        <section id="content" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#c5a880] pl-4 mb-6 flex items-center gap-2">
            <Languages className="w-4 h-4 text-[#c5a880]" /> {isEn ? "3. Editing text & menus" : "3. Editar textos y menús"}
          </h2>
          <p className="text-[#a0aec0] mb-4">
            {isEn
              ? "All copy lives in one file: "
              : "Todo el contenido vive en un único archivo: "}
            <code className="text-[#c5a880]">demo/translations.ts</code>.{" "}
            {isEn
              ? "It exports two objects:"
              : "Exporta dos objetos:"}
          </p>
          <ul className="space-y-2 text-sm text-[#a0aec0] list-disc pl-5 mb-6">
            <li>
              <code className="text-[#e2cca9]">UI</code> —{" "}
              {isEn
                ? "short interface strings (nav labels, section titles, form labels), each with an es and en version."
                : "los textos cortos de interfaz (menú, títulos de sección, etiquetas de formulario), cada uno con su versión es y en."}
            </li>
            <li>
              <code className="text-[#e2cca9]">MENUS</code> —{" "}
              {isEn
                ? "the tasting-menu dishes, grouped by language and then by tab (alborada / fisterra / bodega)."
                : "los platos de cada menú degustación, agrupados por idioma y luego por pestaña (alborada / fisterra / bodega)."}
            </li>
          </ul>
          <pre className="bg-black/40 border border-white/10 rounded-xl p-5 text-xs sm:text-sm text-[#d4d4d4] overflow-x-auto leading-relaxed mb-6">
{`// demo/translations.ts
export const MENUS = {
  es: {
    alborada: {
      price: "£125",
      dishes: [
        ["Vieiras de la Isla de Skye", "Entrante", "Láminas finas..."],
        // add or edit dishes here ↑
      ],
    },
  },
  en: { /* same structure, English copy */ },
};`}
          </pre>
          <div className="flex gap-3 bg-[#c5a880]/8 border border-[#c5a880]/30 rounded-xl p-4 text-sm">
            <Info className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
            <p className="text-[#f5f6f8]">
              {isEn
                ? "Edit a dish in both the es and en blocks, or it will only show correctly in one language."
                : "Edita un plato en ambos bloques (es y en), o solo se verá correcto en un idioma."}
            </p>
          </div>
        </section>

        {/* STYLING */}
        <section id="styling" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#c5a880] pl-4 mb-6 flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#c5a880]" /> {isEn ? "4. Styling" : "4. Estilos"}
          </h2>
          <p className="text-[#a0aec0] mb-4">
            {isEn
              ? "This port uses Tailwind utility classes with inline hex colors (e.g. "
              : "Este port usa clases de Tailwind con colores hexadecimales en línea (ej. "}
            <code className="text-[#c5a880]">bg-[#090c10]</code>, <code className="text-[#c5a880]">text-[#c5a880]</code>
            {isEn ? ") directly in " : ") directamente en "}
            <code className="text-[#c5a880]">demo/page.tsx</code>
            {isEn
              ? " — there is no central CSS variables file like the original HTML version."
              : " — no existe un archivo central de variables CSS como en la versión HTML original."}
          </p>
          <p className="text-[#a0aec0] mb-4">
            {isEn ? "The palette used throughout:" : "La paleta usada en toda la web:"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              ["#090c10", isEn ? "Background" : "Fondo"],
              ["#121820", isEn ? "Surface" : "Superficie"],
              ["#c5a880", isEn ? "Gold accent" : "Acento dorado"],
              ["#f5f6f8", isEn ? "Text" : "Texto"],
            ].map(([hex, label]) => (
              <div key={hex} className="border border-white/10 rounded-lg p-3">
                <div className="w-full h-10 rounded-md mb-2" style={{ backgroundColor: hex }} />
                <p className="text-xs text-[#a0aec0]">{label}</p>
                <p className="text-xs text-[#e2cca9]">{hex}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#a0aec0]">
            {isEn
              ? "To rebrand, find-and-replace these hex values inside demo/page.tsx."
              : "Para cambiar la marca, busca y reemplaza estos valores hexadecimales dentro de demo/page.tsx."}
          </p>
        </section>

        {/* BOOKING */}
        <section id="booking" className="mb-16 scroll-mt-10">
          <h2 className="text-xl font-semibold border-l-2 border-[#c5a880] pl-4 mb-6 flex items-center gap-2">
            <CalendarCheck className="w-4 h-4 text-[#c5a880]" /> {isEn ? "5. Booking form" : "5. Formulario de reserva"}
          </h2>
          <div className="flex gap-3 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[#f5f6f8]">
              {isEn
                ? "By default the form only shows a local success modal — it does not send an email anywhere yet. Wire it up before going live."
                : "Por defecto el formulario solo muestra un modal de éxito local — todavía no envía ningún email. Conéctalo antes de publicar el sitio."}
            </p>
          </div>
          <p className="text-[#a0aec0] mb-4">
            {isEn
              ? "Open demo/page.tsx and find the handleSubmit function. The simplest option is "
              : "Abre demo/page.tsx y busca la función handleSubmit. La opción más simple es "}
            <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-[#c5a880] underline">
              Formspree
            </a>
            :
          </p>
          <pre className="bg-black/40 border border-white/10 rounded-xl p-5 text-xs sm:text-sm text-[#d4d4d4] overflow-x-auto leading-relaxed">
{`const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: form,
    headers: { Accept: "application/json" },
  });
  setSummary({ name: ..., guests: ..., date: ... });
  setShowModal(true);
};`}
          </pre>
        </section>

        <p className="text-xs text-[#718096] mt-20 pt-8 border-t border-white/10">
          North Kraken Studio — Fisterra v1.0 (Next.js port)
        </p>
      </div>
    </div>
  );
}
