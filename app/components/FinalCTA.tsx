"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ctaImage from "../../imagens/cta.png";

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
    <section className="relative overflow-hidden border-t border-[#13131A] px-6 py-28">
      <Image
        src={ctaImage}
        alt=""
        fill
        className="absolute inset-0 object-contain object-right opacity-90 brightness-110 saturate-125"
        sizes="100vw"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#070A0F_0%,#070A0F_35%,rgba(7,10,15,0.86)_56%,rgba(7,10,15,0.58)_76%,rgba(7,10,15,0.26)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_44%,rgba(0,230,118,0.16)_0%,rgba(0,200,83,0.08)_28%,transparent_48%),radial-gradient(ellipse_at_42%_34%,rgba(0,200,83,0.08)_0%,transparent_42%),radial-gradient(ellipse_at_center,transparent_48%,rgba(0,0,0,0.36)_100%)]"
      />
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── CTA Block ──────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(8,12,18,0.72)] px-8 py-16 text-center shadow-[0_24px_90px_rgba(0,0,0,0.36)] backdrop-blur-[10px] sm:px-14"
          >
            {/* Top glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,230,118,0.13) 0%, rgba(0,200,83,0.06) 36%, transparent 72%)",
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
                Converse com a equipe da <span className="text-[#00C853]">Axion</span> e entenda como podemos desenvolver
                um sistema alinhado à sua realidade operacional.
              </p>
            </div>

            <div className="relative flex flex-wrap gap-3 justify-center mb-8">
              <Link
                href="/contato"
                className="cta-primary-button group inline-flex items-center gap-2 rounded bg-[#00C853] px-8 py-4 text-[15px] font-semibold text-black shadow-[0_0_26px_rgba(0,200,83,0.28)] transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:bg-[#00D95B] hover:shadow-[0_0_46px_rgba(0,230,118,0.5)]"
              >
                Solicitar diagnóstico gratuito
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-[250ms] ease-out group-hover:translate-x-[3px]"
                >
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
                className="inline-flex items-center gap-2 rounded border border-[#2A2A38] px-8 py-4 text-[15px] font-medium text-white/80 transition-all duration-[250ms] ease-out hover:border-[#00C853]/35 hover:bg-[#00C853]/[0.055] hover:text-white"
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
