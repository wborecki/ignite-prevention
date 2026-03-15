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
    <section className="py-16 md:py-20 bg-background overflow-hidden" aria-label="Depoimentos de clientes">
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
              className="border border-border rounded-lg p-6 flex flex-col shrink-0 w-[340px] h-[260px] bg-background"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between mt-3">
                <p className="font-heading font-bold text-sm">{t.name}</p>
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
