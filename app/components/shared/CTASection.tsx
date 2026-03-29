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
        <div className="bg-[#121217] border border-[#1E1E28] rounded-xl p-12 lg:p-16 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#8A8A93] leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00C853] text-black font-semibold text-sm rounded hover:bg-[#00B84A] transition-colors duration-200"
            >
              {primaryLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1E1E28] text-[#8A8A93] font-medium text-sm rounded hover:border-[#2E2E38] hover:text-white transition-colors duration-200"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
          {microcopy && (
            <p className="text-xs text-[#55555F] pt-2">{microcopy}</p>
          )}
        </div>
      </div>
    </section>
  );
}
