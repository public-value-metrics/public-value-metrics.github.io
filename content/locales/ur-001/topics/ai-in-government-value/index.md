# حکومت میں AI کی قدر (AI in Government Value)

حکومت میں AI کی قدر یہ تقاضا ہے کہ کسی عوامی خدمت میں استعمال ہونے والا AI نظام بھی وہی
پیسے-کے-عوض-قدر اور عوامی قدر کا معیار پورا کرے جو کسی بھی دوسرے خرچ کے فیصلے پر لاگو ہوتا ہے — نہ
اس لیے کم سخت کہ یہ نیا ہے، اور نہ اس لیے زیادہ سخت کہ اس سے خوف محسوس ہوتا ہے۔ یہ وہ سوال ہے جس کا
جواب کسی ڈیلیوری ٹیم کو AI فیچر لانچ ہونے سے پہلے دینا ہوگا، بعد میں نہیں: کیا یہ اپنی لاگت سے زیادہ
قدر پیدا کرتا ہے، جب یقین دہانی، نگرانی اور خطرے کو ایمانداری سے شمار کیا جائے؟

## یہ کیوں اہم ہے

برطانیہ کے Central Digital and Data Office (CDDO) نے 2024 میں اپنا Generative AI Framework for
Government شائع کیا، جو جون 2023 کی ابتدائی عبوری رہنمائی پر استوار تھا، اور اسے دس اصولوں کے گرد
ترتیب دیا جو یہ بیان کرتے ہیں کہ جنریٹو AI کیا ہے، اس کے اخلاقی مضمرات، ٹول کی سیکیورٹی، معیار کی
یقین دہانی کے کنٹرولز، جنریٹو AI کے مکمل لائف سائیکل کا انتظام، حقیقی استعمال کے معاملات کی نشاندہی،
بین الحکومتی تعاون، شفافیت، مہارتیں، اور نگرانی۔ فریم ورک کا "بامعنی انسانی کنٹرول" اور مکمل لائف
سائیکل انتظام پر اصرار اس لیے ہے کہ AI پروجیکٹ کے کاروباری معاملات میں ایک مخصوص ناکامی کا انداز
پایا جاتا ہے جو دیگر IT اخراجات میں نہیں ہوتا: ایک پائلٹ کا نمایاں پیداواری عدد پیدا کرنا اور بڑھا
چڑھا کر پیش کرنا آسان ہے، کیونکہ اسے اس تصدیق، تصحیح، اور نگرانی کے بوجھ کا حساب لگائے بغیر ناپا
جاتا ہے جو یہ ٹول پیدا کرتا ہے۔ فریم ورک کے ساتھ ساتھ، Algorithmic Transparency Recording Standard
(ATRS) عوامی اداروں کو تقاضا کرتا ہے کہ وہ مقصد، استعمال شدہ ڈیٹا، کارکردگی، منصفانہ ہونے کی
جانچ، اور انسانی نگرانی کے انتظامات کے بارے میں ایک معیاری ریکارڈ شائع کریں — ان الگورتھمی اوزاروں
کے لیے جو افراد کے بارے میں فیصلوں پر نمایاں اثر رکھتے ہیں — جس سے AI نظام کی یقین دہانی کی لاگت
عوامی ریکارڈ کا معاملہ بن جاتی ہے، کسی ٹیم کا خاموشی سے چھوڑا جا سکنے والا اندرونی تخمینہ نہیں۔

## ریاضیاتی بنیاد

AI اپنانا معیاری [پیسے کے عوض قدر](../value-for-money/) کی جانچ کے اضافے کے طور پر جانچا جاتا ہے،
اس کی جگہ نہیں، جس میں AI سے مخصوص اصطلاحات کو واضح کیا جاتا ہے نہ کہ ایک ہی "پیداواری فائدے" کے عدد
میں سمو دیا جاتا ہے:

```
Net value of an AI system =
    productivity gain (time saved × loaded staff cost)
  − licence/compute cost
  − human verification and oversight cost (checking AI output before
    it's acted on — this does not shrink to zero even for mature tools)
  − ATRS documentation and ongoing monitoring cost
  − risk-adjusted cost of harm from errors, bias, or hallucination,
    weighted by who bears that harm (distributional-weighting)

A pilot productivity figure that omits the oversight term is not
comparable to a business-as-usual cost baseline that already includes
equivalent human review — see ai-productivity-in-the-public-sector
for the fuller productivity-measurement discipline this borrows from.
```

## عملی مثال

**ایک مقامی اتھارٹی جو کونسل ٹیکس کے معمول کے استفسارات کے پہلے جوابات تیار کرنے کے لیے ایک جنریٹو
AI ٹول استعمال کرتی ہے**: سالانہ 25,000 استفسارات، پہلے یہ سب کیس ورکرز کے ذریعے اوسطاً 14 منٹ فی
استفسار میں نمٹائے جاتے تھے، جس کی بوجھ شدہ عملے کی لاگت £34 فی گھنٹہ ہے۔

