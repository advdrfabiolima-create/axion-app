import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InternalHero from "../components/shared/InternalHero";
import CTASection from "../components/shared/CTASection";

export const metadata: Metadata = {
  title: "Axion Systems | Empresa",
  description:
    "A Axion projeta sistemas com mentalidade de produto — arquitetura intencional, experiência precisa e estrutura que sustenta operações reais.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const principios = [
  {
    number: "01",
    title: "Arquitetura antes do código",
    description:
      "Antes de escrever qualquer linha, projetamos a estrutura — fluxos, regras, entidades e decisões que o sistema precisa suportar. Um sistema bem arquitetado escala. Um sistema mal arquitetado precisa ser reescrito.",
  },
  {
    number: "02",
    title: "Operação como produto",
    description:
      "Não entregamos projetos pontuais. Entregamos plataformas com visão, arquitetura e evolução planejada. A diferença é que um produto cresce junto com o negócio — sem recomeços.",
  },
  {
    number: "03",
    title: "Clareza como requisito técnico",
    description:
      "Se a interface confunde, o sistema falhou — independente da qualidade do código por baixo. Clareza operacional não é preferência estética. É requisito de produto.",
  },
  {
    number: "04",
    title: "Escala como premissa de design",
    description:
      "Sistemas construídos hoje precisam aguentar o negócio daqui a três anos. Projetamos com essa premissa desde o início — sem débito técnico acumulado, sem reescritas dolorosas.",
  },
];

const filosofiaItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#00C853" strokeWidth="1.5" />
        <path d="M7 10h6" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Menos ruído operacional",
    description:
      "Interfaces e fluxos sem excesso. Cada elemento existe por uma razão operacional real — não por convenção ou estética vazia.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l2 5h5l-4 3 1.5 5L10 13l-4.5 3L7 11 3 8h5L10 3z" stroke="#00C853" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Mais precisão operacional",
    description:
      "Cada funcionalidade resolve um problema real e identificado. Nada é adicionado por especulação ou porque parece interessante.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="#00C853" strokeWidth="1.5" />
        <path d="M7 10h6M10 7v6" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Produto acima do improviso",
    description:
      "Sistemas com visão, arquitetura intencional e evolução planejada. A diferença entre um projeto de TI e um produto é que o produto não para de fazer sentido quando o projeto termina.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h12" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 4l6 6-6 6" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Tecnologia a serviço da operação",
    description:
      "Tecnologia não é o fim — é o meio. Existe para fazer a operação funcionar melhor, com mais previsibilidade, menos ruído e mais controle.",
  },
];

const metodoItems = [
  {
    number: "01",
    title: "Diagnóstico antes do código",
    description:
      "Antes de escrever qualquer linha, entendemos o fluxo real: gargalos, decisões críticas, onde o dado entra, onde sai e por que o sistema atual não resolve. Esse mapeamento determina a arquitetura.",
  },
  {
    number: "02",
    title: "Arquitetura com intenção",
    description:
      "Cada decisão técnica tem propósito operacional. A estrutura do sistema reflete a estrutura real do negócio — não uma estrutura genérica adaptada depois.",
  },
  {
    number: "03",
    title: "Entrega com continuidade",
    description:
      "Evoluímos o sistema junto com a operação. Não desaparecemos após o lançamento. O produto cresce conforme o negócio cresce — sem reescritas, sem refatorações de pânico.",
  },
];

