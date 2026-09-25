# چینل شفٹ کی بچت (Channel Shift Savings)

چینل شفٹ کی بچت وہ متوقع لاگت میں کمی ہے جو ٹرانزیکشن کے حجم کو مہنگے چینلز — فون، آمنے سامنے کاؤنٹر،
کاغذی ڈاک — سے سستی ڈیجیٹل خود خدمتی کی طرف منتقل کرنے سے حاصل ہوتی ہے۔ یہ "ڈیجیٹل بذریعہ ڈیفالٹ" کے
پیچھے مالیاتی انجن ہے، اور یہ کاروباری معاملے کی وہ لائن آئٹم بھی ہے جس کے غلط ہونے کا سب سے زیادہ
امکان ہے، کیونکہ جس مفروضے پر یہ کھڑی ہے — کہ ڈیجیٹل اپنانے میں اضافے کے ساتھ آف لائن چینلز سکڑتے
ہیں — صرف کبھی کبھی درست ہوتا ہے۔

## یہ کیوں اہم ہے

Digital Efficiency Report کے [فی ٹرانزیکشن لاگت](../cost-per-transaction/) اعداد و شمار کا استعمال
کرتے ہوئے حساب کتاب ناقابلِ تردید نظر آتا ہے: ایک ملین ٹرانزیکشنز کو £8.62 کی آمنے سامنے وزٹ سے £0.15
کی ڈیجیٹل وزٹ کی طرف منتقل کریں تو بچت £8 ملین سے زیادہ بنتی ہے۔ مگر بچت تب ہی دوبارہ تعیناتی کے لیے
جاری کردہ نقد بنتی ہے جب سکڑتے ہوئے چینل کی *مقررہ صلاحیت* واقعی ختم کر دی جائے — کال سینٹر کی نشستیں،
کاؤنٹر کا عملہ، فون کنٹریکٹ کے منٹ — اور مقامی حکومت کے ڈیجیٹل پروگراموں نے بار بار یہ پایا ہے کہ کل
رابطے کا حجم ڈیجیٹل اپنانے کے مطابق نہیں گرتا۔ مقامی اتھارٹی کے ڈیجیٹل تبدیلی کے پروگراموں اور
Socitm اور Local Government Association جیسے اداروں کی تحقیق نے ایک بار بار پیش آنے والا نمونہ
دستاویز کیا ہے: ڈیجیٹل چینلز حقیقی معنوں میں نیا رابطہ اپنی طرف کھینچتے ہیں (شہری جو فون نہ کرتے یا
وزٹ نہ کرتے، اب کرتے ہیں، کیونکہ یہ آسان ہے)، اور "ڈیجیٹل" ٹرانزیکشنز کا ایک بامعنی حصہ درمیان میں
ناکام ہو جاتا ہے اور بہرحال فون کال پیدا کرتا ہے — لہٰذا فون کا حجم ڈیجیٹل اپنانے کی فیصد سے کہیں
کم گرتا ہے، بعض اوقات مطلق طور پر بالکل نہیں گرتا چاہے کل رابطے میں اس کا *حصہ* کم ہو جائے۔

## ریاضیاتی بنیاد

```
Gross channel-shift saving = shifted volume × (cost_old_channel − cost_digital)

Net (realized) saving = gross saving
                       − new/shadow demand created by the easier channel
                       − failure-demand cost (digital failures that
                         still generate a phone call or counter visit)
                       − cost of unretired fixed capacity (a call
                         centre can only shed staff in discrete units;
                         a 15% volume drop rarely lets you cut 15% of
                         headcount)

Realization threshold: savings are only bankable once volume drops
below the level the old channel can staff at its next-smaller discrete
capacity step (e.g. losing one full shift, one full desk, one
contracted headcount band)
```

## عملی مثال

**کاؤنٹی کونسل بلیو بیج تجدید سروس**: سالانہ 60,000 تجدیدات، پہلے 100 فیصد فون/کاغذ پر فی ٹرانزیکشن
£6.40 پر۔ ایک نئی ڈیجیٹل سروس لانچ ہوتی ہے اور ایک سال کے اندر 65 فیصد ڈیجیٹل اپنانے تک پہنچتی ہے،
فی ڈیجیٹل ٹرانزیکشن £0.30 پر۔

