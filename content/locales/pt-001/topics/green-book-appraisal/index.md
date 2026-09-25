# Avaliação do Green Book (Modelo dos Cinco Casos)

O Green Book é a orientação obrigatória do HM Treasury para avaliar propostas de despesa do governo
do Reino Unido. A sua ferramenta central, o modelo dos cinco casos, obriga um caso de negócio a
responder a cinco perguntas separadas — é uma boa ideia, entrega valor, pode ser contratada, é
acessível, e pode ser entregue — em vez de colapsar tudo num único número que um ministro possa
aprovar sem mais.

## Por que isso importa

Toda a proposta de despesa do governo central do Reino Unido acima dos limites delegados
departamentais deve passar pela avaliação do Green Book antes de o financiamento ser libertado, e a
Green Book Review 2020 do HM Treasury (publicada após críticas de que o processo estava enviesado
contra as regiões mais pobres, ver
<https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) reforçou
a exigência de que as opções sejam comparadas com uma referência genuína de "fazer o mínimo" e que o
enquadramento estratégico seja demonstrado antes mesmo de o valor pelo dinheiro ser avaliado. O
próprio modelo dos cinco casos é anterior ao Green Book — teve origem no Office of Government
Commerce como a estrutura padrão de caso de negócio — mas a edição de 2022 do Green Book incorpora-o
como a forma obrigatória para qualquer caso de negócio que procure a aprovação do Tesouro:
<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

O propósito de dividir o caso em cinco é que uma proposta pode falhar em qualquer uma das dimensões,
independentemente das outras. Uma remodelação informática estrategicamente sólida e custo-eficaz
ainda pode falhar o caso comercial se apenas um fornecedor a conseguir entregar (criando risco de
concurso único), ou falhar o caso de gestão se o departamento não tiver historial de entrega de
programas dessa dimensão. Uma única pontuação de "valor pelo dinheiro" esconde exatamente este tipo
de modo de falha.

## A matemática

O modelo dos cinco casos é uma estrutura, não uma fórmula, mas cada caso tem o seu próprio teste
quantitativo ou probatório:

```
1. Caso estratégico
   Evidência de um objetivo de despesa ligado à estratégia
   organizacional.
   Teste: há sequer um caso para a mudança? ("não fazer nada" é
   sempre uma opção.)

2. Caso económico
   Avaliação de opções face a uma referência de "fazer o mínimo",
   usando análise de custo-benefício social ou análise de
   custo-eficácia.
   Teste: que opção maximiza o valor público líquido?
   Ver ../social-cost-benefit-analysis/ e
   ../cost-effectiveness-analysis-in-government/

3. Caso comercial
   Envolvimento do mercado, via de contratação, alocação de risco
   entre comprador e fornecedor.
   Teste: a opção preferida é contratável em termos aceitáveis?

4. Caso financeiro
   Acessibilidade dentro dos limites orçamentais departamentais,
   fonte de financiamento, tratamento no balanço.
   Teste: conseguimos pagar isto, este ano e todos os anos seguintes?

5. Caso de gestão
   Governação, plano de projeto, plano de realização de benefícios,
   registo de riscos.
   Teste: esta organização consegue de facto entregar isto?
   Ver ../benefits-realization/
```

O caso económico é onde vive a avaliação quantitativa: as opções são comparadas numa base de valor
atual líquido ajustado pela [taxa de desconto social](../social-discount-rate/), usando o método de
[análise de custo-benefício social](../social-cost-benefit-analysis/), ou, onde os benefícios não
podem ser honestamente monetizados, através da
[análise de custo-eficácia](../cost-effectiveness-analysis-in-government/) ou da
[análise de decisão multicritério](../multi-criteria-decision-analysis/).

## Exemplo prático

