import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Eye, Heart, Building2, Factory, Hotel, Stethoscope, HardHat, ShoppingBag, MapPin, BookOpen } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import engineerField from "@/assets/engineer-field.jpg";

const differentials = [
  { icon: ShieldCheck, title: "Rigor Técnico", desc: "Precisão e respaldo normativo em cada projeto, garantindo segurança jurídica e proteção real." },
  { icon: Zap, title: "Agilidade", desc: "Processos otimizados para rápida regularização. Prazos importam e entregamos no menor tempo." },
  { icon: Eye, title: "Transparência", desc: "Comunicação clara em cada etapa, para que você saiba exatamente o que está sendo feito." },
  { icon: Heart, title: "Compromisso com a Vida", desc: "Segurança não é opcional, é engenharia. Cada projeto visa proteger pessoas." },
];

const sectors = [
  { icon: Building2, name: "Edifícios Comerciais e Corporativos" },
  { icon: Factory, name: "Indústrias e Galpões Logísticos" },
  { icon: Hotel, name: "Hotéis e Empreendimentos Turísticos" },
  { icon: Stethoscope, name: "Clínicas, Hospitais e Laboratórios" },
  { icon: HardHat, name: "Construtoras e Incorporadoras" },
  { icon: ShoppingBag, name: "Comércio Varejista e Shopping Centers" },
];

const norms = [
  { code: "NBR 13714", name: "Sistemas de Hidrantes", desc: "Requisitos para projeto e instalação de sistemas de hidrantes e mangotinhos." },
  { code: "NBR 12693", name: "Extintores de Incêndio", desc: "Critérios de seleção, dimensionamento e manutenção de extintores." },
  { code: "ITC BMSC", name: "Instruções Técnicas", desc: "Normativas do Corpo de Bombeiros Militar de Santa Catarina." },
  { code: "NBR 9077", name: "Saídas de Emergência", desc: "Dimensionamento de portas, corredores, escadas e rampas de evacuação." },
];

const About = () => {
  return (
    <>
      <SEO
        title="Sobre a WI-Fire - Engenharia Contra Incêndio em Itajaí SC"
        description="Conheça a WI-Fire: empresa de engenharia especializada em prevenção e combate a incêndio em Itajaí e região. Equipe técnica qualificada e comprometida com a segurança."
        keywords="sobre WI-Fire, empresa engenharia contra incêndio, prevenção incêndio Itajaí, equipe técnica bombeiros, engenheiro contra incêndio Santa Catarina, engenheiro segurança incêndio CREA SC, atuação Paraná Rio Grande do Sul, NBR 13714 hidrantes, NBR 12693 extintores, ABNT NBR 9077 saídas emergência, regularização edificações comerciais industriais, construtoras incorporadoras incêndio"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://wifire.com.br/" },
          { name: "Sobre", url: "https://wifire.com.br/sobre" },
        ])}
      />

      {/* Hero */}
      <section className="bg-foreground text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Sobre a WI-Fire
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Proteger o patrimônio e, acima de tudo, a vida, através da engenharia de precisão.
          </p>
        </div>
      </section>

      {/* Missão, Visão e Engenheiro */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl font-heading font-bold">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Proteger o patrimônio e, acima de tudo, a vida, através da engenharia de precisão
                  e soluções inovadoras em segurança contra incêndio no Sul do Brasil.
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-heading font-bold">Nossa Visão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência em regularização e segurança contra incêndio na Região Sul do Brasil,
                  reconhecida pela excelência técnica, agilidade e compromisso com a vida.
                </p>
              </div>
              <div className="border-t border-border pt-6 space-y-1">
                <p className="text-xl font-heading font-bold text-primary">
                  Eng. Iriãn M. Padilha
                </p>
                <p className="text-muted-foreground text-sm">
                  CREA/SC — Engenheiro de Segurança Contra Incêndio
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Responsável técnico por todos os projetos da WI-Fire, com experiência consolidada
                  em regularização e segurança contra incêndio na Região Sul do Brasil.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={engineerField}
                alt="Equipe de engenharia em campo realizando inspeção de segurança contra incêndio"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais e Valores unificados */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Por que a WI-Fire?
            </h2>
            <p className="text-muted-foreground text-lg">
              Diferenciais que nos tornam a escolha certa para a segurança da sua edificação
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((d) => (
              <div
                key={d.title}
                className="group bg-background rounded-xl p-7 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <d.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-base mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setores + Área de Atuação */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Setores e Área de Atuação
            </h2>
            <p className="text-muted-foreground text-lg">
              Atendemos os mais diversos segmentos em toda a Região Sul do Brasil
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {sectors.map((s) => (
              <div
                key={s.name}
                className="group bg-secondary rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={24} className="text-primary" />
                </div>
                <span className="font-heading font-semibold text-base">{s.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Santa Catarina", "Paraná", "Rio Grande do Sul"].map((state) => (
              <span key={state} className="inline-flex items-center gap-2 bg-secondary rounded-full px-5 py-2.5 font-medium text-sm">
                <MapPin size={16} className="text-primary" />
                {state}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Normas */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Respaldo Normativo
            </h2>
            <p className="text-muted-foreground text-lg">
              Projetos desenvolvidos com rigor técnico e documentação completa até a emissão do AVCB
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {norms.map((norm) => (
              <div
                key={norm.code}
                className="group bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <BookOpen size={22} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-primary tracking-wide uppercase">{norm.code}</span>
                    <h3 className="font-heading font-bold text-base">{norm.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{norm.desc}</p>
                  </div>
                </div>
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
            Solicite uma visita técnica ou orçamento sem compromisso.
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
