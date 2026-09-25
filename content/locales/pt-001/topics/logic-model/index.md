# Modelo Lógico

Um modelo lógico é um diagrama linear que liga entradas, atividades, produtos, resultados e impacto
de um programa, lido da esquerda para a direita como uma cadeia de responsabilização: os recursos
entram, as atividades acontecem, os produtos são gerados, os resultados mudam para os beneficiários,
e o impacto acumula-se a uma escala temporal mais ampla ou mais longa. É a estrutura padrão face à
qual os financiadores e auditores esperam que um programa seja relatável, e a contraparte voltada
para a frente de uma [teoria da mudança](../theory-of-change/) mapeada de trás para a frente.

## Por que isso importa

O Magenta Book do HM Treasury especifica o modelo lógico como um elemento obrigatório do desenho de
avaliação de programas, e financiadores como o National Lottery Community Fund constroem os seus
modelos de candidatura e relato exatamente em torno desta cadeia de cinco colunas. O seu valor é
forçar um programa a declarar, num único diagrama, o que vai gastar, o que vai fazer com isso, o que
vai produzir e — criticamente — o que deve mudar como resultado, a um nível de especificidade que um
parágrafo de prosa tende a obscurecer. Um modelo lógico com uma coluna de entradas e atividades
preenchida mas uma coluna de resultados vazia ou vaga é diagnosticável à primeira vista, razão exata
pela qual os financiadores pedem um.

## A matemática

O modelo lógico é uma cadeia estrutural em vez de uma fórmula:

```
Entradas        Atividades        Produtos            Resultados            Impacto
(recursos       (o que é feito    (produtos diretos    (mudança para          (mudança de
 comprometidos)  com eles)         e contáveis)         os beneficiários)      longo prazo,
                                                                                ao nível da
                                                                                população ou
                                                                                sistémica)
```

Cada coluna deve ser mais específica do que a anterior: as entradas são o que se gasta, as atividades
são o que se faz, os produtos são o que é entregue independentemente do efeito, os resultados são o
que muda em consequência — a distinção coberta na íntegra em
[resultados vs. produtos](../outcomes-vs-outputs/) — e o impacto é a mudança duradoura, de longo
prazo, muitas vezes apenas parcialmente atribuível.

## Exemplo prático

**Autarquia local (serviço digital de aconselhamento sobre dívidas)**:

- Entradas: orçamento anual de £180.000, 4,0 ETI de conselheiros, um sistema de gestão de processos.
- Atividades: sessões de trabalho de proximidade, consultas individuais de aconselhamento sobre
  dívidas.
- Produtos: 900 consultas realizadas; 750 planos de dívida e subsídio emitidos.
- Resultados: dos clientes que chegam a um acompanhamento aos 6 meses, 60% (450 de 750) reportam
  redução de dívidas em atraso, com uma média de redução de £1.200 por cliente — £540.000 de redução
  agregada de dívidas em atraso.
- Impacto: uma queda mensurável nas candidaturas a habitação por sem-abrigo entre a base de clientes
  do serviço ao longo de dois anos, apenas parcialmente atribuível a este serviço a par de outras
  intervenções (ver [análise contrafactual](../counterfactual-analysis/)).

**Instituição de solidariedade (parceria de referenciação de banco alimentar)**:

- Entradas: £45.000, 1,5 ETI de coordenador, acordos de parceria com 12 agências de referenciação.
- Atividades: triagem de referenciações, embalamento e distribuição de cabazes.
- Produtos: 5.000 cabazes alimentares distribuídos a 1.100 agregados familiares.
- Resultados: 68% dos agregados familiares inquiridos (748 de 1.100) reportam segurança alimentar
  melhorada numa chamada de acompanhamento às 4 semanas.
- Impacto: contribuição para a redução da procura local por serviços de crise, evidenciada apenas em
  estatísticas agregadas de área, não atribuível a esta instituição isoladamente.

## Ligação com a engenharia de software

O modelo lógico está próximo de ser um modelo de dados literal para um sistema de resultados: as
entradas e atividades são dados operacionais que já se possuem (despesa, pessoal, registos de
sessão); os produtos são fáceis de instrumentar porque são contados no ponto de entrega; os
resultados exigem uma recolha de dados de acompanhamento deliberadamente desenhada (inquéritos,
ligação de dados administrativos) que não existirá a menos que alguém a construa; o impacto
geralmente exige dados ligados, longitudinais ou ao nível da população, para além dos sistemas de
qualquer programa isolado. Os engenheiros que constroem ferramentas de relato devem pressionar os
encomendantes a definir indicadores de resultado e impacto na fase de desenho, em vez de recorrer por
defeito a um painel apenas de produtos porque é isso que os dados transacionais já suportam. Ver
[retorno social sobre o investimento](../social-return-on-investment/) para um método que avalia
especificamente as colunas de resultados e impacto, e
[realização de benefícios](../benefits-realization/) para acompanhar se a coluna de impacto foi de
facto entregue.

## Armadilhas

- **Parar nos produtos.** Um painel que reporta consultas realizadas ou cabazes distribuídos e
  implica benefício está a reportar atividade, não resultados — ver
  [resultados vs. produtos](../outcomes-vs-outputs/).
- **Nenhuma ligação causal declarada entre colunas.** Um modelo lógico declara a cadeia mas não
  porque as atividades deveriam produzir produtos que deveriam produzir resultados; esse raciocínio
  pertence a uma [teoria da mudança](../theory-of-change/), e um modelo lógico sem uma por trás não
  está testado.
- **Tratá-lo como um documento de candidatura pontual.** Os modelos lógicos produzidos apenas para
  satisfazer uma candidatura de financiamento e nunca atualizados deixam de refletir o que o programa
  de facto faz.
- **Deriva de atribuição na coluna de impacto.** Alegar mudança ao nível da população como causada
  unicamente por um programa, sem contrafactual, exagera aquilo que a evidência sustenta.

## Fontes

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
