import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone, Wifi, Router, Home, Signal } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import desk from "@/assets/bl-desk.jpg";
import hero from "@/assets/bl-hero.jpg";

export const Route = createFileRoute("/home-connectivity")({
  head: () => ({
    meta: [
      { title: "Home Wi-Fi — Routers, Mesh & Smart Home | Internet in loop" },
      {
        name: "description",
        content:
          "Wi-Fi 6, Wi-Fi 7, mesh networks and smart-home bandwidth — Internet in loop's plain-English guide.",
      },
      { property: "og:title", content: "Home Wi-Fi — Internet in loop" },
      { property: "og:description", content: "Wi-Fi 6/7, mesh and smart-home guides." },
      { property: "og:image", content: desk },
    ],
    links: [{ rel: "canonical", href: "/home-connectivity" }],
  }),
  component: HomeConnectivityPage,
});

function HomeConnectivityPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Section 04 · Home Wi-Fi"
        title="The last ten meters matter more than the first ten miles."
        subtitle="Your router is the bottleneck for most home internet issues. These guides help you fix that first."
        bgImage={desk}
      />

      {/* Radio card */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card-tomato p-10 min-h-[420px] flex flex-col justify-between">
              <div>
                <span className="chip !bg-cream/20 !text-cream">Chapter A</span>
                <h2 className="mt-6 font-display text-5xl leading-[1] tracking-[-0.025em]">
                  Pick the right radio.
                </h2>
                <p className="mt-4 opacity-90 max-w-md leading-relaxed">
                  Wi-Fi 6 (802.11ax) delivers dense-network throughput perfect for apartments and
                  family homes. Wi-Fi 7 (802.11be) opens the 6 GHz band — future-proof if your ISP
                  delivers multi-gig speeds.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  ["Wi-Fi 6", "Best for most homes today"],
                  ["Wi-Fi 6E", "Add 6 GHz for dense buildings"],
                  ["Wi-Fi 7", "Multi-gig fiber, low-latency gaming"],
                ].map(([t, d]) => (
                  <li
                    key={t}
                    className="flex items-center justify-between border-b border-cream/20 pb-3"
                  >
                    <span className="font-display text-xl">{t}</span>
                    <span className="mono text-xs uppercase tracking-widest opacity-80">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-paper p-10 min-h-[420px] flex flex-col justify-between">
              <div>
                <span className="chip">Chapter B</span>
                <h2 className="mt-6 font-display text-5xl text-ink leading-[1] tracking-[-0.025em]">
                  Kill the <span className="italic text-primary">dead spots.</span>
                </h2>
              </div>
              <div className="mt-8 grid gap-4">
                {[
                  {
                    icon: Router,
                    t: "Single router",
                    d: "Fine for apartments up to ~1,500 sq ft.",
                  },
                  {
                    icon: Home,
                    t: "Mesh network",
                    d: "Two or three nodes for houses over 2,000 sq ft.",
                  },
                  {
                    icon: Signal,
                    t: "Wired backhaul",
                    d: "Ethernet between nodes cuts latency and preserves radio bandwidth.",
                  },
                ].map((s) => (
                  <div key={s.t} className="flex items-start gap-4">
                    <span className="h-11 w-11 rounded-full bg-secondary grid place-items-center shrink-0">
                      <s.icon className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <div className="font-display text-xl text-ink">{s.t}</div>
                      <div className="text-sm text-ink-muted">{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart home bandwidth budget */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow justify-center">Bandwidth Budget</span>
            <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
              How much a modern home <span className="italic text-primary">actually eats.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "4K stream", n: "25 Mbps", d: "Per screen" },
              { t: "Video call", n: "5 Mbps", d: "HD, 2-way" },
              { t: "Cloud gaming", n: "35 Mbps", d: "Low latency" },
              { t: "Smart devices", n: "10 Mbps", d: "Per 15 devices" },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 60}>
                <div className={`p-6 rounded-3xl ${i === 1 ? "card-mustard" : "card-paper"}`}>
                  <div className="mono text-[10px] uppercase tracking-widest opacity-70">{b.d}</div>
                  <div className="mt-3 stat-num text-4xl">{b.n}</div>
                  <div className="mt-2 font-display text-xl">{b.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="card-ink relative overflow-hidden p-10 sm:p-14 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="mono text-xs uppercase tracking-widest text-signal">Next</span>
              <h2 className="mt-3 font-display text-5xl text-cream leading-[1]">
                Not sure which router fits your plan?
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/learning-center"
                className="inline-flex items-center justify-between px-6 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium"
              >
                Read the Wi-Fi primer <ArrowUpRight className="h-4 w-4" />
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
      </section>
    </SiteLayout>
  );
}
