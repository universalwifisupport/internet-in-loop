import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Search, ArrowUpRight, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import advisor from "@/assets/bl-advisor.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Internet in loop — ZIP Availability Check & Guide Line" },
      {
        name: "description",
        content:
          "Reach a Internet in loop editor, run a ZIP-level availability check, or send a message. We answer in under four minutes.",
      },
      { property: "og:title", content: "Contact Internet in loop" },
      {
        property: "og:description",
        content: "ZIP check, phone line and email — reach a human editor fast.",
      },
      { property: "og:image", content: advisor },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Talk to a person. Not a portal."
        subtitle="Get a ZIP-level scan, or pick up the phone. Either way, you'll be talking to someone who knows the plans in your area."
        bgImage={advisor}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* ZIP form */}
            <div className="lg:col-span-7 card-paper p-8 sm:p-12">
              <span className="eyebrow">01 · ZIP scan</span>
              <h2 className="mt-4 font-display text-4xl text-ink leading-tight tracking-[-0.02em]">
                Which technologies reach <span className="italic text-primary">your address?</span>
              </h2>
              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mono text-[10px] tracking-widest uppercase text-ink-muted">
                    ZIP code
                  </label>
                  <input
                    placeholder="e.g. 30301"
                    className="mt-2 w-full bg-secondary rounded-2xl px-5 py-4 mono text-ink text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="mono text-[10px] tracking-widest uppercase text-ink-muted">
                      Name
                    </label>
                    <input
                      placeholder="Full name"
                      className="mt-2 w-full bg-secondary rounded-2xl px-5 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mono text-[10px] tracking-widest uppercase text-ink-muted">
                      Phone
                    </label>
                    <input
                      placeholder="(555) 123-4567"
                      className="mt-2 w-full bg-secondary rounded-2xl px-5 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="mono text-[10px] tracking-widest uppercase text-ink-muted">
                    Interested in
                  </label>
                  <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Internet", "TV", "Wireless", "Bundle"].map((t) => (
                      <label
                        key={t}
                        className="cursor-pointer rounded-full border border-border px-4 py-3 text-center text-sm font-medium hover:bg-primary hover:text-cream hover:border-primary transition"
                      >
                        <input type="checkbox" className="sr-only" /> {t}
                      </label>
                    ))}
                  </div>
                </div>
                <button className="btn-accent w-full justify-between !py-4">
                  <span className="flex items-center gap-2">
                    <Search className="h-4 w-4" /> Run availability scan
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="mono text-[10px] tracking-widest uppercase text-ink-muted">
                  Free · No obligation · We never sell your info
                </p>
              </form>
            </div>

            {/* Contact channels */}
            <div className="lg:col-span-5 flex flex-col gap-4">
                      <a href="tel:+18888824649" className="card-tomato p-8 group">
                <div className="flex items-center justify-between">
                  <span className="chip !bg-cream/15 !text-cream">Phone</span>
                  <Phone className="h-5 w-5" />
                </div>
                <div className="mt-6 font-display text-3xl mono">(888) 882-4649</div>
                <div className="mt-2 text-sm opacity-90">Mon–Sat · 8 AM – 9 PM ET</div>
                <div className="mt-4 inline-flex items-center gap-1 mono text-xs uppercase tracking-widest">
                  Call now <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>
              <a href="mailto:hello@internetinloop.com" className="card-paper p-8 group">
                <div className="flex items-center justify-between">
                  <span className="chip">Email</span>
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-6 font-display text-2xl sm:text-3xl text-ink break-all">
                  hello@internetinloop.com
                </div>
                <div className="mt-2 text-sm text-ink-muted">Reply within one business day</div>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <div className="card-mustard p-6">
                  <MapPin className="h-5 w-5" />
                  <div className="mt-4 mono text-[10px] tracking-widest uppercase opacity-80">
                    Coverage
                  </div>
                  <div className="mt-1 font-display text-xl">All 50 states</div>
                </div>
                <div className="card-sage p-6">
                  <Clock className="h-5 w-5" />
                  <div className="mt-4 mono text-[10px] tracking-widest uppercase opacity-80">
                    Avg response
                  </div>
                  <div className="mt-1 font-display text-xl">Under 4 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
