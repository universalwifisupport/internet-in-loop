import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone, Signal, Smartphone, Wifi, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

import mobile from "@/assets/bl-mobile.jpg";
import neighborhood from "@/assets/bl-neighborhood.jpg";

export const Route = createFileRoute("/wireless")({
  head: () => ({
    meta: [
      { title: "Wireless — Mobile, 5G Home Internet & Hotspots | Internet in loop" },
      {
        name: "description",
        content:
          "The Internet in loop editorial guide to mobile plans, 5G home internet, hotspots and carrier coverage.",
      },
      { property: "og:title", content: "Wireless — Internet in loop" },
      {
        property: "og:description",
        content: "Compare mobile, 5G home internet, hotspots and coverage.",
      },
      { property: "og:image", content: mobile },
    ],
    links: [{ rel: "canonical", href: "/wireless" }],
  }),
  component: WirelessPage,
});

const items = [
  {
    icon: Smartphone,
    tag: "Mobile",
    title: "Phone plans",
    accent: "card-tomato",
    desc: "Unlimited, family, prepaid and international-friendly plans from participating carriers — compared on data, hotspot allowance and roaming.",
  },
  {
    icon: Signal,
    tag: "5G Home",
    title: "5G home internet",
    accent: "card-mustard",
    desc: "A cable-free way to bring fast internet into your home. Flat pricing, no installer visit, self-install in minutes.",
  },
  {
    icon: Wifi,
    tag: "Hotspots",
    title: "Mobile hotspots",
    accent: "card-paper",
    desc: "Stay online at the cabin, on the road, during outages. Compared on data caps, speed and coverage.",
  },
  {
    icon: MapPin,
    tag: "Coverage",
    title: "Coverage maps",
    accent: "card-sage",
    desc: "Wireless is only as good as the signal at your address. Cross-check carrier maps for home, work and travel.",
  },
];

function WirelessPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Section 03 · Wireless"
        title="Mobile, 5G and hotspots — compared by the signal at your door."
        subtitle="Coverage is local. Internet in loop weighs carriers against where you actually live, work and travel."
        bgImage={mobile}
      />

      {/* 4-up asymmetric tiles */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((s, i) => (
              <article
                key={s.title}
                className={`${s.accent} p-8 sm:p-10 min-h-[360px] flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-cream/20 grid place-items-center">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <span className="mono text-xs uppercase tracking-widest opacity-80">
                        {s.tag}
                      </span>
                    </div>
                    <span className="stat-num text-3xl opacity-70">0{i + 1}</span>
                  </div>
                  <h2 className="mt-8 font-display text-4xl leading-tight tracking-[-0.02em]">
                    {s.title}
                  </h2>
                  <p className="mt-4 leading-relaxed opacity-90 max-w-md">{s.desc}</p>
                </div>
                <div className="mt-6 pt-5 border-t border-current/20 inline-flex items-center gap-2 mono text-xs uppercase tracking-widest">
                  Read the guide <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signal audit — split with big stat callouts */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow">Signal Audit</span>
              <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
                Coverage first. <span className="italic text-primary">Price second.</span>
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed max-w-md">
                The cheapest carrier isn't a bargain if the signal drops in your kitchen. Every
                wireless recommendation Internet in loop publishes starts with an address-level coverage
                check.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { l: "Nationwide 5G", v: "3 major carriers" },
                { l: "MVNO options", v: "12+ tracked" },
                { l: "Coverage layers", v: "5G · 4G · Roam" },
                { l: "Bundles compared", v: "Cross-carrier" },
              ].map((k) => (
                <div key={k.l} className="card-paper p-6">
                  <div className="mono text-[10px] tracking-widest uppercase text-ink-muted">
                    {k.l}
                  </div>
                  <div className="mt-3 stat-num text-4xl text-ink">{k.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/70 to-ink/40" />
            <div className="relative p-10 sm:p-16 grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <span className="mono text-xs uppercase tracking-widest text-signal">Next</span>
                <h2 className="mt-3 font-display text-5xl text-cream leading-[1]">
                  Check carrier coverage at your address.
                </h2>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between px-6 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                >
                  Check coverage <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+18888824649"
                  className="inline-flex items-center justify-between px-6 py-4 rounded-full border border-cream/30 text-sm font-medium text-cream hover:bg-cream hover:text-ink transition"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> (888) 882-4649
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
