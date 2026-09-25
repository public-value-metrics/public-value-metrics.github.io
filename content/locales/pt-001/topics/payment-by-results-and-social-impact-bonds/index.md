# Pagamento por Resultados e Títulos de Impacto Social (PbR/SIBs)

O pagamento por resultados (PbR) paga a um prestador com base em resultados verificados alcançados,
não em atividades realizadas. Um título de impacto social (social impact bond, SIB) é uma estrutura
de financiamento PbR específica em que investidores privados ou filantrópicos financiam a entrega de
serviços antecipadamente e só são reembolsados — com um retorno — por um encomendante governamental
se os resultados medidos independentemente atingirem os limiares acordados, deslocando o risco de
entrega do contribuinte para o investidor.

## Por que isso importa

O primeiro SIB do mundo foi lançado na HMP Peterborough em setembro de 2010: a Social Finance
angariou £5 milhões junto de 17 investidores para financiar o "One Service", trabalhando com
reclusos de sentença curta (menos de 12 meses) para reduzir a reincidência, com o Ministry of Justice
e o Big Lottery Fund a concordarem em reembolsar os investidores apenas se os eventos de reincidência
caíssem pelo menos 7,5% face a uma coorte nacional de comparação emparelhada. A coorte final do
projeto-piloto de Peterborough registou uma redução de 9,7% nas reincidências, confortavelmente acima
do limiar, e os investidores foram reembolsados com um retorno. O mecanismo importou porque resolveu
um problema específico de contratação: o governo queria pagar por resultados em vez de entradas, mas
não conseguia absorver o risco financeiro de uma intervenção que poderia não funcionar, pelo que a
estrutura SIB deslocou esse risco para investidores dispostos a subscrevê-lo. O Government Outcomes
Lab (GO Lab) na Blavatnik School of Government de Oxford mantém agora a base de evidência pública
mais completa sobre o desempenho de PbR e SIBs a nível mundial, acompanhando bem mais de 200 títulos
de impacto globalmente e publicando a investigação sobre que características de desenho se
correlacionam com o sucesso ou fracasso. A lição a que a base de evidência repetidamente regressa é
que a *métrica de resultado escolhida*, e quem suporta o risco de a falhar, determina quase tudo o
resto sobre como um contrato de PbR de facto se comporta na prática.

## A matemática

```
Pagamento PbR = pagamento base (se existir) + Σ (resultado alcançado
                 × preço unitário por resultado)

Retorno do investidor num título de impacto social:
  Desembolso do investidor = capital antecipado que financia a
                              entrega do serviço
  Pagamento de resultado    = o encomendante paga apenas se o
                               resultado ≥ limiar, escalado por quão
                               acima do limiar o desempenho fica
  Retorno do investidor     = pagamentos de resultado recebidos −
                               desembolso do investidor
                               (uma taxa de retorno, muitas vezes
                               limitada, refletindo o risco assumido)

Parâmetros-chave de desenho que determinam todo o comportamento do
contrato:
  Métrica de resultado    — deve ser um resultado, não um produto
                             (ver outcomes-vs-outputs)
  Comparação/contrafactual — geralmente uma coorte emparelhada (ver
                             counterfactual-analysis)
  Limiar de pagamento      — melhoria mínima antes de qualquer
                             pagamento ser acionado
  Curva de pagamento       — linear, escalonada, ou limitada acima do
                             limiar
  Desconto de atribuição/perda seca — ver additionality-and-deadweight
```

## Exemplo prático

**Peterborough One Service** (valores ilustrativos retirados de avaliações publicadas):

