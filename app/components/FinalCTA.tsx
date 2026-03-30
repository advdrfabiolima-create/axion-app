"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um sistema?",
    answer:
      "Depende da complexidade da operação, mas trabalhamos com entregas rápidas e validações contínuas para garantir evolução constante.",
  },
  {
    question: "O sistema é totalmente personalizado?",
    answer:
      "Sim. Cada solução é desenvolvida com base na realidade do negócio, sem depender de estruturas genéricas.",
  },
  {
    question: "Vocês fazem integrações com outros sistemas?",
    answer:
      "Sim. Conectamos diferentes fontes de dados e ferramentas para criar uma operação integrada e eficiente.",
  },
  {
    question: "Como funciona o suporte após a entrega?",
    answer:
      "O sistema continua evoluindo conforme o uso real, com suporte técnico e melhorias contínuas.",
  },
  {
    question: "Preciso ter equipe técnica interna?",
    answer:
      "Não. A Axion cuida da arquitetura, desenvolvimento e evolução do sistema.",
  },
];

export default function FinalCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 border-t border-[#13131A]">
      <div className="max-w-7xl mx-auto">

        {/* ── CTA Block ──────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-2xl border border-[#1C1C24] bg-[#0D0D12] px-8 py-14 sm:px-14 text-center overflow-hidden"
          >
            {/* Soft top glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,200,83,0.055) 0%, transparent 70%)",
              }}
            />

            {/* Ornament */}
            <div className="relative flex items-center gap-3 justify-center mb-10">
              <div className="h-px w-10 bg-[#1E1E28]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]/50" />
              <div className="h-px w-10 bg-[#1E1E28]" />
            </div>

            <div className="relative space-y-5 mb-10">
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                Pronto para estruturar sua operação?
              </h2>
              <p className="text-lg text-white/55 leading-relaxed max-w-xl mx-auto">
                Converse com a equipe da Axion e entenda como podemos desenvolver
                um sistema alinhado à sua realidade.
              </p>
            </div>

            <div className="relative flex flex-wrap gap-3 justify-center mb-6">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00C853] text-black font-semibold text-sm rounded hover:bg-[#00B84A] transition-all duration-200 shadow-[0_0_20px_rgba(0,200,83,0.2)] hover:shadow-[0_0_36px_rgba(0,200,83,0.4)]"
              >
                Solicitar demonstração
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#2E2E38] text-[#8A8A93] font-medium text-sm rounded hover:border-[#3E3E48] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              >
                Falar com a equipe
              </Link>
            </div>

            <p className="relative text-xs text-[#32323E] tracking-wide">
              Sem compromisso. Conversa técnica, direta ao ponto.
            </p>
          </div>
        </div>

        {/* ── FAQ ────────────────────────────────────────────────────── */}
        <div className="mt-28 pt-20 border-t border-[#13131A]">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

            {/* Left — label + intro */}
            <div className="lg:pt-1">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#00C853] mb-5">
                Dúvidas comuns
              </p>
              <h3 className="text-2xl font-bold text-white leading-snug tracking-tight mb-4">
                Antes de começar
              </h3>
              <p className="text-sm text-white/45 leading-relaxed max-w-xs">
                Esclarecemos os principais pontos antes de iniciar o desenvolvimento.
              </p>
            </div>

            {/* Right — accordion */}
            <div className="divide-y divide-[#16161E]">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-sm font-medium leading-snug transition-colors duration-200 ${
                          isOpen ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 w-5 h-5 flex items-center justify-center rounded border transition-all duration-200 ${
                          isOpen
                            ? "border-[#00C853]/40 text-[#00C853]"
                            : "border-[#2A2A36] text-[#4A4A58] group-hover:border-[#3A3A48] group-hover:text-[#6A6A78]"
                        }`}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        >
                          <path
                            d="M5 1v8M1 5h8"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Answer — smooth height transition */}
                    <div
                      style={{
                        maxHeight: isOpen ? "200px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      <p className="text-sm text-white/45 leading-relaxed pb-5 max-w-xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
