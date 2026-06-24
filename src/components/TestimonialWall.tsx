"use client";

import React from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  { quote: "We launched our agency site in a weekend. The template did 90% of the work for us.", name: "Mara Lindqvist", role: "Founder, Studio Halo" },
  { quote: "Cleanest Next.js codebase I've bought. No bloat, no mystery dependencies.", name: "Theo Brandt", role: "Frontend Engineer" },
  { quote: "Support actually replied within a day and fixed our deploy issue for free.", name: "Inés Calvo", role: "Indie Maker" },
  { quote: "Iron Gym's booking flow alone saved us weeks of dev time.", name: "Carlos Medina", role: "Owner, Forge Fitness" },
  { quote: "Fisterra's reservation system looked like a custom build, not a template.", name: "Élodie Marchand", role: "Restaurant Consultant" },
  { quote: "Nimbus made our pricing page conversion-ready out of the box.", name: "Jonas Vermeer", role: "Growth Lead" },
  { quote: "The Tailwind config alone is worth the price — saved hours of setup.", name: "Priya Raman", role: "Frontend Developer" },
  { quote: "We swapped the copy and images and had a live site in under two hours.", name: "Liam O'Sullivan", role: "Freelance Developer" },
  { quote: "Finally a template that doesn't look like every other SaaS landing page.", name: "Nadia Hoffmann", role: "Product Designer" },
  { quote: "Code quality is genuinely production-grade, not just demo-grade.", name: "Marco Tessaro", role: "Lead Engineer, Vantage" },
  { quote: "Our client thought we built it from scratch — that's how good it looked.", name: "Sofia Russo", role: "Agency Owner" },
  { quote: "The dark theme and animations gave our studio site real personality.", name: "Hugo Lindberg", role: "Creative Director" },
  { quote: "Deployed to Vercel in minutes, zero config headaches.", name: "Aisha Bello", role: "Indie Hacker" },
  { quote: "Best $59 I've spent on a SaaS landing page, hands down.", name: "Tomás Ibáñez", role: "Founder, Loopwise" },
  { quote: "The gym template's class schedule UI is genuinely better than ours was.", name: "Erik Sandberg", role: "Gym Manager" },
  { quote: "Documentation made customizing the content config painless.", name: "Yuki Tanaka", role: "Frontend Developer" },
  { quote: "Responsive on every device we tested without touching a line of CSS.", name: "Camille Dubois", role: "Web Designer" },
  { quote: "We've bought three templates from North Kraken now — consistent quality every time.", name: "Adrian Wolski", role: "Studio Founder" },
  { quote: "The restaurant template's reservation flow felt like a SaaS product.", name: "Beatriz Almeida", role: "F&B Consultant" },
  { quote: "Clean component structure made it trivial to extend.", name: "Daniel Kessler", role: "Full-stack Developer" },
  { quote: "Our bounce rate dropped after switching to the Nimbus landing layout.", name: "Grace Okafor", role: "Marketing Lead" },
  { quote: "Zero bloat, exactly as advertised. Refreshing for a template marketplace.", name: "Viktor Petrov", role: "Software Engineer" },
  { quote: "The trainer profile pages were a feature we didn't expect at this price.", name: "Lucía Fernández", role: "Personal Trainer" },
  { quote: "Support helped us with a custom tweak well beyond what I expected.", name: "Noah Bergström", role: "Solo Founder" },
  { quote: "Animations feel premium without hurting performance scores.", name: "Isabela Costa", role: "Frontend Engineer" },
  { quote: "Migrated our agency portfolio over a single afternoon.", name: "Felix Brandt", role: "Creative Studio Lead" },
  { quote: "The FAQ accordion and pricing toggle alone saved us a sprint.", name: "Hana Kobayashi", role: "Product Manager" },
  { quote: "Honestly didn't expect this level of polish for the price point.", name: "Mateo Rojas", role: "Indie Developer" },
  { quote: "Our gym signups went up after the new booking-style schedule page.", name: "Sven Lindqvist", role: "Gym Owner" },
  { quote: "TypeScript types everywhere — made customizing genuinely safe.", name: "Olivia Park", role: "Software Engineer" },
  { quote: "The bilingual setup on Fisterra worked perfectly for our ES/EN audience.", name: "Renata Silva", role: "Restaurant Owner" },
  { quote: "Every section felt intentional, nothing felt like filler content.", name: "Aleksander Nowak", role: "UX Designer" },
  { quote: "Bought it for one project, ended up using it as our agency's go-to starter.", name: "Chloé Bernard", role: "Agency Co-founder" },
  { quote: "The SOUR template's scroll effect alone justified the price for our studio.", name: "Diego Castillo", role: "Studio Director" },
  { quote: "Straightforward to theme — changed colors and fonts in under 10 minutes.", name: "Freya Johansson", role: "Brand Designer" },
  { quote: "Best template purchase experience I've had — fast delivery, clear docs.", name: "Ibrahim Yilmaz", role: "Freelancer" },
  { quote: "We use Nimbus as the base for every client SaaS project now.", name: "Rosa Fernandes", role: "Dev Agency Owner" },
  { quote: "Genuinely production-ready, not just a pretty Figma-to-code export.", name: "Connor Walsh", role: "Senior Developer" },
];

function Column({
  items,
  direction,
  duration,
}: {
  items: Testimonial[];
  direction: "up" | "down";
  duration: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative h-[560px] overflow-hidden">
      <div
        className={direction === "up" ? "marquee-col-up" : "marquee-col-down"}
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {doubled.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="testimonial-card mx-auto w-[88%] rounded-2xl p-5 flex flex-col justify-between gap-4 mb-5 shrink-0"
          >
            <p className="text-sm leading-snug text-zinc-700">
              <span className="glow-text text-xl leading-none">&ldquo;</span>
              {t.quote}
            </p>
            <div>
              <p className="font-semibold text-sm text-zinc-900">{t.name}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialWall() {
  const colSize = Math.ceil(TESTIMONIALS.length / 3);
  const col1 = TESTIMONIALS.slice(0, colSize);
  const col2 = TESTIMONIALS.slice(colSize, colSize * 2);
  const col3 = TESTIMONIALS.slice(colSize * 2);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />
      <Column items={col1} direction="up" duration="32s" />
      <Column items={col2} direction="down" duration="38s" />
      <Column items={col3} direction="up" duration="26s" />
    </div>
  );
}
