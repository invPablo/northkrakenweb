"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, animate, useInView } from "framer-motion";
import {
  ArrowLeft,
  Zap,
  ShieldCheck,
  GitBranch,
  Gauge,
  Layers,
  Workflow,
  ChevronDown,
  Boxes,
  Star,
  MessageSquare,
  Terminal,
  Database,
  Webhook,
  Cloud,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Rocket,
  Crown,
  CornerDownLeft,
} from "lucide-react";

const DEPLOYS = [
  { name: "feat/branch-previews", status: "success" as const, time: "2m ago" },
  { name: "fix/queue-retry-backoff", status: "success" as const, time: "18m ago" },
  { name: "chore/upgrade-postgres", status: "building" as const, time: "now" },
  { name: "feat/webhook-signing", status: "success" as const, time: "1h ago" },
];

const COMMANDS = ["Deploy to production", "Roll back last deploy", "View build logs", "Invite teammate"];

const PROCESS = [
  { icon: GitBranch, title: "Connect your repo", desc: "Link GitHub or GitLab in one click. Nimbus reads your existing build config — nothing to rewrite." },
  { icon: Layers, title: "Configure environments", desc: "Set up production, staging and per-branch previews with shared secrets and env variables." },
  { icon: Workflow, title: "Deploy automatically", desc: "Every push triggers a build. Merge to main and it's live — no manual steps in between." },
];

const STATS = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "1.2M+", label: "Deploys served" },
  { value: "<30s", label: "Avg. deploy time" },
  { value: "4,800+", label: "Teams onboard" },
];

const INTEGRATIONS = [
  { icon: Terminal, name: "GitHub" },
  { icon: MessageSquare, name: "Slack" },
  { icon: Database, name: "Postgres" },
  { icon: Webhook, name: "Webhooks" },
  { icon: Cloud, name: "S3" },
  { icon: Boxes, name: "Docker" },
];

const TESTIMONIALS = [
  {
    quote: "We cut our deploy pipeline from 20 minutes to under 30 seconds. Nimbus replaced three separate tools.",
    name: "Elena Voss",
    role: "CTO, Halcyon",
  },
  {
    quote: "Branch previews alone saved our QA team hours every week. Onboarding took one afternoon.",
    name: "Marcus Reyes",
    role: "Lead Engineer, Fjord Labs",
  },
  {
    quote: "The audit logs and SSO meant we passed our SOC2 review without touching our own infra.",
    name: "Priya Nandan",
    role: "Head of Security, Quorum",
  },
];

const FEATURES = [
  { icon: Zap, title: "Instant deploys", desc: "Push to main, live in under 30 seconds. No pipelines to babysit." },
  { icon: ShieldCheck, title: "SOC2-ready", desc: "Audit logs, role-based access and SSO baked in from day one." },
  { icon: GitBranch, title: "Branch previews", desc: "Every PR gets its own preview URL, automatically." },
  { icon: Gauge, title: "Real-time analytics", desc: "Usage, latency and errors in one dashboard — no extra setup." },
  { icon: Layers, title: "Built-in queues", desc: "Background jobs and retries without standing up infra." },
  { icon: Workflow, title: "Workflow automations", desc: "Trigger actions on events without writing glue code." },
];

const PLANS = [
  {
    name: "Starter",
    monthly: 19,
    yearly: 15,
    desc: "For solo builders shipping their first product.",
    features: ["1 workspace", "5 team seats", "10k requests / mo", "Community support"],
  },
  {
    name: "Growth",
    monthly: 49,
    yearly: 39,
    desc: "For teams scaling past their first customers.",
    features: ["5 workspaces", "25 team seats", "250k requests / mo", "Priority support", "Branch previews"],
    featured: true,
  },
  {
    name: "Scale",
    monthly: 129,
    yearly: 99,
    desc: "For companies running production workloads.",
    features: ["Unlimited workspaces", "Unlimited seats", "Unlimited requests", "Dedicated support", "SOC2 + SSO"],
  },
];

