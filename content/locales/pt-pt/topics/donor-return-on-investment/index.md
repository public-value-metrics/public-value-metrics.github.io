# Retorno sobre o Investimento do Doador

O retorno sobre o investimento do doador é aquilo que a libra de um doador específico de facto compra
em resultados — não os rácios operacionais da instituição de solidariedade, nem o retorno da própria
instituição sobre o seu orçamento total. Reenquadra o ROI da perspetiva da organização (quão
eficientemente operamos) para a perspetiva do doador (o que a minha contribuição marginal muda), e os
dois números são rotineira, e erradamente, tratados como a mesma coisa.

## Por que isso importa

O "ROI" da própria instituição de solidariedade, na medida em que a expressão é sequer usada,
geralmente descreve algo como o [custo por beneficiário](../cost-per-beneficiary/) ou o
[rácio de custos indiretos](../charity-overhead-ratio/) — medidas de eficiência organizacional. O
ROI de um doador é uma pergunta inteiramente diferente: dado que esta instituição já tem outras
receitas, o que é que o dinheiro *deste* doador acrescenta na margem? Se uma instituição entregasse o
mesmo programa com ou sem um determinado donativo de £10.000 — porque tem reservas amplas, ou porque
outro financiador teria preenchido a lacuna — o ROI desse donativo para o doador está próximo de
zero, por melhor que pareça o rácio de custos indiretos geral ou o custo por resultado da
instituição.

Esta é a mesma questão de adicionalidade que sustenta a avaliação de
[valor pelo dinheiro](../value-for-money/) na despesa pública do Reino Unido e a
[adicionalidade e perda seca](../additionality-and-deadweight/) na avaliação de programas: o valor
criado só é creditável a um financiador na medida em que não teria acontecido de qualquer forma. As
principais plataformas de doação assistida e organizações de doação eficaz (Giving What We Can,
GiveWell) constroem as suas recomendações explicitamente em torno desta distinção, perguntando não
"esta é uma boa instituição de solidariedade" mas "esta instituição tem margem por preencher para
mais financiamento, de modo que o meu donativo seja adicional".

## A matemática

```
ROI do doador ≠ Eficiência operacional da instituição

ROI do doador ≈ (Resultado alcançado com o donativo) − (Resultado
                 que teria ocorrido sem ele, ou seja, o contrafactual)
             ─────────────────────────────────────────────────
                              Dimensão do donativo

Fatores-chave:
  - Margem para mais financiamento (a instituição está limitada por
    financiamento na margem?)
  - Substituição de fundos (funging) (outro doador teria preenchido a
    lacuna?)
  - Custo-eficácia marginal ao nível de financiamento específico (os
    custos muitas vezes sobem à medida que uma intervenção escala
    para além da sua população mais fácil de alcançar)
```

Ver [custo-eficácia do altruísmo eficaz](../effective-altruism-cost-effectiveness/) para saber como a
GiveWell operacionaliza a pergunta da "margem para mais financiamento", e a
[análise contrafactual](../counterfactual-analysis/) para o método geral.

## Exemplo prático

Um doador está a escolher entre dois donativos de £5.000:

- **Instituição C**: tem um programa central totalmente financiado com £2 milhões em reservas e uma
  lista de espera de financiadores; os £5.000 marginais são provavelmente acrescentados às reservas
  ou a uma atividade de menor prioridade. Resultado adicional estimado para o doador: mínimo — o
  dinheiro não muda claramente o que acontece.
- **Instituição D**: um pequeno programa apoiado por evidência que declarou publicamente que terá de
  recusar 200 pessoas no próximo trimestre sem £50.000 adicionais, e já angariou £42.000 desse valor.
  Os £5.000 marginais têm uma probabilidade muito elevada de financiar entrega adicional real —
  digamos, 20 pessoas adicionais servidas, ao custo por beneficiário declarado pela própria
  instituição de £250.

Mesma dimensão de donativo, mesmo doador, ROI do doador radicalmente diferente — não porque a
Instituição C seja uma organização pior (pode até ter um valor global de custo por resultado melhor)
mas porque a sua lacuna de financiamento marginal já está fechada.

## Ligação com a engenharia de software

As plataformas de doadores e as ferramentas de recomendação de doação demasiadas vezes apresentam
apenas métricas de eficiência ao nível organizacional (rácio de custos indiretos, custo por
beneficiário) porque é isso que as instituições publicam nos relatórios anuais e o que é mais fácil
de importar para uma tabela de comparação. Representar corretamente o ROI do doador exige um ponto de
dados diferente e mais difícil de obter: a lacuna de financiamento atual declarada por uma
instituição, ou a sua "margem para mais financiamento", que muda ao longo do ano e raramente é dado
estruturado. As plataformas que querem apoiar um raciocínio genuíno de ROI do doador precisam ou de
uma fonte direta de divulgações de lacunas de financiamento (como a GiveWell mantém manualmente para
as suas instituições recomendadas) ou de um aviso explícito de que uma tabela de comparação está a
mostrar eficiência organizacional, não adicionalidade do doador. Ver
[rácio de custos indiretos](../charity-overhead-ratio/) para a métrica com que o ROI do doador é mais
frequentemente, e erradamente, confundido.

## Armadilhas

- **Confundir a eficiência da instituição com a adicionalidade do doador.** Uma instituição bem
  gerida, com baixos custos indiretos, ainda pode ter um ROI marginal do doador próximo de zero se
  não estiver limitada por financiamento.
- **Ignorar a substituição de fundos.** Se um grande financiador institucional fosse cobrir a lacuna
  de qualquer forma, o donativo de um doador individual desloca o dinheiro desse financiador em vez
  de acrescentar nova entrega.
- **Presumir custo-eficácia linear à escala.** Os beneficiários mais fáceis de alcançar são muitas
  vezes servidos primeiro; o custo marginal por resultado frequentemente sobe à medida que um
  programa se expande, pelo que o ROI da próxima libra não é o mesmo que o ROI da libra média já
  gasta.
- **Nenhuma lacuna de financiamento declarada.** Uma instituição ou plataforma que não consiga dizer o
  que os próximos £X financiariam não pode sustentar uma alegação genuína de ROI do doador, apenas
  uma de custo médio.

## Fontes

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
