import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InternalHero from "../components/shared/InternalHero";
import CTASection from "../components/shared/CTASection";

export const metadata: Metadata = {
  title: "Axion Systems | Soluções",
  description:
    "Sistemas construídos para operar com precisão — plataformas sob medida, dashboards, automação de processos, integrações e sistemas de matching.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const solucoes = [
  {
    eyebrow: "01",
    title: "Sistemas desenhados para o seu fluxo",
    titleMuted: "— não adaptados depois",
    insight:
      "A estrutura do sistema nasce da operação, não de um template.",
    desc: "Cada plataforma que construímos começa pelo entendimento do fluxo real — não pela escolha de uma ferramenta. O resultado é um sistema que encaixa na operação, cresce com ela e não exige gambiarras para funcionar no mundo real.",
    benefits: [
      "Arquitetura desenhada para o fluxo real da operação",
      "Interface orientada ao usuário final, não ao desenvolvedor",
      "Estrutura modular que evolui com o negócio",
      "Integração nativa com sistemas e APIs existentes",
    ],
    aplicacoes: [
      "Gestão operacional em tempo real",
      "Portais e plataformas de marketplace",
      "Sistemas de workflow e aprovação",
      "Aplicações corporativas sob medida",
    ],
    visual: (
      <div className="w-full h-full flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Módulo A", active: true },
            { label: "Módulo B", active: true },
            { label: "Módulo C", active: false },
          ].map((m) => (
            <div
              key={m.label}
              className={`rounded-lg border p-3 flex flex-col gap-2.5 ${
                m.active
                  ? "border-[#00C853]/30 bg-[#00C853]/5"
                  : "border-[#1E1E28] bg-[#0B0B0F]"
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${m.active ? "bg-[#00C853]" : "bg-[#2E2E38]"}`} />
              <p className={`text-xs font-medium ${m.active ? "text-[#00C853]" : "text-[#4A4A58]"}`}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg border border-[#1E1E28] bg-[#0B0B0F] p-5 space-y-4">
          <p className="text-xs text-[#5A5A6A] uppercase tracking-widest font-medium">
            Fluxo operacional
          </p>
          {["Entrada de dados", "Processamento", "Saída estruturada"].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="text-xs text-[#3A3A4A] font-mono w-5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 h-px bg-[#1E1E28]" />
              <span className="text-xs text-[#8A8A98]">{step}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    eyebrow: "02",
    title: "Decisão não vem de dados",
    titleMuted: "— vem da forma como eles são organizados",
    insight:
      "Um painel ruim com dados corretos ainda leva à decisão errada.",
    desc: "Projetamos painéis com hierarquia de informação clara — o que é crítico aparece primeiro, o que é acessório fica acessível sem poluir a visão. Cada visualização tem um propósito de decisão definido antes do design.",
    benefits: [
      "Hierarquia de informação orientada à decisão real",
      "Atualização em tempo real ou sob demanda configurável",
      "Filtros e segmentações para análise precisa",
      "Design que elimina sobrecarga cognitiva",
    ],
    aplicacoes: [
      "Painéis executivos e monitores de KPI",
      "Dashboards operacionais em tempo real",
      "Relatórios automatizados por período",
      "Monitoramento de performance de equipes",
    ],
    visual: (
      <div className="w-full h-full flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Receita", value: "R$ 1.2M", trend: "↑ Acima da meta" },
            { label: "Conversão", value: "31.4%", trend: "↑ +4.2% vs meta" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-[#1E1E28] bg-[#0B0B0F] p-4 space-y-1.5">
              <p className="text-xs text-[#5A5A6A] uppercase tracking-widest">{m.label}</p>
              <p className="text-base font-bold text-white">{m.value}</p>
              <p className="text-xs text-[#00C853]">{m.trend}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg border border-[#1E1E28] bg-[#0B0B0F] p-4">
          <p className="text-xs text-[#5A5A6A] uppercase tracking-widest mb-3">Tendência</p>
          <svg viewBox="0 0 200 60" className="w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="solGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00C853" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#00C853" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[15, 30, 45].map((y) => (
              <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#1E1E28" strokeWidth="0.5" />
            ))}
            <polygon
              points="0,50 28,42 56,44 84,28 112,30 140,14 168,18 200,6 200,60 0,60"
              fill="url(#solGrad)"
            />
            <polyline
              points="0,50 28,42 56,44 84,28 112,30 140,14 168,18 200,6"
              fill="none" stroke="#00C853" strokeWidth="1.8" strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    eyebrow: "03",
    title: "Automação não é sobre velocidade",
    titleMuted: "— é sobre consistência operacional",
    insight:
      "O problema não é lentidão. É variação. Cada execução manual é um risco de inconsistência.",
    desc: "Automatizamos os fluxos que mais consomem atenção e mais expõem a operação a erros. O resultado não é apenas agilidade — é previsibilidade e rastreabilidade completa em cada etapa do processo.",
    benefits: [
      "Eliminação de tarefas manuais e repetitivas com alto risco",
      "Gatilhos e regras configuráveis por evento de negócio",
      "Notificações, aprovações e escalações automáticas",
      "Logs e rastreabilidade completa de cada ação executada",
    ],
    aplicacoes: [
      "Onboarding automatizado de clientes",
      "Fluxos de aprovação com escalação por prazo",
      "Geração e envio automático de documentos",
      "Integração entre plataformas e sistemas legados",
    ],
    visual: (
      <div className="w-full h-full flex flex-col gap-3">
        {[
          { label: "Gatilho detectado", status: "done" },
          { label: "Validação de regras", status: "done" },
          { label: "Execução do fluxo", status: "active" },
          { label: "Notificação enviada", status: "pending" },
        ].map((step) => (
          <div
            key={step.label}
            className={`flex items-center gap-4 p-3.5 rounded-lg border transition-colors ${
              step.status === "done"
                ? "border-[#00C853]/20 bg-[#00C853]/5"
                : step.status === "active"
                ? "border-[#00C853]/40 bg-[#00C853]/10"
                : "border-[#1E1E28] bg-[#0B0B0F]"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full shrink-0 ${
                step.status === "done"
                  ? "bg-[#00C853]"
                  : step.status === "active"
                  ? "bg-[#00C853] ring-2 ring-[#00C853]/30"
                  : "bg-[#2E2E38]"
              }`}
            />
            <span className={`text-sm ${step.status === "pending" ? "text-[#4A4A58]" : "text-[#8A8A98]"}`}>
              {step.label}
            </span>
            {step.status === "done" && (
              <span className="ml-auto text-xs text-[#00C853] font-medium">✓</span>
            )}
            {step.status === "active" && (
              <span className="ml-auto text-xs text-[#00C853] font-medium animate-pulse">
                Em execução
              </span>
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    eyebrow: "04",
    title: "Matching não é filtro",
    titleMuted: "— é lógica de decisão aplicada",
    insight:
      "Um filtro retorna resultados. Um sistema de matching retorna a decisão certa.",
    desc: "Construímos sistemas que aplicam critérios de negócio complexos para conectar entidades com precisão — não apenas por similaridade, mas por compatibilidade real de contexto, intenção e regras operacionais.",
    benefits: [
      "Critérios de correspondência flexíveis e configuráveis",
      "Score e ranking por relevância contextual do negócio",
      "Lógica de negócio embutida no algoritmo de matching",
      "Interface clara para revisão e aprovação humana",
    ],
    aplicacoes: [
      "Conexão entre profissionais e oportunidades",
      "Matching entre oferta e demanda em marketplaces",
      "Sistemas de recomendação com contexto de negócio",
      "Pareamento de recursos em operações complexas",
    ],
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            {["Entidade A", "Entidade B", "Entidade C"].map((e) => (
              <div key={e} className="rounded border border-[#1E1E28] bg-[#0B0B0F] px-3 py-2.5">
                <p className="text-xs text-[#8A8A98]">{e}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1 px-2">
            <div className="w-px flex-1 bg-[#1E1E28]" />
            <div className="w-7 h-7 rounded-full border border-[#00C853]/40 bg-[#00C853]/10 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00C853]" />
            </div>
            <div className="w-px flex-1 bg-[#1E1E28]" />
          </div>
          <div className="flex-1 space-y-2">
            {[
              { label: "Match 1", score: "98%" },
              { label: "Match 2", score: "74%" },
              { label: "Match 3", score: "61%" },
            ].map((m) => (
              <div key={m.label} className="rounded border border-[#1E1E28] bg-[#0B0B0F] px-3 py-2.5 flex items-center justify-between">
                <p className="text-xs text-[#8A8A98]">{m.label}</p>
                <p className="text-xs font-mono text-[#00C853] font-medium">{m.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const processSteps = [
  {
    number: "01",
    title: "Entendimento da operação",
    description:
      "Mapeamos fluxos, decisões e gargalos reais antes de qualquer definição técnica. O sistema nasce do negócio — não o contrário.",
  },
  {
    number: "02",
    title: "Arquitetura do sistema",
    description:
      "Projetamos uma estrutura clara, modular e alinhada com a operação real, preparada para crescer sem reescritas.",
  },
  {
    number: "03",
    title: "Evolução contínua",
    description:
      "O sistema evolui com o negócio, sem recomeços ou refatorações desnecessárias. O que entregamos é uma plataforma viva.",
  },
];

const beneficiosTransversais = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2 6h6l-5 3.5 1.5 5.5L10 14l-4.5 3L7 11.5 2 8h6L10 2z" stroke="#00C853" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    title: "Sem débito técnico acumulado",
    description: "Arquitetura projetada para durar, não para funcionar só no lançamento.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#00C853" strokeWidth="1.4" />
        <path d="M7 10l2 2 4-4" stroke="#00C853" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Rastreabilidade total",
    description: "Cada ação, cada decisão e cada dado com origem e histórico claro.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="12" width="4" height="6" rx="1" stroke="#00C853" strokeWidth="1.4" />
        <rect x="8" y="8" width="4" height="10" rx="1" stroke="#00C853" strokeWidth="1.4" />
        <rect x="14" y="4" width="4" height="14" rx="1" stroke="#00C853" strokeWidth="1.4" />
      </svg>
    ),
    title: "Escalabilidade planejada",
    description: "Capacidade de crescer sem precisar recomeçar do zero em 12 meses.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 5h3.5M2 10h3.5M2 15h3.5" stroke="#00C853" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5.5 5C8 5 8 10 11 10M5.5 15C8 15 8 10 11 10" stroke="#00C853" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <path d="M11 10H18" stroke="#00C853" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Integração nativa",
    description: "Sistemas que conversam com ferramentas existentes, sem retrabalho ou sincronização manual.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function SolucoesPage() {
  return (
    <main className="bg-[#0B0B0F] min-h-screen">
      <Header />

      <InternalHero
        eyebrow="Soluções"
        title="Sistemas construídos para operar com precisão"
        subtitle="Cada sistema que a Axion constrói resolve um problema operacional real — com arquitetura clara, automação inteligente e lógica de produto pensada para escalar."
      />

      {/* ── Solution blocks ──────────────────────────────────────────────── */}
      {solucoes.map((solucao, index) => (
        <section
          key={solucao.eyebrow}
          className={`py-24 px-6 border-t border-[#1E1E28] ${
            index % 2 !== 0 ? "bg-[#0E0E14]" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid lg:grid-cols-2 gap-20 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text side */}
              <div className="space-y-8">
                <p className="text-sm text-[#5A5A6A] font-mono tracking-widest">
                  {solucao.eyebrow}
                </p>
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
                    {solucao.title}
                    {solucao.titleMuted && (
                      <span className="text-[#7A7A8A]"> {solucao.titleMuted}</span>
                    )}
                  </h2>
                  <div className="border-l-2 border-[#00C853]/40 pl-5 py-1">
                    <p className="text-base text-[#00C853] font-medium leading-relaxed">
                      {solucao.insight}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-white/65 leading-relaxed max-w-lg">
                  {solucao.desc}
                </p>
                <ul className="space-y-3.5">
                  {solucao.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3.5">
                      <div className="mt-1 w-5 h-5 rounded-full border border-[#00C853]/40 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#00C853]" />
                      </div>
                      <p className="text-base text-white/65">{b}</p>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 space-y-4">
                  <p className="text-sm text-[#5A5A6A] uppercase tracking-widest font-medium">
                    Aplicações reais
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solucao.aplicacoes.map((a) => (
                      <span
                        key={a}
                        className="text-sm text-[#9A9AA8] border border-[#1E1E28] rounded-lg px-3.5 py-1.5 bg-[#0E0E14] hover:border-[#2A2A38] hover:text-white transition-colors duration-200"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual side */}
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="rounded-2xl border border-[#1E1E28] bg-[#0F0F14] p-8 min-h-[320px] flex flex-col justify-center shadow-[0_0_48px_rgba(0,200,83,0.06),0_0_96px_rgba(0,200,83,0.03)] hover:shadow-[0_0_64px_rgba(0,200,83,0.1),0_0_128px_rgba(0,200,83,0.05)] hover:border-[#00C853]/18 transition-all duration-500">
                  {solucao.visual}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Benefícios transversais ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#121217] border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-5">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#00C853]">
              Em todas as soluções
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
              O que toda solução Axion tem por padrão
            </h2>
            <p className="text-lg text-white/65 leading-relaxed">
              Independente do tipo de sistema, esses princípios estão presentes em tudo que construímos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {beneficiosTransversais.map((b) => (
              <div
                key={b.title}
                className="card-glow bg-[#0E0E14] border border-[#1E1E28] rounded-xl p-7 space-y-4 hover:bg-[#0C0C12] transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl border border-[#1E1E28] bg-[#0B0B10] flex items-center justify-center group-hover:border-[#00C853]/25 transition-colors duration-200">
                  {b.icon}
                </div>
                <h3 className="text-base font-semibold text-white leading-snug">{b.title}</h3>
                <p className="text-sm text-[#8A8A98] leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como são construídos ─────────────────────────────────────────── */}
      <section
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
              Processo
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
              Como esses sistemas são construídos
            </h2>
            <p className="text-lg text-white/65 leading-relaxed">
              Um método que começa pelo entendimento — não pelo código.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="card-glow bg-[#0C150E] border border-[#1A2E1F] rounded-xl p-8 space-y-4 hover:bg-[#0F1A11] transition-colors duration-200 group"
              >
                <span className="text-sm font-mono text-[#2E3E30] group-hover:text-[#00C853] transition-colors duration-200">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-base text-[#8A8A98] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/empresa"
            className="inline-flex items-center gap-2 text-base text-[#8A8A98] hover:text-white transition-colors duration-200"
          >
            Conhecer a filosofia da Axion
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <CTASection
        title="Pronto para operar com mais precisão?"
        subtitle="Se sua operação exige mais estrutura, automação e clareza, a Axion pode construir isso com você — começando por um diagnóstico honesto."
        primaryLabel="Solicitar diagnóstico gratuito"
        primaryHref="/contato"
        secondaryLabel="Conhecer a Axion"
        secondaryHref="/empresa"
        microcopy="Sem compromisso. Conversa técnica, direta ao ponto."
      />

      <Footer />
    </main>
  );
}
