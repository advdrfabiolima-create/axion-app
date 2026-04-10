import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Diagnóstico da operação",
    description:
      "Mapeamos processos, gargalos e oportunidades com foco em resultado operacional real.",
  },
  {
    number: "02",
    title: "Arquitetura do sistema",
    description:
      "Definimos a estrutura, regras e fluxos que sustentam e escalam a operação.",
  },
  {
    number: "03",
    title: "Desenvolvimento e validação",
    description:
      "Construímos com ciclos curtos, validação contínua e entrega funcional desde o início.",
  },
  {
    number: "04",
    title: "Implantação e evolução",
    description:
      "Colocamos em produção e evoluímos o sistema conforme o uso e a operação real.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-28 px-6 border-t border-[#163324] overflow-hidden"
      style={{ background: "#060E08" }}
    >
      {/* Honeycomb pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hex-grid" />
      {/* Dark fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(6,14,8,0.96) 0%, rgba(6,14,8,0.6) 60%, transparent 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-24">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#00C853] mb-5">
            Como funciona
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
            Da análise à operação,{" "}
            <br className="hidden sm:block" />
            com método e clareza
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Cada sistema é desenvolvido com base na realidade da operação — etapas bem definidas,
            validação contínua e foco em entrega funcional, não em complexidade.
          </p>
        </div>

        {/* Steps — desktop: horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-4">

            {/* Connector line */}
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] h-px pointer-events-none"
              style={{
                top: "46px",
                background:
                  "linear-gradient(to right, rgba(0,200,83,0.3) 0%, rgba(0,200,83,0.15) 55%, rgba(30,30,42,0.5) 100%)",
              }}
            />

            {steps.map((step) => (
              <div
                key={step.number}
                className="group flex flex-col items-center text-center px-8"
              >
                {/* Number */}
                <div className="h-7 flex items-center justify-center mb-3">
                  <span className="text-xs font-mono tracking-[0.3em] text-[#28283A] group-hover:text-[#00C853]/50 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative z-10 w-3 h-3 rounded-full bg-[#060E08] border border-[#28283A] flex items-center justify-center group-hover:border-[#00C853]/55 transition-all duration-300">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#32323F] group-hover:bg-[#00C853] transition-all duration-300" />
                  <div
                    aria-hidden="true"
                    className="absolute inset-[-3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: "0 0 10px rgba(0,200,83,0.3)" }}
                  />
                </div>

                {/* Text */}
                <div className="mt-9 space-y-3">
                  <h3 className="text-base font-semibold text-white leading-snug group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-base text-[#7A7A88] leading-relaxed group-hover:text-[#8A8A98] transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps — mobile/tablet: vertical */}
        <div className="lg:hidden">
          {steps.map((step, i) => (
            <div key={step.number} className="group relative flex gap-5">

              {/* Left track */}
              <div className="flex flex-col items-center">
                <div className="relative z-10 w-9 h-9 rounded-full border border-[#1E1E28] bg-[#0D0D12] flex items-center justify-center shrink-0 group-hover:border-[#00C853]/30 transition-colors duration-300">
                  <span className="text-xs font-mono text-[#30303D] group-hover:text-[#00C853]/60 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(30,30,40,0.8), transparent)",
                      minHeight: "40px",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pt-1.5 pb-10 space-y-2.5">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-base text-[#7A7A88] leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <p className="mt-16 text-sm text-[#5A5A68] text-center tracking-wide max-w-md mx-auto">
          Processo estruturado, com foco em entrega real — não em complexidade.
        </p>

      </div>
    </section>
  );
}
