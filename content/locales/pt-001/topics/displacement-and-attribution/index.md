# Deslocamento e Atribuição

O deslocamento ocorre quando o benefício aparente de um programa é alcançado retirando atividade ou
benefício de outro local, em vez de criar algo novo — a sua vitória é a perda de outra pessoa. A
atribuição é a pergunta relacionada de quanto de um resultado observado a sua intervenção pode
genuinamente reivindicar como mérito, quando outros atores e fatores também contribuíram. Ambos são
ajustes padrão nas orientações de avaliação do setor público do Reino Unido, ao lado da perda seca e
da fuga, e ambos são rotineiramente ignorados em alegações de impacto que parecem muito mais fortes
do que de facto são.

## Por que isso importa

Um regime de subvenções a empresas de uma autarquia local que ajuda 50 lojas a relocalizar-se numa
zona de regeneração pode reportar "50 empresas apoiadas, 200 empregos criados" — mas se essas
empresas simplesmente se mudaram de uma rua comercial vizinha em vez de expandir, os empregos foram
deslocados, não criados, e o efeito líquido a nível do concelho (ou da região) pode estar próximo de
zero. O Magenta Book do HM Treasury e o duradouro Additionality Guide tratam o deslocamento como uma
dedução obrigatória precisamente porque as histórias de sucesso local são comuns mesmo quando não
produzem qualquer benefício líquido nacional ou regional — o valor simplesmente moveu-se, muitas
vezes em desvantagem da área ou dos atores que o perderam. As orientações de avaliação de fundos
estruturais (usadas para os antigos programas do Fundo Europeu de Desenvolvimento Regional e os seus
sucessores nacionais, como o UK Shared Prosperity Fund) formalizam isto em três escalas espaciais:
deslocamento local (dentro de uma cidade), deslocamento regional (dentro de uma região) e
deslocamento nacional (em todo o Reino Unido), porque uma intervenção pode ser adicional a uma escala
ao mesmo tempo que é puro deslocamento a uma escala mais ampla — um programa de emprego que atrai
trabalhadores de uma cidade vizinha é nacionalmente neutro, mesmo que pareça um sucesso local.

A atribuição é o problema irmão na entrega intensiva em parcerias, que é agora a norma no trabalho do
setor social e interagências do setor público. Quando três organizações entregam conjuntamente um
serviço de prevenção de sem-abrigo, o relatório anual de cada organização pode reivindicar
independentemente o mérito pela mesma redução no número de sem-abrigo — somado entre relatórios, o
impacto reivindicado pode exceder a mudança real observada no mundo, por vezes por várias vezes. As
orientações do Magenta Book sobre análise de contribuição existem especificamente porque a
atribuição aleatorizada a um único ator é muitas vezes impossível na entrega multiagência, e a
resposta honesta é frequentemente "contribuímos para este resultado" em vez de "causámos este
resultado".

## A matemática

O deslocamento como parte da sequência padrão de impacto líquido (ver
[adicionalidade e perda seca](../additionality-and-deadweight/) para a cadeia completa):

```
Impacto líquido adicional = Resultado bruto − Perda seca −
                             Deslocamento − Fuga, × Multiplicador

Taxa de deslocamento = benefício/atividade desviado de outro local
                        / total de benefício/atividade bruto
                        observado
```

A atribuição, onde vários atores contribuem para um resultado, é tipicamente expressa como uma quota
de contribuição em vez de uma percentagem precisa, porque geralmente não pode ser medida com o mesmo
rigor que o deslocamento:

```
Quota atribuível ≈ f(força da contribuição causal, contribuições de
                      outros atores, fatores externos/contextuais)

O impacto reivindicado nunca deve exceder:
  Σ (quota atribuível de cada parceiro) ≤ 100% do resultado total
  observado
```

## Exemplo prático

**Subvenção de regeneração**: o regime de subvenções para a rua comercial de um conselho reporta 200
novos empregos de retalho criados na zona financiada. A investigação de acompanhamento por inquérito
constata que 60 desses empregos vieram de empresas relocalizadas de uma rua comercial vizinha não
financiada dentro do mesmo concelho, e mais 30 vieram de cadeias nacionais a abrir filiais que teriam
aberto algures na região de qualquer forma.

