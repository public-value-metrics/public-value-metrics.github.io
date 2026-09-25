# चैनल-शिफ़्ट बचत (Channel Shift Savings)

चैनल-शिफ़्ट बचत वह प्रक्षेपित लागत-कमी है जो लेन-देन की मात्रा को महँगे चैनलों — फ़ोन, आमने-सामने काउंटर, कागज़ी डाक — से हटाकर सस्ती डिजिटल स्व-सेवा में ले जाने से मिलती है। यह "डिजिटल बाई डिफ़ॉल्ट" के पीछे का वित्तीय इंजन है, और साथ ही बिज़नेस केस की वह पंक्ति भी है जिसके ग़लत होने की सबसे अधिक संभावना होती है, क्योंकि जिस धारणा पर यह टिकी है — कि ऑफ़लाइन चैनल डिजिटल अपनाने के बढ़ने के साथ सिकुड़ जाते हैं — यह केवल कभी-कभी ही सच होती है।

## यह क्यों महत्वपूर्ण है

Digital Efficiency Report के [प्रति-लेन-देन लागत](../cost-per-transaction/) आँकड़ों का उपयोग करते हुए गणित निर्विवाद दिखता है: दस लाख लेन-देन को £8.62 वाली आमने-सामने यात्रा से £0.15 वाली डिजिटल यात्रा पर ले जाएँ और बचत £80 लाख से अधिक होगी। लेकिन कोई बचत तभी पुनर्तैनाती के लिए मुक्त नक़दी बनती है जब सिकुड़ते चैनल की *स्थिर क्षमता* — कॉल सेंटर की सीटें, काउंटर स्टाफ़, फ़ोन अनुबंध के मिनट — वास्तव में बंद कर दी जाए, और स्थानीय सरकार के डिजिटल कार्यक्रमों ने बार-बार पाया है कि कुल संपर्क-मात्रा डिजिटल अपनाने के अनुपात में नहीं घटती। स्थानीय प्राधिकरण डिजिटल परिवर्तन कार्यक्रमों और Socitm तथा Local Government Association जैसे निकायों के शोध ने एक दोहराया जाने वाला प्रतिमान दर्ज किया है: डिजिटल चैनल वास्तव में नया संपर्क आकर्षित करते हैं (ऐसे नागरिक जो पहले फ़ोन नहीं करते या यात्रा नहीं करते थे, अब करते हैं, क्योंकि यह आसान है), और "डिजिटल" लेन-देन का एक सार्थक हिस्सा बीच में विफल हो जाता है और फिर भी एक फ़ोन कॉल उत्पन्न करता है — इसलिए फ़ोन की मात्रा डिजिटल अपनाने के प्रतिशत से कहीं कम गिरती है, कभी-कभी निरपेक्ष रूप से बिल्कुल नहीं गिरती, भले ही कुल संपर्क में उसका *हिस्सा* घट रहा हो।

## गणितीय आधार

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

## व्यावहारिक उदाहरण

**काउंटी काउंसिल ब्लू बैज नवीनीकरण सेवा**: 60,000 नवीनीकरण/वर्ष, पहले 100% फ़ोन/कागज़ पर £6.40 प्रति लेन-देन। एक नई डिजिटल सेवा लॉन्च होती है और एक वर्ष के भीतर 65% डिजिटल अपनाने तक पहुँचती है, £0.30 प्रति डिजिटल लेन-देन पर।

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

## सॉफ़्टवेयर इंजीनियरिंग से संबंध

इंजीनियरिंग का सबक यह है कि चैनल-शिफ़्ट बचत *परिचालन* निर्णयों (रोस्टरिंग, डीकमिशनिंग, अनुबंध-पुनर्वार्ता) से साकार होती है, सॉफ़्टवेयर के शिप होने से नहीं — एक टीम हर [डिजिटल सेवा मानक](../digital-service-standard/) बिंदु पर खरी उतर सकती है और फिर भी शुद्ध बचत शून्य दे सकती है यदि कोई पुराने चैनल की स्थिर क्षमता को रिटायर नहीं करता। विफलता-माँग को इंस्ट्रूमेंट करना (डिजिटल यात्रा में उपयोगकर्ता कहाँ छोड़ते हैं और फिर क्या करते हैं) एक हल करने योग्य फ़नल-एनालिटिक्स समस्या है और बचत के केस की रक्षा के लिए इंजीनियरिंग टीम जो सबसे प्रभावशाली काम कर सकती है, वही है; यह सीधे [प्रति-लेन-देन लागत](../cost-per-transaction/) से भी जुड़ता है, जिसे विफलता-माँग चुपचाप बढ़ा देती है। बिज़नेस केस की बचत वास्तव में साकार होती है या नहीं, यह जाँचने के व्यापक अनुशासन के लिए देखें [लाभ-साकारीकरण](../benefits-realization/), और यह समझने के लिए कि ऑफ़लाइन चैनल को सामान्यतः पूरी तरह रिटायर क्यों नहीं किया जा सकता और क्यों नहीं किया जाना चाहिए, देखें [डिजिटल समावेशन](../digital-inclusion/)।

## सामान्य त्रुटियाँ

- **1:1 चैनल प्रतिस्थापन मान लेना**: डिजिटल अपनाने को फ़ोन/काउंटर मात्रा से सीधे घटाव के रूप में मॉडल करना, स्थानीय सरकार के चैनल-शिफ़्ट शोध में दर्ज छाया-माँग और विफलता-माँग रिसाव को नज़रअंदाज़ करते हुए।
- **डीकमिशनिंग से पहले सकल बचत बुक करना**: बचत को उस वर्ष बिज़नेस केस में गिनना जब अपनाना बढ़ता है, न कि उस वर्ष (यदि कभी होता है) जब पुराने चैनल की क्षमता वास्तव में काटी जाती है।
- **स्टाफ़िंग लागतों की चरण-फ़ंक्शन प्रकृति को नज़रअंदाज़ करना**: 20% की मात्रा-गिरावट शायद ही कभी 20% की लागत-गिरावट में बदलती है, क्योंकि संपर्क केंद्र और काउंटर निरंतर नहीं, बल्कि असतत बैंडों में स्टाफ़ किए जाते हैं।
- **छाया-माँग को बर्बादी मानना**: पहले-बाहर रखे गए या पहले-हतोत्साहित उपयोगकर्ताओं से नया संपर्क [सार्वजनिक मूल्य](../public-value/) में एक वास्तविक वृद्धि है, कोई मॉडलिंग त्रुटि नहीं — इसे शोर के रूप में नेट करने के बजाय एक पहुँच-परिणाम के रूप में रिपोर्ट किया जाना चाहिए।

## स्रोत

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
