# Análise de Decisão Multicritério (ADM)

A ADM pontua e pondera opções face a vários critérios distintos e ponderados em simultâneo,
produzindo uma comparação classificada sem forçar cada critério a uma única escala monetária ou de
unidade natural. É o método de avaliação para decisões em que os resultados que importam
genuinamente não podem ser reduzidos a um único número.

## Por que isso importa

O Green Book sanciona explicitamente a ADM (tanto o apêndice de estudo de caso da Caixa 2 como o
Anexo A discutem-na diretamente) para avaliações onde os benefícios são "genuinamente
incomensuráveis" — onde converter tudo em dinheiro através da
[análise de custo-benefício social](../social-cost-benefit-analysis/), ou num único resultado através
da [análise de custo-eficácia](../cost-effectiveness-analysis-in-government/), deturparia a decisão
em vez de a clarificar
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
A seleção de um local para uma nova prisão, por exemplo, troca custo de capital por impacto na
comunidade, conectividade de transportes, efeito ambiental e capacidade de recrutamento de pessoal —
critérios que não partilham uma unidade comum e onde forçar uma unidade partilhada (tipicamente
dinheiro) introduziria sub-repticiamente um julgamento de valor sobre a importância relativa, digamos,
do impacto ambiental face ao custo, disfarçado de aritmética objetiva.

A honestidade da ADM é também a sua principal vulnerabilidade: como os pesos são atribuídos por quem
conduz a avaliação (ou por um painel), o método só é tão legítimo quanto o processo de ponderação. As
orientações do Green Book são explícitas quanto ao facto de os critérios e pesos deverem ser
acordados e publicados *antes* de as opções serem pontuadas, precisamente para impedir que um revisor
trabalhe de trás para a frente, de uma opção preferida para os pesos que a justificam.

## A matemática

```
Para cada opção i e critério j:
  Pontuação_ij = o desempenho da opção face a esse critério
                 (frequentemente 0-100 ou 1-10, a partir de evidência,
                 julgamento de peritos ou pontuação de partes
                 interessadas)
  Peso_j       = importância relativa do critério j, os pesos somam 1
                 (ou 100)

Pontuação ponderada da opção i = Σ_j (Pontuação_ij × Peso_j)

Procedimento:
1. Acordar o conjunto de critérios e pesos ANTES de pontuar qualquer
   opção (a ponderação por oscilação ou a comparação por pares, por
   exemplo AHP, são métodos comuns de obtenção).
2. Pontuar cada opção face a cada critério numa escala comum, a
   partir de evidência sempre que possível.
3. Calcular os totais ponderados; classificar as opções.
4. Testar a sensibilidade dos pesos: a classificação sobrevive a um
   desacordo plausível sobre quanto cada critério deveria importar?
```

A ADM não produz um valor absoluto defensável da forma como o valor atual líquido da ACBS produz —
produz apenas uma classificação condicional aos pesos acordados. Isto é uma vantagem quando a decisão
é genuinamente sobre trocar bens incomensuráveis, e uma desvantagem se usada para evitar o trabalho
mais difícil de monetização onde a monetização era de facto possível.

## Exemplo prático

**Autarquia local**: um conselho a selecionar uma localização para um novo centro de reciclagem de
resíduos domésticos pontua três locais face a quatro critérios, ponderados por um painel
interdepartamental antes de qualquer visita ao local:

```
Critérios (peso):     Custo de capital (30%)  Acesso a transportes (25%)
                       Impacto comunitário (25%)  Impacto ambiental (20%)

Pontuações dos locais (0-100, mais alto = melhor):
Local A: custo 80, acesso 60, comunidade 40, ambiente 70
Local B: custo 60, acesso 90, comunidade 70, ambiente 50
Local C: custo 90, acesso 50, comunidade 80, ambiente 60

Totais ponderados:
Local A = 80(,30) + 60(,25) + 40(,25) + 70(,20) = 24+15+10+14 = 63
Local B = 60(,30) + 90(,25) + 70(,25) + 50(,20) = 18+22,5+17,5+10 = 68
Local C = 90(,30) + 50(,25) + 80(,25) + 60(,20) = 27+12,5+20+12 = 71,5
```

O Local C fica classificado em primeiro. Uma análise de sensibilidade que desloca o peso do impacto
comunitário de 25% para 35% (retirando 10 pontos do custo de capital) muda o total do Local C para
71,5 − 3 + 8 = 76,5 e o do Local B para 68 − 6 + 7 = 69 — o Local C continua à frente, pelo que a
classificação é robusta a esse desacordo plausível sobre a ponderação, que é exatamente a verificação
que o Green Book espera ver reportada.

**Instituição de solidariedade**: uma fundação concedente de subvenções a escolher entre financiar um
serviço de aconselhamento sobre dívidas, uma rede de bancos alimentares, e um programa de literacia
financeira usa a ADM em vez do SROI (ver
[retorno social sobre o investimento](../social-return-on-investment/)) precisamente porque os
administradores (trustees) discordam, de boa-fé, sobre se o alívio de crise ou a prevenção deveriam
pesar mais fortemente — a ADM permite-lhes acordar a *forma* do desacordo (um intervalo de peso) em
vez de fingir que um único rácio SROI o resolve.

## Ligação com a engenharia de software

A ADM é a ferramenta natural para a seleção de fornecedor e arquitetura quando os critérios
genuinamente entram em conflito — escolher entre um sistema de gestão de processos alojado na nuvem
e um no local troca custo, risco de soberania de dados, acessibilidade e velocidade de entrega de
formas que não se reduzem a um único número. Os responsáveis de engenharia devem insistir para que a
ponderação aconteça antes de as opções serem pontuadas, exatamente como o Green Book exige, porque um
exercício de ponderação conduzido depois de ver a lista restrita tende de forma fiável a derivar para
a opção que a sala já favorecia. Ver
[construir vs. comprar no governo](../build-vs-buy-in-government/) para uma aplicação comum da ADM,
e [painel de valor público](../public-value-scorecard/) para uma ferramenta de pontuação estruturada
relacionada, usada após a decisão em vez de antes.

## Armadilhas

- **Definir os pesos depois de ver as opções.** Esta é a forma mais comum de a ADM ser manipulada,
  intencionalmente ou não; publique os pesos antes da pontuação, e registe quem os definiu.
- **Tratar o total ponderado como um número rígido.** Uma pontuação de 71,5 face a 68 não é uma
  diferença estatisticamente significativa a menos que a análise de sensibilidade confirme que a
  classificação é estável; reporte intervalos, não falsa precisão.
- **Usar a ADM para evitar uma monetização que era de facto viável.** Se a maioria dos critérios
  pudesse ser credivelmente precificada, recorrer por defeito à ADM em vez da
  [ACBS](../social-cost-benefit-analysis/) descarta informação que a avaliação poderia ter usado.
- **Deixar uma parte interessada dominante definir todos os pesos sozinha.** A boa prática do Green
  Book espera que os pesos sejam obtidos junto de um painel representativo, não do diretor
  promotor, para evitar que a avaliação simplesmente rederive o que essa pessoa já queria.

## Fontes

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
