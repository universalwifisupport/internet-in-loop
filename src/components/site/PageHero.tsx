import { Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  bgImage?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[0.98] tracking-[-0.025em]">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-6 max-w-xl text-lg text-ink-muted leading-relaxed">{subtitle}</p>
              )}
              <a
                href="tel:+18886202103"
                className="mt-6 inline-flex items-center gap-2 mono text-sm font-medium text-ink hover:text-primary transition"
              >
                <Phone className="h-4 w-4 text-primary" /> (888) 620-2103
              </a>
            </Reveal>
          </div>
          {bgImage && (
            <div className="lg:col-span-5">
              <Reveal delay={140}>
                <div className="relative aspect-[5/4] rounded-[36px] overflow-hidden shadow-elegant">
                  <img
                    src={bgImage}
                    alt=""
                    loading="lazy"
                    width={1000}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 chip">Internet in loop</div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
