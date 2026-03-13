import inspecaoExtintores from "@/assets/blog/inspecao-extintores.jpeg";
import sinalizacaoEmergencia from "@/assets/blog/sinalizacao-emergencia.jpeg";
import escolherExtintor from "@/assets/blog/escolher-extintor.jpeg";
import hidrantesPrediais from "@/assets/blog/hidrantes-prediais.jpeg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-e-ppci",
    title: "O que é PPCI e por que sua empresa precisa de um?",
    excerpt: "Entenda o que é o Projeto Preventivo Contra Incêndio, quais edificações precisam e como regularizar sua situação junto ao Corpo de Bombeiros.",
    content: `O **Projeto Preventivo Contra Incêndio (PPCI)** é um conjunto de medidas e sistemas de segurança que visa proteger pessoas e patrimônio contra os riscos de incêndio em edificações.

## Quem precisa de PPCI?

Toda edificação comercial, industrial ou de uso coletivo precisa de um PPCI aprovado pelo Corpo de Bombeiros para funcionar legalmente. Isso inclui:

- **Comércios e lojas** de qualquer porte
- **Indústrias e fábricas**
- **Edifícios residenciais** com mais de uma economia
- **Estabelecimentos de ensino e saúde**
- **Locais de reunião pública** (restaurantes, bares, casas noturnas)

## O que compõe um PPCI?

O projeto define os sistemas de proteção necessários de acordo com a ocupação, área e altura da edificação:

- **Extintores de incêndio** — posicionamento e tipos adequados
- **Iluminação de emergência** — rotas de fuga iluminadas
- **Sinalização de emergência** — placas indicativas e fotoluminescentes
- **Saídas de emergência** — dimensionamento correto de portas, corredores e escadas
- **Sistema de hidrantes** — para edificações de maior porte
- **Sistema de sprinklers** — proteção automática contra incêndio
- **Alarme de incêndio** — detecção e aviso sonoro

## Como funciona o processo?

1. **Levantamento técnico** da edificação
2. **Elaboração do projeto** por engenheiro habilitado
3. **Protocolo junto ao Corpo de Bombeiros** para análise
4. **Aprovação do projeto** e emissão do alvará
5. **Execução das instalações** conforme projeto aprovado
6. **Vistoria final** para emissão do AVCB

## Por que a WI-FIRE?

Na WI-FIRE, nossos engenheiros possuem ampla experiência na elaboração de PPCIs para todos os tipos de edificação. Cuidamos de todo o processo, desde o levantamento até a aprovação final, garantindo agilidade e conformidade com as normas vigentes.

**Solicite seu orçamento** e regularize sua edificação com quem entende do assunto.`,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=500&fit=crop",
    imageAlt: "Planta de projeto contra incêndio com equipamentos de engenharia",
    date: "2026-02-15",
    readTime: "5 min",
  },
  {
    slug: "como-obter-avcb",
    title: "Como obter o AVCB: Guia completo passo a passo",
    excerpt: "Saiba o que é o Auto de Vistoria do Corpo de Bombeiros, quais documentos são necessários e como obtê-lo para sua edificação.",
    content: `O **Auto de Vistoria do Corpo de Bombeiros (AVCB)** é o documento que atesta que a edificação possui condições de segurança contra incêndio conforme o projeto aprovado.

## O que é o AVCB?

O AVCB é emitido pelo Corpo de Bombeiros após a vistoria presencial na edificação, confirmando que todos os sistemas de proteção contra incêndio estão instalados e funcionando corretamente.

## Quando o AVCB é necessário?

O AVCB é obrigatório para:

- Obtenção de **alvará de funcionamento**
- Renovação de licenças de funcionamento
- **Regularização de imóveis** comerciais e industriais
- Processos de **Habite-se**
- Cobertura de **seguros**

## Documentos necessários

Para solicitar o AVCB, você precisa:

1. **PPCI aprovado** pelo Corpo de Bombeiros
2. **ART ou RRT** do responsável técnico pela execução
3. **Notas fiscais** dos equipamentos instalados
4. **Certificados de conformidade** dos sistemas
5. **Relatório fotográfico** das instalações

## Passo a passo para obter o AVCB

1. **Tenha o PPCI aprovado** — sem ele, não é possível solicitar o AVCB
2. **Execute as instalações** conforme o projeto aprovado
3. **Reúna a documentação** necessária
4. **Solicite a vistoria** junto ao Corpo de Bombeiros
5. **Acompanhe a vistoria** com o responsável técnico
6. **Receba o AVCB** após aprovação

## Prazo de validade

O AVCB possui prazo de validade que varia conforme o tipo de ocupação:

- **Residencial**: 5 anos
- **Comercial**: 3 anos
- **Industrial**: 3 anos
- **Reunião de público**: 2 anos

## A WI-FIRE cuida de tudo

Da elaboração do PPCI até a obtenção do AVCB, a WI-FIRE acompanha todo o processo para que você não tenha preocupações. Entre em contato e solicite seu orçamento.`,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    imageAlt: "Documentação e processo de vistoria do Corpo de Bombeiros",
    date: "2026-01-20",
    readTime: "6 min",
  },
  {
    slug: "importancia-inspecao-extintores",
    title: "A importância da inspeção periódica de extintores de incêndio",
    excerpt: "Descubra por que a manutenção e inspeção regular dos extintores é essencial para a segurança e conformidade legal da sua empresa.",
    content: `Os **extintores de incêndio** são a primeira linha de defesa contra princípios de incêndio. No entanto, para que funcionem no momento crítico, precisam estar em perfeitas condições de uso.

## Por que inspecionar os extintores?

Um extintor que não funciona pode ser tão perigoso quanto não ter nenhum. A inspeção periódica garante:

- **Funcionamento correto** no momento de emergência
- **Conformidade com normas** técnicas e legislação
- **Validade do AVCB** e alvará de funcionamento
- **Proteção patrimonial** e de vidas

## Tipos de manutenção

### Inspeção mensal
Verificação visual realizada pelo responsável do estabelecimento:
- Extintor no local designado e acessível
- Lacre e selo intactos
- Manômetro na faixa verde (para extintores pressurizados)
- Ausência de danos visíveis

### Manutenção anual (recarga)
Realizada por empresa especializada e certificada:
- Verificação completa do equipamento
- Teste hidrostático quando aplicável
- Recarga do agente extintor
- Emissão de selo e etiqueta de conformidade

### Teste hidrostático (a cada 5 anos)
Ensaio de pressão no cilindro para verificar integridade estrutural.

## Tipos de extintores e suas aplicações

| Tipo | Classes de incêndio | Uso principal |
|------|---------------------|---------------|
| Água | A | Materiais sólidos (madeira, papel) |
| Pó químico ABC | A, B, C | Uso geral |
| CO₂ | B, C | Equipamentos elétricos |
| Espuma | A, B | Líquidos inflamáveis |

## Consequências da falta de manutenção

- **Multas e autuações** pelo Corpo de Bombeiros
- **Perda do AVCB**
- **Responsabilidade civil e criminal** em caso de sinistro
- **Perda de cobertura** de seguro

## Conte com a WI-Fire

Realizamos inspeções preventivas completas em todos os equipamentos contra incêndio do seu estabelecimento, garantindo conformidade e segurança. Agende uma visita técnica.`,
    image: inspecaoExtintores,
    imageAlt: "Engenheiro realizando inspeção de extintor de incêndio com prancheta",
    date: "2025-12-10",
    readTime: "4 min",
  },
  {
    slug: "diferenca-ppci-rpci",
    title: "Diferença entre PPCI e RPCI: Qual você precisa?",
    excerpt: "Entenda as diferenças entre Projeto Preventivo e Relatório Preventivo Contra Incêndio e saiba qual se aplica à sua edificação.",
    content: `Uma dúvida frequente entre proprietários e responsáveis por edificações é: qual a diferença entre **PPCI** e **RPCI**? Ambos são documentos exigidos pelo Corpo de Bombeiros, mas se aplicam a situações diferentes.

## PPCI — Projeto Preventivo Contra Incêndio

O PPCI é um **projeto técnico completo** que define todos os sistemas de proteção contra incêndio necessários para uma edificação. É exigido para:

- Edificações **novas** ou em **reforma significativa**
- Construções com **área superior a 750m²** (pode variar por estado)
- Edificações com **altura superior a 12 metros**
- Ocupações de **risco elevado** independente da área

O PPCI inclui plantas baixas, memoriais descritivos, cálculos de dimensionamento e especificações técnicas detalhadas.

## RPCI — Relatório Preventivo Contra Incêndio

O RPCI é um **documento simplificado** que comprova que a edificação possui os sistemas básicos de proteção contra incêndio. É aplicável para:

- Edificações de **pequeno porte** (área até 750m²)
- Ocupações de **baixo e médio risco**
- Edificações **existentes** que precisam regularizar a situação

O RPCI é mais simples que o PPCI, com menos exigências técnicas e processo de aprovação mais rápido.

## Comparativo

| Característica | PPCI | RPCI |
|---------------|------|------|
| Complexidade | Alta | Baixa |
| Aplicação | Edificações maiores | Edificações menores |
| Prazo de aprovação | Maior | Menor |
| Custo | Maior | Menor |
| Sistemas exigidos | Completos | Básicos |

## Como saber qual preciso?

A definição depende de fatores como:
- **Área total** da edificação
- **Altura** da construção
- **Tipo de ocupação** (comercial, industrial, residencial)
- **Grau de risco** da atividade

## Consultoria WI-Fire

Não sabe se precisa de PPCI ou RPCI? A WI-Fire faz a análise da sua edificação e indica a melhor solução. Entre em contato para uma consultoria personalizada.`,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop",
    imageAlt: "Plantas e projetos de engenharia contra incêndio sobre mesa",
    date: "2025-11-05",
    readTime: "5 min",
  },
  {
    slug: "normas-abnt-seguranca-incendio",
    title: "Principais normas ABNT de segurança contra incêndio que você precisa conhecer",
    excerpt: "Conheça as normas técnicas da ABNT que regulamentam os sistemas de proteção contra incêndio em edificações no Brasil.",
    content: `As normas da **ABNT (Associação Brasileira de Normas Técnicas)** são fundamentais para garantir a padronização e eficácia dos sistemas de proteção contra incêndio. Conhecê-las é essencial para proprietários, gestores e profissionais da área.

## Por que as normas ABNT são importantes?

As normas técnicas garantem que os sistemas de proteção contra incêndio sejam projetados, instalados e mantidos de acordo com padrões comprovados de segurança. Seu cumprimento é obrigatório e fiscalizado pelo Corpo de Bombeiros.

## Principais normas

### NBR 12693 — Extintores de Incêndio
Define critérios para seleção, dimensionamento, instalação, inspeção e manutenção de extintores portáteis e sobre rodas.

### NBR 13714 — Sistemas de Hidrantes
Estabelece requisitos para projeto, instalação e manutenção de sistemas de hidrantes e mangotinhos para combate a incêndio.

### NBR 10898 — Iluminação de Emergência
Especifica os requisitos mínimos para sistemas de iluminação de emergência em edificações, garantindo a evacuação segura.

### NBR 13434 — Sinalização de Emergência
Define os requisitos para sinalização de segurança contra incêndio e pânico, incluindo placas fotoluminescentes.

### NBR 9077 — Saídas de Emergência
Regulamenta o dimensionamento de saídas de emergência, incluindo portas, corredores, escadas e rampas.

### NBR 10897 — Sistemas de Sprinklers
Estabelece critérios para projeto e instalação de sistemas automáticos de chuveiros (sprinklers) para extinção de incêndio.

### NBR 17240 — Sistemas de Detecção e Alarme
Define requisitos para projeto, instalação e manutenção de sistemas de detecção e alarme de incêndio.

## Consequências do descumprimento

- **Reprovação do PPCI** pelo Corpo de Bombeiros
- **Negativa de emissão do AVCB**
- **Multas e interdições**
- **Responsabilidade legal** em caso de sinistro

## WI-Fire: projetos em conformidade

Todos os projetos da WI-Fire são elaborados em total conformidade com as normas ABNT vigentes. Garantimos que sua edificação atenda a todos os requisitos técnicos e legais.`,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    imageAlt: "Profissional analisando documentação e normas técnicas de engenharia",
    date: "2025-10-15",
    readTime: "6 min",
  },
  {
    slug: "sinalizacao-emergencia-edificacoes",
    title: "Sinalização de emergência: tipos, normas e obrigatoriedade",
    excerpt: "Saiba quais são os tipos de sinalização de emergência obrigatórios, como devem ser instalados e qual a importância para a segurança da sua edificação.",
    content: `A **sinalização de emergência** é um dos sistemas mais importantes de proteção contra incêndio. Ela orienta as pessoas durante uma evacuação e indica a localização dos equipamentos de combate a incêndio.

## Tipos de sinalização

### Sinalização de orientação e salvamento
- **Saída de emergência** — indica o caminho para as saídas
- **Rota de fuga** — setas direcionais no piso e paredes
- **Número do pavimento** — identificação em escadas

### Sinalização de equipamentos
- **Extintor de incêndio** — indica a localização dos extintores
- **Hidrante** — sinaliza pontos de hidrantes
- **Alarme de incêndio** — indica acionadores manuais
- **Porta corta-fogo** — identifica portas de proteção

### Sinalização de proibição
- **Proibido fumar**
- **Proibido utilizar elevador em caso de incêndio**
- **Proibido obstruir** passagens e saídas

## Características técnicas

As placas de sinalização devem atender aos seguintes requisitos:

- **Material fotoluminescente** — visível no escuro por no mínimo 60 minutos
- **Dimensões padronizadas** conforme NBR 13434
- **Altura de instalação** adequada (entre 1,80m e 2,40m do piso)
- **Cores normalizadas** — verde para salvamento, vermelho para equipamentos

## Onde é obrigatória?

A sinalização de emergência é obrigatória em:

- **Todas as edificações comerciais** e industriais
- **Edifícios residenciais** com mais de uma economia
- **Locais de reunião pública**
- **Estabelecimentos de ensino e saúde**

## Manutenção da sinalização

- Verificação periódica da **integridade das placas**
- Substituição de placas danificadas ou desbotadas
- Teste da **capacidade fotoluminescente**
- Verificação de **desobstrução** das rotas sinalizadas

## Sinalização correta com a WI-Fire

A WI-Fire projeta e acompanha a instalação de toda a sinalização de emergência conforme as normas ABNT. Garanta a segurança dos ocupantes da sua edificação.`,
    image: sinalizacaoEmergencia,
    imageAlt: "Placa de sinalização de saída de emergência instalada no teto de estabelecimento comercial",
    date: "2025-09-20",
    readTime: "5 min",
  },
  {
    slug: "como-escolher-extintor-correto",
    title: "Como escolher o extintor de incêndio correto para seu estabelecimento",
    excerpt: "Guia prático para entender os tipos de extintores, classes de incêndio e como dimensionar corretamente os equipamentos para sua empresa.",
    content: `Escolher o **extintor de incêndio correto** é fundamental para garantir uma resposta eficaz em caso de princípio de incêndio. Cada tipo de extintor é projetado para combater classes específicas de fogo.

## Classes de incêndio

### Classe A — Materiais sólidos
Incêndios em materiais como madeira, papel, tecido, borracha e plásticos. Deixam resíduos (cinzas e brasas).

### Classe B — Líquidos inflamáveis
Incêndios em líquidos como gasolina, álcool, tintas, solventes e graxas. Queimam na superfície.

### Classe C — Equipamentos elétricos
Incêndios em equipamentos elétricos energizados como quadros de força, computadores e motores elétricos.

### Classe D — Metais combustíveis
Incêndios em metais como magnésio, titânio e sódio. Requerem agentes extintores especiais.

### Classe K — Óleos e gorduras de cozinha
Incêndios em óleos e gorduras utilizados em cozinhas industriais e comerciais.

## Tipos de extintores

### Extintor de Água Pressurizada (AP)
- **Classes**: A
- **Uso**: escritórios, escolas, residências
- **Capacidade**: 10 litros

### Extintor de Pó Químico Seco (PQS) ABC
- **Classes**: A, B e C
- **Uso**: uso geral — o mais versátil
- **Capacidade**: 4 kg, 6 kg, 8 kg ou 12 kg

### Extintor de CO₂ (Gás Carbônico)
- **Classes**: B e C
- **Uso**: equipamentos elétricos, CPDs, laboratórios
- **Capacidade**: 4 kg ou 6 kg

### Extintor de Espuma Mecânica
- **Classes**: A e B
- **Uso**: áreas com líquidos inflamáveis

## Dimensionamento correto

O dimensionamento dos extintores segue a **NBR 12693** e considera:

- **Área do pavimento** — define a quantidade mínima
- **Classe de risco** — baixo, médio ou alto
- **Distância máxima a percorrer** — até 20 metros para classe A, até 15 metros para classe B
- **Capacidade extintora** — poder de extinção mínimo exigido

## Erros comuns

- Utilizar extintor de **água em equipamentos elétricos** (risco de choque)
- **Extintores vencidos** ou sem manutenção
- **Quantidade insuficiente** para a área
- **Localização inadequada** — obstruídos ou em locais de difícil acesso

## Assessoria WI-Fire

A WI-Fire realiza o dimensionamento correto dos extintores para sua edificação, garantindo conformidade com a NBR 12693 e aprovação junto ao Corpo de Bombeiros.`,
    image: escolherExtintor,
    imageAlt: "Extintor de incêndio instalado em pilar de estabelecimento comercial",
    date: "2025-08-18",
    readTime: "7 min",
  },
  {
    slug: "sistema-hidrantes-prediais",
    title: "Sistema de hidrantes prediais: como funciona e quando é obrigatório",
    excerpt: "Entenda como funciona o sistema de hidrantes em edificações, quando ele é exigido e quais são os componentes essenciais para sua instalação.",
    content: `O **sistema de hidrantes prediais** é um dos principais sistemas de combate a incêndio em edificações de médio e grande porte. Ele fornece água sob pressão para o combate ao fogo por meio de mangueiras e esguichos.

## O que compõe o sistema de hidrantes?

### Reserva de incêndio (RTI)
Volume de água dedicado exclusivamente ao combate a incêndio, armazenado no reservatório superior ou inferior da edificação. O volume varia conforme a classificação de risco.

### Tubulação
Rede de tubos que conduz a água do reservatório até os pontos de hidrante. Deve ser dimensionada conforme a vazão e pressão exigidas.

### Hidrantes de parede
Pontos de utilização com registro, mangueira e esguicho, instalados em abrigos metálicos pintados de vermelho. Posicionados em locais estratégicos para cobertura de toda a área.

### Bomba de incêndio
Sistema de bombeamento que garante vazão e pressão adequadas. Pode ser elétrica ou a diesel, com partida automática.

### Mangueiras e esguichos
- **Mangueiras**: tipo 1 (mangotinhos de 25mm) ou tipo 2 (mangueiras de 40mm ou 65mm)
- **Esguichos**: reguláveis (jato compacto e neblina) ou de jato compacto

## Quando é obrigatório?

O sistema de hidrantes é exigido conforme a **área**, **altura** e **ocupação** da edificação:

- Edificações **comerciais acima de 750m²**
- Edificações com **altura superior a 12 metros**
- **Indústrias** de risco médio e alto
- **Shopping centers** e grandes lojas
- **Hospitais e hotéis**
- **Depósitos e galpões** acima de determinada área

## Manutenção do sistema

A manutenção periódica é essencial e inclui:

- **Teste mensal** da bomba de incêndio
- **Verificação semestral** das mangueiras e conexões
- **Teste anual** de vazão e pressão
- **Revalidação** das mangueiras (teste hidrostático a cada 5 anos)

## Projeto e execução com a WI-Fire

A WI-Fire projeta e acompanha a instalação de sistemas de hidrantes em total conformidade com a NBR 13714, garantindo o funcionamento adequado e aprovação pelo Corpo de Bombeiros.`,
    image: hidrantesPrediais,
    imageAlt: "Caixa de hidrante predial com mangueiras de incêndio enroladas",
    date: "2025-07-25",
    readTime: "6 min",
  },
];
