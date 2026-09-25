# فی ٹرانزیکشن لاگت (Cost Per Transaction)

فی ٹرانزیکشن لاگت کسی حکومتی ڈیجیٹل سروس کے لیے نمایاں اکائی معاشیات کا میٹرک ہے: کسی چینل کو ڈیلیور
کرنے کی کل لاگت، اس کے ذریعے مکمل ہونے والی ٹرانزیکشنز کی تعداد پر تقسیم۔ یہ پرانے GOV.UK Performance
Platform پر جھنڈی کا عدد تھا، اور یہ وہ عدد ہے جس نے ایک دہائی کی "ڈیجیٹل بذریعہ ڈیفالٹ" سرمایہ کاری
کو فنڈ کیا — بالکل اسی وجہ سے یہ وہ میٹرک بھی ہے جس کے ساتھ کھیلا جانے کا سب سے زیادہ امکان ہے۔

## یہ کیوں اہم ہے

Cabinet Office کی 2012 کی Digital Efficiency Report نے چینل کی لاگت کے موازنے کو ایسے الفاظ میں پیش
کیا جو یاد رہ گئے: ڈیجیٹل ٹرانزیکشنز کو فون سے تقریباً 20 گنا اور آمنے سامنے سے تقریباً 50 گنا کم لاگت
میں پایا گیا، مقامی حکومت کے مثالی اعداد و شمار کے مطابق تقریباً £0.15 فی ویب ٹرانزیکشن بمقابلہ £2.83
فون پر اور £8.62 آمنے سامنے۔ یہ واحد موازنہ Government Digital Strategy میں نامزد 25 مثالی سروسز کو
دوبارہ ڈیزائن کرنے کا جواز بن گیا، اور اس کے بعد سے ہر محکماتی کاروباری معاملے کا جو چینل شفٹ کی بچت
کا حوالہ دیتا ہے۔ یہ عدد ترتیب کی سطح کے اشارے کے طور پر حقیقی معنوں میں مفید ہے، مگر تناسب مکمل طور
پر اس پر منحصر ہے کہ ہر طرف کیا شمار کیا جاتا ہے: ایک منصفانہ فون-چینل لاگت میں کال سینٹر کا عملہ،
ٹیلیفونی کنٹریکٹ، تربیت اور جائیداد شامل ہوتی ہے؛ ایک منصفانہ ڈیجیٹل لاگت میں ہوسٹنگ، جاری پروڈکٹ
ٹیم کی تنخواہیں، ناکام سفروں کے لیے سپورٹ ڈیسک کا وقت، اور
[ڈیجیٹل سروس معیار](../digital-service-standard/) کے نکتہ 5 کے تحت درکار معاون-ڈیجیٹل چینل شامل ہوتا
ہے۔ ڈیجیٹل طرف سے ان میں سے کافی کچھ نکال دیں تو کوئی بھی سروس سستی نظر آتی ہے۔

## ریاضیاتی بنیاد

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

## عملی مثال

**گاڑی ٹیکس کی تجدید کی سروس**: سالانہ 4 ملین ٹرانزیکشنز۔

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

## سافٹ ویئر انجینئرنگ سے تعلق

فی ٹرانزیکشن لاگت وہ جگہ ہے جہاں تعمیراتی فیصلے مالیاتی عدد بن جاتے ہیں: ایک سروس جو صاف طور پر
خودکار طور پر پیمانہ بدلتی ہے اور اسے تھوڑی دستی مداخلت کی ضرورت ہوتی ہے وقت کے ساتھ اس عدد کو نیچے
لے جاتی ہے؛ ایک جو الجھی ہوئی خطا کی حالتوں سے سپورٹ ٹکٹ کا زیادہ حجم پیدا کرتی ہے اسے ہوسٹنگ کی
کارکردگی سے قطع نظر اوپر لے جاتی ہے۔ یہ [ڈیجیٹل سروس معیار](../digital-service-standard/) کے نکتہ 10
("کامیابی کیسی نظر آتی ہے یہ طے کریں، اور کارکردگی کا ڈیٹا شائع کریں") اور
[سروس کے معیارات اور ٹرانزیکشن میٹرکس](../service-standards-and-transaction-metrics/) کا فطری ساتھی
میٹرک ہے، جو مکمل KPI سیٹ بیان کرتا ہے جس کے اندر یہ عدد بیٹھتا ہے۔ یہ براہِ راست
[چینل شفٹ کی بچت](../channel-shift-savings/) کے حساب کتاب میں بھی کھلتا ہے اور اسے
[حکومتی IT میں ملکیت کی کل لاگت](../total-cost-of-ownership-in-government-it/) کے خلاف موافق کیا
جانا چاہیے تاکہ پلیٹ فارم اور مشترکہ سروس کے اوور ہیڈز خاموشی سے نہ گر جائیں۔

## ممکنہ خامیاں

- **متوسط لاگت کو اوسط لاگت کے بھیس میں پیش کرنا**: سروس بننے کے بعد صرف ہوسٹنگ کی لاگت کا حوالہ دینا،
  اس جاری ٹیم کو چھوڑ کر جو اسے برقرار رکھتی، اسے بہتر بناتی اور سپورٹ کرتی ہے — اوپر عملی مثال دیکھیں۔
- **معاون-ڈیجیٹل لاگت کو خارج کرنا**: کوئی چینل "ڈیجیٹل بذریعہ ڈیفالٹ" کے مطابق نہیں ہے، اور اس کی
  حقیقی لاگت نہیں پکڑی جاتی، اگر [ڈیجیٹل شمولیت](../digital-inclusion/) کے تحت درکار فون/کاغذ کا
  متبادل الگ سے قیمت دیا جاتا ہے یا نظرانداز کیا جاتا ہے۔
- **ناکامی کی طلب کو نظرانداز کرنا**: ٹرانزیکشنز جو ڈیجیٹل شروع ہوتی ہیں اور ناکام ہو جاتی ہیں، بہرحال
  فون کال یا کاغذی فارم پیدا کرتی ہیں، یہ ڈیجیٹل چینل کی لاگت ہے، اس چینل کی نہیں جو ناکامی کو پکڑتا
  ہے۔
- **چینلز میں مختلف پیچیدگی کی ٹرانزیکشنز کا موازنہ کرنا**: فون کالز غیر متناسب طور پر مشکل معاملات
  (متعدد زیر کفالت افراد، خطا کی تصحیح، کمزور درخواست دہندگان) نمٹاتی ہیں؛ اوسط فون لاگت کا اوسط
  ڈیجیٹل لاگت سے موازنہ کرنا تناسب کو بڑھا چڑھا کر پیش کرتا ہے جب تک ٹرانزیکشن کا ملاپ میچ نہ کیا
  جائے۔

## ماخذ

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
