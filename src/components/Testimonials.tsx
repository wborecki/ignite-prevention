import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean Marques",
    text: "Ótima empresa. Extremamente profissionais, deram todo o suporte necessário durante o projeto, sempre tirando nossas dúvidas e esclarecendo todas as etapas. Nosso PPCI ficou pronto em questão de poucos dias. Melhor custo benefício da região.",
  },
  {
    name: "Maynara Silva",
    text: "Orçamento completo e rápido. Após fechado o projeto PPCI, ficou pronto em dias. Muito bem explicado, custo benefício ótimo! Parabéns pelo serviço!",
  },
  {
    name: "Rafael Limas",
    text: "Atendimento rápido e informativo. Em pouco tempo regularizaram nossa situação com o Corpo de Bombeiros.",
  },
  {
    name: "Leandro Souza",
    text: "Excelente profissionalismo, rápido e eficaz. Indico para execução de serviços e documentos relacionados!",
  },
  {
    name: "Rodrigo Correa",
    text: "Atendimento excelente, melhor prestação de serviço. Parabéns pelo seu trabalho.",
  },
  {
    name: "Lucas Eduardo Sotto",
    text: "Profissionais do mais alto gabarito, recomendamos.",
  },
  {
    name: "Felipe Mater Ferreira",
    text: "Excelente atendimento! 👏🏻",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Depoimentos reais de quem confia no trabalho da WI-FIRE
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-border rounded-lg p-6 space-y-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{t.text}"
              </p>
              <p className="font-heading font-bold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
