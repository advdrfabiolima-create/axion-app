import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 px-6 overflow-hidden">

      {/* Background image */}
      <Image
        src="/hero.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />

      {/* Dark overlay so o texto fica legível */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#0B0B0F]/70"
      />

      {/* Radial glow — green, behind headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(0,200,83,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-8 animate-fade-in-left">

            {/* Animated badge */}
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

            <p className="text-lg text-[#8A8A93] leading-relaxed max-w-lg">
              A Axion projeta e constrói sistemas que automatizam processos,
              conectam dados e estruturam operações reais — com clareza,
              performance e lógica de produto.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C853] text-black font-semibold text-sm rounded hover:bg-[#00B84A] transition-colors duration-200 shadow-[0_0_20px_rgba(0,200,83,0.25)]"
              >
                Solicitar demonstração
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#1E1E28] text-[#8A8A93] font-medium text-sm rounded hover:border-[#2E2E38] hover:text-white transition-colors duration-200"
              >
                Falar com a equipe
              </Link>
            </div>

            <p className="text-xs text-[#55555F]">
              Sem ferramentas genéricas. Sem improviso. Apenas sistemas pensados para a sua operação.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
              {[
                { value: "99.9%", label: "Uptime garantido" },
                { value: "3x", label: "Mais eficiência" },
                { value: "< 48h", label: "Ativação em produção" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4">
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
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, #0B0B0F)",
        }}
      />
    </section>
  );
}
