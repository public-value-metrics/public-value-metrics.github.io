# सरकार में AI का मूल्य (AI in Government Value)

सरकार में AI का मूल्य यह अनिवार्यता है कि किसी सार्वजनिक सेवा में उपयोग की जाने वाली AI प्रणाली वही धन-मूल्य (value-for-money) और सार्वजनिक-मूल्य मानदंड पूरा करे जो किसी भी अन्य व्यय-निर्णय के लिए अपेक्षित है — न तो इसलिए कम मानदंड कि वह नई है, और न ही इसलिए अधिक कठोर मानदंड कि उससे भय है। यह वह प्रश्न है जिसका उत्तर किसी डिलीवरी टीम को AI फ़ीचर लॉन्च होने के *बाद* नहीं, *पहले* देना चाहिए: क्या आश्वासन, निगरानी और जोख़िम की ईमानदार क़ीमत जोड़ने के बाद भी यह अपनी लागत से अधिक मूल्य उत्पन्न करता है?

## यह क्यों महत्वपूर्ण है

यूके के Central Digital and Data Office (CDDO) ने 2024 में अपना Generative AI Framework for Government प्रकाशित किया, जो जून 2023 के पहले के अंतरिम मार्गदर्शन पर आधारित था, और इसे दस सिद्धांतों के इर्द-गिर्द संरचित किया गया — जेनरेटिव AI क्या है, इसके नैतिक निहितार्थ, टूल सुरक्षा, गुणवत्ता-आश्वासन नियंत्रण, संपूर्ण जेनरेटिव AI जीवनचक्र का प्रबंधन, वास्तविक उपयोग-मामलों की पहचान, क्रॉस-गवर्नमेंट सहयोग, पारदर्शिता, कौशल और गवर्नेंस। यह ढाँचा "सार्थक मानव नियंत्रण" और संपूर्ण जीवनचक्र प्रबंधन पर इतना ज़ोर इसलिए देता है क्योंकि AI परियोजना बिज़नेस केस में एक ऐसी विफलता-प्रवृत्ति होती है जो अन्य आईटी व्यय में नहीं होती: किसी पायलट का हेडलाइन उत्पादकता आँकड़ा निकालना आसान होता है और उसे बढ़ा-चढ़ाकर पेश करना भी आसान, क्योंकि उसे उस सत्यापन, सुधार और निगरानी के बोझ का हिसाब लगाए बिना मापा जाता है जो टूल स्वयं उत्पन्न करता है। इस ढाँचे के साथ-साथ, Algorithmic Transparency Recording Standard (ATRS) सार्वजनिक निकायों को एक मानकीकृत रिकॉर्ड — उद्देश्य, उपयोग किया गया डेटा, प्रदर्शन, निष्पक्षता-परीक्षण, मानव-निगरानी व्यवस्था — प्रकाशित करने की अपेक्षा करता है, उन एल्गोरिदमिक टूलों के लिए जिनका व्यक्तियों से जुड़े निर्णयों पर महत्वपूर्ण प्रभाव पड़ता है, जिससे AI प्रणाली की आश्वासन-लागत सार्वजनिक रिकॉर्ड का विषय बन जाती है, न कि कोई आंतरिक अनुमान जिसे कोई टीम चुपचाप छोड़ सके।

## गणितीय आधार

AI को अपनाना मानक [धन का सर्वोत्तम मूल्य](../value-for-money/) आकलन के विकल्प के रूप में नहीं, बल्कि उसमें जोड़ी गई चीज़ के रूप में आँका जाता है, जिसमें AI-विशिष्ट पदों को एक ही "उत्पादकता लाभ" आँकड़े में समेटने के बजाय स्पष्ट रूप से दर्शाया जाता है:

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

## व्यावहारिक उदाहरण

**नियमित काउंसिल-टैक्स पूछताछों के पहले उत्तर लिखने के लिए जेनरेटिव AI टूल का उपयोग करने वाला एक स्थानीय प्राधिकरण**: 25,000 पूछताछ/वर्ष, पहले पूरी तरह केसवर्करों द्वारा निपटाई जाती थीं, औसतन 14 मिनट/पूछताछ, भारित स्टाफ़ लागत £34/घंटा।

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

