"use client";

import { useEffect, useState } from "react";

// ─── Terminal Mockup ──────────────────────────────────────────────────────────

const codeLines = [
  { tokens: [{ t: "const", c: "text-[#569CD6]" }, { t: " sistema", c: "text-white" }, { t: " = ", c: "text-[#8A8A93]" }, { t: "axion", c: "text-[#00C853]" }, { t: ".create({", c: "text-white" }] },
  { tokens: [{ t: "  modulo:", c: "text-[#9CDCFE]" }, { t: ' "captacao-leads"', c: "text-[#CE9178]" }, { t: ",", c: "text-white" }] },
  { tokens: [{ t: "  fluxo:", c: "text-[#9CDCFE]" }, { t: " [", c: "text-white" }, { t: '"entrada"', c: "text-[#CE9178]" }, { t: ", ", c: "text-white" }, { t: '"qualificacao"', c: "text-[#CE9178]" }, { t: ", ", c: "text-white" }, { t: '"distribuicao"', c: "text-[#CE9178]" }, { t: "],", c: "text-white" }] },
  { tokens: [{ t: "  automacao:", c: "text-[#9CDCFE]" }, { t: " true", c: "text-[#569CD6]" }, { t: ",", c: "text-white" }] },
  { tokens: [{ t: "  integracao:", c: "text-[#9CDCFE]" }, { t: " [", c: "text-white" }, { t: '"CRM"', c: "text-[#CE9178]" }, { t: ", ", c: "text-white" }, { t: '"WhatsApp"', c: "text-[#CE9178]" }, { t: ", ", c: "text-white" }, { t: '"E-mail"', c: "text-[#CE9178]" }, { t: "],", c: "text-white" }] },
  { tokens: [{ t: "})", c: "text-white" }] },
  { tokens: [] },
  { tokens: [{ t: "sistema", c: "text-[#00C853]" }, { t: ".on(", c: "text-white" }, { t: '"lead"', c: "text-[#CE9178]" }, { t: ", async (", c: "text-white" }, { t: "lead", c: "text-[#9CDCFE]" }, { t: ") => {", c: "text-white" }] },
  { tokens: [{ t: "  const ", c: "text-[#569CD6]" }, { t: "score", c: "text-[#9CDCFE]" }, { t: " = await ", c: "text-white" }, { t: "qualificar", c: "text-[#DCDCAA]" }, { t: "(lead)", c: "text-white" }] },
  { tokens: [{ t: "  const ", c: "text-[#569CD6]" }, { t: "corretor", c: "text-[#9CDCFE]" }, { t: " = ", c: "text-white" }, { t: "distribuir", c: "text-[#DCDCAA]" }, { t: "(score)", c: "text-white" }] },
  { tokens: [{ t: "  await ", c: "text-white" }, { t: "notificar", c: "text-[#DCDCAA]" }, { t: "(corretor, lead)", c: "text-white" }] },
  { tokens: [{ t: "})", c: "text-white" }] },
];

