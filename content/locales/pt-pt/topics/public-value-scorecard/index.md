# Painel de Valor Público

O painel de valor público adapta o balanced scorecard de 1992 de Robert Kaplan e David Norton —
construído para empresas a otimizar o lucro através das perspetivas financeira, do cliente, do
processo interno e de aprendizagem e crescimento — para organizações cujo resultado final é uma
missão, não uma margem. Obriga um organismo público a reportar o desempenho em várias dimensões
irredutíveis em simultâneo, em vez de colapsar tudo num único número que esconde as trocas.

## Por que isso importa

O argumento original de Kaplan e Norton, na Harvard Business Review, era que uma única métrica
financeira é um indicador atrasado que nada diz sobre *porque* o desempenho vai mudar no próximo
trimestre. No setor privado, a correção foram quatro perspetivas ligadas. No governo, o "triângulo
estratégico" de Mark Moore (de *Creating Public Value*, 1995) fornece a estrutura equivalente: um
serviço deve simultaneamente entregar **valor público** (o resultado da missão), manter
**legitimidade e apoio** (suporte político e público), e ser **operacionalmente viável** (executável
com os recursos e a capacidade de facto disponíveis). O *Balanced Scorecard: Step-by-Step for
Government and Nonprofit Agencies* (2003) de Paul Niven é o manual do profissional para traduzir as
quatro caixas de Kaplan e Norton neste triângulo — tipicamente rerotulando "financeiro" como
"administração de recursos", colocando a "missão" no topo em vez do "valor para o acionista" na
base, e tratando as perspetivas de cliente e parte interessada como coiguais em vez de subordinadas
ao lucro. A razão pela qual isto importa a uma equipa de entrega é que um serviço digital público
julgado apenas por uma métrica financeira ou de eficiência (custo por transação, digamos)
sistematicamente subinvestirá nas dimensões de legitimidade e resultado que a métrica financeira não
consegue ver.

## A matemática

O painel de valor público é um enquadramento, não uma fórmula, mas a sua estrutura é fixa e vale a
pena reproduzir exatamente:

```
Perspetiva            Pergunta do setor público                  Indicador de exemplo
--------------------------------------------------------------------------------
Missão / resultados    Estamos a alcançar o valor público que     Medida de resultado
                        existimos para criar?                     populacional (ver
                                                                   outcomes-vs-outputs)
Administração de       Estamos a usar o dinheiro público com      Custo por resultado,
  recursos              eficiência e dentro dos limites            variação orçamental
                        autorizados?
Cliente / utilizador    Os utilizadores e cidadãos conseguem       Taxa de conclusão,
                        aceder e beneficiar do serviço?            satisfação
Legitimidade / apoio    Os mandantes políticos, os órgãos de       Métricas de confiança,
                        supervisão e o público continuam a         conclusões de auditoria,
                        apoiar-nos?                                reclamações procedentes
Processo interno /      Temos a capacidade e o processo para       Rotatividade de pessoal,
  aprendizagem          continuar a melhorar?                      tempo de ciclo, idade do
                                                                    atraso acumulado

Um painel defensável reporta 3–5 indicadores por perspetiva,
escolhidos de modo a que nenhuma perspetiva isolada possa ser
manipulada sem que o dano apareça noutra.
```

## Exemplo prático

**Departamento de assistência social a adultos de uma autarquia local**: um painel para um serviço
de reabilitação (apoio de curto prazo para ajudar as pessoas a recuperar a independência após uma
estadia hospitalar) reporta:

```
Missão:       68% dos utilizadores do serviço já não precisam de
              cuidados contínuos após 6 semanas (meta 65%)
Administração: custo por episódio de reabilitação concluído =
              £1.850 (pressuposto orçamental £2.000)
Cliente:      satisfação do utilizador 82%, espera média para início
              do serviço 4,1 dias
Legitimidade: 3 reclamações procedentes por 1.000 episódios; o
              conselho de salvaguarda de adultos classifica o
              serviço como "bom"
Processo:     taxa de vagas de pessoal 14%, carga processual média
              23 (teto de carga processual segura: 25)
```

Lidos isoladamente, os números de missão e administração parecem uma história de sucesso direta:
abaixo do orçamento e acima da meta de resultado. Lidos em conjunto com a linha de processo, a taxa
de vagas de 14% face a um teto de carga processual de 25 mostra que o bom resultado está a ser
comprado ao operar perto de níveis de pessoal inseguros — um alerta que o número de missão isoladamente
nunca revelaria, e exatamente o modo de falha que um KPI de perspetiva única (ver
[KPIs do setor público](../public-sector-kpis/)) convida.

## Ligação com a engenharia de software

Para uma equipa que constrói um painel interno ou voltado para o público, o painel de valor público
é um argumento direto contra um único widget de "pontuação de saúde": construa um painel por
perspetiva, e resista à pressão do produto para as sintetizar num semáforo, porque é exatamente na
etapa de síntese que a informação de troca é destruída. Também mapeia bem para as estruturas de OKR
de equipas de produto: um OKR de missão sem um OKR de administração ou processo emparelhado
reproduz o modo de falha de métrica única contra o qual Kaplan e Norton escreviam em 1992. Ver
[valor público](../public-value/) para a teoria subjacente de Moore sobre o que a caixa de "missão"
deve de facto conter, e [métricas de confiança e legitimidade](../trust-and-legitimacy-metrics/) para
saber como preencher a perspetiva de legitimidade com indicadores reais e com fontes, em vez de um
indicador indireto que ninguém consegue defender.

## Armadilhas

- **Colapsar o painel numa única pontuação**: fazer a média de quatro perspetivas num único número
  reintroduz exatamente o problema — uma má pontuação de legitimidade mascarada por uma boa
  pontuação de administração — que o painel existe para prevenir.
- **Copiar a perspetiva "financeira" do setor privado sem alterações**: a perspetiva de
  administração de um organismo público diz respeito a permanecer dentro de orçamentos autorizados,
  muitas vezes reservados, não a maximizar a receita — a rerotulagem de Niven não é cosmética.
- **Escolher indicadores que a equipa dona do painel pode mover unilateralmente**: um indicador de
  legitimidade obtido da mesma equipa que julga (o tratamento de reclamações autorreportado, por
  exemplo) não é evidência independente.
- **Construir o painel uma vez e nunca revisitar pesos ou indicadores**: Kaplan e Norton previam uma
  revisão de estratégia anual; um painel congelado durante anos afasta-se da missão que foi
  construído para acompanhar.

## Fontes

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
