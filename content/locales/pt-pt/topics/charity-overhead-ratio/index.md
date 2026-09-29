# Rácio de Custos Indiretos de Instituições de Solidariedade

O rácio de custos indiretos (overhead ratio) de uma instituição de solidariedade é a despesa
administrativa e de angariação de fundos expressa como percentagem da despesa total. É o número mais
solicitado no mundo da doação caritativa — usado por doadores, entidades fiscalizadoras e até alguns
financiadores como indicador indireto de eficiência — e é também uma das métricas de eficiência mais
completamente desacreditadas do setor, com as próprias organizações que a popularizaram a renegarem
publicamente em 2013.

## Por que isso importa

Em 17 de junho de 2013, a GuideStar, a BBB Wise Giving Alliance e a Charity Navigator — os três
maiores organismos de avaliação e informação sobre organizações sem fins lucrativos dos EUA, cujas
próprias avaliações históricas tinham ajudado a enraizar o rácio de custos indiretos como um atalho
para a qualidade das instituições de solidariedade — publicaram uma carta aberta conjunta aos
doadores americanos, "The Overhead Myth", declarando explicitamente que o rácio de custos indiretos é
uma má medida do desempenho de uma instituição e instando os doadores a olhar em vez disso para a
transparência, a governação e os resultados. Foi uma reviravolta direta pelas próprias instituições
que tinham construído a cultura de doação em torno do rácio durante uma década.

O problema subjacente é estrutural, não apenas de aparência: um rácio de custos indiretos baixo pode
ser conseguido subinvestindo exatamente nas coisas que tornam uma instituição eficaz — um sistema
decente de gestão de processos, pessoal formado, monitorização e avaliação — porque essas rubricas
são muitas vezes contabilizadas como "administração" em vez de "programa". Uma instituição que
esfoma o seu back office para reportar 5% de custos indiretos pode ser menos capaz de entregar
resultados do que uma que gasta 20% numa operação devidamente equipada. Em Inglaterra e no País de
Gales, as orientações da Charity Commission aos administradores (trustees) afastam-se de uma única
percentagem de custos indiretos como teste de eficiência, pedindo em vez disso aos administradores
que reportem o que a instituição alcançou face aos seus objetivos — ver os requisitos de relato do
SORP discutidos em [custo por beneficiário](../cost-per-beneficiary/).

## A matemática

```
Rácio de custos indiretos = (Custo administrativo + Custo de
                             angariação de fundos) / Despesa total

Variantes comuns:
  Rácio de programa          = Despesa de programa (caritativa
                                direta) / Despesa total
                              = 1 − rácio de custos indiretos
  Eficiência de angariação    = Custo de angariação de fundos /
                                Fundos angariados
```

Nenhuma destas fórmulas contém qualquer informação sobre resultados alcançados. Uma instituição pode
minimizar todas elas e, ainda assim, falhar todos os beneficiários; ver
[custo por resultado](../cost-per-outcome/) para a métrica que efetivamente aborda se o dinheiro
funcionou.

## Exemplo prático

Duas instituições de solidariedade, com a mesma despesa total:

- **Instituição A**: £1.000.000 de despesa total, £80.000 de administração + angariação → rácio de
  custos indiretos de 8%. Não tem função de monitorização e avaliação, tem um único responsável
  financeiro sobrecarregado e nenhum sistema de gestão de processos; a rotatividade de pessoal é
  elevada e os dados de resultados não são recolhidos.
- **Instituição B**: £1.000.000 de despesa total, £220.000 de administração + angariação → rácio de
  custos indiretos de 22%. Financia uma pequena equipa de avaliação, um sistema de gestão de
  processos que capta o acompanhamento de resultados, e formação adequada em salvaguarda.

Um doador que selecione apenas pelo rácio de custos indiretos escolhe A e rejeita B — o oposto do que
a evidência de [custo por resultado](../cost-per-outcome/) provavelmente mostraria, porque B é a
única das duas em posição de demonstrar, ou melhorar, os seus resultados reais.

## Ligação com a engenharia de software

O software financeiro e de relato de subvenções para o setor muitas vezes codifica de forma rígida a
divisão custos indiretos/programa como um campo categórico em cada linha de custo, porque é isso que
os reguladores e alguns financiadores ainda exigem em declarações estatutárias. Os engenheiros que
constroem estes sistemas devem tratar essa exigência como uma obrigação de conformidade, não como um
sinal de desenho de que o rácio de custos indiretos é a métrica que vale a pena destacar de forma
proeminente num painel; sempre que for mostrado, deve ser associado a uma métrica baseada em
resultados, para que quem o consulta não possa ler o rácio de custos indiretos isoladamente. Ver
[retorno sobre o investimento do doador](../donor-return-on-investment/) para a métrica que deve
ficar ao lado dele, e [valor pelo dinheiro](../value-for-money/) para o argumento equivalente no
setor público contra indicadores indiretos de eficiência de rácio único.

## Armadilhas

- **Usar o rácio de custos indiretos como corte de pré-seleção.** Rejeitar qualquer instituição acima
  de um limiar arbitrário (por exemplo, "no máximo 15% de custos indiretos") penaliza
  sistematicamente organizações devidamente equipadas e bem avaliadas, e recompensa o subinvestimento.
- **Categorizar erradamente o custo de entrega direta como custo indireto**, ou vice-versa — as
  convenções contabilísticas sobre o que conta como "programa" versus "administração" variam o
  suficiente entre instituições para que os rácios frequentemente nem sejam comparáveis à primeira
  vista.
- **Presumir que baixos custos indiretos implicam alto impacto.** Os dois estão, na melhor das
  hipóteses, sem correlação; ver a alegação central da carta "The Overhead Myth" de 2013.
- **Ignorar que algumas estratégias legítimas exigem custos indiretos mais elevados no curto prazo.**
  Uma fase de reforço de capacidade ou desenvolvimento organizacional aumenta intencionalmente a
  despesa administrativa para melhorar a entrega posterior.

## Fontes

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
