"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import comoFuncionaImage from "../../imagens/Como_funciona.png";

const steps = [
  {
    number: "01",
    title: "Diagnóstico da operação",
    description:
      "Mapeamos processos, gargalos e oportunidades com foco em resultado operacional real.",
  },
  {
    number: "02",
    title: "Arquitetura do sistema",
    description:
      "Definimos a estrutura, regras e fluxos que sustentam e escalam a operação.",
  },
  {
    number: "03",
    title: "Desenvolvimento e validação",
    description:
      "Construímos com ciclos curtos, validação contínua e entrega funcional desde o início.",
  },
  {
    number: "04",
    title: "Implantação e evolução",
    description:
      "Colocamos em produção e evoluímos o sistema conforme o uso e a operação real.",
  },
];

const stepThresholds = [0.06, 0.32, 0.58, 0.84];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(-1);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 72%", "end 58%"],
  });
  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.25,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextActiveStep = stepThresholds.reduce(
      (current, threshold, index) => (latest >= threshold ? index : current),
      -1
    );

    setActiveStep((current) =>
      current === nextActiveStep ? current : nextActiveStep
    );
  });

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="relative overflow-hidden border-t border-[#163324] bg-[#060E08] px-6 py-28"
    >
      <Image
        src={comoFuncionaImage}
        alt=""
        fill
        className="absolute inset-0 object-contain object-right opacity-95 brightness-110 saturate-125"
        sizes="100vw"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#060E08_0%,#060E08_38%,rgba(6,14,8,0.82)_62%,rgba(6,14,8,0.34)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_24%_42%,rgba(6,14,8,0.74)_0%,rgba(6,14,8,0.46)_42%,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_48%,rgba(0,200,83,0.1)_0%,transparent_34%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#00C853]">
            Como funciona
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-5xl xl:text-[3.25rem]">
            Da análise à operação,{" "}
            <br className="hidden sm:block" />
            com <span className="text-[#00C853]">método</span> e{" "}
            <span className="text-[#00C853]">clareza</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-white/70">
            Cada sistema é desenvolvido com base na realidade da operação — etapas bem definidas,
            validação contínua e foco em entrega funcional, não em complexidade.
          </p>
        </div>

        {/* Steps - desktop: horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-4">
            {/* Connector line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[46px] h-px overflow-visible bg-white/10"
            >
              <motion.div
                className="timeline-progress h-full origin-left"
                style={{ scaleX: timelineProgress }}
              />
              <span className="timeline-particle timeline-particle-a" />
              <span className="timeline-particle timeline-particle-b" />
              <span className="timeline-particle timeline-particle-c" />
            </div>

            {steps.map((step, index) => {
              const isActive = activeStep >= index;

              return (
                <motion.div
                  key={step.number}
                  className="group flex flex-col items-center px-8 text-center"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0.48,
                    y: isActive ? 0 : 18,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                >
                  {/* Number */}
                  <div className="mb-3 flex h-7 items-center justify-center">
                    <span
                      className={`text-xs font-mono tracking-[0.3em] transition-colors duration-300 ${
                        isActive ? "text-[#00E676]" : "text-[#28283A]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Dot */}
                  <motion.div
                    className={`relative z-10 flex h-3 w-3 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isActive
                        ? "border-[#00E676] bg-[#00E676]"
                        : "border-[#28283A] bg-[#060E08]"
                    }`}
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                  >
                    <div
                      className={`h-[5px] w-[5px] rounded-full transition-colors duration-300 ${
                        isActive ? "bg-white" : "bg-[#32323F]"
                      }`}
                    />
                    <div
                      aria-hidden="true"
                      className={`absolute inset-[-5px] rounded-full transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ boxShadow: "0 0 16px rgba(0,230,118,0.6)" }}
                    />
                  </motion.div>

                  {/* Text */}
                  <div
                    className={`mt-9 space-y-3 rounded-2xl border px-4 py-4 transition-all duration-500 ${
                      isActive
                        ? "border-[#00E676]/18 bg-[#00E676]/[0.025] shadow-[0_0_28px_rgba(0,230,118,0.08)]"
                        : "border-transparent"
                    }`}
                  >
                    <h3 className="text-base font-semibold leading-snug text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#7A7A88] transition-colors duration-300 group-hover:text-[#8A8A98]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Steps - mobile/tablet: vertical */}
        <div className="lg:hidden">
          {steps.map((step, i) => {
            const isActive = activeStep >= i;

            return (
              <motion.div
                key={step.number}
                className="group relative flex gap-5"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0.55,
                  y: isActive ? 0 : 14,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.04,
                }}
              >
                {/* Left track */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isActive
                        ? "border-[#00E676]/70 bg-[#00E676]/12 shadow-[0_0_18px_rgba(0,230,118,0.28)]"
                        : "border-[#1E1E28] bg-[#0D0D12]"
                    }`}
                    animate={{ scale: isActive ? 1.08 : 1 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                  >
                    <span
                      className={`text-xs font-mono transition-colors duration-300 ${
                        isActive ? "text-[#00E676]" : "text-[#30303D]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div
                      className="mt-2 w-px flex-1"
                      style={{
                        background:
                          activeStep > i
                            ? "linear-gradient(to bottom, rgba(0,230,118,0.55), rgba(0,200,83,0.12), transparent)"
                            : "linear-gradient(to bottom, rgba(30,30,40,0.8), transparent)",
                        minHeight: "40px",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`space-y-2.5 rounded-2xl border px-4 pb-10 pt-3 transition-all duration-500 ${
                    isActive
                      ? "border-[#00E676]/16 bg-[#00E676]/[0.025] shadow-[0_0_24px_rgba(0,230,118,0.08)]"
                      : "border-transparent"
                  }`}
                >
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {step.title}
                  </h3>
                  <p className="max-w-sm text-base leading-relaxed text-[#7A7A88]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance */}
        <p className="mx-auto mt-16 max-w-md text-center text-sm tracking-wide text-[#5A5A68]">
          Processo estruturado, com foco em entrega real — não em complexidade.
        </p>
      </div>
    </section>
  );
}
