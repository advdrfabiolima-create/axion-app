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
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="h-px w-12 bg-[#1E1E28]" />
          {eyebrow && (
            <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            {title}
            {titleMuted && (
              <span className="text-[#8A8A93]"> {titleMuted}</span>
            )}
          </h1>
          {subtitle && (
            <p className="text-lg text-[#8A8A93] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
