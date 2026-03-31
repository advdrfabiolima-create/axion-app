import Image from "next/image";
import Link from "next/link";

const solucoesLinks = [
  { label: "Plataformas sob medida", href: "/solucoes" },
  { label: "Dashboards e painéis", href: "/solucoes" },
  { label: "Automação de processos", href: "/solucoes" },
  { label: "Sistemas de matching", href: "/solucoes" },
];

const empresaLinks = [
  { label: "Sobre a Axion", href: "/empresa" },
  { label: "Filosofia", href: "/empresa#filosofia" },
  { label: "Contato", href: "/contato" },
];

const legalLinks = [
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos de uso", href: "/termos" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E28] bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Axion Systems"
                width={130}
                height={34}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#8A8A93] leading-relaxed max-w-xs">
              Sistemas projetados com precisão, construídos para escalar.
            </p>
            <div className="space-y-1.5 pt-2">
              <p className="text-xs text-[#6B6B78]">contato@axionsystem.com.br</p>
              <p className="text-xs text-[#6B6B78]">(75) 99189-5948</p>
            </div>
          </div>

          {/* Soluções */}
          <div className="space-y-4">
            <p className="text-xs font-medium text-white uppercase tracking-widest">
              Soluções
            </p>
            <ul className="space-y-2.5">
              {solucoesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8A8A93] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="space-y-4">
            <p className="text-xs font-medium text-white uppercase tracking-widest">
              Empresa
            </p>
            <ul className="space-y-2.5">
              {empresaLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8A8A93] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <p className="text-xs font-medium text-white uppercase tracking-widest">
              Legal
            </p>
            <ul className="space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8A8A93] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#1E1E28] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6B78]">
            © {new Date().getFullYear()} Axion Systems. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-[#6B6B78]">
            Construído com
            <span className="text-[#00C853] mx-1">precisão</span>
            para operar em produção.
          </div>
        </div>
      </div>
    </footer>
  );
}
