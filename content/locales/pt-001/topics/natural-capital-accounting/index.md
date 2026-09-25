# Contabilidade de Capital Natural

A contabilidade de capital natural coloca o ambiente no mesmo patamar que qualquer outro ativo
nacional ou organizacional: mede o stock de recursos naturais (florestas, solos, rios, zonas húmidas,
a atmosfera) e o fluxo de serviços que produzem (sequestro de carbono, proteção contra inundações,
recreação, alimento), tanto em termos físicos como monetários, para que o esgotamento ambiental
apareça na tomada de decisão da mesma forma que reduzir o capital financeiro apareceria. O Reino
Unido é um dos governos mais avançados a fazer isto sistematicamente, impulsionado pelo 25 Year
Environment Plan (2018) e implementado através das contas de Capital Natural do Reino Unido do ONS e
das orientações suplementares do Green Book do HM Treasury.

## Por que isso importa

A contabilidade convencional — corporativa e governamental — trata uma floresta como não tendo valor
até ser abatida e vendida como madeira, altura em que se torna PIB. A contabilidade de capital natural
existe para fechar essa lacuna: o 25 Year Environment Plan do Reino Unido comprometeu o governo a
incorporar o pensamento de capital natural em toda a política, declarando explicitamente a ambição de
ser "a primeira geração a deixar o ambiente num estado melhor do que o encontrou". O ONS publica
desde então contas anuais de Capital Natural do Reino Unido
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
que estimam o valor monetário dos serviços dos ecossistemas — desde a recreação em florestas aos
benefícios de saúde do espaço verde urbano até ao armazenamento de carbono em turfeiras — usando o
mesmo enquadramento de Contas Nacionais usado para o capital produzido, para que o capital natural
possa eventualmente estar no mesmo balanço que estradas, edifícios e equipamento. As orientações
Enabling a Natural Capital Approach (ENCA) do HM Treasury, suplementares ao Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
estabelecem como os avaliadores devem valorizar custos e benefícios ambientais em casos de negócio,
para que um esquema rodoviário que destrói uma floresta antiga ou um esquema de controlo de
inundações que restaura uma zona húmida possam ser comparados em termos monetários consistentes, em
vez de um ter um número e o outro um parágrafo de ressalvas.

## A matemática

```
Valor do ativo de serviço do ecossistema = VAL do fluxo de serviços
                                            que o ativo fornece

Valor do ativo = Σ (t = 1 a T) [valor do fluxo de serviço anual_t /
                                 (1 + r)^t]

onde:
  valor do fluxo de serviço_t = quantidade de serviço no ano t ×
                                 valor unitário
                                 (por exemplo, visitas recreativas ×
                                  valor por visita; toneladas de
                                  carbono sequestrado × preço do
                                  carbono)
  r = taxa de desconto (taxa de desconto social do Green Book — ver
      [taxa de desconto social](../social-discount-rate/))
  T = horizonte temporal ao longo do qual se espera que o ativo
      forneça o serviço
```

Esta é a estrutura de valor atual líquido idêntica à usada para valorizar capital produzido ou
avaliar qualquer investimento público ao abrigo da [avaliação do Green Book](../green-book-appraisal/)
— a contribuição da contabilidade de capital natural é fornecer quantidades físicas credíveis e
valores unitários para serviços que anteriormente eram precificados a zero.

## Exemplo prático

**Floresta urbana, valor recreativo**: uma floresta de 50 hectares recebe uma estimativa de 80.000
visitas recreativas por ano, cada uma avaliada (através do método de custo de viagem ou de preferência
declarada — ver [avaliação por preferência revelada](../revealed-preference-valuation/) e
[avaliação por preferência declarada](../stated-preference-valuation/)) em £3 por visita. Espera-se
que a floresta continue a fornecer este serviço durante 50 anos, avaliada a uma taxa de desconto de
3,5%.

```
Valor recreativo anual = 80.000 × £3 = £240.000/ano

VAL ao longo de 50 anos a 3,5% ≈ £240.000 × fator de anuidade (3,5%,
50 anos)
fator de anuidade (3,5%, 50) ≈ 21,4

Valor do ativo ≈ £240.000 × 21,4 ≈ £5.136.000
```

**Acrescentando o armazenamento de carbono**: a mesma floresta sequestra uma estimativa de 400
toneladas de CO2 por ano, avaliadas ao preço de carbono não transacionado do governo de
aproximadamente £75/tonelada (ilustrativo — usar os valores de carbono publicados atuais do
BEIS/DESNZ para uma avaliação real).

```
Valor anual do carbono = 400 × £75 = £30.000/ano
VAL ao longo de 50 anos a 3,5% ≈ £30.000 × 21,4 ≈ £642.000

Valor total do ativo florestal (recreação + carbono) ≈ £5.136.000 +
                                                        £642.000
                                                       ≈ £5.778.000
```

Isto é antes de acrescentar a atenuação de inundações, a biodiversidade ou os serviços de qualidade
do ar que as orientações ENCA também pedem aos avaliadores para considerar — o total é
deliberadamente um piso, não um teto.

## Ligação com a engenharia de software

- Os sistemas ambientais e de gestão de ativos para autarquias locais e agências (parques, estradas,
  massas de água) podem anexar um registo de capital natural a par do seu registo de ativos físicos,
  usando o mesmo padrão de fluxo de serviço vezes valor unitário que qualquer outra
  [base de dados de custo unitário](../unit-cost-databases/) que a organização mantenha.
- Como o VAL do capital natural é sensível à taxa de desconto (ver o fator de anuidade do exemplo
  prático), qualquer ferramenta que o calcule deve expor a taxa e o horizonte como dados de entrada
  visíveis, não enterrá-los — o mesmo princípio de transparência coberto em
  [equidade intergeracional e desconto de sustentabilidade](../intergenerational-equity-and-sustainability-discounting/).
- As contas de capital natural são cada vez mais um dado de entrada exigido nas secções de impacto
  ambiental de um caso de negócio da [avaliação do Green Book](../green-book-appraisal/); uma equipa
  de entrega que construa ferramentas de caso de negócio deve tratar as contas do ONS e os valores
  unitários da ENCA como dados de referência a integrar, não algo que os avaliadores recalculam do
  zero de cada vez.

## Armadilhas

- **Contagem dupla de serviços de ecossistema sobrepostos** — o valor recreativo e o valor de
  biodiversidade para o mesmo local podem partilhar dados de disposição a pagar subjacentes; as
  orientações ENCA alertam explicitamente contra somar avaliações derivadas de instrumentos de
  inquérito sobrepostos.
- **Tratar o valor de um ativo de capital natural como estático** — os fluxos de serviço mudam com o
  clima, a gestão e a pressão do uso do solo; o valor de carbono e atenuação de inundações de uma
  floresta nesta década não é uma propriedade permanente do local.
- **Usar valores unitários médios nacionais para uma decisão altamente local** — um hectare de
  floresta urbana acessível e um hectare de terreno alto remoto têm valores recreativos muito
  diferentes; as orientações ENCA recomendam valores locais ou específicos do local onde disponíveis,
  em vez de recorrer por defeito a médias nacionais.

## Fontes

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
