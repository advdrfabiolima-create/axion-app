import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E1E28] bg-[#121217]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
              <span className="text-xs text-[#8A8A93] tracking-wide">
                Plataforma de automação inteligente
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Sistemas inteligentes para negócios que exigem{" "}
              <span className="text-[#00C853]">precisão</span>
            </h1>

            <p className="text-lg text-[#8A8A93] leading-relaxed max-w-lg">
              A Axion cria plataformas modernas para automatizar processos,
              conectar dados e transformar operações complexas em experiências
              simples, rápidas e escaláveis.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C853] text-black font-semibold text-sm rounded hover:bg-[#00B84A] transition-colors duration-200"
              >
                Solicitar demonstração
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#1E1E28] text-[#8A8A93] font-medium text-sm rounded hover:border-[#2E2E38] hover:text-white transition-colors duration-200"
              >
                Conhecer soluções
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              {[
                { value: "99.9%", label: "Uptime garantido" },
                { value: "3x", label: "Mais eficiência" },
                { value: "< 48h", label: "Tempo de ativação" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-[#55555F]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard */}
          <div className="animate-fade-in-right delay-200">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