```
Naive (gross) saving calculation:
  39,000 shifted × (£6.40 − £0.30) = £237,900/year

What actually happened, per the council's contact-centre data:
  Phone volume fell from 60,000/year to 46,000/year (−23%, not −65%)
  because: 9,000 digital journeys failed and generated a follow-up call
           (failure-demand leakage), and 4,000 people who previously
           didn't renew at all now do, having found it easy online
           (shadow demand — a genuine access improvement, but not a
           saving)

  Phone contact centre is staffed in bands of 8,000 calls/FTE;
  a 14,000-call drop (60,000 → 46,000) releases 1.75 FTE, rounded
  down in practice to 1 FTE actually redeployed = £34,000/year

Realized saving = £34,000/year plus the digital-channel build/run
  cost avoided on 39,000 transactions ≈ £34,000 + (39,000 × £0.30
  digital cost already counted) — a fraction of the £237,900 headline,
  though the service is still unambiguously better for users.
```

## سافٹ ویئر انجینئرنگ سے تعلق

انجینئرنگ کا سبق یہ ہے کہ چینل شفٹ کی بچت *عملیاتی* فیصلوں (روسٹرنگ، خاتمہ، معاہدے کی دوبارہ
گفت و شنید) سے حاصل ہوتی ہے، سافٹ ویئر کی ڈیلیوری سے نہیں — ایک ٹیم ہر [ڈیجیٹل سروس معیار](../digital-service-standard/)
کا نکتہ پورا کر سکتی ہے اور پھر بھی صفر خالص بچت دے سکتی ہے اگر کوئی پرانے چینل کی مقررہ صلاحیت کو
ختم نہ کرے۔ ناکامی کی طلب کو آلہ کار بنانا (ڈیجیٹل سفر میں کہاں صارفین چھوڑ دیتے ہیں اور پھر کیا کرتے
ہیں) ایک حل کے قابل فنل تجزیاتی مسئلہ ہے اور بچت کے معاملے کی حفاظت کے لیے انجینئرنگ ٹیم کا سب سے
زیادہ اثر رکھنے والا کام ہے؛ یہ [فی ٹرانزیکشن لاگت](../cost-per-transaction/) سے براہِ راست جڑا ہوا
ہے، جسے ناکامی کی طلب خاموشی سے بڑھا دیتی ہے۔ دیکھیں [فوائد کا حصول](../benefits-realization/) اس
وسیع تر نظم و ضبط کے لیے کہ آیا کاروباری معاملے کی بچت واقعی حاصل ہوتی ہے، اور
[ڈیجیٹل شمولیت](../digital-inclusion/) اس بات کے لیے کہ آف لائن چینل عام طور پر مکمل طور پر ختم کیوں
نہیں کیا جا سکتا اور نہ کیا جانا چاہیے۔

## ممکنہ خامیاں

- **1:1 چینل متبادل فرض کرنا**: ڈیجیٹل اپنانے کو فون/کاؤنٹر کے حجم سے براہِ راست منہا کے طور پر ماڈل
  کرنا، مقامی حکومت کی چینل شفٹ تحقیق میں دستاویز شدہ شیڈو ڈیمانڈ اور ناکامی کی طلب کے اخراج کو
  نظرانداز کرنا۔
- **خاتمے سے پہلے مجموعی بچت بک کرنا**: کاروباری معاملے میں اس سال بچت شمار کرنا جس میں اپنانا بڑھتا
  ہے، نہ کہ اس سال (اگر کبھی ہو) جب پرانے چینل کی صلاحیت واقعی کاٹی جاتی ہے۔
- **عملے کی لاگت کی قدمی نوعیت کو نظرانداز کرنا**: 20 فیصد حجم میں کمی شاذ و نادر ہی 20 فیصد لاگت میں
  کمی میں بدلتی ہے، کیونکہ رابطہ مراکز اور کاؤنٹرز مسلسل نہیں بلکہ الگ الگ بینڈوں میں عملے سے مزین
  ہوتے ہیں۔
- **شیڈو ڈیمانڈ کو فضلہ سمجھنا**: پہلے خارج شدہ یا پہلے روکے گئے صارفین کی طرف سے نیا رابطہ
  [عوامی قدر](../public-value/) میں حقیقی اضافہ ہے، ماڈلنگ کی غلطی نہیں — اسے شور کے طور پر منہا
  کرنے کے بجائے رسائی کے نتیجے کے طور پر رپورٹ کیا جانا چاہیے۔

## ماخذ

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
