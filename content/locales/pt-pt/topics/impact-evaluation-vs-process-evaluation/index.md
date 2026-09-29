# Avaliação de Impacto vs. Avaliação de Processo

A avaliação de impacto pergunta se um programa causou os resultados pretendidos. A avaliação de
processo pergunta se o programa foi de facto entregue como desenhado — a quem, com que dose, e com
que obstáculos ou facilitadores pelo caminho. São perguntas diferentes que exigem métodos diferentes,
e o Magenta Book do HM Treasury trata encomendar ambas em conjunto como prática padrão, porque um
resultado de impacto fraco ou nulo é ininterpretável isoladamente: não consegue dizer se a teoria
subjacente do programa estava errada, ou se uma boa teoria simplesmente nunca foi corretamente
entregue.

## Por que isso importa

As avaliações governamentais têm repetidamente constatado nenhum efeito mensurável de um programa
sem ter uma avaliação de processo que explique porquê — deixando os encomendantes incapazes de
distinguir "esta ideia não funciona" (falha de teoria) de "esta ideia nunca foi de facto testada
corretamente" (falha de implementação). As orientações do Medical Research Council sobre avaliação de
processo de intervenções complexas, publicadas no BMJ em 2015 e amplamente citadas ao lado do
Magenta Book, formalizaram a fidelidade, a dose e o alcance como as coisas centrais que uma
avaliação de processo deve medir. Encomendar uma avaliação de impacto sem uma avaliação de processo
arrisca abandonar um desenho de programa genuinamente sólido porque foi entregue a metade da
população pretendida a uma fração da intensidade pretendida — um erro que um construtor de sistemas
está bem posicionado para prevenir, porque a fidelidade de entrega é exatamente o que os sistemas de
dados operacionais conseguem captar quase em tempo real.

## A matemática

```
A avaliação de processo pergunta:
 - Foi entregue à população-alvo, na dose/intensidade planeada?
 - A entrega correspondeu ao desenho do modelo lógico/teoria da
   mudança?
 - Que obstáculos ou facilitadores afetaram a entrega?
 Métodos: verificações de fidelidade face a limiares pré-especificados,
          estudos de caso, entrevistas, dados administrativos de
          entrega.

A avaliação de impacto pergunta:
 - O que mudou, e quanto dessa mudança é atribuível ao programa?
 Métodos: RCT, DiD, PSM, RDD — ver impact-evaluation-methods — face a
          um contrafactual.

Diagnóstico combinado:
 Sem efeito  + alta fidelidade   → falha de teoria: o próprio modelo
                                    não produziu o resultado
 Sem efeito  + baixa fidelidade  → falha de implementação: o modelo
                                    nunca foi devidamente testado
 Efeito encontrado + alta fidelidade → replicar com confiança
 Efeito encontrado + baixa fidelidade → investigar mais: o efeito
                                          pode ser frágil ou
                                          específico do local
```

## Exemplo prático

**Autarquia local (programa de apoio parental)**: uma avaliação de impacto usando
diferenças-em-diferenças encontra uma mudança de +2 pontos percentuais numa medida de bem-estar
infantil — não estatisticamente significativa. A avaliação de processo, conduzida em paralelo,
constata que o programa alcançou apenas 210 das 500 famílias-alvo (42% de alcance), e dessas, apenas
95 cumpriram o limiar de fidelidade pré-especificado de 75%+ de sessões frequentadas — 19% do
alcance planeado original. Conclusão: o resultado de impacto fraco é consistente com uma falha de
implementação, não evidência de que o modelo do programa não funciona; a resposta apropriada é
corrigir a via de referenciação que causou a queda de 58%, não abandonar o desenho do programa.

**Instituição de solidariedade (programa de literacia digital)**: uma avaliação de impacto encontra
um efeito forte (+18 pontos percentuais numa pontuação de confiança digital), e uma avaliação de
processo paralela confirma 92% de fidelidade ao currículo planeado em todos os 12 locais de entrega.
Em conjunto, o financiador pode escalar o programa com confiança, porque o efeito se mostra
consistente em vez de ser o produto de um único local invulgarmente bom.

## Ligação com a engenharia de software

Os dados de avaliação de processo são exatamente aquilo que os sistemas de entrega estão bem
posicionados para captar: assiduidade face ao plano, dosagem de sessões e abandono em cada fase de um
funil de referenciação ou inscrição — a mesma análise de funil que os engenheiros já constroem para
funcionalidades de produto, aplicada em vez disso ao pipeline de entrega de um programa social.
Alimentar métricas de fidelidade e alcance aos gestores de programa quase em tempo real, em vez de
esperar por uma avaliação de fim de subvenção, permite corrigir uma via de referenciação quebrada a
meio do programa em vez de a descobrir apenas depois de o período de financiamento ter terminado. Ver
[métodos de avaliação de impacto](../impact-evaluation-methods/) para os desenhos causais com que a
avaliação de processo é emparelhada, [teoria da mudança](../theory-of-change/) e
[modelo lógico](../logic-model/) para o desenho face ao qual a avaliação de processo verifica a
fidelidade, e [realização de benefícios](../benefits-realization/) para acompanhar a entrega até aos
resultados que foram prometidos.

## Armadilhas

- **Encomendar apenas avaliação de impacto.** Um resultado nulo ou fraco não pode então ser
  interpretado como falha de teoria ou falha de implementação, que é precisamente a distinção que
  importa para decidir o que fazer a seguir.
- **Tratar a avaliação de processo como um extra suave.** Precisa do mesmo rigor e critérios de
  fidelidade pré-especificados que o desenho de impacto, ou colapsa em anedota quando os resultados
  chegam.
- **Confundir "dentro do prazo e do orçamento" com "entregue como desenhado".** A avaliação de
  processo verifica a fidelidade ao modelo — dose, grupo-alvo, conteúdo — não o estado RAG de gestão
  de projeto.
- **Não pré-registar os limiares de fidelidade.** Decidir a posteriori o que conta como "dose
  suficiente" faz com que qualquer explicação de um resultado de impacto dececionante pareça
  justificação inventada depois do facto.

## Fontes

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
