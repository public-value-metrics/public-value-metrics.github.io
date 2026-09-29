# الإدماج الرقمي

الإدماج الرقمي هو انضباط ضمان ألا يتحول "رقمي بوصفه الخيار الافتراضي" إلى "رقمي حصراً" — أي
أن الخدمات العامة المصمَّمة حول أرخص قناة تظل تعمل من أجل المواطنين الذين لا يستطيعون أو لا
يريدون استخدامها بمفردهم دون مساعدة. وقد صاغت خدمة الحكومة الرقمية (GDS) الآلية التنفيذية
المحددة، "الدعم الرقمي المساعد" (assisted digital)، كمتطلب إلزامي لكل خدمة حكومية رقمية، لا
كإضافة اختيارية.

## لماذا يهم الأمر

وضعت الاستراتيجية الرقمية الحكومية لعام 2012 الطموح بوضوح: ينبغي بناء الخدمات الرقمية بصفتها
الخيار الافتراضي، لكن الاستراتيجية نفسها أقرّت بأن نحو 10% من البالغين في المملكة المتحدة لن
يتمكنوا من استخدامها دون مساعدة، والتزمت الجهات الحكومية بتوفير دعم رقمي مساعد — مسار بوساطة
بشرية، عبر الهاتف أو حضورياً أو عبر وسيط — كجزء من الخدمة، لا احتياط منفصل يُلحَق لاحقاً.
وهذا الالتزام هو الآن النقطة 5 من [معيار الخدمة الرقمية](../digital-service-standard/)،
"تأكد من أن الجميع يستطيع استخدام الخدمة". ويتتبع مؤشر Lloyds Banking Group السنوي للرقمنة
الاستهلاكية في المملكة المتحدة (UK Consumer Digital Index) حجم الاستبعاد المستمر: وجدت نسخة
2024 أن نحو 1.6 مليون شخص في المملكة المتحدة ما زالوا غير متصلين بالإنترنت، وأن هذه الفئة
تميل بشدة نحو من تتراوح أعمارهم بين 70 و79 عاماً، ومن يكسبون أقل من 35,000 جنيه إسترليني،
والمتقاعدين أو العاطلين عن العمل — وهي بالضبط الفئة السكانية الأكثر اعتماداً على الخدمات
العامة التي يُعاد تصميمها. ووجد التقرير نفسه أن 48% فقط من القوى العاملة البريطانية يستطيعون
إتمام جميع المهام العشرين في إطار المهارات الرقمية الأساسية (Essential Digital Skills)، مما
يعني أن الاستبعاد ليس اتصالاً ثنائياً، بل طيف من المهارة والثقة يفوته تماماً مقياس بسيط مثل
"يملك خط إنترنت عريض النطاق".

## الحسابات

الإدماج الرقمي إطار وفحص إنصاف أكثر من كونه معادلة واحدة، لكنه يتركب مع تقييم القيمة الكمي
عبر [الترجيح التوزيعي](../distributional-weighting/):

```
Naive channel-shift value:
  value = volume shifted × (cost_old − cost_digital)     [see channel-shift-savings]

Inclusion-adjusted value:
  value = (volume shifted × unweighted saving)
        − (excluded users × cost of assisted-digital provision)
        − (distributional weight adjustment for harm to excluded
           groups who lose access or face degraded service quality)

Assisted digital is not the residual cost of failure — it is a
designed channel with its own [cost-per-transaction](../cost-per-transaction/),
typically far higher per-transaction than self-service digital but
still usually cheaper than the legacy channel it partially replaces.
```

## مثال توضيحي

**خدمة استحقاقات وطنية على غرار Universal Credit**: 2.5 مليون طلب سنوياً، تُقدَّر حاجة نحو
10% من مقدمي الطلبات لدعم رقمي مساعد وفق افتراض التخطيط في الاستراتيجية الرقمية الحكومية.

```
Excluded/assisted-digital cohort = 2,500,000 × 10% = 250,000 claims/year

Assisted-digital channel cost (phone + face-to-face support,
staffed to handle vulnerability and complexity) ≈ £9.50/claim
  = 250,000 × £9.50 = £2,375,000/year

Self-service digital cost for the other 90% ≈ £0.40/claim
  = 2,250,000 × £0.40 = £900,000/year

Blended cost per transaction = (2,375,000 + 900,000) / 2,500,000
  = £1.31/claim

A design that skips assisted digital to hit a lower headline
cost-per-transaction (e.g. £0.40 blended, ignoring the 250,000
excluded claimants) doesn't eliminate that £2.375m cost — it
converts it into unclaimed entitlements, appeals, and downstream
crisis-service demand that lands on a different budget entirely.
```

## الصلة بهندسة البرمجيات

الدعم الرقمي المساعد قناة مصمَّمة، وهذا يعني أن لها واجهات واتفاقيات مستوى خدمة وقياسات مثل
أي قناة أخرى: أداة موظف معالجة عبر الهاتف، أو بوابة وسيط لخدمة Citizens Advice أو سلطة محلية،
أو مسار كشك حضوري. ومعاملتها كفكرة لاحقة — رقم هاتف بخط صغير بدلاً من قناة تُدرَس منذ مرحلة
الاستكشاف — هو الطريقة الأكثر شيوعاً التي تفشل بها الخدمات في تقييم النقطة 5 من
[معيار الخدمة الرقمية](../digital-service-standard/). والإدماج الرقمي هو عدسة الإنصاف على كل
موضوع آخر في هذا الفصل: فهو يضع سقفاً لمدى قوة تحقيق [وفورات تحويل القنوات](../channel-shift-savings/)،
وهو بند يجب إدراجه بصدق في [تكلفة المعاملة](../cost-per-transaction/)، وهو التطبيق المباشر
لـ[الترجيح التوزيعي](../distributional-weighting/) في سياق الخدمات الرقمية — فالوفر الذي يقع
بشكل غير متناسب على أشخاص مستبعدين رقمياً واقتصادياً أصلاً ينبغي ترجيحه إلى الأسفل، لا معاملته
معادلاً لوفر موزَّع بالتساوي على كامل السكان.

## المزالق

- **قراءة "رقمي بوصفه الخيار الافتراضي" على أنه "رقمي حصراً"**: إغلاق خط الهاتف أو المكتب
  بمجرد عبور الإقبال الرقمي عتبة معينة، دون التحقق من أن الفئة المتبقية لديها بديل قابل
  للاستخدام فعلياً.
- **قياس الإدماج بالاتصال الثنائي**: "يملك خط إنترنت عريض النطاق" أو "يملك هاتفاً ذكياً"
  مؤشر بديل ضعيف للقدرة على إتمام معاملة محددة — فجوة المهارات الرقمية الأساسية (48% فقط من
  القوى العاملة البريطانية يكملون المهام العشرين جميعها، وفق Lloyds 2024) تُظهر أن المهارة
  والثقة تهمّان بقدر ما يهم الوصول.
- **تسعير الدعم الرقمي المساعد كخطأ تقريب**: وضع ميزانية له كبند طارئ صغير بدلاً من قناة
  حقيقية لها [تكلفة معاملة](../cost-per-transaction/) خاصة بها، ثم التفاجؤ حين يكون ناقص
  التمويل والتوظيف عند الإطلاق.
- **استطلاع من أكملوا الرحلة الرقمية بنجاح فقط**: أبحاث الرضا وسهولة الاستخدام التي تُجرى
  بالكامل داخل الخدمة تفوت من لم يصلوا إلى هذا الحد أصلاً، وهم بالضبط الفئة السكانية التي
  يُقصد بعمل الإدماج الرقمي حمايتها.

## المصادر

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
