import { Link } from "react-router-dom";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import logoFull from "@/assets/logo-full.png";

const About = () => {
  return (
    <>
      <SEO
        title="Sobre a WI-Fire - Engenharia Contra Incêndio em Itajaí SC"
        description="Conheça a WI-Fire: empresa de engenharia especializada em prevenção e combate a incêndio em Itajaí e região. Equipe técnica qualificada e comprometida com a segurança."
        keywords="sobre WI-Fire, empresa engenharia contra incêndio, prevenção incêndio Itajaí, equipe técnica bombeiros, engenheiro contra incêndio Santa Catarina"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://wifire.com.br/" },
          { name: "Sobre", url: "https://wifire.com.br/sobre" },
        ])}
      />
      <section className="bg-foreground text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Sobre a WI-Fire
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Conheça a empresa que trabalha para proteger pessoas e patrimônios.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold">
                Engenharia de excelência em prevenção contra incêndio
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A WI-Fire é uma empresa de engenharia especializada em prevenção e combate a incêndio,
                com atuação em projetos preventivos, regularizações e inspeções técnicas. Nossa equipe é
                formada por engenheiros habilitados e com vasta experiência no mercado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Atuamos em todo o Rio Grande do Sul, atendendo edificações comerciais, industriais,
                residenciais e de uso público. Nosso compromisso é garantir a segurança das pessoas e a
                conformidade legal dos empreendimentos.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=500&fit=crop"
                alt="Equipe de engenharia em campo realizando inspeção de segurança contra incêndio"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Segurança",
                text: "A proteção de vidas é nossa prioridade absoluta. Cada projeto é elaborado com rigor técnico para garantir a máxima segurança.",
              },
              {
                title: "Agilidade",
                text: "Sabemos que prazos importam. Trabalhamos com processos eficientes para entregar resultados no menor tempo possível.",
              },
              {
                title: "Conformidade",
                text: "Todos os nossos projetos seguem rigorosamente as normas técnicas e a legislação vigente.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center space-y-3">
                <h3 className="text-xl font-heading font-bold">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Entre em contato e conheça nossas soluções.
          </p>
          <Link
            to="/contato"
            className="inline-block bg-primary-foreground text-primary px-8 py-3.5 rounded-md font-heading font-bold text-base hover:bg-primary-foreground/90 transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
