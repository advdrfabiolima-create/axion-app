import type { Metadata } from "next";
import BrandIntroWrapper from "./components/BrandIntroWrapper";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import MetricsSection from "./components/MetricsSection";
import ValueProposition from "./components/ValueProposition";
import HowItWorks from "./components/HowItWorks";
import TechShowcase from "./components/TechShowcase";
import ProductVisual from "./components/ProductVisual";
import TestimonialsSection from "./components/TestimonialsSection";
import Differentiation from "./components/Differentiation";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Axion Systems | Sistemas inteligentes para negócios que exigem precisão",
  description:
    "Projetamos sistemas que automatizam operações, conectam dados e eliminam complexidade — com precisão, performance e lógica de produto.",
};

export default function Home() {
  return (
    <BrandIntroWrapper>
    <main className="bg-[#0B0B0F] min-h-screen">
      <Header />
      <Hero />
      <TrustSection />
      <MetricsSection />
      <ValueProposition />
      <HowItWorks />
      <TechShowcase />
      <ProductVisual />
      <TestimonialsSection />
      <Differentiation />
      <FinalCTA />
      <Footer />
    </main>
    </BrandIntroWrapper>
  );
}