**Autarquia local**: um conselho a avaliar um sistema de TI de reparações de habitação de £12
milhões executa os cinco casos como se segue. Caso estratégico: o atraso acumulado de reparações
ultrapassa o padrão estatutário de casas decentes dentro de 18 meses sem intervenção. Caso
económico: três opções custeadas ao longo de um período de avaliação de 10 anos a uma taxa de
desconto de 3,5% (segundo a taxa de preferência temporal social padrão do Green Book de 2022) —
"fazer o mínimo" (corrigir o sistema legado, VAL −£4,1M), "comprar" (plataforma pronta a usar,
VAL +£2,3M), "construir" (plataforma à medida, VAL +£0,6M uma vez aplicado um enviesamento de
otimismo de 40% para desenvolvimento de software face ao custo de capital não descontado, segundo o
Anexo A do Green Book). Comprar vence o caso económico. Caso comercial: existem dois fornecedores
viáveis, o concurso competitivo é viável — aprovado. Caso financeiro: capital disponível do Public
Works Loan Board, os custos de exploração cabem no plano financeiro de médio prazo — aprovado. Caso
de gestão: o conselho entregou dois sistemas comparáveis nos últimos cinco anos — aprovado. A
proposta avança com "comprar".

**Departamento do governo central**: uma proposta com um caso económico forte (VAL +£40M) mas onde
apenas um fornecedor detém a acreditação relevante falha o teste do caso comercial quanto à tensão
competitiva, forçando ou uma dispensa de concurso único (com o seu próprio encargo de escrutínio) ou
uma reformulação da especificação para abrir o mercado — o caso económico isoladamente nunca teria
revelado isto.

## Ligação com a engenharia de software

As equipas de engenharia dentro do governo ou de organizações financiadas por subvenções geralmente
só veem o caso económico, porque é essa a parte que a liderança de produto e engenharia é convidada a
justificar ("qual é o ROI desta migração?"). Mas um caso de negócio que ultrapassa o Tesouro ou uma
comissão de subvenções precisa dos cinco, e os engenheiros são frequentemente as pessoas mais bem
posicionadas para responder ao caso comercial (isto pode de facto ser contratado, ou aprisiona-nos no
formato proprietário de um fornecedor?) e ao caso de gestão (temos a capacidade de entrega, ou isto
depende de três pessoas específicas não saírem?). Trate um pedido de "apenas os números do caso de
negócio" como um pedido de um quinto da decisão real. Ver
[valor pelo dinheiro](../value-for-money/) para saber como o resultado do caso económico é
geralmente resumido, e o [custo total de propriedade](../total-cost-of-ownership-in-government-it/)
para o núcleo quantitativo habitual do caso financeiro.

## Armadilhas

- **Escrever o caso económico primeiro e o caso estratégico à sua medida.** A Green Book Review 2020
  constatou exatamente este modo de falha a impulsionar o enviesamento da avaliação em direção a
  lugares e setores já bem evidenciados, entrincheirando a desigualdade regional; o caso estratégico
  deve estabelecer o objetivo antes de as opções serem comparadas.
- **Tratar "fazer o mínimo" como "não fazer nada".** A referência correta é a opção de menor custo
  que ainda cumpre as obrigações legais ou de segurança mínimas, não uma fantasia de despesa zero —
  comparar com zero literal exagera o valor aparente de todas as opções.
- **Saltar os casos comercial e de gestão porque o caso económico é forte.** Uma proposta com VAL
  elevado que não pode ser contratada competitivamente ou entregue pela organização promotora não é
  uma proposta financiável; os revisores do Tesouro rejeitam rotineiramente por estas razões, mesmo
  com um caso económico convincente.
- **Aplicar o modelo dos cinco casos apenas uma vez, no início.** O Green Book exige que o caso seja
  revisitado em cada portão de aprovação subsequente (caso esquemático estratégico, caso de negócio
  esquemático, caso de negócio completo) à medida que os custos e a evidência se consolidam — um caso
  congelado na fase esquemática perde a escalada de custos que um portão posterior teria apanhado.

## Fontes

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
