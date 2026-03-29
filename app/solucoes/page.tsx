import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InternalHero from "../components/shared/InternalHero";
import CTASection from "../components/shared/CTASection";

export const metadata: Metadata = {
  title: "Axion Systems | Soluções",
  description:
    "Sistemas construídos para operar com precisão — plataformas sob medida, dashboards, automação de processos e sistemas de matching.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const solucoes = [
  {
    eyebrow: "01",
    title: "Sistemas desenhados para o seu fluxo",
    titleMuted: "— não adaptados depois",
    insight:
      "A estrutura do sistema nasce da operação, não de um template.",
    desc: "Cada plataforma que construímos começa pelo entendimento do fluxo real — não pela escolha de uma ferramenta. O resultado é um sistema que encaixa na operação, não o contrário.",
    benefits: [
      "Arquitetura desenhada para o fluxo real da operação",
      "Interface orientada ao usuário final, não ao desenvolvedor",
      "Estrutura modular que evolui com o negócio",
      "Integração com sistemas e APIs existentes",
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
              className={`rounded-lg border p-3 flex flex-col gap-2 ${
                m.active
                  ? "border-[#00C853]/30 bg-[#00C853]/5"
                  : "border-[#1E1E28] bg-[#0B0B0F]"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  m.active ? "bg-[#00C853]" : "bg-[#2E2E38]"
                }`}
              />
              <p
                className={`text-[10px] font-medium ${
                  m.active ? "text-[#00C853]" : "text-[#55555F]"
                }`}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg border border-[#1E1E28] bg-[#0B0B0F] p-4 space-y-3">
          <p className="text-[10px] text-[#55555F] uppercase tracking-widest">
            Fluxo operacional
          </p>
          {["Entrada de dados", "Processamento", "Saída estruturada"].map(
            (step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="text-[10px] text-[#2E2E38] font-mono w-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-[#1E1E28]" />
                <span className="text-[10px] text-[#8A8A93]">{step}</span>
              </div>
            )
          )}
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
    desc: "Projetamos painéis com hierarquia de informação clara — o que é crítico aparece primeiro, o que é acessório fica acessível sem poluir. Cada visualização tem um propósito de decisão.",
    benefits: [
      "Hierarquia de informação orientada à decisão",
      "Atualização em tempo real ou sob demanda",
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
            { label: "Receita", value: "R$ 1.2M", up: true },
            { label: "Conversão", value: "31.4%", up: true },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-[#1E1E28] bg-[#0B0B0F] p-3 space-y-1"
            >
              <p className="text-[9px] text-[#55555F] uppercase tracking-widest">
                {m.label}
              </p>
              <p className="text-sm font-bold text-white">{m.value}</p>
              <p className="text-[9px] text-[#00C853]">↑ Acima da meta</p>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg border border-[#1E1E28] bg-[#0B0B0F] p-4">
          <p className="text-[10px] text-[#55555F] uppercase tracking-widest mb-3">
            Tendência
          </p>
          <svg viewBox="0 0 200 60" className="w-full" preserveAspectRatio="none">
            {[15, 30, 45].map((y) => (
              <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#1E1E28" strokeWidth="0.5" />
            ))}
            <polyline
              points="0,50 28,42 56,44 84,28 112,30 140,14 168,18 200,6"
              fill="none"
              stroke="#00C853"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <polygon
              points="0,50 28,42 56,44 84,28 112,30 140,14 168,18 200,6 200,60 0,60"
              fill="#00C853"
              fillOpacity="0.04"
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
    desc: "Automatizamos os fluxos que mais consomem atenção e mais expõem a operação a erros. O resultado não é apenas agilidade — é previsibilidade e rastreabilidade em cada etapa.",
    benefits: [
      "Eliminação de tarefas manuais e repetitivas",
      "Gatilhos e regras configuráveis por evento",
      "Notificações, aprovações e escalações automáticas",
      "Logs e rastreabilidade completa de cada ação",
    ],
    aplicacoes: [
      "Onboarding automatizado de clientes",
      "Fluxos de aprovação com escalação",
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
        ].map((step, i) => (
          <div
            key={step.label}
            className={`flex items-center gap-4 p-3 rounded-lg border transition-colors ${
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
            <span
              className={`text-xs ${
                step.status === "pending" ? "text-[#55555F]" : "text-[#8A8A93]"
              }`}
            >
              {step.label}
            </span>
            {step.status === "done" && (
              <span className="ml-auto text-[9px] text-[#00C853]">✓</span>
            )}
            {step.status === "active" && (
              <span className="ml-auto text-[9px] text-[#00C853] animate-pulse">
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
    desc: "Construímos sistemas que aplicam critérios de negócio complexos para conectar entidades com precisão — não apenas por similaridade, mas por compatibilidade real de contexto e intenção.",
    benefits: [
      "Critérios de correspondência flexíveis e configuráveis",
      "Score e ranking por relevância contextual",
      "Lógica de negócio embutida no algoritmo",
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
            {["Entidade A", "Entidade B", "Entidade C"].map((e, i) => (
              <div
                key={e}
                className="rounded border border-[#1E1E28] bg-[#0B0B0F] px-3 py-2"
              >
                <p className="text-[10px] text-[#8A8A93]">{e}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1 px-2">
            <div className="w-px flex-1 bg-[#1E1E28]" />
            <div className="w-6 h-6 rounded-full border border-[#00C853]/40 bg-[#00C853]/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#00C853]" />
            </div>
            <div className="w-px flex-1 bg-[#1E1E28]" />
          </div>
          <div className="flex-1 space-y-2">
            {[
              { label: "Match 1", score: "98%" },
              { label: "Match 2", score: "74%" },
              { label: "Match 3", score: "61%" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded border border-[#1E1E28] bg-[#0B0B0F] px-3 py-2 flex items-center justify-between"
              >
                <p className="text-[10px] text-[#8A8A93]">{m.label}</p>
                <p className="text-[10px] font-mono text-[#00C853]">
                  {m.score}
                </p>
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
      "Mapeamos fluxos, decisões e gargalos reais antes de qualquer definição técnica.",
  },
  {
    number: "02",
    title: "Arquitetura do sistema",
    description:
      "Projetamos uma estrutura clara, modular e alinhada com a operação.",
  },
  {
    number: "03",
    title: "Evolução contínua",
    description:
      "O sistema evolui com o negócio, sem recomeços ou refatorações desnecessárias.",
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
        subtitle="Cada sistema que a Axion constrói resolve um problema operacional real — com arquitetura clara, automação e lógica de produto."
      />

      {/* Solution blocks */}
      {solucoes.map((solucao, index) => (
        <section
          key={solucao.eyebrow}
          className={`py-24 px-6 border-t border-[#1E1E28] ${
            index % 2 !== 0 ? "bg-[#121217]" : ""
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
                <p className="text-xs text-[#55555F] font-mono tracking-widest">
                  {solucao.eyebrow}
                </p>
                <div className="space-y-3">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                    {solucao.title}
                    {solucao.titleMuted && (
                      <span className="text-[#8A8A93]"> {solucao.titleMuted}</span>
                    )}
                  </h2>
                  {/* Insight line */}
                  <p className="text-sm text-[#00C853] font-medium border-l-2 border-[#00C853]/40 pl-4 py-1">
                    {solucao.insight}
                  </p>
                </div>
                <p className="text-[#8A8A93] leading-relaxed max-w-lg">
                  {solucao.desc}
                </p>
                <ul className="space-y-3">
                  {solucao.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full border border-[#00C853]/40 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
                      </div>
                      <p className="text-sm text-[#8A8A93]">{b}</p>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 space-y-3">
                  <p className="text-[10px] text-[#55555F] uppercase tracking-widest">
                    Aplicações reais
                  </p>
                  <p className="text-xs text-[#55555F] mb-2">
                    Operações que já utilizam esse tipo de sistema:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solucao.aplicacoes.map((a) => (
                      <span
                        key={a}
                        className="text-xs text-[#8A8A93] border border-[#1E1E28] rounded px-3 py-1.5 bg-[#121217]"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual side */}
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="rounded-xl border border-[#1E1E28] bg-[#0F0F14] p-8 min-h-[320px] flex flex-col justify-center">
                  {solucao.visual}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Como são construídos */}
      <section className="py-24 px-6 border-t border-[#1E1E28]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
              Processo
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
              Como esses sistemas são construídos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="card-glow bg-[#121217] border border-[#1E1E28] rounded-xl p-8 space-y-4 hover:bg-[#0F0F14] transition-colors duration-200 group"
              >
                <span className="text-xs font-mono text-[#2E2E38] group-hover:text-[#00C853] transition-colors duration-200">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-[#8A8A93] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/empresa"
              className="inline-flex items-center gap-2 text-sm text-[#8A8A93] hover:text-white transition-colors duration-200"
            >
              Conhecer a filosofia da Axion
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
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para operar com mais precisão?"
        subtitle="Se sua operação exige mais estrutura, automação e clareza, a Axion pode construir isso com você."
        primaryLabel="Solicitar demonstração"
        primaryHref="/contato"
        secondaryLabel="Falar com a equipe"
        secondaryHref="/contato"
        microcopy="Sem compromisso. Conversa técnica direta."
      />

      <Footer />
    </main>
  );
}
