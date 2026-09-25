# Valor do Tempo de Voluntariado

O valor do tempo de voluntariado é a estimativa monetária atribuída ao trabalho não remunerado, mais
frequentemente usada para declarar a verdadeira pegada económica de uma instituição de solidariedade
— as suas contas mais o trabalho que não teve de pagar — ou para argumentar que uma dada intervenção
é mais custo-eficaz do que o seu orçamento em dinheiro por si só sugere. Duas metodologias nacionais
dominam: a estimativa do Independent Sector dos Estados Unidos e a abordagem do Office for National
Statistics / NCVO do Reino Unido, e ambas precificam a mesma hora de trabalho de forma bastante
diferente.

## Por que isso importa

Todos os anos, o Independent Sector, em colaboração com o Do Good Institute da Universidade de
Maryland, publica um valor horário nacional para o tempo de voluntariado, construído a partir de
dados de salários do Bureau of Labor Statistics — especificamente os ganhos horários médios de
trabalhadores de produção e não supervisores nas folhas de pagamento privadas não agrícolas, mais um
ajustamento de benefícios complementares — e desagregado por estado dos EUA. A sua publicação mais
recente fixou o valor em **$36,14 por hora para 2025**, um aumento de 3,9% face ao ano anterior, com
valores ao nível estadual a variar de mais de $50 em Washington, DC a menos de $20 em Porto Rico. No
Reino Unido, o Office for National Statistics estimou separadamente o custo de substituição do
voluntariado formal em **£14,43 por hora** (estimativa de 2017), e o UK Civil Society Almanac 2024 da
NCVO usa dados de participação em voluntariado — cerca de 14,2 milhões de pessoas a fazer
voluntariado formal em 2021–22 — para estimar a contribuição total do voluntariado do setor em
aproximadamente **£18 mil milhões**, cerca de 0,8% do PIB do Reino Unido.

A razão pela qual isto importa para além da cosmética contabilística: um programa que depende
fortemente de trabalho voluntário pode parecer dramaticamente mais barato numa base de puro
[custo por resultado](../cost-per-outcome/) em dinheiro do que um que depende de pessoal pago, mesmo
quando o verdadeiro custo de recursos — o que custaria substituir esse trabalho — é semelhante ou
superior. Financiadores e avaliadores que ignoram o valor do tempo de voluntariado subcontam
sistematicamente o verdadeiro custo de modelos de entrega intensivos em voluntariado, o que distorce
as comparações de eficiência face a modelos de pessoal pago que entregam o mesmo resultado.

## A matemática

```
Valor do tempo de voluntariado = horas de voluntariado contribuídas × taxa horária

A escolha da taxa importa e muda a resposta:
  - Abordagem do custo de substituição: o salário de um trabalhador pago que
    faria a mesma tarefa (por exemplo, uma taxa de custo de substituição para
    um trabalhador jovem qualificado, não um salário médio genérico) — a mais
    defensável para valorização específica da tarefa
  - Abordagem do custo de oportunidade: o salário a que o próprio voluntário
    renunciou — a mais defensável para valorizar o que o voluntário abdicou
  - Abordagem da média nacional: a taxa única combinada do Independent Sector
    ou do ONS — a mais defensável para comparabilidade de destaque entre
    setores
```

As três abordagens podem diferir por um múltiplo grande para a mesma hora (um advogado que faz
voluntariado como membro de uma direção tem uma taxa de custo de oportunidade muito diferente de uma
taxa média nacional), pelo que qualquer valor reportado precisa de declarar qual o método que o
produziu.

## Exemplo prático

**Instituição de solidariedade do Reino Unido, abordagem da média nacional**: 5.000 horas de
voluntariado num ano, valorizadas a £14,43/hora (estimativa de custo de substituição do ONS):

```
Valor = 5.000 × £14,43 = £72.150
```

Se a despesa em dinheiro da instituição nesse ano foi de £300.000, o seu verdadeiro custo de recursos
— dinheiro mais trabalho voluntário — é de £372.150, cerca de 24% mais alto do que o valor em dinheiro
por si só sugere. Um cálculo de custo por resultado que use apenas o valor em dinheiro de £300.000
subestima o custo verdadeiro na mesma margem.

**Instituição de solidariedade dos EUA, abordagem da média nacional**: 2.000 horas de voluntariado
valorizadas a $36,14/hora (publicação do Independent Sector, 2025):

```
Valor = 2.000 × $36,14 = $72.280
```

**Mesma instituição dos EUA, abordagem do custo de oportunidade**: se os voluntários forem
desproporcionadamente profissionais reformados cujos ganhos anteriores tinham uma média de $60/hora,
a valorização pelo custo de oportunidade seria de $120.000 — dois terços mais alto do que o valor da
média nacional, ilustrando por que o método tem de ser declarado.

## Ligação com a engenharia de software

Os sistemas que registam horas de voluntariado (ferramentas de escalonamento de turnos, plataformas
de gestão de voluntários) deveriam captar as horas ao nível da tarefa ou do papel, não apenas um
total, para que uma taxa de custo de substituição possa ser aplicada por papel em vez de uma única
taxa média nacional geral numa força de voluntariado mista (uma hora de um membro de direção e uma
hora de acompanhamento não são economicamente equivalentes). Guardar a taxa e a metodologia usadas a
par do valor calculado — não apenas a cifra final em moeda — permite que o relato a jusante (contas
anuais, cálculos de [retorno social sobre o investimento](../social-return-on-investment/), relatórios
para financiadores) reproduza ou questione o número mais tarde, em vez de o tratar como uma constante
opaca. Ver [custo por resultado](../cost-per-outcome/) para perceber por que omitir o valor do tempo
de voluntariado subestima sistematicamente o custo real de entrega.

## Armadilhas

- **Usar uma única taxa geral para papéis estruturalmente diferentes.** Uma taxa de salário média
  nacional aplicada a uma hora pro bono profissional (jurídica, financeira, clínica) subvaloriza-a
  drasticamente; faça corresponder a taxa ao papel substituído sempre que a tarefa for qualificada.
- **Contar em duplicado face ao custo de pessoal pago.** Se os voluntários substituem trabalho que de
  outro modo seria pago, assegure que a valorização é aditiva à despesa em dinheiro, e não sobreposta
  a uma estimativa de pessoal já inflacionada.
- **Citar uma taxa desatualizada sem data.** As taxas do Independent Sector e do ONS mudam anualmente
  (ou são reestimadas apenas periodicamente, no caso do ONS); um valor de tempo de voluntariado sem
  data num relatório é quase inútil para comparação.
- **Tratar o valor do tempo de voluntariado como um ativo de angariação de fundos.** É um ajustamento
  de contabilidade de custos para compreender o verdadeiro custo de recursos, não dinheiro novo que
  uma instituição de solidariedade possa gastar; confundir os dois induz em erro uma direção que lê
  as contas.

## Fontes

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
