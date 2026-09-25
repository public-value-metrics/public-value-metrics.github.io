# विश्वास और वैधता मेट्रिक्स (Trust and Legitimacy Metrics)

वैधता और समर्थन Mark Moore के *Creating Public Value* (1995) में "रणनीतिक त्रिकोण" के तीन पक्षों में से एक है — सार्वजनिक मूल्य स्वयं और परिचालन क्षमता के साथ — और यह वह पक्ष है जो सबसे अधिक बार बिना मापा हुआ रह जाता है, क्योंकि किसी बजट या आउटपुट-गणना के विपरीत, वैधता के साथ कोई स्पष्ट एकल संख्या जुड़ी नहीं है। विश्वास और वैधता मेट्रिक्स प्रॉक्सी-मापों का वह परिवार है जिसे सरकारें उस अंतर को भरने के लिए उपयोग करती हैं: संस्थागत विश्वास-सर्वेक्षण, निगरानी-निकाय विश्वास-रेटिंग, शिकायत और अपील डेटा, और राजनीतिक/विधायी समर्थन संकेतक।

## यह क्यों महत्वपूर्ण है

Moore का तर्क यह है कि एक सार्वजनिक प्रबंधक जो वास्तविक मूल्य देता है लेकिन राजनीतिक और सार्वजनिक वैधता खो देता है, अंततः उस वैधीकरण-वातावरण को खो देगा जो इसे डिलीवर करते रहने के लिए आवश्यक है — वित्तपोषण कट जाता है, जनादेश संकुचित हो जाते हैं, और सेवा भूखी रह जाती है चाहे उसके परिणाम कितने भी अच्छे हों। इसलिए वैधता एक डिलीवरी-स्कोरकार्ड पर बाद में जोड़ा गया जनसंपर्क-विचार नहीं है; यह इस बात का एक भार-वहन करने वाला इनपुट है कि क्या मिशन बिल्कुल जारी रह सकता है, यही कारण है कि यह [सार्वजनिक मूल्य स्कोरकार्ड](../public-value-scorecard/) में एक फ़ुटनोट के बजाय एक सह-समान परिप्रेक्ष्य के रूप में बैठता है। OECD का "Trust in Government" सर्वेक्षण कार्यक्रम इसे मात्रात्मक बनाने का प्रमुख अंतर-राष्ट्रीय प्रयास है: यह OECD सदस्य देशों में उन नागरिकों के हिस्से को ट्रैक करता है जो कहते हैं कि उन्हें अपनी राष्ट्रीय सरकार में विश्वास है, और इसका दीर्घकालिक डेटा दिखाता है कि विश्वास झटकों के प्रति अत्यधिक संवेदनशील है — 2008 का वित्तीय संकट और COVID-19 महामारी दोनों ने तीव्र राष्ट्रीय-स्तरीय बदलाव उत्पन्न किए, जिनके बाद अक्सर केवल आंशिक सुधार हुआ, OECD के विश्लेषण में लगातार यह पाया गया कि माना गया *क्षमता* (क्या सरकार वह देती है जो वह कहती है) और माना गया *निष्पक्षता/अखंडता* (क्या सरकार को भ्रष्टाचार या पक्षपात के बिना कार्य करते हुए देखा जाता है) विश्वास-आँकड़े के दो सबसे मज़बूत चालक हैं, जो किसी एकल लेन-देन से संतुष्टि से अलग हैं। सरकारें तेज़ी से वैधता को अधिक बारीक स्तर पर भी क्रियान्वित करने की कोशिश करती हैं — यूके के स्वतंत्र नियामक और निरीक्षणालय (National Audit Office, Parliamentary and Health Service Ombudsman, Ofsted और Care Quality Commission जैसे क्षेत्र-नियामक) "क्या जनता अभी भी इस सेवा पर भरोसा करती है" को ऑडिट-योग्य रेटिंग में बदलते हुए संस्थागत वैधता-जाँच के रूप में कार्य करते हैं।

## गणितीय आधार

विश्वास और वैधता एक ढाँचा-आकार का विषय है जिसके उपयोग-योग्य मात्रात्मक प्रॉक्सी हैं:

```
Institutional trust index (OECD-style)
  = % of survey respondents answering "yes" to a confidence-in-government question,
    tracked over time, disaggregated by demographic group

Legitimacy proxy set (no single number substitutes for the construct):
  - Upheld complaints per 1,000 service users (ombudsman or internal complaints data)
  - Judicial review / appeals success rate against the body's decisions
  - Independent regulator/inspectorate rating (e.g. "outstanding" to "inadequate" bands)
  - Legislative/oversight committee confidence votes or critical report frequency
  - Freedom of information request volume and disclosure/refusal rate, as a proxy
    for perceived transparency

Legitimacy is corroborated, not calculated: a defensible legitimacy assessment
triangulates several of the above rather than relying on any single proxy.
```

## व्यावहारिक उदाहरण

**राष्ट्रीय कर-प्राधिकरण**: एक वार्षिक सार्वजनिक-मूल्य रिपोर्ट के लिए वैधता-त्रिकोणीकरण।

