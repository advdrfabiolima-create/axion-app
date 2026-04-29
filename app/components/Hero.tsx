"use client";

import Image from "next/image";
import Link from "next/link";

const metrics = [
  { value: "99.9%", label: "Uptime" },
  { value: "3x", label: "Mais eficiência" },
  { value: "48h", label: "Primeiro deploy" },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#030508] px-6 text-white sm:px-8">
      <Image
        src="/hero-axion.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[72%_center] opacity-95 brightness-110 contrast-125 saturate-150"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-black via-black/85 to-black/25"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_14%_42%,rgba(34,197,94,0.28),transparent_31%),radial-gradient(circle_at_82%_28%,rgba(59,130,246,0.28),transparent_30%),linear-gradient(to_bottom,rgba(3,5,8,0.08),transparent_42%,rgba(3,5,8,0.92))]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/3 -z-10 h-[38rem] w-[38rem] rounded-full bg-[#22c55e]/18 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-16 -z-10 h-[36rem] w-[36rem] rounded-full bg-blue-500/18 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center py-28 sm:py-32 lg:py-36">
        <div className="w-full max-w-[720px]">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-200 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-md sm:text-xs">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-70 blur-[2px]" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.95)]" />
            </span>
            Sistemas SaaS para empresas que querem escalar
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[0.96]">
            Construa um{" "}
            <span className="text-[#22c55e] drop-shadow-[0_0_30px_rgba(34,197,94,0.45)]">
              SaaS
            </span>{" "}
            que escala, vende e domina o seu mercado.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Transformamos operações manuais em plataformas digitais de alta
            performance, com automação, inteligência artificial, dashboards e
            arquitetura pronta para crescer.
          </p>

          <div
            aria-hidden="true"
            className="mt-8 h-px max-w-xl bg-gradient-to-r from-[#22c55e] via-blue-400/75 to-transparent shadow-[0_0_24px_rgba(34,197,94,0.45)]"
          />

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="group inline-flex items-center justify-center rounded-xl bg-[#22c55e] px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_36px_rgba(34,197,94,0.36)] transition duration-300 hover:scale-[1.025] hover:bg-[#16a34a] hover:shadow-[0_0_58px_rgba(34,197,94,0.52)] focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2 focus:ring-offset-black"
            >
              Agendar demonstração
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <Link
              href="/solucoes"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_52px_rgba(0,0,0,0.3)] backdrop-blur-md transition duration-300 hover:scale-[1.025] hover:border-white/30 hover:bg-white/[0.11] hover:shadow-[0_0_38px_rgba(59,130,246,0.24)] focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black"
            >
              Ver soluções
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-[0_26px_90px_rgba(0,0,0,0.42)] backdrop-blur-md sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-white/10 px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:py-5 sm:last:border-r-0"
              >
                <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
