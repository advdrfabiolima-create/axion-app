const pains = [
  "Processos críticos dependem de planilhas e tarefas manuais",
  "Sistemas desconectados geram retrabalho e dados inconsistentes",
  "Falta de visibilidade sobre o que está acontecendo na operação",
  "Crescimento travado por gargalos que ninguém consegue resolver",
  "Equipes perdendo horas em tarefas que deveriam ser automáticas",
];

const gains = [
  "Fluxos automatizados com lógica de negócio embutida e rastreável",
  "Sistemas integrados que operam em sincronia, em tempo real",
  "Visibilidade total sobre cada etapa da operação",
  "Arquitetura preparada para crescer sem reescritas dolorosas",
  "Equipes focadas em decisões estratégicas, não em operações manuais",
];

export default function PainTransformation() {
  return (
    <section className="py-28 px-6 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#00C853] mb-5">
            O diagnóstico real
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-5">
            A operação que você tem<br className="hidden sm:block" />
            <span className="text-[#8A8A93]"> vs. a que você precisa</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            A maioria das empresas não tem um problema de tecnologia. Tem um problema de estrutura operacional. A Axion resolve isso.
          </p>
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Before */}
          <div className="rounded-2xl border border-[#2A1A1A] bg-[#110C0C] p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF4444]/10 border border-[#FF4444]/20 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v5M7 10v.5" stroke="#FF6666" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="7" cy="7" r="6" stroke="#FF6666" strokeWidth="1.2" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-[#FF6666] uppercase tracking-widest">Cenário atual</p>
                <p className="text-sm font-semibold text-white/80 mt-0.5">Operação fragmentada</p>
              </div>
            </div>

            <div className="h-px bg-[#2A1A1A]" />

            <ul className="space-y-4">
              {pains.map((pain) => (
                <li key={pain} className="flex items-start gap-3">
                  <div className="mt-[5px] w-4 h-4 rounded-full border border-[#FF4444]/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF4444]/60" />
                  </div>
                  <p className="text-base text-white/65 leading-relaxed">{pain}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-[#163324] bg-[#060E08] p-8 space-y-6 relative overflow-hidden">
            {/* Subtle green glow top-right */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(0,200,83,0.08) 0%, transparent 70%)" }}
            />

            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#00C853]/10 border border-[#00C853]/25 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-[#00C853] uppercase tracking-widest">Com a Axion</p>
                <p className="text-sm font-semibold text-white/80 mt-0.5">Operação estruturada</p>
              </div>
            </div>

            <div className="h-px bg-[#163324]" />

            <ul className="space-y-4">
              {gains.map((gain) => (
                <li key={gain} className="flex items-start gap-3">
                  <div className="mt-[5px] w-4 h-4 rounded-full border border-[#00C853]/35 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
                  </div>
                  <p className="text-base text-white/80 leading-relaxed">{gain}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Insight line */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#1E1E28] bg-[#121217]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
            <p className="text-sm text-[#8A8A98]">
              A transformação começa com um diagnóstico honesto da sua operação.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
