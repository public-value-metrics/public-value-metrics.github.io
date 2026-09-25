# Realização de Benefícios

A gestão da realização de benefícios é a disciplina de identificar, estabelecer uma referência
(baseline), acompanhar e *evidenciar* que os benefícios prometidos num caso de negócio de facto se
materializaram após a entrada em produção. No investimento público do Reino Unido, esta disciplina
vive dentro do Five Case Model do Green Book do HM Treasury e das orientações dedicadas de gestão de
benefícios da Infrastructure and Projects Authority; sem ela, "o sistema poupou trinta minutos por
pedido aos gestores de processos" permanece para sempre uma afirmação não auditada.

## Por que isso importa

Os casos de negócio são promessas; a realização de benefícios é a auditoria. O Green Book exige que
todo o caso de despesa passe cinco testes — estratégico, económico, comercial, financeiro e de
gestão — e o caso de gestão deve estabelecer como os benefícios serão realizados *antes da
aprovação*: responsáveis nomeados, referências capturadas e datas de medição fixadas. O guia da
Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for
Government Major Projects*
(<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>),
existe porque os próprios relatórios de portefólio da IPA sobre o Government Major Projects
Portfolio identificaram repetidamente a confiança na entrega e a realização de benefícios como
fraquezas recorrentes em grandes programas. Um projeto pode encerrar "dentro do prazo e do
orçamento" face aos seus marcos de entrega e, ainda assim, não conseguir realizar os benefícios que
justificaram gastar o dinheiro em primeiro lugar — uma distinção que as orientações da IPA tratam
como o cerne de toda a disciplina.

## A matemática

```
Taxa de realização = benefícios realizados / benefícios previstos   (por benefício, por período)

Mecanismos que tornam isto calculável:
  referência (baseline) capturada ANTES da entrada em produção
    (caso contrário, a diferença não é mensurável)
  cada benefício: responsável nomeado, métrica, fonte de dados,
    calendário de medição
  previsão ajustada para o enviesamento de otimismo na avaliação
    (exigência do Green Book)
  benefícios classificados como libertadores de tesouraria / de
    capacidade libertada / qualitativos, acompanhados e reportados
    separadamente
```

## Exemplo prático

**Autarquia local**: o caso de negócio de um portal digital de pedidos de planeamento prometia, por
ano: £300.000 de redução de custos de impressão e envio postal (tesouraria), 4.500 horas de
funcionários libertadas (capacidade) e melhoria da satisfação dos requerentes (qualitativo). Doze
meses após a entrada em produção:

```
Benefício         Previsto   Realizado  Taxa   Evidência
Poupança de       £300.000   £210.000   70%    livro-razão financeiro vs.
  tesouraria                                    ano de referência
Horas de          4.500      3.200      71%    amostra de estudo de
  funcionários                                  tempos e movimentos
Satisfação        +8pp       +11pp      138%   dados de inquérito aos
                                                requerentes

Ações resultantes da revisão (o objetivo da realização de benefícios):
o défice de tesouraria foi rastreado a duas áreas de serviço que
ainda processam pedidos em papel por exceção → encerrar a via de
exceção; a correção de enviesamento de otimismo do próximo caso de
negócio foi elevada de 10% para 25% com base no erro de previsão
deste caso.
```

Uma taxa de realização de 70% não é um fracasso — é conhecimento que permite calibrar melhor a
próxima previsão. Um caso não medido teria alegado 100% para sempre, e a equipa financeira não teria
tido base para o contestar.

## Ligação com a engenharia de software

As organizações de engenharia aprovam rotineiramente investimentos em plataformas e ferramentas com
base no benefício previsto e quase nunca os auditam depois — exatamente a patologia que a gestão da
realização de benefícios existe para corrigir. A versão simplificada: toda a proposta acima de um
limiar de materialidade nomeia um responsável pelo benefício, uma métrica de referência e uma data de
revisão fixa (tipicamente seis meses após a entrada em produção), e as taxas de realização de
propostas anteriores devem influenciar o quanto a organização confia na próxima previsão de uma
equipa ou fornecedor. Isto fecha o ciclo com a [avaliação do Green Book](../green-book-appraisal/),
que estabelece a previsão que esta disciplina audita, e é a mesma lógica por trás da constatação
amplamente reportada de que uma grande maioria dos projetos-piloto de IA generativa não mostra
retorno mensurável — ver
[produtividade da IA no setor público](../ai-productivity-in-the-public-sector/) — porque os
projetos-piloto que *de facto* geraram valor foram, quase sem exceção, os que tinham uma linha de
benefício nomeada e rastreável desde o início. Também depende de distinguir o que foi efetivamente
entregue daquilo que foi efetivamente realizado — ver [resultados vs. produtos](../outcomes-vs-outputs/).

## Armadilhas

- **Ausência de referência pré-produção**: a omissão fatal e irreparável — sem ela, nunca é possível
  calcular uma taxa de realização, apenas afirmá-la.
- **Benefício órfão**: um benefício sem responsável nomeado não tem ninguém a recolher os dados, e
  toda a revisão de portefólio o reporta por defeito como "genericamente no caminho certo".
- **Benefícios contados em duplicado num portefólio de programas**: dois projetos a reivindicar a
  mesma capacidade libertada de gestores de processos como seu benefício — manter um único registo de
  benefícios em todo o portefólio para detetar isto.
- **Teatro de realização**: medir e reportar de forma proeminente as vitórias qualitativas fáceis
  enquanto as linhas de tesouraria e de capacidade ficam discretamente por examinar.
- **Confundir entrega com realização**: um projeto que encerra os seus marcos "dentro do prazo e do
  orçamento" nada diz sobre se o benefício previsto alguma vez de facto ocorreu — as orientações da
  IPA tratam estas questões como duas perguntas separadas, com dois percursos de evidência separados.

## Fontes

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
