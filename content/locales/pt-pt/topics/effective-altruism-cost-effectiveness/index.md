# Custo-Eficácia do Altruísmo Eficaz

O raciocínio de custo-eficácia do altruísmo eficaz (effective altruism, EA) classifica intervenções
caritativas pela quantidade de bem — mais frequentemente expressa como vidas salvas, ou saúde
ganha, por dólar gasto — e direciona o dinheiro para a intervenção que compra mais bem na margem. A
GiveWell é a praticante mais influente do campo: publica estimativas explícitas e atualizadas de
custo por vida salva e custo por resultado para uma pequena lista de "instituições de topo", e
recomenda que os doadores deem à que atualmente tenha margem para mais financiamento à melhor taxa.

## Por que isso importa

A GiveWell declara a custo-eficácia como o critério principal na sua metodologia publicada: procura
intervenções apoiadas por evidência, estima a sua custo-eficácia numa unidade comum, e classifica
entre causas completamente não relacionadas — redes mosquiteiras contra a malária, suplementação de
vitamina A, transferências monetárias, pagamentos de incentivo à vacinação — nesse único eixo. Isto
é uma importação direta do raciocínio ao estilo QALY/DALY da economia da saúde para a filantropia:
tal como um sistema de saúde pergunta "quantos QALYs por libra na margem", a GiveWell pergunta
"quantas vidas, ou anos de vida, por dólar na margem", e trata as causas como substituíveis uma vez
convertidas nessa unidade comum. Ver
[análise de custo-eficácia no governo](../cost-effectiveness-analysis-in-government/) para o primo do
setor público deste enquadramento de raciocínio.

O valor da GiveWell mais citado diz respeito à Against Malaria Foundation (AMF), que distribui redes
mosquiteiras tratadas com inseticida. No exemplo prático publicado pela GiveWell (retirado de dados
de financiamento de 2020), aproximadamente $4.500 financiaram redes suficientes para evitar uma
morte, depois de considerar o uso imperfeito das redes, a mortalidade de referência sem redes, e o
ajuste para a substituição de fundos (funging) — a possibilidade de a AMF receber parte desse
financiamento de outros doadores de qualquer forma. A GiveWell é explícita em que este valor muda ao
longo do tempo e entre geografias à medida que a prevalência da malária, o custo das redes e as
lacunas de financiamento mudam, e que se espera geralmente que o custo de salvar uma vida suba ao
longo do tempo, à medida que as oportunidades mais baratas são aproveitadas primeiro; é uma ilustração
prática do método, não um preço fixo.

## A matemática

```
Custo-eficácia = Custo da intervenção / Unidades de bem produzidas
                (por exemplo, $ por vida salva, $ por DALY evitado,
                $ por QALY)

Cadeia da GiveWell para um programa de redes mosquiteiras,
ilustrativamente:
  $ por rede comprada e entregue
    ÷ quota de redes efetivamente usadas
    ÷ pessoas protegidas por rede
    × mortalidade anual de referência sem redes
    × redução na mortalidade atribuível ao uso da rede (de evidência
      de RCT)
    × anos de proteção por rede
    ÷ ajuste para substituição de fundos (dinheiro a deslocar o
      financiamento de outros doadores)
  = $ por vida salva (líquido de efeitos de financiamento
    contrafactual)
```

Esta cadeia importa porque cada passo é um local onde as estimativas de custo-eficácia
frequentemente correm mal — ver as armadilhas abaixo — e porque torna explícito que "custo por vida
salva" nunca é um preço bruto observado; é uma estimativa modelada construída a partir de vários
fatores separadamente incertos.

## Exemplo prático

Duas intervenções hipotéticas, ambas apoiadas por evidência, a competir pelos mesmos £100.000
marginais:

- **Redes mosquiteiras (estilo AMF)**: aproximadamente $4.500 por vida salva no exemplo prático
  publicado pela GiveWell, retirado de dados de 2020, ou seja, muito aproximadamente 20 vidas salvas
  por £100.000, consoante a taxa de câmbio e o ano usados.
- **Programa de desparasitação**: sem benefício de mortalidade plausível, mas forte evidência de
  ganhos de rendimento a longo prazo resultantes da desparasitação na infância; a GiveWell avalia-o
  em termos de ganho de rendimento, não de vidas salvas, o que torna difícil compará-lo diretamente
  com as redes mosquiteiras sem uma unidade partilhada. A GiveWell usa um enquadramento explícito de
  "pesos morais" para converter ambos numa unidade interna única para classificação.

A disciplina do método EA é forçar esta comparação a ficar explícita, em vez de financiar ambas
porque ambas "soam bem". Ver [retorno social sobre o investimento](../social-return-on-investment/)
para a função de força equivalente usada pelas empresas sociais e financiadores locais do Reino
Unido, que coloca a mesma pergunta — qual é o melhor retorno por libra — num idioma de valor
monetizado em vez de um idioma de vidas/DALYs.

## Ligação com a engenharia de software

Os engenheiros que constroem plataformas de doadores, ferramentas de correspondência de subvenções ou
painéis de impacto para financiadores alinhados com o EA (Open Philanthropy, a própria GiveWell,
plataformas de doação eficaz como a Giving What We Can) precisam de representar as estimativas de
custo-eficácia como intervalos com pressupostos declarados, não números únicos — o modelo subjacente
tem vários fatores multiplicativos incertos, e reduzir isso a um único valor num painel deturpa a
confiança que a própria GiveWell declara. Versione cada estimativa pela data de publicação; a
GiveWell revê os seus números, por vezes substancialmente, à medida que chega nova evidência de RCT
ou dados de lacuna de financiamento, e uma plataforma que armazena em cache um valor antigo torna-se
silenciosamente errada.

## Armadilhas

- **Tratar uma estimativa de custo-eficácia como um preço fixo.** É o resultado de um modelo com
  vários fatores multiplicativos incertos (taxas de uso, mortalidade de referência, ajuste de
  substituição de fundos); declare a data e a versão.
- **Ignorar a substituição de fundos/deslocamento.** Financiar uma organização que teria recebido o
  dinheiro de outro doador de qualquer forma compra menos bem contrafactual do que o valor de
  destaque sugere — ver [adicionalidade e perda seca](../additionality-and-deadweight/) e
  [deslocamento e atribuição](../displacement-and-attribution/).
- **Comparar entre unidades incompatíveis sem conversão.** "Vidas salvas" e "rendimento ganho" não são
  diretamente comparáveis sem um enquadramento explícito de pesos morais; apresentá-las lado a lado
  como se fossem é um erro de categoria.
- **Visão em túnel da área de causa.** Classificar apenas dentro de uma área de causa (por exemplo,
  apenas instituições de saúde global) e chamar à vencedora "a instituição mais custo-eficaz" exagera
  a alegação; a classificação entre causas da GiveWell é deliberadamente estreita (saúde e bem-estar
  globais), não universal.

## Fontes

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
