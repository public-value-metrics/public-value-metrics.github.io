# Produtividade do Serviço Público

A produtividade do serviço público mede quão eficientemente a despesa pública converte entradas
(pessoal, capital, bens e serviços) em produtos ajustados pela qualidade, para serviços — saúde,
educação, policiamento, assistência social — que não têm preço de mercado e, portanto, nenhum valor
de receita para dividir os custos. O Office for National Statistics do Reino Unido publica esta série
desde meados da década de 2000 e continua a ser a tentativa nacional metodologicamente mais
desenvolvida de responder a "o governo está a ficar melhor ou pior a converter dinheiro em serviços
públicos?".

## Por que isso importa

Num mercado, a produtividade é (valor do produto) / (custo de entrada), e o valor do produto é
observável porque alguém paga por ele. Uma prótese de anca, uma vaga escolar e uma patrulha policial
não têm preço de venda, pelo que ingenuamente só se conseguem medir as *entradas* (o que foi gasto) —
o que tenta os comentadores a tratar o aumento da despesa pública como automaticamente mau, já que
mais entrada com atividade de destaque estagnada parece produtividade em queda. A metodologia do
ONS, estabelecida nas suas publicações "Sources and Methods" para a produtividade do serviço público,
resolve isto construindo um índice de *produto* a partir de volumes de atividade (operações
realizadas, alunos ensinados, crimes investigados) e depois *ajustando pela qualidade* esse índice de
produto — para a saúde, incorporando taxas de sobrevivência e tempos de espera; para a educação,
incorporando o aproveitamento; para o policiamento, incorporando resultados como a resolução de
casos — para que um serviço que realiza o mesmo número de operações mas alcança melhores taxas de
sobrevivência seja registado como mais produtivo, não meramente como mais caro. A constatação de
destaque que recorre em todas as publicações do ONS é sóbria para o setor: a produtividade do serviço
público do Reino Unido caiu acentuadamente durante a pandemia de COVID-19 e, segundo as próprias
publicações do ONS de meados da década de 2020, ainda não tinha recuperado para os níveis de 2019 em
vários subsetores, incluindo a saúde, mesmo com a despesa a subir — uma lacuna que reenquadra "mais
financiamento" e "mais produtividade" como duas perguntas inteiramente separadas.

## A matemática

```
Índice de produto (volume) = Σ (atividade_i × peso de custo unitário
                                 relativo_i), ponderado pelo ano-base
                              entre todas as atividades de serviço
                              (por exemplo, operações à anca,
                              operações de catarata, consultas de
                              clínico geral), análogo a um índice de
                              volume Laspeyres/Paasche

Ajuste de qualidade   = índice de produto × fator de ajuste de
                         qualidade
                         (por exemplo, incorporando uma mudança nas
                         taxas de sobrevivência, tempos de espera,
                         aproveitamento ou reincidência como um
                         multiplicador sobre o volume bruto)

Índice de entrada     = Σ (horas de trabalho × peso de custo de
                           trabalho) + (custo de bens/serviços,
                           deflacionado) + (consumo de capital)

Crescimento da produtividade total dos fatores = % de mudança no
                                    índice de produto ajustado pela
                                    qualidade − % de mudança no
                                    índice de entrada
```

## Exemplo prático

**Cálculo ilustrativo de produtividade do setor de cuidados agudos do NHS** (a estrutura segue a
metodologia do ONS):

```
Ano 1: índice de volume de produto = 100,0 (ano-base), índice de
       entrada = 100,0
        → índice de produtividade = 100,0

Ano 2: o volume de atividade sobe 3,0% (mais operações, mais
        consultas) mas o tempo médio de espera piora, aplicando um
        desconto de ajuste de qualidade de −1,0%
        Índice de produto ajustado pela qualidade = 100 × 1,030 ×
                                                       0,990 = 101,97

        As entradas sobem: número de pessoal +4,0%, outros custos
        (deflacionados) +1,5%, índice de entrada ponderado = 100 ×
        1,032 = 103,2

Crescimento da produtividade = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                     = 1,97% − 3,2% = −1,23 pontos percentuais

Interpretação: a atividade subiu, mas as entradas subiram mais
depressa e a qualidade caiu ligeiramente, pelo que a produtividade —
produto por unidade de entrada — diminuiu, mesmo com "mais cuidados
entregues".
```

Este é exatamente o padrão que as publicações do ONS têm repetidamente reportado para partes do NHS
pós-pandemia: despesa crescente e atividade bruta crescente a coexistir com produtividade medida em
queda, uma vez contabilizados tanto o ajuste de qualidade como o crescimento de entradas.

## Ligação com a engenharia de software

A produtividade do serviço público é o análogo ao nível populacional dos debates de produtividade em
engenharia (pontos de história entregues versus [métricas DORA](../dora-metrics-for-public-value/)
versus [métricas de fluxo](../flow-metrics-in-government-delivery/)): o débito bruto sem ajuste de
qualidade é exatamente tão enganoso num hospital quanto "linhas de código entregues" é numa equipa de
software. As equipas que constroem pipelines de dados de desempenho para departamentos devem tratar o
ajuste de qualidade como uma etapa de transformação de primeira classe e versionada, não uma nota de
rodapé — porque a própria credibilidade do ONS assenta em esse ajuste ser transparente, reproduzível
e revisto à medida que chegam melhores dados de qualidade (o ONS revê as estimativas de produtividade
de anos passados à medida que os dados de qualidade subjacentes — por exemplo, taxas de sobrevivência
— são finalizados, pelo que qualquer sistema a jusante que consuma estas estatísticas deve tratar
revisões retroativas, não apenas anexar novos períodos). Isto também se cruza diretamente com o
[custo total de propriedade](../total-cost-of-ownership-in-government-it/) e a
[produtividade da IA no setor público](../ai-productivity-in-the-public-sector/): um sistema que
aumenta o volume de atividade bruta sem melhorar ou manter a qualidade não é, segundo a própria
definição do ONS, uma melhoria de produtividade.

## Armadilhas

- **Tratar o crescimento de entradas como crescimento de produtividade**: mais despesa a financiar
  mais pessoal produz mais *atividade*, não mais *produtividade*, a menos que o produto por unidade
  de entrada também suba — os dois são rotineiramente confundidos no comentário político.
- **Ignorar inteiramente o ajuste de qualidade**: um índice de produto construído apenas a partir de
  contagens de atividade bruta mostrará "ganhos de produtividade" ao fazer mais de algo de menor
  valor ou menor qualidade; o ajuste de qualidade do ONS existe especificamente para apanhar isto.
- **Comparar índices de produtividade entre subsetores sem equiparar a versão da metodologia**: a
  produtividade da saúde, educação e policiamento são cada uma construídas a partir de fontes de
  dados de atividade e qualidade diferentes, em ciclos de revisão diferentes — uma comparação
  ingénua entre setores compara instrumentos incompatíveis.
- **Ler a queda de produtividade de um único ano como uma tendência permanente**: os valores de
  produtividade da era pandémica e pós-pandémica mostraram volatilidade significativa ano a ano à
  medida que os próprios dados de qualidade (por exemplo, listas de espera, recuperação eletiva)
  mudavam; o ONS aconselha consistentemente contra a sobreinterpretação de movimentos de um único
  ano.

## Fontes

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
