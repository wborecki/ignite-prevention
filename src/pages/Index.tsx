import { Link } from "react-router-dom";
import { Shield, FileText, ClipboardCheck, Home, Award, Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SEO, { organizationSchema, faqSchema } from "@/components/SEO";
import ClientsCarousel from "@/components/ClientsCarousel";
import projectMagazine from "@/assets/projects/magazine-luiza.jpeg";
import projectGalpao from "@/assets/projects/galpao-itajai.jpeg";
import projectAlmabe from "@/assets/projects/almabe-bc.jpeg";
import projectSantaBella from "@/assets/projects/santa-bella-itajai.jpeg";
import projectQuality from "@/assets/projects/quality-itajai.jpeg";
import projectIntegral from "@/assets/projects/integral-curso.jpeg";

const services = [
  {
    icon: Shield,
    title: "PPCI",
    subtitle: "Projeto Preventivo Contra Incêndio",
    description: "Elaboração completa do projeto preventivo para aprovação junto ao Corpo de Bombeiros.",
  },
  {
    icon: FileText,
    title: "RPCI",
    subtitle: "Relatório Preventivo Contra Incêndio",
    description: "Documento simplificado para edificações de pequeno porte, com aprovação ágil.",
  },
  {
    icon: ClipboardCheck,
    title: "AVCB",
    subtitle: "Auto de Vistoria do Corpo de Bombeiros",
    description: "Acompanhamento de todo o processo para obtenção do AVCB da sua edificação.",
  },
  {
    icon: Home,
    title: "Habite-se",
    subtitle: "Regularização de Imóveis",
    description: "Assessoria para obtenção do Habite-se com toda a documentação de segurança.",
  },
  {
    icon: Award,
    title: "Alvarás e Laudos",
    subtitle: "Laudos Técnicos",
    description: "Emissão de alvarás e laudos técnicos de segurança contra incêndio.",
  },
  {
    icon: Search,
    title: "Inspeções",
    subtitle: "Inspeções Preventivas em Equipamentos",
    description: "Verificação e manutenção de extintores, hidrantes, sprinklers e demais equipamentos.",
  },
];

const projects = [
  {
    image: projectMagazine,
    title: "Magazine Luiza",
    location: "Santo Amaro da Imperatriz - SC",
    alt: "Edificação regularizada Magazine Luiza em Santo Amaro da Imperatriz SC",
  },
  {
    image: projectGalpao,
    title: "Galpão Industrial",
    location: "Itajaí - SC",
    alt: "Galpão industrial regularizado pela WI-Fire em Itajaí SC",
  },
  {
    image: projectAlmabe,
    title: "Restaurante Almabe",
    location: "Balneário Camboriú - SC",
    alt: "Restaurante Almabe regularizado em Balneário Camboriú SC",
  },
  {
    image: projectSantaBella,
    title: "Santa Bella",
    location: "Itajaí - SC",
    alt: "Comércio Santa Bella regularizado em Itajaí SC",
  },
  {
    image: projectQuality,
    title: "Quality Transportes",
    location: "Itajaí - SC",
    alt: "Quality Transportes edificação regularizada em Itajaí SC",
  },
  {
    image: projectIntegral,
    title: "Integral Curso e Colégio",
    location: "Itajaí - SC",
    alt: "Integral Curso e Colégio regularizado em Balneário Camboriú SC",
  },
];

const Index = () => {
  return (
    <>
      <SEO
        title="WI-Fire | Engenharia Contra Incêndio - PPCI, AVCB em Itajaí SC"
        description="WI-Fire: soluções completas em engenharia contra incêndio. PPCI, RPCI, AVCB, Habite-se, inspeções e laudos técnicos em Itajaí, Balneário Camboriú e região de SC."
        keywords="engenharia contra incêndio Itajaí, PPCI Itajaí, AVCB Santa Catarina, projeto contra incêndio, segurança contra incêndio SC, habite-se Itajaí, inspeção extintores, regularização edificação bombeiros, PPCI Balneário Camboriú, AVCB Paraná, AVCB Rio Grande do Sul, engenharia incêndio região sul, regularização corpo de bombeiros, NBR 13714, NBR 12693, projeto preventivo incêndio comercial, projeto preventivo incêndio industrial"
        jsonLd={organizationSchema}
      />
      {/* Hero */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('${heroBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container py-24 md:py-36">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
              Engenharia Contra Incêndio que{" "}
              <span className="text-primary">protege</span> seu patrimônio
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed">
              Soluções completas em PPCI, AVCB, inspeções e regularizações.
              Segurança e conformidade para sua edificação.
            </p>
            <a
              href="https://wa.me/5547997689880?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-heading font-bold text-base hover:bg-primary-dark transition-colors"
            >
              Solicite um Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <ClientsCarousel />

      {/* Serviços */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground text-lg">
              Oferecemos soluções que fazem a diferença na segurança contra incêndio
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors group"
              >
                <service.icon
                  size={32}
                  className="text-primary mb-4"
                />
                <h3 className="font-heading font-bold text-lg mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {service.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/solucoes"
              className="text-primary font-semibold text-sm hover:underline"
            >
              Ver todos os serviços →
            </Link>
          </div>
        </div>
      </section>

      {/* Nosso Processo */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nosso Processo
            </h2>
            <p className="text-muted-foreground text-lg">
              Do diagnóstico à regularização, acompanhamos cada etapa com agilidade
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Diagnóstico", desc: "Análise completa da edificação e identificação das necessidades de segurança." },
              { step: "2", title: "Projeto", desc: "Elaboração do projeto preventivo com todos os sistemas dimensionados." },
              { step: "3", title: "Aprovação", desc: "Protocolo e acompanhamento junto ao Corpo de Bombeiros até a aprovação." },
              { step: "4", title: "Regularização", desc: "Emissão do AVCB e documentação completa para o funcionamento legal." },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto font-heading font-extrabold text-xl">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
            Precisa regularizar sua edificação?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Fale com nossos engenheiros e receba um orçamento personalizado sem compromisso.
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

      {/* Projetos Realizados */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Edificações Regularizadas
            </h2>
            <p className="text-muted-foreground text-lg">
              Projetos aprovados e edificações regularizadas pela WI-Fire
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="relative overflow-hidden rounded-lg group border border-border cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent flex items-end">
                  <div className="p-4">
                    <span className="text-primary-foreground font-heading font-bold text-sm block">
                      {project.title}
                    </span>
                    <span className="text-primary-foreground/70 text-xs">
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre resumido */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Sobre a WI-Fire
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Somos uma empresa de engenharia especializada em prevenção e combate a incêndio.
              Com uma equipe técnica qualificada, atuamos desde a elaboração de projetos até a
              regularização completa de edificações, sempre com foco na segurança e agilidade.
            </p>
            <Link
              to="/sobre"
              className="inline-block text-primary font-semibold text-sm hover:underline"
            >
              Conheça nossa história →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
