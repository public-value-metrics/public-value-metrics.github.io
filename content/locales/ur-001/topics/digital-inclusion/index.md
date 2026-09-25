# ڈیجیٹل شمولیت (Digital Inclusion)

ڈیجیٹل شمولیت یہ یقینی بنانے کا نظم و ضبط ہے کہ "ڈیجیٹل بذریعہ ڈیفالٹ" "صرف ڈیجیٹل" نہ بن جائے — کہ
سب سے سستے چینل کے گرد ڈیزائن کی گئی عوامی سروسز ان شہریوں کے لیے بھی کام کریں جو اسے بغیر مدد کے
استعمال نہیں کر سکتے یا نہیں کرنا چاہتے۔ GDS نے مخصوص ڈیلیوری میکانزم، "معاون ڈیجیٹل"، کو ہر حکومتی
ڈیجیٹل سروس کے لیے ایک لازمی تقاضا کے طور پر وضع کیا، اختیاری اضافی چیز کے طور پر نہیں۔

## یہ کیوں اہم ہے

2012 کی Government Digital Strategy نے واضح طور پر یہ عزم بیان کیا: ڈیجیٹل سروسز کو ڈیجیٹل بذریعہ
ڈیفالٹ بنایا جانا چاہیے، مگر حکمتِ عملی نے خود یہ تسلیم کیا کہ تقریباً 10 فیصد برطانوی بالغ افراد بغیر
مدد کے انہیں استعمال نہیں کر سکیں گے، اور محکموں کو معاون ڈیجیٹل معاونت فراہم کرنے کا پابند کیا — ایک
انسانی-درمیانی راستہ، فون کے ذریعے، ذاتی طور پر، یا کسی واسطے کے ذریعے — سروس کے حصے کے طور پر، بعد
میں جوڑا گیا ایک الگ متبادل نہیں۔ یہ عزم اب [ڈیجیٹل سروس معیار](../digital-service-standard/) کا نکتہ
5 ہے، "یقینی بنائیں کہ ہر کوئی سروس استعمال کر سکے"۔ مسلسل اخراج کے پیمانے کو Lloyds Banking Group کی
سالانہ UK Consumer Digital Index کے ذریعے ٹریک کیا جاتا ہے: 2024 کے ایڈیشن نے پایا کہ برطانیہ میں
تقریباً 1.6 ملین لوگ آف لائن رہتے ہیں، اور یہ گروہ 70-79 سال کی عمر کے لوگوں، £35,000 سے کم کمانے
والوں، اور ریٹائرڈ یا بے روزگار افراد کی طرف بھاری طور پر جھکا ہوا ہے — بالکل وہی آبادی جو دوبارہ
ڈیزائن کی جا رہی عوامی سروسز پر انحصار کرنے کا سب سے زیادہ امکان رکھتی ہے۔ اسی رپورٹ نے پایا کہ
برطانوی افرادی قوت کے صرف 48 فیصد لوگ Essential Digital Skills فریم ورک کے تمام 20 کام مکمل کر سکتے
ہیں، یعنی اخراج محض دو حالتی کنیکٹیویٹی نہیں، یہ مہارت، اعتماد، اور بھروسے کا ایک طیف ہے جسے ایک سادہ
"براڈ بینڈ رکھتا ہے" میٹرک مکمل طور پر چھوڑ دیتا ہے۔

## ریاضیاتی بنیاد

ڈیجیٹل شمولیت ایک فریم ورک اور مساوات کی جانچ ہے نہ کہ ایک واحد فارمولا، مگر یہ
[تقسیمی وزن دہی](../distributional-weighting/) کے ذریعے مقداری قدر کی تشخیص کے ساتھ ترتیب دیتی ہے:

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

## عملی مثال

**Universal Credit طرز کی قومی بینیفٹ سروس**: سالانہ 2.5 ملین دعوے، Government Digital Strategy کے
منصوبہ بندی کے مفروضے کے مطابق دعویداروں کے تخمینہ شدہ 10 فیصد کو معاون ڈیجیٹل معاونت کی ضرورت سمجھا
گیا۔

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

