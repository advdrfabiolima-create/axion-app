const testimonials = [
  {
    quote:
      "A Axion entregou um sistema que transformou completamente a forma como distribuímos leads entre nossos corretores. O que levava horas agora acontece em segundos, com rastreabilidade total.",
    name: "Equipe ImobMatch",
    role: "Plataforma imobiliária",
    initial: "I",
  },
  {
    quote:
      "Precisávamos de uma plataforma robusta para gerenciar fluxos jurídicos complexos. A Axion entendeu o problema antes de falar em solução — e o resultado foi exatamente o que a operação precisava.",
    name: "Equipe LawTech Pro",
    role: "Gestão jurídica",
    initial: "L",
  },
  {
    quote:
      "O nível técnico e a clareza no processo foram o que nos convenceu. Não é uma agência, é um parceiro que pensa junto com você na arquitetura do negócio.",
    name: "Equipe Vexis",
    role: "Operações digitais",
    initial: "V",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Header */}
        <div className="max-w-xl space-y-4">
          <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
            Depoimentos
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
            O que dizem quem já opera com sistemas da Axion
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-glow relative bg-[#121217] border border-[#1E1E28] rounded-xl p-7 flex flex-col gap-6"
            >
              {/* Quote mark */}
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M0 24V14.4C0 10.56 1.04 7.28 3.12 4.56C5.28 1.84 8.4 0.16 12.48 0L13.44 2.16C10.72 2.8 8.72 4.08 7.44 6C6.24 7.84 5.68 9.84 5.76 12H11.04V24H0ZM18.56 24V14.4C18.56 10.56 19.6 7.28 21.68 4.56C23.84 1.84 26.96 0.16 31.04 0L32 2.16C29.28 2.8 27.28 4.08 26 6C24.8 7.84 24.24 9.84 24.32 12H29.6V24H18.56Z"
                  fill="#1E1E28"
                />
              </svg>

              <p className="text-sm text-[#8A8A93] leading-relaxed flex-1">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[#1E1E28]">
                <div className="w-9 h-9 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-[#00C853]">{t.initial}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[#55555F]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
