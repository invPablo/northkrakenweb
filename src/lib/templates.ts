export type Template = {
  id: string;
  title: string;
  type: string;
  price: string;
  checkoutUrl: string;
  description: string;
  features: string[];
  pages: string[];
  images?: string[];
  demoUrl?: string;
  docsUrl?: string;
};

export const TEMPLATES: Template[] = [
  {
    id: "kraken-portfolio",
    title: "KRAKEN PORTFOLIO",
    type: "CREATIVE PORTFOLIO",
    price: "$49",
    checkoutUrl: "https://northkraken.lemonsqueezy.com/checkout/buy/kraken-portfolio?embed=1",
    description:
      "A brutalist portfolio built to make creatives and studios stand out. Big typography, sharp transitions, zero filler.",
    features: [
      "Scroll-driven animations",
      "Project case-study layout",
      "Fully responsive grid",
      "CMS-ready content blocks",
    ],
    pages: ["Home", "Work", "Project Detail", "About", "Contact"],
  },
  {
    id: "njord-starter",
    title: "NJORD BOILERPLATE",
    type: "NEXT.JS STARTER",
    price: "$79",
    checkoutUrl: "https://northkraken.lemonsqueezy.com/checkout/buy/njord-starter?embed=1",
    description:
      "A production-ready Next.js + Tailwind starter for SaaS and product sites. Skip the boilerplate, ship the product.",
    features: [
      "Auth-ready structure",
      "Pricing & billing sections",
      "Dark mode out of the box",
      "SEO and performance tuned",
    ],
    pages: ["Home", "Pricing", "Features", "Blog", "Login", "Contact"],
  },
  {
    id: "vespera-ui",
    title: "VESPERA UI",
    type: "DESIGN SYSTEM",
    price: "$39",
    checkoutUrl: "https://northkraken.lemonsqueezy.com/checkout/buy/vespera-ui?embed=1",
    description:
      "A component library and design system for teams who need consistency without sacrificing a strong visual identity.",
    features: [
      "40+ reusable components",
      "Tailwind config & tokens",
      "Light & dark themes",
      "Documentation included",
    ],
    pages: ["Overview", "Components", "Tokens", "Usage Guide"],
  },
  {
    id: "fisterra",
    title: "FISTERRA",
    type: "RESTAURANT & FINE DINING",
    price: "$69",
    checkoutUrl: "https://northkraken.lemonsqueezy.com/checkout/buy/fisterra?embed=1",
    description:
      "An elegant fine-dining restaurant site with a dark, gold-accented palette, tabbed tasting menus, a reservation form and a built-in confirmation flow.",
    features: [
      "Tabbed tasting-menu sections",
      "Reservation form with time slots",
      "Booking confirmation modal",
      "Editorial photo gallery",
    ],
    pages: ["Home", "Concept", "Menu", "Experience", "Reservations", "Contact"],
    images: [
      "/templates/fisterra/hero_dish.png",
      "/templates/fisterra/chef_plating.png",
      "/templates/fisterra/restaurant_interior.png",
    ],
    demoUrl: "/templates/fisterra/demo",
    docsUrl: "/templates/fisterra/docs",
  },
  {
    id: "nimbus",
    title: "NIMBUS",
    type: "SAAS LANDING",
    price: "$59",
    checkoutUrl: "https://northkraken.lemonsqueezy.com/checkout/buy/nimbus?embed=1",
    description:
      "A dark, conversion-focused SaaS landing page with a monthly/yearly pricing toggle, feature grid and FAQ accordion — ready for any infra, dev-tools or B2B product.",
    features: [
      "Monthly / yearly pricing toggle",
      "Bento-style feature grid",
      "FAQ accordion",
      "Logo strip & CTA sections",
    ],
    pages: ["Home", "Pricing", "Features", "FAQ"],
    images: ["/templates/nimbus/hero.png", "/templates/nimbus/process.png"],
    demoUrl: "/templates/nimbus/demo",
    docsUrl: "/templates/nimbus/docs",
  },
  {
    id: "iron-gym",
    title: "IRON",
    type: "GYM & FITNESS",
    price: "$59",
    checkoutUrl: "https://northkraken.lemonsqueezy.com/checkout/buy/iron-gym?embed=1",
    description:
      "A bold, high-energy gym and fitness site with neon-on-black styling, a class catalog with detail pages, trainer profiles, a schedule with booking flow and pricing plans.",
    features: [
      "Class & trainer detail pages",
      "Booking-style schedule with confirmation",
      "Photo gallery and testimonials",
      "Pricing plans section",
    ],
    pages: ["Home", "Classes", "Schedule", "Trainers", "Gallery", "Pricing", "FAQ"],
    images: ["/templates/iron-gym/hero-bg.jpg", "/templates/iron-gym/about-img.jpg"],
    demoUrl: "/templates/iron-gym/demo",
    docsUrl: "/templates/iron-gym/docs",
  },
];

export function getTemplateById(id: string): Template | undefined {
  return TEMPLATES.find((t) => t.id === id);
}
