# Retorno Social sobre o Investimento (SROI)

O retorno social sobre o investimento é um enquadramento para medir, monetizar e contabilizar um
conceito amplo de valor — social, ambiental e económico — e expressá-lo como um rácio face aos
recursos investidos, por exemplo "£1,44 de valor social por cada £1 investida". Foi concebido para
estender a lógica da contabilidade financeira a resultados que os mercados não precificam, sem perder
a disciplina da contabilidade: cada número num SROI deve ser rastreável a um resultado definido por
partes interessadas, a uma base de evidência, e a um ajuste explícito para aquilo que teria
acontecido de qualquer forma.

## Por que isso importa

O SROI é mantido pela Social Value UK e pela Social Value International, organismos sucessores da
SROI Network, cujo "A Guide to Social Return on Investment" (2012) continua a ser a metodologia de
referência. O enquadramento assenta em sete princípios — envolver as partes interessadas,
compreender o que muda, valorizar as coisas que importam, incluir apenas o que é material, não
exagerar, ser transparente, e verificar o resultado — e é o quinto princípio, "não exagerar", que a
maioria dos relatórios SROI na prática falha. Um rácio produzido saltando os ajustes de perda seca e
atribuição não é um SROI; é um número de marketing vestido com as roupas de um SROI. Os engenheiros
de software que constroem ferramentas de relato para instituições de solidariedade, empresas sociais
ou encomendantes precisam de conhecer a diferença, porque a ferramenta ou impõe a disciplina ou
facilita saltá-la.

## A matemática

O SROI depende de uma [teoria da mudança](../theory-of-change/) para identificar que resultados estão
no âmbito, e expressa-os usando a mesma cadeia de responsabilização que um
[modelo lógico](../logic-model/):

```
Rácio SROI = Valor presente dos resultados / Valor das entradas

Processo:
 1. Estabelecer o âmbito e identificar as partes interessadas cujos
    resultados serão medidos
 2. Mapear resultados (uma teoria da mudança, evidenciada com as
    partes interessadas, não presumida)
 3. Evidenciar resultados e dar-lhes um valor usando indicadores
    indiretos financeiros
 4. Estabelecer o impacto: valor bruto − perda seca − atribuição −
    deslocamento, depois aplicar o decaimento
 5. Calcular o SROI: valor presente líquido do impacto ÷ valor das
    entradas
 6. Reportar, usar e incorporar — o rácio é um dispositivo de
    comunicação, não o ponto final
```

A perda seca, a atribuição e o deslocamento são abordados em
[adicionalidade e perda seca](../additionality-and-deadweight/) e
[deslocamento e atribuição](../displacement-and-attribution/); todos os três existem para isolar o
impacto [contrafactual](../counterfactual-analysis/) genuíno do resultado bruto.

## Exemplo prático

**Programa de emprego de uma autarquia local**: custo de entrada anual £250.000. Sessenta
participantes passam para emprego sustentado; um indicador indireto financeiro para esse resultado
(aumento de bem-estar, redução da dependência de subsídios e receita fiscal combinados) é de £8.500
por pessoa no primeiro ano — ver [bases de dados de custo unitário](../unit-cost-databases/) para
saber de onde vêm esses indicadores indiretos.

- Valor bruto do resultado: 60 × £8.500 = £510.000
- Menos perda seca (40% provavelmente encontraria trabalho sem o programa): £510.000 × 0,60 =
  £306.000
- Menos atribuição (30% da mudança restante deve-se ao apoio de outras agências): £306.000 × 0,70 =
  £214.200
- Resultado do ano 2 com decaimento de 30%: £214.200 × 0,70 = £149.940, descontado a 3,5%/ano (ver
  [taxa de desconto social](../social-discount-rate/)): £149.940 ÷ 1,035 = £144.870
- Valor presente total do impacto: £214.200 + £144.870 = £359.070
- **Rácio SROI: £359.070 ÷ £250.000 = 1,44**, reportado como "£1,44 de valor social por cada £1
  investida"

**Instituição de solidariedade**: um serviço de acompanhamento de £60.000 reduz a solidão de 80
idosos, avaliado a um indicador indireto de £1.100/pessoa/ano. Valor bruto £88.000; após 35% de perda
seca e 15% de atribuição, o impacto líquido é £88.000 × 0,65 × 0,85 = £48.620, um rácio SROI de 0,81
— abaixo do ponto de equilíbrio, o que é uma constatação legítima e útil, não um fracasso a
documentar.

## Ligação com a engenharia de software

Uma calculadora de SROI que permita a um utilizador introduzir contagens de resultados e valores de
indicador indireto mas não tenha nenhum campo obrigatório para perda seca, atribuição, ou uma teoria
da mudança ligada produzirá rácios inflacionados por defeito, porque omitir ajustes é o caminho de
menor resistência. Construa a disciplina no esquema: cada linha de resultado deve referenciar um
grupo de partes interessadas, uma quantidade evidenciada, um indicador indireto financeiro com a sua
fonte, e campos de perda seca/atribuição não opcionais. Ver
[resultados vs. produtos](../outcomes-vs-outputs/) para a distinção de que depende o mapeamento de
resultados do SROI, e [modelo lógico](../logic-model/) para a cadeia que a ferramenta deve espelhar
no seu modelo de dados.

## Armadilhas

- **Saltar a perda seca e a atribuição.** O rácio de destaque sem estes ajustes é um valor bruto, não
  um valor de impacto líquido, e os princípios da Social Value UK exigem explicitamente ambos.
- **Comparar rácios entre organizações.** Um rácio SROI depende de escolhas de âmbito e indicador
  indireto feitas caso a caso; tratar um rácio de 4:1 de um relatório como "melhor" do que um rácio
  de 2:1 de outro ignora que os pressupostos não são padronizados como um rácio de contabilidade
  financeira.
- **Contagem dupla de indicadores indiretos sobrepostos.** Empilhar um indicador indireto de
  "solidão reduzida" com um de "bem-estar mental melhorado" para os mesmos beneficiários pode
  valorizar em duplicado uma mudança subjacente única.
- **Saltar o envolvimento das partes interessadas.** O primeiro princípio exige que os resultados
  sejam definidos com as pessoas que os vivem, não presumidos pelo analista que constrói o modelo.

## Fontes

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