```
Empregos brutos reivindicados = 200
Deslocamento local = 60 (mudados dentro do concelho)
Deslocamento regional = 30 (teriam aberto regionalmente de qualquer
forma)

Empregos líquidos adicionais (nível do concelho) = 200 − 60 = 140
Empregos líquidos adicionais (nível regional) = 200 − 60 − 30 = 110
```

O valor de destaque honesto depende da escala geográfica com que o financiador se preocupa — um caso
de negócio do Tesouro avaliado a nível nacional ou regional deve usar 110, não o valor de 140 ao
nível do concelho, e certamente não o valor bruto de 200.

**Serviço multiagência de sem-abrigo**: três organizações parceiras (um conselho, uma instituição de
solidariedade de habitação e uma autoridade de saúde) entregam conjuntamente um serviço de redução do
número de sem-abrigo. O número de sem-abrigo na área caiu 30 pessoas ao longo do ano. O relatório
anual de cada organização individualmente reivindica "reduzimos o número de sem-abrigo em 30" —
somados, os três relatórios reivindicam 90 pessoas ajudadas, três vezes a redução real. Uma análise
de contribuição que atribua a cada parceiro uma quota (digamos, 40% conselho, 35% instituição, 25%
autoridade de saúde, com base num papel documentado e numa avaliação independente) reportaria 12,
10,5 e 7,5 respetivamente, somando corretamente para as 30 observadas.

## Ligação com a engenharia de software

O deslocamento e a atribuição moldam como os sistemas de acompanhamento de impacto e relato de
resultados devem ser desenhados para entrega multissite ou multiparceiro:

- O âmbito geográfico e organizacional deve ser um campo explícito de primeira classe em qualquer
  painel de impacto — um valor reportado "para o concelho" e o mesmo valor reportado "para a região"
  são números diferentes, e um sistema que os confunde produzirá números que não podem ser
  reconciliados ao nível do portefólio.
- Onde vários parceiros entregam conjuntamente, um sistema de resultados deve registar quotas de
  contribuição (ou, no mínimo, assinalar a atribuição conjunta) em vez de deixar o módulo de relato
  de cada parceiro reivindicar independentemente 100% de um resultado partilhado — caso contrário, as
  agregações ao nível do portefólio exagerarão o impacto total, por vezes gravemente.
- Isto liga-se ao [retorno social sobre o investimento](../social-return-on-investment/) e ao
  [relato de resultados de subvenções](../grant-outcomes-reporting/): um cálculo de SROI ou IRIS+ que
  ignore o deslocamento ou sobreatribua resultados partilhados produzirá um rácio inflacionado que
  não resiste a auditoria ou replicação.

## Armadilhas

- **Reportar sucesso local sem verificar o deslocamento mais amplo.** Um programa pode parecer
  altamente bem-sucedido à escala de relato mais pequena, ao mesmo tempo que é neutro ou mesmo
  negativo a uma escala mais ampla; declare sempre a escala geográfica a que o valor líquido se
  aplica.
- **Deixar cada parceiro numa entrega conjunta reivindicar o mérito total.** A menos que as quotas de
  contribuição sejam acordadas e documentadas, o relato agregado entre parceiros exagerará o impacto
  total — verifique que as alegações ao nível do parceiro somam, no máximo, o total observado.
- **Tratar a atribuição como uma percentagem precisa quando é na verdade um julgamento.** A análise de
  contribuição, ao contrário de um contrafactual aleatorizado, produz uma estimativa defensável, não
  um facto medido; apresente-a com a incerteza apropriada em vez de falsa precisão.
- **Ignorar o deslocamento em intervenções orientadas para o mercado.** O apoio empresarial, os
  regimes de emprego e a regeneração territorial são as categorias clássicas de alto deslocamento;
  trate as verificações de deslocamento como obrigatórias para estas, não opcionais.

## Fontes

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
