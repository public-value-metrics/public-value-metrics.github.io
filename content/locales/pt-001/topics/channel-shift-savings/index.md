# Poupanças da Mudança de Canal

As poupanças da mudança de canal são a redução de custo projetada ao deslocar o volume de transações
de canais dispendiosos — telefone, balcões presenciais, correio em papel — para o autoatendimento
digital barato. É o motor financeiro por trás do "digital por defeito", e também a rubrica do caso de
negócio com mais probabilidade de estar errada, porque o pressuposto em que assenta — que os canais
offline encolhem à medida que a adesão digital aumenta — só por vezes é verdade.

## Por que isso importa

A aritmética parece incontestável usando os valores de [custo por transação](../cost-per-transaction/)
do Digital Efficiency Report: deslocar um milhão de transações de uma visita presencial de £8,62 para
uma transação digital de £0,15 e a poupança é superior a £8 milhões. Mas uma poupança só se torna
tesouraria libertada para redistribuição se a *capacidade fixa* do canal em encolhimento for
efetivamente desmantelada — os lugares do centro de contacto, o pessoal de balcão, os minutos do
contrato telefónico — e os programas digitais de governos locais têm repetidamente constatado que o
volume total de contacto não cai ao ritmo da adesão digital. A investigação proveniente de programas
de transformação digital de autarquias e de organismos como a Socitm e a Local Government Association
documentou um padrão recorrente: os canais digitais atraem contacto genuinamente novo (cidadãos que
não teriam telefonado ou visitado agora fazem-no, porque é mais fácil), e uma parcela significativa
das transações "digitais" falha a meio e gera de qualquer forma uma chamada telefónica — pelo que o
volume telefónico cai muito menos do que a percentagem de adesão digital sugeriria, por vezes sem
sequer cair em termos absolutos, mesmo que a sua *quota* no contacto total diminua.

## A matemática

```
Poupança bruta da mudança de canal = volume deslocado × (custo_canal_
                                       antigo − custo_digital)

Poupança líquida (realizada) = poupança bruta
                       − nova procura/procura latente criada pelo
                         canal mais fácil
                       − custo da procura por falha (falhas digitais
                         que ainda assim geram uma chamada telefónica
                         ou visita ao balcão)
                       − custo da capacidade fixa não desmantelada
                         (um centro de contacto só consegue reduzir
                         pessoal em unidades discretas; uma queda de
                         15% no volume raramente permite cortar 15%
                         dos efetivos)

Limiar de realização: as poupanças só são efetivamente disponíveis
quando o volume desce abaixo do nível que o canal antigo consegue
suportar com o seu próximo patamar discreto de capacidade inferior
(por exemplo, perder um turno completo, uma secretária completa, uma
faixa de efetivos contratados)
```

## Exemplo prático

**Serviço de renovação de dístico azul de um conselho de condado**: 60.000 renovações/ano,
anteriormente 100% por telefone/papel a £6,40 por transação. Um novo serviço digital é lançado e
atinge 65% de adesão digital num ano, a £0,30 por transação digital.

```
Cálculo ingénuo (bruto) de poupança:
  39.000 deslocadas × (£6,40 − £0,30) = £237.900/ano

O que de facto aconteceu, segundo os dados do centro de contacto do
conselho:
  O volume telefónico caiu de 60.000/ano para 46.000/ano (−23%, não
  −65%) porque: 9.000 percursos digitais falharam e geraram uma
  chamada de seguimento (fuga por procura de falha), e 4.000 pessoas
  que anteriormente nunca renovavam agora fazem-no, por terem achado
  fácil fazê-lo online (procura latente — uma melhoria genuína de
  acesso, mas não uma poupança)

  O centro de contacto telefónico tem pessoal organizado em faixas de
  8.000 chamadas/ETI; uma queda de 14.000 chamadas (60.000 → 46.000)
  liberta 1,75 ETI, arredondado na prática para 1 ETI efetivamente
  redistribuído = £34.000/ano

Poupança realizada = £34.000/ano mais o custo de construção/operação
  do canal digital evitado em 39.000 transações ≈ £34.000 + (39.000 ×
  £0,30 custo digital já contabilizado) — uma fração do valor de
  destaque de £237.900, embora o serviço continue inequivocamente
  melhor para os utilizadores.
```

## Ligação com a engenharia de software

A lição de engenharia é que as poupanças da mudança de canal são realizadas por decisões
*operacionais* (escalas de turnos, desmantelamento, renegociação de contratos), não pelo lançamento
do software — uma equipa pode cumprir todos os pontos do
[padrão de serviço digital](../digital-service-standard/) e, ainda assim, entregar zero poupança
líquida se ninguém desmantelar a capacidade fixa do canal antigo. Instrumentar a procura por falha
(onde no percurso digital os utilizadores abandonam e o que fazem a seguir) é um problema solucionável
de análise de funil e a ação de maior alavancagem que uma equipa de engenharia pode tomar para
proteger o caso de poupanças; é também a ligação direta ao
[custo por transação](../cost-per-transaction/), que a procura por falha infla discretamente. Ver
[realização de benefícios](../benefits-realization/) para a disciplina mais ampla de verificar se as
poupanças de um caso de negócio de facto se concretizam, e [inclusão digital](../digital-inclusion/)
para perceber por que o canal offline geralmente não pode, e não deve, ser inteiramente desmantelado.

## Armadilhas

- **Presumir substituição de canal de 1:1**: modelar a adesão digital como uma subtração direta do
  volume telefónico/de balcão, ignorando a procura latente e a fuga por procura de falha documentadas
  na investigação sobre mudança de canal de governos locais.
- **Contabilizar poupanças brutas antes do desmantelamento**: contar a poupança no caso de negócio no
  ano em que a adesão sobe, não no ano (se alguma vez) em que a capacidade do canal antigo é
  efetivamente cortada.
- **Ignorar a natureza em degraus dos custos de pessoal**: uma queda de 20% no volume raramente se
  converte numa queda de 20% no custo, porque os centros de contacto e balcões têm pessoal organizado
  em faixas discretas, não de forma contínua.
- **Tratar a procura latente como desperdício**: novo contacto de utilizadores anteriormente
  excluídos ou anteriormente dissuadidos é um aumento real de [valor público](../public-value/), não
  um erro de modelização — deve ser reportado como um resultado de acesso, não descontado como ruído.

## Fontes

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
