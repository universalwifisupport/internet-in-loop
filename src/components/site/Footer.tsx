import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/internetinloop-logo-white.svg";

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream mt-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 pt-24 pb-10">
        {/* Big word */}
        <div className="border-b border-cream/15 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="mono text-[11px] tracking-[0.32em] uppercase text-cream/50">
                // Internet in loop / Field Guide
              </div>
              <h2 className="mt-6 font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-[-0.03em]">
                Better connection <span className="italic text-signal">stories,</span> start with
                better questions.
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
                href="tel:+18886202103"
                className="inline-flex items-center justify-between px-6 py-4 rounded-full border border-cream/25 text-sm font-medium hover:bg-cream hover:text-ink transition"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> (888) 620-2103
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Internet in loop — Home" className="inline-block">
              <img
                src={logo}
                alt="Internet in loop"
                loading="lazy"
                width={220}
                height={70}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm text-cream/70 leading-relaxed">
              Internet in loop is an editorial comparison desk for home internet, TV, streaming and mobile
              — written for households, not sales floors.
            </p>
            <div className="mt-8 space-y-2 text-sm text-cream/70">
              <a
                href="tel:+18886202103"
                className="flex items-center gap-3 hover:text-signal transition"
              >
                <Phone className="h-4 w-4 text-signal" /> (888) 620-2103
              </a>
              <a
                href="mailto:hello@internetinloop.com"
                className="flex items-center gap-3 hover:text-signal transition"
              >
                <Mail className="h-4 w-4 text-signal" /> hello@internetinloop.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-signal" /> Remote · United States
              </div>
            </div>
          </div>

          <FooterCol
            title="Compare"
            items={[
              ["/internet-services", "Internet"],
              ["/tv-streaming", "TV & Streaming"],
              ["/wireless", "Wireless"],
              ["/home-connectivity", "Home Wi-Fi"],
            ]}
          />
          <FooterCol
            title="Editorial"
            items={[
              ["/learning-center", "Journal"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ]}
          />
          <FooterCol
            title="Fine print"
            items={[
              ["/privacy", "Privacy"],
              ["/terms", "Terms"],
              ["/refund-policy", "Refund"],
              ["/disclaimer", "Disclaimer"],
            ]}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 grid md:grid-cols-2 gap-6 items-start">
          <p className="text-xs text-cream/50 leading-relaxed max-w-2xl">
            Internet in loop is an independent editorial comparison platform, not an internet, cable,
            satellite, streaming or wireless provider. Brand names and trademarks belong to their
            respective owners. Availability, plan features and pricing change by address.
          </p>
          <p className="text-xs text-cream/50 md:text-right">
            © {new Date().getFullYear()} Internet in loop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="lg:col-span-2">
      <div className="text-xs font-medium tracking-widest uppercase text-signal mb-5">{title}</div>
      <ul className="space-y-3 text-sm">
        {items.map(([to, label]) => (
          <li key={to}>
            <Link to={to} className="text-cream/70 hover:text-cream transition">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
