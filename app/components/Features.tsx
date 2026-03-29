import Link from "next/link";

const solutions = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1" y="6.5" width="5" height="7" rx="1.5" stroke="#00C853" strokeWidth="1.35" />
        <rect x="7.5" y="6.5" width="5" height="7" rx="1.5" stroke="#00C853" strokeWidth="1.35" />
        <rect x="14" y="6.5" width="5" height="7" rx="1.5" stroke="#8A8A93" strokeWidth="1.35" />
        <path d="M6.2 10h1.3M12.2 10h1.8" stroke="#00C853" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    ),
    title: "Automação de Processos",
    description:
      "Fluxos mais rápidos, menos retrabalho e operações com lógica automatizada.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="3.5" cy="6.5" r="1.5" stroke="#00C853" strokeWidth="1.35" />
        <circle cx="3.5" cy="13.5" r="1.5" stroke="#00C853" strokeWidth="1.35" />
        <circle cx="16.5" cy="6.5" r="1.5" stroke="#8A8A93" strokeWidth="1.35" />
        <circle cx="16.5" cy="13.5" r="1.5" stroke="#8A8A93" strokeWidth="1.35" />
        <circle cx="10" cy="10" r="2" stroke="#00C853" strokeWidth="1.35" />
        <path
          d="M5 7.2L8.2 9.3M5 12.8L8.2 10.7M15 7.2L11.8 9.3M15 12.8L11.8 10.7"
          stroke="#00C853"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    title: "Matching Inteligente",
    description:
      "Conexões orientadas por critérios, regras e contexto de negócio.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="4.5" rx="1.5" stroke="#00C853" strokeWidth="1.35" />
        <rect x="2" y="9.5" width="16" height="4.5" rx="1.5" stroke="#00C853" strokeWidth="1.35" />
        <rect x="2" y="15.5" width="9" height="2.5" rx="1.5" stroke="#8A8A93" strokeWidth="1.35" />
      </svg>
    ),
    title: "Plataformas Operacionais",
    description:
      "Sistemas estruturados para acompanhar, organizar e executar rotinas críticas.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 5h3.5" stroke="#00C853" strokeWidth="1.35" strokeLinecap="round" />
        <path d="M2 10h3.5" stroke="#00C853" strokeWidth="1.35" strokeLinecap="round" />
        <path d="M2 15h3.5" stroke="#8A8A93" strokeWidth="1.35" strokeLinecap="round" />
        <path
          d="M5.5 5C8.5 5 8.5 10 11.5 10M5.5 15C8.5 15 8.5 10 11.5 10"
          stroke="#00C853"
          strokeWidth="1.35"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M11.5 10H18" stroke="#00C853" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    ),
    title: "Integração de Dados",
    description:
      "Fontes dispersas transformadas em uma operação conectada e confiável.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 15.5V10" stroke="#8A8A93" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 15.5V7" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 15.5V10.5" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.5 15.5V4.5" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M3 10l4.5-3 4.5 3.5 4.5-6"
          stroke="#00C853"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
        />
      </svg>
    ),
    title: "Gestão e Monitoramento",
    description:
      "Visibilidade operacional com controle, acompanhamento e tomada de decisão.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1.5" y="1.5" width="17" height="17" rx="3" stroke="#1E1E28" strokeWidth="1.3" />
        <rect x="4" y="4" width="5.5" height="5.5" rx="1.5" stroke="#00C853" strokeWidth="1.35" />
        <rect x="10.5" y="4" width="5.5" height="5.5" rx="1.5" stroke="#00C853" strokeWidth="1.35" />
        <rect x="4" y="10.5" width="5.5" height="5.5" rx="1.5" stroke="#8A8A93" strokeWidth="1.35" />
        <rect
          x="10.5"
          y="10.5"
          width="5.5"
          height="5.5"
          rx="1.5"
          stroke="#8A8A93"
          strokeWidth="1.35"
          strokeDasharray="2 1.5"
        />
      </svg>
    ),
    title: "Sistemas Sob Medida",
    description:
      "Produtos construídos em torno da realidade, da operação e da escala do cliente.",
  },
];

export default function Features() {
  return (
    <section id="solucoes" className="py-32 px-6 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#00C853] mb-5">
            Soluções
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Sistemas projetados para operações reais
          </h2>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Da automação de fluxos à estruturação de plataformas sob medida, a Axion desenvolve
            sistemas que organizam, conectam e aceleram operações com lógica de produto e visão de escala.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#16161E] rounded-2xl overflow-hidden border border-[#16161E]">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative bg-[#0B0B0F] p-8 transition-all duration-300 hover:bg-[#0E0E13]"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(0,200,83,0.03) 0%, transparent 60%)",
              }}
            >
              {/* Hover border glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(0,200,83,0.12)",
                }}
              />

              <div className="space-y-5">
                {/* Icon */}
                <div className="w-9 h-9 rounded-lg border border-[#1E1E28] bg-[#0F0F15] flex items-center justify-center group-hover:border-[#00C853]/20 transition-colors duration-300">
                  {solution.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white group-hover:text-white/95 leading-snug">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B6B78] leading-relaxed group-hover:text-[#7E7E8A] transition-colors duration-300">
                  {solution.description}
                </p>

                {/* Hover link */}
                <div className="flex items-center gap-1.5 text-[#00C853] text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <Link href="/solucoes" className="flex items-center gap-1.5">
                    Saiba mais
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8M7 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-[#16161E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-white/60 text-base max-w-md leading-relaxed">
            Precisa de uma solução pensada para a sua operação?
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C853] text-black font-semibold text-sm rounded hover:bg-[#00B84A] transition-all duration-200 shadow-[0_0_20px_rgba(0,200,83,0.2)] hover:shadow-[0_0_32px_rgba(0,200,83,0.38)] shrink-0"
          >
            Solicitar demonstração
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
