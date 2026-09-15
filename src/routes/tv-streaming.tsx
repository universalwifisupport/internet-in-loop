import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone, Tv, MonitorPlay, Film, Radio } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

import tv from "@/assets/bl-tv.jpg";
import hero from "@/assets/bl-hero.jpg";

export const Route = createFileRoute("/tv-streaming")({
  head: () => ({
    meta: [
      { title: "TV & Streaming — Cable vs Live TV vs On-Demand | Internet in loop" },
      {
        name: "description",
        content:
          "The Internet in loop editorial guide to cable, live TV streaming and on-demand — build a watch stack for how you actually watch.",
      },
      { property: "og:title", content: "TV & Streaming — Internet in loop" },
      {
        property: "og:description",
        content: "Cable, satellite, live TV and on-demand — compared.",
      },
      { property: "og:image", content: tv },
    ],
    links: [{ rel: "canonical", href: "/tv-streaming" }],
  }),
  component: TvPage,
});

const options = [
  {
    icon: Tv,
    tag: "Cable",
    title: "Traditional Cable",
    accent: "card-tomato",
    desc: "Deep channel lineups with local sports, live news, DVR and bundle discounts.",
    facts: [
      "Live local channels",
      "Bundled DVR",
      "Strong sports slate",
      "Best when bundled with internet",
    ],
  },
  {
    icon: MonitorPlay,
    tag: "Live TV Streaming",
    title: "Live TV over the internet",
    accent: "card-mustard",
    desc: "Cloud-based live TV — no installer visit. Multi-device, cloud DVR, month-to-month.",
    facts: ["Zero install", "Cloud DVR", "Multi-device", "Cancel monthly"],
  },
  {
    icon: Film,
    tag: "On-Demand",
    title: "Streaming platforms",
    accent: "card-paper",
    desc: "Subscription libraries of movies, originals and series. Mix two or three to replicate a bundle for less.",
    facts: ["Originals & blockbusters", "Family profiles", "Watch anywhere", "Add or drop monthly"],
  },
  {
    icon: Radio,
    tag: "Satellite",
    title: "Satellite TV",
    accent: "card-sage",
    desc: "A rural workhorse — wide coverage, strong sports packages, HD/4K when cable and fiber haven't arrived.",
    facts: ["Rural coverage", "Sports-heavy", "HD & 4K channels", "Optional add-ons"],
  },
];

function TvPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Section 02 · Television"
        title="Cable, satellite or streaming — the shortest path to a good watch."
        subtitle="Compare classic cable lineups, live-TV streaming and on-demand platforms without the sales pitch."
        bgImage={tv}
      />

      {/* 4-up editorial tiles */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {options.map((o, i) => (
              <article
                key={o.title}
                className={`${o.accent} p-8 sm:p-10 flex flex-col justify-between min-h-[380px]`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-cream/20 grid place-items-center">
                        <o.icon className="h-5 w-5" />
                      </div>
                      <span className="mono text-xs uppercase tracking-widest opacity-80">
                        {o.tag}
                      </span>
                    </div>
                    <span className="stat-num text-3xl opacity-70">0{i + 1}</span>
                  </div>
                  <h2 className="mt-8 font-display text-4xl leading-tight tracking-[-0.02em]">
                    {o.title}
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed opacity-90">{o.desc}</p>
                </div>
                <ul className="mt-6 pt-5 border-t border-current/20 grid grid-cols-2 gap-2 mono text-[11px] uppercase tracking-widest opacity-90">
                  {o.facts.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-current" /> {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ledger — cable vs streaming */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow justify-center">The Ledger</span>
            <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
              Cable vs streaming, <span className="italic text-primary">laid bare.</span>
            </h2>
          </div>
          <div className="card-paper overflow-hidden">
            <div className="grid grid-cols-3 mono text-[11px] tracking-widest uppercase text-ink-muted bg-secondary">
              <div className="p-5">Factor</div>
              <div className="p-5 border-l border-border">Cable</div>
              <div className="p-5 border-l border-border">Streaming</div>
            </div>
            {[
              ["Live sports", "Deep & regional", "Depends on service"],
              ["Local channels", "Included", "Add-on required"],
              ["Install", "Technician visit", "Self, in minutes"],
              ["Contract", "Often 12–24 mo.", "Month-to-month"],
              ["Devices", "Set-top box", "Any smart TV or app"],
              ["Bundle math", "Cheaper with internet", "Pay per platform"],
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-border text-sm">
                <div className="p-5 font-display text-lg text-ink">{row[0]}</div>
                <div className="p-5 border-l border-border text-ink-muted">{row[1]}</div>
                <div className="p-5 border-l border-border text-ink-muted">{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial recommendation strip over image */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-[36px] overflow-hidden">
            <img
              src={hero}
              alt="Family enjoying TV at home"
              loading="lazy"
              width={1400}
              height={1750}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">Editor's Recommendation</span>
            <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
              Most homes are <span className="italic text-primary">happier</span> with a mix.
            </h2>
            <p className="mt-5 text-ink-muted leading-relaxed max-w-xl">
              More than 70% of U.S. households now blend at least one streaming service with a
              traditional TV subscription. The Internet in loop editorial helps you draft the right
              combination — sports plus on-demand, live news plus a family library.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-accent">
                Build my watch stack <ArrowUpRight className="h-4 w-4" />
              </Link>
                <a href="tel:+18888824649" className="btn-ghost">
                  <Phone className="h-4 w-4" /> (888) 882-4649
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
