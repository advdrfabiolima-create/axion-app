"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIntro } from "./BrandIntroWrapper";
import HeroCanvas from "./HeroCanvas";

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const transition = (delay: number) => ({
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
  delay,
});

export default function Hero() {
  const { introComplete } = useIntro();
  const animate = introComplete ? "visible" : "hidden";

  return (
    <section className="relative pt-36 pb-32 px-6 overflow-hidden">

      {/* Background image */}
      <Image
        src="/hero1.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />

      {/* Base dark overlay — slightly less opaque on the right to preserve hexagonal depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,11,15,0.52) 0%, rgba(11,11,15,0.50) 44%, rgba(11,11,15,0.41) 100%)",
        }}
      />

      {/* Left-side gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,11,15,1) 45%, rgba(11,11,15,0.85) 60%, rgba(11,11,15,0.6) 70%, rgba(11,11,15,0) 85%)",
        }}
      />

      {/* Subtle green ambient glow — left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 18% 55%, rgba(0,200,83,0.045) 0%, transparent 70%)",
        }}
      />

      {/* Soft focal light — right center, adds perceived depth without brightness */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 52% 68% at 67% 48%, rgba(255,255,255,0.032) 0%, transparent 65%)",
        }}
      />

      {/* Green atmospheric depth — right side only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(0,200,83,0.09) 0%, transparent 60%)",
        }}
      />

      {/* Animated canvas — particles + breathing glow + mouse parallax */}
      <HeroCanvas />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 3 }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Content */}
          <div className="space-y-10">

            {/* Badge */}
            <motion.div
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0)}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-[#1E1E28] bg-[#121217]/80 backdrop-blur-sm"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-badge-pulse absolute inline-flex w-full h-full rounded-full bg-[#00C853] opacity-60" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00C853]" />
              </span>
              <span className="text-xs text-[#8A8A93] tracking-wide">
                Plataforma de automação inteligente
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0.08)}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight"
            >
              <span className="text-white">Sistemas inteligentes para operações que{" "}</span>
              <span className="text-gradient">não podem falhar</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0.16)}
              className="text-lg text-white/70 leading-relaxed max-w-[520px]"
            >
              Transformamos operações complexas em sistemas automatizados, previsíveis e escaláveis.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0.24)}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C853] text-black font-semibold text-sm rounded hover:bg-[#00B84A] transition-all duration-200 shadow-[0_0_20px_rgba(0,200,83,0.25)] hover:shadow-[0_0_36px_rgba(0,200,83,0.45)]"
              >
                Solicitar demonstração
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#2E2E38] text-[#8A8A93] font-medium text-sm rounded hover:border-[#3E3E48] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              >
                Ver como funciona
              </Link>
            </motion.div>

            {/* Micro text */}
            <motion.p
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0.3)}
              className="text-xs text-[#3A3A46]"
            >
              Sem ferramentas genéricas. Sem improviso. Apenas sistemas pensados para a sua operação.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0.38)}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 border-t border-[#18181F]"
            >
              {[
                { value: "99.9%", label: "Uptime garantido" },
                { value: "3x", label: "Mais eficiência" },
                { value: "< 48h", label: "Ativação em produção" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4 pt-2">
                  {i > 0 && <div className="w-px h-8 bg-[#1E1E28]" />}
                  <div className="space-y-0.5">
                    <p className="text-xl font-bold text-white tracking-tight">{stat.value}</p>
                    <p className="text-xs text-[#55555F]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28"
        style={{ background: "linear-gradient(to bottom, transparent, #0B0B0F)" }}
      />
    </section>
  );
}
