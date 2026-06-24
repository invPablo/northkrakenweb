"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error();

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 py-8">
        <CheckCircle2 className="w-8 h-8 text-accent" />
        <p className="text-zinc-700 font-medium">Message sent — we&apos;ll reply within a day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
      <input
        type="text"
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-accent transition-colors"
      />
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-accent transition-colors"
      />
      <textarea
        required
        rows={4}
        placeholder="What do you need help with?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-accent transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-lg hover:brightness-110 transition disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send message <ArrowUpRight className="w-4 h-4" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong — email us directly at{" "}
          <a href="mailto:hi@northkraken.studio" className="underline">
            hi@northkraken.studio
          </a>
          .
        </p>
      )}
    </form>
  );
}
