# लाभ-साकारीकरण (Benefits Realization)

लाभ-साकारीकरण प्रबंधन वह अनुशासन है जिसके ज़रिए यह पहचाना, आधार-रेखांकित (baselined), ट्रैक और *प्रमाणित* किया जाता है कि बिज़नेस केस में वादा किए गए लाभ लाइव होने के बाद वास्तव में साकार हुए या नहीं। यूके के सार्वजनिक निवेश में यह HM Treasury के ग्रीन बुक फ़ाइव केस मॉडल और Infrastructure and Projects Authority के समर्पित लाभ-प्रबंधन मार्गदर्शन के भीतर बसा है; इसके बिना, "इस प्रणाली ने केसवर्करों के प्रति दावा तीस मिनट बचाए" हमेशा के लिए एक बिना-ऑडिट किया दावा बनकर रह जाता है।

## यह क्यों महत्वपूर्ण है

बिज़नेस केस वादे होते हैं; लाभ-साकारीकरण उनका ऑडिट है। ग्रीन बुक हर व्यय-केस को पाँच परीक्षणों — रणनीतिक, आर्थिक, वाणिज्यिक, वित्तीय और प्रबंधकीय — से गुज़रने की अपेक्षा करती है, और प्रबंधन केस में *मंज़ूरी से पहले* ही यह निर्धारित होना चाहिए कि लाभ कैसे साकार किए जाएँगे: स्वामी नामित, आधार-रेखाएँ कैप्चर की गई, और मापन-तिथियाँ तय की गई। Infrastructure and Projects Authority का मार्गदर्शक दस्तावेज़, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*, इसलिए मौजूद है क्योंकि Government Major Projects Portfolio पर IPA की अपनी पोर्टफ़ोलियो-रिपोर्टिंग में बार-बार डिलीवरी-विश्वास और लाभ-साकारीकरण को प्रमुख कार्यक्रमों में दोहराई जाने वाली कमज़ोरियों के रूप में पाया गया है। कोई परियोजना अपने डिलीवरी माइलस्टोन के अनुसार "समय पर और बजट के भीतर" बंद हो सकती है, फिर भी उन लाभों को साकार करने में विफल रह सकती है जिन्होंने शुरुआत में धन ख़र्च करने को उचित ठहराया था — यही वह भेद है जिसे IPA का मार्गदर्शन इस पूरे अनुशासन का सार मानता है।

## गणितीय आधार

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: named owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash-releasing / capacity-freed / qualitative,
  tracked and reported separately
```

## व्यावहारिक उदाहरण

**स्थानीय प्राधिकरण**: एक डिजिटल प्लानिंग-आवेदन पोर्टल के बिज़नेस केस ने प्रति वर्ष वादा किया था: प्रिंटिंग और डाक ओवरहेड में £300,000 की कमी (नक़दी), 4,500 अधिकारी-घंटे मुक्त (क्षमता), और आवेदकों की संतुष्टि में सुधार (गुणात्मक)। लाइव होने के बारह महीने बाद:

```
Benefit           Forecast   Realized   Rate   Evidence
Cash savings      £300,000   £210,000   70%    finance ledger vs baseline year
Officer hours     4,500      3,200      71%    time-motion sample
Satisfaction      +8pp       +11pp      138%   applicant survey data

Actions from the review (the point of benefits realization):
cash shortfall traced to two service areas still processing paper
applications by exception → close the exception route;
next business case's optimism-bias correction raised from 10% to 25%
based on this case's forecasting error.
```

70% की साकारीकरण-दर कोई विफलता नहीं है — यह ऐसा ज्ञान है जो अगले पूर्वानुमान को बेहतर ढंग से कैलिब्रेट करने देता है। एक बिना-मापी गई केस हमेशा 100% का दावा करती रहती, और वित्त टीम के पास उसे चुनौती देने का कोई आधार नहीं होता।

## सॉफ़्टवेयर इंजीनियरिंग से संबंध

इंजीनियरिंग संगठन नियमित रूप से पूर्वानुमानित लाभ के आधार पर प्लेटफ़ॉर्म और टूलिंग निवेशों को मंज़ूरी देते हैं और लगभग कभी बाद में उनका ऑडिट नहीं करते — ठीक वही विकृति जिसे ठीक करने के लिए लाभ-साकारीकरण प्रबंधन मौजूद है। इसका हल्का संस्करण: भौतिकता-सीमा से ऊपर हर प्रस्ताव एक लाभ-स्वामी, एक आधार-रेखा मेट्रिक और एक निश्चित समीक्षा-तिथि (आमतौर पर लाइव होने के छह महीने बाद) नामित करता है, और पिछले प्रस्तावों की साकारीकरण-दरों को इस आधार पर छूट देनी चाहिए कि संगठन किसी टीम या विक्रेता के अगले पूर्वानुमान पर कितना भरोसा करता है। यह [ग्रीन बुक आकलन](../green-book-appraisal/) से जुड़कर चक्र को पूरा करता है, जो वह पूर्वानुमान तय करता है जिसका यह अनुशासन ऑडिट करता है, और यह उसी तर्क के पीछे है जो व्यापक रूप से रिपोर्ट किए गए इस निष्कर्ष के पीछे है कि अधिकांश जेनरेटिव-AI पायलट कोई मापने योग्य प्रतिफल नहीं दिखाते — देखें [सार्वजनिक क्षेत्र में AI उत्पादकता](../ai-productivity-in-the-public-sector/) — क्योंकि जिन पायलटों ने *वास्तव में* मूल्य लौटाया, वे लगभग बिना अपवाद के वही थे जिनकी शुरुआत से ही एक नामित, ट्रैक करने योग्य लाभ-पंक्ति थी। यह इस भेद पर भी निर्भर करता है कि वास्तव में क्या डिलीवर हुआ और वास्तव में क्या साकार हुआ — देखें [आउटकम बनाम आउटपुट](../outcomes-vs-outputs/)।

## सामान्य त्रुटियाँ

- **लाइव होने से पहले कोई आधार-रेखा न होना**: यह घातक, अपूरणीय चूक है — इसके बिना कोई साकारीकरण-दर कभी परिकलित नहीं की जा सकती, केवल दावा की जा सकती है।
- **लाभ का अनाथ होना**: बिना नामित स्वामी वाले लाभ का डेटा कोई एकत्र नहीं करता, और हर पोर्टफ़ोलियो समीक्षा इसे डिफ़ॉल्ट रूप से "मोटे तौर पर ट्रैक पर" रिपोर्ट करती है।
- **कार्यक्रम पोर्टफ़ोलियो में लाभों की दोहरी-गणना**: दो परियोजनाएँ दोनों एक ही मुक्त हुई केसवर्कर-क्षमता को अपने लाभ के रूप में दावा करती हैं — इसे पकड़ने के लिए पूरे पोर्टफ़ोलियो में एक ही लाभ-रजिस्टर रखें।
- **साकारीकरण-नाटक (realization theatre)**: आसान गुणात्मक जीत को प्रमुखता से मापना और रिपोर्ट करना, जबकि नक़दी और क्षमता की पंक्तियाँ चुपचाप अनजाँची रह जाती हैं।
- **डिलीवरी को साकारीकरण समझ लेना**: कोई परियोजना जो अपने माइलस्टोन "समय पर और बजट के भीतर" बंद करती है, इस बारे में कुछ नहीं बताती कि पूर्वानुमानित लाभ वास्तव में हुआ या नहीं — IPA का मार्गदर्शन इन्हें दो अलग-अलग साक्ष्य-श्रृंखलाओं वाले दो अलग प्रश्न मानता है।

## स्रोत

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
