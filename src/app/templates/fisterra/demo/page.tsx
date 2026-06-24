"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, AtSign, Share2, Hotel, X, CheckCircle2 } from "lucide-react";
import { UI, MENUS, GALLERY_KEYS, type Lang } from "./translations";

const TIME_SLOTS = ["13:00", "13:30", "20:00", "20:30"];

const GALLERY_IMAGES = [
  "/templates/fisterra/restaurant_interior.png",
  "/templates/fisterra/hero_dish.png",
  "/templates/fisterra/chef_plating.png",
  "/templates/fisterra/restaurant_interior.png",
];

function Logo() {
  return (
    <span className="font-[family-name:var(--font-cinzel)] tracking-widest text-lg">
      FISTERRA <Star className="inline w-3 h-3 -translate-y-0.5 text-[#c5a880]" fill="currentColor" />
    </span>
  );
}

export default function FisterraDemo() {
  const [lang, setLang] = useState<Lang>("es");
  const t = UI[lang];
  const menus = MENUS[lang];

  const [tab, setTab] = useState<keyof typeof menus>("alborada");
  const [time, setTime] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [summary, setSummary] = useState({ name: "", guests: "", date: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setSummary({
      name: String(form.get("name") || ""),
      guests: String(form.get("guests") || ""),
      date: String(form.get("date") || ""),
    });
    setShowModal(true);
  };

  return (
    <div className="bg-[#090c10] text-[#f5f6f8] font-[family-name:var(--font-montserrat)] font-light min-h-screen">
      {/* DEMO BANNER */}
      <div className="bg-[#c5a880] text-[#090c10] text-center text-xs py-2 px-4 flex items-center justify-center gap-3">
        <span>{t.demoBanner}</span>
        <Link href="/" className="underline">{t.backToShop}</Link>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#090c10]/90 backdrop-blur-md border-b border-[#c5a880]/15">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest">
            <a href="#concepto" className="hover:text-[#c5a880] transition-colors">{t.navConcept}</a>
            <a href="#menu" className="hover:text-[#c5a880] transition-colors">{t.navKitchen}</a>
            <a href="#experiencia" className="hover:text-[#c5a880] transition-colors">{t.navExperience}</a>
            <a href="#contacto" className="hover:text-[#c5a880] transition-colors">{t.navContact}</a>
            <div className="flex items-center gap-1 border border-[#c5a880]/30 rounded-full px-1 py-1">
              {(["es", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full text-[10px] transition-colors ${
                    lang === l ? "bg-[#c5a880] text-[#090c10]" : "text-[#a0aec0] hover:text-white"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="#reservas"
              className="border border-[#c5a880] text-[#c5a880] px-5 py-2 rounded-sm hover:bg-[#c5a880] hover:text-[#090c10] transition-colors"
            >
              {t.navBook}
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="/templates/fisterra/hero_dish.png"
          alt="Fisterra signature dish"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/70 to-[#090c10]/40" />

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center justify-center gap-2 text-[#c5a880] text-sm uppercase tracking-[0.2em] mb-6">
            <Star className="w-4 h-4" fill="currentColor" />
            <Star className="w-4 h-4" fill="currentColor" />
            <span>{t.heroStarsTag}</span>
          </div>
          <h1 className="font-[family-name:var(--font-cinzel)] text-5xl sm:text-6xl mb-4">Fisterra</h1>
          <p className="font-[family-name:var(--font-playfair)] italic text-lg text-[#a0aec0] mb-6">
            {t.heroSub}
          </p>
          <p className="text-[#a0aec0] max-w-md mx-auto mb-10">{t.heroDesc}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#reservas" className="bg-[#c5a880] text-[#090c10] px-8 py-3 rounded-sm text-sm uppercase tracking-widest hover:brightness-110 transition">
              {t.heroBtnBook}
            </a>
            <a href="#menu" className="border border-[#c5a880] text-[#c5a880] px-8 py-3 rounded-sm text-sm uppercase tracking-widest hover:bg-[#c5a880] hover:text-[#090c10] transition">
              {t.heroBtnMenu}
            </a>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section id="concepto" className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="font-[family-name:var(--font-playfair)] italic text-[#c5a880]">{t.conceptSubtitle}</span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl lg:text-4xl mt-2 mb-6">{t.conceptTitle}</h2>
          <blockquote className="font-[family-name:var(--font-playfair)] italic text-xl text-[#e2cca9] border-l-2 border-[#c5a880] pl-5 mb-6">
            {t.conceptQuote}
          </blockquote>
          <p className="text-[#a0aec0] mb-4 leading-relaxed">
            {t.conceptP1Pre}
            <strong className="text-[#f5f6f8]">{t.conceptChef}</strong>
            {t.conceptP1Post}
          </p>
          <p className="text-[#a0aec0] leading-relaxed">{t.conceptP2}</p>
        </div>
        <div className="relative rounded-md overflow-hidden border border-[#c5a880]/20">
          <Image src="/templates/fisterra/chef_plating.png" alt="Chef plating a dish" width={600} height={700} className="w-full h-auto" />
          <div className="absolute bottom-4 right-4 bg-[#090c10]/90 border border-[#c5a880]/40 rounded-sm px-4 py-3 text-center">
            <span className="block text-[#c5a880] text-lg">★</span>
            <span className="text-xs uppercase tracking-widest">{t.michelinBadge}<br />{t.michelinBadge2}</span>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 px-6 bg-[#121820]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-[family-name:var(--font-playfair)] italic text-[#c5a880]">{t.menuSubtitle}</span>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl lg:text-4xl mt-2">{t.menuTitle}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {(["alborada", "fisterra", "bodega"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-6 py-2.5 text-xs uppercase tracking-widest rounded-sm border transition-colors ${
                  tab === key
                    ? "bg-[#c5a880] text-[#090c10] border-[#c5a880]"
                    : "border-[#c5a880]/30 text-[#a0aec0] hover:border-[#c5a880]"
                }`}
              >
                {key === "alborada" ? t.tabAlborada : key === "fisterra" ? t.tabFisterra : t.tabBodega}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-10 text-center">
            <span className="font-[family-name:var(--font-cinzel)] text-2xl text-[#c5a880]">{menus[tab].price}</span>
            <p className="text-[#a0aec0] text-sm max-w-md text-left">{menus[tab].desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menus[tab].dishes.map(([title, tag, desc]) => (
              <div key={title} className="bg-[#0e1319]/70 border border-[#c5a880]/15 rounded-sm p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-[family-name:var(--font-cinzel)] text-lg">{title}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880] border border-[#c5a880]/40 rounded-full px-3 py-1 shrink-0">
                    {tag}
                  </span>
                </div>
                <p className="text-sm text-[#a0aec0] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#718096] text-center mt-10 max-w-xl mx-auto">{t.menuNote}</p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experiencia" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-14">
          <div>
            <span className="font-[family-name:var(--font-playfair)] italic text-[#c5a880]">{t.expSubtitle}</span>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl lg:text-4xl mt-2 mb-6">{t.expTitle}</h2>
            <p className="text-[#a0aec0] mb-4 leading-relaxed">{t.expP1}</p>
            <p className="text-[#a0aec0] leading-relaxed">{t.expP2}</p>
          </div>
          <div className="flex gap-8 justify-center md:justify-end">
            {[["32", t.statGuests], ["12", t.statTables], ["1", t.statStars]].map(([n, l]) => (
              <div key={l} className="text-center">
                <span className="block font-[family-name:var(--font-cinzel)] text-4xl text-[#c5a880]">{n}</span>
                <span className="text-xs uppercase tracking-widest text-[#a0aec0]">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY_KEYS.map((key, i) => (
            <div key={key} className="relative aspect-[3/4] rounded-sm overflow-hidden group">
              <Image src={GALLERY_IMAGES[i]} alt={t[key]} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs uppercase tracking-widest">{t[key]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RESERVATIONS */}
      <section id="reservas" className="py-24 px-6 bg-[#121820]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-[family-name:var(--font-playfair)] italic text-[#c5a880]">{t.resSubtitle}</span>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl lg:text-4xl mt-2">{t.resTitle}</h2>
          </div>

          <p className="text-[#a0aec0] text-center mb-10">{t.resIntro}</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#a0aec0]">{t.formName}</label>
              <input name="name" required placeholder={t.formNamePlaceholder} className="bg-[#0e1319] border border-[#c5a880]/20 rounded-sm px-4 py-3 focus:border-[#c5a880] outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#a0aec0]">{t.formEmail}</label>
              <input type="email" required placeholder="name@example.com" className="bg-[#0e1319] border border-[#c5a880]/20 rounded-sm px-4 py-3 focus:border-[#c5a880] outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#a0aec0]">{t.formGuests}</label>
              <select name="guests" required defaultValue="" className="bg-[#0e1319] border border-[#c5a880]/20 rounded-sm px-4 py-3 focus:border-[#c5a880] outline-none">
                <option value="" disabled>{t.formGuestsSelect}</option>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} {n > 1 ? t.formGuestSuffixPlural : t.formGuestSuffix}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#a0aec0]">{t.formDate}</label>
              <input type="date" name="date" required className="bg-[#0e1319] border border-[#c5a880]/20 rounded-sm px-4 py-3 focus:border-[#c5a880] outline-none" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#a0aec0]">{t.formTime}</label>
              <div className="flex flex-wrap gap-3">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`px-5 py-2.5 rounded-sm border text-sm transition-colors ${
                      time === slot
                        ? "bg-[#c5a880] text-[#090c10] border-[#c5a880]"
                        : "border-[#c5a880]/30 hover:border-[#c5a880]"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#a0aec0]">{t.formDietary}</label>
              <textarea rows={3} placeholder={t.formDietaryPlaceholder} className="bg-[#0e1319] border border-[#c5a880]/20 rounded-sm px-4 py-3 focus:border-[#c5a880] outline-none" />
            </div>
            <div className="md:col-span-2 flex items-start gap-3 text-sm text-[#a0aec0]">
              <input type="checkbox" required className="mt-1" />
              <span>{t.formPolicy}</span>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button type="submit" className="bg-[#c5a880] text-[#090c10] px-10 py-3 rounded-sm text-sm uppercase tracking-widest hover:brightness-110 transition">
                {t.formSubmit}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-[family-name:var(--font-playfair)] italic text-[#c5a880]">{t.contactSubtitle}</span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl lg:text-4xl mt-2">{t.contactTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-[family-name:var(--font-cinzel)] text-lg text-[#c5a880] mb-2">{t.contactLocation}</h3>
              <p className="text-[#a0aec0]">{t.contactAddress}<br />{t.contactCountry}</p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-cinzel)] text-lg text-[#c5a880] mb-2">{t.contactBookings}</h3>
              <p className="text-[#a0aec0]">
                <a href="tel:+441315550198" className="hover:text-[#c5a880]">+44 (0) 131 555 0198</a>
              </p>
              <p className="text-[#a0aec0]">
                <a href="mailto:reservas@fisterra-restaurant.co.uk" className="hover:text-[#c5a880]">reservas@fisterra-restaurant.co.uk</a>
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-cinzel)] text-lg text-[#c5a880] mb-2">{t.contactHours}</h3>
              <p className="text-[#a0aec0]"><strong className="text-[#f5f6f8]">{t.hoursWeek}</strong> {t.hoursWeekTime}</p>
              <p className="text-[#a0aec0]"><strong className="text-[#f5f6f8]">{t.hoursSunday}</strong> {t.hoursSundayTime}</p>
              <p className="text-[#a0aec0]"><strong className="text-[#f5f6f8]">{t.hoursClosed}</strong> {t.hoursClosedTime}</p>
            </div>
            <div className="flex gap-3">
              {[AtSign, Share2, Hotel].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#c5a880]/30 flex items-center justify-center hover:bg-[#c5a880] hover:text-[#090c10] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative rounded-sm overflow-hidden border border-[#c5a880]/20 bg-[#121820] min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-4 h-4 rounded-full bg-[#c5a880] mx-auto mb-3 animate-pulse" />
              <p className="font-[family-name:var(--font-cinzel)] text-[#c5a880]">FISTERRA ★</p>
              <p className="text-xs text-[#a0aec0] mt-1">32 St Andrew Square, Edinburgh</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#c5a880]/15 py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo />
            <p className="text-sm text-[#a0aec0] mt-4 leading-relaxed">{t.footerDesc}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#c5a880] mb-4">{t.footerNav}</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#a0aec0]">
              <li><a href="#concepto" className="hover:text-[#c5a880]">{t.navConcept}</a></li>
              <li><a href="#menu" className="hover:text-[#c5a880]">{t.footerMenus}</a></li>
              <li><a href="#experiencia" className="hover:text-[#c5a880]">{t.navExperience}</a></li>
              <li><a href="#contacto" className="hover:text-[#c5a880]">{t.navContact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#c5a880] mb-4">{t.footerLegal}</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#a0aec0]">
              <li><a href="#" className="hover:text-[#c5a880]">{t.footerPrivacy}</a></li>
              <li><a href="#" className="hover:text-[#c5a880]">{t.footerTerms}</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#c5a880]/10 flex flex-col md:flex-row justify-between text-xs text-[#718096] gap-2">
          <span>{t.footerCopy}</span>
          <span>Edinburgh, Scotland</span>
        </div>
      </footer>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] px-6">
          <div className="bg-[#121820] border border-[#c5a880]/30 rounded-sm max-w-md w-full p-8 relative text-center">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-[#a0aec0] hover:text-white" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <CheckCircle2 className="w-12 h-12 text-[#c5a880] mx-auto mb-4" />
            <h3 className="font-[family-name:var(--font-cinzel)] text-xl mb-3">{t.modalTitle}</h3>
            <p className="text-sm text-[#a0aec0] mb-6">{t.modalText}</p>
            <div className="text-left text-sm text-[#a0aec0] bg-[#0e1319] rounded-sm p-4 mb-6 flex flex-col gap-1">
              <p><strong className="text-[#f5f6f8]">{t.modalGuest}</strong> {summary.name}</p>
              <p><strong className="text-[#f5f6f8]">{t.modalGuests}</strong> {summary.guests}</p>
              <p><strong className="text-[#f5f6f8]">{t.modalDate}</strong> {summary.date}</p>
              <p><strong className="text-[#f5f6f8]">{t.modalTime}</strong> {time || "—"}</p>
            </div>
            <button onClick={() => setShowModal(false)} className="bg-[#c5a880] text-[#090c10] px-8 py-3 rounded-sm text-sm uppercase tracking-widest hover:brightness-110 transition">
              {t.modalClose}
            </button>
          </div>
        </div>
      )}

      {/* BACK TO SHOP FLOATING LINK */}
      <Link
        href="/"
        className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 bg-[#090c10] border border-[#c5a880]/40 text-[#c5a880] text-xs uppercase tracking-widest px-4 py-2.5 rounded-full hover:bg-[#c5a880] hover:text-[#090c10] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> North Kraken Shop
      </Link>
    </div>
  );
}
