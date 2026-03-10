import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Eye, Heart, Building2, Factory, Hotel, Stethoscope, HardHat, ShoppingBag, MapPin } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import logoFull from "@/assets/logo-full.png";

const values = [
  {
    icon: ShieldCheck,
    title: "Rigor Técnico",
    text: "Cada projeto é desenvolvido com precisão e respaldo normativo, garantindo segurança jurídica e proteção real.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    text: "Processos otimizados para rápida regularização. Sabemos que prazos importam e trabalhamos para entregar no menor tempo possível.",
  },
  {
    icon: Eye,
    title: "Transparência",
    text: "Comunicação clara em cada etapa do projeto, para que você saiba exatamente o que está sendo feito e por quê.",
  },
  {
    icon: Heart,
    title: "Compromisso Social",
    text: "A proteção de vidas é nossa prioridade absoluta. Segurança não é opcional — é engenharia.",
  },
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
  "NBR 13714 — Sistemas de Hidrantes",
  "NBR 12693 — Extintores de Incêndio",
  "ITC BMSC — Instruções Técnicas",
  "ABNT NBR 9077 — Saídas de Emergência",
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

      {/* Missão e Visão */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Proteger o patrimônio e, acima de tudo, a vida, através da engenharia de precisão
                  e soluções inovadoras em segurança contra incêndio no Sul do Brasil, reconhecida
                  pela excelência técnica, agilidade e compromisso com a vida.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold">Nossa Visão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência em regularização e segurança contra incêndio na Região Sul do Brasil.
                </p>
              </div>
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

      {/* Identidade */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src={logoFull}
                alt="Logo WI-Fire Engenharia Contra Incêndio"
                className="w-56 md:w-72 h-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-5">
              <h2 className="text-3xl font-heading font-bold">
                Nossa Marca, Nosso Propósito
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A WI-Fire nasceu da união entre tecnologia e segurança. Nosso nome e símbolo
                representam a conexão inteligente entre engenharia e proteção contra incêndio —
                como uma rede que conecta soluções a quem mais precisa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada projeto que realizamos carrega o compromisso de proteger vidas e patrimônios
                com excelência técnica, transparência e agilidade. Essa é a essência da WI-Fire.
              </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center space-y-3">
                <div className="flex justify-center">
                  <v.icon size={36} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Por que a WI-Fire?
            </h2>
            <p className="text-muted-foreground text-lg">
              Diferenciais que nos tornam a escolha certa para a segurança da sua edificação
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Experiência com Grandes Contas", desc: "Projetos executados para grandes empreendimentos comerciais, industriais e corporativos." },
              { title: "Atuação Regional Consolidada", desc: "Presença sólida em Santa Catarina, Paraná e Rio Grande do Sul." },
              { title: "Foco em Vida", desc: "Segurança não é opcional — é engenharia. Cada projeto visa proteger pessoas." },
              { title: "Agilidade e Eficiência", desc: "Processos otimizados para rápida regularização da sua edificação." },
            ].map((d) => (
              <div key={d.title} className="border border-border rounded-lg p-6 space-y-2">
                <h3 className="font-heading font-bold text-base">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setores */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Setores que Confiam na WI-Fire
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sectors.map((s) => (
              <div key={s.name} className="flex items-center gap-3 bg-background rounded-lg p-4 border border-border">
                <s.icon size={24} className="text-primary shrink-0" />
                <span className="text-sm font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Área de Atuação */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-heading font-bold">Área de Atuação</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estamos onde você precisa. Atuação em toda a Região Sul do Brasil,
              com conhecimento profundo das legislações estaduais e municipais.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {["Santa Catarina", "Paraná", "Rio Grande do Sul"].map((state) => (
                <span key={state} className="inline-flex items-center gap-2 bg-secondary rounded-full px-5 py-2.5 font-medium text-sm">
                  <MapPin size={16} className="text-primary" />
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Normas */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-heading font-bold">
                Excelência Técnica com Respaldo Normativo
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cada projeto é desenvolvido com rigor técnico, documentação completa e
                acompanhamento até a emissão do AVCB, garantindo segurança jurídica e proteção real.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-lg mb-4">Normas e Regulamentações</h3>
              {norms.map((norm) => (
                <div key={norm} className="flex items-center gap-3 bg-background rounded-lg p-3 border border-border">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-medium">{norm}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engenheiro */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-heading font-bold">Nosso Engenheiro</h2>
            <p className="text-xl font-heading font-semibold text-primary">
              Eng. Iriãn M. Padilha
            </p>
            <p className="text-muted-foreground">
              CREA/SC — Engenheiro de Segurança Contra Incêndio
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
              Responsável técnico por todos os projetos da WI-Fire, com experiência consolidada
              em regularização e segurança contra incêndio na Região Sul do Brasil.
            </p>
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
