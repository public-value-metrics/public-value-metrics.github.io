# Métricas de Satisfação do Cidadão

As métricas de satisfação do cidadão medem como as pessoas avaliam a sua experiência direta de um
serviço público — distintas da confiança nas instituições em geral, e distintas de saber se o
serviço de facto alcançou um bom resultado. Um serviço pode ser bem-visto e ineficaz, ou eficaz e
mal-visto; a diferença entre os dois é, por si só, informação diagnóstica que uma equipa de entrega
deve acompanhar.

## Por que isso importa

A satisfação é medida em duas altitudes diferentes que são rotineiramente confundidas. Ao nível do
serviço, o já descontinuado Performance Platform do Reino Unido e o atual GOV.UK service manual
exigem um inquérito de satisfação por serviço (tipicamente uma escala de cinco pontos, de "muito
satisfeito" a "muito insatisfeito", administrada no momento da transação) como um dos quatro KPIs
obrigatórios de serviço — ver
[padrões de serviço e métricas de transação](../service-standards-and-transaction-metrics/). Ao
nível institucional, o UK Civil Service People Survey mede o envolvimento e a experiência dos
funcionários em todos os departamentos do governo central anualmente, e, separadamente, o programa
"Trust in Government" da OCDE inquire a confiança pública no governo nacional entre os
Estados-membros, acompanhando um padrão de longo prazo de declínio e recuperação fortemente moldado
por crises (tanto a crise financeira de 2008 como a pandemia de COVID-19 produziram movimentos
acentuados e visíveis nos valores de confiança da OCDE). A razão pela qual os engenheiros que
constroem serviços voltados para o cidadão precisam de separar satisfação e resultado é um modo de
falha conhecido no desenho de serviços: um formulário digital lindamente desenhado e fácil de usar
para um pedido de subsídio pode obter uma satisfação muito elevada enquanto a política subjacente —
regras de elegibilidade, atrasos no processamento, montantes atribuídos — deixa o requerente sem
melhorias reais. A satisfação mede a interface; não mede o valor entregue por trás dela.

## A matemática

```
Satisfação líquida = % satisfeitos (ou muito satisfeitos) − % insatisfeitos
                    (ou muito insatisfeitos)
                    (respostas neutras/sem opinião excluídas de ambos
                    os termos, mas contadas na base de respostas para
                    calcular cada percentagem)

Diferença satisfação-resultado = valor de satisfação − valor de
                    concretização de resultados
                    (ambos normalizados 0–100; uma grande diferença
                    positiva assinala um serviço que "parece bom" mas
                    entrega pouco em substância)

Índice de confiança (estilo OCDE) = % de inquiridos que respondem
                    "sim" a "tem confiança no [governo nacional]?"
                    acompanhado como série temporal, tipicamente
                    desagregado por idade, rendimento e escolaridade
```

## Exemplo prático

**Serviço de faturação eletrónica do imposto municipal de uma autarquia local**: um inquérito de
satisfação no momento de uma transação bem-sucedida mostra 2.400 respondentes: 1.650
satisfeitos/muito satisfeitos, 250 insatisfeitos/muito insatisfeitos, 500 neutros.

```
Satisfação líquida = (1.650/2.400 × 100) − (250/2.400 × 100)
                  = 68,75% − 10,42%
                  = +58,3 de satisfação líquida
```

Isto parece forte isoladamente. Mas o inquérito só é mostrado aos utilizadores que *completam com
sucesso* a transação — um enviesamento de medição conhecido (ver armadilhas abaixo). Ao juntá-lo com
o valor da taxa de conclusão de
[padrões de serviço e métricas de transação](../service-standards-and-transaction-metrics/), vê-se
que a conclusão é de apenas 71%, o que significa:

```
A satisfação real da população não é medida para os 29% que
abandonaram o percurso — plausivelmente a coorte mais insatisfeita,
já que o abandono é, por si só, um forte sinal negativo que o
inquérito nunca capta.
```

**Ilustração ao nível nacional (estrutura de uma série de confiança estilo OCDE)**: a confiança no
governo nacional é reportada em 42% no ano 1, caindo para 34% no ano 2 (um ano de crise) e
recuperando para 39% no ano 3 — uma trajetória típica do padrão de choque e recuperação parcial que a
OCDE documenta entre Estados-membros na sequência de grandes crises.

## Ligação com a engenharia de software

Instrumente os inquéritos de satisfação em todos os pontos de saída significativos de um percurso do
utilizador, não apenas na conclusão bem-sucedida — o erro de engenharia mais comum nesta área, e um
que converte silenciosamente uma métrica de satisfação numa métrica de vaidade enviesada por
sobrevivência. Onde possível, associe o valor de satisfação a uma métrica de conclusão ou de
resultado no mesmo painel, para que uma equipa não possa celebrar o aumento da satisfação enquanto a
conclusão discretamente cai (ver [custo por transação](../cost-per-transaction/) e
[inclusão digital](../digital-inclusion/) para saber quem fica excluído da amostragem de satisfação
digital à partida — utilizadores não digitais e de digital assistido são sistematicamente
sub-representados nos inquéritos dentro do serviço). Os dados de satisfação e confiança também
alimentam diretamente a vertente de legitimidade do
[triângulo estratégico de Moore](../public-value/), e pertencem às perspetivas de "cliente" e
"legitimidade" de um [painel de valor público](../public-value-scorecard/) — ver
[métricas de confiança e legitimidade](../trust-and-legitimacy-metrics/) para a contraparte ao nível
institucional desta métrica ao nível do serviço.

## Armadilhas

- **Enviesamento de sobrevivência em inquéritos no ponto de conclusão**: os utilizadores que
  abandonam um percurso nunca veem o inquérito, pelo que um valor elevado de satisfação dentro do
  serviço pode coexistir com uma baixa taxa de conclusão e uma grande população invisível de
  não-concluintes insatisfeitos.
- **Tratar a satisfação como indicador indireto de resultado**: uma interface bem desenhada para uma
  política mal desenhada pontua bem na satisfação e mal no resultado — reporte sempre ambos, nunca um
  como substituto do outro.
- **Amostras pequenas e não representativas reportadas com falsa precisão**: um valor de satisfação
  de algumas centenas de respondentes autosselecionados reportado com uma casa decimal implica uma
  confiança que a dimensão da amostra não consegue sustentar.
- **Ignorar a desagregação demográfica**: valores nacionais de confiança e satisfação que não são
  discriminados por idade, rendimento, deficiência ou acesso digital podem mascarar experiências
  fortemente divergentes entre grupos — um padrão que as próprias publicações Trust in Government da
  OCDE desagregam explicitamente.

## Fontes

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
