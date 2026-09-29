# KPIs do Setor Público

Um indicador-chave de desempenho (KPI) é uma medida escolhida e acompanhada que representa se um
serviço público está a fazer bem o seu trabalho. No governo, a escolha de um KPI nunca é neutra:
porque os KPIs se ligam a orçamentos, tabelas classificativas e carreiras, o ato de selecionar um
molda o comportamento de todos a jusante dele, muitas vezes mais do que a própria política que criou
o serviço.

## Por que isso importa

A observação de Charles Goodhart de 1975 sobre a política monetária — mais tarde popularizada por
Marilyn Strathern como "quando uma medida se torna um objetivo, deixa de ser uma boa medida" — é o
aviso mais importante na gestão de desempenho do setor público. Um KPI escolhido para *descrever* um
sistema começa a *distorcer* esse sistema no momento em que o financiamento, a remuneração ou a
sobrevivência política lhe são atados. A ilustração canónica são os tempos de resposta das ambulâncias
do NHS: quando o objetivo de resposta de Categoria A de oito minutos se tornou vinculativo,
mostrou-se que algumas trusts "empilhavam" ambulâncias mesmo fora do relógio do tempo de resposta, ou
reclassificavam chamadas, para atingir o número sem mudar os resultados dos doentes. As orientações do
National Audit Office do Reino Unido sobre escolher e usar indicadores de desempenho — estabelecidas
nos seus relatórios de valor pelo dinheiro e no seu quadro "Choosing the Right FABRIC" (Adequado ao
propósito, Apropriado, Equilibrado, Robusto, Integrado, Custo-eficaz) — existem precisamente porque os
departamentos continuavam a escolher indicadores fáceis de reportar em vez de indicadores difíceis de
manipular. Um engenheiro de software que lança o painel face ao qual um ministro ou diretor será
julgado está, quer o pretenda ou não, a desenhar a estrutura de incentivos de uma instituição pública.

## A matemática

O desenho de KPI é um tópico com forma de enquadramento, mas a *avaliação* de um KPI candidato é uma
lista de verificação repetível, não uma fórmula:

```
Para cada KPI candidato, pontuar face a:
  Adequado ao propósito — mede o resultado, ou um indicador indireto
                           várias etapas removido?
  Apropriado            — pertence às pessoas que conseguem
                           realmente influenciá-lo?
  Equilibrado            — está emparelhado com uma contramétrica que
                            apanha a manipulação?
  Robusto                — sobrevive a auditoria, ou é autorreportado
                            e não verificável?
  Integrado              — encaixa no conjunto mais amplo, ou empurra
                            contra outro KPI?
  Custo-eficaz           — recolhê-lo custa mais do que a decisão que
                            informa?

Divisão indicador avançado vs. atrasado:
  Indicador avançado  → prevê o resultado futuro, mas muitas vezes
                         manipulável (por exemplo, chamadas atendidas
                         <60s)
  Indicador atrasado  → confirma que o resultado aconteceu, mas chega
                         tarde demais para orientar (por exemplo,
                         inquérito de satisfação anual)
  Um conjunto de KPIs defensável emparelha pelo menos um de cada por
  objetivo.
```

## Exemplo prático

**Trust de ambulâncias**: uma trust reporta um KPI de tempo de resposta de Categoria A (risco de
vida) de "75% das chamadas respondidas dentro de 8 minutos". Num trimestre, chegam 6.000 chamadas de
Categoria A; 4.500 são atendidas dentro de 8 minutos, dando 75,0% — aparentemente dentro do objetivo.

```
KPI de destaque = 4.500 / 6.000 × 100 = 75,0%  (cumpre o limiar de
75%)
```

Mas uma auditoria de Goodhart acrescenta uma contramétrica: o tempo de resposta médio para os 10%
mais lentos das chamadas.

```
Tempo de resposta médio do decil mais lento = 34 minutos (subiu de
19 minutos dois anos antes)
```

A trust está a atingir o objetivo enquanto a cauda — as chamadas com maior probabilidade de serem
genuinamente de risco de vida uma vez que a triagem é imperfeita — piorou muito, porque as equipas
estão a ser priorizadas em direção a chamadas próximas do limite de 8 minutos em vez de à urgência
clínica. O KPI isolado contou uma história falsa; o KPI emparelhado contou a verdadeira.

## Ligação com a engenharia de software

Os engenheiros que constroem painéis de desempenho para o governo estão, funcionalmente, a desenhar a
API de incentivos da organização. Implicações práticas: instrumente o *denominador* com o mesmo rigor
que o numerador (um KPI reportado como uma percentagem nua convida à manipulação do denominador —
ver [custo por transação](../cost-per-transaction/) para a mesma armadilha em serviços digitais);
construa contramétricas no mesmo painel em vez de num relatório separado que ninguém lê, para que a
manipulação seja visível no ponto de decisão; e versione a definição do KPI, porque uma redefinição
silenciosa (mudar o que conta como uma "chamada", um "caso" ou uma "conclusão") é funcionalmente
equivalente a mudar o objetivo sem o anunciar. Um [painel de valor público](../public-value-scorecard/)
é uma forma estruturada de impedir que um único KPI seja lido isoladamente, e a
[responsabilização baseada em resultados](../outcomes-based-accountability/) é a disciplina de
escolher KPIs ao nível populacional que uma única equipa não consegue distorcer unilateralmente.

## Armadilhas

- **Escolher a métrica fácil de recolher em vez da significativa**: o tempo de atendimento de
  chamadas é trivial de registar; se a chamada resolveu o problema do cidadão não é — mas só a
  segunda é o resultado. Resista a recorrer por defeito ao que o sistema já emite.
- **Nenhuma contramétrica**: qualquer KPI ligado a dinheiro ou reputação será manipulado na margem;
  lance-o com uma métrica emparelhada que apanhe o vetor de manipulação provável antes de o publicar.
- **Redefinir a métrica sem um registo de alterações**: trocar "chamadas recebidas" por "chamadas
  atendidas" para favorecer uma tendência destrói a credibilidade da série temporal no momento em que
  é descoberto — publique sempre um registo de alterações de definições a par dos números.
- **Confundir atividade com resultado**: contar inspeções concluídas é um produto; contar instalações
  postas em conformidade está mais próximo do resultado (ver
  [resultados vs. produtos](../outcomes-vs-outputs/)).

## Fontes

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
