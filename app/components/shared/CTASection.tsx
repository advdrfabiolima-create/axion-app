import Link from "next/link";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  microcopy?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  microcopy,
}: CTASectionProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0D0D12] border border-[#1E1E2C] rounded-2xl px-10 py-16 lg:px-16 text-center space-y-6 overflow-hidden">

          {/* Top glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,200,83,0.065) 0%, transparent 70%)",
            }}
          />

          {/* Ornament */}
          <div className="relative flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-10 bg-[#1E1E28]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]/60" />
            <div className="h-px w-10 bg-[#1E1E28]" />
          </div>

          <h2 className="relative text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight max-w-2xl mx-auto">
            {title}
          </h2>

          {subtitle && (
            <p className="relative text-lg text-white/65 leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="relative flex flex-wrap gap-3 justify-center pt-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C853] text-black font-semibold text-[15px] rounded hover:bg-[#00B84A] transition-all duration-200 shadow-[0_0_24px_rgba(0,200,83,0.25)] hover:shadow-[0_0_44px_rgba(0,200,83,0.45)]"
            >
              {primaryLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#2A2A38] text-white/75 font-medium text-[15px] rounded hover:border-[#3A3A48] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>

          {microcopy && (
            <p className="relative text-sm text-[#4A4A58] pt-1">{microcopy}</p>
          )}
        </div>
      </div>
    </section>
  );
}
