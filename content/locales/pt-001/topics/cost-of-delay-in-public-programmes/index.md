# Custo do Atraso em Programas Públicos (CoD)

O Custo do Atraso (Cost of Delay, CoD) é o valor público perdido por unidade de tempo em que uma
alteração de programa, serviço ou sistema *ainda não* foi entregue. É a métrica-ponte mestra deste
capítulo: converte "a entrada em produção atrasou-se seis meses" em libras por semana, ou em WELLBYs
por semana, para que o atraso possa ser discutido na mesma moeda do próprio caso de negócio.

## Por que isso importa

A regra de Reinertsen — "se só conseguires quantificar uma coisa, quantifica o Custo do Atraso" —
transpõe-se para o governo quase sem alterações, porque os programas públicos estão especialmente
expostos a ela: os casos de negócio são aprovados face a um fluxo de benefício previsto, mas esse
fluxo só começa a correr na entrada em produção, e cada semana de atraso é uma semana de valor
perdido que ninguém precifica no registo de riscos. O escrutínio repetido do National Audit Office
sobre a implementação do Universal Credit (ver os seus relatórios "Rolling Out Universal Credit",
<https://www.nao.org.uk/>) ilustra o padrão: o atraso no calendário foi acompanhado e reportado, mas
o custo em libras por semana de *ainda não* entregar o sistema reformado à próxima leva de
requerentes raramente foi declarado como valor de destaque, mesmo sendo o número que deveria ter
orientado a priorização e o escalonamento. Sem um valor de CoD, um programa atrasado parece um
problema de calendário para a comissão de entrega; com um, é um problema de erosão de valor para o
responsável contabilístico (accounting officer).

## A matemática

```
CoD = benefício por unidade de tempo perdido enquanto não entregue
      (£/semana ou WELLBYs/semana)

Perda total do atraso = CoD × duração do atraso

Fluxos de benefício a somar para programas públicos:
  poupanças libertadoras de tesouraria (redução de fraude/erro,
                             custos temporários evitados)
+ capacidade não monetária libertada (horas de gestor de processos/
                             funcionário × custo carregado)
+ benefício de bem-estar    (WELLBYs × £13.000/WELLBY, orientação
                             suplementar sobre bem-estar do Green Book
                             do HMT, preços de 2019)
```

Para serviços voltados para o cidadão, denomine também em bem-estar, além de dinheiro — ver
[anos de vida ajustados pelo bem-estar](../wellbeing-adjusted-life-years/) para a unidade
subjacente, e [custo de oportunidade na despesa pública](../opportunity-cost-in-public-spending/)
para aquilo que a libra atrasada poderia de outro modo ter financiado.

## Exemplo prático

**Autarquia local**: uma atualização do sistema de subsídio de habitação reduz o erro de
sobrepagamento em £150/pedido/ano em 20.000 pedidos ativos.

```
Benefício anual = 150 × 20.000 = £3.000.000/ano
CoD = 3.000.000 / 52 ≈ £57.700/semana
Um atraso de implementação de 12 meses custa 52 × 57.700 ≈
£3.000.000 em erro evitável.
```

**Agência do governo central**: um serviço de avaliação de subsídio por incapacidade, entregue seis
meses (26 semanas) mais tarde do que planeado, significa que 200.000 requerentes/ano esperam, em
média, mais três semanas por uma decisão. Cada semana extra de incerteza financeira é modelada com
um efeito de −0,0018 WELLBY (ponto de satisfação com a vida):

```
Perda de WELLBY por requerente = 3 × 0,0018 = 0,0054
Perda anual de WELLBY = 200.000 × 0,0054 = 1.080 WELLBYs/ano
CoD_bem-estar = 1.080 / 52 ≈ 20,8 WELLBYs/semana
CoD_dinheiro = 20,8 × £13.000 ≈ £270.000/semana de valor de bem-estar
```

Um atraso de 26 semanas "custa", portanto, aproximadamente 540 WELLBYs — no valor de cerca de £7
milhões segundo a avaliação de bem-estar do Green Book — reenquadrando uma data de entrada em
produção falhada como um evento de bem-estar do cidadão, não uma nota de rodapé de gestão de
projeto.

## Ligação com a engenharia de software

O CoD é o que torna as [métricas DORA](../dora-metrics-for-public-value/) e as
[métricas de fluxo](../flow-metrics-in-government-delivery/) financeiramente legíveis: o tempo de
espera no pipeline × CoD é dinheiro (ou bem-estar) queimado em filas antes de sequer chegar a um
cidadão. Concretamente:

- **Priorização**: classificar um backlog por CoD ÷ duração em vez de pela antiguidade da parte
  interessada — o análogo, em engenharia de software, da exigência do Green Book de avaliar opções
  pelo valor, não por quem as pede.
- **Contratação pública**: um ciclo de contratação por quadro de referência (framework) de 12–18
  meses tem um CoD; precificá-lo altera o caso de urgência para vias aceleradas, e alimenta
  diretamente as decisões de [construir vs. comprar](../build-vs-buy-in-government/), onde o tempo
  até ao valor é um fator de decisão.
- **Caso de benefícios**: todo o valor de CoD citado na aprovação deve reaparecer na
  [realização de benefícios](../benefits-realization/) — se o custo do atraso foi real, o benefício
  acelerado deve ser mensurável depois da entrada em produção.

## Armadilhas

- **Presumir um CoD linear**: alguns serviços públicos têm um valor em forma de prazo-limite (uma
  data de conformidade estatutária — o CoD salta para níveis de risco de aplicação coerciva após a
  data, próximo de zero antes dela) em vez de uma taxa semanal suave. Classifique o perfil de
  urgência antes de multiplicar.
- **CoD sobre produtos de que ninguém precisa**: o atraso só tem custo se a coisa não entregue tiver
  valor; um sistema que ninguém vai usar tem CoD zero, por mais atrasado que esteja.
- **Contar em duplicado o atraso e o desconto**: a [taxa de desconto social](../social-discount-rate/)
  já precifica o tempo em horizontes de avaliação plurianuais; o CoD é a versão operacional, dentro
  do horizonte, para semanas e meses. Use o CoD para atrasos de calendário, a variação do VAL para
  reformulações de calendário plurianuais.

## Fontes

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