```
Capital angariado dos investidores:  £5.000.000
Coorte:                              ~3.000 reclusos homens de
                                      sentença curta em duas coortes
Limiar:                              ≥7,5% de redução em eventos de
                                      reincidência face a um grupo de
                                      comparação nacional emparelhado,
                                      ou sem pagamento
Resultado da coorte 1:                8,4% de redução — abaixo da
                                       fasquia contratual para essa
                                       coorte isoladamente, segundo as
                                       regras originais
Resultado da coorte combinada/final:  9,7% de redução — acima do
                                       limiar
Pagamento de resultado:               o governo (Ministry of Justice
                                       / Big Lottery Fund) paga por
                                       ponto percentual acima do
                                       limiar, financiando o
                                       reembolso do investidor mais um
                                       retorno
```

**Contrato de PbR de uma autarquia local (ilustrativo)**: um serviço de intervenção familiar é
contratado a £4.000 por família referenciada (pagamento de atividade) mais £6.000 por família sem
mais nenhuma referenciação de proteção de crianças 12 meses após o encerramento (pagamento de
resultado). 200 famílias referenciadas, 150 casos encerrados, 96 permanecem sem nova referenciação aos
12 meses:

```
Pagamento de atividade  = 200 × £4.000 = £800.000
Pagamento de resultado  = 96 × £6.000  = £576.000
Custo total do contrato = £1.376.000 para 96 resultados sustentados
                           confirmados
Custo por resultado confirmado ≈ £14.333 (ver cost-per-outcome)
```

## Ligação com a engenharia de software

O pagamento por resultados é um problema de alinhamento de incentivos antes de ser um problema de
dados, e o sistema de dados é onde esse alinhamento se mantém ou se quebra. A verificação
independente e à prova de adulteração dos resultados é todo o jogo: o encomendante e o prestador têm
incentivos opostos quanto a como um caso ambíguo é codificado, pelo que o sistema que regista os
resultados precisa de um rasto de auditoria, um acordo de partilha de dados com o verificador
independente (muitas vezes um organismo diferente do prestador, por vezes um organismo de estatísticas
oficiais que cruza com registos policiais ou de subsídios), e versionamento imutável da definição do
resultado — o equivalente, em PbR, à armadilha de "redefinir a métrica" nos
[KPIs do setor público](../public-sector-kpis/). Os cálculos de atribuição dependem dos métodos de
coorte emparelhada da [análise contrafactual](../counterfactual-analysis/), que precisam de código
reproduzível e auditável, não de uma folha de cálculo pontual. E a própria métrica deve ser um
resultado genuíno, não uma atividade indireta — ver
[resultados vs. produtos](../outcomes-vs-outputs/) — porque um contrato de PbR que paga por um
produto apenas rotula novamente o financiamento habitual com custo de transação extra. Onde o
retorno social de um SIB está a ser modelado prospetivamente, essa avaliação tipicamente empresta
diretamente da metodologia de
[retorno social sobre o investimento](../social-return-on-investment/).

## Armadilhas

- **Pagar por um resultado indireto facilmente manipulável**: "presença em sessões" é uma atividade
  disfarçada de resultado; insista numa medida que reflita a verdadeira mudança procurada
  (reincidência, emprego, estabilidade habitacional).
- **Nenhum contrafactual credível**: sem um grupo de comparação emparelhado, uma melhoria pode ser
  regressão à média ou uma tendência mais ampla, não o efeito do programa — ver
  [análise contrafactual](../counterfactual-analysis/) e
  [adicionalidade e perda seca](../additionality-and-deadweight/).
- **Subestimar os custos de transação e avaliação**: a verificação independente, a ligação de dados
  e a administração de contratos para regimes de PbR/SIB atingem rotineiramente dois dígitos como
  percentagem do valor do contrato — a base de evidência do GO Lab documenta isto como um motor
  recorrente de descontinuação de regimes.
- **Seleção seletiva ou "estacionamento" de casos**: os prestadores pagos por resultado têm um
  incentivo direto para priorizar os clientes com maior probabilidade de sucesso de qualquer forma e
  despriorizar os casos mais difíceis — desenhe escalões de pagamento ou ajuste de mistura de casos
  para o contrariar.

## Fontes

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
