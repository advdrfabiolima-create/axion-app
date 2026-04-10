const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 7H18L13.5 10.5L15.5 16L10 12.5L4.5 16L6.5 10.5L2 7H7.5L10 2Z" stroke="#00C853" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Clareza operacional",
    description:
      "Interfaces e fluxos que comunicam apenas o que importa. Cada dado tem seu lugar, cada ação tem propósito definido.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path d="M3 10h14M10 3v14" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="7" stroke="#00C853" strokeWidth="1.5" />
      </svg>
    ),
    title: "Eficiência sem atrito",
    description:
      "Automação que reduz ruído operacional e libera as equipes para o que realmente gera valor ao negócio.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="12" width="4" height="6" rx="1" stroke="#00C853" strokeWidth="1.5" />
        <rect x="8" y="8" width="4" height="10" rx="1" stroke="#00C853" strokeWidth="1.5" />
        <rect x="14" y="4" width="4" height="14" rx="1" stroke="#00C853" strokeWidth="1.5" />
      </svg>
    ),
    title: "Escalabilidade real",
    description:
      "Arquitetura preparada para crescer com o negócio, sem refatorações dolorosas ou reescritas desnecessárias.",
  },
];

export default function ValueProposition() {
  return (
    <section id="sobre" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 animate-fade-in">
          <p className="text-sm text-[#00C853] uppercase tracking-widest mb-5 font-medium">
            Nossa filosofia
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-5">
            Tecnologia com estética premium.{" "}
            <span className="text-[#7A7A8A]">
              Sistemas com lógica de produto.
            </span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Software genérico é fácil de vender e difícil de operar. Construímos sistemas com arquitetura clara, experiência precisa e estrutura que sustenta operações reais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {values.map((item) => (
            <div
              key={item.title}
              className="card-glow bg-[#121217] border border-[#1E1E28] rounded-xl p-8 space-y-5 hover:bg-[#0F0F14] transition-colors duration-200"
            >
              <div className="w-11 h-11 rounded-xl border border-[#1E1E28] bg-[#0E0E14] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-base text-[#8A8A98] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
