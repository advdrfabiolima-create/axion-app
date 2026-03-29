interface InternalHeroProps {
  eyebrow?: string;
  title: string;
  titleMuted?: string;
  subtitle?: string;
}

export default function InternalHero({
  eyebrow,
  title,
  titleMuted,
  subtitle,
}: InternalHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 dot-grid overflow-hidden">

      {/* Radial glow — same treatment as home hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 20% 60%, rgba(0,200,83,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="h-px w-12 bg-[#1E1E28]" />

          {eyebrow && (
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-[#1E1E28] bg-[#121217]/80 backdrop-blur-sm">
              <span className="relative flex w-2 h-2">
                <span className="animate-badge-pulse absolute inline-flex w-full h-full rounded-full bg-[#00C853] opacity-60" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00C853]" />
              </span>
              <span className="text-xs text-[#8A8A93] tracking-wide">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
            <span className="text-white">{title}</span>
            {titleMuted && (
              <span className="text-gradient"> {titleMuted}</span>
            )}
          </h1>

          {subtitle && (
            <p className="text-lg text-[#8A8A93] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
        style={{
          background: "linear-gradient(to bottom, transparent, #0B0B0F)",
        }}
      />
    </section>
  );
}
