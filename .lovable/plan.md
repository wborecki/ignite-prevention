

## Problemas atuais do carrossel de clientes

Pela screenshot, o carrossel tem excesso de espaço vazio, logos desalinhados verticalmente (tamanhos muito diferentes), e a seção ocupa espaço demais sem causar impacto visual.

## Proposta de melhoria

**1. Reduzir padding e altura da seção** -- menos espaço morto entre o titulo e os logos, e entre os logos e a proxima seção.

**2. Diminuir tamanho dos logos** -- de `h-32` para `h-16`/`h-20`, com containers menores (`h-20` ao inves de `h-36`), para ficarem mais compactos e uniformes.

**3. Adicionar fade nas bordas** -- gradientes transparentes nas laterais esquerda e direita do carrossel para um efeito de "desvanecimento" suave, dando aspecto mais profissional.

**4. Reduzir gap e min-width** -- de `gap-12 min-w-[260px]` para `gap-8 min-w-[180px]`, mostrando mais logos simultaneamente na tela.

**5. Velocidade da animação** -- de 30s para 25s para um ritmo mais dinâmico.

**6. Remover border-top** -- a borda superior sutil entre hero e clientes pode ser removida para um visual mais limpo e integrado.

### Resumo visual

```text
ANTES:                          DEPOIS:
┌─────────────────────┐        ┌─────────────────────┐
│     Título          │        │     Título          │
│                     │        │ ░ [logo][logo][logo] ░│
│  [LOGO]  [LOGO]     │        │   compacto + fades   │
│                     │        └─────────────────────┘
│   muito espaço      │
└─────────────────────┘
```

### Arquivos alterados
- `src/components/ClientsCarousel.tsx` -- ajustar classes de tamanho, gap, padding
- `src/index.css` -- adicionar pseudo-elementos de fade lateral e ajustar velocidade

