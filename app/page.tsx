import type { Metadata } from "next";
import BrandIntroWrapper from "./components/BrandIntroWrapper";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import MetricsSection from "./components/MetricsSection";
import PainTransformation from "./components/PainTransformation";
import NossaFilosofiaSection from "./components/NossaFilosofiaSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import TechShowcase from "./components/TechShowcase";
import ProductVisual from "./components/ProductVisual";
import TestimonialsSection from "./components/TestimonialsSection";
import Differentiation from "./components/Differentiation";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Axion Systems | Sistemas sob medida para operações que não podem falhar",
  description:
    "Desenvolvemos sistemas que automatizam operações, eliminam retrabalho e escalam com o seu negócio — com arquitetura pensada como produto, não como projeto.",
};

export default function Home() {
  return (
    <BrandIntroWrapper>
      <main className="bg-[#0B0B0F] min-h-screen">
        <Header />
        <Hero />
        <TrustSection />
        <MetricsSection />
        <PainTransformation />
        <NossaFilosofiaSection />
        <Features />
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