const naoFazemos = [
  "Não replicamos templates com branding diferente",
  "Não entregamos código sem contexto operacional",
  "Não somamos funcionalidades sem questionamento estratégico",
  "Não construímos sistemas que dependem de uma consultoria para ser usados",
  "Não desaparecemos após o lançamento",
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
      "Plataformas de matching entre imóveis, compradores e oportunidades, com lógica de distribuição de leads, rastreabilidade e automação de fluxos operacionais.",
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
      "Sistemas para centralizar processos legais, automatizar prazos críticos e eliminar a dependência de planilhas em operações que exigem rastreabilidade total.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#00C853" strokeWidth="1.5" />
        <path d="M11 7v4l3 3" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Operações complexas",
    description:
      "Plataformas para contextos de alta exigência técnica, lógica de negócio proprietária e fluxos que não podem depender de soluções de prateleira.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function EmpresaPage() {
  return (
    <main className="bg-[#0B0B0F] min-h-screen">
      <Header />

      <InternalHero
        eyebrow="Empresa"
        title="A Axion projeta sistemas com mentalidade de produto"
        titleMuted="— não como projetos de TI"
        subtitle="Somos uma empresa de tecnologia focada em arquitetura, automação e construção de sistemas preparados para operar em produção — com precisão e visão de longo prazo."
      />

      {/* ── Manifesto ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left — sticky label */}
            <div className="lg:sticky lg:top-28 space-y-5">
              <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
                Quem somos
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
                Construímos sistemas que sustentam operações reais
              </h2>
            </div>

            {/* Right — manifesto blocks */}
            <div className="space-y-8">
              <p className="text-xl text-white/70 leading-relaxed">
                A maioria das empresas opera com sistemas que nunca foram projetados para elas. Ferramentas genéricas adaptadas com esforço. Planilhas disfarçadas de processo. Automações que quebram quando o negócio cresce.
              </p>
              <p className="text-xl text-white/70 leading-relaxed">
                Ferramentas genéricas têm custos ocultos: tempo perdido em adaptação, equipes trabalhando em torno das limitações do software, e um teto de crescimento que ninguém percebe até bater nele.
              </p>
              <p className="text-xl text-white font-medium leading-relaxed">
                A Axion nasce para resolver isso.
              </p>
              <p className="text-xl text-white/70 leading-relaxed">
                Cada sistema que construímos começa pelo entendimento da operação real — e evolui como produto, não como projeto de TI. A diferença não é só técnica. É filosófica.
              </p>

              {/* Belief statement */}
              <div className="relative mt-8 rounded-xl border border-[#163324] bg-[#060E08] p-7 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(0,200,83,0.08) 0%, transparent 70%)" }}
                />
                <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium mb-3">O que acreditamos</p>
                <p className="text-lg text-white leading-relaxed">
                  &ldquo;Tecnologia, quando bem arquitetada, não é uma camada sobre a operação — ela <em>se torna</em> a operação.&rdquo;
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Princípios ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#121217] border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 space-y-5">
            <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
              Princípios
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
              O que nos guia em cada projeto
            </h2>
            <p className="text-lg text-white/65 leading-relaxed">
              Não são valores decorativos. São critérios de decisão aplicados em cada arquitetura que desenhamos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {principios.map((p) => (
              <div
                key={p.number}
                className="card-glow group flex gap-6 p-8 bg-[#0E0E14] border border-[#1E1E28] rounded-xl hover:bg-[#0C0C12] transition-colors duration-200"
              >
                <span className="text-sm font-mono text-[#2E2E40] group-hover:text-[#00C853] transition-colors duration-200 shrink-0 pt-0.5">
                  {p.number}
                </span>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-base text-[#8A8A98] leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filosofia ────────────────────────────────────────────────────────── */}
      <section
        id="filosofia"
        className="relative py-24 px-6 border-t border-[#163324] overflow-hidden"
        style={{ background: "#060E08" }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hex-grid" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(6,14,8,0.96) 0%, rgba(6,14,8,0.6) 60%, transparent 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-5">
            <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
              Filosofia
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
              Precisão como padrão,{" "}
              <span className="text-[#7A7A8A]">não como exceção</span>
            </h2>
            <p className="text-lg text-white/65 leading-relaxed">
              Esses não são pilares de apresentação. São as lentes pelas quais avaliamos cada decisão de produto.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {filosofiaItems.map((item) => (
              <div
                key={item.title}
                className="card-glow bg-[#0C150E] border border-[#1A2E1F] rounded-xl p-8 space-y-5 hover:bg-[#0F1A11] transition-colors duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl border border-[#1A2E1F] bg-[#060E08] flex items-center justify-center group-hover:border-[#00C853]/25 transition-colors duration-200">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-base text-[#8A8A98] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Método ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <div className="lg:sticky lg:top-28 space-y-6">
              <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
                Método
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
                Sistemas vivos,{" "}
                <span className="text-[#7A7A8A]">não entregas pontuais</span>
              </h2>
              <p className="text-lg text-white/65 leading-relaxed">
                A Axion não trata software como peça isolada. Cada sistema é conectado ao negócio, à equipe e à estratégia da empresa — e evolui junto com eles.
              </p>
            </div>

            <div className="space-y-3">
              {metodoItems.map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-6 p-8 border-l-2 border-l-[#00C853]/40 border border-[#1E1E28] bg-[#0E0E14] hover:bg-[#0C0C12] hover:border-l-[#00C853] transition-all duration-200"
                >
                  <span className="text-sm font-mono text-[#2E2E40] group-hover:text-[#00C853] transition-colors duration-200 shrink-0 pt-0.5">
                    {item.number}
                  </span>
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-base text-[#8A8A98] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── O que não fazemos ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#121217] border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <div className="space-y-5">
              <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
                Posicionamento
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
                O que nós não fazemos
              </h2>
              <p className="text-lg text-white/65 leading-relaxed">
                Deixar claro o que não fazemos é tão importante quanto explicar o que fazemos. Define quem somos para as empresas certas.
              </p>
            </div>

            <div className="space-y-4">
              {naoFazemos.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-[#1A1A22] last:border-0">
                  <div className="mt-1.5 w-4 h-4 rounded-full border border-[#3A2A2A] bg-[#1A1010] flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8A4444]" />
                  </div>
                  <p className="text-base text-white/70 leading-relaxed">{item}</p>
                </div>
              ))}
              <p className="text-base text-white/50 pt-2 leading-relaxed">
                Essas escolhas não limitam o que construímos. Determinam como construímos — e para quem.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Aplicações ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-5">
            <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
              Aplicações
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
              Sistemas aplicados em operações reais
            </h2>
            <p className="text-lg text-white/65 leading-relaxed">
              Contextos diferentes, mesma exigência de precisão, arquitetura e resultado.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {setoresItems.map((setor) => (
              <div
                key={setor.label}
                className="card-glow bg-[#0E0E14] border border-[#1E1E28] rounded-xl p-8 space-y-5 hover:bg-[#0C0C12] transition-colors duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl border border-[#1E1E28] bg-[#0B0B10] flex items-center justify-center group-hover:border-[#00C853]/25 transition-colors duration-200">
                  {setor.icon}
                </div>
                <div className="space-y-2.5">
                  <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
                    {setor.label}
                  </p>
                  <p className="text-base text-[#8A8A98] leading-relaxed">
                    {setor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/solucoes"
            className="inline-flex items-center gap-2 text-base text-[#8A8A98] hover:text-white transition-colors duration-200"
          >
            Ver todas as soluções
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <CTASection
        title="Vamos conversar sobre o seu sistema"
        subtitle="Se sua operação exige mais clareza, automação e estrutura, a Axion pode construir isso com você — começando por um diagnóstico honesto."
        primaryLabel="Solicitar diagnóstico gratuito"
        primaryHref="/contato"
        secondaryLabel="Ver soluções"
        secondaryHref="/solucoes"
        microcopy="Sem compromisso. Conversa técnica, direta ao ponto."
      />

      <Footer />
    </main>
  );
}
