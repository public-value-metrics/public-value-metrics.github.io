# Inclusão Digital

A inclusão digital é a disciplina de garantir que "digital por defeito" não se torna "apenas
digital" — que os serviços públicos desenhados em torno do canal mais barato continuam a funcionar
para os cidadãos que não conseguem ou não querem usá-lo sem assistência. O GDS cunhou o mecanismo de
entrega específico, "digital assistido", como um requisito obrigatório para todos os serviços
digitais do governo, não um extra opcional.

## Por que isso importa

A Government Digital Strategy de 2012 estabeleceu a ambição claramente: os serviços digitais devem
ser construídos digitais por defeito, mas a própria estratégia reconheceu que cerca de 10% dos
adultos no Reino Unido não conseguiriam usá-los sem ajuda, e comprometeu os departamentos a fornecer
apoio digital assistido — uma via mediada por humanos, por telefone, presencial, ou através de um
intermediário — como parte do serviço, não um recurso alternativo separado acrescentado
posteriormente. Esse compromisso é agora o ponto 5 do
[padrão de serviço digital](../digital-service-standard/), "garantir que todos podem usar o serviço".
A escala da exclusão contínua é acompanhada pelo UK Consumer Digital Index anual do Lloyds Banking
Group: a edição de 2024 constatou que cerca de 1,6 milhões de pessoas no Reino Unido permanecem
offline, e que este grupo se inclina fortemente para pessoas com 70–79 anos, as que ganham menos de
£35.000, e as reformadas ou desempregadas — precisamente a população com maior probabilidade de
depender dos serviços públicos que estão a ser redesenhados. O mesmo relatório constatou que apenas
48% da força de trabalho do Reino Unido conseguia completar todas as 20 tarefas do quadro de
Competências Digitais Essenciais, o que significa que a exclusão não é uma questão binária de
conetividade, mas um espetro de competência, confiança e confiabilidade que uma métrica simples de
"tem banda larga" não capta de todo.

## A matemática

A inclusão digital é um enquadramento e uma verificação de equidade em vez de uma única fórmula, mas
compõe-se com a avaliação de valor quantitativo através da
[ponderação distributiva](../distributional-weighting/):

```
Valor ingénuo da mudança de canal:
  valor = volume deslocado × (custo_antigo − custo_digital)
          [ver channel-shift-savings]

Valor ajustado à inclusão:
  valor = (volume deslocado × poupança não ponderada)
        − (utilizadores excluídos × custo da disponibilização de
           digital assistido)
        − (ajuste de ponderação distributiva para o dano a grupos
           excluídos que perdem acesso ou enfrentam qualidade de
           serviço degradada)

O digital assistido não é o custo residual da falha — é um canal
concebido, com o seu próprio custo-por-transação (ver
cost-per-transaction), tipicamente muito mais elevado por transação
do que o autoatendimento digital, mas geralmente ainda mais barato do
que o canal legado que substitui parcialmente.
```

## Exemplo prático

**Serviço nacional de subsídios ao estilo Universal Credit**: 2,5 milhões de pedidos/ano, avaliado
como necessitando de apoio digital assistido para uma estimativa de 10% dos requerentes, segundo o
pressuposto de planeamento da Government Digital Strategy.

```
Coorte excluída/de digital assistido = 2.500.000 × 10% = 250.000
pedidos/ano

Custo do canal de digital assistido (apoio telefónico + presencial,
com pessoal preparado para lidar com vulnerabilidade e complexidade)
≈ £9,50/pedido
  = 250.000 × £9,50 = £2.375.000/ano

Custo do autoatendimento digital para os restantes 90% ≈ £0,40/pedido
  = 2.250.000 × £0,40 = £900.000/ano

Custo médio combinado por transação = (2.375.000 + 900.000) /
  2.500.000 = £1,31/pedido

Um desenho que salta o digital assistido para atingir um custo por
transação de destaque mais baixo (por exemplo, £0,40 combinado,
ignorando os 250.000 requerentes excluídos) não elimina esse custo de
£2,375M — converte-o em direitos não reclamados, recursos
administrativos e procura a jusante por serviços de crise que recai
inteiramente sobre um orçamento diferente.
```

## Ligação com a engenharia de software

O digital assistido é um canal concebido, o que significa que tem interfaces, SLAs e instrumentação
como qualquer outro: uma ferramenta de gestor de processos baseada em telefone, um portal
intermediário para a Citizens Advice ou uma autarquia local, ou um fluxo de quiosque presencial.
Tratá-lo como um extra tardio — um número de telefone em letra miúda em vez de um canal considerado
desde a descoberta — é a forma mais comum de os serviços falharem o ponto 5 do
[padrão de serviço digital](../digital-service-standard/) na avaliação. A inclusão digital é a lente
de equidade sobre todos os outros tópicos deste capítulo: limita o quão agressivamente as
[poupanças da mudança de canal](../channel-shift-savings/) podem ser realizadas, é uma rubrica que
deve ser incluída honestamente no [custo por transação](../cost-per-transaction/), e é a aplicação
direta da [ponderação distributiva](../distributional-weighting/) a um contexto de serviços digitais
— uma poupança que recai desproporcionadamente sobre pessoas já digital e economicamente excluídas
deve ser ponderada para baixo, não tratada como equivalente a uma poupança distribuída uniformemente
pela população.

## Armadilhas

- **Ler "digital por defeito" como "apenas digital"**: encerrar a linha telefónica ou o balcão assim
  que a adesão digital ultrapassa um limiar, sem verificar se a coorte restante tem uma alternativa
  genuinamente utilizável.
- **Medir a inclusão pela conetividade binária**: "tem banda larga" ou "possui um smartphone" é um
  mau indicador indireto da capacidade de completar uma transação específica — o défice de
  Competências Digitais Essenciais (apenas 48% da força de trabalho do Reino Unido completa todas as
  20 tarefas, segundo a Lloyds 2024) mostra que a competência e a confiança importam tanto quanto o
  acesso.
- **Custear o digital assistido como um erro de arredondamento**: orçamentá-lo como uma pequena
  rubrica de contingência em vez de um canal adequado com o seu próprio
  [custo por transação](../cost-per-transaction/), e depois ficar surpreendido quando está
  subfinanciado e com falta de pessoal no lançamento.
- **Inquirir apenas os concluintes digitais bem-sucedidos**: a investigação de satisfação e
  usabilidade realizada inteiramente dentro do serviço não capta as pessoas que nunca chegaram tão
  longe, que é exatamente a população que o trabalho de inclusão digital se destina a proteger.

## Fontes

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
