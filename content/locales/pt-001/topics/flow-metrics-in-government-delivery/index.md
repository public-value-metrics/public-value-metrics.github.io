# Métricas de Fluxo na Entrega Governamental

As métricas de fluxo — a Lei de Little, os limites de trabalho em curso (WIP) e a eficiência de
fluxo — descrevem quão rapidamente o trabalho se move através de um sistema com capacidade limitada.
Um quadro de sprint é um desses sistemas; uma fila de pedidos de subsídio, um registo de pedidos de
planeamento, ou um atraso acumulado de processos de vistos é exatamente a mesma matemática vestida
com outro uniforme.

## Por que isso importa

As cargas processuais do governo são sistemas de filas, e os sistemas de filas obedecem a leis de
filas quer alguém as meça ou não. Os prazos estatutários de decisão tornam isto explícito: ao abrigo
do regime Town and Country Planning, a maioria dos pedidos de planeamento menores tem uma meta
estatutária de decisão de 8 semanas, e os pedidos maiores de 13 semanas — um compromisso de tempo de
ciclo diretamente inscrito na lei. O atraso acumulado de processos de asilo do Home Office,
escrutinado repetidamente pelo National Audit Office e pela Home Affairs Select Committee, é um caso
bem documentado de um sistema público onde o trabalho em curso cresceu mais depressa do que o débito
durante um período sustentado, empurrando os tempos de ciclo muito além de qualquer expectativa
estatutária ou de serviço. As métricas de fluxo dão tanto a engenheiros como a gestores de processos
um vocabulário quantitativo partilhado exatamente para este modo de falha, em vez de o deixar como um
"problema de atraso acumulado" qualitativo.

## A matemática

```
Lei de Little:  WIP = Débito × Tempo de Ciclo
           →     Tempo de Ciclo = WIP / Débito

Eficiência de fluxo = tempo ativo (de manuseamento) / tempo de ciclo
                       total   (Vacanti)

Efeito do limite de WIP: para um débito fixo, reduzir o WIP a metade
reduz aproximadamente a metade o tempo de ciclo médio (Lei de Little
reorganizada) — a alavanca disponível sem acrescentar efetivos.
```

Ver [métricas DORA para o valor público](../dora-metrics-for-public-value/) para a matemática
equivalente aplicada a pipelines de implementação de software em vez de processos administrativos.

## Exemplo prático

**Departamento de planeamento de uma autarquia local**: 400 pedidos abertos em qualquer momento
(WIP), a equipa resolve 50 pedidos/semana (débito).

```
Tempo de ciclo = WIP / Débito = 400 / 50 = 8 semanas
```

Isto cai exatamente na meta estatutária de 8 semanas para pedidos menores — sem folga, o que
significa que qualquer variabilidade na procura recebida ou no tempo de resposta dos consultados
empurra as decisões para além do prazo legal.

**Eficiência de fluxo**: dessas 8 semanas (56 dias de calendário), um pedido tem tipicamente cerca de
6 horas de tempo real de processamento pelo gestor de processos.

```
Eficiência de fluxo = 6 horas / (56 dias × 8 horas de trabalho/dia)
                = 6 / 448 ≈ 1,3%
```

A referência de Vacanti para equipas de software situa a eficiência de fluxo típica em 15–20%; os
processos governamentais, com múltiplas transferências entre consultados estatutários e janelas de
consulta pública, funcionam frequentemente uma ordem de grandeza mais baixo. Os 98,7% de tempo de
"espera" é para onde as oito semanas de facto vão — não para a capacidade do gestor de processos.

**Intervenção de limite de WIP**: limitar os pedidos abertos por gestor de processos a 15 em vez de
25 sem limite (mantendo o débito constante) desloca o WIP de 400 para aproximadamente 240 numa
equipa de 16 pessoas:

```
Novo tempo de ciclo = 240 / 50 = 4,8 semanas
```

Uma redução para quase metade do tempo de ciclo a partir de uma mudança de política, não de um
aumento de pessoal — a mesma alavanca que as equipas de entrega ao estilo DORA puxam quando limitam
o WIP do sprint.

## Ligação com a engenharia de software

As métricas de fluxo são a linguagem partilhada entre o quadro Kanban de uma equipa de entrega e o
setor de processos para o qual está a construir software: a fila de um gestor de processos e uma fila
de pull requests são ambas regidas pela Lei de Little, e ambas rebentam as suas metas de tempo de
ciclo da mesma forma — demasiado WIP face ao débito. Isto importa diretamente para o
[custo do atraso em programas públicos](../cost-of-delay-in-public-programmes/): tempo de ciclo × CoD
são as libras paradas na fila em qualquer momento, e importa para os
[padrões de serviço e métricas de transação](../service-standards-and-transaction-metrics/), onde
uma meta de prazo publicada é um compromisso de tempo de ciclo que só as métricas de fluxo conseguem
diagnosticar quando é falhado. O software de um sistema de processos deve expor o WIP e o tempo de
ciclo como métricas operacionais de primeira classe, não enterrá-los dentro de um sistema de gestão
de processos que ninguém consulta.

## Armadilhas

- **Acrescentar limites de WIP sem corrigir o verdadeiro estrangulamento**: se a restrição é o tempo
  de resposta de um consultado estatutário externo, limitar o WIP do gestor de processos apenas move
  a fila a montante em vez de a encurtar.
- **Tratar a eficiência de fluxo como um objetivo a manipular**: apressar o 1,3% de tempo ativo mal
  move o tempo de ciclo; a alavancagem está quase sempre nos estados de espera, o que geralmente
  significa reformulação de processo, não velocidade do gestor de processos.
- **Ignorar a variabilidade**: a Lei de Little descreve médias; uma carga processual com elevada
  variância de procura precisa de capacidade de reserva, não apenas de um limite de WIP mais apertado,
  ou os prazos estatutários continuarão a ser falhados na cauda volátil mesmo que a média melhore.
- **Medir o WIP de forma inconsistente**: um processo "aberto" no sistema de registo mas na verdade
  parado à espera de um terceiro continua a ser WIP; excluí-lo favorece os números sem mudar a
  realidade voltada para o cidadão.

## Fontes

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
