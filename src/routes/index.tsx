import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Phone,
  Search,
  Zap,
  Tv,
  Signal,
  Wifi,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/bl-hero.jpg";
import fiber from "@/assets/bl-fiber.jpg";
import desk from "@/assets/bl-desk.jpg";
import advisor from "@/assets/bl-advisor.jpg";
import neighborhood from "@/assets/bl-neighborhood.jpg";
import tvImg from "@/assets/bl-tv.jpg";
import mobile from "@/assets/bl-mobile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Internet in loop — The Editorial Guide to Home Internet, TV & Wireless" },
      {
        name: "description",
        content:
          "Internet in loop is a plain-English comparison desk for home internet, TV, streaming and wireless — written for households, not sales floors.",
      },
      { property: "og:title", content: "Internet in loop — Editorial Guide to Home Connectivity" },
      {
        property: "og:description",
        content:
          "Compare fiber, cable, 5G home internet, streaming and mobile — ZIP-scoped, no pressure.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* ═══ 01 · HERO — asymmetric editorial cover ═══ */}
      <section className="relative pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="chip-mustard chip">Issue No. 01 · 2026</span>
                  <span className="mono text-[11px] text-ink-muted tracking-widest uppercase">
                    Field guide
                  </span>
                </div>
                <h1 className="mt-8 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.03em] text-ink">
                  Home internet,
                  <br />
                  <span className="italic text-primary">deciphered</span> —
                  <br />
                  block by block.
                </h1>
                <p className="mt-8 max-w-lg text-lg text-ink-muted leading-relaxed">
                  Internet in loop reads every plan on your street so you don't have to. We translate speed
                  tiers, bundle math, and streaming stacks into decisions a household can actually
                  make.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link to="/contact" className="btn-accent">
                    <Search className="h-4 w-4" /> Read my area
                  </Link>
                  <a href="tel:+18888824649" className="btn-ghost">
                    <Phone className="h-4 w-4" /> (888) 882-4649
                  </a>
                  <Link to="/learning-center" className="btn-ghost">
                    Browse the Journal <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-full bg-gradient-warm border-2 border-cream"
                        />
                      ))}
                    </div>
                    <span className="mono text-xs text-ink-muted uppercase tracking-widest">
                      18,400+ households guided
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="mono text-xs text-ink-muted uppercase tracking-widest ml-1">
                      4.9 · Reader trust
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={140}>
                <div className="relative">
                  <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-elegant">
                    <img
                      src={hero}
                      alt="Household connected at home"
                      width={1200}
                      height={1500}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-5 left-5 chip bg-cream/90 !text-ink">
                      Cover story
                    </div>
                  </div>
                  {/* stat tile */}
                  <div className="absolute -left-4 -bottom-8 hidden sm:block card-tomato p-6 max-w-[240px] shadow-elegant rotate-[-3deg]">
                    <div className="mono text-[10px] tracking-widest uppercase opacity-80">
                      Live index
                    </div>
                    <div className="mt-2 stat-num text-5xl">3,812</div>
                    <div className="mt-1 text-xs opacity-90">plans compared this week</div>
                  </div>
                  <div className="absolute -right-2 top-10 hidden sm:block card-mustard px-4 py-3 rounded-full shadow-elegant rotate-[4deg]">
                    <div className="mono text-[11px] font-semibold uppercase tracking-widest">
                      Fiber · Cable · 5G · DSL
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 02 · MARQUEE / brand ticker ═══ */}
      <section className="py-8 border-y border-border bg-ink text-cream overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap gap-16 mono text-sm tracking-widest uppercase">
          {[...Array(2)].flatMap((_, k) =>
            [
              "Fiber Optics",
              "Cable · Coax",
              "5G Home",
              "Fixed Wireless",
              "Wi-Fi 7",
              "Streaming Stacks",
              "Bundle Math",
              "ZIP-scoped Data",
              "Cord-cutting",
            ].map((t, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-6">
                <span className="text-signal">●</span> {t}
              </span>
            )),
          )}
        </div>
      </section>

      {/* ═══ 03 · WHAT WE INDEX — 4 category tiles, asymmetric ═══ */}
      <section className="relative py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-8">
              <span className="eyebrow">Chapter 01 · The Stack</span>
              <h2 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.02] tracking-[-0.025em]">
                Four ways a modern household{" "}
                <span className="italic text-primary">gets online.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <p className="text-ink-muted leading-relaxed">
                Every home builds a stack — pipe, screen, mobile, mesh. Internet in loop indexes each layer
                separately so you can mix without overpaying.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {/* Big card */}
            <Link
              to="/internet-services"
              className="group md:col-span-4 card-paper overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-[24px]">
                <img
                  src={fiber}
                  alt="Fiber optic strands"
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 chip bg-cream/90 !text-ink">Layer 01</div>
              </div>
              <div className="p-8 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-4xl text-ink leading-none">Internet</h3>
                  <p className="mt-3 text-ink-muted max-w-md">
                    Fiber, cable, 5G home and DSL — sorted by tech, translated to real-life use.
                  </p>
                </div>
                <span className="h-12 w-12 rounded-full bg-ink text-cream grid place-items-center shrink-0 group-hover:bg-primary transition">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>

            {/* stacked side */}
            <div className="md:col-span-2 grid grid-cols-1 gap-5">
              <Link
                to="/tv-streaming"
                className="group card-mustard p-6 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div className="chip !bg-ink/10 !text-ink">Layer 02</div>
                  <Tv className="h-5 w-5" />
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-3xl leading-none">Television</h3>
                  <p className="mt-2 text-sm opacity-90">Cable, live TV and on-demand.</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1 mono text-xs uppercase tracking-widest">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
              <Link
                to="/wireless"
                className="group card-ink text-cream p-6 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div className="chip !bg-cream/10 !text-cream">Layer 03</div>
                  <Signal className="h-5 w-5 text-signal" />
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-3xl leading-none text-cream">Wireless</h3>
                  <p className="mt-2 text-sm opacity-80">Mobile · 5G Home · Hotspots.</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1 mono text-xs uppercase tracking-widest text-signal">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </div>

            {/* Full-width small card */}
            <Link
              to="/home-connectivity"
              className="group md:col-span-6 card-sage p-8 flex items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                <span className="h-14 w-14 rounded-full bg-cream/15 grid place-items-center shrink-0">
                  <Wifi className="h-6 w-6" />
                </span>
                <div>
                  <div className="chip !bg-cream/15 !text-cream">Layer 04</div>
                  <h3 className="mt-2 font-display text-3xl leading-tight">
                    Home Wi-Fi — the last ten meters that fix everything else.
                  </h3>
                </div>
              </div>
              <span className="h-12 w-12 rounded-full bg-cream text-ink grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-cream transition">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 04 · HOW IT WORKS — editorial numbered strip over image ═══ */}
      <section className="relative py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="eyebrow">Chapter 02 · Method</span>
              <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
                A four-step read, <span className="italic text-primary">not a sales script.</span>
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed">
                Every recommendation ends with you talking directly to a provider you chose.
                Internet in loop never signs on your behalf.
              </p>
              <div className="mt-8 relative aspect-[4/3] rounded-[32px] overflow-hidden">
                <img
                  src={desk}
                  alt="Editor's desk"
                  loading="lazy"
                  width={1400}
                  height={1050}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  n: "01",
                  t: "Drop a ZIP",
                  d: "We rebuild the plan matrix for your address in seconds — fiber, cable, 5G, DSL, all with real availability.",
                },
                {
                  n: "02",
                  t: "See it in plain English",
                  d: "Speed tiers translate to real-world scenes — HD movie nights, four-person Zoom days, a house full of gamers.",
                },
                {
                  n: "03",
                  t: "Read the trade-offs",
                  d: "Bundle math, install windows, contract length, upload speed — the fine print that pricing pages bury.",
                },
                {
                  n: "04",
                  t: "Sign on your terms",
                  d: "You pick. You call the provider. You keep control. We stay off your paperwork.",
                },
              ].map((s) => (
                <Reveal key={s.n}>
                  <div className="card-paper p-8 flex items-start gap-8">
                    <div className="stat-num text-6xl text-primary shrink-0 w-20">{s.n}</div>
                    <div>
                      <h3 className="font-display text-2xl text-ink">{s.t}</h3>
                      <p className="mt-2 text-ink-muted leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 05 · SPEED TRANSLATOR — pill row ═══ */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow justify-center">Chapter 03 · The Translator</span>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.02] tracking-[-0.025em]">
              What a megabit <span className="italic text-primary">actually</span> buys.
            </h2>
            <p className="mt-5 text-ink-muted">
              Speed tiers, dressed down. Match a scene to a tier and you'll know what you actually
              need.
            </p>
          </div>

          <div className="mt-14 space-y-4 max-w-4xl mx-auto">
            {[
              {
                tier: "25–100 Mbps",
                label: "Solo",
                scene: "Comfortable browsing, streaming a couple of HD shows, weekly video calls.",
                color: "card-paper",
              },
              {
                tier: "200–500 Mbps",
                label: "Family",
                scene: "Multi-device household, remote work, gaming, smart-home devices humming.",
                color: "card-mustard",
              },
              {
                tier: "1 Gbps",
                label: "Power",
                scene: "Cloud backups, 4K everywhere, a house full of screens, heavy uploads.",
                color: "card-paper",
              },
              {
                tier: "2 Gbps+",
                label: "Studio",
                scene: "Creators, live streaming, servers, twenty simultaneous 4K streams.",
                color: "card-ink",
              },
            ].map((r, i) => (
              <Reveal key={r.tier} delay={i * 80}>
                <div
                  className={`${r.color} p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6`}
                >
                  <div className="sm:w-52 flex items-center gap-4">
                    <span
                      className={`chip ${r.color.includes("mustard") ? "!bg-ink/10 !text-ink" : r.color.includes("ink") ? "!bg-cream/15 !text-cream" : ""}`}
                    >
                      {r.label}
                    </span>
                    <div className="stat-num text-3xl">{r.tier}</div>
                  </div>
                  <div
                    className={`flex-1 text-sm sm:text-base leading-relaxed ${r.color.includes("ink") ? "text-cream/80" : "text-ink-muted"}`}
                  >
                    {r.scene}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 06 · GUIDE PORTRAIT + PRINCIPLES ═══ */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden">
              <img
                src={advisor}
                alt="A Internet in loop guide"
                loading="lazy"
                width={1200}
                height={1400}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-cream/95 backdrop-blur p-5 rounded-2xl">
                <div className="mono text-[10px] tracking-widest uppercase text-ink-muted">
                  Guide on shift
                </div>
                <div className="mt-1 font-display text-xl text-ink">
                  "We answer in under four minutes. No queues."
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">Chapter 04 · Our Charter</span>
            <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
              An <span className="italic text-primary">editorial desk</span> — not a sales floor.
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed max-w-xl">
              Four rules that shape everything Internet in loop publishes.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                {
                  n: "i.",
                  t: "Households first",
                  d: "Every guide is written for the person deciding — never the provider bidding.",
                },
                {
                  n: "ii.",
                  t: "Neutral by design",
                  d: "We compare across providers. No exclusive vendor deals shape our editorial.",
                },
                {
                  n: "iii.",
                  t: "Transparent trade-offs",
                  d: "We surface contract terms, install windows and upload speeds — not just headline prices.",
                },
                {
                  n: "iv.",
                  t: "Human help",
                  d: "Real editors answer the phone. No chatbots pretending to be humans.",
                },
              ].map((p) => (
                <div key={p.n} className="card-paper p-6">
                  <div className="mono text-primary text-sm">{p.n}</div>
                  <h3 className="mt-2 font-display text-2xl text-ink">{p.t}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 07 · TESTIMONIALS — offset editorial quote pair ═══ */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="eyebrow">Chapter 05 · Letters</span>
              <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
                From <span className="italic text-primary">the mailbag.</span>
              </h2>
              <p className="mt-6 text-ink-muted">
                Households who read Internet in loop and rewrote their monthly bills.
              </p>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-5">
              {[
                {
                  q: "The Internet in loop editor walked me through fiber vs cable in ten minutes and I stopped overpaying my cable bill.",
                  n: "Marisol A.",
                  c: "Austin, TX",
                },
                {
                  q: "Finally a comparison site that reads like a magazine, not a car dealership. I actually understood what I was buying.",
                  n: "David P.",
                  c: "Columbus, OH",
                },
                {
                  q: "The bundle math alone saved us $38 a month. Guide was on the phone within four minutes.",
                  n: "Rachel & Kim",
                  c: "Portland, OR",
                },
                {
                  q: "I read one Journal piece on 5G home internet and cancelled a cable install the same day.",
                  n: "Andre K.",
                  c: "Charlotte, NC",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-3xl ${i % 3 === 0 ? "card-tomato" : "card-paper"}`}
                >
                  <Quote className="h-6 w-6 opacity-60" />
                  <p
                    className={`mt-4 font-display text-2xl leading-snug ${i % 3 === 0 ? "" : "text-ink"}`}
                  >
                    "{t.q}"
                  </p>
                  <div
                    className={`mt-6 mono text-xs uppercase tracking-widest ${i % 3 === 0 ? "opacity-80" : "text-ink-muted"}`}
                  >
                    {t.n} · {t.c}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 08 · JOURNAL PREVIEW ═══ */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">Chapter 06 · The Journal</span>
              <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
                This week's field notes.
              </h2>
            </div>
            <Link to="/learning-center" className="btn-ghost">
              Open the Journal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                img: tvImg,
                topic: "Streaming",
                read: "8 min",
                title: "The 2026 field guide to cutting cable without losing the sports.",
              },
              {
                img: mobile,
                topic: "Wireless",
                read: "5 min",
                title: "5G home internet, tested against fiber and cable across three cities.",
              },
              {
                img: neighborhood,
                topic: "Infrastructure",
                read: "7 min",
                title: "Why your street matters more than your provider.",
              },
            ].map((a, i) => (
              <Link key={i} to="/learning-center" className="group card-paper overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[24px]">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mono text-[11px] uppercase tracking-widest text-ink-muted">
                    <span className="text-primary">{a.topic}</span>
                    <span>{a.read}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-ink leading-snug">{a.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-1 mono text-xs uppercase tracking-widest text-ink group-hover:text-primary transition">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 09 · FAQ — editorial accordion ═══ */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow">Chapter 07 · FAQ</span>
            <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
              Questions our editors <span className="italic text-primary">hear the most.</span>
            </h2>
          </div>
          <div className="lg:col-span-8 divide-y divide-border border-y border-border">
            {[
              {
                q: "Are you a provider?",
                a: "No. Internet in loop is an editorial comparison desk. We don't own towers, lay fiber, or sign contracts on your behalf. You always sign directly with the provider you pick.",
              },
              {
                q: "Is Internet in loop free to use?",
                a: "Yes — always free for households. Participating providers may compensate us when a reader chooses their plan, and that funds the editorial. It never changes what we recommend.",
              },
              {
                q: "How current is your data?",
                a: "Availability, tiers and pricing are refreshed against provider feeds. We rebuild the matrix against your ZIP at read-time, so you get what's live — not last month's cache.",
              },
              {
                q: "What if I only need advice?",
                a: "Perfectly fine. Call the guide line and ask questions. We won't push, and we won't add you to any list.",
              },
              {
                q: "Do you sell my information?",
                a: "No. See our Privacy Policy for the full detail — but the short version is we don't sell, rent, or trade personal information.",
              },
            ].map((f, i) => (
              <details key={i} className="group py-6" open={i === 0}>
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="font-display text-2xl text-ink pr-8">{f.q}</h3>
                  <span className="mt-1 h-9 w-9 rounded-full border border-border grid place-items-center text-ink group-open:bg-primary group-open:text-cream group-open:border-primary transition shrink-0">
                    <ArrowUpRight className="h-4 w-4 group-open:rotate-45 transition" />
                  </span>
                </summary>
                <p className="mt-4 text-ink-muted leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10 · FINAL CTA — big ink block ═══ */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="card-ink relative overflow-hidden p-10 sm:p-16">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -left-20 -bottom-24 h-96 w-96 rounded-full bg-signal/25 blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="mono text-xs tracking-widest uppercase text-signal">Ready?</span>
                <h2 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.025em] text-cream">
                  Get a Internet in loop read on <span className="italic text-signal">your address.</span>
                </h2>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between px-6 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                >
                  Start with your ZIP <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                    href="tel:+18888824649"
                  className="inline-flex items-center justify-between px-6 py-4 rounded-full border border-cream/25 text-sm font-medium text-cream hover:bg-cream hover:text-ink transition"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> (888) 882-4649
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
