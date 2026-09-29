# الحكومة كمنصة (Government as a Platform - GaaP)

الحكومة كمنصة هي استراتيجية بناء مكونات مشتركة وقابلة لإعادة الاستخدام — خدمة إشعارات، وخدمة مدفوعات، وخدمة هوية — مرة واحدة، مركزيًا، بحيث تستهلكها مئات الخدمات الحكومية الفردية بدلًا من أن تبني كل منها خدمتها الخاصة. وهي تعيد صياغة البنية التحتية الرقمية العامة باعتبارها مسألة اقتصاديات منصات: فالقيمة لا تكمن في أي عملية تكامل بعينها، بل في أن التكلفة الحدية للفريق *التالي* الذي يعتمدها تقترب من الصفر.

## لماذا يهم الأمر

وضعت خدمة الحكومة الرقمية (GDS) هذه الاستراتيجية رسميًا في منشورها الصادر عام 2015 بعنوان "الحكومة كمنصة"، مجادلة بأن الحكومة كانت تبني القدرات نفسها — قبول المدفوعات، وإشعار المستخدمين، والتحقق من الهوية، والبحث عن العناوين — بشكل منفصل في خدمة تلو الأخرى، كل واحدة منها تحمل عبء الشراء والتقييم الأمني والدعم المستمر الخاص بها. وكان البديل هو عدد صغير من المنصات المشتركة، تُبنى مرة واحدة بمعيار عالٍ وتُعاد استخدامها في كل مكان: GOV.UK Notify لإرسال رسائل البريد الإلكتروني والرسائل النصية والخطابات، وGOV.UK Pay لقبول المدفوعات عبر الإنترنت، وGOV.UK One Login (الخلف لبرنامج التحقق من الهوية السابق GOV.UK Verify) للتحقق من الهوية. والنطاق الذي بلغته هذه المنصات هو أوضح دليل على نجاح الاستراتيجية: فقد عالجت GOV.UK Pay معاملات تزيد قيمتها على 10 مليارات جنيه إسترليني عبر نحو 1,800 خدمة فردية — وبينما استغرق الأمر نحو أربع سنوات لمعالجة أول مليار جنيه إسترليني، فإنها الآن تعالج هذا المبلغ في نحو خمسة أشهر — بينما أرسلت GOV.UK Notify أكثر من 9 مليارات رسالة نيابة عن أكثر من 1,500 جهة حكومية. وكل خدمة من تلك الخدمات المتبنية تجنبت بناء وتأمين وصيانة بوابة دفع أو خط أنابيب رسائل خاص بها.

## الحسابات

```
Build cost per service (no platform) = N services × cost to build,
  secure-assess, and run one payment/notification/identity system

Platform cost = fixed platform build cost
              + marginal cost per adopting service (integration,
                configuration, ongoing platform-team support)

Reuse breaks even once:
  platform build cost < N × (per-service build cost − marginal
  integration cost)

For a mature platform, marginal cost per additional adopter approaches
the transaction/message fee alone — the fixed cost is amortized across
the whole government estate, not one department's budget, which is
why GaaP components are usually funded centrally rather than charged
at full cost-recovery to early adopters.
```

## مثال توضيحي

**سلطة محلية تتبنى GOV.UK Pay بدلًا من بناء بوابة دفع خاصة بها**:

```
Build-your-own estimate:
  PCI-DSS compliance work + integration + ongoing maintenance
  ≈ £85,000 build + £22,000/year maintenance

GOV.UK Pay adoption:
  Integration effort ≈ £12,000 (developer time)
  Transaction fees: government-to-citizen card payments typically
  charged at a small percentage + fixed fee per transaction, no
  separate PCI-DSS burden carried by the council
  ≈ £12,000 one-off, ongoing cost variable with volume, not fixed

First-year saving ≈ £85,000 − £12,000 = £73,000, before counting the
avoided £22,000/year maintenance and the avoided compliance risk of
holding card data in a council-run system at all — this second
category is the security value covered in
public-sector-cybersecurity-value.
```

إذا عمّمنا هذا التوفير البالغ 73,000 جنيه إسترليني على نحو 1,800 خدمة تستخدم الآن GOV.UK Pay، فإن إجمالي تكلفة البناء المتجنَّبة على مستوى الحكومة يبلغ مئات الملايين — واقتصاديات المنصة، لا أي عملية تكامل فردية، هي حيث تكمن قيمة الاستراتيجية فعليًا.

## الصلة بهندسة البرمجيات

الحكومة كمنصة حجة مباشرة لصالح [البناء مقابل الشراء في الحكومة](../build-vs-buy-in-government/): فحين يوجد مكوّن مشترك ومُقيَّم ويُدار جيدًا، نادرًا ما يكون بناء نظير مخصص له هو الخيار الأفضل من حيث [القيمة مقابل المال](../value-for-money/)، وهو يخفق في تحقيق البند 13 من [معيار الخدمة الرقمية](../digital-service-standard/) ("استخدام المعايير المفتوحة والمكونات والأنماط المشتركة والمساهمة فيها") بحكم التعريف تقريبًا. كما أنه يغيّر شكل [التكلفة الإجمالية للملكية في تقنية المعلومات الحكومية](../total-cost-of-ownership-in-government-it/): فتبني المنصة يستبدل بندًا رأسماليًا وصيانيًا كبيرًا ببند تشغيلي أصغر مرتبط بالاستخدام، وهو أسهل في التنبؤ وأسهل في إلغاء تمويله إذا أُوقفت الخدمة. ولإعادة الاستخدام المفتوح للمكونات نظير في [قيمة البيانات المفتوحة](../open-data-value/) — فكلاهما استراتيجيتان لمعاملة شيء تنتجه الحكومة مرة واحدة كبنية تحتية مشتركة بدلًا من أصل خاص بإدارة بعينها.

## المزالق

- **إعادة البناء الخفي**: تبني الفرق بهدوء تكاملات دفع أو إشعار خاصة بها لأن عملية الانضمام إلى المنصة أبطأ من القيام بذلك بنفسها — وهي مشكلة احتكاك في الحوكمة لا في التقنية، وهي تقوّض بصمت اقتصاديات إعادة الاستخدام التي تعتمد عليها الاستراتيجية بأكملها.
- **نقص تمويل فريق المنصة مقارنة بالقيمة التي يخلقها**: تتراكم القيمة لدى الإدارات المستهلكة بينما تقع التكلفة على فريق المنصة، مما يخلق خطر نقص استثمار مزمن ما لم يكن التمويل مركزيًا ومحميًا — وهي نسخة من مأساة المشاع.
- **قياس نجاح المنصة بالاستخدام وحده**: أرقام التبني (عدد الخدمات المنضمة، عدد الرسائل المرسلة) مؤشر استباقي، لا دليل على القيمة؛ الاختبار الحقيقي هو حسابات تكلفة البناء المتجنَّبة والمخاطر المتجنَّبة المذكورة أعلاه.
- **معاملة "المنصة" على أنها مرادف لـ"الكتلة الأحادية"**: تنجح مكونات الحكومة كمنصة لأن كل واحد منها يؤدي مهمة واحدة بإتقان بواجهة ضيقة ومستقرة — أما تجميع قدرات غير مترابطة في "منصة" واحدة فيعيد إنتاج مشكلة البناء المخصص على نطاق مختلف.

## المصادر

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
