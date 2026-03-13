import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean Marques",
    text: "Ótima empresa. Extremamente profissionais, deram todo o suporte necessário durante o projeto, sempre tirando nossas dúvidas e esclarecendo todas as etapas. Nosso PPCI ficou pronto em questão de poucos dias.",
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
  {
    name: "Anderson Siqueira",
    text: "Fizeram todos os procedimentos necessários para minha empresa com rapidez e profissionalismo! Recomendo com certeza 👍",
  },
  {
    name: "Claudia Silva",
    text: "Empresa muito competente, ágil e prestativa. Indico muito!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="container mb-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Depoimentos reais de quem confia no trabalho da WI-FIRE
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-x-slow gap-6 w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="border border-border rounded-lg p-6 flex flex-col shrink-0 w-[340px] h-[230px] bg-background"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                "{t.text}"
              </p>
              <p className="font-heading font-bold text-sm mt-3">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
