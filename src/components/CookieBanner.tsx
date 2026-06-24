"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "nks-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[200] p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-surface border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-zinc-300 leading-relaxed flex-1">
          We use essential cookies to make the store work, and analytics cookies to understand
          how you use our site. See our{" "}
          <Link href="/legal/privacy" className="text-accent underline">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleChoice("declined")}
            className="text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={() => handleChoice("accepted")}
            className="bg-accent text-background-dark text-sm font-semibold px-5 py-2 rounded-full hover:brightness-110 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
