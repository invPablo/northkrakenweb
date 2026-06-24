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
  video?: string;
  demoUrl?: string;
  docsUrl?: string;
};

export const TEMPLATES: Template[] = [
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
  {
    id: "sour",
    title: "SOUR",
    type: "CINEMATIC WORKSPACE & STUDIO",
    price: "$69",
    checkoutUrl: "https://northkraken.lemonsqueezy.com/checkout/buy/sour?embed=1",
    description:
      "A premium, dark-themed cinematic site for creative studios, coworking spaces and production labs, with a sticky stacking-cards scroll, fixed ambient background video and interactive mouse-glow effects.",
    features: [
      "Sticky stacking-cards scroll layout",
      "Fixed ambient background video",
      "Interactive mouse-glow effect",
      "Centralized site config file",
    ],
    pages: ["Home", "About", "Spaces", "Locations", "Pricing", "Testimonials", "FAQ", "Contact"],
    images: [
      "/templates/sour/focus-zone.png",
      "/templates/sour/podcast-studio.png",
      "/templates/sour/collaborative-lounge.png",
    ],
    video: "https://cdn.sceneai.art/Hero%20Section%20Video/1bc60917-cb77-4441-bc15-bb839a9dd6c2.mp4",
    demoUrl: "https://sour-landing.vercel.app",
  },
];

export function getTemplateById(id: string): Template | undefined {
  return TEMPLATES.find((t) => t.id === id);
}
