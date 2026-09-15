import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/internetinloop-logo.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/internet-services", label: "Internet" },
  { to: "/tv-streaming", label: "TV & Streaming" },
  { to: "/wireless", label: "Wireless" },
  { to: "/home-connectivity", label: "Home Wi-Fi" },
  { to: "/learning-center", label: "Journal" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-cream/85" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-4">
        <div
          className={`flex items-center justify-between gap-4 rounded-full pl-5 pr-2 py-2 border transition-all ${
            scrolled ? "border-border bg-cream shadow-soft" : "border-transparent bg-cream/70"
          }`}
        >
          <Link to="/" aria-label="Internet in loop — Home" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Internet in loop"
              width={200}
              height={60}
              className="h-9 w-auto object-contain"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="px-3.5 py-2 text-[13px] font-medium text-ink-muted hover:text-ink transition rounded-full"
                activeProps={{
                  className:
                    "px-3.5 py-2 text-[13px] font-medium text-ink bg-secondary rounded-full",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:+18888824649"
              className="hidden lg:inline-flex items-center gap-2 text-sm text-ink font-medium mono"
            >
              <Phone className="h-3.5 w-3.5 text-primary" /> (888) 882-4649
            </a>
            <Link to="/contact" className="btn-accent !py-2.5 !px-5 text-[13px]">
              Check my area <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden md:hidden p-2.5 rounded-full border border-border bg-surface text-ink"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden mx-auto max-w-[1400px] px-4 sm:px-6 mt-2">
          <div className="rounded-3xl border border-border bg-surface p-4 shadow-elegant">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-ink border-b border-border/60 last:border-b-0"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-accent mt-4">
                Check my area
              </Link>
              <a
                href="tel:+18888824649"
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-full border border-border text-sm font-medium text-ink mono"
              >
                <Phone className="h-3.5 w-3.5 text-primary" /> (888) 882-4649
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
