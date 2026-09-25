# प्रति-लेन-देन लागत (Cost Per Transaction)

प्रति-लेन-देन लागत किसी सरकारी डिजिटल सेवा के लिए प्रमुख यूनिट-अर्थशास्त्र मेट्रिक है: किसी चैनल को डिलीवर करने की कुल लागत, उसके माध्यम से पूरे किए गए लेन-देन की संख्या से विभाजित। यह पुराने GOV.UK Performance Platform पर प्रमुख आँकड़ा था, और यही वह संख्या है जिसने एक दशक के "डिजिटल बाई डिफ़ॉल्ट" निवेश को वित्तपोषित किया — यही ठीक कारण है कि यह उस मेट्रिक में भी सबसे अधिक है जिसमें हेराफेरी की जा सकती है।

## यह क्यों महत्वपूर्ण है

Cabinet Office की 2012 की Digital Efficiency Report ने चैनल-लागत तुलना को ऐसे शब्दों में रखा जो जम गए: डिजिटल लेन-देन फ़ोन की तुलना में लगभग 20 गुना और आमने-सामने की तुलना में लगभग 50 गुना कम लागत के पाए गए, स्थानीय-सरकार के उदाहरणात्मक आँकड़ों के अनुसार लगभग £0.15 प्रति वेब लेन-देन बनाम £2.83 फ़ोन से और £8.62 आमने-सामने। वह एक तुलना Government Digital Strategy में नामित 25 उदाहरणात्मक सेवाओं को फिर से डिज़ाइन करने का औचित्य बन गई, और तब से चैनल-शिफ़्ट बचत का हवाला देने वाले हर विभागीय बिज़नेस केस का भी। यह आँकड़ा परिमाण-क्रम के संकेत के रूप में वास्तव में उपयोगी है, लेकिन यह अनुपात पूरी तरह इस पर निर्भर करता है कि हर पक्ष पर क्या गिना जाता है: एक उचित फ़ोन-चैनल लागत में कॉल सेंटर का स्टाफ़, टेलीफ़ोनी अनुबंध, प्रशिक्षण और एस्टेट शामिल है; एक उचित डिजिटल लागत में होस्टिंग, चालू उत्पाद-टीम वेतन, विफल यात्राओं के लिए सहायता-डेस्क समय, और [डिजिटल सेवा मानक](../digital-service-standard/) बिंदु 5 द्वारा अपेक्षित सहायता-प्राप्त-डिजिटल चैनल शामिल है। डिजिटल पक्ष से इनमें से पर्याप्त हटा दें और कोई भी सेवा सस्ती दिखेगी।

## गणितीय आधार

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

## व्यावहारिक उदाहरण

**वाहन-कर नवीनीकरण सेवा**: 40 लाख लेन-देन/वर्ष।

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

## सॉफ़्टवेयर इंजीनियरिंग से संबंध

प्रति-लेन-देन लागत वह जगह है जहाँ आर्किटेक्चर-निर्णय एक वित्त-संख्या बन जाते हैं: एक सेवा जो साफ़-सुथरे ढंग से ऑटो-स्केल होती है और जिसे कम मैनुअल हस्तक्षेप की आवश्यकता होती है, समय के साथ यह आँकड़ा नीचे ले जाती है; एक सेवा जो भ्रामक त्रुटि-स्थितियों से उच्च सहायता-टिकट मात्रा उत्पन्न करती है, होस्टिंग-दक्षता चाहे जो हो, इसे ऊपर ले जाती है। यह [डिजिटल सेवा मानक](../digital-service-standard/) बिंदु 10 ("परिभाषित करें कि सफलता कैसी दिखती है, और प्रदर्शन-डेटा प्रकाशित करें") और [सेवा मानक और लेन-देन मेट्रिक्स](../service-standards-and-transaction-metrics/) का स्वाभाविक साथी-मेट्रिक है, जो इस आँकड़े को घेरने वाला व्यापक KPI-सेट निर्धारित करता है। यह सीधे [चैनल-शिफ़्ट बचत](../channel-shift-savings/) गणनाओं में भी योगदान देता है और इसे [सरकारी आईटी में स्वामित्व की कुल लागत](../total-cost-of-ownership-in-government-it/) से मिलाया जाना चाहिए ताकि प्लेटफ़ॉर्म और साझा-सेवा ओवरहेड चुपचाप न छूट जाएँ।

## सामान्य त्रुटियाँ

- **सीमांत लागत को औसत लागत के रूप में सजाना**: सेवा बन जाने के बाद केवल-होस्टिंग लागत उद्धृत करना, इसे बनाए रखने, दोहराने और सहायता देने वाली चालू टीम को छोड़ते हुए — ऊपर व्यावहारिक उदाहरण देखें।
- **सहायता-प्राप्त-डिजिटल लागत को बाहर रखना**: यदि [डिजिटल समावेशन](../digital-inclusion/) द्वारा अपेक्षित फ़ोन/कागज़ फ़ॉलबैक को अलग से लागत दी जाती है या नज़रअंदाज़ किया जाता है, तो कोई चैनल "डिजिटल बाई डिफ़ॉल्ट"-अनुपालक नहीं है, और उसकी वास्तविक लागत कैप्चर नहीं होती।
- **विफलता-माँग को नज़रअंदाज़ करना**: ऐसे लेन-देन जो डिजिटल रूप से शुरू होते हैं और विफल होते हैं, फिर भी एक फ़ोन कॉल या कागज़ी फ़ॉर्म उत्पन्न करते हैं, डिजिटल चैनल की लागत हैं, उस चैनल की नहीं जो विफलता को पकड़ता है।
- **चैनलों में विभिन्न जटिलता के लेन-देन की तुलना करना**: फ़ोन कॉल असमान रूप से कठिन मामलों को संभालते हैं (कई आश्रित, त्रुटि-सुधार, कमज़ोर आवेदक); जब तक लेन-देन-मिश्रण मेल नहीं खाता, औसत फ़ोन लागत की औसत डिजिटल लागत से तुलना अनुपात को बढ़ा-चढ़ाकर दिखाती है।

## स्रोत

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
