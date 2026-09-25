# Resultados vs. Produtos

Um produto é o resultado direto e contável de uma atividade — existe no momento em que a entrega
acontece, independentemente do efeito que tem. Um resultado é a mudança que se segue para as pessoas,
lugar ou sistema envolvidos. "500 pessoas assistiram a um workshop de procura de emprego" é um
produto: é verdade mesmo que nenhuma delas encontre trabalho. "As perspetivas de emprego de 500
pessoas melhoraram" é uma alegação de resultado, e exige evidência de mudança, não apenas evidência
de presença — a confusão que produz mais relatórios de subvenções enganosos do que quase qualquer
outro erro de medição no setor.

## Por que isso importa

Tanto o Magenta Book do HM Treasury como financiadores como o National Lottery Community Fund exigem
relato de resultados especificamente porque os produtos são o que os programas reportam por defeito:
são baratos de contar, estão sempre disponíveis, e parecem sempre positivos. Uma contagem de produtos
literalmente nunca pode descer em resultado de o programa falhar — mais sessões entregues é sempre
"mais", enquanto um resultado pode revelar que um programa não está a funcionar. O National Audit
Office tem repetidamente criticado programas governamentais por reportar níveis de atividade como se
fossem evidência de sucesso; um sistema de software que só torna fácil reportar produtos reforça isto
por defeito, porque os produtos não exigem recolha de dados de acompanhamento e os resultados exigem.

## A matemática

Não há fórmula, mas há um teste fiável para classificar uma métrica:

```
Teste de produto:   é contável no ponto de entrega, verdadeiro mesmo
                     que o destinatário não seja afetado?
Teste de resultado: exige uma comparação antes/depois ou com/sem para
                     ser significativo?

Se um número pode ser verdadeiro com benefício zero para alguém, é um
produto.
```

Isto situa-se dentro da cadeia mais ampla do [modelo lógico](../logic-model/) e depende das ligações
de resultado definidas numa [teoria da mudança](../theory-of-change/); transformar um resultado em
dinheiro usa os métodos em
[retorno social sobre o investimento](../social-return-on-investment/).

## Exemplo prático

**Autarquia local (apoio ao emprego)**: produto — 500 pessoas assistiram a workshops de procura de
emprego. Resultado — no acompanhamento aos 12 meses, 140 dessas 500 (28%) estão em emprego sustentado
(6+ meses). Um grupo de comparação com características semelhantes mas sem acesso ao programa tem uma
taxa de emprego de referência de 15% no mesmo período. Aumento líquido de resultado: 28% − 15% = 13
pontos percentuais, pelo que se estima que 500 × 0,13 = 65 pessoas adicionais estão empregadas que de
outra forma não estariam — o resultado atribuível, distinto tanto do número de presença de 500 como
da contagem bruta de emprego de 140.

**Instituição de solidariedade (instituição de literacia)**: produto — 1.200 sessões de leitura
entregues a 300 crianças. Resultado — a idade de leitura média melhorou 8 meses ao longo de um
período de 6 meses, face a uma referência de progressão natural esperada de 6 meses. Ganho líquido de
resultado: 8 − 6 = 2 meses de melhoria adicional de idade de leitura por criança atribuível ao
programa, não o valor integral de 8 meses.

## Ligação com a engenharia de software

Os registos de eventos e os sistemas transacionais instrumentam produtos quase automaticamente —
visualizações de página, sessões, tickets fechados, consultas marcadas — porque são gerados pelo
sistema a fazer o seu trabalho. Os resultados exigem um modelo de dados que capte o mesmo indivíduo
num momento posterior face a uma referência ou comparação, o que tem de ser deliberadamente
desenhado: inquéritos de acompanhamento, registos administrativos ligados, ou uma coorte de
comparação. Uma ferramenta de relato que só suporte o primeiro discretamente orientará uma
organização para o relato apenas de produtos, independentemente do que o financiador pediu. Ver
[modelo lógico](../logic-model/) para onde os resultados se situam na cadeia de responsabilização,
[custo por resultado](../cost-per-outcome/) para transformar esta distinção numa métrica de custo
unitário, e [KPIs do setor público](../public-sector-kpis/) para o padrão mais amplo de seleção de
métricas.

## Armadilhas

- **Reportar produtos como se fossem resultados.** "500 pessoas assistiram" implica benefício sem o
  demonstrar; rotule a presença explicitamente como um produto.
- **Nenhuma referência ou grupo de comparação.** Um valor de resultado sem contrafactual — ver
  [análise contrafactual](../counterfactual-analysis/) — não consegue separar o efeito do programa
  daquilo que teria acontecido de qualquer forma.
- **Otimizar para a métrica financiada.** Quando o financiamento está ligado ao volume de produto, as
  equipas de entrega racionalmente maximizam a presença em vez da mudança duradoura, um modo de falha
  da lei de Goodhart.
- **"Lavagem" de resultado.** Rotular novamente uma métrica de produto com linguagem que soa a
  resultado ("resultados de envolvimento: 500 participantes") sem qualquer medição de acompanhamento
  por trás.

## Fontes

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
