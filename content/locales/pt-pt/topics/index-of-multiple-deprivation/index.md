# Índice de Privação Múltipla (IMD)

O IMD é a medida oficial de privação relativa para pequenas áreas em Inglaterra, classificando cada
uma das 32.844 Lower-layer Super Output Areas (LSOAs, cada uma com cerca de 1.500 residentes) do
país de 1 (mais privada) a 32.844 (menos privada). É publicado pelo que é agora o Ministry of
Housing, Communities and Local Government (MHCLG, anteriormente MHCLG/DCLG), mais recentemente como
os English Indices of Deprivation 2019, e direciona diretamente o financiamento do governo central,
a priorização de saúde pública e a elegibilidade para dezenas de regimes locais.

## Por que isso importa

A privação não é uma única coisa — um bairro pode ser pobre em rendimento mas seguro, ou ter
rendimento adequado mas sofrer de maus resultados de saúde e habitação deficiente. Os índices
antecessores do IMD (remontando aos indicadores de privação do Department of the Environment da
década de 1970) evoluíram para o modelo atual de sete domínios precisamente porque o direcionamento
por um único indicador (a taxa de desemprego isoladamente, por exemplo) rotineiramente falhava áreas
privadas de outras formas. O IMD 2019 combina rendimento, emprego, educação, saúde, criminalidade,
obstáculos à habitação e serviços, e ambiente de vida numa única classificação composta por LSOA, cada
domínio construído a partir do seu próprio cabaz de indicadores e ponderado pela metodologia do
MHCLG. Por operar ao nível de pequena área (LSOA) em vez de ao nível de autarquia local, expõe bolsas
de privação escondidas dentro de distritos de outro modo prósperos — a razão pela qual é o IMD, e não
o rendimento médio da autarquia, que o NHS England, o pupil premium do Department for Education, e
dezenas de fórmulas de financiamento de autarquias locais efetivamente usam. O software que determina
elegibilidade, prioriza o trabalho de proximidade ou reporta impacto por área em Inglaterra deve
tratar o decil ou a classificação do IMD como um dado de entrada de primeira classe, não uma
reflexão tardia — e onde um programa direciona deliberadamente as áreas mais privadas, a sua
avaliação deve aplicar [ponderação distributiva](../distributional-weighting/) consistente com esse
direcionamento, em vez de avaliar uma libra de benefício da mesma forma independentemente de onde
recai.

## A matemática

```
7 domínios, ponderados:
  Rendimento                           22,5%
  Emprego                              22,5%
  Educação, Competências e Formação    13,5%
  Privação de Saúde e Incapacidade     13,5%
  Criminalidade                         9,3%
  Obstáculos à Habitação e Serviços     9,3%
  Ambiente de Vida                      9,3%

Pontuação de cada domínio: indicadores padronizados (classificados,
depois transformados em direção a uma distribuição normal) e
combinados por transformação exponencial, para que uma privação
elevada em qualquer indicador não possa ser totalmente compensada por
baixa privação noutros dentro desse domínio.

Pontuação composta do IMD (LSOA) = Σ (pontuação do domínio × peso do
                                      domínio)
Classificar LSOAs pela pontuação composta → 1 (mais privada) a 32.844
                                              (menos privada)
Decis: classificação ÷ 3.284 (aprox.), decil 1 = 10% de LSOAs mais
       privadas
```

## Exemplo prático

**Pontuação composta de uma LSOA**, usando pontuações de domínio padronizadas ilustrativas (0 =
nenhum sinal de privação, mais alto = mais privado):

```
Rendimento              0,35 × 0,225 = 0,07875
Emprego                 0,30 × 0,225 = 0,06750
Educação                0,20 × 0,135 = 0,02700
Saúde                   0,15 × 0,135 = 0,02025
Criminalidade           0,10 × 0,093 = 0,00930
Obstáculos à Habitação  0,05 × 0,093 = 0,00465
Ambiente de Vida        0,08 × 0,093 = 0,00744

Pontuação composta = 0,07875 + 0,06750 + 0,02700 + 0,02025
                + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Essa pontuação composta é então classificada face às pontuações de todas as 32.844 LSOAs. Se colocar
a LSOA na posição 2.950, cai no decil 1 (2.950 ÷ 3.284 ≈ 0,9, ou seja, dentro dos 10% de bairros mais
privados em Inglaterra) — que, para muitas fórmulas de financiamento, é o limiar que desbloqueia a
elegibilidade, independentemente de como a autarquia envolvente pontua em média.

## Ligação com a engenharia de software

- Qualquer serviço que geocodifique utilizadores por código postal ou LSOA pode juntar a tabela de
  consulta publicada do IMD (um ficheiro CSV gratuito e versionado do MHCLG) para acrescentar o decil
  de privação como covariável — para direcionar o trabalho de proximidade, priorizar a carga
  processual, ou reportar resultados por faixa de privação sem recolher novos dados pessoais.
- O decil do IMD é uma verificação de equidade padrão para serviços digitais públicos: cruzar a
  adesão, o abandono ou a satisfação do serviço por decil do IMD revela lacunas de acesso que uma
  métrica agregada esconde — ver [inclusão digital](../digital-inclusion/) e
  [métricas de satisfação do cidadão](../citizen-satisfaction-metrics/).
- Como a classificação do IMD é relativa (soma sempre a um conjunto fixo de classificações em toda a
  Inglaterra), não pode mostrar se a privação nacionalmente está a subir ou a descer ao longo do
  tempo — apenas que áreas se classificam onde relativamente umas às outras nessa edição; não
  construa painéis de tendência absoluta apenas com base na classificação bruta do IMD.

## Armadilhas

- **Comparar classificações do IMD entre edições (2015 vs. 2019) como uma tendência temporal** — os
  indicadores subjacentes, as geografias e a metodologia mudam todos entre edições; o MHCLG aconselha
  explicitamente contra usar mudanças de classificação como evidência de que uma área ficou mais ou
  menos privada.
- **Aplicar o IMD ao nível de LSOA a indivíduos** — uma LSOA no decil 1 ainda contém agregados
  familiares não privados, e uma LSOA no decil 10 ainda contém agregados privados; o IMD descreve
  áreas, não pessoas, e usá-lo como indicador indireto de elegibilidade individual classifica mal em
  ambas as direções.
- **Ignorar o detalhe ao nível do domínio em favor da classificação composta** — duas LSOAs com
  pontuações compostas idênticas podem ter perfis de domínio completamente diferentes (uma privada em
  saúde, outra em criminalidade); um regime de direcionamento visando um problema deve usar a
  pontuação de domínio relevante, não a composta combinada.

## Fontes

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
