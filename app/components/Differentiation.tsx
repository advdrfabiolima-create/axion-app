import Link from "next/link";

const points = [
  {
    number: "01",
    title: "Menos ruído operacional",
    description:
      "Interfaces e processos despidos do que é supérfluo. Cada elemento existe porque precisa existir — sem complexidade desnecessária.",
  },
  {
    number: "02",
    title: "Mais inteligência no fluxo",
    description:
      "Sistemas que organizam fluxos, conectam dados e reduzem fricção operacional. A lógica de negócio embutida no sistema, não na cabeça das pessoas.",
  },
  {
    number: "03",
    title: "Percepção de valor imediata",
    description:
      "O usuário final percebe a diferença nos primeiros minutos de uso. Não é marketing — é experiência real com resultado visível.",
  },
  {
    number: "04",
    title: "Estrutura que sustenta escala",
    description:
      "Arquitetura sólida que sustenta crescimento sem gerar débito técnico ou exigir reescritas desnecessárias no futuro.",
  },
];

export default function Differentiation() {
  return (
    <section className="py-28 px-6 bg-[#121217]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — sticky title */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
              Diferenciais
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
              Por que empresas exigentes escolhem a Axion
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A diferença não está só no que construímos, mas em como pensamos antes da primeira linha de código ser escrita.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2A38] text-[15px] text-white/75 rounded hover:border-[#00C853]/35 hover:text-white hover:bg-[#00C853]/[0.04] transition-all duration-200"
            >
              Falar com especialista
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Right — list */}
          <div className="space-y-3">
            {points.map((point) => (
              <div
                key={point.number}
                className="card-glow group flex gap-6 p-7 bg-[#0E0E14] hover:bg-[#0C0C12] border border-[#1E1E28] rounded-xl transition-colors duration-200"
              >
                <span className="text-sm font-mono text-[#2E2E40] group-hover:text-[#00C853] transition-colors duration-200 shrink-0 pt-0.5">
                  {point.number}
                </span>
                <div className="space-y-2.5">
                  <h3 className="text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-base text-[#8A8A98] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
