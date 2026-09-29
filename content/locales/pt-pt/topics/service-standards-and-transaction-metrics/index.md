# Padrões de Serviço e Métricas de Transação

O GOV.UK Service Standard é a lista de verificação de 14 pontos do governo do Reino Unido para
construir e operar um serviço digital público, e vem emparelhado com um pequeno conjunto obrigatório
de métricas de transação quantitativas — custo por transação, taxa de conclusão, adesão digital e
satisfação do utilizador — que as equipas devem publicar para todos os serviços do governo central em
produção. Em conjunto, o padrão e as métricas são a especialização operacional, do dia a dia, dos
enquadramentos mais amplos de valor público e KPI deste repositório, dirigidos diretamente às equipas
de entrega de software.

## Por que isso importa

O Service Standard, mantido no service manual do GOV.UK, exige que cada avaliação pontual (alfa, beta,
produção) de um serviço digital do governo demonstre — entre os seus 14 pontos — que a equipa
compreende as necessidades dos utilizadores, trabalha numa equipa multidisciplinar, itera e melhora
com frequência, e *avalia ferramentas, sistemas e formas de trabalhar*. Historicamente, isto
coexistia com uma Performance Platform pública onde cada serviço em produção publicava os seus dados
de transação abertamente; essa plataforma foi entretanto descontinuada, mas a obrigação subjacente de
medir e publicar estas quatro métricas centrais persiste através das orientações de "medir o sucesso"
do service manual. A razão pela qual isto difere de um painel de KPI de software genérico é que estas
métricas foram explicitamente desenhadas como um único modelo económico ligado, não quatro pontuações
independentes: todo o caso de poupanças do governo digital — o Digital Efficiency Report do
Government Digital Service constatou que as transações digitais eram cerca de 20 vezes mais baratas
do que por telefone e cerca de 50 vezes mais baratas do que presencialmente para serviços de governo
local comparáveis — só se materializa se a taxa de conclusão se mantiver elevada e a adesão digital
genuinamente subir, em vez de meramente acrescentar um canal barato a par de um caro que permanece
inalterado.

## A matemática

```
Custo por transação = custo total de operação do serviço / número de
                       transações concluídas
Taxa de conclusão     = transações concluídas / transações iniciadas
                         × 100
Adesão digital        = transações no canal digital / transações em
                         todos os canais × 100
Satisfação do         = % satisfeitos + muito satisfeitos, inquérito
  utilizador             de 5 pontos dentro do serviço

Poupança de mudança de canal = volume de transações × mudança de
                        adesão × (custo por transação no canal antigo
                        − custo por transação digitalmente)

Custo de procura por falha = (1 − taxa de conclusão) × transações
                        tentadas digitalmente × custo do canal
                        alternativo que esses utilizadores usam então
                        em vez disso
```

## Exemplo prático

**Serviço ilustrativo de renovação de licença do governo central**, 2 milhões de transações/ano,
atualmente 65% por telefone (£3,00/transação) e 35% digital (£0,30/transação), taxa de conclusão 80%.
Uma reformulação face ao Service Standard de 14 pontos eleva a adesão digital para 60% e a conclusão
para 92%:

```
Poupança de mudança de adesão = 2.000.000 × 0,25 × (3,00 − 0,30) =
£1.350.000/ano

Custo de procura por falha, antes:
  2.000.000 × 0,35 × (1 − 0,80) × £3,00 = £420.000/ano (os
  desistentes recorrem ao telefone)

Custo de procura por falha, depois:
  2.000.000 × 0,60 × (1 − 0,92) × £3,00 = £288.000/ano

Poupança líquida de procura por falha = £420.000 − £288.000 =
£132.000/ano

Poupança anual total ≈ £1.350.000 + £132.000 = £1.482.000/ano
```

A aritmética torna explícito porque a taxa de conclusão não é uma métrica secundária: sem a melhoria
de 80% para 92%, a poupança de mudança de adesão seria parcialmente recuperada pela procura por falha
a redirecionar utilizadores digitais frustrados diretamente de volta para o canal telefónico caro.

## Ligação com a engenharia de software

Estas quatro métricas são um exemplo prático de um painel de custo-consequência: uma métrica de
custo mantida separada de três métricas de resultado/qualidade, deliberadamente nunca colapsadas
numa única pontuação — a mesma disciplina defendida nos [KPIs do setor público](../public-sector-kpis/).
Para os engenheiros, isto desdobra-se em trabalho concreto e apropriável: a taxa de conclusão é um
problema de instrumentação de funil, e cada ponto de abandono no percurso é, em princípio,
localizável e corrigível; o custo por transação exige uma contabilidade de custo unitário genuína,
incluindo custos de canal assistido por pessoal e em papel, não apenas a despesa de alojamento na
nuvem (ver [custo por transação](../cost-per-transaction/) e
[custo total de propriedade em TI governamental](../total-cost-of-ownership-in-government-it/)); e a
adesão digital é uma métrica de equidade vestida de fantasia de eficiência — os cidadãos que não
conseguem ou não querem mudar de canal são desproporcionadamente mais velhos, com deficiência, ou
digitalmente excluídos, pelo que o encerramento agressivo de canais converte uma "poupança" num dano
de acesso (ver [inclusão digital](../digital-inclusion/) e
[poupanças da mudança de canal](../channel-shift-savings/)). O próprio padrão de 14 pontos é a
especificação de processo por trás destes números — ver
[padrão de serviço digital](../digital-service-standard/) para o padrão completo, e
[métricas de satisfação do cidadão](../citizen-satisfaction-metrics/) para saber como o valor de
satisfação aqui se relaciona com a medição de confiança mais ampla.

## Armadilhas

- **Adesão ganha ao encerrar o canal alternativo**: fechar uma linha telefónica eleva
  aritmeticamente a percentagem de adesão digital enquanto despeja a procura por falha no canal que
  restar (muitas vezes uma via de digital assistido ou presencial mais cara); meça sempre o custo
  total do sistema, não apenas o rácio.
- **Medir a taxa de conclusão a partir do segundo passo do funil**: começar a contagem de "iniciados"
  depois do primeiro ponto de abandono genuíno favorece a taxa de conclusão e esconde a maior perda
  corrigível.
- **Custo por transação a excluir o apoio de digital assistido**: um custo unitário apenas digital que
  ignora o tempo de pessoal gasto a ajudar utilizadores que não se conseguem autosservir subestima o
  verdadeiro custo do canal.
- **Publicar métricas sem uma definição partilhada entre serviços**: "transação" e "concluída"
  significam coisas diferentes entre diferentes equipas de serviço a menos que as definições sejam
  padronizadas e versionadas, tornando a comparação entre serviços pouco fiável.

## Fontes

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
