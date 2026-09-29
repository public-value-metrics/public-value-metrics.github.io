# Avaliação por Preferência Declarada

Os métodos de preferência declarada estimam o valor de um bem não mercantil perguntando diretamente
às pessoas quanto estariam dispostas a pagar por ele, ou dispostas a aceitar em compensação para
abdicar dele, tipicamente através de um inquérito estruturado que descreve um cenário hipotético. A
avaliação contingente é a técnica mais conhecida da família.

## Por que isso importa

O Anexo 2 do Green Book (orientação suplementar sobre a avaliação de impactos não mercantis)
endossa os métodos de preferência declarada para bens que não têm qualquer transação de mercado
observável a partir da qual se possa inferir valor — qualidade do ar, biodiversidade, proteção contra
inundações, o valor de existência de uma paisagem que alguém pode nunca visitar
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
O Defra publicou as suas próprias orientações de preferência declarada para avaliação ambiental
especificamente porque grande parte do valor ambiental (preservação de habitat, qualidade da água)
não tem mercado indireto algum, ao contrário, digamos, do ruído, que pelo menos se correlaciona com
preços de habitação observáveis (ver
[avaliação por preferência revelada](../revealed-preference-valuation/)).

O grande atrativo da preferência declarada — pode avaliar literalmente qualquer coisa, incluindo bens
em que ninguém alguma vez transacionou — é também a fonte do seu problema de credibilidade. Como os
respondentes não estão de facto a gastar dinheiro, os inquéritos de avaliação contingente são
vulneráveis ao enviesamento hipotético (as pessoas exageram a disposição a pagar quando não há uma
restrição orçamental real), a efeitos de incorporação (o mesmo bem é avaliado de forma diferente
consoante o que mais está no inquérito), e a enviesamento de ponto de partida em desenhos de jogo de
licitação. O painel da NOAA de 1993 sobre avaliação contingente, convocado após o litígio do derrame
de petróleo do Exxon Valdez, estabeleceu padrões de desenho — um formato de referendo binário
"pagaria £X, sim/não" em vez de licitação aberta, e lembretes obrigatórios da restrição orçamental
real do respondente — que continuam a ser o padrão de referência para inquéritos defensáveis.

## A matemática

```
Avaliação contingente (formato de referendo):
  Apresentar uma escolha binária: "pagaria £X por ano pelo resultado
  Y? sim/não"
  Variar X aleatoriamente entre os respondentes.
  Ajustar a disposição a pagar em função da taxa de resposta sim/não
  a cada X.

Disposição a pagar média = área sob a curva de procura estimada
Valor agregado = Disposição a pagar média × população afetada

Variante de experiência de escolha (modelação de escolha discreta):
  Apresentar aos respondentes escolhas repetidas entre pacotes de
  atributos (incluindo um atributo de custo), estimar preços
  implícitos para cada atributo não-custo a partir das trocas que os
  respondentes revelam.
```

A variante de experiência de escolha é geralmente preferida na prática atual do Reino Unido face à
avaliação contingente de pergunta única, porque forçar os respondentes a trocar vários atributos por
custo repetidamente produz estimativas mais internamente consistentes e mais difíceis de manipular do
que uma única pergunta de sim/não.

## Exemplo prático

**Governo central**: o Defra encomenda um inquérito de avaliação contingente para avaliar um programa
de melhoria da qualidade da água de um rio. Um inquérito em formato de referendo a 2.000 agregados
familiares constata que 62% pagariam £40/ano através de um suplemento hipotético da fatura de água, e
a curva de procura estimada dá uma disposição a pagar média de £28/ano por agregado familiar.

```
Disposição a pagar média = £28/agregado familiar/ano
Agregados familiares na bacia hidrográfica = 340.000
Valor anual agregado = £28 × 340.000 = £9,52M/ano

Ao longo de um período de avaliação de 20 anos a uma taxa de desconto
de 3,5% (fator de anuidade ≈ 14,2):
VP(benefício) ≈ £9,52M × 14,2 ≈ £135M
```

Este valor agregado é depois comparado com o lado do custo da
[análise de custo-benefício social](../social-cost-benefit-analysis/) do programa. O Green Book exige
que este tipo de evidência de preferência declarada seja reportado a par do seu intervalo de confiança
e metodologia de inquérito, não como uma estimativa pontual nua, precisamente porque o número
subjacente é mais frágil do que um preço de mercado.

**Instituição de solidariedade**: uma instituição de património inquire visitantes e não-visitantes
sobre a disposição a pagar para evitar o encerramento de um edifício histórico que nenhum dos grupos
necessariamente visita (o seu valor de existência). Porque os não-visitantes que nunca verão o
edifício continuam a reportar disposição a pagar positiva, o inquérito capta o valor de existência e
de legado que uma simples contagem de receita de taxa de visitante (um indicador de preferência
revelada) perderia completamente — mostrando a verdadeira vantagem da preferência declarada onde não
existe nenhum tipo de transação de mercado para revelar valor.

## Ligação com a engenharia de software

Os métodos de preferência declarada raramente se aplicam diretamente ao trabalho de engenharia de
software, mas os engenheiros que constroem plataformas de consulta cidadã, ferramentas de orçamento
participativo, ou infraestrutura de inquéritos públicos estão muitas vezes a construir o instrumento
de que a economia depende. Acertar nos detalhes de desenho do inquérito — valores de licitação
aleatorizados, enquadramento de referendo binário em vez de perguntas abertas, lembretes explícitos da
restrição orçamental — não é um capricho de UX, é o que torna a avaliação resultante defensável sob
escrutínio; um inquérito na aplicação mal desenhado pode invalidar meses de análise económica
subsequente. Ver [métricas de satisfação do cidadão](../citizen-satisfaction-metrics/) para a
disciplina mais geral de obter dados de opinião pública que suportem peso analítico.

## Armadilhas

- **Perguntas abertas do tipo "quanto pagaria?".** Estas são muito mais propensas a enviesamento
  estratégico e de ancoragem do que o enquadramento de referendo binário; a recomendação do painel da
  NOAA para usar um formato de referendo existe precisamente porque a obtenção aberta tem mau
  desempenho.
- **Nenhum lembrete da restrição orçamental real do respondente.** Sem ele, a disposição a pagar
  declarada rotineiramente excede o que as mesmas pessoas pagariam quando uma troca orçamental real
  está em jogo — enviesamento hipotético.
- **Efeitos de incorporação ignorados.** O mesmo bem avaliado isoladamente versus avaliado como parte
  de um pacote maior produz estimativas de disposição a pagar diferentes; reporte o que mais, se
  algo, estava no enquadramento do inquérito.
- **Tratar a estimativa pontual de um único inquérito como assente.** A prática do Green Book espera
  um intervalo e uma discussão dos enviesamentos conhecidos, não um número nu transportado para a
  tabela de custo-benefício como se fosse um preço de mercado.

## Fontes

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
