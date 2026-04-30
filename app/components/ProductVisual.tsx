import Image from "next/image";
import designProdutoImage from "../../imagens/Design_de_produto.png";

export default function ProductVisual() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0F] px-6 py-28">
      <Image
        src={designProdutoImage}
        alt=""
        fill
        className="absolute inset-0 object-contain object-right opacity-100 brightness-125 saturate-125"
        sizes="100vw"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_50%,rgba(0,230,118,0.16)_0%,rgba(0,200,83,0.08)_32%,transparent_58%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,#0B0B0F_0%,#0B0B0F_34%,rgba(11,11,15,0.78)_50%,rgba(11,11,15,0.28)_72%,rgba(11,11,15,0.06)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_22%_46%,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.34)_42%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl space-y-7">
          <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
            Design de produto
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
            Sistemas que pensam como{" "}
            <span className="text-[#00C853]">produto</span>, não como código
          </h2>
          <div className="border-l-2 border-[#00C853]/40 pl-5 py-1">
            <p className="text-base text-[#00C853] font-medium leading-relaxed">
              A maioria dos sistemas falha porque nasce como projeto. Nós construímos como produto.
            </p>
          </div>
          <p className="text-lg text-white/70 leading-relaxed">
            A Axion projeta cada sistema com visão de produto — arquitetura técnica e experiência do usuário evoluindo juntas, sem conflito, sem reescritas emergenciais.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            O resultado são plataformas que os times adotam porque fazem sentido operacional e técnico ao mesmo tempo.
          </p>
          <div className="space-y-4 pt-2">
            {[
              "Arquitetura modular e extensível",
              "UX orientada a dados reais de operação",
              "Performance como requisito de design",
              "Manutenção sem refatoração constante",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3.5">
                <div className="mt-1 w-5 h-5 rounded-full border border-[#00C853]/40 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#00C853]" />
                </div>
                <p className="text-base text-[#8A8A98]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
