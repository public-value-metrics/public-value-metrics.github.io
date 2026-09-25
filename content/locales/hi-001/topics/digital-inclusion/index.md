# डिजिटल समावेशन (Digital Inclusion)

डिजिटल समावेशन वह अनुशासन है जो यह सुनिश्चित करता है कि "डिजिटल बाई डिफ़ॉल्ट" "केवल डिजिटल" न बन जाए — कि सबसे सस्ते चैनल के इर्द-गिर्द डिज़ाइन की गई सार्वजनिक सेवाएँ उन नागरिकों के लिए भी काम करें जो बिना सहायता के इसका उपयोग नहीं कर सकते या नहीं करना चाहते। GDS ने विशिष्ट डिलीवरी-तंत्र, "सहायता-प्राप्त डिजिटल" (assisted digital), को हर सरकारी डिजिटल सेवा के लिए एक अनिवार्य आवश्यकता के रूप में गढ़ा, कोई वैकल्पिक अतिरिक्त नहीं।

## यह क्यों महत्वपूर्ण है

2012 की Government Digital Strategy ने महत्वाकांक्षा को स्पष्ट रूप से रखा: डिजिटल सेवाओं को डिजिटल बाई डिफ़ॉल्ट बनाया जाना चाहिए, लेकिन रणनीति ने स्वयं स्वीकार किया कि लगभग 10% यूके वयस्क बिना मदद के इनका उपयोग नहीं कर पाएँगे, और विभागों को सहायता-प्राप्त डिजिटल सहायता — फ़ोन, व्यक्तिगत रूप से, या किसी मध्यस्थ के माध्यम से एक मानव-मध्यस्थ मार्ग — प्रदान करने के लिए प्रतिबद्ध किया, जो सेवा का हिस्सा हो, न कि बाद में जोड़ा गया एक अलग फ़ॉलबैक। वह प्रतिबद्धता अब [डिजिटल सेवा मानक](../digital-service-standard/) बिंदु 5, "सुनिश्चित करें कि हर कोई सेवा का उपयोग कर सके" है। जारी बहिष्करण के पैमाने को Lloyds Banking Group के वार्षिक UK Consumer Digital Index द्वारा ट्रैक किया जाता है: 2024 संस्करण में पाया गया कि यूके में लगभग 16 लाख लोग अभी भी ऑफ़लाइन हैं, और यह समूह भारी रूप से 70–79 वर्ष की आयु के लोगों, £35,000 से कम कमाने वालों, और सेवानिवृत्त या बेरोज़गार लोगों की ओर झुका हुआ है — ठीक वही जनसंख्या जो फिर से डिज़ाइन की जा रही सार्वजनिक सेवाओं पर निर्भर होने की सबसे अधिक संभावना रखती है। उसी रिपोर्ट में पाया गया कि केवल 48% यूके कार्यबल Essential Digital Skills ढाँचे के सभी 20 कार्य पूरे कर सका, जिसका अर्थ है कि बहिष्करण बाइनरी कनेक्टिविटी नहीं है, यह कौशल, आत्मविश्वास और विश्वास का एक स्पेक्ट्रम है जिसे एक साधारण "ब्रॉडबैंड है" मेट्रिक पूरी तरह चूक जाता है।

## गणितीय आधार

डिजिटल समावेशन एक ढाँचा और समता-जाँच है, न कि कोई एकल सूत्र, लेकिन यह [वितरणात्मक भारांकन](../distributional-weighting/) के माध्यम से मात्रात्मक मूल्य-आकलन के साथ संयोजित होता है:

```
Naive channel-shift value:
  value = volume shifted × (cost_old − cost_digital)     [see channel-shift-savings]

Inclusion-adjusted value:
  value = (volume shifted × unweighted saving)
        − (excluded users × cost of assisted-digital provision)
        − (distributional weight adjustment for harm to excluded
           groups who lose access or face degraded service quality)

Assisted digital is not the residual cost of failure — it is a
designed channel with its own cost-per-transaction,
typically far higher per-transaction than self-service digital but
still usually cheaper than the legacy channel it partially replaces.
```

