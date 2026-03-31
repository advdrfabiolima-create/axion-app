import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InternalHero from "../components/shared/InternalHero";
import CTASection from "../components/shared/CTASection";

export const metadata: Metadata = {
  title: "Axion Systems | Empresa",
  description:
    "Axion Systems — empresa de tecnologia que projeta sistemas com mentalidade de produto. Conheça nossa filosofia, método e forma de pensar.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const quemSomosBlocks = [
  {
    text: "A maioria das empresas opera com sistemas que não foram desenhados para elas.",
    highlight: false,
  },
  {
    text: "Ferramentas genéricas, processos manuais disfarçados de automação e interfaces que confundem mais do que ajudam.",
    highlight: false,
  },
  {
    text: "A Axion nasce para resolver isso.",
    highlight: true,
  },
  {
    text: "Cada sistema começa entendendo a operação real — e evolui como um produto, não como um projeto de TI.",
    highlight: false,
  },
];

const filosofiaItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#00C853" strokeWidth="1.5" />
        <path d="M7 10h6" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Menos ruído",
    description:
      "Interfaces e fluxos sem excesso. Cada elemento existe por um motivo.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l2 5h5l-4 3 1.5 5L10 13l-4.5 3L7 11 3 8h5L10 3z" stroke="#00C853" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Mais precisão",
    description:
      "Cada funcionalidade resolve um problema real. Nada é adicionado por convenção.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="#00C853" strokeWidth="1.5" />
        <path d="M7 10h6M10 7v6" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Produto acima do improviso",
    description:
      "Sistemas com visão, arquitetura e evolução planejada. Não entregamos código, entregamos plataformas.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h12" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 4l6 6-6 6" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Tecnologia a serviço da operação",
    description:
      "A tecnologia existe para fazer a operação funcionar melhor — não para complicar.",
  },
];

const metodoItems = [
  {
    number: "01",
    title: "Diagnóstico antes do código",
    description:
      "Antes de escrever qualquer linha, entendemos o fluxo real, os gargalos e as decisões críticas da operação.",
  },
  {
    number: "02",
    title: "Arquitetura com intenção",
    description:
      "Cada decisão técnica tem propósito. A estrutura do sistema reflete a estrutura do negócio.",
  },
  {
    number: "03",
    title: "Entrega com continuidade",
    description:
      "Evoluímos o sistema junto com a operação. Não desaparecemos após o lançamento.",
  },
];

const setoresItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 19V9l8-6 8 6v10" stroke="#00C853" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 19v-6h6v6" stroke="#00C853" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    label: "Imobiliário",
    description:
      "Conexão entre imóveis, compradores e oportunidades com lógica de matching e automação de fluxos.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="3" width="14" height="17" rx="2" stroke="#00C853" strokeWidth="1.5" />
        <path d="M8 8h6M8 12h6M8 16h4" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Jurídico",
    description:
      "Organização e automação de fluxos operacionais com controle, rastreabilidade e previsibilidade.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#00C853" strokeWidth="1.5" />
        <path d="M11 7v4l3 3" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Operações específicas",
    description:
      "Sistemas desenhados para contextos únicos com alta exigência técnica e lógica de negócio complexa.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function EmpresaPage() {
  return (
    <main className="bg-[#0B0B0F] min-h-screen">
      <Header />

      {/* Hero */}
      <InternalHero
        eyebrow="Empresa"
        title="A Axion projeta sistemas com mentalidade de produto"
        titleMuted="— não como projetos de TI"
        subtitle="Somos uma empresa de tecnologia focada em arquitetura, automação e construção de sistemas preparados para operar em produção."
      />

      {/* Quem somos */}
      <section className="py-28 px-6 border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="lg:sticky lg:top-28 space-y-4">
              <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
                Quem somos
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                Construímos sistemas que sustentam operações reais
              </h2>
            </div>
            <div className="space-y-10">
              {quemSomosBlocks.map((block, i) => (
                <p
                  key={i}
                  className={`text-lg leading-relaxed ${
                    block.highlight
                      ? "text-white font-medium"
                      : "text-[#8A8A93]"
                  }`}
                >
                  {block.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section
        id="filosofia"
        className="relative py-28 px-6 border-t border-[#163324] overflow-hidden"
        style={{ background: "#060E08" }}
      >
        {/* Honeycomb pattern */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hex-grid" />
        {/* Green radial glow — fades hex toward center */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 160% at 50% 40%, rgba(6,14,8,0.88) 0%, transparent 75%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
              Filosofia
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
              Precisão como padrão,{" "}
              <span className="text-[#8A8A93]">não como exceção</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {filosofiaItems.map((item) => (
              <div
                key={item.title}
                className="card-glow bg-[#0C150E] border border-[#1A2E1F] rounded-xl p-8 space-y-4 hover:bg-[#0F1A11] transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg border border-[#1A2E1F] bg-[#060E08] flex items-center justify-center group-hover:border-[#00C853]/20 transition-colors duration-200">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-[#8A8A93] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método */}
      <section className="py-28 px-6 border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="lg:sticky lg:top-28 space-y-4">
              <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
                Método
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                Sistemas vivos,{" "}
                <span className="text-[#8A8A93]">não entregas pontuais</span>
              </h2>
              <p className="text-[#8A8A93] leading-relaxed">
                A Axion não trata software como peça isolada. Cada sistema que
                construímos é conectado ao negócio, à equipe e à estratégia da
                empresa.
              </p>
            </div>
            <div className="space-y-3">
              {metodoItems.map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-6 p-7 border-l-2 border-l-[#00C853] border border-[#1E1E28] bg-[#121217] hover:bg-[#0F0F14] transition-colors duration-200"
                >
                  <span className="text-xs font-mono text-[#2E2E38] group-hover:text-[#00C853] transition-colors duration-200 shrink-0 pt-0.5">
                    {item.number}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#8A8A93] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-28 px-6 bg-[#121217] border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
              Aplicações
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
              Sistemas aplicados em operações reais
            </h2>
            <p className="text-[#8A8A93] leading-relaxed">
              Contextos diferentes, mesma exigência de precisão.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {setoresItems.map((setor) => (
              <div
                key={setor.label}
                className="card-glow bg-[#121217] border border-[#1E1E28] rounded-xl p-8 space-y-5 hover:bg-[#0F0F14] transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg border border-[#1E1E28] bg-[#0B0B0F] flex items-center justify-center group-hover:border-[#00C853]/20 transition-colors duration-200">
                  {setor.icon}
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-[#00C853] uppercase tracking-widest font-medium">
                    {setor.label}
                  </p>
                  <p className="text-sm text-[#8A8A93] leading-relaxed">
                    {setor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/solucoes"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A93] hover:text-white transition-colors duration-200"
          >
            Ver todas as soluções
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
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Vamos conversar sobre o seu sistema"
        subtitle="Se sua operação exige mais clareza, automação e estrutura, a Axion pode construir isso com você."
        primaryLabel="Falar com a equipe"
        primaryHref="/contato"
        microcopy="Sem compromisso. Conversa técnica direta."
      />

      <Footer />
    </main>
  );
}
