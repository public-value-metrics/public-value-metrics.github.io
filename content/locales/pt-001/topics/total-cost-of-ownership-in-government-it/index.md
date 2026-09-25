# Custo Total de Propriedade (TCO) em TI Governamental

O custo total de propriedade é o custo de ciclo de vida completo de um sistema — aquisição mais cada
ano de operação — descontado para uma data comum. Em TI governamental, o erro de previsão mais
fiável de todos é comparar fornecedores ou opções apenas pelo preço de aquisição, quando a operação e
a manutenção representam tipicamente entre metade e quatro quintos da fatura ao longo da vida útil.

## Por que isso importa

O Green Book do HM Treasury exige que o caso financeiro em qualquer business case do Five Case Model
cubra os custos de vida completa, não apenas a despesa de capital — mas o National Audit Office tem
repetidamente encontrado departamentos a aprovar investimentos em TI com base numa previsão de custo
de operação incompleta ou otimista, apenas para descobrirem o verdadeiro custo operacional quando o
sistema já está em produção e a rubrica orçamental de capital já foi encerrada. O Technology Code of
Practice do Government Digital Service e do Central Digital and Data Office
(<https://www.gov.uk/guidance/the-technology-code-of-practice>) empurra os departamentos para a nuvem
e para o alojamento de mercadoria em parte porque isso torna o custo contínuo visível e comparável,
em vez de enterrado dentro de uma única cifra de aquisição de capital que parece atrativamente baixa
na aprovação e dispendiosamente errada três anos depois.

## A matemática

```
TCO = Custo de aquisição + Σ(t=1..N) Custo operacional anual_t / (1+r)^t
      − valor residual (descontado)

r = taxa de desconto social padrão do Green Book do HM Treasury, 3,5%/ano
    (calendário de taxa decrescente para horizontes além de 30 anos)

Componentes do custo operacional: alojamento/licenciamento, suporte e
manutenção, aplicação de patches de segurança e conformidade, tempo de
pessoal, renovação/migração planeada
```

Ver [taxa de desconto social](../social-discount-rate/) para perceber por que o fator de desconto
importa ao longo de uma vida útil típica de 5 a 10 anos de um sistema, e
[construir versus comprar no governo](../build-vs-buy-in-government/) para perceber como o TCO
alimenta uma decisão de construir/comprar.

## Exemplo prático

Um departamento compara dois sistemas de gestão de processos num horizonte de 5 anos à taxa de
desconto do Green Book de 3,5%.

```
Sistema A: capex £3.500.000, opex £250.000/ano
Sistema B: capex £1.800.000 (parece mais barato), opex £650.000/ano
           (maior encargo de suporte de fornecedor e integração)

Comparação ingénua apenas pelo capex: B ganha, £1,8M < £3,5M.

Soma dos fatores de desconto, 5 anos a 3,5%: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 = £4.628.750
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 = £4.734.750
```

O TCO inverte a decisão ingénua: o Sistema B é marginalmente mais caro ao longo de cinco anos uma vez
descontado e somado o custo operacional, porque a sua quota de opex no custo de vida útil é de 62%
(2.934.750 / 4.734.750) contra 24% do Sistema A — uma instância concreta da conclusão de que "a
manutenção é a maioria da fatura", inteiramente escondida ao comparar apenas os preços de etiqueta.

## Ligação com a engenharia de software

O TCO é o número que deveria disciplinar toda a decisão de
[construir versus comprar](../build-vs-buy-in-government/) e todo o caso de amortização de
[dívida técnica](../technical-debt-as-public-value-erosion/), porque tanto os juros da dívida como a
manutenção adiada são rubricas de custo operacional que pertencem ao mesmo total descontado, quer
alguém as tenha andado a acompanhar quer não. Os engenheiros que propõem uma plataforma ou a escolha
de um fornecedor deveriam apresentar a tabela completa do TCO, não o preço de aquisição, porque o
preço de aquisição é precisamente o número que o caso financeiro do Green Book foi concebido para
impedir os departamentos de usar isoladamente. O TCO é também o denominador honesto para os
julgamentos de [valor pelo dinheiro](../value-for-money/) — o VFM compara o benefício com o custo, e uma
rubrica de custo subcontada infla todos os rácios de VFM no business case.

## Armadilhas

- **Comparação apenas pelo capex**: o erro de contratação mais comum de todos — comparar os preços de
  tabela dos fornecedores sem uma previsão de custo operacional equiparável para cada opção.
- **Excluir custos de saída e migração**: a extração de dados no final do contrato, a remigração de
  plataforma e as penalizações de aprisionamento a um fornecedor são rubricas reais de TCO que
  raramente aparecem no business case original.
- **Excluir o custo de segurança e conformidade**: o ritmo de aplicação de patches, a renovação de
  acreditação e o custo de auditoria escalam com a idade e a complexidade do sistema — ver
  [valor da cibersegurança no setor público](../public-sector-cybersecurity-value/) — e são
  rotineiramente deixados de fora da previsão de opex.
- **Comparação não descontada entre opções com perfis de custo diferentes**: comparar uma opção
  intensiva em capex com uma intensiva em opex sem descontar favorece sistematicamente qualquer opção
  que calhe a adiar mais custo para anos posteriores.

## Fontes

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
