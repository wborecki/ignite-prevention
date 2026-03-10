import { Link } from "react-router-dom";
import { Shield, FileText, ClipboardCheck, Home, Award, Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
    image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?w=600&h=400&fit=crop",
    title: "Extintores de Incêndio",
    alt: "Extintor de incêndio vermelho instalado em parede de edifício comercial",
  },
  {
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop",
    title: "Sistema de Sprinklers",
    alt: "Sistema de sprinklers automáticos instalados no teto para proteção contra incêndio",
  },
  {
    image: "https://images.unsplash.com/photo-1599707367812-042db8603456?w=600&h=400&fit=crop",
    title: "Hidrantes",
    alt: "Hidrante de parede vermelho com mangueira para combate a incêndio",
  },
  {
    image: "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=600&h=400&fit=crop",
    title: "Sinalização de Emergência",
    alt: "Placa de sinalização de saída de emergência fotoluminescente em corredor",
  },
  {
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
    title: "Alarme de Incêndio",
    alt: "Central de alarme de incêndio e detecção automática instalada",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    title: "Projetos Corporativos",
    alt: "Edifício corporativo moderno com projeto contra incêndio aprovado",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=800&fit=crop')",
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
              Projetos Realizados
            </h2>
            <p className="text-muted-foreground text-lg">
              Equipamentos e instalações executados com excelência técnica
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="relative overflow-hidden rounded-lg group"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/60 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary-foreground font-heading font-semibold text-sm p-4">
                    {project.title}
                  </span>
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
