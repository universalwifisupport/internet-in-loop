import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone, Zap, Cable, Signal, Wifi } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import fiber from "@/assets/bl-fiber.jpg";
import neighborhood from "@/assets/bl-neighborhood.jpg";
import desk from "@/assets/bl-desk.jpg";

export const Route = createFileRoute("/internet-services")({
  head: () => ({
    meta: [
      { title: "Streaming Internet — Fiber, Cable, 5G & DSL Compared | Internet in loop" },
      {
        name: "description",
        content:
          "An editorial comparison of internet options for streaming homes — fiber, cable, 5G, and DSL translated into smooth-streaming performance, not brochure language.",
      },
      { property: "og:title", content: "Streaming Internet Guide — Internet in loop" },
      { property: "og:description", content: "Fiber, cable, 5G and DSL for HD, 4K, and live-streaming homes — plain English." },
      { property: "og:image", content: fiber },
    ],
    links: [{ rel: "canonical", href: "/internet-services" }],
  }),
  component: InternetPage,
});

const techs = [
  {
    icon: Zap,
    tag: "Fiber",
    title: "Fiber Internet",
    accent: "card-tomato",
    desc: "Glass-strand connections carrying light. Symmetrical upload and download speeds keep 4K streams, cloud backups, and live sports smooth even when the whole house is online.",
    tiers: ["300 Mbps", "1 Gbps", "2 Gbps", "5 Gbps"],
    best: "4K streaming homes, remote workers, and households with multiple screens.",
  },
  {
    icon: Cable,
    tag: "Cable",
    title: "Cable Internet",
    accent: "card-paper",
    desc: "Coax-based service. Broadly available and usually great for cable bundles, streaming-heavy households, and homes that want strong speed without a full fiber upgrade.",
    tiers: ["100 Mbps", "300 Mbps", "600 Mbps", "1.2 Gbps"],
    best: "Suburbs, bundle buyers, and families mixing live TV with streaming apps.",
  },
  {
    icon: Signal,
    tag: "5G Home",
    title: "5G Home Internet",
    accent: "card-mustard",
    desc: "Wireless internet from a 5G tower to a receiver at your home. Fast install, simple setup, and a good option if you want to stream without paying for a truck roll or a complicated install.",
    tiers: ["100 Mbps", "300 Mbps", "500 Mbps", "1 Gbps"],
    best: "Renters, stream-first households, and homes with strong local 5G signal.",
  },
  {
    icon: Wifi,
    tag: "DSL / Fixed",
    title: "DSL & Fixed Wireless",
    accent: "card-sage",
    desc: "Phone-line or tower-based connections. Not glamorous, but still useful for rural homes and backup streams where cable or fiber has not reached yet.",
    tiers: ["25 Mbps", "50 Mbps", "100 Mbps", "—"],
    best: "Rural households, cabins, and homes that need a basic stream-safe fallback.",
  },
];

function InternetPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Section 01 · Internet for Streaming"
        title="Choose the connection your stream setup actually needs."
        subtitle="Fiber, cable, 5G home internet, and DSL all shape how smoothly your TV, sports, and streaming apps perform at home."
        bgImage={fiber}
      />

      {/* Vertical editorial cards — big, magazine-column layout */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {techs.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <article
                  className={`${t.accent} p-8 sm:p-10 flex flex-col justify-between min-h-[420px]`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-cream/20 grid place-items-center backdrop-blur">
                          <t.icon className="h-5 w-5" />
                        </div>
                        <span className="mono text-xs uppercase tracking-widest opacity-80">
                          {t.tag}
                        </span>
                      </div>
                      <span className="stat-num text-4xl opacity-70">0{i + 1}</span>
                    </div>
                    <h2 className="mt-8 font-display text-4xl sm:text-5xl leading-[1.02] tracking-[-0.02em]">
                      {t.title}
                    </h2>
                    <p className="mt-4 max-w-md leading-relaxed opacity-90">{t.desc}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-current/20">
                    <div className="mono text-[10px] tracking-widest uppercase opacity-70">
                      Tiers on offer
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {t.tiers.map((tier) => (
                        <span
                          key={tier}
                          className="px-3 py-1.5 rounded-full bg-cream/15 mono text-xs"
                        >
                          {tier}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 text-sm">
                      <span className="opacity-70">Best for → </span>
                      {t.best}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Speed decoder — inline pill row */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center">The Translator</span>
            <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
              What megabits <span className="italic text-primary">actually buy.</span>
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                t: "25–100 Mbps",
                w: "Solo / duo",
                d: "Smooth HD streaming, light browsing, and occasional video calls.",
              },
              {
                t: "200–500 Mbps",
                w: "Family",
                d: "4K streams, multiple screens, remote work, and smart-home devices.",
              },
              { t: "1 Gbps", w: "Power", d: "Peak streaming, cloud backups, gaming, and big uploads." },
              { t: "2 Gbps+", w: "Studio", d: "Live streaming, creator setups, and a house full of screens." },
            ].map((s) => (
              <div key={s.t} className="card-paper p-6">
                <div className="chip">{s.w}</div>
                <div className="mt-5 stat-num text-4xl text-ink">{s.t}</div>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split — text over image */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[36px] overflow-hidden">
              <img
                src={desk}
                alt="Editor's notes on home connectivity"
                loading="lazy"
                width={1400}
                height={1050}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="eyebrow">Reading the Fine Print</span>
            <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
              Advertised speed is a <span className="italic text-primary">headline.</span>
            </h2>
            <p className="mt-5 text-ink-muted leading-relaxed">
              The Internet in loop editorial always publishes the four numbers that matter most for
              streaming life: download speed, upload speed, latency, and the price after promotional rates end.
            </p>
            <ul className="mt-6 space-y-3 text-ink">
              {[
                "Upload speed — the number that keeps a live stream or video call stable",
                "Latency — the number that matters for gaming and lag-free playback",
                "Data caps — the number nobody advertises but every streaming household notices",
                "Post-promo pricing — the number your monthly bill actually becomes",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="card-ink relative overflow-hidden p-10 sm:p-14 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="mono text-xs tracking-widest uppercase text-signal">Next</span>
              <h2 className="mt-3 font-display text-5xl leading-[1] text-cream">
                Get a plan matrix for your ZIP.
              </h2>
              <p className="mt-4 text-cream/70 max-w-lg">
                Enter one ZIP. See every internet technology that reaches your address — with a
                Internet in loop editor on the line if you want one.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-between px-6 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium"
              >
                Compare in my ZIP <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+18888824649"
                className="inline-flex items-center justify-between px-6 py-4 rounded-full border border-cream/25 text-sm font-medium text-cream hover:bg-cream hover:text-ink transition"
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
