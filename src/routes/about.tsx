import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone, Compass, Scale, Shield, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import advisor from "@/assets/bl-advisor.jpg";
import desk from "@/assets/bl-desk.jpg";
import neighborhood from "@/assets/bl-neighborhood.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Internet in loop — Streaming TV & Entertainment Guide" },
      {
        name: "description",
        content:
          "Internet in loop is an independent editorial guide for streaming platforms, live TV, and connected home entertainment — built to help households choose smarter without the sales pressure.",
      },
      { property: "og:title", content: "About Internet in loop" },
      {
        property: "og:description",
        content: "An independent editorial guide for streaming, live TV, and entertainment.",
      },
      { property: "og:image", content: advisor },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Internet in loop"
        title="An editorial desk for how your home actually watches."
        subtitle="Launched in 2026 with one job — cut through provider marketing and help households choose the best stream, channel package, and internet setup for their lifestyle."
        bgImage={advisor}
      />

      {/* Charter split */}
      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 card-paper p-10 lg:p-14">
              <span className="eyebrow">The Charter</span>
              <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
                We compare. <span className="italic text-primary">We don't sell.</span>
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed max-w-xl">
                Internet in loop is an independent editorial guide for streaming platforms, live TV,
                sports packages, smart-home entertainment, and the internet connection that keeps it all
                smooth. We index the options and translate them into plain language for everyday households.
              </p>
              <p className="mt-4 text-ink-muted leading-relaxed max-w-xl">
                We do not own cable lines, app libraries, or provider networks. We do not sign contracts
                on your behalf. Every recommendation ends with you choosing the service, package, or setup
                that best matches your home.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-accent">
                  Reach the desk <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="tel:+18888824649" className="btn-ghost">
                  <Phone className="h-4 w-4" /> (888) 882-4649
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-[36px] overflow-hidden relative min-h-[420px]">
              <img
                src={desk}
                alt="Internet in loop editorial desk"
                loading="lazy"
                width={1400}
                height={1050}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="mb-12">
            <span className="eyebrow">Values</span>
            <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
              Four fixed points.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Compass,
                code: "i.",
                t: "Consumer-first",
                d: "Every guide is written for households first, providers second.",
              },
              {
                icon: Scale,
                code: "ii.",
                t: "Neutral",
                d: "We compare across providers — no exclusive vendor deals shape editorial.",
              },
              {
                icon: Shield,
                code: "iii.",
                t: "Transparent",
                d: "We disclose when comparisons involve participating providers.",
              },
              {
                icon: Users,
                code: "iv.",
                t: "Human help",
                d: "Real editors answer the phone. Never a bot pretending.",
              },
            ].map((v, i) => (
              <div
                key={v.code}
                className={`${i === 0 ? "card-tomato" : i === 3 ? "card-mustard" : "card-paper"} p-8 min-h-[240px]`}
              >
                <div className="flex items-center justify-between">
                  <div className="mono text-primary text-sm">{v.code}</div>
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{v.t}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${i === 0 || i === 3 ? "opacity-90" : "text-ink-muted"}`}
                >
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="relative rounded-[36px] overflow-hidden">
            <img
              src={neighborhood}
              alt=""
              loading="lazy"
              width={1600}
              height={900}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-transparent" />
            <div className="relative p-10 sm:p-16 grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <span className="mono text-xs uppercase tracking-widest text-signal">Signal</span>
                <h2 className="mt-3 font-display text-5xl text-cream leading-[1.02]">
                  Numbers that guide us.
                </h2>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { k: "2026", l: "Founded" },
                  { k: "50", l: "States indexed" },
                  { k: "124+", l: "Providers" },
                  { k: "0", l: "Sales agents" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl bg-cream/10 backdrop-blur border border-cream/15 p-5"
                  >
                    <div className="stat-num text-4xl text-signal">{s.k}</div>
                    <div className="mt-2 mono text-[10px] tracking-widest uppercase text-cream/70">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
