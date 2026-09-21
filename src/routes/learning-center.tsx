import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BookOpen, Zap, Wifi, Tv } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import fiber from "@/assets/bl-fiber.jpg";
import desk from "@/assets/bl-desk.jpg";
import mobile from "@/assets/bl-mobile.jpg";
import tv from "@/assets/bl-tv.jpg";
import neighborhood from "@/assets/bl-neighborhood.jpg";
import hero from "@/assets/bl-hero.jpg";

export const Route = createFileRoute("/learning-center")({
  head: () => ({
    meta: [
      { title: "The Journal — Streaming, Wi‑Fi & Entertainment Explained | Internet in loop" },
      {
        name: "description",
        content:
          "Plain-English editorial guides to streaming services, live TV, Wi‑Fi performance, and home entertainment setups.",
      },
      { property: "og:title", content: "Internet in loop Journal" },
      {
        property: "og:description",
        content: "Editorial guides for smarter streaming and connected-home decisions.",
      },
      { property: "og:image", content: fiber },
    ],
    links: [{ rel: "canonical", href: "/learning-center" }],
  }),
  component: JournalPage,
});

const articles = [
  {
    topic: "Internet",
    read: "6 min",
    title: "Fiber vs cable: which one keeps your streams smoothest?",
    img: fiber,
    size: "lg",
  },
  {
    topic: "Wi‑Fi",
    read: "5 min",
    title: "Wi‑Fi 6 vs Wi‑Fi 7 in plain English for streamers.",
    img: desk,
    size: "md",
  },
  {
    topic: "Streaming",
    read: "8 min",
    title: "Cutting cable without losing the sports and live channels.",
    img: tv,
    size: "md",
  },
  {
    topic: "Wireless",
    read: "4 min",
    title: "How 5G home internet works for streaming households.",
    img: mobile,
    size: "md",
  },
  {
    topic: "Coverage",
    read: "7 min",
    title: "Reading coverage maps like a streaming setup expert.",
    img: neighborhood,
    size: "md",
  },
  {
    topic: "Households",
    read: "10 min",
    title: "The 2026 anatomy of a connected home entertainment setup.",
    img: hero,
    size: "lg",
  },
];

function JournalPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Journal"
        title="Read once. Build a better stream setup."
        subtitle="Short, plain-English editorial on how modern streaming, live TV, Wi‑Fi, and wireless actually work — so pricing pages stop feeling like a foreign language."
        bgImage={fiber}
      />

      <section className="pb-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid md:grid-cols-6 gap-6">
            {articles.map((a, i) => (
              <Link
                key={i}
                to="/learning-center"
                className={`group card-paper overflow-hidden ${a.size === "lg" ? "md:col-span-4" : "md:col-span-2"}`}
              >
                <div
                  className={`relative overflow-hidden rounded-t-[24px] ${a.size === "lg" ? "aspect-[16/9]" : "aspect-[4/3]"}`}
                >
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 chip bg-cream/90 !text-ink">{a.topic}</div>
                </div>
                <div className="p-7 flex items-start justify-between gap-6">
                  <div>
                    <div className="mono text-[10px] uppercase tracking-widest text-ink-muted">
                      {a.read} · read
                    </div>
                    <h3
                      className={`mt-3 font-display text-ink leading-tight ${a.size === "lg" ? "text-3xl" : "text-2xl"}`}
                    >
                      {a.title}
                    </h3>
                  </div>
                  <span className="h-10 w-10 rounded-full bg-secondary grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-cream transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Track selector */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow">Tracks</span>
              <h2 className="mt-4 font-display text-5xl text-ink leading-[1.02] tracking-[-0.025em]">
                Pick a track. <span className="italic text-primary">Skim in an hour.</span>
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, l: "Internet", to: "/internet-services", accent: "card-tomato" },
              { icon: Tv, l: "TV & Streaming", to: "/tv-streaming", accent: "card-mustard" },
              { icon: BookOpen, l: "Wireless", to: "/wireless", accent: "card-sage" },
              { icon: Wifi, l: "Home Wi-Fi", to: "/home-connectivity", accent: "card-paper" },
            ].map((c, i) => (
              <Link
                key={c.l}
                to={c.to}
                className={`${c.accent} p-8 group flex flex-col justify-between min-h-[220px]`}
              >
                <c.icon className="h-6 w-6" />
                <div>
                  <div className="mono text-[10px] tracking-widest uppercase opacity-70">
                    Track 0{i + 1}
                  </div>
                  <div className="mt-2 font-display text-3xl">{c.l}</div>
                  <div className="mt-6 inline-flex items-center gap-2 mono text-xs uppercase tracking-widest">
                    Open <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
