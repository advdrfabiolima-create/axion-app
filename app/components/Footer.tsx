import Image from "next/image";

const links: Record<string, string[]> = {
  "Soluções": [
    "Plataformas sob medida",
    "Dashboards e painéis",
    "Automação de processos",
    "Sistemas de matching",
  ],
  "Empresa": ["Sobre a Axion", "Filosofia", "Casos de uso", "Contato"],
  "Legal": ["Privacidade", "Termos de uso"],
};

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-[#1E1E28] bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <Image
              src="/logo.png"
              alt="Axion Systems"
              width={130}
              height={34}
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm text-[#8A8A93] leading-relaxed max-w-xs">
              Sistemas inteligentes para negócios que exigem precisão.
              Plataformas modernas construídas com lógica de produto.
            </p>
            <div className="space-y-1.5 pt-2">
              <p className="text-xs text-[#55555F]">contato@axionsystems.com.br</p>
              <p className="text-xs text-[#55555F]">+55 (11) 99999-0000</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <p className="text-xs font-medium text-white uppercase tracking-widest">
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#8A8A93] hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-[#1E1E28] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#55555F]">
            © {new Date().getFullYear()} Axion Systems. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-[#55555F]">
            Construído com
            <span className="text-[#00C853] mx-1">precisão</span>
            para operar em produção.
          </div>
        </div>
      </div>
    </footer>
  );
}
