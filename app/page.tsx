"use client";

import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  Clock3,
  Github,
  Layers3,
  Lightbulb,
  Link2,
  MapPin,
  MessageCircle,
  Menu,
  Play,
  Plus,
  Rocket,
  Sparkles,
  Star,
  ShieldCheck,
  Sliders,
  TrendingUp,
  Users,
  Zap,
  X,
} from "lucide-react";

const navLinks = ["Features", "How It Works", "Pricing", "Testimonials", "FAQ"];

const chartBars = [38, 52, 45, 70, 62, 82, 74, 94, 86, 100, 91, 98];

const workflowItems = [
  { icon: Sparkles, label: "AI content engine", color: "text-violet-300" },
  { icon: Layers3, label: "Social media sync", color: "text-fuchsia-300" },
  { icon: Users, label: "Client workspace", color: "text-indigo-300" },
];

const featureCards = [
  {
    icon: Sparkles,
    title: "AI Content Studio",
    description: "Generate high-converting blogs, tweets, captions, and ad copies tailored to your brand voice in seconds.",
    tag: "Instant Generation",
    iconColor: "text-violet-300",
    iconBackground: "bg-violet-500/15",
  },
  {
    icon: Calendar,
    title: "Smart Social Scheduler",
    description: "Auto-publish posts across Twitter, LinkedIn, Instagram, and Facebook at peak engagement times.",
    tag: "Multi-Platform",
    iconColor: "text-fuchsia-300",
    iconBackground: "bg-fuchsia-500/15",
  },
  {
    icon: BarChart3,
    title: "Real-time Growth Analytics",
    description: "Track campaign performance, CTR, dynamic growth metrics, and audience demographics live.",
    tag: "Deep Insights",
    iconColor: "text-indigo-300",
    iconBackground: "bg-indigo-500/15",
  },
  {
    icon: Zap,
    title: "1-Click Workflow Automations",
    description: "Seamlessly connect Slack, WhatsApp, Notion, and Zoho with robust webhook integrations.",
    tag: "Zero Coding",
    iconColor: "text-amber-300",
    iconBackground: "bg-amber-500/15",
  },
  {
    icon: Users,
    title: "Team & Client Workspaces",
    description: "Manage permissions, approve drafts, and collaborate with your team without friction.",
    tag: "Seamless Collab",
    iconColor: "text-cyan-300",
    iconBackground: "bg-cyan-500/15",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Bank-grade 256-bit encryption with 99.9% guaranteed uptime SLA for total peace of mind.",
    tag: "Bank-Grade SLA",
    iconColor: "text-emerald-300",
    iconBackground: "bg-emerald-500/15",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Your Workspace",
    description: "Link your social media channels (Twitter, LinkedIn, Instagram) and automation tools in 1-click using secure OAuth.",
  },
  {
    number: "02",
    icon: Sliders,
    title: "Define AI Rules & Schedules",
    description: "Custom-train the AI on your brand voice, upload content guidelines, and set auto-posting timelines.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Sit Back & Scale Autopilot",
    description: "Watch AutoSync AI generate, schedule, and analyze your growth 24/7 while you focus on high-level strategy.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    audience: "For Solo Creators",
    price: "₹799",
    description: "Essential AI automation tools for individual creators & freelancers.",
    features: [
      "3 Social Media Channels",
      "500 AI Content Generations/mo",
      "Basic Growth Analytics",
      "Standard Webhook Connections",
      "Email & Community Support",
    ],
    cta: "Get Started with Starter",
    href: "#start-trial",
    featured: false,
  },
  {
    name: "Pro",
    audience: "For Growing Businesses",
    price: "₹1,999",
    description: "Full automation power for agencies, startups, and active content creators.",
    features: [
      "Unlimited Social Media Channels",
      "Unlimited AI Content Generations",
      "Advanced Real-Time Analytics & Reports",
      "Priority 1-Click Automations",
      "24/7 Priority Support",
      "Custom Brand Voice Training",
    ],
    cta: "Start 14-Day Free Trial",
    href: "https://wa.me/917063684875?text=Hello,%20I%20want%20to%20start%20the%20Pro%20Plan%20free%20trial%20for%20AutoSync%20AI",
    featured: true,
  },
  {
    name: "Enterprise",
    audience: "For Scale & Large Teams",
    price: "₹4,999",
    description: "Custom security, dedicated infrastructure, and unlimited scale for teams.",
    features: [
      "Custom API & Webhook Access",
      "Unlimited Team Members & Workspaces",
      "Dedicated Account Manager",
      "Custom Security & SLA Guarantees",
      "Onboarding & Strategy Consulting",
    ],
    cta: "Contact Sales",
    href: "https://wa.me/917063684875?text=Hello,%20I%20am%20interested%20in%20the%20Enterprise%20Plan%20for%20AutoSync%20AI",
    featured: false,
  },
];

