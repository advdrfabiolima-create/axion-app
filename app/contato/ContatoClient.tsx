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
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label
          htmlFor={id}
          className="text-xs text-[#8A8A93] uppercase tracking-widest"
        >
          {label}
        </label>
        {optional && (
          <span className="text-[10px] text-[#3A3A45] normal-case tracking-normal">
            opcional
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

const inputBase =
  "bg-[#0F0F14] border border-[#1E1E28] text-white placeholder-[#3A3A45] rounded-lg " +
  "focus:border-[#00C853]/60 focus:ring-1 focus:ring-[#00C853]/20 focus:outline-none " +
  "px-4 py-3 text-sm w-full transition-all duration-200 hover:border-[#2A2A35]";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContatoClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main className="bg-[#0B0B0F] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-5">
            <div className="h-px w-12 bg-[#1E1E28]" />
            <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
              Contato
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Fale com a Axion sobre{" "}
              <span className="text-[#8A8A93]">o seu sistema</span>
            </h1>
            <p className="text-lg text-[#8A8A93] leading-relaxed">
              Se sua operação exige mais clareza, automação e estrutura, a Axion
              pode construir isso com você — começando por uma conversa técnica
              direta.
            </p>
            <p className="text-sm text-[#55555F]">
              Sem compromisso. Sem apresentação genérica. Apenas uma conversa
              técnica sobre o seu cenário.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-12 px-6 border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-[#121217] border border-[#1E1E28] rounded-xl p-12 flex flex-col items-center justify-center text-center space-y-5 min-h-[480px]">
                  <div className="w-14 h-14 rounded-full border border-[#00C853]/40 bg-[#00C853]/10 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M5 11l4.5 4.5 8-8"
                        stroke="#00C853"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      Mensagem recebida.
                    </h3>
                    <p className="text-sm text-[#8A8A93] max-w-xs">
                      Nossa equipe vai analisar o seu cenário e entrar em
                      contato em até 24 horas úteis.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
                    <p className="text-xs text-[#55555F]">Seg–Sex, 9h–18h (BRT)</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid sm:grid-cols-2 gap-7">
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

                  <div className="grid sm:grid-cols-2 gap-7">
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
                        placeholder="(75) 99189-5948"
                        value={form.whatsapp}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </InputField>
                  </div>

                  <InputField id="mensagem" label="Como podemos ajudar?">
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={6}
                      placeholder='Ex: "Preciso automatizar o processo de captação e distribuição de leads entre corretores"'
                      value={form.mensagem}
                      onChange={handleChange}
                      className={`${inputBase} resize-none`}
                    />
                  </InputField>

                  <div className="space-y-4 pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#00C853] text-black font-semibold px-6 py-3.5 rounded-lg hover:bg-[#00B84A] active:scale-[0.99] transition-all duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin w-4 h-4"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <circle
                              cx="8"
                              cy="8"
                              r="6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeOpacity="0.25"
                            />
                            <path
                              d="M8 2a6 6 0 016 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Iniciar conversa
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                              d="M2 7h10M8 3l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </>
                      )}
                    </button>

                    {/* Trust line */}
                    <p className="text-xs text-[#55555F] text-center">
                      Empresas que exigem precisão já operam com sistemas
                      desenvolvidos pela Axion.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Info panel — 2 cols */}
            <div className="lg:col-span-2 space-y-10 lg:pt-2">

              {/* Trust message */}
              <div className="space-y-5">
                <p className="text-base text-white font-medium leading-relaxed">
                  Você vai falar direto com quem projeta o sistema — sem
                  intermediários, sem apresentações genéricas.
                </p>
                <ul className="space-y-3">
                  {[
                    "Análise do seu cenário real",
                    "Sugestões práticas de estrutura",
                    "Sem compromisso",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00C853] shrink-0" />
                      <p className="text-sm text-[#8A8A93]">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-[#1E1E28]" />

              {/* Contact info */}
              <div className="space-y-4">
                <p className="text-xs text-[#55555F] uppercase tracking-widest">
                  Informações de contato
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-[#1E1E28] bg-[#121217] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M1 3.5A1.5 1.5 0 012.5 2h9A1.5 1.5 0 0113 3.5v7A1.5 1.5 0 0111.5 12h-9A1.5 1.5 0 011 10.5v-7z"
                          stroke="#00C853"
                          strokeWidth="1"
                        />
                        <path
                          d="M1 4l6 4 6-4"
                          stroke="#00C853"
                          strokeWidth="1"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-[#8A8A93]">
                      contato@axionsystem.com.br
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-[#1E1E28] bg-[#121217] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 2.5C2 2.5 3 5 5 6.5c2 1.5 4.5 3 6.5 3L13 7s-1-1.5-2-1.5-2 .5-2 .5L7.5 4.5S8 3.5 8 2.5C8 1.5 6.5 1 6.5 1L3 2.5H2z"
                          stroke="#00C853"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-[#8A8A93]">(75) 99189-5948</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#1E1E28]" />

              {/* Availability */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
                  <p className="text-xs text-[#55555F]">Seg–Sex, 9h–18h (BRT)</p>
                </div>
                <p className="text-xs text-[#55555F] leading-relaxed">
                  Respondemos em até 24 horas úteis após o recebimento da
                  mensagem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
