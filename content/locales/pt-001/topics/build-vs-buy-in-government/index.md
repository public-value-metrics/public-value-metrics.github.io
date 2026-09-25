# Construir vs. Comprar no Governo

Construir vs. comprar é uma comparação estruturada e ajustada ao risco entre o desenvolvimento à
medida e a aquisição comercial ou de mercado, comparada em termos de
[custo total de propriedade](../total-cost-of-ownership-in-government-it/) descontado, tempo até ao
valor e risco. O governo é estruturalmente um setor comprador — o Technology Code of Practice
estabelece uma presunção a favor de soluções de mercado e em nuvem — mas as equipas de engenharia
dentro dos departamentos continuam, por defeito, a optar por construir, pelas mesmas razões que os
construtores em todo o lado o fazem.

## Por que isso importa

O Technology Code of Practice do Government Digital Service
(<https://www.gov.uk/guidance/the-technology-code-of-practice>) e as orientações complementares do
Service Manual sobre decidir se se deve construir ou comprar pressionam os departamentos a justificar
o desenvolvimento à medida face a uma presunção de que a capacidade de mercado deve ser comprada, não
construída, e que apenas a capacidade genuinamente nova e diferenciadora da missão justifica código
à medida. As orientações suplementares do HM Treasury sobre o enviesamento de otimismo no Green
Book, extraídas da revisão da Mott MacDonald de 2002 sobre grandes contratações públicas, atribuem
aos projetos de TI o intervalo de majoração mais amplo de qualquer categoria avaliada — recomenda-se
que as estimativas de custo de capital sejam majoradas entre 10%, no limite inferior, e até 200%, no
limite superior, antes de serem usadas na avaliação, refletindo o quão mal os projetos de software
têm sido historicamente subestimados em toda a contratação pública. A análise construir vs. comprar
existe precisamente para forçar esse ajuste de risco para cima da mesa antes da aprovação, em vez de
o deixar emergir como um pedido de derrapagem orçamental durante o ano.

## A matemática

```
Comparar ao longo do mesmo horizonte de 3–5 anos, descontado à taxa
de desconto social do Green Book (ver social-discount-rate.md):

VAL_opção = VA(benefícios, ajustados pelo tempo até ao valor) − VA(CTP)

Ajustes de risco (padrão de enviesamento de otimismo do Green Book):
  custo de construção × 1,1–3,0   (intervalo de majoração de projetos
                                    de TI, Mott MacDonald)
  tempo até ao valor da construção + 40–60% (prior de atraso na
                                    implementação)
  comprar: adicionar em vez disso a verificação de realidade da
           integração e os custos de saída de contrato

Fatores de decisão, pela ordem que geralmente decide:
  1. diferenciação — esta capacidade é a missão, ou é "canalização"?
  2. tempo até ao valor × custo do atraso (ver
     cost-of-delay-in-public-programmes.md)
  3. custo total de propriedade ajustado ao risco
```

## Exemplo prático

Uma autarquia local precisa de um sistema de gestão de processos para a assistência social a
adultos. Comprar: SaaS a £180.000/ano, em produção em 4 meses. Construir: estimativa de £900.000 mais
£150.000/ano de manutenção, em produção em 14 meses.

```
Custo de construção ajustado ao risco = 900.000 × 1,4 = £1.260.000
CTP a 5 anos:
  comprar  = 180.000 × 5 = £900.000
  construir = 1.260.000 + 150.000 × 5 = £2.010.000

Termo de atraso: o sistema evita £40.000/mês em avaliações
duplicadas; a construção chega 10 meses mais tarde do que a compra.
CoD = 10 × 40.000 = £400.000

Comparação efetiva: £900.000 (comprar) vs. £2.010.000 + £400.000 =
£2.410.000 (construir)
```

Comprar vence por cerca de £1,5 milhões ao longo de cinco anos, e a maior linha isolada depois da
própria estimativa de construção é o custo de atraso que uma comparação puramente de capex nunca
teria revelado.

## Ligação com a engenharia de software

As disciplinas que se transferem diretamente desta análise para a prática de entrega: **ajuste de
risco baseado em priors** — a majoração da Mott MacDonald é o equivalente, em software, do
enviesamento de otimismo do Green Book aplicado mecanicamente, pelo que as equipas devem argumentar
por exceções a ele em vez de presumir que a sua estimativa é a exceção; **honestidade no
comparador** — a alternativa a construir é a melhor opção de compra disponível, não "nada", o que se
liga diretamente ao [custo de oportunidade na despesa pública](../opportunity-cost-in-public-spending/);
e **comparação honesta de CTP** — toda a proposta de construção deve ser comparada com o
[custo total de propriedade](../total-cost-of-ownership-in-government-it/) completo de uma opção de
compra, não com o seu preço de tabela. Onde construir genuinamente vence, o
[custo do atraso](../cost-of-delay-in-public-programmes/) do tempo de construção adicional deve ser
precificado explicitamente no caso de negócio, e não deixado como um pressuposto não declarado de
que o tempo não importa.

## Armadilhas

- **Comparar o preço de tabela do fornecedor com uma estimativa de construção não ajustada ao
  risco**: isto favorece a construção duplamente, uma vez no custo e outra no calendário.
- **Trabalho interno com custo zero**: o tempo de engenharia da função pública é tratado como
  "gratuito" porque já está no orçamento de efetivos do departamento, o que esconde o seu verdadeiro
  custo de oportunidade face a outro trabalho que essa equipa poderia estar a fazer.
- **Aprisionamento não precificado em ambas as direções**: os custos de saída do fornecedor e de
  portabilidade dos dados são reais, mas também o é o "fator autocarro" de uma construção à medida e
  a sua dependência de manter, ao longo da sua vida, uma pequena equipa interna difícil de substituir.
- **Diferenciação da missão alegada para "canalização"**: afirmar "isto é central para nós" sobre
  middleware de integração ou um repositório de documentos — testar isso perguntando se um cidadão
  ou gestor de processos alguma vez notaria qual está a funcionar por baixo.

## Fontes

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
