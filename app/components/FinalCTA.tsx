"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um sistema?",
    answer:
      "Depende da complexidade da operação, mas trabalhamos com entregas rápidas e validações contínuas. Sistemas com escopo definido chegam a produção em semanas, não meses. Garantimos evolução constante após o lançamento.",
  },
  {
    question: "O sistema é totalmente personalizado?",
    answer:
      "Sim, integralmente. Cada solução é desenvolvida com base na realidade do negócio — sem depender de estruturas genéricas, sem templates. Arquitetura, lógica e interface são construídas em torno da sua operação.",
  },
  {
    question: "Vocês fazem integrações com outros sistemas?",
    answer:
      "Sim. Conectamos diferentes fontes de dados, ferramentas e plataformas para criar uma operação integrada, confiável e sem gargalos de sincronização manual.",
  },
  {
    question: "Como funciona o suporte após a entrega?",
    answer:
      "O sistema continua evoluindo conforme o uso real. Prestamos suporte técnico contínuo e desenvolvemos melhorias incrementais alinhadas ao crescimento da operação.",
  },
  {
    question: "Preciso ter equipe técnica interna?",
    answer:
      "Não. A Axion cuida integralmente da arquitetura, do desenvolvimento e da evolução do sistema. Você opera o produto; nós garantimos que ele funcione e evolua.",
  },
];

export default function FinalCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 border-t border-[#13131A]">
      <div className="max-w-7xl mx-auto">

        {/* ── CTA Block ──────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-2xl border border-[#1E1E2C] bg-[#0D0D12] px-8 py-16 sm:px-14 text-center overflow-hidden"
          >
            {/* Top glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,200,83,0.07) 0%, transparent 70%)",
              }}
            />

            {/* Ornament */}
            <div className="relative flex items-center gap-3 justify-center mb-12">
              <div className="h-px w-12 bg-[#1E1E28]" />
              <div className="w-2 h-2 rounded-full bg-[#00C853]/60" />
              <div className="h-px w-12 bg-[#1E1E28]" />
            </div>

            <div className="relative space-y-6 mb-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.08] tracking-tight">
                Pronto para estruturar sua operação?
              </h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl mx-auto">
                Converse com a equipe da Axion e entenda como podemos desenvolver
                um sistema alinhado à sua realidade operacional.
              </p>
            </div>

            <div className="relative flex flex-wrap gap-3 justify-center mb-8">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C853] text-black font-semibold text-[15px] rounded hover:bg-[#00B84A] transition-all duration-200 shadow-[0_0_24px_rgba(0,200,83,0.25)] hover:shadow-[0_0_44px_rgba(0,200,83,0.45)]"
              >
                Solicitar diagnóstico gratuito
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
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#2A2A38] text-white/80 font-medium text-[15px] rounded hover:border-[#3A3A48] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              >
                Falar com especialista
              </Link>
            </div>

            <p className="relative text-sm text-[#4A4A58] tracking-wide">
              Sem compromisso. Conversa técnica, direta ao ponto.
            </p>
          </div>
        </div>

        {/* ── FAQ ────────────────────────────────────────────────────── */}
        <div className="mt-28 pt-20 border-t border-[#13131A]">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

            {/* Left */}
            <div className="lg:pt-1">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#00C853] mb-5">
                Dúvidas comuns
              </p>
              <h3 className="text-3xl font-bold text-white leading-snug tracking-tight mb-5">
                Antes de começar
              </h3>
              <p className="text-base text-white/60 leading-relaxed max-w-xs">
                Esclarecemos os principais pontos antes de iniciar qualquer desenvolvimento.
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
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-base font-medium leading-snug transition-colors duration-200 ${
                          isOpen ? "text-white" : "text-white/75 group-hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 w-6 h-6 flex items-center justify-center rounded border transition-all duration-200 ${
                          isOpen
                            ? "border-[#00C853]/45 text-[#00C853] bg-[#00C853]/08"
                            : "border-[#2A2A38] text-[#5A5A68] group-hover:border-[#3A3A48] group-hover:text-[#7A7A88]"
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

                    {/* Answer */}
                    <div
                      style={{
                        maxHeight: isOpen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      <p className="text-base text-white/65 leading-relaxed pb-6 max-w-2xl">
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
