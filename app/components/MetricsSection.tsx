const metrics = [
  { value: "50+", label: "Sistemas entregues", sub: "em produção real" },
  { value: "R$ 2M+", label: "Em operações", sub: "automatizadas pelos nossos sistemas" },
  { value: "99.9%", label: "Uptime médio", sub: "nos últimos 12 meses" },
  { value: "< 48h", label: "Ativação", sub: "do sistema em produção" },
];

export default function MetricsSection() {
  return (
    <section
      className="relative py-16 px-6 border-y border-[#163324] overflow-hidden"
      style={{ background: "#060E08" }}
    >
      {/* Subtle green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 140% at 50% 50%, rgba(0,200,83,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.value}
              className={`px-8 py-6 text-center space-y-2 ${
                i < metrics.length - 1 ? "border-r border-[#163324]" : ""
              } ${i >= 2 ? "border-t border-[#163324] lg:border-t-0" : ""}`}
            >
              <p className="text-[2.2rem] lg:text-[2.5rem] font-bold text-[#00C853] tracking-tight leading-none">
                {m.value}
              </p>
              <p className="text-base font-semibold text-white/90">{m.label}</p>
              <p className="text-sm text-[#7A7A88] leading-snug">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
