const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 7H18L13.5 10.5L15.5 16L10 12.5L4.5 16L6.5 10.5L2 7H7.5L10 2Z" stroke="#00C853" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Clareza",
    description:
      "Interfaces e fluxos que comunicam o que importa. Cada dado tem seu lugar, cada ação tem propósito.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10h14M10 3v14" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="7" stroke="#00C853" strokeWidth="1.5" />
      </svg>
    ),
    title: "Eficiência",
    description:
      "Automação que reduz ruído operacional e libera as equipes para o que realmente gera valor.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="12" width="4" height="6" rx="1" stroke="#00C853" strokeWidth="1.5" />
        <rect x="8" y="8" width="4" height="10" rx="1" stroke="#00C853" strokeWidth="1.5" />
        <rect x="14" y="4" width="4" height="14" rx="1" stroke="#00C853" strokeWidth="1.5" />
      </svg>
    ),
    title: "Escalabilidade",
    description:
      "Arquitetura preparada para crescer com o negócio sem refatorações dolorosas.",
  },
];

export default function ValueProposition() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 animate-fade-in">
          <p className="text-xs text-[#00C853] uppercase tracking-widest mb-4 font-medium">
            Nossa filosofia
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
            Tecnologia com estética premium.{" "}
            <span className="text-[#8A8A93]">
              Sistemas com lógica de produto.
            </span>
          </h2>
          <p className="mt-4 text-[#8A8A93] leading-relaxed">
            Software genérico é fácil de vender e difícil de operar. Construímos sistemas com arquitetura clara, experiência precisa e estrutura que sustenta operações reais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {values.map((item) => (
            <div
              key={item.title}
              className="card-glow bg-[#121217] border border-[#1E1E28] rounded-xl p-8 space-y-4 hover:bg-[#0F0F14] transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg border border-[#1E1E28] bg-[#121217] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-[#8A8A93] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
