import Link from "next/link";

const cases = [
  {
    category: "Plataforma imobiliária",
    title: "Centralização e distribuição inteligente de leads",
    description:
      "Estruturação de um sistema para organizar e distribuir leads entre corretores com regras de negócio configuráveis e rastreabilidade total do processo.",
    outcome:
      "O que levava horas passou a acontecer em segundos, com visibilidade completa de cada etapa.",
    metric: { value: "–90%", label: "no tempo de distribuição" },
  },
  {
    category: "Gestão jurídica",
    title: "Plataforma para fluxos jurídicos complexos",
    description:
      "Desenvolvimento de sistema para centralizar processos legais, prazos e acompanhamento — eliminando a dependência de planilhas e processos manuais.",
    outcome:
      "Operação mais previsível, com controle total sobre cada processo e prazo crítico.",
    metric: { value: "100%", label: "dos processos rastreáveis" },
  },
  {
    category: "Operação digital",
    title: "Arquitetura de produto orientada ao negócio",
    description:
      "Parceria técnica para estruturar a arquitetura do sistema com lógica de negócio embutida, alinhada ao modelo operacional real — sem gambiarras ou adaptações forçadas.",
    outcome:
      "Produto com capacidade de escalar sem precisar refatorar a base estrutural.",
    metric: { value: "3x", label: "mais velocidade operacional" },
  },
];

const trustIndicators = [
  "Sistemas pensados para operações reais",
  "Estrutura orientada por processo",
  "Construção sob medida",
  "Evolução contínua em produção",
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 bg-[#0B0B0F] border-t border-[#13131A]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#00C853] mb-5">
            Prova social
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Sistemas aplicados a operações reais
          </h2>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            A Axion desenvolve soluções orientadas por contexto, processo e resultado — com foco em
            operações que exigem clareza, controle e escalabilidade.
          </p>
        </div>

        {/* Case cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group relative flex flex-col bg-[#0D0D12] border border-[#1C1C24] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00C853]/15 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              {/* Left accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00C853]/15 group-hover:bg-[#00C853]/45 transition-colors duration-300" />

              <div className="flex flex-col flex-1 p-8 pl-10 space-y-5">

                {/* Category */}
                <span className="inline-flex self-start text-[10px] font-medium tracking-[0.18em] uppercase text-[#3E3E50] border border-[#1E1E2C] rounded px-2.5 py-1">
                  {c.category}
                </span>

                {/* Title */}
                <h3 className="text-base font-semibold text-white leading-snug group-hover:text-white transition-colors duration-200">
                  {c.title}
                </h3>

                {/* Divider */}
                <div className="h-px w-full bg-[#16161E]" />

                {/* Description */}
                <p className="text-sm text-[#52525F] leading-relaxed flex-1 group-hover:text-[#606070] transition-colors duration-200">
                  {c.description}
                </p>

                {/* Outcome */}
                <div className="flex items-start gap-2.5 pt-1">
                  <div className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#00C853]/50 shrink-0 group-hover:bg-[#00C853] transition-colors duration-300" />
                  <p className="text-sm text-white/65 leading-relaxed group-hover:text-white/80 transition-colors duration-200">
                    {c.outcome}
                  </p>
                </div>

                {/* Metric */}
                <div className="pt-3 border-t border-[#16161E] flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white tracking-tight">
                    {c.metric.value}
                  </span>
                  <span className="text-xs text-[#3E3E50]">{c.metric.label}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-x-0 gap-y-3 mb-20">
          {trustIndicators.map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && (
                <div className="hidden sm:block w-px h-3 bg-[#1E1E28] mx-6" />
              )}
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#00C853]/40" />
                <span className="text-xs text-[#3A3A48] tracking-wide">{item}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-[#13131A]">
          <p className="text-white/55 text-base leading-relaxed max-w-md">
            Vamos estruturar a operação certa para o seu negócio.
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
