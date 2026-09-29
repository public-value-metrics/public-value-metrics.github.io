# Ponderação Distributiva

A ponderação distributiva ajusta o valor monetário de um custo ou benefício consoante quem o recebe,
segundo o princípio de que uma libra extra vale mais para um agregado familiar pobre do que para um
rico. O Green Book do HM Treasury fornece um método explícito para aplicar esta ponderação,
construído sobre a utilidade marginal decrescente do rendimento, para que as avaliações não tratem
silenciosamente uma libra ganha pelo decil mais rico como equivalente em valor a uma libra ganha pelo
mais pobre.

## Por que isso importa

A análise de custo-benefício padrão soma libras sem perguntar de quem são essas libras, o que
implicitamente presume que uma libra vale o mesmo para todos — um pressuposto que os economistas há
muito sabem ser falso. Um agregado familiar que ganha £15.000/ano vive um ganho de £1.000 de forma
muito diferente de um agregado familiar que ganha £150.000/ano, porque a utilidade marginal do
rendimento diminui à medida que o rendimento aumenta. Sem ponderação, a avaliação padrão favorece
sistematicamente intervenções que beneficiam grupos mais ricos, já em melhor situação, porque o seu
maior poder de despesa infla a avaliação monetária dos benefícios que os atingem (uma requalificação
de um parque perto de habitação cara "mostra" um benefício de valor imobiliário maior do que a mesma
requalificação perto de habitação barata, puramente porque os preços são mais altos, não porque o
ganho de bem-estar seja maior).

As orientações suplementares do Green Book sobre análise distributiva, reforçadas após a revisão de
2020 do Tesouro responder a críticas de que a metodologia de avaliação favorecia sistematicamente
Londres e o Sudeste, estabelecem uma abordagem formal de ponderação baseada numa elasticidade
assumida da utilidade marginal do rendimento de cerca de 1,3 — o que significa que duplicar o
rendimento reduz aproximadamente a metade (especificamente, 2^-1,3 ≈ 0,41 vezes) o valor marginal de
uma libra adicional. Isto não é um ajuste de arredondamento: aplicá-lo pode mudar qual de dois
programas concorrentes mostra o valor atual líquido mais elevado, particularmente ao comparar uma
intervenção concentrada numa área desfavorecida com uma distribuída pela população em geral.

## A matemática

O peso distributivo do Green Book para uma libra de benefício que recai sobre um agregado familiar
com nível de rendimento y, relativo a uma libra ao nível de rendimento médio nacional ȳ:

```
Peso(y) = (ȳ / y)^e

onde:
  y  = rendimento do agregado familiar (ou rendimento do grupo
       afetado)
  ȳ  = rendimento médio (de referência) do agregado familiar
  e  = elasticidade da utilidade marginal do rendimento (Green Book:
       aproximadamente 1,3)
```

Aplicar pesos aos benefícios líquidos:

```
Benefício ponderado = Σ [benefício não ponderado ao grupo i × Peso(y_i)]
```

Um grupo que ganha metade da média nacional (y = 0,5ȳ) obtém um peso de (1/0,5)^1,3 = 2^1,3 ≈ 2,46 —
cada libra de benefício para esse grupo conta como valendo aproximadamente 2,46 vezes uma libra para
um agregado familiar de rendimento médio.

## Exemplo prático

**Dois programas locais concorrentes**, cada um com um benefício líquido não ponderado de £2
milhões/ano, a concorrer ao mesmo fundo regional de crescimento:

- *Programa A*: um regime de apoio empresarial numa cidade próspera, rendimento médio do agregado
  familiar £45.000 (cerca de 1,3× a média nacional assumida de £35.000).
- *Programa B*: um programa de competências numa freguesia desfavorecida, rendimento médio do
  agregado familiar £18.000 (cerca de 0,51× a média nacional).

```
Peso(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Peso(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Benefício ponderado A = £2.000.000 × 0,72 = £1,44 milhões
Benefício ponderado B = £2.000.000 × 2,53 = £5,06 milhões
```

Sem ponderação, os dois programas estão empatados. Ponderado pelo impacto distributivo, o benefício
do Programa B é mais de três vezes maior — um resultado que inverte a recomendação de financiamento
e reflete o propósito explícito do Green Book de exigir que a ponderação seja mostrada, não apenas o
rácio benefício-custo não ponderado.

**Alocação de subvenção de uma instituição de solidariedade**: um financiador que compare uma
subvenção de £500.000 a atingir 1.000 agregados familiares de baixo rendimento (peso ≈ 2,0, valor
ponderado equivalente a £1 milhão) com os mesmos £500.000 a atingir 1.000 agregados familiares de
rendimento médio (peso ≈ 1,0, valor ponderado equivalente a £500.000) deve mostrar o caso
distributivo explicitamente no seu documento de conselho, não deixá-lo por inferir.

## Ligação com a engenharia de software

A ponderação distributiva raramente aparece diretamente nas métricas de entrega de software, mas
deve moldar a forma como as equipas de engenharia e de dados desenham a medição e o direcionamento:

- Ao construir um painel de impacto ou uma calculadora de benefícios, exponha o perfil de rendimento
  ou de privação de quem é afetado, não apenas um total agregado de benefício — os valores agregados
  sem desagregação distributiva escondem exatamente a inversão mostrada acima.
- Ligue a lógica de direcionamento no desenho de serviços aos mesmos dados de privação que o Green
  Book usa — ver [Índice de Privação Múltipla](../index-of-multiple-deprivation/) — para que o
  alcance de um serviço digital possa ser avaliado quanto à equidade, não apenas à eficiência (o
  contestado quarto "E" em [valor pelo dinheiro](../value-for-money/)).
- Quando um algoritmo aloca um recurso escasso (vagas de consulta, tempo de gestor de processos, um
  subsídio), uma função objetivo não ponderada de "maximizar o benefício total" reproduzirá, por
  construção, o mesmo enviesamento que a ponderação do Green Book existe para corrigir — assinale
  isto explicitamente aos responsáveis pela política antes de otimizar.

## Armadilhas

- **Aplicar pesos distributivos de forma inconsistente num portefólio.** Ponderar os benefícios de um
  programa mas não os do seu comparador produz uma comparação enviesada, não mais justa; o Green Book
  exige um tratamento equiparável.
- **Usar valores de propriedade ou de mercado como indicador indireto de bem-estar sem ajuste.** Os
  preços de mercado são eles próprios distorcidos pela desigualdade de rendimento existente, que é
  exatamente o que a ponderação distributiva se destina a corrigir — usar valores de mercado não
  ajustados pode contar o enviesamento em duplicado.
- **Ignorar a variação dentro do grupo.** Ponderar pelo rendimento médio da área (por exemplo, um
  decil do Índice de Privação Múltipla) pode representar mal os indivíduos que não correspondem à
  média da sua área; use os dados de rendimento mais granulares razoavelmente disponíveis.
- **Tratar a elasticidade de 1,3 como uma constante universal.** O próprio Green Book nota que se
  trata de uma estimativa com um intervalo plausível; teste a sensibilidade das decisões principais
  face a elasticidades alternativas, em vez de tratar 1,3 como exato.

## Fontes

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
