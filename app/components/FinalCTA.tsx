export default function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="flex items-center gap-4 justify-center mb-4">
          <div className="h-px flex-1 max-w-24 bg-[#1E1E28]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
          <div className="h-px flex-1 max-w-24 bg-[#1E1E28]" />
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
          Sua operação merece um sistema à altura
        </h2>

        <p className="text-lg text-[#8A8A93] leading-relaxed max-w-xl mx-auto">
          Empresas que exigem precisão não toleram ferramentas genéricas.
          Conheça como a Axion pode transformar seus processos.
        </p>

        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00C853] text-black font-semibold text-sm rounded hover:bg-[#00B84A] transition-colors duration-200"
          >
            Agendar conversa
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1E1E28] text-[#8A8A93] font-medium text-sm rounded hover:border-[#2E2E38] hover:text-white transition-colors duration-200"
          >
            Solicitar apresentação
          </a>
        </div>

        <p className="text-xs text-[#55555F] pt-4">
          Sem compromisso. Sem template genérico. Apenas uma conversa técnica honesta.
        </p>
      </div>
    </section>
  );
}
