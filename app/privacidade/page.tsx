import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InternalHero from "../components/shared/InternalHero";

export const metadata: Metadata = {
  title: "Axion Systems | Política de Privacidade",
};

export default function PrivacidadePage() {
  return (
    <main className="bg-[#0B0B0F] min-h-screen">
      <Header />

      <InternalHero
        title="Política de Privacidade"
        subtitle="Última atualização: Janeiro de 2025"
      />

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">1. Coleta de dados</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              A Axion Systems coleta apenas os dados necessários para a prestação dos serviços contratados ou para o atendimento de solicitações realizadas por meio dos nossos canais de contato. Os dados coletados podem incluir nome, e-mail, telefone e informações relacionadas ao seu negócio.
            </p>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Não coletamos dados sensíveis sem consentimento explícito e não comercializamos informações pessoais com terceiros.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">2. Uso das informações</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              As informações coletadas são utilizadas para:
            </p>
            <ul className="space-y-2">
              {[
                "Responder solicitações e consultas enviadas através dos formulários de contato",
                "Prestar os serviços contratados com qualidade e precisão",
                "Enviar comunicações relevantes sobre nossos serviços, quando autorizado",
                "Cumprir obrigações legais e regulatórias aplicáveis",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00C853] shrink-0" />
                  <p className="text-sm text-[#8A8A93]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">3. Cookies</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Nosso site pode utilizar cookies técnicos essenciais para o funcionamento adequado das páginas. Não utilizamos cookies de rastreamento ou publicidade comportamental sem consentimento prévio.
            </p>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">4. Compartilhamento</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              A Axion Systems não vende, aluga ou compartilha seus dados pessoais com terceiros para fins comerciais. Podemos compartilhar informações com prestadores de serviços técnicos estritamente necessários para a operação da plataforma, sempre sob acordos de confidencialidade.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">5. Seus direitos</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="space-y-2">
              {[
                "Acessar os dados que temos sobre você",
                "Corrigir dados incorretos ou incompletos",
                "Solicitar a exclusão dos seus dados",
                "Revogar consentimentos previamente concedidos",
                "Portabilidade dos seus dados",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00C853] shrink-0" />
                  <p className="text-sm text-[#8A8A93]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">6. Contato</h2>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail{" "}
              <span className="text-white">contato@axionsystems.com.br</span>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