const testimonials = [
  {
    quote: "AutoSync AI cut our social media creation time by 80%. The AI content studio generates posts that actually sound human!",
    name: "Rahul Sharma",
    role: "Growth Lead, TechPulse",
  },
  {
    quote: "The automated multi-channel scheduler alone saved our agency over 25 hours every week. Absolute game changer.",
    name: "Priya Patel",
    role: "Founder, DigitalWave",
  },
  {
    quote: "Integrating our webhooks and WhatsApp workflows was ridiculously easy. Up and running in less than 10 minutes!",
    name: "Amit Banerjee",
    role: "Product Manager",
  },
];

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "You get full access to all Pro Plan features for 14 days without entering any credit card.",
  },
  {
    question: "Can I connect my own custom APIs and Webhooks?",
    answer: "Yes! Both Pro and Enterprise plans allow custom webhook triggers and API integrations.",
  },
  {
    question: "Is my social media and account data secure?",
    answer: "Absolutely. We use bank-grade 256-bit encryption and OAuth standard authentication.",
  },
  {
    question: "Can I upgrade or cancel my subscription anytime?",
    answer: "Yes, you can upgrade, downgrade, or cancel your subscription with 1-click from your dashboard.",
  },
];

export default function Home() {
  const { data: session, status: sessionStatus } = useSession();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTrialActive, setIsTrialActive] = useState(false);
  const [trialEndDate, setTrialEndDate] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isVideoOpen && !isAuthOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
        setIsAuthOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVideoOpen, isAuthOpen]);

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      setIsAuthOpen(false);
    }
  }, [sessionStatus]);

  useEffect(() => {
    if (!isToastOpen) {
      return;
    }

    const timeoutId = window.setTimeout(() => setIsToastOpen(false), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [isToastOpen]);

  const handleAuthSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => window.setTimeout(resolve, 1500));

    const trialEnds = new Date();
    trialEnds.setDate(trialEnds.getDate() + 14);
    setTrialEndDate(
      trialEnds.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
    setIsTrialActive(true);
    setIsSubmitting(false);
    setIsAuthOpen(false);
    setIsToastOpen(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-zinc-100 selection:bg-violet-500/30">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute right-[-12rem] top-[35rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/10 blur-[130px]" />
      </div>

      {isTrialActive && (
        <div className="fixed left-1/2 top-24 z-40 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-center text-xs font-medium text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.12)] backdrop-blur-md sm:text-sm">
          🎉 Free Trial Active: 14 Days Remaining. Upgrade anytime to Pro.
          <span className="ml-1 hidden text-emerald-300/70 sm:inline">Ends {trialEndDate}</span>
        </div>
      )}

      <div className="border-b border-white/10 bg-violet-500/10 px-4 py-3 text-center text-xs font-medium text-violet-100 sm:text-sm">
        <a className="inline-flex items-center gap-2 transition hover:text-white" href="#release-notes">
          🚀 AutoSync AI v2.5 is live! <span className="hidden text-violet-200/80 sm:inline">Read the release notes</span> →
        </a>
      </div>

      <header className="fixed left-0 right-0 top-[41px] z-50 border-b border-white/10 bg-[#09090b]/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a className="flex items-center gap-2.5 text-lg font-semibold tracking-tight" href="#">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-600 shadow-lg shadow-violet-500/30">
              <Zap className="h-5 w-5 fill-white text-white" />
            </span>
            AutoSync <span className="text-violet-300">AI</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 lg:flex">
            {navLinks.map((link) => (
              <a className="transition hover:text-white" href={`#${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            {sessionStatus === "authenticated" && session?.user ? (
              <div className="flex items-center gap-3">
                {session.user.image ? (
                  <img alt={session.user.name ?? "Signed-in user"} className="h-9 w-9 rounded-full border border-violet-400/40" src={session.user.image} />
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-200">
                    {(session.user.name ?? session.user.email ?? "U").charAt(0).toUpperCase()}
                  </span>
                )}
                <div className="hidden max-w-36 text-left xl:block">
                  <p className="truncate text-xs font-medium text-white">{session.user.name ?? "AutoSync user"}</p>
                  <p className="truncate text-[10px] text-zinc-500">{session.user.email}</p>
                </div>
                <button className="rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/30 hover:text-white" onClick={() => signOut({ callbackUrl: "/" })} type="button">
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white" onClick={() => { setAuthMode("signin"); setIsAuthOpen(true); }} type="button">
                  Sign In
                </button>
                <button className="rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:scale-[1.02] hover:shadow-violet-500/40" onClick={() => { setAuthMode("signup"); setIsAuthOpen(true); }} type="button">
                  Start Free Trial
                </button>
              </>
            )}
          </div>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-lg border border-white/10 p-2 text-zinc-300 md:hidden"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#09090b]/95 px-5 py-4 backdrop-blur-md md:hidden" id="mobile-navigation">
            <nav className="flex flex-col gap-1 text-sm text-zinc-300">
              {navLinks.map((link) => (
                <a
                  className="rounded-lg px-3 py-2.5 transition hover:bg-white/5 hover:text-white"
                  href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                  key={link}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              {sessionStatus === "authenticated" && session?.user ? (
                <button
                  className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    void signOut({ callbackUrl: "/" });
                  }}
                  type="button"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <button
                    className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setAuthMode("signin");
                      setIsAuthOpen(true);
                    }}
                    type="button"
                  >
                    Sign In
                  </button>
                  <button
                    className="rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:scale-[1.02] hover:shadow-violet-500/40"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setAuthMode("signup");
                      setIsAuthOpen(true);
                    }}
                    type="button"
                  >
                    Start Free Trial
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 text-center lg:px-8 lg:pb-28 lg:pt-52">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200 shadow-[0_0_30px_rgba(139,92,246,0.12)] sm:text-sm">
          <Sparkles className="h-4 w-4 text-violet-300" />
          Powered by Advanced LLMs &amp; Automation APIs
        </div>
        <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          Automate Your Workflow.{" "}
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
            Scale Your Brand with AI.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          Stop wasting hours on manual tasks. AutoSync AI helps you schedule posts, generate high-converting copy, and manage clients on complete autopilot.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] sm:w-auto"
            onClick={() => { setAuthMode("signup"); setIsAuthOpen(true); }}
            type="button"
          >
            Start 14-Day Free Trial <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-md transition hover:border-white/30 hover:bg-white/10 sm:w-auto" onClick={() => setIsVideoOpen(true)} type="button">
            <Play className="h-4 w-4 fill-current text-violet-300" /> Watch Live Demo
          </button>
        </div>
        <div className="mt-7 flex items-center justify-center gap-3 text-sm text-zinc-400">
          <span className="flex items-center gap-0.5 text-amber-300">
            {Array.from({ length: 5 }).map((_, index) => <Star className="h-4 w-4 fill-current" key={index} />)}
          </span>
          <span>Trusted by 4,000+ creators &amp; fast-growing startups</span>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl rounded-2xl border border-violet-300/20 bg-white/[0.04] p-2 shadow-[0_0_80px_rgba(139,92,246,0.18)] backdrop-blur-md sm:mt-20 sm:p-3">
          <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-violet-500/40 via-transparent to-fuchsia-500/30 blur-sm" />
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111114] text-left">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="hidden items-center gap-2 text-xs text-zinc-500 sm:flex"><Clock3 className="h-3.5 w-3.5" /> Live workspace</div>
              <div className="h-2 w-16 rounded-full bg-white/10 sm:hidden" />
            </div>
            <div className="grid min-h-[360px] grid-cols-1 sm:grid-cols-[180px_1fr]">
              <aside className="hidden border-r border-white/10 p-5 sm:block">
                <div className="mb-8 flex items-center gap-2 text-sm font-semibold"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-500"><Zap className="h-3.5 w-3.5 fill-white" /></span> Workspace</div>
                <div className="space-y-2 text-xs text-zinc-500">
                  {workflowItems.map(({ icon: Icon, label, color }, index) => <div className={`flex items-center gap-2 rounded-lg px-2.5 py-2 ${index === 0 ? "bg-violet-500/15 text-violet-200" : ""}`} key={label}><Icon className={`h-3.5 w-3.5 ${color}`} /> {label}</div>)}
                </div>
              </aside>
              <div className="p-5 sm:p-7">
                <div className="flex items-start justify-between">
                  <div><p className="text-xs text-zinc-500">Good morning, Alex</p><h2 className="mt-1 text-xl font-semibold text-white">Your automation overview</h2></div>
                  <button className="hidden items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 sm:flex">This month <ChevronDown className="h-3 w-3" /></button>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {[
                    ["Tasks automated", "12,840", "+24.8%", TrendingUp],
                    ["Hours saved", "1,284", "+18.2%", Clock3],
                    ["Active campaigns", "28", "+6.4%", BarChart3],
                    ["Client satisfaction", "98.6%", "+2.1%", Users],
                  ].map(([label, value, change, Icon]) => {
                    const MetricIcon = Icon as typeof TrendingUp;
                    return <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4" key={label as string}><div className="flex items-center justify-between text-zinc-500"><span className="text-[10px] sm:text-xs">{label as string}</span><MetricIcon className="h-3.5 w-3.5 text-violet-300" /></div><div className="mt-2 text-lg font-semibold text-white sm:text-xl">{value as string}</div><div className="mt-1 text-[10px] text-emerald-400">{change as string} <span className="text-zinc-600">vs last month</span></div></div>;
                  })}
                </div>
                <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><div className="flex items-center justify-between"><div><p className="text-xs text-zinc-500">Automation performance</p><p className="mt-1 text-lg font-semibold">+32.4% <span className="text-xs font-normal text-emerald-400">↗ growth</span></p></div><BarChart3 className="h-4 w-4 text-violet-300" /></div><div className="mt-5 flex h-24 items-end gap-1.5 sm:gap-2">{chartBars.map((height, index) => <div className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600/50 to-fuchsia-400" key={index} style={{ height: `${height}%`, opacity: 0.45 + index / 25 }} />)}</div><div className="mt-2 flex justify-between text-[9px] text-zinc-600"><span>May 01</span><span>May 15</span><span>May 30</span></div></div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><div className="flex items-center justify-between"><p className="text-xs text-zinc-500">Recent activity</p><Plus className="h-4 w-4 text-zinc-500" /></div><div className="mt-3 space-y-3">{["Campaign generated", "12 posts scheduled", "New client onboarded"].map((item, index) => <div className="flex items-center gap-2.5" key={item}><span className={`flex h-6 w-6 items-center justify-center rounded-full ${index === 0 ? "bg-violet-500/20 text-violet-300" : "bg-white/10 text-zinc-400"}`}>{index === 0 ? <Sparkles className="h-3 w-3" /> : <Check className="h-3 w-3" />}</span><div><p className="text-[11px] text-zinc-300">{item}</p><p className="text-[9px] text-zinc-600">{index + 2} min ago</p></div></div>)}</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-white/[0.02] px-5 py-20 sm:py-28 lg:px-8" id="features">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-violet-200 shadow-[0_0_30px_rgba(139,92,246,0.12)]">
              ⚡ UNMATCHED CAPABILITIES
            </div>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Powerful Features Built for{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                Modern Growth
              </span>
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
              Everything you need to automate your social media, workflows, and client management in one unified platform.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map(({ icon: Icon, title, description, tag, iconColor, iconBackground }) => (
              <article
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_35px_rgba(139,92,246,0.14)]"
                key={title}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBackground} ${iconColor} shadow-[0_0_22px_rgba(139,92,246,0.12)]`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 min-h-[84px] text-sm leading-6 text-zinc-400">{description}</p>
                <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-violet-200 transition group-hover:border-violet-400/30 group-hover:bg-violet-500/10">
                  {tag}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 sm:py-28 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-violet-200 shadow-[0_0_30px_rgba(139,92,246,0.12)]">
              ⚡ SIMPLE 3-STEP PROCESS
            </div>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              How AutoSync AI Works in{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                3 Easy Steps
              </span>
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
              Set up your workspace in minutes and let AI handle your content distribution and workflow automation.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-16 hidden h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent lg:block" />
            {processSteps.map(({ number, icon: Icon, title, description }) => (
              <article
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_35px_rgba(139,92,246,0.14)] sm:p-8"
                key={number}
              >
                <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.16)]">
                  <span className="absolute inset-2 rounded-full border border-violet-400/10" />
                  <span className="bg-gradient-to-br from-violet-200 via-violet-400 to-fuchsia-500 bg-clip-text text-5xl font-bold tracking-[-0.08em] text-transparent">
                    {number}
                  </span>
                </div>
                <div className="mx-auto mt-7 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 transition group-hover:bg-violet-500/25 group-hover:text-violet-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] px-5 py-20 sm:py-28 lg:px-8" id="pricing">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-violet-200 shadow-[0_0_30px_rgba(139,92,246,0.12)]">
              ⚡ FLEXIBLE TRANSPARENT PRICING
            </div>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Predictable Pricing for{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                Fast-Growing Brands
              </span>
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
              Choose the perfect plan for your automated workflow. Upgrade or cancel anytime.
            </p>
          </div>

          <label className="mx-auto mt-8 flex w-fit cursor-pointer items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1 text-sm font-medium backdrop-blur-md">
            <input aria-label="Toggle annual billing" className="peer sr-only" type="checkbox" />
            <span className="rounded-full bg-white/10 px-4 py-2.5 text-zinc-100 transition peer-checked:bg-transparent peer-checked:text-zinc-400">
              Monthly
            </span>
            <span className="rounded-full px-4 py-2.5 text-zinc-400 transition peer-checked:bg-violet-500/20 peer-checked:text-violet-200">
              Yearly <span className="text-xs text-emerald-300">(Save 20%)</span>
            </span>
          </label>

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
            {pricingPlans.map(({ name, audience, price, description, features, cta, href, featured }) => (
              <article
                className={`group relative flex flex-col rounded-2xl border bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  featured
                    ? "border-2 border-purple-500 bg-violet-500/[0.08] shadow-[0_0_45px_rgba(139,92,246,0.2)]"
                    : "border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_35px_rgba(139,92,246,0.14)]"
                }`}
                key={name}
              >
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-1 text-[10px] font-bold tracking-[0.12em] text-white shadow-lg shadow-violet-500/30">
                    🔥 MOST POPULAR
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-violet-300">{audience}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{name}</h3>
                  <p className="mt-4 min-h-[56px] text-sm leading-6 text-zinc-400">{description}</p>
                  <div className="mt-7 flex items-end gap-2">
                    <span className="text-4xl font-semibold tracking-tight text-white">{price}</span>
                    <span className="pb-1 text-sm text-zinc-500">/ month</span>
                  </div>
                </div>
                <div className="my-7 h-px bg-white/10" />
                <ul className="flex-1 space-y-4">
                  {features.map((feature) => (
                    <li className="flex items-start gap-3 text-sm text-zinc-300" key={feature}>
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
                        <Check className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {cta === "Get Started with Starter" || cta === "Start 14-Day Free Trial" ? (
                  <button
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                      featured
                        ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
                        : "border border-white/15 bg-white/[0.03] text-zinc-200 hover:border-violet-400/50 hover:bg-violet-500/10"
                    }`}
                    onClick={() => {
                      setAuthMode("signup");
                      setIsAuthOpen(true);
                    }}
                    type="button"
                  >
                    {cta}
                  </button>
                ) : (
                  <a
                    className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/50 hover:bg-violet-500/10"
                    href={href}
                  >
                    {cta}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 sm:py-28 lg:px-8" id="testimonials">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-violet-200 shadow-[0_0_30px_rgba(139,92,246,0.12)]">
              ⚡ LOVED BY CREATORS
            </div>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              What Our Early Adopters Are Saying
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map(({ quote, name, role }) => (
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.07] sm:p-8" key={name}>
                <div className="flex gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, index) => <Star className="h-4 w-4 fill-current" key={index} />)}
                </div>
                <p className="mt-6 text-base leading-7 text-zinc-300">&ldquo;{quote}&rdquo;</p>
                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{name}</p>
                  <p className="mt-1 text-sm text-violet-300">{role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02] px-5 py-20 sm:py-28 lg:px-8" id="faq">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-violet-200 shadow-[0_0_30px_rgba(139,92,246,0.12)]">
              ⚡ FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Got Questions? <span className="bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">We&apos;ve Got Answers</span>
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map(({ question, answer }) => (
              <details className="group rounded-xl border border-white/10 bg-white/[0.04] px-5 backdrop-blur-md transition hover:border-purple-500/50" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
                  {question}
                  <ChevronDown className="h-4 w-4 shrink-0 text-violet-300 transition group-open:rotate-180" />
                </summary>
                <p className="border-t border-white/10 pb-5 pt-4 text-sm leading-6 text-zinc-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 sm:py-28 lg:px-8" id="contact">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Ready to <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">Automate Your Business?</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
              Visit our local center or chat directly with our team on WhatsApp to get custom onboarding.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="space-y-5">
              <a className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition hover:border-emerald-400/40 hover:bg-emerald-500/[0.06]" href="https://wa.me/917063684875">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300"><MessageCircle className="h-5 w-5" /></span>
                <span><span className="block text-xs text-zinc-500">Direct WhatsApp Support</span><span className="mt-1 block font-medium text-white">+91 7063684875</span></span>
              </a>
              <a className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition hover:border-violet-400/40 hover:bg-violet-500/[0.06]" href="https://maps.app.goo.gl/t5oBgxXSTsdjKuAL8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300"><MapPin className="h-5 w-5" /></span>
                <span className="font-medium text-white">Visit Our Service &amp; Ops Center</span>
              </a>
            </div>
            <form className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6" action="https://wa.me/917063684875" method="get">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-xs text-zinc-400">Name<input className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60" name="name" placeholder="Your name" required /></label>
                <label className="text-xs text-zinc-400">Email<input className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60" name="email" placeholder="you@company.com" required type="email" /></label>
              </div>
              <label className="mt-4 block text-xs text-zinc-400">Message<textarea className="mt-2 min-h-28 w-full resize-y rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60" name="message" placeholder="Tell us how we can help..." required /></label>
              <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40" type="submit">
                Send Message &amp; Connect on WhatsApp <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02] py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 sm:justify-between lg:px-8">
          <span className="flex items-center gap-2"><Github className="h-4 w-4" /> Built for modern teams</span>
          <span className="flex items-center gap-2"><Lightbulb className="h-4 w-4" /> Work smarter</span>
          <span className="flex items-center gap-2"><Zap className="h-4 w-4" /> Move faster</span>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/20 px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white" href="#">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-600 shadow-lg shadow-violet-500/30"><Zap className="h-5 w-5 fill-white text-white" /></span>
              AutoSync <span className="text-violet-300">AI</span>
            </a>
            <p className="mt-4 text-sm text-zinc-500">Automate. Scale. Dominate.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <a className="block transition hover:text-white" href="#features">Features</a>
              <a className="block transition hover:text-white" href="#pricing">Pricing</a>
              <a className="block transition hover:text-white" href="#testimonials">Testimonials</a>
              <a className="block transition hover:text-white" href="#faq">FAQ</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <a className="block transition hover:text-white" href="#privacy">Privacy Policy</a>
              <a className="block transition hover:text-white" href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-zinc-600">
          © 2026 AutoSync AI. All rights reserved.
        </div>
      </footer>

      <a
        aria-label="Chat with AutoSync AI on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_24px_rgba(16,185,129,0.6)] transition hover:scale-110 hover:bg-emerald-400"
        href="https://wa.me/917063684875?text=Hello,%20I%20have%20a%20query%20about%20AutoSync%20AI"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {isVideoOpen && (
        <div
          aria-label="Video demo modal"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setIsVideoOpen(false)}
          role="dialog"
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl border border-purple-500/40 bg-[#111114]/95 p-2 shadow-2xl shadow-purple-500/20 sm:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close video demo"
              className="absolute -right-2 -top-12 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-zinc-300 transition hover:scale-110 hover:border-violet-400/60 hover:bg-violet-500/20 hover:text-white sm:-right-3 sm:-top-12"
              onClick={() => setIsVideoOpen(false)}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video overflow-hidden rounded-xl border border-purple-500/40 bg-black shadow-2xl shadow-purple-500/20">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="AutoSync AI live demo"
              />
            </div>
          </div>
        </div>
      )}

      {isAuthOpen && (
        <div
          aria-label="Authentication modal"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setIsAuthOpen(false)}
          role="dialog"
        >
          <div
            className="relative max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl border border-purple-500/40 bg-[#09090b]/95 p-6 shadow-2xl shadow-purple-500/20 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close authentication modal"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:rotate-90 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white"
              onClick={() => setIsAuthOpen(false)}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pr-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-600 shadow-lg shadow-violet-500/30">
                <Zap className="h-5 w-5 fill-white text-white" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                {authMode === "signin" ? "Welcome Back to AutoSync AI" : "Create Your AutoSync AI Account"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {authMode === "signin"
                  ? "Sign in to continue to your automated workspace."
                  : "Start automating your growth with a 14-day Pro trial."}
              </p>
              {authMode === "signup" && trialEndDate && (
                <p className="mt-3 rounded-lg border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-xs text-violet-200">
                  Your 14-day free trial will end on {trialEndDate}.
                </p>
              )}
            </div>

            <button className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/30 hover:bg-white/[0.08]" onClick={() => signIn("google", { callbackUrl: "/" })} type="button">
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M21.35 12.27c0-.79-.07-1.54-.22-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.42Z" fill="#4285F4" />
                <path d="M12 21.6c2.64 0 4.86-.87 6.48-2.36l-3.14-2.45c-.87.58-1.98.92-3.34.92-2.56 0-4.73-1.73-5.51-4.05H3.24v2.53A9.8 9.8 0 0 0 12 21.6Z" fill="#34A853" />
                <path d="M6.49 13.66A5.9 5.9 0 0 1 6.18 12c0-.58.11-1.14.31-1.66V7.81H3.24A9.8 9.8 0 0 0 2.2 12c0 1.51.36 2.94 1.04 4.19l3.25-2.53Z" fill="#FBBC05" />
                <path d="M12 6.29c1.44 0 2.73.5 3.75 1.48l2.81-2.81C16.85 3.37 14.64 2.4 12 2.4a9.8 9.8 0 0 0-8.76 5.41l3.25 2.53C7.27 8.02 9.44 6.29 12 6.29Z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>

            <div className="my-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-600">
              <span className="h-px flex-1 bg-white/10" />
              or continue with email
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <form onSubmit={handleAuthSubmit}>
              {authMode === "signup" && (
                <label className="mb-4 block text-xs font-medium text-zinc-400">
                  Full Name
                  <input className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500" name="name" placeholder="Alex Morgan" required type="text" />
                </label>
              )}
              <label className="mb-4 block text-xs font-medium text-zinc-400">
                Email
                <input className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500" name="email" placeholder="you@company.com" required type="email" />
              </label>
              <label className="block text-xs font-medium text-zinc-400">
                Password
                <input className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500" name="password" placeholder="••••••••" required type="password" />
              </label>
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:scale-[1.01] hover:shadow-violet-500/40 disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Activating your workspace...
                  </>
                ) : authMode === "signin" ? (
                  "Sign In to Workspace"
                ) : (
                  "Create Account & Start Trial"
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-zinc-500">
              {authMode === "signin" ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                className="font-medium text-violet-300 transition hover:text-violet-200"
                onClick={() => setAuthMode(authMode === "signin" ? "signup" : "signin")}
                type="button"
              >
                {authMode === "signin" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      )}

      {isToastOpen && (
        <div className="fixed right-5 top-5 z-50 flex w-[calc(100%-2.5rem)] max-w-sm items-start gap-3 rounded-2xl border border-emerald-400/30 bg-[#101613]/95 p-4 text-left shadow-2xl shadow-emerald-500/20 backdrop-blur-md" role="status">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-white">Account &amp; Free Trial Activated!</p>
            <p className="mt-1 text-xs leading-5 text-zinc-400">
              Welcome to AutoSync AI! Your 14-day Pro trial is now live. Redirecting to your workspace...
            </p>
          </div>
          <button aria-label="Close notification" className="text-zinc-500 transition hover:text-white" onClick={() => setIsToastOpen(false)} type="button">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </main>
  );
}
