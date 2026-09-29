# Valor pelo Dinheiro (VFM)

Valor pelo dinheiro é o teste formal do setor público do Reino Unido sobre se a despesa alcança o
melhor equilíbrio disponível entre custo e benefício. O Green Book do HM Treasury enquadra-o através
de três "Es" — economia, eficiência e eficácia — com a equidade cada vez mais defendida como um quarto
E contestado. Todo o business case do setor público que sobrevive ao escrutínio tem de responder aos
três explicitamente, e não apenas afirmar que a despesa "vale a pena".

## Por que isso importa

O VFM não é sinónimo de "barato". O Green Book (HM Treasury, edição de 2022) é explícito ao afirmar
que comprar a opção de custo mais baixo (economia) sem verificar se produz os resultados pretendidos
(eficácia) é um erro comum e dispendioso — uma contratação que poupa 10% no custo unitário mas entrega
menos 40% de impacto é pior valor, não melhor. O enquadramento dos três Es obriga um business case a
separar três modos de falha genuinamente diferentes: pagar demasiado pelos inputs, desperdiçar inputs
na conversão em produtos, e produzir produtos que não se traduzem em resultados que alguém quisesse.
Os controlos de despesa do governo do Reino Unido — pontos de aprovação do Tesouro, estudos de valor
pelo dinheiro do National Audit Office (NAO) e avaliações de responsáveis contabilísticos
departamentais — são construídos em torno deste teste de três partes, pelo que um business case de
engenharia que só aborde o custo (economia) falhará o escrutínio mesmo que a tecnologia seja sólida.

O "quarto E", a equidade, é contestado precisamente porque pode entrar em conflito com os outros
três: a forma mais eficiente de entregar um serviço a nível nacional raramente é a mais equitativa,
já que concentrar a entrega onde é mais barato chegar aos cidadãos frequentemente significa servir
mal quem é mais difícil de alcançar. A revisão de 2020 do Green Book respondeu a críticas (incluindo
do Treasury Select Committee de 2020 e do IPPR North) de que os rácios puros de custo-benefício
favoreciam sistematicamente regiões já prósperas, exigindo que as avaliações abordem explicitamente o
impacto distributivo — ver [ponderação distributiva](../distributional-weighting/).

## A matemática

O VFM não é um único rácio, mas um diagnóstico de três partes (ou quatro), aplicado em sequência:

```
Economia:    Os inputs são comprados ao custo razoável mais baixo para a
             qualidade exigida? (£ por unidade de input)

Eficiência:  Quão bem os inputs são convertidos em produtos?
             (produtos / inputs, por exemplo, casos processados por
             hora-gestor de caso)

Eficácia:    Os produtos produzem de facto os resultados pretendidos?
             (resultados alcançados / resultados pretendidos)

[Equidade]:  Os custos e benefícios são distribuídos de forma justa pela
             população, ou concentrados em quem tem menos necessidade?
```

Uma falha de VFM pode ocorrer em qualquer fase independentemente: contratação económica com entrega
ineficiente; entrega eficiente do produto errado; resultados eficazes comprados a um custo excessivo.
Ver [KPIs do setor público](../public-sector-kpis/) para perceber como estes se traduzem em
indicadores mensuráveis, e
[análise custo-eficácia no governo](../cost-effectiveness-analysis-in-government/) para o método de
comparação formal.

## Exemplo prático

**Centro de contacto de autarquia**: um município compara duas opções para um novo sistema de gestão
de processos.

- *Opção A*: licença de £600.000 (a mais barata disponível), mas os agentes continuam a demorar em
  média 22 minutos por caso porque o fluxo de trabalho exige reintrodução manual de dados entre
  sistemas — a eficiência é fraca.
- *Opção B*: licença de £900.000, fluxo de trabalho integrado, os agentes demoram em média 9 minutos
  por caso.

A economia isoladamente favorece A (£300.000 mais barato). Mas com 40.000 casos/ano, A custa
40.000 × 22/60 = 14.667 horas de pessoal; B custa 40.000 × 9/60 = 6.000 horas de pessoal. A um custo
de pessoal totalmente carregado de £28/hora, A custa £410.667/ano em tempo de pessoal contra
£168.000/ano de B — uma diferença de eficiência de £242.667/ano que anula a diferença de economia
inicial de £300.000 em 14 meses. O VFM favorece B assim que a eficiência é contabilizada, não A.

**Subvenção de entrega de uma instituição de solidariedade**: um financiador compara uma subvenção de
£50.000 que alcança 200 colocações de emprego bem-sucedidas (£250/colocação — economia aparentemente
excelente) com uma subvenção de £120.000 que alcança 350 colocações que persistem por mais de 12
meses, contra as colocações da primeira subvenção, das quais metade caduca em 3 meses. A eficácia —
resultados duradouros — inverte a classificação aparente de VFM: o custo verdadeiro por colocação
*duradoura* é £250 ÷ 0,5 = £500 para a primeira subvenção, contra £120.000/350 ≈ £343 para a segunda.

## Ligação com a engenharia de software

O VFM dá às equipas de engenharia uma disciplina para enquadrar business cases de tecnologia da forma
como as funções financeiras e de auditoria de facto os lerão:

- Declarar a economia, a eficiência e a eficácia como rubricas separadas num business case, e não um
  único número de "valor" misturado — um revisor formado no Green Book pedirá exatamente esta
  desagregação.
- Cuidado ao otimizar o custo de contratação (economia) à custa da eficiência de integração e de
  fluxo de trabalho, uma poupança falsa muito comum em TI governamental (ver
  [custo total de propriedade em TI governamental](../total-cost-of-ownership-in-government-it/) e
  [construir versus comprar no governo](../build-vs-buy-in-government/)).
- A eficácia exige dados de resultados, não apenas contagens de produtos — ligar as métricas de
  entrega a [resultados versus produtos](../outcomes-vs-outputs/) e a uma avaliação real através da
  [análise contrafactual](../counterfactual-analysis/), em vez de assumir que os produtos implicam
  resultados.
- Quando um sistema serve de forma desigual entre regiões ou grupos demográficos, a questão da
  equidade é uma objeção legítima de VFM, não um "bónus" à parte — ver
  [inclusão digital](../digital-inclusion/).

## Armadilhas

- **Equiparar VFM ao preço mais baixo.** A economia é um terço (ou um quarto) do teste; o Green Book
  alerta explicitamente contra regras de contratação de "custo mais baixo" que ignoram a eficiência e
  a eficácia.
- **Medir produtos e chamar-lhes resultados.** O volume de casos processados (eficiência) não é o
  mesmo que casos bem resolvidos (eficácia); ver [resultados versus produtos](../outcomes-vs-outputs/).
- **Tratar a equidade como opcional.** Desde a atualização de 2020 do Green Book, o impacto
  distributivo deve ser avaliado a par dos três Es tradicionais, e não acrescentado depois; ajustá-lo
  retroativamente após a aprovação de um business case é muito mais difícil do que incluí-lo desde o
  início.
- **Comparar opções com volumes diferentes sem normalizar.** Uma comparação de VFM por unidade entre
  opções que servem populações diferentes tem de controlar a escala, ou a comparação de eficiência
  não tem sentido.

## Fontes

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
