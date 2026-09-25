# Índice de Desenvolvimento Humano (IDH)

O IDH é a alternativa de destaque da ONU à classificação de países apenas pelo rendimento: combina
esperança de vida, educação e rendimento num único número entre 0 e 1, sobre a premissa — defendida
pelo economista Amartya Sen e desenvolvida para a ONU por Mahbub ul Haq — de que o desenvolvimento
diz respeito à expansão daquilo que as pessoas conseguem fazer e ser, não apenas do que ganham. É
publicado anualmente no Human Development Report do Programa das Nações Unidas para o Desenvolvimento
desde 1990.

## Por que isso importa

Antes do IDH, o "desenvolvimento" era medido quase inteiramente pelo PNB per capita, o que nada diz
sobre se o crescimento chega à saúde ou educação das pessoas comuns. A abordagem das capacidades de
Sen reenquadrou o desenvolvimento como a expansão de liberdades reais, e ul Haq transformou isso num
índice publicável que o PNUD podia usar para classificar todos os países, forçando governos que
enriqueceram apenas pelo rendimento mas negligenciaram a saúde ou a escolaridade a confrontar uma
classificação pior do que o seu PIB sugeria (os estados petrolíferos do Golfo e algumas economias
extrativas são os exemplos padrão). A estrutura tripla do IDH é também o antecessor metodológico
direto do [Índice de Privação Múltipla](../multidimensional-poverty-index/): ambos recusam deixar
uma dimensão compensar um défice noutra, usando uma média geométrica em vez de aritmética. O PNUD
publica notas técnicas completas e os dados subjacentes para cada edição
(<https://hdr.undp.org/data-center/human-development-index>), a fonte canónica para quem constrói
sobre o índice em vez de o reconstruir.

## A matemática

```
Índice de Esperança de Vida (LEI)   = (LE − 20) / (85 − 20)

Índice de Anos Médios de Escolaridade  = anos médios de escolaridade / 15
Índice de Anos Esperados de Escolaridade = anos esperados de
                                            escolaridade / 18
Índice de Educação (EI)             = (Índice de Anos Médios + Índice
                                        de Anos Esperados) / 2

Índice de Rendimento (II)           = (ln(RNB per capita) − ln(100)) /
                                        (ln(75000) − ln(100))

IDH = (LEI × EI × II) ^ (1/3)     [média geométrica dos três
                                    subíndices]
```

A média geométrica é deliberada: porque multiplica em vez de fazer a média, uma pontuação muito alta
numa dimensão não consegue compensar totalmente uma pontuação muito baixa noutra — um desenho que o
PNUD adotou em 2010 especificamente para penalizar o desequilíbrio, substituindo a fórmula anterior de
média aritmética.

## Exemplo prático

**País de rendimento médio**: esperança de vida 72 anos, anos médios de escolaridade 8, anos
esperados de escolaridade 13, RNB per capita $12.000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

IDH = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

Um IDH de 0,713 situa-se na banda de "desenvolvimento humano elevado" do PNUD (0,700–0,799); "muito
elevado" começa em 0,800. Note-se como o resultado é sensível ao subíndice mais fraco: se os anos
médios de escolaridade fossem 4 em vez de 8 (MYSI = 0,267, EI = 0,494), o IDH cai para
(0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — a queda de uma banda inteira — mesmo que mais nada tenha
mudado.

## Ligação com a engenharia de software

- O padrão de média geométrica é diretamente reutilizável para qualquer pontuação composta de
  serviço ou produto onde não se quer que uma dimensão forte disfarce outra criticamente fraca —
  por exemplo, combinar pontuações de acessibilidade, desempenho e fiabilidade para um serviço
  digital público de forma multiplicativa em vez de por média ponderada, para que um serviço rápido
  mas inacessível não possa pontuar "bom".
- A transformação logarítmica do rendimento no IDH (valor marginal decrescente de uma libra extra) é
  a mesma lógica por trás da [ponderação distributiva](../distributional-weighting/) na avaliação:
  $1.000 extra significa muito mais para um agregado familiar pobre do que para um rico, e tratar
  ambos linearmente avalia mal o impacto.
- Qualquer painel que reporte uma única pontuação combinada de "inclusão digital" ou "resultados do
  cidadão" deve documentar a sua fórmula de agregação tão explicitamente quanto as notas técnicas do
  PNUD — ver [KPIs do setor público](../public-sector-kpis/) e
  [painel de valor público](../public-value-scorecard/).

## Armadilhas

- **Fazer a média em vez de usar a média geométrica** — uma média aritmética permite que o
  rendimento elevado mascare inteiramente a fraca saúde ou educação; todo o propósito da mudança
  metodológica de 2010 foi acabar com essa substituição.
- **Comparar o IDH ano a ano como se fosse um PIB ajustado pela inflação** — o PNUD reajusta
  periodicamente o índice (novos limites mínimo/máximo, tetos de escolaridade revistos), pelo que uma
  mudança de classificação pode refletir uma atualização metodológica, não uma mudança real; verifique
  sempre de que edição do HDR um valor provém.
- **Tratar o IDH como uma medida de pobreza** — é uma média nacional e nada diz sobre a distribuição
  dentro de um país; para isso, use o
  [Índice de Privação Múltipla](../multidimensional-poverty-index/) ou o IDH ajustado à desigualdade
  separado do PNUD.

## Fontes

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
