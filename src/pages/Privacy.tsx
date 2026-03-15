import SEO, { breadcrumbSchema } from "@/components/SEO";
import { CONTACT_EMAIL, SITE_NAME } from "@/config/constants";

const Privacy = () => {
  return (
    <>
      <SEO
        title="Política de Privacidade e Cookies"
        description={`Política de Privacidade e Cookies da ${SITE_NAME}. Saiba como coletamos, utilizamos e protegemos seus dados pessoais.`}
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://wifire-engenharia.com.br/" },
          { name: "Política de Privacidade", url: "https://wifire-engenharia.com.br/privacidade" },
        ])}
      />
      <section className="bg-foreground text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Política de Privacidade e Cookies
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Última atualização: 15 de março de 2026
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-3xl space-y-8">

          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-bold">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              A {SITE_NAME} respeita a privacidade dos visitantes do nosso site. Esta política
              descreve como coletamos, utilizamos e protegemos informações pessoais de acordo com a
              Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-bold">2. Dados Coletados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Coletamos dados de duas formas:
            </p>
            <h3 className="text-lg font-heading font-semibold mt-4">2.1 Dados fornecidos por você</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Nome, e-mail, telefone e mensagem enviados pelo formulário de contato</li>
              <li>Informações fornecidas via WhatsApp ao solicitar orçamento</li>
            </ul>
            <h3 className="text-lg font-heading font-semibold mt-4">2.2 Dados coletados automaticamente</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Endereço IP (anonimizado)</li>
              <li>Tipo de navegador e sistema operacional</li>
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Origem do acesso (referrer)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Esses dados são coletados apenas mediante seu consentimento, através de cookies analíticos.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-bold">3. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies são pequenos arquivos armazenados no seu dispositivo para melhorar a experiência de navegação.
            </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border border-border">
                <thead>
                  <tr className="bg-secondary">
                    <th className="px-4 py-2 text-left font-semibold border-b border-border">Cookie</th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-border">Tipo</th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-border">Finalidade</th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-border">Duração</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="px-4 py-2 border-b border-border">wifire_cookie_consent</td>
                    <td className="px-4 py-2 border-b border-border">Necessário</td>
                    <td className="px-4 py-2 border-b border-border">Armazena sua escolha de consentimento de cookies</td>
                    <td className="px-4 py-2 border-b border-border">Permanente</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-border">_ga / _ga_*</td>
                    <td className="px-4 py-2 border-b border-border">Analítico</td>
                    <td className="px-4 py-2 border-b border-border">Google Analytics 4 — identifica visitantes únicos e sessões</td>
                    <td className="px-4 py-2 border-b border-border">2 anos / 24 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Os cookies analíticos do Google Analytics <strong>só são carregados após seu consentimento</strong> explícito
              através do banner de cookies exibido na primeira visita. Você pode alterar sua preferência a qualquer momento
              limpando os cookies do navegador.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-bold">4. Finalidade do Uso dos Dados</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Responder solicitações de orçamento e contato</li>
              <li>Melhorar a experiência de navegação no site</li>
              <li>Analisar métricas de acesso para otimizar conteúdo</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-bold">5. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Os dados coletados <strong>não são vendidos ou compartilhados</strong> com terceiros, exceto:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Google Analytics:</strong> dados anonimizados de navegação para fins estatísticos</li>
              <li><strong>Obrigação legal:</strong> quando exigido por lei ou autoridade competente</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-bold">6. Seus Direitos (LGPD)</h2>
            <p className="text-muted-foreground leading-relaxed">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Solicitar correção de dados incompletos ou desatualizados</li>
              <li>Solicitar a eliminação de dados pessoais</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Obter informações sobre com quem seus dados foram compartilhados</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-bold">7. Segurança</h2>
            <p className="text-muted-foreground leading-relaxed">
              Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra
              acesso não autorizado, perda ou destruição. O site utiliza protocolo HTTPS para
              criptografar todas as comunicações.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-bold">8. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de atualizar esta política periodicamente. Qualquer alteração
              será publicada nesta página com a data de atualização revisada.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-bold">9. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Em caso de dúvidas sobre esta política ou sobre seus dados pessoais, entre em contato:
            </p>
            <ul className="list-none space-y-1 text-muted-foreground">
              <li><strong>E-mail:</strong> {CONTACT_EMAIL}</li>
              <li><strong>Empresa:</strong> {SITE_NAME}</li>
              <li><strong>Localização:</strong> Itajaí — SC, Brasil</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default Privacy;
