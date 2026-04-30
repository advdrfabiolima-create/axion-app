import Image from "next/image";
import filosofiaImage from "../../imagens/Nossa_filosofia.png";

const philosophyCards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M4 6.5h14M4 11h10M4 15.5h7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M15.5 14.5l1.6 1.6 3-3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Clareza operacional",
    description:
      "Interfaces e fluxos que comunicam apenas o que importa. Cada dado tem seu lugar, cada ação tem propósito definido.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M4 12.5h5l2-7 2.5 11 2-4h2.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
      </svg>
    ),
    title: "Eficiência sem atrito",
    description:
      "Automação que reduz ruído operacional e libera as equipes para o que realmente gera valor ao negócio.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M4 17.5V7.2M11 17.5V4.5M18 17.5v-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M3.5 17.5h15M5 8.5l6-4 6 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
        />
      </svg>
    ),
    title: "Escalabilidade real",
    description:
      "Arquitetura preparada para crescer com o negócio, sem refatorações dolorosas ou reescritas desnecessárias.",
  },
];

export default function NossaFilosofiaSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#08090D] px-6 py-24 sm:py-28 lg:py-32"
    >
      <Image
        src={filosofiaImage}
        alt=""
        fill
        className="absolute inset-0 object-cover object-center opacity-95 brightness-110 saturate-125"
        sizes="100vw"
        priority={false}
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_44%,rgba(0,0,0,0.74)_0%,rgba(0,0,0,0.58)_34%,rgba(0,0,0,0.22)_58%,transparent_82%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,9,13,0.88)_0%,rgba(8,9,13,0.62)_30%,rgba(8,9,13,0.12)_56%,transparent_78%),linear-gradient(180deg,rgba(8,9,13,0.34)_0%,transparent_44%,rgba(8,9,13,0.48)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-[#00E676]">
            Nossa filosofia
          </p>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.45rem]">
            Tecnologia com estética premium.{" "}
            <span className="text-[#00E676]">Sistemas com lógica de produto.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">
            Software genérico é fácil de vender e difícil de operar. Construímos sistemas com arquitetura clara, experiência precisa e estrutura que sustenta operações reais.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {philosophyCards.map((item) => (
            <article
              key={item.title}
              className="card-glow group rounded-2xl border border-white/[0.08] bg-[#101118]/86 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-[#12141B]"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#00C853]/18 bg-[#00C853]/[0.06] text-[#00E676] transition-all duration-300 group-hover:border-[#00E676]/35 group-hover:bg-[#00C853]/[0.1]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#8E8E9B] transition-colors duration-300 group-hover:text-[#A7A7B2]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
