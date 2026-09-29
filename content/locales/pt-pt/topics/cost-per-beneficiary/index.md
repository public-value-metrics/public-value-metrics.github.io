# Custo por Beneficiário

Custo por beneficiário é o custo total do programa dividido pelo número de pessoas únicas que
receberam um serviço — qualquer pessoa tocada, independentemente de a sua situação ter de facto
mudado. É o número de eficiência mais rápido que uma organização pode produzir, porque "quem
servimos" está quase sempre já no sistema de gestão de processos, enquanto "quem foi ajudado"
geralmente não está.

## Por que isso importa

Os financiadores pedem constantemente o custo por beneficiário, e por razões defensáveis: está
disponível de imediato, é comparável entre um portefólio de programas muito diferentes entre si, e é
honesto quanto ao alcance de uma forma que as alegações de resultados — que demoram mais a verificar
e são mais fáceis de exagerar — não são. O SORP (Statement of Recommended Practice) das instituições
de solidariedade do Reino Unido, que rege a forma como as instituições reportam ao abrigo da FRS 102,
exige que os relatórios anuais dos administradores (trustees) descrevam as conquistas face aos
objetivos, mas as contas de gestão da maioria das instituições mais pequenas continuam, por defeito,
a usar custos unitários baseados no alcance, porque são baratos de produzir e propícios à auditoria.

O perigo é tratar o custo por beneficiário como se respondesse à pergunta que não pode responder: se
o dinheiro funcionou. Ver [custo por resultado](../cost-per-outcome/) para a métrica que efetivamente
responde a isso, e [resultados vs. produtos](../outcomes-vs-outputs/) para a distinção subjacente. O
custo por beneficiário é uma métrica legítima de triagem e alcance — diz a um financiador até onde o
dinheiro chega — mas um custo por beneficiário baixo tanto pode significar eficiência genuína como um
serviço tão superficial que não muda nada.

## A matemática

```
Custo por beneficiário = Custo total do programa / Número de pessoas
                          únicas servidas

Contraste:
Custo por resultado    = Custo total do programa / Número de pessoas
                          que alcançam o resultado definido

O custo por beneficiário é sempre ≤ custo por resultado, porque a
população de resultado é um subconjunto (muitas vezes pequeno) da
população de beneficiários.
```

## Exemplo prático

**Banco alimentar, no mesmo ano do exemplo de custo por resultado**:

- Custo total do programa: £450.000
- Agregados familiares únicos servidos (três ou mais cabazes): 1.800

```
Custo por beneficiário = £450.000 / 1.800 = £250 por agregado
familiar servido
```

Comparar as duas métricas lado a lado:

| Métrica | Denominador | Resultado |
|---|---|---|
| Custo por beneficiário | 1.800 agregados familiares servidos | £250 |
| Custo por resultado | 630 agregados familiares com segurança alimentar | £714 |

Um financiador que veja apenas £250 pode concluir que se trata de uma instituição altamente
eficiente. Um financiador que veja ambos os números pode fazer a pergunta mais útil: será a diferença
entre alcance (1.800) e resultado (630) uma lacuna de recolha de dados, uma lacuna de desenho, ou um
reflexo honesto de quão difícil é alcançar a segurança alimentar apenas com ajuda alimentar?

**Instituição de formação profissional, ilustrativo**: custo por beneficiário (inscrito) = £2.000;
custo por resultado (emprego sustentado aos 6 meses) = £11.000, porque apenas 18% dos inscritos
completam o programa e encontram emprego sustentado. A divergência entre os dois números por um
fator de cinco é comum onde as taxas de conclusão ou durabilidade são baixas — uma instituição de
formação e um banco alimentar são estruturalmente idênticos aqui.

## Ligação com a engenharia de software

O custo por beneficiário é a métrica por defeito no software sem fins lucrativos porque é a métrica
que resulta de um registo de beneficiário sem trabalho adicional: criar um processo, registar um
serviço, contar linhas. Construir um sistema que também suporte o custo por resultado significa
acrescentar deliberadamente uma segunda entidade de primeira classe — um evento de resultado, datado
e definido independentemente da entrega do serviço — e resistir à tentação de deixar "processo
encerrado" substituir "resultado alcançado". Ao definir o âmbito de uma plataforma de gestão de
subvenções ou CRM, pergunte qual das duas métricas cada painel está de facto a mostrar, e rotule-a
em conformidade; confundi-las num único bloco de "impacto" é uma das causas mais comuns, ao nível do
software, das armadilhas abaixo. Ver [bases de dados de custo unitário](../unit-cost-databases/) para
comparar (benchmark) qualquer uma das métricas uma vez corretamente rotulada.

## Armadilhas

- **Apresentar o custo por beneficiário como impacto.** Mede o alcance, não a mudança. Rotule painéis
  e relatórios como "custo por pessoa servida", não "custo por pessoa ajudada".
- **Contagem dupla entre programas.** Uma pessoa que recebe tanto cabazes alimentares como
  aconselhamento sobre dívidas da mesma instituição é um beneficiário, não dois, se o denominador se
  destinar a descrever o alcance único; decida e documente qual convenção é usada.
- **Tratar um número mais baixo como sempre melhor.** Um clube de almoço de porta aberta vencerá
  sempre um serviço intensivo de gestão de processos no custo por beneficiário, porque custa menos
  tocar alguém ligeiramente. Isso nada diz sobre qual produz mudança mais duradoura por libra.
- **Trocar silenciosamente os denominadores entre relatórios.** Um valor de custo por beneficiário
  citado num relatório anual face a "inscritos" e no seguinte face a "concluídos" não é comparável de
  ano para ano; declare o denominador sempre.

## Fontes

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
