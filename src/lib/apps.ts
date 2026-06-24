export type BuiltApp = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url?: string;
  status: "live" | "coming-soon";
  image?: string;
};

export const APPS: BuiltApp[] = [
  {
    id: "traqcker",
    name: "Traqcker",
    tagline: "Stock analysis platform",
    description:
      "Financial health scores and valuation estimates for 8,000+ US companies, built directly from SEC filings — for independent investors who want quick, straightforward insights without needing a finance background.",
    url: "https://traqcker.com",
    status: "live",
  },
  {
    id: "tranzfr",
    name: "Tranzfr",
    tagline: "Travel expenses, split",
    description:
      "Track and share expenses with friends while you travel — log costs on the go and settle up automatically when the trip is over.",
    status: "coming-soon",
    image: "/apps/tranzfr/cover.jpg",
  },
];
