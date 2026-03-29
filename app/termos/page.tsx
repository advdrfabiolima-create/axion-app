import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InternalHero from "../components/shared/InternalHero";

export const metadata: Metadata = {
  title: "Axion Systems | Termos de Uso",
};

export default function TermosPage() {
  return (
    <main className="bg-[#0B0B0F] min-h-screen">
      <Header />

      <InternalHero
        title="Termos de Uso"
        subtitle="Última atualização: Janeiro de 2025"
      />

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">1. Aceitação</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Ao acessar e utilizar o site da Axion Systems, você concorda com os presentes Termos de Uso. Se não concordar com qualquer parte destes termos, solicitamos que não utilize nossos serviços ou plataformas.
            </p>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              A Axion Systems reserva-se o direito de modificar estes termos a qualquer momento, com notificação prévia por meio dos canais apropriados.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">2. Uso do site</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              O site da Axion Systems é destinado a fins informativos e de contato comercial. É expressamente proibido:
            </p>
            <ul className="space-y-2">
              {[
                "Utilizar o site para fins ilegais ou não autorizados",
                "Tentar acessar sistemas, redes ou dados sem autorização",
                "Reproduzir conteúdo sem autorização prévia por escrito",
                "Enviar conteúdo malicioso, spam ou desinformação",
                "Interferir no funcionamento técnico do site",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00C853] shrink-0" />
                  <p className="text-sm text-[#8A8A93]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">3. Propriedade intelectual</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Todo o conteúdo presente neste site — incluindo textos, imagens, logotipos, design, código-fonte e demais elementos — é de propriedade exclusiva da Axion Systems ou de seus licenciadores.
            </p>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              É vedada a reprodução, distribuição, modificação ou uso comercial de qualquer elemento sem autorização expressa e prévia da Axion Systems.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">4. Limitação de responsabilidade</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              A Axion Systems não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou impossibilidade de uso deste site.
            </p>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              As informações disponibilizadas têm caráter meramente informativo e não constituem garantia de resultados ou promessas de serviços.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">5. Modificações</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              A Axion Systems pode atualizar, modificar ou descontinuar qualquer parte do site a qualquer momento, sem aviso prévio. Recomendamos que você verifique periodicamente estes termos para estar ciente de eventuais alterações.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">6. Contato</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Para questões relacionadas a estes termos, entre em contato pelo e-mail{" "}
              <span className="text-white">contato@axionsystems.com.br</span>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
