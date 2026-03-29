import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import ValueProposition from "./components/ValueProposition";
import Features from "./components/Features";
import ProductVisual from "./components/ProductVisual";
import Differentiation from "./components/Differentiation";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B0B0F] min-h-screen">
      <Header />
      <Hero />
      <TrustSection />
      <ValueProposition />
      <Features />
      <ProductVisual />
      <Differentiation />
      <FinalCTA />
      <Footer />
    </main>
  );
}
