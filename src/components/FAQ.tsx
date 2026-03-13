import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqData = [
  {
    question: "O que é PPCI e por que minha edificação precisa?",
    answer: "O PPCI (Projeto Preventivo Contra Incêndio) é o projeto técnico que define os sistemas de proteção contra incêndio da sua edificação. Ele é obrigatório para obter o alvará de funcionamento e o AVCB junto ao Corpo de Bombeiros.",
  },
  {
    question: "Qual a diferença entre PPCI e RPCI?",
    answer: "O PPCI é exigido para edificações de maior porte ou risco, com projeto completo de todos os sistemas preventivos. Já o RPCI (Relatório Preventivo Contra Incêndio) é um documento simplificado destinado a edificações de pequeno porte, com aprovação mais ágil.",
  },
  {
    question: "O que é o AVCB e como obter?",
    answer: "O AVCB (Auto de Vistoria do Corpo de Bombeiros) é o documento que atesta que a edificação possui todos os sistemas de segurança contra incêndio em conformidade. Para obtê-lo, é necessário ter o projeto aprovado e os sistemas instalados e funcionando corretamente.",
  },
  {
    question: "Quanto tempo leva para regularizar minha edificação?",
    answer: "O prazo varia conforme a complexidade da edificação e os sistemas necessários. Em média, projetos simples podem ser finalizados em poucos dias, enquanto edificações maiores podem levar algumas semanas entre elaboração, aprovação e vistoria.",
  },
  {
    question: "A WI-FIRE atende quais regiões?",
    answer: "Atuamos em todo o estado de Santa Catarina, com foco na região do Vale do Itajaí, Balneário Camboriú, Florianópolis e litoral norte. Também atendemos projetos no Paraná e Rio Grande do Sul.",
  },
  {
    question: "Quais equipamentos precisam de inspeção periódica?",
    answer: "Extintores, hidrantes, sprinklers, portas corta-fogo, iluminação de emergência, alarmes de incêndio e detectores de fumaça precisam de inspeções e manutenções periódicas conforme as normas técnicas vigentes.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-heading font-semibold hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
