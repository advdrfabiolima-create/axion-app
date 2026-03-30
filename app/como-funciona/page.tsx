import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import InternalHero from "../components/shared/InternalHero";
import CTASection from "../components/shared/CTASection";

export const metadata: Metadata = {
  title: "Axion Systems | Como funciona",
  description:
    "Entenda como a Axion desenvolve e entrega sistemas — da análise da operação à implantação em produção, com método e clareza.",
};

export default function ComoFuncionaPage() {
  return (
    <main className="bg-[#0B0B0F] min-h-screen">
      <Header />

      <InternalHero
        eyebrow="Como funciona"
        title="Da análise à operação,"
        titleMuted="com método e clareza"
        subtitle="Cada sistema é desenvolvido com base na realidade da operação, com etapas bem definidas, validação contínua e foco em entrega funcional."
      />

      <HowItWorks />

      <CTASection
        title="Pronto para começar?"
        subtitle="Converse com a equipe da Axion e entenda como podemos estruturar a sua operação."
        primaryLabel="Solicitar demonstração"
        primaryHref="/contato"
        secondaryLabel="Conhecer as soluções"
        secondaryHref="/solucoes"
        microcopy="Sem compromisso. Conversa técnica direta."
      />

      <Footer />
    </main>
  );
}
