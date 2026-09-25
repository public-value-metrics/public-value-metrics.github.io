# تكلفة المعاملة

تكلفة المعاملة هي مقياس اقتصاديات الوحدة الرئيسي لخدمة حكومية رقمية: إجمالي تكلفة تقديم قناة
مقسوماً على عدد المعاملات المُنجزة عبرها. كانت الرقم الرائد على منصة الأداء القديمة لموقع
GOV.UK، وهي الرقم الذي موّل عقداً من استثمار "رقمي بوصفه الخيار الافتراضي" — وهذا بالضبط سبب
كونها أيضاً المقياس الأكثر عرضة للتلاعب.

## لماذا يهم الأمر

وضع تقرير الكفاءة الرقمية الصادر عن مكتب مجلس الوزراء (Cabinet Office) عام 2012 مقارنة
تكلفة القنوات بصيغة رسخت في الأذهان: وُجد أن المعاملات الرقمية تكلف نحو 20 ضعفاً أقل من
الهاتف ونحو 50 ضعفاً أقل من المقابلة المباشرة، بأرقام توضيحية من الحكومة المحلية تبلغ نحو
0.15 جنيه إسترليني لكل معاملة عبر الويب مقابل 2.83 جنيه إسترليني عبر الهاتف و8.62 جنيه
إسترليني مقابلةً مباشرة. وأصبحت هذه المقارنة الوحيدة مبرراً لإعادة تصميم الخدمات النموذجية
الخمس والعشرين المذكورة في الاستراتيجية الرقمية الحكومية (Government Digital Strategy)،
ولكل حالة تجارية في الجهات الحكومية استشهدت منذ ذلك الحين بوفورات تحويل القنوات. والرقم مفيد
فعلاً كإشارة إلى رتبة الحجم، لكن النسبة تعتمد كلياً على ما يُحتسَب على كل جانب: فالتكلفة
العادلة لقناة الهاتف تشمل موظفي مركز الاتصال، وعقد الاتصالات الهاتفية، والتدريب والمنشآت؛
والتكلفة العادلة للقناة الرقمية تشمل الاستضافة، ورواتب فريق المنتج المستمرة، ووقت مكتب الدعم
للرحلات الفاشلة، والقناة الرقمية المدعومة (assisted-digital) التي تشترطها النقطة 5 من
[معيار الخدمة الرقمية](../digital-service-standard/). واستبعاد ما يكفي من هذه العناصر من
الجانب الرقمي يجعل أي خدمة تبدو رخيصة.

## الحسابات

```
Cost per transaction = total allocated channel cost / completed transactions

Total allocated channel cost should include:
  + hosting and infrastructure
  + product/engineering/support team cost (amortized)
  + content and service design cost (amortized)
  + assisted-digital / accessibility support cost
  + failure-demand cost (users who fail digital and fall back to phone)
  − one-off build cost is amortized over expected service life, not
    expensed entirely into year one

The common accounting trick:
  "Marginal cost per transaction" (hosting only, once built) is quoted
  as if it were "average cost per transaction" (total cost including
  the team that keeps building and running it). The two can differ by
  10x or more for a service with a large, active delivery team.
```

## مثال توضيحي

**خدمة تجديد ضريبة المركبات**: 4 ملايين معاملة سنوياً.

```
Marginal-only figure (the trick):
  Hosting + payment processing only = £180,000/year
  Cost per transaction = 180,000 / 4,000,000 = £0.045
  → headline figure quoted in a business case

Fully-loaded figure (the honest one):
  Hosting + payment                    £180,000
  Product/engineering team (8 FTE)     £720,000
  Support desk (failed/queried txns)   £310,000
  Assisted-digital phone line          £140,000
  Total                                £1,350,000
  Cost per transaction = 1,350,000 / 4,000,000 = £0.3375

The fully-loaded figure is still roughly 8x cheaper than the £2.83
phone-channel comparator from the Digital Efficiency Report — a real
and defensible saving — but 7.5x higher than the marginal-only figure
quoted in the shortcut version. Both numbers are "true"; only one is
comparable to the phone-channel cost it's being set against.
```

## الصلة بهندسة البرمجيات

تكلفة المعاملة هي النقطة التي تتحول فيها قرارات البنية المعمارية إلى رقم مالي: فالخدمة التي
تتوسع تلقائياً بسلاسة وتحتاج تدخلاً يدوياً قليلاً تخفض هذا الرقم بمرور الوقت؛ أما الخدمة التي
تولّد حجماً كبيراً من تذاكر الدعم بسبب حالات خطأ مربكة فترفعه بصرف النظر عن كفاءة الاستضافة.
وهي المقياس المرافق الطبيعي للنقطة 10 من [معيار الخدمة الرقمية](../digital-service-standard/)
("حدِّد ماذا يعني النجاح، وانشر بيانات الأداء") ولـ
[معايير الخدمة ومقاييس المعاملات](../service-standards-and-transaction-metrics/)، التي تضع
مجموعة مؤشرات الأداء الأوسع التي يندرج هذا الرقم ضمنها. وتُغذّي أيضاً مباشرةً حسابات
[وفورات تحويل القنوات](../channel-shift-savings/)، وينبغي مطابقتها مع
[إجمالي تكلفة الملكية في تقنية المعلومات الحكومية](../total-cost-of-ownership-in-government-it/)
حتى لا تُسقَط تكاليف المنصة والخدمات المشتركة بصمت.

## المزالق

- **تكلفة هامشية متنكرة في زي تكلفة متوسطة**: الاستشهاد بتكلفة الاستضافة فقط بعد بناء الخدمة،
  مع إغفال الفريق المستمر الذي يصونها ويطوّرها ويدعمها — انظر المثال التوضيحي أعلاه.
- **استبعاد تكلفة الدعم الرقمي المساعد**: القناة ليست متوافقة مع "رقمي بوصفه الخيار
  الافتراضي"، ولا تُلتقَط تكلفتها الحقيقية، إذا كانت وسيلة الهاتف/الورق الاحتياطية التي
  يشترطها [الإدماج الرقمي](../digital-inclusion/) تُحتسَب منفصلة أو تُتجاهَل.
- **تجاهل طلب الفشل**: المعاملات التي تبدأ رقمياً وتفشل، مولِّدة مكالمة هاتفية أو استمارة
  ورقية على أي حال، هي تكلفة على القناة الرقمية، لا على القناة التي تلتقط الفشل.
- **مقارنة معاملات مختلفة التعقيد عبر القنوات**: تتعامل المكالمات الهاتفية بشكل غير متناسب مع
  الحالات الصعبة (معالون متعددون، تصحيح أخطاء، مقدمو طلبات مستضعفون)؛ ومقارنة متوسط تكلفة
  الهاتف بمتوسط التكلفة الرقمية يبالغ في النسبة ما لم يتطابق مزيج المعاملات.

## المصادر

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
