# Métricas de Confiança e Legitimidade

Legitimidade e apoio é uma das três pernas do "triângulo estratégico" de Mark Moore em
*Creating Public Value* (1995) — a par do próprio valor público e da capacidade operacional — e é a
perna mais frequentemente deixada por medir, porque, ao contrário de um orçamento ou de uma contagem
de produtos, a legitimidade não tem um único número óbvio associado. As métricas de confiança e
legitimidade são a família de medidas proxy que os governos usam para preencher essa lacuna:
inquéritos de confiança institucional, classificações de confiança de organismos de fiscalização,
dados de queixas e recursos, e indicadores de apoio político/legislativo.

## Por que isso importa

O argumento de Moore é que um gestor público que entrega valor real mas perde legitimidade política e
pública acabará por perder o ambiente autorizador necessário para continuar a entregá-lo — o
financiamento é cortado, os mandatos são reduzidos, e o serviço é asfixiado independentemente da
qualidade dos seus resultados. A legitimidade não é, portanto, um pensamento tardio de relações
públicas acoplado a um painel de entrega; é um input estrutural para saber se a missão pode sequer
continuar, razão pela qual figura como uma perspetiva de igual peso num
[painel de valor público](../public-value-scorecard/), e não como uma nota de rodapé. O programa de
inquérito "Trust in Government" da OCDE é a principal tentativa transnacional de quantificar isto:
acompanha a proporção de cidadãos, entre os Estados-membros da OCDE, que dizem confiar no seu governo
nacional, e os seus dados de longo prazo mostram que a confiança é altamente sensível a choques —
tanto a crise financeira de 2008 como a pandemia de COVID-19 produziram oscilações acentuadas ao
nível nacional, frequentemente seguidas de apenas uma recuperação parcial, com a análise da OCDE a
encontrar consistentemente que a *competência* percebida (o governo entrega o que diz que vai
entregar) e a *equidade/integridade* percebida (o governo é visto a agir sem corrupção ou
favoritismo) são os dois motores mais fortes da confiança, distintos da satisfação com qualquer
transação isolada. Os governos também tentam cada vez mais operacionalizar a legitimidade a um nível
mais granular — os reguladores e inspetorados independentes do Reino Unido (o National Audit Office,
o Parliamentary and Health Service Ombudsman, reguladores setoriais como a Ofsted e a Care Quality
Commission) funcionam como verificações institucionalizadas de legitimidade, convertendo "o público
ainda confia neste serviço" em classificações auditáveis.

## A matemática

Confiança e legitimidade é um tópico moldado por enquadramento, cujas proxies quantitativas
utilizáveis são:

```
Índice de confiança institucional (estilo OCDE)
  = % de inquiridos que respondem "sim" a uma pergunta de confiança no governo,
    acompanhada ao longo do tempo, desagregada por grupo demográfico

Conjunto de proxies de legitimidade (nenhum número único substitui o construto):
  - Queixas procedentes por 1.000 utentes do serviço (dados de provedoria ou queixas internas)
  - Taxa de sucesso de recurso judicial/recurso administrativo contra as decisões do organismo
  - Classificação do regulador/inspetorado independente (por exemplo, faixas de "excelente"
    a "inadequado")
  - Votos de confiança de comissões legislativas/de fiscalização ou frequência de relatórios
    críticos
  - Volume de pedidos de acesso à informação e taxa de divulgação/recusa, como proxy da
    transparência percebida

A legitimidade é corroborada, não calculada: uma avaliação de legitimidade defensável
triangula várias das proxies acima em vez de depender de uma única.
```

## Exemplo prático

**Autoridade tributária nacional**: triangulação de legitimidade para um relatório anual de valor
público.

```
Proxy de confiança estilo OCDE (inquérito de confiança específico do departamento):
  58% dos inquiridos dizem confiar que a autoridade os "trata com justiça" (descendo
  de 64% dois anos antes)

Dados de queixas:
  Queixas procedentes: 4,2 por 1.000 interações com contribuintes (subindo de
  3,1 por 1.000)

Encaminhamentos ao provedor:
  Encaminhamentos ao Adjudicator's Office independente: 1.850 no ano, dos quais
  61% procedentes total ou parcialmente contra a autoridade (subindo de 48% no
  ano anterior)

Lendo os três indicadores em conjunto: a confiança está a cair, as queixas
procedentes estão a subir, e as conclusões do provedor independente estão cada
vez mais do lado contrário à autoridade — três sinais independentes a convergir
na mesma direção, o que é o que torna esta uma conclusão de legitimidade
credível, e não ruído numa única série.
```

Um único destes valores a mover-se seria uma evidência fraca; três medidas independentes a
mover-se em conjunto no mesmo período é o padrão que torna uma afirmação de legitimidade defensável.

## Ligação com a engenharia de software

As métricas de legitimidade raramente são produzidas pelo painel de uma única equipa, o que é em si a
lição de conceção: construir pipelines de relato capazes de ingerir e reconciliar dados de fontes
externas independentes (sistemas de processos de provedoria, fluxos de classificações de
reguladores, fornecedores de inquéritos) em vez de arquitetar o relato de legitimidade como uma
métrica apenas interna, porque as afirmações de legitimidade de origem interna ("nós classificamo-nos
como dignos de confiança") têm pouco peso probatório — o mesmo problema de independência assinalado
para a perspetiva de legitimidade num [painel de valor público](../public-value-scorecard/). Os
pipelines de dados de queixas e recursos merecem o mesmo rigor de qualidade de dados que qualquer
pipeline de resultados que alimente contratos de
[pagamento por resultados](../payment-by-results-and-social-impact-bonds/), uma vez que um conjunto
de dados de queixas subrreportado ou mal categorizado subestima silenciosamente um problema de
legitimidade antes de este se tornar visível num inquérito de confiança um ano depois. Ver
[métricas de satisfação do cidadão](../citizen-satisfaction-metrics/) para a contraparte ao nível da
transação desta medida ao nível institucional, e [valor público](../public-value/) para o
enquadramento completo do triângulo estratégico de Moore a que esta perna pertence.

## Armadilhas

- **Tratar a satisfação como proxy de legitimidade**: um cidadão pode estar satisfeito com a
  interface de uma única transação ao mesmo tempo que desconfia da instituição em geral (ou
  vice-versa) — ver [métricas de satisfação do cidadão](../citizen-satisfaction-metrics/) para
  perceber por que os dois têm de ser relatados separadamente.
- **Depender de uma única métrica autorreportada**: um inquérito de confiança conduzido internamente
  sem corroboração independente (dados de provedoria, classificações de reguladores) é fácil de
  descartar como autoavaliação; triangule.
- **Ignorar a desagregação demográfica**: os valores agregados de confiança nacional podem esconder
  legitimidades fortemente divergentes entre grupos específicos (por idade, etnia, rendimento ou
  região) — as próprias publicações do Trust in Government da OCDE desagregam exatamente por esta
  razão.
- **Ler uma queda pontual causada por um choque como uma tendência permanente**: os valores de
  confiança movem-se acentuadamente em torno de crises (colapsos financeiros, pandemias, escândalos
  de grande visibilidade) e recuperam parcialmente; um único ponto de dados pós-choque não deve ser
  extrapolado para um declínio de longo prazo sem mais dados.

## Fontes

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