## سافٹ ویئر انجینئرنگ سے تعلق

معاون ڈیجیٹل ایک ڈیزائن کردہ چینل ہے، جس کا مطلب ہے کہ اس کے پاس کسی بھی دوسرے کی طرح انٹرفیسز،
SLAs، اور آلہ کاری ہے: ایک فون پر مبنی کیس ورکر ٹول، Citizens Advice یا مقامی اتھارٹی کے لیے ایک
واسطہ پورٹل، یا ایک ذاتی طور پر کیوسک بہاؤ۔ اسے بعد میں جوڑی گئی سوچ کے طور پر سمجھنا — چھوٹے پرنٹ
میں ایک فون نمبر نہ کہ دریافت سے سوچا گیا ایک چینل — وہ واحد سب سے عام طریقہ ہے جس سے سروسز جانچ میں
[ڈیجیٹل سروس معیار](../digital-service-standard/) کے نکتہ 5 میں ناکام ہوتی ہیں۔ ڈیجیٹل شمولیت اس باب
کے ہر دوسرے موضوع پر مساوات کا عینک ہے: یہ محدود کرتی ہے کہ
[چینل شفٹ کی بچت](../channel-shift-savings/) کو کتنی جارحانہ طور پر حاصل کیا جا سکتا ہے، یہ ایک
لائن آئٹم ہے جسے [فی ٹرانزیکشن لاگت](../cost-per-transaction/) میں ایمانداری سے شامل کیا جانا چاہیے،
اور یہ ڈیجیٹل سروسز کے تناظر میں [تقسیمی وزن دہی](../distributional-weighting/) کا براہِ راست اطلاق
ہے — ایک بچت جو ان لوگوں پر غیر متناسب طور پر گرتی ہے جو پہلے ہی ڈیجیٹل اور اقتصادی طور پر خارج ہیں
اسے کم وزن دیا جانا چاہیے، آبادی میں یکساں طور پر پھیلی ہوئی بچت کے مساوی نہیں سمجھا جانا چاہیے۔

## ممکنہ خامیاں

- **"ڈیجیٹل بذریعہ ڈیفالٹ" کو "صرف ڈیجیٹل" پڑھنا**: ڈیجیٹل اپنانے کے ایک حد سے تجاوز کرنے پر فون لائن
  یا کاؤنٹر بند کرنا، یہ تصدیق کیے بغیر کہ باقی گروہ کے پاس واقعی قابلِ استعمال متبادل موجود ہے۔
- **اخراج کو دو حالتی کنیکٹیویٹی سے ناپنا**: "براڈ بینڈ رکھتا ہے" یا "اسمارٹ فون کا مالک ہے" ایک
  مخصوص ٹرانزیکشن مکمل کرنے کی صلاحیت کا کمزور متبادل ہے — Essential Digital Skills کا خلا (صرف 48
  فیصد برطانوی افرادی قوت تمام 20 کام مکمل کرتی ہے، Lloyds 2024 کے مطابق) دکھاتا ہے کہ مہارت اور
  اعتماد رسائی جتنے ہی اہم ہیں۔
- **معاون ڈیجیٹل کی قیمت کو گول لگانے کی خطا کے طور پر شمار کرنا**: اسے اپنی
  [فی ٹرانزیکشن لاگت](../cost-per-transaction/) والے ایک مناسب چینل کی بجائے ایک چھوٹی سی ہنگامی لائن
  کے طور پر بجٹ کرنا، پھر لانچ پر کم فنڈ شدہ اور کم عملے والا ہونے پر حیران ہونا۔
- **صرف کامیاب ڈیجیٹل مکمل کرنے والوں کا سروے کرنا**: مکمل طور پر سروس کے اندر چلائی گئی اطمینان اور
  استعمال کی صلاحیت کی تحقیق ان لوگوں کو چھوڑ دیتی ہے جو کبھی وہاں تک نہیں پہنچے، جو بالکل وہی آبادی
  ہے جس کی حفاظت کے لیے ڈیجیٹل شمولیت کا کام موجود ہے۔

## ماخذ

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
