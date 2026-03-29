export default function DashboardMockup() {
  return (
    <div className="w-full rounded-xl border border-[#1E1E28] bg-[#121217] overflow-hidden">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E1E28] bg-[#0F0F14]">
        <span className="w-3 h-3 rounded-full bg-[#1E1E28]" />
        <span className="w-3 h-3 rounded-full bg-[#1E1E28]" />
        <span className="w-3 h-3 rounded-full bg-[#1E1E28]" />
        <div className="flex-1 ml-2 h-5 rounded bg-[#1A1A22] w-48 max-w-xs" />
      </div>

      <div className="p-4 space-y-4">
        {/* Top metric cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Receita Total", value: "R$ 842K", change: "+12.4%" },
            { label: "Processos Ativos", value: "1.247", change: "+8.1%" },
            { label: "Eficiência", value: "98.6%", change: "+2.3%" },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-[#0F0F14] rounded-lg border border-[#1E1E28] p-3 space-y-1"
            >
              <p className="text-[10px] text-[#55555F] uppercase tracking-widest font-medium">
                {card.label}
              </p>
              <p className="text-base font-bold text-white">{card.value}</p>
              <p className="text-[10px] text-[#00C853]">{card.change}</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="bg-[#0F0F14] rounded-lg border border-[#1E1E28] p-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-medium text-[#8A8A93]">Desempenho operacional</p>
            <div className="flex gap-2">
              {["7d", "30d", "90d"].map((t) => (
                <span
                  key={t}
                  className={`text-[10px] px-2 py-0.5 rounded ${
                    t === "30d"
                      ? "bg-[#00C853]/10 text-[#00C853]"
                      : "text-[#55555F]"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* SVG Line Chart */}
          <svg viewBox="0 0 300 80" className="w-full" preserveAspectRatio="none">
            {[0, 1, 2, 3].map((i) => (
              <line
                key={i}
                x1="0"
                y1={i * 20 + 10}
                x2="300"
                y2={i * 20 + 10}
                stroke="#1E1E28"
                strokeWidth="0.5"
              />
            ))}
            <polyline
              points="0,60 42,45 84,50 126,30 168,35 210,20 252,25 300,10"
              fill="none"
              stroke="#00C853"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <polygon
              points="0,60 42,45 84,50 126,30 168,35 210,20 252,25 300,10 300,80 0,80"
              fill="#00C853"
              fillOpacity="0.04"
            />
            {[[0,60],[42,45],[84,50],[126,30],[168,35],[210,20],[252,25],[300,10]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2" fill="#00C853" />
            ))}
          </svg>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-3">
          {/* Process list */}
          <div className="bg-[#0F0F14] rounded-lg border border-[#1E1E28] p-3 space-y-2">
            <p className="text-[10px] text-[#55555F] uppercase tracking-widest font-medium mb-2">
              Processos Recentes
            </p>
            {[
              { name: "Integração API", status: "Ativo" },
              { name: "Relatório Mensal", status: "Concluído" },
              { name: "Sync de Dados", status: "Ativo" },
              { name: "Auditoria", status: "Pendente" },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <span className="text-[10px] text-[#8A8A93]">{item.name}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                    item.status === "Ativo"
                      ? "bg-[#00C853]/10 text-[#00C853]"
                      : item.status === "Concluído"
                      ? "bg-[#1E1E28] text-[#8A8A93]"
                      : "bg-[#1A1A22] text-[#55555F]"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          {/* Donut chart */}
          <div className="bg-[#0F0F14] rounded-lg border border-[#1E1E28] p-3 flex flex-col items-center justify-center">
            <p className="text-[10px] text-[#55555F] uppercase tracking-widest font-medium mb-3">
              Distribuição
            </p>
            <svg viewBox="0 0 80 80" className="w-16 h-16">
              <circle cx="40" cy="40" r="28" fill="none" stroke="#1E1E28" strokeWidth="10" />
              <circle
                cx="40" cy="40" r="28"
                fill="none"
                stroke="#00C853"
                strokeWidth="10"
                strokeDasharray="88 176"
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
              />
              <text x="40" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
                86%
              </text>
            </svg>
            <div className="flex gap-3 mt-2">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00C853]" />
                <span className="text-[9px] text-[#8A8A93]">Automação</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#1A1A22]" />
                <span className="text-[9px] text-[#8A8A93]">Manual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