## व्यावहारिक उदाहरण

**यूनिवर्सल क्रेडिट-शैली की राष्ट्रीय लाभ सेवा**: 25 लाख दावे/वर्ष, Government Digital Strategy की योजना-धारणा के अनुसार अनुमानित 10% दावेदारों को सहायता-प्राप्त डिजिटल सहायता की आवश्यकता होने का आकलन।

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

## सॉफ़्टवेयर इंजीनियरिंग से संबंध

सहायता-प्राप्त डिजिटल एक डिज़ाइन किया गया चैनल है, जिसका अर्थ है कि इसके इंटरफ़ेस, SLA और इंस्ट्रूमेंटेशन किसी अन्य चैनल की तरह ही होते हैं: एक फ़ोन-आधारित केसवर्कर टूल, Citizens Advice या किसी स्थानीय प्राधिकरण के लिए एक मध्यस्थ पोर्टल, या एक व्यक्तिगत-उपस्थिति कियोस्क प्रवाह। इसे बाद में जोड़ा गया विचार मानना — छोटे प्रिंट में एक फ़ोन नंबर, न कि खोज-चरण से ही विचारित एक चैनल — सेवाओं के [डिजिटल सेवा मानक](../digital-service-standard/) बिंदु 5 पर आकलन में विफल होने का सबसे आम तरीक़ा है। डिजिटल समावेशन इस अध्याय के हर अन्य विषय पर समता-लेंस है: यह सीमित करता है कि [चैनल-शिफ़्ट बचत](../channel-shift-savings/) को कितनी आक्रामकता से साकार किया जा सकता है, यह एक पंक्ति-मद है जिसे [प्रति-लेन-देन लागत](../cost-per-transaction/) में ईमानदारी से शामिल किया जाना चाहिए, और यह [वितरणात्मक भारांकन](../distributional-weighting/) का डिजिटल-सेवाओं संदर्भ में सीधा अनुप्रयोग है — एक बचत जो पहले से ही डिजिटल और आर्थिक रूप से बहिष्कृत लोगों पर असमान रूप से पड़ती है, उसे कम भारांकित किया जाना चाहिए, न कि पूरी जनसंख्या में समान रूप से फैली बचत के बराबर माना जाना चाहिए।

## सामान्य त्रुटियाँ

- **"डिजिटल बाई डिफ़ॉल्ट" को "केवल डिजिटल" पढ़ना**: यह सत्यापित किए बिना कि शेष समूह के पास वास्तव में उपयोग करने योग्य विकल्प है, डिजिटल अपनाने के किसी सीमा को पार करते ही फ़ोन लाइन या काउंटर बंद कर देना।
- **समावेशन को बाइनरी कनेक्टिविटी से मापना**: "ब्रॉडबैंड है" या "स्मार्टफ़ोन का मालिक है" किसी विशिष्ट लेन-देन को पूरा करने की क्षमता के लिए एक ख़राब प्रॉक्सी है — Essential Digital Skills अंतर (Lloyds 2024 के अनुसार केवल 48% यूके कार्यबल सभी 20 कार्य पूरे करता है) दिखाता है कि कौशल और आत्मविश्वास उतने ही मायने रखते हैं जितनी पहुँच।
- **सहायता-प्राप्त डिजिटल की लागत को एक गोलाई-त्रुटि मानना**: इसे अपने [प्रति-लेन-देन लागत](../cost-per-transaction/) वाले एक उचित चैनल के बजाय एक छोटी आकस्मिक पंक्ति के रूप में बजट करना, फिर लॉन्च पर इसके कम-वित्तपोषित और कम-स्टाफ़ होने पर हैरान होना।
- **केवल सफल डिजिटल पूर्णकर्ताओं का सर्वेक्षण करना**: पूरी तरह सेवा-भीतर चलाया गया संतुष्टि और उपयोगिता शोध उन लोगों को चूक जाता है जो कभी वहाँ तक पहुँचे ही नहीं, जो ठीक वही जनसंख्या है जिसे डिजिटल समावेशन कार्य संरक्षित करने के लिए है।

## स्रोत

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
