# مقاييس الثقة والمشروعية

المشروعية والدعم أحد أضلاع "المثلث الاستراتيجي" الثلاثة لمارك مور في كتاب *Creating Public
Value* (1995) — إلى جانب القيمة العامة نفسها والطاقة التشغيلية — وهو الضلع الأكثر تركاً دون
قياس، لأنه على عكس ميزانية أو عدّ مخرجات، لا يوجد للمشروعية رقم واحد واضح مرتبط بها. ومقاييس
الثقة والمشروعية هي عائلة المقاييس البديلة التي تستخدمها الحكومات لسدّ تلك الفجوة: استطلاعات
الثقة المؤسسية، وتقييمات ثقة هيئات الرقابة، وبيانات الشكاوى والاستئنافات، ومؤشرات الدعم
السياسي/التشريعي.

## لماذا يهم الأمر

حجة مور هي أن مديراً عاماً يُسلِّم قيمة حقيقية لكنه يفقد المشروعية السياسية والجماهيرية سيفقد
في النهاية البيئة المُضفية للتفويض اللازمة لمواصلة تسليمها — يُقتطَع التمويل، وتُضيَّق
التفويضات، وتُجوَّع الخدمة بصرف النظر عن مدى جودة نتائجها. فالمشروعية إذن ليست فكرة علاقات
عامة لاحقة تُلحَق ببطاقة أداء تسليم؛ بل مُدخل حامل للحمل بشأن ما إذا كانت المهمة تستطيع
الاستمرار على الإطلاق، ولهذا تحتل منظوراً مساوياً في [بطاقة القيمة العامة](../public-value-scorecard/)
بدلاً من هامش. وبرنامج استطلاع "الثقة في الحكومة" (Trust in Government) الصادر عن منظمة
التعاون الاقتصادي والتنمية (OECD) هو المحاولة الرائدة عبر الدول لقياس هذا كمياً: فهو يتتبع
حصة المواطنين عبر الدول الأعضاء في المنظمة الذين يقولون إن لديهم ثقة في حكومتهم الوطنية،
وتُظهر بياناته طويلة الأمد أن الثقة حساسة جداً للصدمات — فقد أنتجت كل من الأزمة المالية لعام
2008 وجائحة كوفيد-19 تقلبات حادة على المستوى الوطني، غالباً ما تبعها تعافٍ جزئي فقط، ويجد
تحليل المنظمة باستمرار أن *الكفاءة* المُدرَكة (هل تُسلِّم الحكومة ما تقوله) و*الإنصاف/النزاهة*
المُدرَكة (هل يُنظَر إلى الحكومة على أنها تعمل دون فساد أو محاباة) هما أقوى محركين لرقم
الثقة، متمايزَين عن الرضا عن أي معاملة منفردة. وتحاول الحكومات بشكل متزايد تفعيل المشروعية
على مستوى أكثر تفصيلاً أيضاً — فالمنظمون والمفتشيات المستقلة البريطانية (المكتب الوطني
للتدقيق، وأمين المظالم البرلماني وخدمة الصحة، والمنظمون القطاعيون مثل Ofsted وCare Quality
Commission) تعمل كضوابط مشروعية مؤسسية، تُحوِّل "هل ما زال الجمهور يثق بهذه الخدمة" إلى
تقييمات قابلة للتدقيق.

## الحسابات

الثقة والمشروعية موضوع على شكل إطار عمل تكون مقاييسه الكمية البديلة القابلة للاستخدام:

```
Institutional trust index (OECD-style)
  = % of survey respondents answering "yes" to a confidence-in-government question,
    tracked over time, disaggregated by demographic group

Legitimacy proxy set (no single number substitutes for the construct):
  - Upheld complaints per 1,000 service users (ombudsman or internal complaints data)
  - Judicial review / appeals success rate against the body's decisions
  - Independent regulator/inspectorate rating (e.g. "outstanding" to "inadequate" bands)
  - Legislative/oversight committee confidence votes or critical report frequency
  - Freedom of information request volume and disclosure/refusal rate, as a proxy
    for perceived transparency

Legitimacy is corroborated, not calculated: a defensible legitimacy assessment
triangulates several of the above rather than relying on any single proxy.
```

## مثال توضيحي

**هيئة ضرائب وطنية**: تثليث مشروعية لتقرير قيمة عامة سنوي.

