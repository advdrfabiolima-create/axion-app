import Image from "next/image";

const logos = [
  { src: "/clientes/empresa1.png", alt: "Empresa 1", className: "h-5", href: "https://www.useimobmatch.com.br" },
  { src: "/clientes/empresa2.png", alt: "Empresa 2", className: "h-8", href: "https://www.lawtechpro.com.br" },
  { src: "/clientes/empresa3.png", alt: "Empresa 3", className: "h-8", href: "https://www.lawtechpro.com.br" },
  { src: "/clientes/empresa4.png", alt: "Empresa 4", className: "h-12", href: "https://www.usevexis.com.br" },
  { src: "/clientes/empresa5.png", alt: "Empresa 5", className: "h-12", href: "https://www.advlimaesilva.com.br" },
];

const proofPoints = [
  { value: "50+", label: "Sistemas entregues" },
  { value: "R$2M+", label: "Em operações automatizadas" },
  { value: "5", label: "Produtos ativos em produção" },
];

export default function TrustSection() {
  return (
    <section className="py-16 px-6 border-y border-[#1E1E28]">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Logos */}
        <div>
          <p className="text-center text-sm text-[#6B6B7A] uppercase tracking-widest mb-10">
            Empresas que já operam com sistemas desenvolvidos pela Axion
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {logos.map((logo) => (
              <a
                key={logo.src}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center opacity-100 md:opacity-50 md:hover:opacity-100 transition-all duration-300 md:grayscale md:hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={60}
                  className={`${logo.className} w-auto object-contain`}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Proof numbers */}
        <div className="flex flex-wrap items-center justify-center gap-0">
          {proofPoints.map((p, i) => (
            <div key={p.label} className="flex items-center">
              {i > 0 && <div className="hidden sm:block w-px h-10 bg-[#1E1E28] mx-10" />}
              <div className="text-center px-4 sm:px-0">
                <p className="text-2xl font-bold text-white tracking-tight">{p.value}</p>
                <p className="text-sm text-[#7A7A88] mt-1">{p.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