## सॉफ़्टवेयर इंजीनियरिंग से संबंध

यहीं पर [सार्वजनिक क्षेत्र में AI उत्पादकता](../ai-productivity-in-the-public-sector/) और यह विषय आपस में मिलते हैं: सार्वजनिक सेवाओं में AI फ़ीचर बनाने वाली इंजीनियरिंग टीमों के पास ही वह इंस्ट्रूमेंटेशन होता है जो व्यावहारिक उदाहरण में दिखाए गए "वास्तविक" आँकड़े को संभव बनाता है — वास्तविक समीक्षा समय, ड्राफ़्ट और भेजे गए उत्तर के बीच संपादन-दूरी, और एस्केलेशन दर को लॉग करना, न कि पायलट की डेमो परिस्थितियों पर भरोसा करना। AI फ़ीचरों को [डिजिटल सेवा मानक](../digital-service-standard/) के बिंदु 9 (सुरक्षित सेवा, उपयोगकर्ता गोपनीयता) के आधार पर आँका जाना चाहिए और जहाँ टूल नागरिक-डेटा को छूता है वहाँ [सार्वजनिक क्षेत्र साइबर सुरक्षा मूल्य](../public-sector-cybersecurity-value/) के साथ क्रॉस-रेफ़रेंस किया जाना चाहिए, और व्यक्तियों से जुड़े निर्णयों पर महत्वपूर्ण प्रभाव रखने वाली किसी भी AI प्रणाली को आकलन-तैयार माने जाने से पहले एक ATRS रिकॉर्ड चाहिए, ठीक वैसे ही जैसे किसी सेवा को लाइव होने से पहले पास किए गए [डिजिटल सेवा मानक](../digital-service-standard/) आकलन की आवश्यकता होती है।

## सामान्य त्रुटियाँ

- **AI-वॉशिंग**: AI अपनाने के लिए आरक्षित फंडिंग या ध्यान पाने हेतु मौजूदा नियम-आधारित स्वचालन को "AI" के रूप में फिर से लेबल करना, बिना उन सटीकता या पूर्वाग्रह-जोखिमों के जो वास्तव में इस ढाँचे की अतिरिक्त जाँच को उचित ठहराते हैं।
- **पायलट उत्पादकता मापना, उत्पादन उत्पादकता नहीं**: पायलट चुनिंदा परीक्षण-मामलों पर लगे हुए, ध्यान देने वाले समीक्षकों के साथ चलाए जाते हैं; उत्पादन पूरे अव्यवस्थित मामला-मिश्रण पर चलता है, ऐसे समीक्षकों के साथ जो समय के साथ स्वचालन-पूर्वाग्रह (automation bias) विकसित कर लेते हैं और आउटपुट की कम जाँच करते हैं — दोनों ही ईमानदार निगरानी-लागत आँकड़े को विकृत करते हैं।
- **यह सोचकर ATRS पंजीकरण छोड़ देना कि टूल "वास्तव में स्वचालित निर्णय-निर्माण नहीं है"**: मानक की सीमा किसी व्यक्ति से जुड़े निर्णय पर महत्वपूर्ण प्रभाव है, जिसे अधिकांश नागरिक-मुखी AI ड्राफ़्टिंग या ट्राइएज टूल पूरा करते हैं, भले ही तकनीकी रूप से कोई मनुष्य अंतिम मंज़ूरी देता हो।
- **त्रुटियों के वितरणात्मक प्रभाव को नज़रअंदाज़ करना**: सभी उपयोगकर्ताओं में औसत की गई किसी AI प्रणाली की त्रुटि-दर विशिष्ट समूहों के लिए कहीं अधिक त्रुटि या पूर्वाग्रह दर छिपा सकती है; [वितरणात्मक भारांकन](../distributional-weighting/) को केवल समग्र सटीकता आँकड़े पर ही नहीं, बल्कि जोख़िम-समायोजित हानि पद पर भी लागू किया जाना चाहिए।

## स्रोत

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
