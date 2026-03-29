import Link from "next/link";

const points = [
  {
    number: "01",
    title: "Menos ruído",
    description:
      "Interfaces e processos despidos do que é supérfluo. Cada elemento existe porque precisa existir.",
  },
  {
    number: "02",
    title: "Mais inteligência",
    description:
      "Sistemas que organizam fluxos, conectam dados e reduzem fricção operacional.",
  },
  {
    number: "03",
    title: "Mais percepção de valor",
    description:
      "O usuário final percebe a diferença nos primeiros minutos. Não é marketing — é experiência.",
  },
  {
    number: "04",
    title: "Mais estrutura",
    description:
      "Arquitetura sólida que sustenta crescimento sem gerar débito técnico ou reescritas desnecessárias.",
  },
];

export default function Differentiation() {
  return (
    <section className="py-24 px-6 bg-[#121217]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky title */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
              Diferenciais
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
              Por que empresas exigentes escolhem a Axion
            </h2>
            <p className="text-[#8A8A93] leading-relaxed">
              A diferença não está só no que construímos, mas em como pensamos antes da primeira linha de código.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1E1E28] text-sm text-[#8A8A93] rounded hover:border-[#00C853]/30 hover:text-white transition-colors duration-200"
            >
              Conversar com a equipe
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
                className="card-glow group flex gap-6 p-6 bg-[#121217] hover:bg-[#0F0F14] border border-[#1E1E28] rounded-xl transition-colors duration-200"
              >
                <span className="text-xs font-mono text-[#2E2E38] group-hover:text-[#00C853] transition-colors duration-200 shrink-0 pt-0.5">
                  {point.number}
                </span>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#8A8A93] leading-relaxed">
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
