# Responsabilização Baseada em Resultados (OBA)

A Responsabilização Baseada em Resultados (Outcomes-Based Accountability, OBA), também chamada
Responsabilização Baseada em Resultados (Results-Based Accountability, RBA), é o enquadramento de
Mark Friedman para separar duas perguntas que o relato do setor público habitualmente confunde: "a
população está bem?" (responsabilização populacional) e "este programa específico está a correr
bem?" (responsabilização de desempenho). Confundir as duas é, na formulação de Friedman, a razão mais
comum pela qual programas bem geridos são culpados por tendências populacionais que nunca tiveram
poder para mover.

## Por que isso importa

Friedman estabeleceu o enquadramento em *Trying Hard Is Not Good Enough* (2005), argumentando que a
maioria do relato público ou afoga os decisores em estatísticas ao nível populacional que nenhuma
agência isolada controla (taxa de gravidez na adolescência, taxa de desemprego, esperança de vida),
ou os afoga em contagens de atividade ao nível do programa (clientes vistos, referenciações feitas)
que nada dizem sobre se a vida de alguém melhorou. A contribuição da RBA é um vocabulário pequeno e
disciplinado que mantém os dois separados: os resultados populacionais (condições de bem-estar para
toda uma população, como "as crianças nascem saudáveis") não pertencem a nenhuma agência isolada e
exigem que muitos parceiros se movam em conjunto; as medidas de desempenho (quão bem um programa
específico serve os seus clientes específicos) pertencem a uma agência e devem ser julgadas apenas
face àquilo que essa agência consegue de facto influenciar. As "três perguntas de desempenho" de
Friedman — quanto fizemos, quão bem o fizemos, e alguém está melhor? — está agora incorporada em toda
a contratação de serviços humanos estaduais e municipais dos EUA e, através da consultoria e conjunto
de ferramentas alinhados com a RBA Clear Impact, amplamente usada na contratação de governos locais
do Reino Unido e da Commonwealth. As implicações práticas são contratuais: um programa de habitação
não deve ser desfinanciado porque a taxa de sem-abrigo da cidade subiu por causas macroeconómicas
fora do seu alcance, mas deve definitivamente ser desfinanciado se os seus próprios clientes não
estiverem a ser alojados.

## A matemática

```
Responsabilização populacional (o "panorama geral" que uma
comunidade, região ou nação partilha):
  Resultado    — uma condição de bem-estar (por exemplo, "os
                 residentes têm segurança económica")
  Indicador(es) — uma medida dessa condição (por exemplo, taxa de
                  desemprego, rendimento médio do agregado familiar)
  → nenhum programa isolado é dono do indicador; o movimento exige
    muitos contribuintes

Responsabilização de desempenho (aquilo que um programa é
responsável):
  Quanto fizemos?          — volume de atividade (clientes servidos,
                              unidades entregues)
  Quão bem o fizemos?      — qualidade/eficiência (% que completa o
                              programa, custo por cliente)
  Alguém está melhor?      — o resultado que importa (% em emprego 6
                              meses após o programa, antes/depois ou
                              face a um grupo de comparação)

Um programa é julgado pela terceira pergunta de desempenho, nunca
diretamente pelo indicador populacional, a menos que a sua escala e
desenho pudessem plausivelmente movê-lo sozinho.
```

## Exemplo prático

**Programa de apoio ao emprego financiado pela cidade**, 500 participantes/ano, contratado por uma
autarquia local ao abrigo de um quadro de desempenho ao estilo RBA:

```
Indicador populacional (contexto, não o painel do programa):
  Taxa de desemprego da cidade: 6,2% (subiu de 5,8% no ano anterior,
  impulsionada pelo encerramento de uma fábrica fora do controlo do
  programa)

Medidas de desempenho (a verdadeira responsabilização do programa):
  Quanto:     500 participantes inscritos (meta 480) — cumprido
  Quão bem:   78% de taxa de conclusão; custo por concluinte =
              £340.000 / 390 concluintes ≈ £872
  Melhor?:    dos 390 concluintes, 260 em emprego sustentado aos 6
              meses = 66,7% face a 41% de um grupo de comparação
              emparelhado (ver counterfactual-analysis)
```

Sob uma leitura de responsabilização populacional, o programa parece estar a falhar — a taxa de
desemprego da cidade subiu sob a sua vigilância. Sob a leitura de responsabilização de desempenho da
RBA, o programa está a ser bem-sucedido: cumpriu a sua meta de volume, manteve a qualidade estável, e
produziu um resultado de emprego 25,7 pontos percentuais acima de um grupo de comparação emparelhado,
enquanto o indicador populacional se moveu por razões (o encerramento de uma fábrica) inteiramente
fora do controlo do programa.

## Ligação com a engenharia de software

A RBA mapeia diretamente para uma distinção familiar de SRE: os indicadores populacionais são como
métricas North Star ao nível do negócio que nenhuma equipa de engenharia isolada possui de ponta a
ponta (receita da empresa, quota de mercado), enquanto as medidas de desempenho são como os SLOs de
uma equipa — as coisas que as decisões de desenho dessa equipa de facto movem. Um painel que reporta
ambos sem rotular qual é qual convida exatamente à má atribuição que a RBA foi construída para
prevenir: um engenheiro de plantão a ser culpado por uma métrica que uma equipa dependente controla.
Ao encomendar ou construir ferramentas de relato para contratos de resultados, construa a tríade
"quanto / quão bem / melhor?" como campos de primeira classe, filtráveis separadamente, em vez de um
único KPI combinado — é a mesma disciplina que separar indicadores avançados e atrasados em
[KPIs do setor público](../public-sector-kpis/). A RBA é também a lógica de responsabilização por
trás do [pagamento por resultados e títulos de impacto social](../payment-by-results-and-social-impact-bonds/):
um contrato de PbR só pode justamente pagar pela medida de desempenho "melhor?", nunca pelo
indicador populacional, a menos que a intervenção seja genuinamente o motor dominante deste.

## Armadilhas

- **Pagar ou penalizar um programa face a um indicador populacional que não consegue controlar**:
  este é o erro isolado que a RBA existe para prevenir; verifique sempre se o programa é um
  contribuinte maior ou menor para o resultado populacional antes de lhe atribuir consequências.
- **Reportar "quanto" como se fosse "melhor?"**: as contagens de atividade (clientes vistos) são os
  dados mais fáceis de recolher e os menos informativos; insista para que a pergunta "alguém está
  melhor?" seja respondida com dados de resultado reais, idealmente face a um contrafactual (ver
  [análise contrafactual](../counterfactual-analysis/)).
- **Tratar os indicadores RBA como fixos para sempre**: o método de Friedman é explicitamente
  iterativo — um ciclo de "dados, história, o que funciona, plano de ação" — não um exercício de
  desenho de painel pontual.
- **Nenhum grupo de comparação para "melhor?"**: uma mudança antes/depois sem contrafactual confunde
  o efeito do programa com a tendência que a população teria mostrado de qualquer forma.

## Fontes

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
