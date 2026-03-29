const metrics = [
  { value: "50+", label: "Sistemas entregues", sub: "em produção" },
  { value: "R$ 2M+", label: "Em operações", sub: "automatizadas pelos nossos sistemas" },
  { value: "99.9%", label: "Uptime médio", sub: "nos últimos 12 meses" },
  { value: "< 48h", label: "Ativação", sub: "do sistema em produção" },
];

export default function MetricsSection() {
  return (
    <section className="relative py-14 px-6 border-y border-[#1E1E28] overflow-hidden">
      {/* Subtle glow center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 120% at 50% 50%, rgba(0,200,83,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.value}
              className={`px-6 py-4 text-center space-y-1.5 ${
                i < metrics.length - 1 ? "border-r border-[#1E1E28]" : ""
              } ${i >= 2 ? "border-t border-[#1E1E28] lg:border-t-0" : ""}`}
            >
              <p className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {m.value}
              </p>
              <p className="text-sm font-medium text-[#8A8A93]">{m.label}</p>
              <p className="text-xs text-[#55555F] leading-snug">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