```
OECD-style trust proxy (department-specific confidence survey):
  58% of respondents say they trust the authority to "treat me fairly" (down from
  64% two years prior)

Complaints data:
  Upheld complaints: 4.2 per 1,000 taxpayer interactions (up from 3.1 per 1,000)

Ombudsman referrals:
  Referrals to the independent Adjudicator's Office: 1,850 in the year, of which
  61% upheld in full or part against the authority (up from 48% the prior year)

Reading across all three: trust is falling, upheld complaints are rising, and
independent ombudsman findings are increasingly siding against the authority —
three independent signals converging on the same direction, which is what makes
this a credible legitimacy finding rather than noise in any one series.
```

رقم واحد من هذه الأرقام يتحرك بمفرده سيكون دليلاً ضعيفاً؛ أما ثلاثة مقاييس مستقلة تتحرك معاً
خلال الفترة نفسها فهو النمط الذي يجعل ادّعاء المشروعية مدافَعاً عنه.

## الصلة بهندسة البرمجيات

نادراً ما تُنتَج مقاييس المشروعية من لوحة معلومات فريق واحد، وهذا في حد ذاته الدرس التصميمي:
ابنِ خطوط أنابيب إبلاغ تستطيع استيعاب ومطابقة بيانات من مصادر خارجية مستقلة (أنظمة قضايا أمين
المظالم، وتغذيات تقييمات المنظمين، ومورّدي الاستطلاعات) بدلاً من تصميم إبلاغ المشروعية كمقياس
داخلي فقط، لأن ادّعاءات المشروعية ذات المصدر الداخلي ("نُقيِّم أنفسنا بأننا جديرون بالثقة")
تحمل وزناً استدلالياً ضئيلاً — وهي مشكلة الاستقلالية نفسها المُشار إليها لمنظور المشروعية في
[بطاقة القيمة العامة](../public-value-scorecard/). وتستحق خطوط أنابيب بيانات الشكاوى
والاستئنافات صرامة جودة بيانات مماثلة لأي خط أنابيب نتائج يُغذِّي عقود
[الدفع مقابل النتائج](../payment-by-results-and-social-impact-bonds/)، لأن مجموعة بيانات
شكاوى ناقصة الإبلاغ أو سيئة التصنيف تُقلِّل بصمت من شأن مشكلة مشروعية قبل أن تظهر في استطلاع
ثقة بعد عام. انظر [مقاييس رضا المواطن](../citizen-satisfaction-metrics/) للنظير على مستوى
المعاملة لهذا المقياس على مستوى المؤسسة، و[القيمة العامة](../public-value/) لإطار المثلث
الاستراتيجي الكامل لمور الذي ينتمي إليه هذا الضلع.

## المزالق

- **معاملة الرضا كمقياس بديل للمشروعية**: يمكن لمواطن أن يكون راضياً عن واجهة معاملة منفردة
  بينما يفتقر إلى الثقة بالمؤسسة عموماً (أو العكس) — انظر [مقاييس رضا المواطن](../citizen-satisfaction-metrics/)
  لسبب وجوب الإبلاغ عن الاثنين منفصلين.
- **الاعتماد على مقياس واحد مُبلَّغ عنه ذاتياً**: استطلاع ثقة يُجرى داخلياً دون تأييد مستقل
  (بيانات أمين المظالم، تقييمات المنظمين) يسهل رفضه كتصحيح ذاتي؛ ثلِّث.
- **تجاهل التصنيف الديموغرافي**: يمكن لأرقام ثقة وطنية إجمالية أن تُخفي تبايناً حاداً في
  المشروعية بين فئات محددة (بحسب العمر، أو العرق، أو الدخل، أو المنطقة) — وتُصنِّف إصدارات
  الثقة في الحكومة الخاصة بالمنظمة نفسها لهذا السبب بالضبط.
- **قراءة انخفاض واحد مدفوع بصدمة كاتجاه دائم**: تتحرك أرقام الثقة بحدة حول الأزمات (الانهيارات
  المالية، والجوائح، والفضائح البارزة) وتتعافى جزئياً؛ ولا ينبغي استقراء نقطة بيانات واحدة
  بعد صدمة إلى تراجع طويل الأمد دون مزيد من البيانات.

## المصادر

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
