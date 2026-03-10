import { Shield, FileText, ClipboardCheck, Home, Award, Search } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const services = [
  {
    icon: Shield,
    title: "PPCI — Projeto Preventivo Contra Incêndio",
    description:
      "O PPCI é o projeto técnico que define todos os sistemas de proteção contra incêndio necessários para a sua edificação. Elaboramos projetos completos para todos os tipos de ocupação, com acompanhamento até a aprovação junto ao Corpo de Bombeiros.",
    items: [
      "Levantamento técnico da edificação",
      "Dimensionamento de sistemas (extintores, hidrantes, sprinklers, alarme)",
      "Elaboração de plantas e memoriais descritivos",
      "Protocolo e acompanhamento junto ao Corpo de Bombeiros",
    ],
  },
  {
    icon: FileText,
    title: "RPCI — Relatório Preventivo Contra Incêndio",
    description:
      "O RPCI é um documento simplificado para edificações de pequeno porte. É a solução mais rápida e econômica para regularizar sua empresa junto ao Corpo de Bombeiros.",
    items: [
      "Aplicável a edificações de até 750m²",
      "Processo de aprovação simplificado",
      "Menor custo comparado ao PPCI",
      "Ideal para comércios de pequeno porte",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "AVCB — Auto de Vistoria do Corpo de Bombeiros",
    description:
      "O AVCB é o documento que atesta que sua edificação possui todos os sistemas de segurança contra incêndio em conformidade. Cuidamos de todo o processo de obtenção e renovação.",
    items: [
      "Preparação da documentação completa",
      "Verificação prévia de todos os sistemas",
      "Agendamento e acompanhamento da vistoria",
      "Renovação de AVCB vencido",
    ],
  },
  {
    icon: Home,
    title: "Habite-se",
    description:
      "Para obter o Habite-se, é necessário comprovar que a edificação atende às normas de segurança contra incêndio. Assessoramos todo o processo de regularização.",
    items: [
      "Análise de conformidade da edificação",
      "Elaboração de projetos necessários",
      "Documentação técnica completa",
      "Acompanhamento junto aos órgãos competentes",
    ],
  },
  {
    icon: Award,
    title: "Alvarás e Laudos Técnicos",
    description:
      "Emitimos laudos técnicos e providenciamos alvarás de funcionamento relacionados à segurança contra incêndio, garantindo a legalidade do seu empreendimento.",
    items: [
      "Laudos de conformidade de sistemas",
      "Laudos de segurança estrutural contra incêndio",
      "Alvarás de funcionamento",
      "Relatórios técnicos para seguradoras",
    ],
  },
  {
    icon: Search,
    title: "Inspeções Preventivas em Equipamentos",
    description:
      "Realizamos inspeções periódicas em todos os equipamentos de combate a incêndio, garantindo que estejam prontos para uso e em conformidade com as normas técnicas.",
    items: [
      "Inspeção de extintores de incêndio",
      "Teste e manutenção de hidrantes",
      "Verificação de sprinklers",
      "Teste de alarmes e detectores de fumaça",
    ],
  },
];

const Solutions = () => {
  return (
    <>
      <SEO
        title="Soluções em Engenharia Contra Incêndio - PPCI, AVCB, Inspeções"
        description="Conheça os serviços da WI-Fire: PPCI, RPCI, AVCB, Habite-se, Alvarás, Laudos Técnicos e Inspeções Preventivas de equipamentos contra incêndio em Itajaí SC."
        keywords="PPCI projeto preventivo incêndio, RPCI relatório preventivo, AVCB auto vistoria bombeiros, habite-se regularização, inspeção extintores hidrantes sprinklers, laudo técnico incêndio Itajaí"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://wifire.com.br/" },
          { name: "Soluções", url: "https://wifire.com.br/solucoes" },
        ])}
      />
      <section className="bg-foreground text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Nossas Soluções
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Conheça todos os serviços que a WI-Fire oferece para garantir a segurança
            contra incêndio da sua edificação.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container space-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row gap-8 items-start ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <service.icon size={28} className="text-primary shrink-0" />
                  <h2 className="text-2xl font-heading font-bold">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
            Solicite um orçamento
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Entre em contato e descubra como podemos ajudar na segurança da sua edificação.
          </p>
          <a
            href="https://wa.me/5547997689880?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground text-primary px-8 py-3.5 rounded-md font-heading font-bold text-base hover:bg-primary-foreground/90 transition-colors"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Solutions;