```
OECD-style trust proxy (department-specific confidence survey):
  58% of respondents say they trust the authority to "treat me fairly" (down from
  64% two years prior)

Complaints data:
  Upheld complaints: 4.2 per 1,000 taxpayer interactions (up from 3.1 per 1,000)

Ombudsman referrals:
  Referrals to the independent Adjudicator's Office: 1,850 in the year, of which
  61% upheld in full or part against the authority (up from 48% the prior year)

Reading across all three: trust is falling, upheld complaints are rising, and
independent ombudsman findings are increasingly siding against the authority —
three independent signals converging on the same direction, which is what makes
this a credible legitimacy finding rather than noise in any one series.
```

इनमें से किसी एक आँकड़े का हिलना कमज़ोर साक्ष्य होगा; उसी अवधि में एक साथ हिलते तीन स्वतंत्र माप वह प्रतिमान है जो किसी वैधता-दावे को बचाव-योग्य बनाता है।

## सॉफ़्टवेयर इंजीनियरिंग से संबंध

वैधता-मेट्रिक्स शायद ही कभी किसी एक टीम के डैशबोर्ड से उत्पन्न होते हैं, जो स्वयं डिज़ाइन-सबक है: ऐसी रिपोर्टिंग-पाइपलाइन बनाएँ जो स्वतंत्र बाहरी स्रोतों (ओम्बड्समैन केसवर्क प्रणालियाँ, नियामक-रेटिंग फ़ीड, सर्वेक्षण-विक्रेता) से डेटा को ग्रहण और मिला सके, न कि वैधता-रिपोर्टिंग को एक आंतरिक-केवल मेट्रिक के रूप में आर्किटेक्ट करें, क्योंकि आंतरिक रूप से स्रोतित वैधता-दावे ("हम ख़ुद को विश्वसनीय मानते हैं") में साक्ष्यात्मक वज़न बहुत कम होता है — वही स्वतंत्रता-समस्या जो [सार्वजनिक मूल्य स्कोरकार्ड](../public-value-scorecard/) में वैधता परिप्रेक्ष्य के लिए नोट की गई है। शिकायत और अपील डेटा-पाइपलाइन उतनी ही डेटा-गुणवत्ता कठोरता की हक़दार हैं जितनी [परिणाम-भुगतान](../payment-by-results-and-social-impact-bonds/) अनुबंधों को खिलाने वाली कोई परिणाम-पाइपलाइन, क्योंकि एक कम-रिपोर्ट किया गया या ख़राब-वर्गीकृत शिकायत-डेटासेट एक साल बाद किसी विश्वास-सर्वेक्षण में दिखाई देने से पहले चुपचाप एक वैधता-समस्या को कम आँकता है। इस संस्था-स्तरीय माप के लेन-देन-स्तरीय समकक्ष के लिए देखें [नागरिक संतुष्टि मेट्रिक्स](../citizen-satisfaction-metrics/), और इस पक्ष के अंतर्गत Moore के पूर्ण रणनीतिक-त्रिकोण ढाँचे के लिए देखें [सार्वजनिक मूल्य](../public-value/)।

## सामान्य त्रुटियाँ

- **संतुष्टि को वैधता के लिए प्रॉक्सी मानना**: कोई नागरिक किसी एकल लेन-देन के इंटरफ़ेस से संतुष्ट हो सकता है जबकि संस्था पर समग्र रूप से अविश्वास कर सकता है (या इसके उलट) — दोनों को अलग-अलग क्यों रिपोर्ट किया जाना चाहिए इसके लिए देखें [नागरिक संतुष्टि मेट्रिक्स](../citizen-satisfaction-metrics/)।
- **एक एकल स्व-रिपोर्ट किए गए मेट्रिक पर निर्भर रहना**: बिना किसी स्वतंत्र पुष्टिकरण (ओम्बड्समैन डेटा, नियामक-रेटिंग) के आंतरिक रूप से चलाया गया एक विश्वास-सर्वेक्षण स्व-मार्किंग के रूप में ख़ारिज करना आसान है; त्रिकोणीकरण करें।
- **जनसांख्यिकीय विभाजन को नज़रअंदाज़ करना**: समग्र राष्ट्रीय विश्वास-आँकड़े विशिष्ट समूहों (आयु, जातीयता, आय, या क्षेत्र के अनुसार) में तीव्र रूप से भिन्न वैधता को छिपा सकते हैं — OECD का अपना Trust in Government प्रकाशन ठीक इसी कारण से विभाजित करता है।
- **एक एकल झटका-चालित गिरावट को एक स्थायी प्रवृत्ति मानना**: विश्वास-आँकड़े संकटों (वित्तीय दुर्घटनाएँ, महामारी, उच्च-प्रोफ़ाइल घोटाले) के आसपास तीव्रता से हिलते हैं और आंशिक रूप से सुधरते हैं; अधिक डेटा के बिना एक झटके-के-बाद के एकल डेटा-बिंदु को दीर्घकालिक गिरावट में नहीं बदला जाना चाहिए।

## स्रोत

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
