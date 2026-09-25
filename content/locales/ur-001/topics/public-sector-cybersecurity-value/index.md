# سرکاری شعبے کی سائبر سیکیورٹی کی قدر (Public Sector Cybersecurity Value)

سرکاری شعبے کی سائبر سیکیورٹی کی قدر خطرے میں کمی کی قیمت لگانے کا نظم و ضبط ہے: شہریوں کے ڈیٹا کی
خلاف ورزی کو کم امکان بنانا کیا مالیت رکھتا ہے، جبکہ سیکیورٹی پر خرچ جب کام کرتا ہے تو کوئی نظر آنے
والی پیداوار پیدا نہیں کرتا اور جب ناکام ہو تو بہت نمایاں پیداوار پیدا کرتا ہے؟ کسی ایسی سروس کے لیے
جو فوائد کے ریکارڈز، صحت کا ڈیٹا، یا ٹیکس کے ریکارڈز رکھتی ہو، یہی "کام کرتے وقت غیر مرئی" خاصیت
بالکل وہی وجہ ہے جس کی بنا پر اسے ایک واضح قدر کی دلیل درکار ہے، صرف کمپلائنس کی ایک ٹِک نہیں۔

## یہ کیوں اہم ہے

برطانیہ کے National Cyber Security Centre کا Cyber Assessment Framework (CAF) سرکاری اداروں کو
سیکیورٹی کو ایک قابلِ جانچ، نتائج پر مبنی نظم و ضبط بنانے کا منظم طریقہ فراہم کرتا ہے بجائے چیک لسٹ
کے: یہ چار اعلیٰ سطحی مقاصد (سیکیورٹی خطرے کا انتظام، سائبر حملے سے تحفظ، سائبر سیکیورٹی واقعات کی
شناخت، اور واقعات کے اثر کو کم سے کم کرنا) کو معاون نتائج میں تقسیم کرتا ہے جن کے خلاف کسی نظام کے
مالک کو جانچا جا سکتا ہے، اسی روح میں جیسے
[digital-service-standard](../digital-service-standard/) کا نکتہ 9 ("ایک محفوظ سروس بنائیں جو
صارفین کی رازداری کا تحفظ کرے") ہے۔ CAF کی جانچ جس چیز سے تحفظ فراہم کرتی ہے اس کی ایک دستاویزی
قیمت ہے: IBM کی Cost of a Data Breach Report شعبے کے حساب سے اوسط خلاف ورزی کی لاگت کو ٹریک کرتی ہے،
اور اس نے مسلسل پایا ہے کہ سرکاری شعبہ مالیات یا صحت کی دیکھ بھال کے مقابلے میں دائرے کے نچلے سرے پر
ہے — حالیہ ایڈیشنز سرکاری شعبے کی اوسط تقریباً $2.6–2.9 ملین فی خلاف ورزی رکھتے ہیں — مگر "مالیات سے
کم" کا مطلب "کم" نہیں ہے، اور حکومتی خلاف ورزیاں ایسی لاگتیں اٹھاتی ہیں جنہیں رپورٹ کے اعداد و شمار
مکمل طور پر شامل نہیں کرتے: ڈیجیٹل ذرائع پر شہریوں کے اعتماد کا نقصان، جو
[چینل-شفٹ بچت](../channel-shift-savings/) کے کاروباری معاملوں کے انحصار کردہ
[ڈیجیٹل استعمال](../channel-shift-savings/) کو دبا دیتا ہے، اور اس ڈیٹا کو بے نقاب کرنے کی سیاسی اور
قانونی لاگت جو ریاست نے شہریوں کو دینے پر مجبور کیا تھا۔

## ریاضیاتی بنیاد

سیکیورٹی سرمایہ کاری کی قدر اسی طرح لگائی جاتی ہے جیسے کسی بھی خطرہ-کم کرنے والے خرچ کی قدر لگائی
جاتی ہے: متوقع نقصان میں کمی کے طور پر، کلاسیکی رسک-مینجمنٹ شناخت کا استعمال کرتے ہوئے۔

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Value of a security control =
  ALE_before_control − ALE_after_control − annual cost of the control

A control is worth funding when:
  (ALE_before − ALE_after) > annual cost of the control

CAF assessment doesn't directly output a probability, but a service's
CAF outcome profile (which contributing outcomes are "achieved",
"partially achieved", or "not achieved") is a reasonable proxy input
to estimate ARO — a system with unmanaged privileged access or no
tested incident response plan has a materially higher realistic ARO
than one with both in place.
```

## عملی مثال

**کاؤنٹی کونسل کا کیس-مینجمنٹ نظام جو 40,000 رہائشیوں کے سماجی نگہداشت کے ریکارڈز رکھتا ہے**:

```
Single Loss Expectancy (breach cost), using a public-sector-sector
average from a recent IBM Cost of a Data Breach Report ≈ £2.1m
(converted, order-of-magnitude figure — always re-derive from the
current report edition rather than reusing a fixed number)

Current ARO (unmanaged privileged access, no tested incident
response, per an internal CAF self-assessment showing multiple
"not achieved" outcomes) ≈ estimated 8% per year
  ALE_before = £2.1m × 0.08 = £168,000/year

Proposed control: privileged access management + tested incident
response plan, moving the relevant CAF outcomes to "achieved",
estimated to cut ARO to 3%/year
  ALE_after = £2.1m × 0.03 = £63,000/year

Annual cost of the control (tooling + process + testing) = £45,000

Value of the control = (168,000 − 63,000) − 45,000 = £60,000/year
  net positive — fund it. The arithmetic also shows the control
  would still be worth funding at nearly triple the cost, which is
  the kind of sensitivity check that should accompany any ALE figure
  built on estimated probabilities.
```

## سافٹ ویئر انجینئرنگ سے تعلق

انجینئرز ALE کی مساوات کے زیادہ تر لیورز کے مالک ہوتے ہیں: رسائی کنٹرول کا ڈیزائن، انحصار اور پیچ
کی صفائی، لاگنگ اور شناخت کا احاطہ، اور واقعے کے ردعمل کے ٹولز، یہ سب ARO کی مد کو براہِ راست حرکت
دیتے ہیں، یہی وجہ ہے کہ CAF کی جانچ کسی پالیسی آڈٹ جتنی ہی ایک تکنیکی فن تعمیر کے جائزے کی طرح لگتی
ہے۔ یہ [تکنیکی قرض بطور عوامی قدر کا زوال](../technical-debt-as-public-value-erosion/) کی سب سے
شدید شکل ہے — بغیر پیچ کیے، بغیر نگرانی کے، کمزور رسائی کنٹرول والے نظام ایسا قرض ہیں جس کا سود ادا
کرنا مسلسل بوجھ نہیں بلکہ tail خطرہ ہے — اور اسے
[سرکاری آئی ٹی میں کل ملکیتی لاگت](../total-cost-of-ownership-in-government-it/) کے ساتھ ملایا جانا
چاہیے تاکہ سیکیورٹی خرچ کو نظام کی اصل چلانے کی لاگت سے الگ نہ سمجھا جائے۔ یہ Green Book کے تحت
[پیسے کے عوض قدر](../value-for-money/) کے جائزوں کے لیے بھی ایک براہِ راست ان پٹ ہے: خطرے کے مطابق
ایڈجسٹ کی گئی لاگت کسی بھی آپشنز کے جائزے کے "لاگت" کے پہلو کا حصہ ہے، نہ کہ آخر میں جوڑا گیا ایک
بعد کا خیال۔

## ممکنہ خامیاں

- **CAF کی خود جانچ کو خود سیکیورٹی سمجھنا**: مکمل شدہ جانچ سیکیورٹی کی حالت بیان کرتی ہے؛ یہ اسے
  پیدا نہیں کرتی — قدر حاصل شدہ نتائج میں ہے، دستاویز میں نہیں۔
- **عالمی اوسط خلاف ورزی کی لاگتوں کو بغیر ایڈجسٹمنٹ کے مقامی تخمینے کے طور پر استعمال کرنا**: IBM
  کے اعداد و شمار بڑے، متنوع نمونوں کے اوسط ہیں؛ کسی چھوٹے مقامی ادارے کا حقیقت پسندانہ واحد نقصان
  کا اندازہ شاذ و نادر ہی کسی قومی حکومتی محکمے جیسا ہوتا ہے۔
- **سرمایہ کاری کے فیصلوں میں tail-خطرے کی نفسیات کو نظر انداز کرنا**: کم سالانہ احتمال سیکیورٹی
  خرچ کو غیر معینہ مدت کے لیے ملتوی کرنا آسان بنا دیتا ہے، اسی سال تک جب ایسا نہ ہو — ALE کے حساب کو
  AROs کی ایک رینج کے خلاف حساسیت جانچنا، جیسا کہ عملی مثال میں ہے، اس کا مقابلہ کرتا ہے۔
- **صرف IBM طرز کی خلاف ورزی کی لاگت شمار کرنا، اعتماد کی لاگت نہیں**: کوئی خلاف ورزی جو شہریوں کی
  ڈیجیٹل ذرائع استعمال کرنے کی رضامندی کو دباتی ہے، وہ برسوں بعد تک
  [چینل-شفٹ بچت](../channel-shift-savings/) کے معاملے کو کمزور کرتی رہتی ہے، ایک ایسی لاگت جو
  خلاف ورزی کی لاگت کے تخمینوں میں شاذ و نادر ہی شامل ہوتی ہے۔

## ماخذ

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
