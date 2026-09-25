# Análise de Custo-Benefício Social (ACBS)

A análise de custo-benefício social converte todos os custos e benefícios de uma política ou programa
— de mercado e não mercantis — numa unidade monetária comum, desconta os fluxos futuros para o valor
presente, e faz o balanço para produzir um único número: esta proposta torna a sociedade melhor, e
quanto?

## Por que isso importa

A ACBS é o método quantitativo por defeito no caso económico da
[avaliação do Green Book](../green-book-appraisal/): as orientações do HM Treasury exigem que as
propostas demonstrem um valor social presente líquido (VSPL) positivo sempre que os benefícios possam
ser credivelmente monetizados, usando a disposição a pagar como o princípio de avaliação básico para
bens não mercantis
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Capítulo 5). A disciplina que impõe é que a análise de custo-benefício "social" não é o mesmo
exercício que uma avaliação de investimento do setor privado: deve incluir custos e benefícios que
recaem sobre terceiros que não são parte na transação (externalidades), deve usar a
[taxa de desconto social](../social-discount-rate/) em vez de um custo de capital comercial, e deve
aplicar [ponderação distributiva](../distributional-weighting/) onde uma libra importa mais a um
agregado familiar mais pobre do que a um mais rico.

Onde a ACBS falha é exatamente onde os seus críticos esperam: bens sem análogo de mercado — ar
limpo, coesão social, o valor de uma vida salva — têm de ser monetizados usando métodos de
[preferência declarada](../stated-preference-valuation/) ou
[preferência revelada](../revealed-preference-valuation/), ou tem de ser construído um
[preço-sombra](../shadow-pricing/). Quando a monetização é contestada em vez de meramente difícil, o
próprio Green Book recomenda recorrer à
[análise de custo-eficácia](../cost-effectiveness-analysis-in-government/) ou à
[análise de decisão multicritério](../multi-criteria-decision-analysis/) em vez de forçar um número
em que ninguém acredita.

## A matemática

```
VSPL = Σ [t=0 a T] (Benefício_t − Custo_t) / (1 + r)^t

onde:
  Benefício_t = todos os benefícios monetizados no ano t, incluindo
                bens não mercantis avaliados via preferência
                declarada/revelada ou preço-sombra
  Custo_t     = todos os custos monetizados no ano t, incluindo o
                custo de oportunidade de recursos (ver
                ../opportunity-cost-in-public-spending/)
  r           = taxa de desconto social (o HM Treasury fixa 3,5%
                decrescendo para taxas mais baixas além do ano 30,
                segundo o Anexo A do Green Book)
  T           = período de avaliação

Rácio benefício-custo (BCR) = Σ VA(Benefícios) / Σ VA(Custos)
```

Um BCR acima de 1 (ou VSPL acima de zero) indica valor social líquido. As categorias de valor pelo
dinheiro do Green Book (como usadas na avaliação de transportes e infraestrutura) rotulam intervalos
de BCR: abaixo de 1,0 é mau valor pelo dinheiro, 1,0–1,5 é baixo, 1,5–2,0 é médio, 2,0–4,0 é alto, e
acima de 4,0 é muito alto. A análise de sensibilidade — voltar a executar o VSPL sob pressupostos
pessimistas e otimistas — é obrigatória, não opcional, porque os benefícios não mercantis monetizados
carregam bandas de incerteza amplas.

## Exemplo prático

**Autarquia local**: um conselho avalia um investimento de £3M numa nova rede ciclável e pedonal ao
longo de um período de avaliação de 20 anos a uma taxa de desconto de 3,5%.

```
Custos: £3M de capital no ano 0, £50.000/ano de manutenção (anos
1-20)
VA(manutenção) ≈ £50.000 × 14,2 (fator de anuidade de 20 anos a
3,5%) ≈ £710.000
VA(custos) total ≈ £3,71M

Benefícios (todos monetizados através de ferramentas de avaliação
DfT/OMS publicadas):
  Benefício de saúde do aumento da atividade física: £180.000/ano
  Redução do absentismo: £40.000/ano
  Descongestionamento (menos viagens de carro): £60.000/ano
  Fluxo de benefício total: £280.000/ano
VA(benefícios) ≈ £280.000 × 14,2 ≈ £3,98M

VSPL = £3,98M − £3,71M = +£0,27M
BCR = 3,98 / 3,71 = 1,07 → valor "baixo" pelo dinheiro
```

O esquema ultrapassa a fasquia mas só por pouco; uma análise de sensibilidade com uma estimativa de
benefício de saúde 20% mais baixa (refletindo incerteza genuína na avaliação de atividade física) faz
o BCR cair abaixo de 1,0, razão exata pela qual o Green Book exige que a tabela de sensibilidade seja
publicada a par do valor de destaque, não apenas a estimativa central.

**Instituição de solidariedade**: um programa de prevenção de mortalidade infantil que custa
£500.000/ano é avaliado usando o valor de uma vida estatística (VSL) — um preço-sombra, não um preço
de mercado observado — de aproximadamente £2,1M (valor atualizado em 2023 do HM Treasury, ele próprio
derivado de estudos de preferência declarada). Evitar uma morte infantil por ano face a um custo de
£500.000 dá um BCR de 4,2, confortavelmente valor "muito alto" pelo dinheiro — mas todo o resultado
assenta no valor de VSL, razão pela qual qualquer ACBS que use VSL deve divulgá-lo como um
pressuposto, não um facto.

## Ligação com a engenharia de software

A ACBS é o enquadramento natural para decisões de investimento em plataforma e infraestrutura em
software governamental — comparar uma plataforma de identidade partilhada com soluções pontuais
departamentais, por exemplo, exige monetizar benefícios como a redução de custo de integração
duplicada, a redução de fraude e o tempo de serviço mais rápido que não têm preço de mercado próprio.
Os engenheiros que constroem o serviço subjacente devem esperar que os responsáveis de programa peçam
dados de entrada para esta análise: custos unitários de transações (ver
[custo por transação](../cost-per-transaction/)), volumes esperados e custos de degradação/tempo de
inatividade. A disciplina mais importante a importar: descontar benefícios futuros, nomear
explicitamente a referência contrafactual (ver
[análise contrafactual](../counterfactual-analysis/)), e nunca apresentar uma única estimativa
pontual sem o seu intervalo de sensibilidade.

## Armadilhas

- **Contagem dupla de benefícios.** Contar tanto "tempo poupado" como "produtividade ganha desse
  tempo" como linhas de benefício separadas exagera o caso; o tempo poupado é o benefício, o seu uso
  a jusante não é um benefício adicional a menos que evidenciado independentemente.
- **Omitir custos deslocados.** Um esquema que move o congestionamento de uma estrada para outra, ou
  move a fraude de um canal para outro, não criou o benefício líquido que o seu VSPL de destaque
  implica — ver [deslocamento e atribuição](../displacement-and-attribution/).
- **Usar uma taxa de desconto privada.** Aplicar um custo de capital comercial (digamos 8–10%) em vez
  da taxa de desconto social subvaloriza sistematicamente os benefícios públicos de longo horizonte,
  como os ganhos de saúde e ambientais — ver [taxa de desconto social](../social-discount-rate/).
- **Monetizar o incontestado e passar por cima do contestado.** Se dois terços do benefício de uma
  proposta são uma poupança de eficiência confiantemente monetizada e um terço é um ganho de
  bem-estar frouxamente monetizado, o VSPL de destaque combina silenciosamente um número sólido com
  um frágil; reporte-os separadamente.

## Fontes

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
