export default function ProductVisual() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-7 order-2 lg:order-1">
            <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
              Design de produto
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
              Sistemas que pensam como produto, não como código
            </h2>
            <div className="border-l-2 border-[#00C853]/40 pl-5 py-1">
              <p className="text-base text-[#00C853] font-medium leading-relaxed">
                A maioria dos sistemas falha porque nasce como projeto. Nós construímos como produto.
              </p>
            </div>
            <p className="text-lg text-white/70 leading-relaxed">
              A Axion projeta cada sistema com visão de produto — arquitetura técnica e experiência do usuário evoluindo juntas, sem conflito, sem reescritas emergenciais.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              O resultado são plataformas que os times adotam porque fazem sentido operacional e técnico ao mesmo tempo.
            </p>
            <div className="space-y-4 pt-2">
              {[
                "Arquitetura modular e extensível",
                "UX orientada a dados reais de operação",
                "Performance como requisito de design",
                "Manutenção sem refatoração constante",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3.5">
                  <div className="mt-1 w-5 h-5 rounded-full border border-[#00C853]/40 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#00C853]" />
                  </div>
                  <p className="text-base text-[#8A8A98]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="rounded-2xl border border-[#1E1E28] bg-[#0E0E14] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
              {/* Toolbar */}
              <div className="border-b border-[#1E1E28] px-4 py-3.5 flex items-center gap-3 bg-[#0B0B10]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1E1E28]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1E1E28]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1E1E28]" />
                </div>
                <div className="flex-1 flex items-center gap-2">
                  {["Overview", "Analytics", "Processos", "Config"].map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] px-3 py-1.5 rounded transition-colors ${
                        t === "Analytics"
                          ? "bg-[#00C853]/12 text-[#00C853] border border-[#00C853]/20"
                          : "text-[#4A4A58] hover:text-[#7A7A88]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-5 rounded bg-[#1A1A22]" />
                  <div className="w-6 h-6 rounded-md bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#00C853]" />
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* Summary row */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { l: "Conversão", v: "24.8%", d: "+3.2%" },
                    { l: "Volume", v: "18.4K", d: "+11%" },
                    { l: "Latência", v: "42ms", d: "−8ms" },
                    { l: "Erros", v: "0.01%", d: "−0.02%" },
                  ].map((m) => (
                    <div
                      key={m.l}
                      className="bg-[#0B0B10] border border-[#1A1A22] rounded-lg p-3 space-y-1.5"
                    >
                      <p className="text-[9px] text-[#4A4A58] uppercase tracking-widest">
                        {m.l}
                      </p>
                      <p className="text-sm font-bold text-white">{m.v}</p>
                      <p className="text-[10px] text-[#00C853] font-medium">{m.d}</p>
                    </div>
                  ))}
                </div>

                {/* Main chart */}
                <div className="bg-[#0B0B10] border border-[#1A1A22] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-white font-medium">
                      Análise de desempenho
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#00C853]" />
                        <span className="text-[10px] text-[#6A6A78]">Este mês</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#2A2A38]" />
                        <span className="text-[10px] text-[#4A4A58]">Mês anterior</span>
                      </div>
                    </div>
                  </div>
                  <svg viewBox="0 0 400 100" className="w-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="pvChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00C853" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#00C853" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[20, 40, 60, 80].map((y) => (
                      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#1A1A22" strokeWidth="0.5" />
                    ))}
                    <polyline
                      points="0,75 55,65 110,70 165,55 220,60 275,50 330,55 400,45"
                      fill="none"
                      stroke="#252535"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      strokeLinejoin="round"
                    />
                    <polygon
                      points="0,65 55,50 110,55 165,30 220,35 275,15 330,20 400,8 400,100 0,100"
                      fill="url(#pvChartGrad)"
                    />
                    <polyline
                      points="0,65 55,50 110,55 165,30 220,35 275,15 330,20 400,8"
                      fill="none"
                      stroke="#00C853"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Bottom table */}
                <div className="bg-[#0B0B10] border border-[#1A1A22] rounded-lg overflow-hidden">
                  <div className="grid grid-cols-4 border-b border-[#1A1A22] px-4 py-2.5">
                    {["Evento", "Volume", "Taxa", "Status"].map((h) => (
                      <p key={h} className="text-[9px] text-[#4A4A58] uppercase tracking-widest font-medium">
                        {h}
                      </p>
                    ))}
                  </div>
                  {[
                    { e: "Auth Request", v: "4.2K", t: "99.8%", s: "OK" },
                    { e: "Data Sync", v: "1.8K", t: "100%", s: "OK" },
                    { e: "Report Gen", v: "342", t: "98.5%", s: "Aviso" },
                  ].map((row) => (
                    <div
                      key={row.e}
                      className="grid grid-cols-4 px-4 py-3 border-b border-[#1A1A22] last:border-0 hover:bg-[#0F0F15] transition-colors"
                    >
                      <p className="text-[10px] text-[#8A8A98]">{row.e}</p>
                      <p className="text-[10px] text-white font-medium">{row.v}</p>
                      <p className="text-[10px] text-[#00C853]">{row.t}</p>
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded-full w-fit ${
                          row.s === "OK"
                            ? "bg-[#00C853]/10 text-[#00C853]"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {row.s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
