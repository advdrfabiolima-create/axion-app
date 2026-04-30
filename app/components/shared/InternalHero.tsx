import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import InternalHeroBackground from "./InternalHeroBackground";

interface InternalHeroProps {
  eyebrow?: string;
  title: ReactNode;
  titleMuted?: string;
  subtitle?: string;
  backgroundImage?: StaticImageData;
}

export default function InternalHero({
  eyebrow,
  title,
  titleMuted,
  subtitle,
  backgroundImage,
}: InternalHeroProps) {
  return (
    <section className="relative pt-36 pb-24 px-6 dot-grid overflow-hidden">
      {backgroundImage && (
        <InternalHeroBackground imageUrl={backgroundImage.src} />
      )}
      {backgroundImage && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#05080D_0%,#05080D_45%,rgba(5,8,13,0.9)_55%,rgba(5,8,13,0.65)_75%,rgba(5,8,13,0.35)_100%)]"
        />
      )}
      {backgroundImage && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_42%,rgba(0,200,83,0.11)_0%,transparent_34%)]"
        />
      )}

      {/* Green ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 15% 60%, rgba(0,200,83,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 85% 30%, rgba(0,200,83,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-7">
          <div className="h-px w-12 bg-[#1E1E28]" />

          {eyebrow && (
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1E1E2C] bg-[#121217]/85 backdrop-blur-sm">
              <span className="relative flex w-2 h-2">
                <span className="animate-badge-pulse absolute inline-flex w-full h-full rounded-full bg-[#00C853] opacity-60" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00C853]" />
              </span>
              <span className="text-sm text-[#9A9AA8] tracking-wide">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="text-[2.6rem] lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.06] tracking-tight">
            <span className="text-white">{title}</span>
            {titleMuted && (
              <span className="text-gradient"> {titleMuted}</span>
            )}
          </h1>

          {subtitle && (
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20"
        style={{ background: "linear-gradient(to bottom, transparent, #0B0B0F)" }}
      />
    </section>
  );
}
