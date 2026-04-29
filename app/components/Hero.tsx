"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black px-6 py-28 text-white sm:py-32 lg:px-8">
      <Image
        src="/hero-axion.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right opacity-90"
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22c55e]/20 blur-3xl"
      />

      <div className="mx-auto flex min-h-[calc(100vh-14rem)] max-w-7xl items-center">
        <div className="max-w-[520px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-gray-200 shadow-2xl shadow-black/20 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_18px_rgba(34,197,94,0.8)]" />
            Sistemas sob medida para operacoes B2B
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.04]">
            Transforme sua operacao em um{" "}
            <span className="text-[#22c55e]">SaaS</span> escalavel e premium.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-300 sm:text-lg">
            Criamos plataformas digitais de alta performance para automatizar
            processos, integrar dados e escalar empresas com tecnologia limpa,
            segura e pronta para crescer.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-[#22c55e] px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_36px_rgba(34,197,94,0.32)] transition hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2 focus:ring-offset-black"
            >
              Solicitar diagnostico
            </Link>

            <Link
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black"
            >
              Ver como funciona
            </Link>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="text-2xl font-bold text-white">99.9%</p>
              <p className="mt-1 text-xs text-gray-400">Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">3x</p>
              <p className="mt-1 text-xs text-gray-400">Mais eficiencia</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">48h</p>
              <p className="mt-1 text-xs text-gray-400">Primeiro deploy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
