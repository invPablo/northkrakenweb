"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    createLemonSqueezy?: () => void;
    LemonSqueezy?: {
      setup: () => void;
      refresh: () => void;
    };
  }
}

export default function LemonSqueezyScript() {
  useEffect(() => {
    if (window.LemonSqueezy) {
      try {
        window.LemonSqueezy.setup();
      } catch (err) {
        console.error("Failed to setup LemonSqueezy:", err);
      }
    }
  }, []);

  return (
    <Script
      src="https://assets.lemonsqueezy.com/lemon.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.createLemonSqueezy) {
          try {
            window.createLemonSqueezy();
          } catch (err) {
            console.error("Failed to run createLemonSqueezy:", err);
          }
        }
      }}
    />
  );
}
