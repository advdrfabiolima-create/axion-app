import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-32 px-6 overflow-hidden">

      {/* Background image — abstract green tech network */}
      <Image
        src="/hero.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />

      {/* Base dark overlay — reduces overall image intensity */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#0B0B0F]/50"
      />

      {/* Left-side gradient — ensures perfect text readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,11,15,1) 45%, rgba(11,11,15,0.85) 60%, rgba(11,11,15,0.6) 70%, rgba(11,11,15,0) 85%)",
        }}
      />

      {/* Subtle green ambient glow — left side, low intensity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 18% 55%, rgba(0,200,83,0.045) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Content */}
          <div className="space-y-10 animate-fade-in-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-[#1E1E28] bg-[#121217]/80 backdrop-blur-sm">
              <span className="relative flex w-2 h-2">
                <span className="animate-badge-pulse absolute inline-flex w-full h-full rounded-full bg-[#00C853] opacity-60" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00C853]" />
              </span>
              <span className="text-xs text-[#8A8A93] tracking-wide">
                Plataforma de automação inteligente
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight">
              <span className="text-white">Sistemas inteligentes para operações que{" "}</span>
              <span className="text-gradient">não podem falhar</span>
            </h1>

            {/* Paragraph */}
            <p className="text-lg text-white/70 leading-relaxed max-w-[520px]">
              Transformamos operações complexas em sistemas automatizados, previsíveis e escaláveis.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C853] text-black font-semibold text-sm rounded hover:bg-[#00B84A] transition-all duration-200 shadow-[0_0_20px_rgba(0,200,83,0.25)] hover:shadow-[0_0_36px_rgba(0,200,83,0.45)]"
              >
                Solicitar demonstração
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#2E2E38] text-[#8A8A93] font-medium text-sm rounded hover:border-[#3E3E48] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              >
                Ver como funciona
              </Link>
            </div>

            <p className="text-xs text-[#3A3A46]">
              Sem ferramentas genéricas. Sem improviso. Apenas sistemas pensados para a sua operação.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 border-t border-[#18181F]">
              {[
                { value: "99.9%", label: "Uptime garantido" },
                { value: "3x", label: "Mais eficiência" },
                { value: "< 48h", label: "Ativação em produção" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4 pt-2">
                  {i > 0 && <div className="w-px h-8 bg-[#1E1E28]" />}
                  <div className="space-y-0.5">
                    <p className="text-xl font-bold text-white tracking-tight">{stat.value}</p>
                    <p className="text-xs text-[#55555F]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28"
        style={{
          background: "linear-gradient(to bottom, transparent, #0B0B0F)",
        }}
      />
    </section>
  );
}
