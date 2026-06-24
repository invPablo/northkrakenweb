import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LemonSqueezyScript from "@/components/LemonSqueezyScript";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "North Kraken Studio | Next.js Templates",
  description: "Production-ready Next.js & Tailwind CSS templates. Buy, customize and deploy in minutes.",
  keywords: ["templates", "next.js templates", "tailwind css", "web templates", "custom software"],
  metadataBase: new URL("https://northkraken.studio"),
  openGraph: {
    title: "North Kraken Studio | Next.js Templates",
    description: "Production-ready Next.js & Tailwind CSS templates. Buy, customize and deploy in minutes.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background-dark text-foreground-light">
        {children}
        <LemonSqueezyScript />
      </body>
    </html>
  );
}
