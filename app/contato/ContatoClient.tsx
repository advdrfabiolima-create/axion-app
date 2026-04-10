"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ─── Sub-components ───────────────────────────────────────────────────────────

function InputField({
  id,
  label,
  optional,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="text-sm font-medium text-white/75 tracking-wide">
          {label}
        </label>
        {optional && (
          <span className="text-xs text-[#4A4A58] normal-case tracking-normal">
            opcional
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

const inputBase =
  "bg-[#0C0C12] border border-[#1E1E2C] text-white placeholder-[#3A3A4A] rounded-xl " +
  "focus:border-[#00C853]/60 focus:ring-1 focus:ring-[#00C853]/20 focus:outline-none " +
  "px-4 py-3.5 text-base w-full transition-all duration-200 hover:border-[#2A2A3A]";

const processSteps = [
  {
    number: "01",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a7 7 0 100 14A7 7 0 009 2z" stroke="#00C853" strokeWidth="1.4" />
        <path d="M6 9l2 2 4-4" stroke="#00C853" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Recebemos e analisamos",
    description: "Em até 24 horas úteis, lemos sua mensagem e analisamos o cenário antes de responder.",
  },
  {
    number: "02",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="#00C853" strokeWidth="1.4" />
        <path d="M6 8h6M6 11h4" stroke="#00C853" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Conversa técnica direta",
    description: "Você fala com quem projeta o sistema — sem intermediários, sem apresentações genéricas.",
  },
  {
    number: "03",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 9h10M9 4l5 5-5 5" stroke="#00C853" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Proposta objetiva",
    description: "Se houver aderência, apresentamos uma abordagem clara e direta — sem enrolação.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContatoClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 11);
    if (v.length > 6) v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    else if (v.length > 0) v = `(${v}`;
    setForm({ ...form, whatsapp: v });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Não foi possível enviar. Tente novamente ou entre em contato pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0B0B0F] min-h-screen">
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 dot-grid overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 80% at 15% 60%, rgba(0,200,83,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-7">
            <div className="h-px w-12 bg-[#1E1E28]" />
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1E1E2C] bg-[#121217]/85 backdrop-blur-sm">
              <span className="relative flex w-2 h-2">
                <span className="animate-badge-pulse absolute inline-flex w-full h-full rounded-full bg-[#00C853] opacity-60" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00C853]" />
              </span>
              <span className="text-sm text-[#9A9AA8] tracking-wide">Contato</span>
            </div>
            <h1 className="text-[2.6rem] lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.06] tracking-tight">
              <span className="text-white">O primeiro passo não é código.</span>
              <br />
              <span className="text-gradient">É entendimento.</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Em vez de começar desenvolvendo, começamos entendendo a sua operação. Converse com a Axion e veja o que faz sentido para a sua realidade.
            </p>
            <p className="text-base text-[#6B6B7A]">
              Sem compromisso. Sem apresentação genérica. Apenas uma conversa técnica honesta sobre o seu cenário.
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
          style={{ background: "linear-gradient(to bottom, transparent, #0B0B0F)" }}
        />
      </section>

      {/* ── Como funciona o processo ─────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-[#6B6B7A] uppercase tracking-widest mb-10 text-center">
            O que acontece depois do seu contato
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {processSteps.map((step) => (
              <div key={step.number} className="flex gap-5 p-7 bg-[#0E0E14] border border-[#1E1E28] rounded-xl">
                <div className="w-9 h-9 rounded-xl border border-[#1E1E28] bg-[#0B0B10] flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-mono text-[#3A3A4A]">{step.number}</p>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-[#7A7A88] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">

              {submitted ? (
                <div className="bg-[#0E0E14] border border-[#1E1E28] rounded-2xl p-12 flex flex-col items-center justify-center text-center space-y-6 min-h-[480px]">
                  <div className="w-16 h-16 rounded-full border border-[#00C853]/40 bg-[#00C853]/10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5 9-9" stroke="#00C853" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Mensagem recebida.</h3>
                    <p className="text-base text-white/65 max-w-xs leading-relaxed">
                      Nossa equipe vai analisar o seu cenário e entrar em contato em até 24 horas úteis.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
                    <p className="text-sm text-[#6B6B7A]">Seg–Sex, 9h–18h (BRT)</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">

                  {/* Form header */}
                  <div className="space-y-2 pb-2">
                    <h2 className="text-2xl font-bold text-white">Descreva o que você precisa</h2>
                    <p className="text-base text-white/55">
                      Quanto mais contexto, melhor a conversa que podemos ter.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <InputField id="nome" label="Nome">
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Seu nome completo"
                        value={form.nome}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </InputField>
                    <InputField id="empresa" label="Empresa" optional>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        autoComplete="organization"
                        placeholder="Nome da empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </InputField>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <InputField id="email" label="E-mail">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </InputField>
                    <InputField id="whatsapp" label="WhatsApp" optional>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(00) 00000-0000"
                        value={form.whatsapp}
                        onChange={handleWhatsappChange}
                        className={inputBase}
                      />
                    </InputField>
                  </div>

                  <InputField id="mensagem" label="O que você precisa resolver?">
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={6}
                      placeholder="Descreva sua operação, o problema atual e o que você espera resolver. Quanto mais contexto, melhor."
                      value={form.mensagem}
                      onChange={handleChange}
                      className={`${inputBase} resize-none`}
                    />
                  </InputField>

                  <div className="space-y-4 pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#00C853] text-black font-semibold px-6 py-4 rounded-xl hover:bg-[#00B84A] active:scale-[0.99] transition-all duration-200 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(0,200,83,0.2)] hover:shadow-[0_0_40px_rgba(0,200,83,0.4)]"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
                            <path d="M8 2a6 6 0 016 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Iniciar diagnóstico
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </button>

                    {error && (
                      <p className="text-sm text-red-400 text-center">{error}</p>
                    )}

                    <p className="text-sm text-[#4A4A58] text-center">
                      Empresas que exigem precisão já operam com sistemas desenvolvidos pela Axion.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Info panel — 2 cols */}
            <div className="lg:col-span-2 space-y-8 lg:pt-16">

              {/* Main conviction block */}
              <div className="bg-[#0E0E14] border border-[#1E1E28] rounded-2xl p-7 space-y-6">
                <div className="space-y-3">
                  <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">Por que falar com a Axion</p>
                  <p className="text-lg font-semibold text-white leading-snug">
                    Você vai falar direto com quem projeta o sistema.
                  </p>
                  <p className="text-base text-white/60 leading-relaxed">
                    Sem intermediários. Sem apresentações de vendas. Sem propostas genéricas. Apenas uma conversa técnica sobre a sua realidade operacional.
                  </p>
                </div>

                <div className="h-px bg-[#1E1E28]" />

                <ul className="space-y-3.5">
                  {[
                    "Análise honesta do seu cenário real",
                    "Sugestões práticas de estrutura operacional",
                    "Clareza sobre o que faz sentido construir",
                    "Sem compromisso — avançamos juntos se houver fit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full border border-[#00C853]/35 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
                      </div>
                      <p className="text-base text-white/70">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                <p className="text-sm text-[#5A5A6A] uppercase tracking-widest font-medium">
                  Outros canais
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl border border-[#1E1E28] bg-[#0E0E14] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 3.5A1.5 1.5 0 012.5 2h9A1.5 1.5 0 0113 3.5v7A1.5 1.5 0 0111.5 12h-9A1.5 1.5 0 011 10.5v-7z" stroke="#00C853" strokeWidth="1" />
                        <path d="M1 4l6 4 6-4" stroke="#00C853" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="text-base text-[#8A8A98]">contato@axionsystem.com.br</p>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl border border-[#1E1E28] bg-[#0E0E14] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 2.5C2 2.5 3 5 5 6.5c2 1.5 4.5 3 6.5 3L13 7s-1-1.5-2-1.5-2 .5-2 .5L7.5 4.5S8 3.5 8 2.5C8 1.5 6.5 1 6.5 1L3 2.5H2z" stroke="#00C853" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-base text-[#8A8A98]">(75) 99189-5948</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-3 py-4 border-t border-[#1A1A22]">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00C853] flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-sm text-white/65 font-medium">Seg–Sex, 9h–18h (BRT)</p>
                  <p className="text-sm text-[#5A5A6A] leading-relaxed">
                    Respondemos em até 24 horas úteis após o recebimento da mensagem.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Closing conviction ───────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-2xl font-bold text-white leading-snug mb-4">
              &ldquo;Operações que funcionam bem não são acidente. São arquitetura.&rdquo;
            </p>
            <p className="text-base text-white/55 leading-relaxed">
              A Axion existe para transformar complexidade operacional em sistemas claros, automáticos e escaláveis — para empresas que não aceitam improvisar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