function TerminalMockup() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 120);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  useEffect(() => {
    const t = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-[#1E1E28] bg-[#0D0D12] overflow-hidden shadow-[0_0_60px_rgba(0,200,83,0.06)]">
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E1E28] bg-[#0A0A0F]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-xs text-[#55555F] font-mono">axion-sistema.js</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
          <span className="text-[10px] text-[#00C853]">running</span>
        </div>
      </div>

      {/* Code */}
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[260px]">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            <span className="text-[#2E2E38] select-none w-6 shrink-0 text-right mr-4 text-xs leading-relaxed">
              {i + 1}
            </span>
            <span>
              {line.tokens.map((token, j) => (
                <span key={j} className={token.c}>
                  {token.t}
                </span>
              ))}
              {i === visibleLines - 1 && cursor && (
                <span className="inline-block w-0.5 h-3.5 bg-[#00C853] ml-0.5 align-middle" />
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Output bar */}
      {visibleLines >= codeLines.length && (
        <div className="border-t border-[#1E1E28] px-5 py-3 flex items-center gap-3 bg-[#0A0A0F]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-badge-pulse" />
            <span className="text-xs text-[#00C853] font-mono">
              Sistema ativo — 1.247 processos/hora
            </span>
          </div>
          <div className="ml-auto text-[10px] text-[#2E2E38] font-mono">0 erros</div>
        </div>
      )}
    </div>
  );
}

// ─── Network Graph ────────────────────────────────────────────────────────────

const nodes = [
  { id: "core",      x: 200, y: 160, r: 18, label: "Core",      color: "#00C853", pulse: true },
  { id: "crm",       x: 80,  y: 60,  r: 12, label: "CRM",       color: "#8A8A93", pulse: false },
  { id: "api",       x: 320, y: 55,  r: 12, label: "API",       color: "#8A8A93", pulse: false },
  { id: "db",        x: 360, y: 190, r: 12, label: "DB",        color: "#8A8A93", pulse: false },
  { id: "wpp",       x: 310, y: 290, r: 12, label: "WPP",       color: "#8A8A93", pulse: false },
  { id: "email",     x: 100, y: 285, r: 12, label: "E-mail",    color: "#8A8A93", pulse: false },
  { id: "webhook",   x: 55,  y: 185, r: 12, label: "Webhook",   color: "#8A8A93", pulse: false },
  { id: "analytics", x: 195, y: 30,  r: 10, label: "Analytics", color: "#55555F", pulse: false },
];

const edges = [
  ["core", "crm"], ["core", "api"], ["core", "db"],
  ["core", "wpp"], ["core", "email"], ["core", "webhook"],
  ["core", "analytics"], ["crm", "api"], ["api", "db"],
];

function NetworkGraph() {
  const [activeEdge, setActiveEdge] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveEdge((e) => (e + 1) % edges.length), 900);
    return () => clearInterval(t);
  }, []);

  const getNode = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div className="rounded-xl border border-[#1E1E28] bg-[#0D0D12] overflow-hidden shadow-[0_0_60px_rgba(0,200,83,0.06)]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1E1E28] bg-[#0A0A0F]">
        <p className="text-xs text-[#55555F] font-medium">Mapa de integrações</p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-badge-pulse" />
          <span className="text-[10px] text-[#00C853]">live</span>
        </div>
      </div>

      {/* SVG */}
      <div className="p-4">
        <svg viewBox="0 0 400 340" className="w-full" style={{ maxHeight: "280px" }}>
          {/* Background grid dots */}
          <defs>
            <pattern id="grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.03)" />
            </pattern>
          </defs>
          <rect width="400" height="340" fill="url(#grid)" />

          {/* Edges */}
          {edges.map(([a, b], i) => {
            const na = getNode(a);
            const nb = getNode(b);
            const isActive = i === activeEdge;
            return (
              <g key={`${a}-${b}`}>
                <line
                  x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                  stroke={isActive ? "#00C853" : "#1E1E28"}
                  strokeWidth={isActive ? 1.5 : 1}
                  strokeOpacity={isActive ? 0.6 : 1}
                />
                {isActive && (
                  <circle r="3" fill="#00C853" fillOpacity="0.9">
                    <animateMotion
                      dur="0.9s"
                      repeatCount="1"
                      path={`M${na.x},${na.y} L${nb.x},${nb.y}`}
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => (
            <g key={node.id}>
              {node.pulse && (
                <circle cx={node.x} cy={node.y} r={node.r + 8} fill="none" stroke="#00C853" strokeWidth="1" strokeOpacity="0.15">
                  <animate attributeName="r" values={`${node.r + 4};${node.r + 14};${node.r + 4}`} dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.2;0;0.2" dur="2.5s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                cx={node.x} cy={node.y} r={node.r}
                fill="#0D0D12"
                stroke={node.color}
                strokeWidth={node.pulse ? 1.5 : 1}
              />
              {node.pulse && (
                <circle cx={node.x} cy={node.y} r={node.r - 5} fill="#00C853" fillOpacity="0.15" />
              )}
              <text
                x={node.x} y={node.y + 1}
                textAnchor="middle" dominantBaseline="middle"
                fontSize={node.r > 14 ? "8" : "7"}
                fontWeight="600"
                fill={node.color}
                fontFamily="monospace"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="border-t border-[#1E1E28] px-5 py-3 grid grid-cols-3 gap-2">
        {[
          { color: "#00C853", label: "Sistema core" },
          { color: "#8A8A93", label: "Integrações" },
          { color: "#55555F", label: "Analytics" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color }} />
            <span className="text-[10px] text-[#55555F]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function TechShowcase() {
  return (
    <section className="py-24 px-6 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <div className="space-y-4">
            <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
              Tecnologia
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
              Sistemas que se comunicam,{" "}
              <span className="text-gradient">integram e automatizam</span>
            </h2>
          </div>
          <p className="text-[#8A8A93] leading-relaxed lg:text-right">
            Cada sistema da Axion é construído para operar conectado — APIs,
            webhooks, CRMs e canais de comunicação trabalhando como uma
            única operação coesa.
          </p>
        </div>

        {/* Visuals */}
        <div className="grid lg:grid-cols-2 gap-6">
          <TerminalMockup />
          <NetworkGraph />
        </div>

      </div>
    </section>
  );
}
