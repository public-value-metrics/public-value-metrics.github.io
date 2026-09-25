# Métricas DORA para o Valor Público

As métricas DORA (DevOps Research and Assessment) — frequência de implementação, tempo de espera
para alterações, taxa de falha de alterações e tempo de restauro do serviço, mais a fiabilidade como
uma quinta métrica — são os indicadores de referência de desempenho de entrega mais validados da
indústria de software. Traduzidas para termos de responsabilização do setor público, cada uma é um
indicador indireto direto de quão rápido, e quão seguramente, o valor público chega a um cidadão.

## Por que isso importa

A década de investigação da DORA, publicada anualmente como o *Accelerate State of DevOps Report*
(metodologia de Forsgren, Humble e Kim, agora conduzida pela Google Cloud), agrupa as equipas em
desempenho elite, alto, médio e baixo. As equipas elite implementam por pedido, demoram menos de um
dia desde o commit até à produção, falham cerca de 5% das alterações e recuperam em menos de uma
hora; as equipas de baixo desempenho implementam mensalmente ou menos, demoram meses, falham cerca de
40% das alterações e recuperam em semanas. No governo, estas não são métricas de vaidade de
engenharia: o Service Standard do Government Digital Service exige que as equipas "iterem e
melhorem com frequência" e consigam responder rapidamente às necessidades dos utilizadores, e os
departamentos que não conseguem implementar de forma segura e frequente estão estruturalmente
incapacitados de cumprir esse padrão, seja qual for o resultado da sua investigação de utilizadores.
O próprio trabalho de eficiência digital do Cabinet Office constatou que empurrar um cidadão de uma
transação digital falhada ou lenta para um canal telefónico ou em papel é dispendioso — o Digital
Efficiency Report de 2012 do GDS estimou que algumas transações digitais custam apenas 20 pence
contra contactos telefónicos ou presenciais que custam até £8,62 — pelo que uma falha de alteração
num serviço voltado para o cidadão não custa apenas tempo de engenharia, empurra libras reais para o
orçamento do centro de contacto (ver [poupanças da mudança de canal](../channel-shift-savings/)).

## A matemática

```
Frequência de implementação = implementações em produção / tempo
Tempo de espera para alterações = t(implementação) − t(commit),
                                   mediana
Taxa de falha de alterações = alterações falhadas / total de
                               alterações × 100
Tempo de restauro (MTTR) = t(restaurado) − t(falha), mediana
Fiabilidade = cumprimento de SLO (disponibilidade, latência,
              correção)
```

Traduções para valor público:

```
Tempo de espera → semanas no pipeline × CoD, ver
                   cost-of-delay-in-public-programmes
Taxa de falha    → taxa de incidentes voltados para o cidadão: CFR ×
                   custo por chamada redirecionada para o centro de
                   contacto (ou por transação estatutária falhada)
Tempo de         → dano da indisponibilidade do serviço: MTTR ×
  recuperação      (pedidos/candidaturas bloqueados por hora) × custo
                   a jusante ou perda de bem-estar por unidade
Fiabilidade      → desconto de benefício: um serviço a 99% de
                   disponibilidade entrega ≈ 0,99 do seu benefício
                   modelado — o análogo, em entrega, do défice de
                   adesão ou de conformidade
```

## Exemplo prático

A equipa do portal de pedidos de subsídios de uma autarquia local, antes e depois de um investimento
em engenharia de entrega:

```
                    Antes       Depois
Implementações      mensal      semanal
Tempo de espera     8 semanas   5 dias
CFR                 30%         10%
MTTR                3 dias      4 horas
```

A equipa lança cerca de 25 melhorias/ano, valor médio £8.000/semana
([custo do atraso](../cost-of-delay-in-public-programmes/)). Reduzir o tempo de espera em cerca de
7,3 semanas antecipa o fluxo de benefício de cada melhoria: 25 × 7,3 × 8.000 ≈ **£1.460.000/ano** de
valor entregue mais cedo. Quanto à taxa de falha: 25 × (0,30 − 0,10) = 5 alterações falhadas a menos
por ano; cada alteração falhada num portal público tipicamente redireciona uma estimativa de 2.000
cidadãos para o canal telefónico a £8,62 contra 20 pence, um custo líquido de aproximadamente £8,42 ×
2.000 ≈ £16.840 por incidente, pelo que evitar 5 incidentes poupa ≈ **£84.200/ano**. O investimento em
engenharia de entrega é avaliado na mesma moeda que qualquer outro caso de valor público.

## Exemplo prático continuado: fiabilidade

Se o portal funcionar a 97% de disponibilidade em vez de um objetivo de 99,5%, e cada ponto percentual
de indisponibilidade for modelado como 2% de pedidos perdidos por abandono, o serviço está a entregar
aproximadamente 0,975 do seu benefício modelado de £2M/ano — um desconto de benefício de £50.000/ano
que um painel de disponibilidade puro nunca revela.

## Ligação com a engenharia de software

As métricas DORA são as métricas operacionais de um serviço público com outra roupagem: o tempo de
espera mapeia para os [padrões de serviço e métricas de transação](../service-standards-and-transaction-metrics/);
a taxa de falha de alterações mapeia para as taxas de retrabalho e reclamação; o MTTR mapeia para
quanto tempo um serviço estatutário fica indisponível para os requerentes. As técnicas de melhoria
transferem-se em ambas as direções porque ambos são sistemas de filas sob restrições de
responsabilização — ver [métricas de fluxo na entrega governamental](../flow-metrics-in-government-delivery/)
para a matemática de filas subjacente. Note-se também a constatação da DORA de 2025 de que a adoção
de IA se correlaciona com maior débito mas *pior* estabilidade — uma intervenção com eficácia e
efeitos colaterais, que é exatamente a análise de benefício líquido que o tópico
[produtividade da IA](../ai-productivity-in-the-public-sector/) deste capítulo desenvolve.

## Armadilhas

- **Manipulação de métricas**: inflar as contagens de implementação com lançamentos sem efeito real,
  ou excluir correções urgentes (hotfixes) da contagem de falhas de alterações. Defina os eventos
  com a mesma precisão com que um padrão de serviço estatutário define uma "transação
  bem-sucedida".
- **Tabelas classificativas entre departamentos**: os agrupamentos DORA comparam práticas de
  entrega, não serviços com perfis de risco diferentes; um sistema de pagamento de impostos avaliado
  como "alto" pode ser a postura certa onde "elite" seria imprudente dados os requisitos de garantia.
- **Otimizar apenas uma métrica**: velocidade sem taxa de falha de alterações é a clássica troca entre
  débito e instabilidade — reporte as quatro em conjunto, não como uma pontuação única.

## Fontes

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
