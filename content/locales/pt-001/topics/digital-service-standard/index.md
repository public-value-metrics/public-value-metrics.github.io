# Padrão de Serviço Digital

O GOV.UK Service Standard é o portão que todo o serviço digital do governo central deve ultrapassar
antes de poder entrar em produção: 14 pontos publicados, avaliados por um painel independente no fim
de cada fase de entrega. É o mecanismo que transforma "construir bons serviços públicos" de um
slogan numa decisão de aprovado/reprovado com um rasto documental — e o descendente direto do
mandato "digital por defeito" da Government Digital Strategy de 2012.

## Por que isso importa

Antes de o Service Standard existir, a falha de TI governamental raramente era visível até ao
lançamento, e raramente atribuível a uma decisão que alguém pudesse apontar. A Government Digital
Strategy de 2012 comprometeu os departamentos a redesenhar os 25 serviços transacionais voltados
para o público de maior volume como "digitais por defeito", e apoiou o compromisso com um mecanismo
de conformidade: os serviços não podiam entrar em produção no GOV.UK sem ultrapassar uma avaliação de
serviço face ao que era então um padrão de 26 pontos (consolidado para 18 em 2019, e agora o padrão
de 14 pontos em vigor hoje, cobrindo três grupos — compreender as necessidades dos utilizadores,
fornecer um bom serviço, e usar a tecnologia certa). Uma avaliação de serviço é um evento real: um
painel de avaliadores do GDS ou do departamento revê evidências, questiona a equipa, e emite um
veredito de aprovado, reprovado ou "não cumprido" para cada ponto, publicado na página de avaliação
do serviço. Reprovar numa avaliação bloqueia a passagem do serviço da beta privada para a beta
pública, ou da beta para produção — é um verdadeiro portão, não uma revisão.

## A matemática

O Service Standard é um enquadramento, não uma fórmula, mas funciona como uma estrutura de decisão
com portões por fase:

```
Descoberta → Avaliação Alfa → Avaliação Beta → Avaliação de Produção
              (não obrigatória  (obrigatória     (obrigatória antes
               para todos os     antes do          de remover a
               serviços, mas     lançamento da     etiqueta "beta" e
               recomendada)      beta pública)      encerrar o canal
                                                     antigo)

Cada avaliação: evidência + entrevista à equipa → veredito do painel
por ponto
  Cumprido / Parcialmente cumprido / Não cumprido
Resultado geral: Aprovado / Aprovado com condições / Reprovado
  (reavaliação necessária)

Custo de uma reprovação ≈ custo do próximo ciclo de sprint para
              corrigir
            + atraso nas [poupanças da mudança de canal]
              (channel-shift-savings) que o serviço foi financiado
              para entregar
```

O ponto 10 ("definir o que é o sucesso, e publicar dados de desempenho") é o que alimenta o
[custo por transação](../cost-per-transaction/) e os
[padrões de serviço e métricas de transação](../service-standards-and-transaction-metrics/) — o
Standard exige a medição, não apenas o serviço.

## Exemplo prático

**Serviço de candidatura a habitação de uma autarquia local**: uma equipa de um conselho chega à sua
avaliação beta com um serviço que cumpre 11 dos 14 pontos, mas reprova no ponto 5 ("garantir que
todos podem usar o serviço") porque não existe via de digital assistido para requerentes sem acesso à
internet, e reprova no ponto 9 porque dados pessoais são registados em texto simples nos rastos de
erro da aplicação.

```
Custo direto da reprovação:
  Vaga de reavaliação: espera de 6–8 semanas até ao próximo painel
    disponível
  Sprint de correção: 2 programadores × 3 semanas × £550/dia ≈
    £34.650
  Desenho do canal de digital assistido: 1 investigador × 2 semanas
    ≈ £5.000

Custo do atraso: previa-se que o serviço deslocasse 40% de 18.000
pedidos anuais de habitação de chamadas telefónicas de £8,50 para
transações digitais de £0,20
  = 7.200 × (£8,50 − £0,20) = £59.760/ano perdidos, proporcionalizado
    para o atraso de ~2 meses ≈ £9.960

Custo total da avaliação reprovada ≈ £49.610
```

O propósito da aritmética não é a precisão — é que uma avaliação reprovada tem um preço real e
calculável, razão exata pela qual o portão tem dentes.

## Ligação com a engenharia de software

Para os engenheiros, o Standard lê-se tanto como uma lista de verificação de arquitetura e entrega
como um documento de política: o ponto 11 ("escolher as ferramentas e tecnologia certas") e o ponto
12 ("tornar o novo código-fonte aberto") são decisões diretas de engenharia, e o ponto 14 ("operar um
serviço fiável") exige os mesmos SLOs e processos de incidentes que qualquer sistema em produção
precisa. É o enquadramento guarda-chuva deste capítulo — o
[custo por transação](../cost-per-transaction/) e as
[poupanças da mudança de canal](../channel-shift-savings/) são o que o Standard tenta proteger
financeiramente, a [inclusão digital](../digital-inclusion/) é o que o ponto 5 existe para garantir,
e os componentes do [governo como plataforma](../government-as-a-platform/) (GOV.UK Notify, Pay, One
Login) satisfazem o ponto 13 ("usar e contribuir para normas abertas, componentes e padrões comuns")
em grande medida por defeito. Ver também
[construir vs. comprar no governo](../build-vs-buy-in-government/) para saber como o ponto das
"ferramentas certas" se reflete nas decisões de contratação pública.

## Armadilhas

- **Tratar a avaliação como uma casa de verificação de conformidade do dia do lançamento**: as
  equipas que só leem os 14 pontos uma semana antes da sua avaliação beta reprovam previsivelmente; o
  Standard destina-se a moldar decisões desde a descoberta em diante, não a auditá-las
  retrospetivamente.
- **Avaliar o protótipo, não o serviço**: uma demonstração polida pode passar numa revisão que a
  versão em produção, inclusiva de digital assistido e com gestão de incidentes, do serviço
  reprovaria — os avaliadores devem sondar esta lacuna, mas os serviços menores autocertificados
  frequentemente saltam-na.
- **Nenhuma reavaliação antes de escalar**: um serviço avaliado a 5% de implementação não permanece
  automaticamente conforme a 100% — a carga, a procura por falha e os utilizadores em casos-limite
  mudam todos.
- **Confundir o Service Standard com um sistema de design**: os componentes do GOV.UK Design System
  satisfazem alguns pontos (consistência, acessibilidade), mas o Standard também cobre a estrutura da
  equipa, a prática ágil e a ética de dados — um serviço bem estilizado ainda pode reprovar nos pontos
  2, 6 ou 9.

## Fontes

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
