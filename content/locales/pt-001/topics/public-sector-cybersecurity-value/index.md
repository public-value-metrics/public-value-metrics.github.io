# Valor da Cibersegurança no Setor Público

O valor da cibersegurança no setor público é a disciplina de precificar a redução de risco: quanto
vale tornar menos provável uma violação de dados de cidadãos, dado que a despesa em segurança não
produz nenhum produto visível quando funciona e um muito visível quando falha? Para um serviço que
detém registos de subsídios, dados de saúde ou registos fiscais, essa propriedade de "invisível
quando funciona" é exatamente a razão pela qual precisa de um argumento de valor explícito, não
apenas uma marca de conformidade.

## Por que isso importa

O Cyber Assessment Framework (CAF) do National Cyber Security Centre do Reino Unido dá às
organizações do setor público uma forma estruturada de tornar a segurança uma disciplina avaliável e
baseada em resultados em vez de uma lista de verificação: define quatro objetivos de alto nível
(gerir o risco de segurança, proteger contra ataques cibernéticos, detetar eventos de cibersegurança,
e minimizar o impacto de incidentes) desdobrados em resultados contribuintes face aos quais um
proprietário de sistema pode ser avaliado, no mesmo espírito do ponto 9 do
[padrão de serviço digital](../digital-service-standard/) ("criar um serviço seguro que proteja a
privacidade dos utilizadores"). Aquilo contra o qual a avaliação CAF protege tem um preço
documentado: o Cost of a Data Breach Report da IBM acompanha o custo médio de violação por setor, e
tem consistentemente encontrado o setor público na extremidade inferior do intervalo comparado com
as finanças ou a saúde — as edições recentes colocam a média do setor público em cerca de $2,6–2,9
milhões por violação — mas "mais baixo do que as finanças" não é "baixo", e as violações
governamentais carregam custos que os valores do relatório não captam totalmente: a perda de
confiança dos cidadãos nos canais digitais, que deprime a
[adesão digital](../channel-shift-savings/) de que os casos de negócio de mudança de canal dependem,
e o custo político e legal de expor dados que o Estado obrigou os cidadãos a entregar em primeiro
lugar.

## A matemática

O investimento em segurança é avaliado da forma como qualquer despesa de redução de risco é
avaliada: como uma redução de perda esperada, usando a identidade clássica de gestão de risco.

```
Expectativa de Perda Anualizada (ALE) = Expectativa de Perda Única
                                          (SLE)
                                        × Taxa de Ocorrência
                                          Anualizada (ARO)

Valor de um controlo de segurança =
  ALE_antes_do_controlo − ALE_depois_do_controlo − custo anual do
  controlo

Um controlo vale a pena financiar quando:
  (ALE_antes − ALE_depois) > custo anual do controlo

A avaliação CAF não produz diretamente uma probabilidade, mas o
perfil de resultado CAF de um serviço (quais resultados contribuintes
estão "alcançados", "parcialmente alcançados" ou "não alcançados") é
um dado de entrada razoável de indicador indireto para estimar a ARO
— um sistema com acesso privilegiado não gerido ou sem plano de
resposta a incidentes testado tem uma ARO realista materialmente mais
elevada do que um com ambos implementados.
```

## Exemplo prático

**Sistema de gestão de processos de um conselho de condado com registos de assistência social para
40.000 residentes**:

```
Expectativa de Perda Única (custo de violação), usando uma média do
setor público de um Cost of a Data Breach Report recente da IBM ≈
£2,1M (convertido, valor de ordem de grandeza — rederive sempre a
partir da edição atual do relatório em vez de reutilizar um número
fixo)

ARO atual (acesso privilegiado não gerido, sem resposta a incidentes
testada, segundo uma autoavaliação CAF interna que mostra vários
resultados "não alcançados") ≈ estimada em 8% ao ano
  ALE_antes = £2,1M × 0,08 = £168.000/ano

Controlo proposto: gestão de acesso privilegiado + plano de resposta
a incidentes testado, movendo os resultados CAF relevantes para
"alcançado", estimado em reduzir a ARO para 3%/ano
  ALE_depois = £2,1M × 0,03 = £63.000/ano

Custo anual do controlo (ferramentas + processo + testes) = £45.000

Valor do controlo = (168.000 − 63.000) − 45.000 = £60.000/ano
  líquido positivo — financiar. A aritmética também mostra que o
  controlo ainda valeria a pena financiar a quase o triplo do custo,
  que é o tipo de verificação de sensibilidade que deve acompanhar
  qualquer valor de ALE construído sobre probabilidades estimadas.
```

## Ligação com a engenharia de software

Os engenheiros são donos da maioria das alavancas na equação ALE: o desenho de controlo de acesso, a
higiene de dependências e correções, a cobertura de registo e deteção, e as ferramentas de resposta a
incidentes movem todos diretamente o termo ARO, razão pela qual a avaliação CAF se lê tanto como uma
revisão de arquitetura técnica quanto como uma auditoria de política. Isto é a
[dívida técnica como erosão de valor público](../technical-debt-as-public-value-erosion/) na sua
forma mais aguda — sistemas sem correções, sem monitorização, com controlo de acesso deficiente são
dívida cujo pagamento de juros é risco de cauda, não um arrasto constante — e deve ser reconciliado
com o [custo total de propriedade em TI governamental](../total-cost-of-ownership-in-government-it/)
para que a despesa em segurança não seja tratada como separada do custo real de operação do sistema.
É também um dado de entrada direto para as avaliações de
[valor pelo dinheiro](../value-for-money/) ao abrigo do Green Book: o custo ajustado ao risco faz
parte do lado do "custo" de qualquer avaliação de opções, não uma reflexão tardia acrescentada no
fim.

## Armadilhas

- **Tratar a autoavaliação CAF como a própria segurança**: uma avaliação concluída descreve uma
  postura de segurança; não a cria — o valor está nos resultados alcançados, não no documento.
- **Usar custos médios globais de violação como uma estimativa local sem ajuste**: os valores da IBM
  são médias entre amostras grandes e variadas; a expectativa de perda única realista de uma pequena
  autarquia local raramente é a mesma que a de um departamento do governo nacional.
- **Ignorar a psicologia do risco de cauda nas decisões de investimento**: uma probabilidade anual
  baixa torna a despesa em segurança fácil de adiar indefinidamente, até ao ano em que não é —
  testar a sensibilidade do cálculo de ALE face a um intervalo de AROs, como no exemplo prático,
  contraria isto.
- **Contar apenas o custo de violação ao estilo IBM, não o custo de confiança**: uma violação que
  deprime a disposição dos cidadãos para usar canais digitais corrói o caso de
  [poupanças da mudança de canal](../channel-shift-savings/) durante anos depois, um custo
  raramente incluído nas estimativas de custo de violação.

## Fontes

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