```
Baseline (no AI) cost:
  25,000 × (14/60) × £34 = £198,333/year

Pilot headline claim: AI drafts a response in 90 seconds,
caseworker "just reviews and sends" — claimed new time is 3 minutes
  25,000 × (3/60) × £34 = £42,500/year
  → claimed saving £155,833/year (looks transformational)

Fully-loaded figure, measured after 3 months live rather than in the
pilot's hand-picked test cases:
  Actual review + correction time per response: 6 minutes (drafts
  need real editing for complex or emotionally sensitive enquiries)
  25,000 × (6/60) × £34 = £85,000/year
  Licence/compute cost: £38,000/year
  ATRS documentation and quarterly bias/quality monitoring: £14,000/year
  Total cost = 85,000 + 38,000 + 14,000 = £137,000/year

Real saving = 198,333 − 137,000 = £61,333/year — genuine and worth
keeping, but well under half the pilot's headline claim, and it
required an honest oversight-time measurement, not the pilot's
best-case one, to find.
```

## سافٹ ویئر انجینئرنگ سے تعلق

یہیں پر [سرکاری شعبے میں AI پیداواریت](../ai-productivity-in-the-public-sector/) اور یہ موضوع آپس
میں ملتے ہیں: عوامی خدمات میں AI فیچرز بنانے والی انجینئرنگ ٹیمیں وہ آلہ کاری فراہم کرتی ہیں جو
عملی مثال میں "حقیقی" عدد کو ممکن بناتی ہے — حقیقی جائزہ لینے کا وقت، ڈرافٹ اور بھیجے گئے جواب کے
درمیان تدوینی فاصلہ، اور بڑھوتری کی شرح کو لاگ کرنا، نہ کہ پائلٹ کے ڈیمو حالات پر بھروسہ کرنا۔ AI
فیچرز کو [ڈیجیٹل سروس معیار](../digital-service-standard/) کے نکتہ 9 (محفوظ سروس، صارف کی رازداری)
کے خلاف جانچنا چاہیے اور [سرکاری شعبے کی سائبر سیکیورٹی کی قدر](../public-sector-cybersecurity-value/)
کے ساتھ حوالہ دینا چاہیے جہاں ٹول شہریوں کے ڈیٹا کو چھوتا ہو، اور کسی بھی AI نظام کو جو افراد کے بارے
میں فیصلوں پر نمایاں اثر رکھتا ہو، جانچ کے لیے تیار سمجھے جانے سے پہلے ATRS ریکارڈ کی ضرورت ہوتی ہے،
بالکل اسی طرح جیسے کسی سروس کو لائیو ہونے سے پہلے پاس شدہ
[ڈیجیٹل سروس معیار](../digital-service-standard/) کی جانچ درکار ہوتی ہے۔

## ممکنہ خامیاں

- **AI-واشنگ**: موجودہ قاعدہ بنیاد خودکاری کو "AI" کا نام دے کر AI اپنانے کے لیے مختص فنڈنگ یا توجہ
  تک رسائی حاصل کرنا، بغیر اس درستگی یا تعصب کے خطرات کے جو دراصل فریم ورک کی اضافی جانچ پڑتال کا
  جواز بنتے ہیں۔
- **پائلٹ پیداواریت کو ناپنا، پیداواری عمل کی پیداواریت کو نہیں**: پائلٹس منتخب شدہ ٹیسٹ کیسز پر
  مصروف، توجہ دینے والے جائزہ لینے والوں کے ساتھ چلتے ہیں؛ پیداواری عمل پورے پیچیدہ کیس ملاپ پر چلتا
  ہے ان جائزہ لینے والوں کے ساتھ جو وقت کے ساتھ خودکاری کے تعصب کا شکار ہو جاتے ہیں اور نتائج کی کم
  جانچ کرتے ہیں — دونوں ایماندار نگرانی کی لاگت کے عدد کو مسخ کرتے ہیں۔
- **ATRS رجسٹریشن کو چھوڑ دینا کیونکہ ٹول "واقعی خودکار فیصلہ سازی نہیں ہے"**: معیار کا حد یہ ہے کہ
  کسی فرد کے بارے میں فیصلے پر نمایاں اثر ہو، جس پر شہریوں کے سامنے آنے والے زیادہ تر AI ڈرافٹنگ یا
  ٹرائیج ٹولز پورا اترتے ہیں، چاہے تکنیکی طور پر کوئی انسان آخری منظوری دے۔
- **غلطیوں کے تقسیمی اثر کو نظرانداز کرنا**: تمام صارفین پر اوسط نکالی گئی کسی AI نظام کی خطا کی شرح
  مخصوص گروہوں کے لیے کہیں زیادہ خطا یا تعصب کی شرح چھپا سکتی ہے؛
  [تقسیمی وزن دہی](../distributional-weighting/) کو مجموعی درستگی کے عدد پر نہیں بلکہ خطرے سے
  موافقت شدہ نقصان کی اصطلاح پر لاگو کرنا چاہیے۔

## ماخذ

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
