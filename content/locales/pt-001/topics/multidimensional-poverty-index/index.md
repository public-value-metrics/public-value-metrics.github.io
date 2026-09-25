# Índice de Pobreza Multidimensional (MPI)

O MPI mede a pobreza como privações sobrepostas que uma pessoa experimenta em simultâneo — em saúde,
educação e padrão de vida — em vez de apenas o rendimento a cair abaixo de uma linha. Foi
desenvolvido pela Oxford Poverty and Human Development Initiative (OPHI) com Sabina Alkire e James
Foster, e é publicado conjuntamente com o PNUD em todos os Human Development Reports desde 2010, a
par do [Índice de Desenvolvimento Humano](../human-development-index/).

## Por que isso importa

As linhas de pobreza de rendimento não captam pessoas que têm rendimento monetário suficiente mas não
têm água potável, escolaridade, ou sobrevivem à morte de um filho — e não captam o facto de as
privações se agruparem: um agregado familiar sem eletricidade tem uma probabilidade
desproporcionadamente maior de também não ter saneamento e de ter uma criança desnutrida. O método
Alkire-Foster, sobre o qual o MPI é construído, conta as privações de cada pessoa em dez indicadores
agrupados em três dimensões igualmente ponderadas — saúde, educação, padrão de vida — e só classifica
alguém como "pobre segundo o MPI" se a sua pontuação de privação ponderada ultrapassar um limiar
fixo, captando a sobreposição que um conjunto de estatísticas separadas de indicador único não
consegue. A OPHI publica a metodologia completa e os dados por país em
<https://ophi.org.uk/multidimensional-poverty-index/>; o MPI global que mantém conjuntamente com o
PNUD cobre agora mais de 110 países. Para software construído para programas antipobreza —
transferências monetárias, triagem de assistência social, direcionamento de ajuda — o conjunto de
indicadores do MPI é muitas vezes a coisa mais próxima de um esquema de privação padronizado já
validado em dezenas de gabinetes estatísticos nacionais.

## A matemática

```
10 indicadores, 3 dimensões, cada dimensão ponderada em 1/3:

Saúde (1/3):              nutrição (1/6), mortalidade infantil (1/6)
Educação (1/3):           anos de escolaridade (1/6), assiduidade
                           escolar (1/6)
Padrão de vida (1/3):     combustível de cozinha, saneamento, água
                           potável, eletricidade, habitação, bens
                           (1/18 cada)

pontuação de privação (c) = soma dos pesos dos indicadores em que a
                             pessoa é privada

a pessoa é "pobre segundo o MPI" se c ≥ 1/3 (o corte de pobreza,
                                              k = 33%)

H (rácio de contagem) = número de pobres segundo o MPI / população
                         total
A (intensidade)        = pontuação de privação média apenas entre os
                          pobres segundo o MPI

MPI = H × A
```

Porque o MPI multiplica a *quota* que é pobre pela *intensidade* com que é pobre, duas regiões com o
mesmo rácio de contagem podem ter pontuações de MPI muito diferentes se as privações forem mais
graves numa — a mesma lógica de "nenhuma substituição entre dimensões" por trás da média geométrica
do IDH.

## Exemplo prático

**Inquérito nacional a 1.000 pessoas**: 350 são identificadas como multidimensionalmente pobres
(pontuação de privação ≥ 33%). Entre esses 350 indivíduos pobres, a pontuação de privação média é
45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Comparação de dois distritos com rácio de contagem igual**: o Distrito A tem H = 0,30 e A = 0,40
(muitos pobres, moderadamente privados); o Distrito B tem H = 0,30 e A = 0,60 (o mesmo número de
pobres, mas mais severamente privados — sem eletricidade *e* sem saneamento *e* sem assiduidade
escolar em simultâneo).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Mesmo rácio de contagem, MPI 50% mais alto no Distrito B — um sistema de direcionamento baseado
apenas na pobreza por rácio de contagem classificaria os dois distritos de forma idêntica e perderia
que o Distrito B precisa de intervenção mais profunda.

## Ligação com a engenharia de software

- Os sistemas de gestão de processos e elegibilidade para programas sociais já armazenam
  frequentemente vários dos dez indicadores (habitação, assiduidade escolar, marcadores de saúde) em
  silos separados; o método de contagem Alkire-Foster é um esquema pronto a usar para os combinar
  numa única pontuação de privação em vez de construir um modelo de pontuação à medida do zero.
- A divisão contagem/intensidade (H × A) é um padrão geralmente útil para qualquer painel que reporte
  "quantos são afetados" a par de "quão gravemente" — colapsar ambos num único número, como fazem as
  estatísticas de prevalência bruta, esconde exatamente o caso que precisa de mais recursos.
- Os painéis de indicadores ao estilo MPI emparelham naturalmente com o relato de
  [custo por beneficiário](../cost-per-beneficiary/) para programas antipobreza: o custo por ponto de
  redução do MPI é uma unidade defensável para comparar intervenções muito diferentes (transferência
  monetária vs. infraestrutura de saneamento).

## Armadilhas

- **Tratar os dez indicadores como universais** — os indicadores do MPI global da OPHI são
  calibrados para comparabilidade entre países; os MPIs nacionais (muitos países, incluindo vários no
  Sul da Ásia e em África, publicam os seus próprios) adaptam indicadores e pesos ao contexto local, e
  os dois não são diretamente comparáveis.
- **Reportar apenas H** — o rácio de contagem ignora inteiramente a intensidade; reporte ou calcule
  sempre A a par dele, ou o próprio MPI.
- **Presumir que os pobres segundo o MPI e os pobres em rendimento são a mesma população** — os
  próprios resumos por país da OPHI mostram tipicamente apenas sobreposição parcial entre os dois; um
  programa que direcione apenas os pobres em rendimento falhará sistematicamente uma quota
  significativa dos multidimensionalmente pobres.

## Fontes

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
