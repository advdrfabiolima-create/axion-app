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

      {/* Base dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,11,15,0.58) 0%, rgba(11,11,15,0.52) 44%, rgba(11,11,15,0.42) 100%)",
        }}
      />

      {/* Left-side gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,11,15,1) 40%, rgba(11,11,15,0.88) 58%, rgba(11,11,15,0.6) 72%, rgba(11,11,15,0) 88%)",
        }}
      />

      {/* Green ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 18% 55%, rgba(0,200,83,0.05) 0%, transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(0,200,83,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Animated canvas */}
      <HeroCanvas />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 3 }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Content */}
          <div className="space-y-9">

            {/* Badge */}
            <motion.div
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0)}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1E1E2C] bg-[#121217]/85 backdrop-blur-sm"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-badge-pulse absolute inline-flex w-full h-full rounded-full bg-[#00C853] opacity-60" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00C853]" />
              </span>
              <span className="text-sm text-[#9A9AA8] tracking-wide">
                Tecnologia premium para operações B2B
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0.08)}
              className="text-[2.6rem] lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.06] tracking-tight"
            >
              <span className="text-white">Sistemas sob medida para operações que{" "}</span>
              <span className="text-gradient">não podem falhar</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0.16)}
              className="text-[1.125rem] text-white/80 leading-[1.75] max-w-[520px]"
            >
              Desenvolvemos sistemas que automatizam operações, eliminam retrabalho e escalam com o seu negócio — com arquitetura pensada como produto, não como projeto.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0.24)}
              className="flex flex-wrap gap-3.5"
            >
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00C853] text-black font-semibold text-[15px] rounded hover:bg-[#00B84A] transition-all duration-200 shadow-[0_0_28px_rgba(0,200,83,0.3)] hover:shadow-[0_0_44px_rgba(0,200,83,0.5)]"
              >
                Solicitar diagnóstico gratuito
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#2E2E3C] text-white/80 font-medium text-[15px] rounded hover:border-[#3E3E4E] hover:text-white hover:bg-white/[0.05] transition-all duration-200"
              >
                Ver como funciona
              </Link>
            </motion.div>

            {/* Trust tagline */}
            <motion.p
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0.3)}
              className="text-sm text-[#6B6B7A]"
            >
              Sem ferramentas genéricas. Sem improviso. Apenas sistemas pensados para a sua operação.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={item}
              initial="hidden"
              animate={animate}
              transition={transition(0.38)}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-5 border-t border-[#18181F]"
            >
              {[
                { value: "99.9%", label: "Uptime garantido" },
                { value: "3×", label: "Eficiência operacional" },
                { value: "< 48h", label: "Ativação em produção" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4">
                  {i > 0 && <div className="w-px h-9 bg-[#1E1E28]" />}
                  <div className="space-y-1">
                    <p className="text-[1.5rem] font-bold text-white tracking-tight">{stat.value}</p>
                    <p className="text-sm text-[#7A7A88]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right — Dashboard mockup */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={animate}
            transition={transition(0.45)}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl border border-[#1E1E2A] bg-[#0C0C10]/95 backdrop-blur-sm overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04)]">

              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#18182A] bg-[#09090E]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]/60" />
                  </div>
                  <div className="ml-2 flex items-center gap-1.5 text-[11px] text-[#4A4A5A] bg-[#111118] rounded px-3 py-1 border border-[#1A1A26]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
                    axion · painel operacional
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#3A3A4A] border border-[#1A1A26] rounded px-2 py-0.5">v2.4.1</span>
                  <div className="w-6 h-6 rounded-md bg-[#00C853]/10 border border-[#00C853]/25 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#00C853]" />
                  </div>
                </div>
              </div>

              {/* Nav tabs */}
              <div className="flex items-center gap-1 px-4 py-2.5 border-b border-[#14141E] bg-[#0A0A0F]">
                {["Visão Geral", "Automações", "Integrações", "Relatórios"].map((tab, i) => (
                  <span key={tab} className={`text-[11px] px-3 py-1.5 rounded cursor-pointer transition-colors ${i === 0 ? "bg-[#00C853]/12 text-[#00C853] border border-[#00C853]/20" : "text-[#42425A] hover:text-[#7A7A8A]"}`}>
                    {tab}
                  </span>
                ))}
              </div>

              <div className="p-5 space-y-4">

                {/* Status banner */}
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#00C853]/[0.05] border border-[#00C853]/15">
                  <div className="flex items-center gap-2">
                    <span className="relative flex w-2 h-2">
                      <span className="animate-badge-pulse absolute inline-flex w-full h-full rounded-full bg-[#00C853] opacity-60" />
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00C853]" />
                    </span>
                    <span className="text-xs text-[#00C853] font-medium">Todos os sistemas operacionais</span>
                  </div>
                  <div className="ml-auto text-[10px] text-[#3E4E46]">Verificado agora</div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { l: "Proc./hora", v: "2.4K", d: "+18%" },
                    { l: "Sucesso", v: "99.8%", d: "+0.3%" },
                    { l: "Tempo médio", v: "1.2s", d: "−40%" },
                    { l: "Economia", v: "R$38K", d: "+12%" },
                  ].map((m) => (
                    <div key={m.l} className="bg-[#0A0A0F] border border-[#18182A] rounded-lg p-3 space-y-1.5">
                      <p className="text-[9px] text-[#42425A] uppercase tracking-widest leading-tight">{m.l}</p>
                      <p className="text-sm font-bold text-white">{m.v}</p>
                      <p className="text-[9px] text-[#00C853] font-medium">{m.d}</p>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-[#0A0A0F] border border-[#18182A] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-white font-medium">Volume de Automações</p>
                      <p className="text-[10px] text-[#42425A] mt-0.5">últimas 12 semanas</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#00C853]" />
                        <span className="text-[10px] text-[#5A5A6A]">Este período</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#2A2A3A]" />
                        <span className="text-[10px] text-[#3A3A4A]">Anterior</span>
                      </div>
                    </div>
                  </div>
                  <svg viewBox="0 0 400 72" className="w-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00C853" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#00C853" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[18, 36, 54].map((y) => (
                      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#18182A" strokeWidth="0.5" />
                    ))}
                    <polyline
                      points="0,55 45,50 90,53 135,44 180,47 225,38 270,40 315,46 360,41 400,50"
                      fill="none" stroke="#252535" strokeWidth="1.5" strokeDasharray="4 3" strokeLinejoin="round"
                    />
                    <polygon
                      points="0,48 45,40 90,42 135,20 180,24 225,6 270,8 315,14 360,4 400,2 400,72 0,72"
                      fill="url(#heroChartGrad)"
                    />
                    <polyline
                      points="0,48 45,40 90,42 135,20 180,24 225,6 270,8 315,14 360,4 400,2"
                      fill="none" stroke="#00C853" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Active flows */}
                <div className="bg-[#0A0A0F] border border-[#18182A] rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#14141E]">
                    <p className="text-[10px] text-[#5A5A6A] font-medium uppercase tracking-widest">Fluxos Ativos</p>
                    <span className="text-[9px] text-[#00C853] bg-[#00C853]/10 rounded-full px-2 py-0.5 border border-[#00C853]/15">8 rodando</span>
                  </div>
                  {[
                    { name: "Distribuição de leads", status: "Ativo", rate: "100%" },
                    { name: "Sincronização de dados", status: "Ativo", rate: "99.9%" },
                    { name: "Relatório automático", status: "Agendado", rate: "—" },
                  ].map((flow) => (
                    <div key={flow.name} className="flex items-center justify-between px-4 py-2.5 border-b border-[#14141E] last:border-0 hover:bg-[#0E0E14] transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${flow.status === "Ativo" ? "bg-[#00C853]" : "bg-[#3A3A4A]"}`} />
                        <span className="text-[10px] text-[#8A8A98]">{flow.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] text-[#00C853]">{flow.rate}</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded-full ${flow.status === "Ativo" ? "bg-[#00C853]/10 text-[#00C853]" : "bg-[#252535] text-[#5A5A68]"}`}>{flow.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#0E0E14] border border-[#1E1E2A] rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00C853]/10 border border-[#00C853]/25 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 3" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">Sistema implantado</p>
                  <p className="text-[10px] text-[#5A5A6A] mt-0.5">Imobmatch · 2 dias atrás</p>
                </div>
              </div>
            </div>

            {/* Floating metric badge */}
            <div className="absolute -top-5 -right-5 bg-[#0E0E14] border border-[#1E1E2A] rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#00C853]/10 border border-[#00C853]/25 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 10.5V7M5.5 10.5V4M9 10.5V6M12.5 10.5V2" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">−90% tempo operacional</p>
                  <p className="text-[10px] text-[#5A5A6A] mt-0.5">média dos últimos projetos</p>
                </div>
              </div>
            </div>

          </motion.div>

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
