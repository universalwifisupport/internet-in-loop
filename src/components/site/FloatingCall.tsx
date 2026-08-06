import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+18886202103"
      aria-label="Call now"
      className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-3 bg-ink text-cream px-5 py-4 rounded-full shadow-elegant hover:bg-primary transition-colors"
    >
      <span className="relative grid place-items-center h-5 w-5">
        <span className="absolute inset-0 rounded-full bg-primary/60 animate-ping" />
        <Phone className="relative h-4 w-4" />
      </span>
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="mono text-[10px] tracking-widest uppercase text-cream/70">
          Call a guide
        </span>
        <span className="font-medium text-sm mono">(888) 620-2103</span>
      </span>
    </a>
  );
}
