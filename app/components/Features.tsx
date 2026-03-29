import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="#00C853" strokeWidth="1.5" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="#00C853" strokeWidth="1.5" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="#00C853" strokeWidth="1.5" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="#8A8A93" strokeWidth="1.5" />
      </svg>
    ),
    title: "Plataformas sob medida",
    description:
      "Sistemas concebidos para o contexto real do negócio. Nenhuma adaptação forçada, nenhuma funcionalidade desnecessária.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="12" rx="2" stroke="#00C853" strokeWidth="1.5" />
        <path d="M7 17h6M10 15v2" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 9l2.5 2.5L13 7" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Dashboards e painéis",
    description:
      "Visualizações que transformam dados operacionais em inteligência acionável. Sem ruído, sem ambiguidade.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="4" cy="10" r="2" stroke="#00C853" strokeWidth="1.5" />
        <circle cx="16" cy="4" r="2" stroke="#00C853" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" stroke="#00C853" strokeWidth="1.5" />
        <path d="M6 10h5M13 5.5L11 9M13 14.5L11 11" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Automação de processos",
    description:
      "Fluxos automatizados que eliminam trabalho repetitivo, reduzem erros e garantem consistência em escala.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 10l-3-3M10 10l3-3" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="1.5" fill="#00C853" />
      </svg>
    ),
    title: "Sistemas de matching",
    description:
      "Algoritmos de correspondência que conectam entidades, recursos e oportunidades com lógica precisa.",
  },
];

export default function Features() {
  return (
    <section id="solucoes" className="py-24 px-6 bg-[#121217]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs text-[#55555F] uppercase tracking-widest mb-2 font-medium">
            O que construímos na prática
          </p>
          <p className="text-xs text-[#00C853] uppercase tracking-widest mb-4 font-medium">
            Soluções
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
            Capacidades construídas para operar em produção
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E1E28]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#121217] p-7 space-y-4 hover:bg-[#0F0F14] transition-colors duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg border border-[#1E1E28] bg-[#0B0B0F] flex items-center justify-center group-hover:border-[#00C853]/20 transition-colors duration-200">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-[#8A8A93] leading-relaxed">
                {feature.description}
              </p>
              <div className="flex items-center gap-1 text-[#00C853] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link href="/solucoes" className="flex items-center gap-1">
                  Saiba mais
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
