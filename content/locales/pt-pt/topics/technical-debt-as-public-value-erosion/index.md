# Dívida Técnica como Erosão de Valor Público

A dívida técnica é a metáfora de Ward Cunningham de 1992 para o custo futuro implícito de decisões de
programação passadas tomadas por conveniência: um **capital** (o trabalho de correção devido) e um
**juro** (o arrasto contínuo que exerce sobre a entrega). Num património de TI governamental legado,
esse juro é pago diretamente a partir do valor público — entrega mais lenta de alterações
estatutárias, taxas de falha mais altas em serviços voltados para o cidadão, e um conjunto cada vez
menor de pessoas que conseguem mexer no sistema com segurança.

## Por que isso importa

Os sistemas mainframe legados e da era COBOL em todos os departamentos governamentais do Reino Unido
— o HMRC e o DWP entre os mais citados — carregam um risco bem documentado e crescente que o National
Audit Office tem assinalado repetidamente, incluindo no seu relatório *Digital Transformation in
Government* (<https://www.nao.org.uk/>): plataformas envelhecidas que são caras de alterar, cada vez
mais difíceis de proteger, e dependentes de uma força de trabalho especializada que se reforma mais
depressa do que é substituída. Ao contrário de um atraso acumulado do setor privado, esta dívida
situa-se diretamente entre os cidadãos e os seus direitos estatutários — um motor de cálculo de
subsídios que não pode ser alterado com segurança é uma restrição de entrega de política, não apenas
um incómodo de engenharia. O recomeço de 2013 do programa de TI do Universal Credit, quando o
National Audit Office constatou que a construção original não entregaria valor pelo dinheiro e uma
parte substancial do ativo de software teve de ser abatida, é um exemplo canónico de dívida técnica
não precificada a apanhar um programa público em produção, visível a nível ministerial.

## A matemática

```
Capital SQALE = Σ sobre violações (tempo de correção) × taxa de custo
                 do programador
Rácio de dívida técnica (TDR) = custo de correção / custo de
                 redesenvolvimento × 100
                    (notas do SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Juro (o número que justifica o pagamento):
  juro/ano = Δ velocidade de entrega × valor por unidade de
             velocidade
                + Δ taxa de incidentes voltados para o cidadão ×
                  custo por incidente
                + prémio de competências especializadas × efetivos
                  afetados
Caso de pagamento = VP(juro evitado ao longo do horizonte) − custo de
               correção
               (descontado à taxa de desconto social do Green Book,
               ver social-discount-rate.md)
```

O capital declara o passivo; o juro é o que constrói o caso de investimento perante uma comissão de
contas públicas.

## Exemplo prático

Um motor de processamento de pedidos de 250.000 linhas escrito numa linguagem de 4ª geração legada.
Usando a referência CAST Appmarq de aproximadamente $3,61 de capital de dívida técnica por linha de
código (≈£2,85 à conversão típica):

```
Capital ≈ 250.000 × £2,85 ≈ £712.500
TDR ≈ 16% (nota C)
```

Juro medido: o departamento mantém três contratados especializados a um prémio de 40% sobre a taxa
diária padrão de engenheiros sénior porque as competências internas se desgastaram — um extra de
£180.000/ano numa equipa de seis pessoas. O sistema também causa quatro grandes interrupções de
processamento/ano, cada uma a suspender decisões para cerca de 5.000 requerentes e a redirecioná-los
para o centro de contacto a aproximadamente £25/chamada:

```
Juro ≈ £180.000 (prémio de competências)
     + 4 × 5.000 × £25 = £500.000 (custo de contacto redirecionado)
     ≈ £680.000/ano
```

A correção direcionada dos módulos com pior desempenho custa £1.200.000 e é modelada para reduzir o
juro em 70%:

```
Redução de juro = 0,70 × 680.000 = £476.000/ano
Retorno ≈ 1.200.000 / 476.000 ≈ 2,5 anos
```

O direcionamento importa: corrigir código raramente tocado não compra nada, porque o juro concentra-se
onde a frequência de alteração e a densidade de dívida atingem ambas o pico.

## Ligação com a engenharia de software

O enquadramento de valor público que eleva um caso de dívida técnica para além de "o código é
antigo": expressar o património legado como um inventário de onde a capacidade de entrega perdida se
concentra, e ligá-lo explicitamente ao [custo total de propriedade](../total-cost-of-ownership-in-government-it/),
já que o juro é um custo operacional que pertence à linha de CTP, quer as finanças alguma vez o
tenham pedido ou não. Os sistemas carregados de dívida também carregam uma exposição de
[cibersegurança](../public-sector-cybersecurity-value/) desproporcionada, porque a cadência de
correções e a densidade de dívida estão correlacionadas — um sistema legado que não pode ser corrigido
é dívida técnica cujo juro é pago em risco de incidente em vez de libras. E cada troca entre correção
e funcionalidade é, ela própria, uma decisão de
[custo do atraso](../cost-of-delay-in-public-programmes/): pagar a dívida atrasa a próxima alteração
estatutária, que tem o seu próprio CoD que deve ser pesado face ao juro poupado.

## Armadilhas

- **Relato apenas do capital**: uma estimativa de correção grande e assustadora sem um valor de juro
  não justifica nada a um aprovador de despesa.
- **Valores de dívida gerados por ferramentas tomados literalmente**: os scanners ao estilo SQALE
  contam violações de regras; falham o tipo caro de dívida — decisões de arquitetura e regras de
  negócio legadas não documentadas — enquanto assinalam trivialidades.
- **"A reescrita evita tudo"**: os programas de substituição devem cumprir a mesma disciplina que
  qualquer outro caso de negócio — custo contrafactual, probabilidade de sucesso e desconto — não
  uma isenção dela, como demonstrou o recomeço do Universal Credit em 2013.
- **Utopismo de dívida zero**: o nível ótimo de dívida não é zero; a dívida é alavancagem que comprou
  entrega mais cedo. A questão real é sempre a taxa de juro, não se a dívida existe de todo.

## Fontes

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