const FAQS = [
  { q: "Can I switch plans later?", a: "Yes — upgrade or downgrade anytime from your billing settings. Changes are prorated automatically." },
  { q: "Is there a free trial?", a: "Every plan includes a 14-day trial, no card required upfront." },
  { q: "Do you offer a self-hosted option?", a: "Scale plans include a self-hosted deployment option with the same dashboard and CLI." },
  { q: "What happens if I exceed my usage limit?", a: "We'll notify you before any overage charge, and you can upgrade in one click." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionBeam() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[180px] h-[460px] bg-[#39ff8c]/20 blur-3xl rotate-[-18deg]" />
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[180px] h-[460px] bg-[#39ff8c]/15 blur-3xl rotate-[14deg]" />
    </div>
  );
}

function PillBadge({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#39ff8c] border border-[#39ff8c]/30 bg-[#39ff8c]/5 rounded-full px-4 py-1.5">
      <Icon className="w-3.5 h-3.5" /> {children}
    </span>
  );
}

function AnimatedStat({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/[0-9][0-9,.]*/);
    if (!match) return;
    const clean = match[0].replace(/,/g, "");
    const target = parseFloat(clean);
    const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(v) {
        const formatted = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString();
        setDisplay(value.replace(match[0], formatted));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}

export default function NimbusDemo() {
  const [yearly, setYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#0a0a0d] text-white min-h-screen">
      {/* DEMO BANNER */}
      <div className="bg-[#39ff8c] text-[#0a0a0d] text-center text-xs font-semibold py-2 px-4">
        Template preview — this is a demo, not a working product
      </div>

      {/* HEADER */}
      <header className="border-b border-white/10 sticky top-0 bg-[#0a0a0d]/90 backdrop-blur z-30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/templates/nimbus" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to template
          </Link>
          <div className="font-display uppercase tracking-tight text-lg">NIMBUS</div>
          <a
            href="#pricing"
            className="bg-[#39ff8c] text-[#0a0a0d] text-sm font-semibold px-5 py-2 rounded-full hover:brightness-110 transition"
          >
            Get started
          </a>
        </div>
      </header>

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 starfield opacity-30 pointer-events-none" />

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative max-w-3xl mx-auto px-6 pt-28 pb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-7 w-12 h-12 rounded-xl bg-[#101013] border border-[#39ff8c]/30 flex items-center justify-center shadow-[0_0_30px_rgba(57,255,140,0.35)]"
          >
            <Cloud className="w-5 h-5 text-[#39ff8c]" />
          </motion.div>
          <h1 className="font-display uppercase text-5xl sm:text-7xl leading-[0.95] tracking-tight">
            Ship infrastructure
            <br />
            without the ops team
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-zinc-400 text-lg leading-relaxed">
            Nimbus handles deploys, queues, previews and monitoring so your team can focus on product, not plumbing.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a href="#pricing" className="bg-[#39ff8c] text-[#0a0a0d] font-semibold px-7 py-3.5 rounded-full hover:brightness-110 hover:scale-105 transition inline-flex items-center gap-2">
              Let&rsquo;s begin <CornerDownLeft className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-500">No credit card required · 14-day trial · Cancel anytime</p>
        </motion.section>

        {/* PRODUCT BENTO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto px-6 pb-24"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Command palette */}
            <div className="border border-white/10 rounded-2xl bg-[#101013] p-5">
              <div className="flex items-center gap-2 border border-white/10 rounded-lg px-3 py-2 mb-4 bg-white/[0.02]">
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                <span className="text-xs text-zinc-500">Type a command…</span>
              </div>
              {COMMANDS.map((c, i) => (
                <div key={c} className={`text-xs py-2 px-2 rounded-md ${i === 0 ? "bg-[#39ff8c]/10 text-[#39ff8c]" : "text-zinc-400"}`}>
                  {c}
                </div>
              ))}
            </div>

            {/* Deploy feed */}
            <div className="border border-white/10 rounded-2xl bg-[#101013] p-5">
              <p className="text-xs text-zinc-500 mb-3">Live deploys</p>
              <div className="space-y-2.5">
                {DEPLOYS.map((d) => (
                  <div key={d.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {d.status === "success" && <CheckCircle2 className="w-3.5 h-3.5 text-[#39ff8c]" />}
                      {d.status === "building" && <Clock className="w-3.5 h-3.5 text-[#39ff8c] animate-pulse" />}
                      <code className="text-xs text-zinc-300">{d.name}</code>
                    </div>
                    <span className="text-xs text-zinc-500">{d.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage overview — wide */}
            <div className="sm:col-span-2 border border-white/10 rounded-2xl bg-[#101013] p-6">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Requests this month</p>
                  <AnimatedStat value="2.4M" className="text-3xl font-display" />
                  <span className="text-xs text-[#39ff8c]">+18% vs last month</span>
                </div>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 65, 35, 80, 55, 90, 70, 100, 60, 85, 45, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-2.5 rounded-t bg-[#39ff8c]/70"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.04, ease: "easeOut" }}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                {STATS.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <AnimatedStat value={s.value} className="text-lg font-display" />
                    <p className="text-xs text-zinc-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* LOGO STRIP */}
      <div className="border-y border-white/10 bg-white/[0.02] py-8 overflow-hidden">
        <div className="marquee-track gap-16 text-zinc-500 text-sm tracking-widest uppercase">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-16 pr-16 shrink-0">
              {["Vector", "Northwind", "Halcyon", "Fjord Labs", "Quorum", "Solace"].map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="relative max-w-6xl mx-auto px-6 py-24">
        <SectionBeam />
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <PillBadge icon={Zap}>Features</PillBadge>
          <h2 className="font-display uppercase text-3xl sm:text-4xl mt-4">Everything you need, nothing you have to glue together</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-[#39ff8c]/30 transition-colors"
              >
                <Icon className="w-6 h-6 text-[#39ff8c] mb-4" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative max-w-5xl mx-auto px-6 py-24 border-t border-white/10">
        <SectionBeam />
        <Reveal className="text-center max-w-xl mx-auto mb-16">
          <PillBadge icon={Layers}>Process</PillBadge>
          <h2 className="font-display uppercase text-3xl sm:text-4xl mt-4">From repo to production in three steps</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-8 relative">
          <div className="hidden sm:block absolute top-6 left-[16.6%] right-[16.6%] h-px bg-white/10" />
          {PROCESS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.12} className="relative text-center">
              <div className="relative z-10 mx-auto mb-5 w-12 h-12 rounded-full bg-[#101013] border border-[#39ff8c]/30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#39ff8c]" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-white/10 bg-white/[0.02] py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <AnimatedStat value={s.value} className="font-display text-3xl sm:text-4xl text-[#39ff8c]" />
              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="relative max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <SectionBeam />
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <PillBadge icon={Webhook}>Integrations</PillBadge>
          <h2 className="font-display uppercase text-3xl sm:text-4xl mt-4">Plugs into the stack you already run</h2>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INTEGRATIONS.map(({ icon: Icon, name }, i) => (
            <Reveal key={name} delay={i * 0.06}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border border-white/10 rounded-xl p-5 flex flex-col items-center gap-3 bg-white/[0.02]"
              >
                <Icon className="w-5 h-5 text-zinc-300" />
                <span className="text-xs text-zinc-400">{name}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <SectionBeam />
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <PillBadge icon={Star}>Customers</PillBadge>
          <h2 className="font-display uppercase text-3xl sm:text-4xl mt-4">Trusted by teams shipping daily</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <div className="h-full border border-white/10 rounded-2xl p-6 bg-white/[0.02] flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-[#39ff8c] fill-[#39ff8c]" />
                  ))}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <SectionBeam />
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <PillBadge icon={Gauge}>Pricing</PillBadge>
          <h2 className="font-display uppercase text-3xl sm:text-4xl mt-4">Simple plans, no surprises</h2>
          <div className="mt-8 inline-flex items-center gap-3">
            <span className={`text-sm ${!yearly ? "text-white" : "text-zinc-500"}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-12 h-6 rounded-full bg-white/10 border border-white/15"
            >
              <motion.span
                className="absolute top-0.5 left-0.5 w-4.5 h-4.5 rounded-full bg-[#39ff8c]"
                animate={{ x: yearly ? 22 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ width: 18, height: 18 }}
              />
            </button>
            <span className={`text-sm ${yearly ? "text-white" : "text-zinc-500"}`}>
              Annually <span className="text-[#39ff8c]">−20%</span>
            </span>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {PLANS.map((plan, i) => {
            const PlanIcon = plan.name === "Starter" ? Rocket : plan.name === "Growth" ? Zap : Crown;
            return (
              <Reveal key={plan.name} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative h-full rounded-2xl p-7 border overflow-hidden ${
                    plan.featured ? "border-[#39ff8c] bg-[#39ff8c]/[0.06]" : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <div
                    className={`absolute -top-16 -left-10 w-44 h-44 rounded-full blur-3xl ${
                      plan.featured ? "bg-[#39ff8c]/30" : "bg-[#39ff8c]/10"
                    }`}
                  />
                  <div className="relative flex items-center justify-between mb-4">
                    <PlanIcon className="w-5 h-5 text-[#39ff8c]" />
                    {plan.featured && (
                      <span className="text-xs bg-[#39ff8c] text-[#0a0a0d] font-semibold rounded-full px-3 py-1">Popular</span>
                    )}
                  </div>
                  <h3 className="relative font-display uppercase text-xl">{plan.name}</h3>
                  <div className="relative flex items-baseline gap-1 mt-3 mb-1">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={yearly ? "yearly" : "monthly"}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl font-display"
                      >
                        ${yearly ? plan.yearly : plan.monthly}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-zinc-500 text-sm">/ mo</span>
                  </div>
                  <p className="relative text-sm text-zinc-400 mb-5">{plan.desc}</p>
                  <div className="relative border-t border-white/10 mb-5" />
                  <ul className="relative space-y-2.5 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#39ff8c] shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`relative w-full rounded-full py-3 text-sm font-semibold transition ${
                      plan.featured ? "bg-[#39ff8c] text-[#0a0a0d] hover:brightness-110" : "border border-white/15 text-white hover:border-white/30"
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative max-w-3xl mx-auto px-6 py-24 border-t border-white/10">
        <SectionBeam />
        <Reveal>
          <h2 className="font-display uppercase text-3xl sm:text-4xl mb-10 text-center">Frequently asked</h2>
        </Reveal>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div className="border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 text-zinc-400" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-zinc-400 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Reveal className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
        <h2 className="font-display uppercase text-3xl sm:text-5xl mb-6">Ready to ship faster?</h2>
        <p className="text-zinc-400 mb-8">Start your 14-day trial. No credit card required.</p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#pricing"
          className="inline-block bg-[#39ff8c] text-[#0a0a0d] font-semibold px-8 py-4 rounded-full hover:brightness-110 transition"
        >
          Start free trial
        </motion.a>
      </Reveal>

      <footer className="border-t border-white/10 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="font-display uppercase tracking-tight text-lg mb-3">NIMBUS</div>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                Infrastructure tooling for teams who&rsquo;d rather ship than babysit pipelines.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Product</p>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><Link href="/templates/nimbus/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Company</p>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Legal</p>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-14 pt-6 border-t border-white/10 text-xs text-zinc-500">
            © {new Date().getFullYear()} Nimbus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
