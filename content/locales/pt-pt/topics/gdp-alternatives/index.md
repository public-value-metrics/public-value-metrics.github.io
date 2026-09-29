# Alternativas ao PIB

As alternativas ao PIB são métricas construídas para captar aquilo que o Produto Interno Bruto
estruturalmente ignora: o trabalho de cuidado não remunerado, o esgotamento ambiental, a distribuição
de rendimento, e se o crescimento de facto melhora vidas. As mais conhecidas são o Genuine Progress
Indicator (GPI) e o Índice de Felicidade Nacional Bruta (GNH) do Butão; o argumento a favor de as
levar a sério foi apresentado de forma mais influente pela Comissão Stiglitz-Sen-Fitoussi de 2009.
Para os engenheiros que constroem painéis governamentais ou sistemas de KPI, "que número conta como
progresso" é uma decisão de desenho com consequências reais sobre o que é financiado.

## Por que isso importa

Simon Kuznets, que construiu as contas nacionais dos EUA na década de 1930, alertou o Congresso em
1934 de que "o bem-estar de uma nação dificilmente pode ser inferido de uma medição do rendimento
nacional" — uma ressalva que o número ultrapassou quase de imediato. O PIB conta a limpeza de um
derrame de petróleo como crescimento e o cuidado infantil não remunerado de um progenitor como nada;
não distingue a despesa que constrói bem-estar duradouro da despesa que meramente compensa um dano já
causado. A Comissão Stiglitz-Sen-Fitoussi, convocada pelo Presidente francês Nicolas Sarkozy e
presidida por Joseph Stiglitz, Amartya Sen e Jean-Paul Fitoussi, reportou em 2009 que os sistemas
estatísticos deviam deslocar a ênfase "de medir a produção económica para medir o bem-estar das
pessoas", e que a sustentabilidade deveria ser acompanhada separadamente do bem-estar atual, em vez
de dissolvida num único número. As alternativas ao PIB operacionalizam essa recomendação. O GPI,
desenvolvido pelo laboratório de ideias Redefining Progress na década de 1990 e construído sobre a
Measure of Economic Welfare de 1972 de William Nordhaus e James Tobin, parte do consumo pessoal
(como o PIB) e depois soma benefícios não mercantis que o PIB omite (trabalho doméstico,
voluntariado) enquanto subtrai custos defensivos e de esgotamento (criminalidade, poluição, tempo de
deslocação, consumo de recursos) que o PIB erradamente conta como positivos. O Índice GNH do Butão,
administrado pelo GNH Centre Bhutan (<https://www.gnhcentre.bt/>), vai ainda mais longe, substituindo
o crescimento como objetivo constitucional declarado do país: agrega 33 indicadores em 9 domínios —
bem-estar psicológico, saúde, educação, uso do tempo, diversidade cultural, governação, vitalidade
comunitária, diversidade ecológica e padrão de vida — numa única pontuação baseada em suficiência,
usada diretamente para filtrar propostas de política governamental.

## A matemática

```
GPI = despesa de consumo pessoal
      + benefícios não mercantis (trabalho doméstico, voluntariado,
        ensino superior)
      − custos defensivos e sociais (criminalidade, poluição, tempo
        de deslocação, rutura familiar)
      − esgotamento de capital natural e social (consumo de recursos,
        perda de terreno agrícola)

Pontuação de suficiência GNH, por domínio:
  uma pessoa é "suficiente" num domínio assim que ultrapassa o seu
  limiar em cada indicador
  Índice de Felicidade = (% da população suficiente em ≥ 6 dos 9
                          domínios)
                    + (défice médio ponderado da minoria "ainda não
                       feliz")
```

## Exemplo prático

**Região, GPI**: o consumo pessoal é de $50 mil milhões. Somar o valor estimado do trabalho
doméstico e voluntário de $12 mil milhões (taxas salariais de custo de substituição — ver
[valor do tempo de voluntariado](../volunteer-time-value/)). Subtrair os custos anuais estimados de
congestionamento nas deslocações ($3 mil milhões), criminalidade ($4 mil milhões), e esgotamento de
recursos a longo prazo ($6 mil milhões):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 (mil milhões de $)
```

Se o PIB cresceu de $50 mil milhões para $55 mil milhões nesse ano (+10%), mas os custos defensivos
e de esgotamento cresceram mais depressa do que o consumo, o GPI pode cair mesmo com o PIB a subir —
a "hipótese do limiar" que os investigadores do GPI citam para economias de rendimento elevado desde
aproximadamente a década de 1970, quando o crescimento continuou a subir enquanto o GPI estagnou.

**Cidadão, GNH**: um respondente ultrapassa o limiar de suficiência em 7 dos 9 domínios (saúde,
educação, padrão de vida, vitalidade comunitária, diversidade cultural, diversidade ecológica, uso do
tempo) mas fica aquém no bem-estar psicológico e na governação. Como 7 ≥ 6, é contado como "feliz" na
contagem total; o índice acompanha separadamente a profundidade dos seus dois défices, para que uma
aprovação por pouco não seja indistinguível de uma folgada.

## Ligação com a engenharia de software

- Um painel de KPI modelado apenas no débito ou na despesa (o padrão do PIB) irá sistematicamente
  falhar em captar o dano causado ao gerar esse débito — o volume de tickets de apoio tratado como
  "envolvimento" em vez de "aflição do utilizador" é a versão, em entrega de software, de contar um
  derrame de petróleo como crescimento.
- A contabilidade ao estilo GPI é um padrão de auditoria útil para qualquer conjunto de
  [KPIs do setor público](../public-sector-kpis/): para cada métrica de produto de destaque,
  pergunte que custo defensivo está discretamente a incorrer (retrabalho, resposta a incidentes,
  esgotamento) e desconte-o, tal como o GPI desconta a despesa defensiva do consumo.
- O método de suficiência por domínio do GNH — aprovado/reprovado por dimensão, depois agregado — é
  estruturalmente a mesma técnica que a
  [análise de decisão multicritério](../multi-criteria-decision-analysis/) e vale a pena reutilizá-lo
  onde uma única pontuação escalar esconderia uma dimensão de falha crítica.

## Armadilhas

- **Tratar o GPI como uma conta nacional precisa** — ao contrário do PIB, o GPI não tem uma única
  metodologia padronizada; estudos diferentes ponderam de forma diferente os custos de deslocação, o
  tempo de voluntariado ou o esgotamento de recursos, pelo que as comparações de GPI entre estudos
  são muito menos fiáveis do que as comparações de PIB entre países.
- **Importar o GNH inteiramente para uma cultura política diferente** — os seus pesos de domínio e
  limiares de suficiência foram estabelecidos através de consulta butanesa; copiar o número sem o
  processo de consulta subjacente produz uma métrica oca em que ninguém confia.
- **Presumir que uma alternativa ao PIB substitui a avaliação de custo-benefício** — estes são
  indicadores diagnósticos, à escala de toda a economia, não ferramentas de decisão para um único
  programa; use antes a
  [análise de custo-benefício social](../social-cost-benefit-analysis/) para isso.

## Fontes

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
