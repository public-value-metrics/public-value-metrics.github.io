# परिणाम-भुगतान और सामाजिक प्रभाव बॉन्ड (Payment by Results and Social Impact Bonds, PbR/SIB)

परिणाम-भुगतान (PbR) किसी प्रदाता को सत्यापित परिणामों के आधार पर भुगतान करता है, की गई गतिविधियों के आधार पर नहीं। एक सामाजिक प्रभाव बॉन्ड (SIB) एक विशिष्ट PbR वित्तपोषण संरचना है जिसमें निजी या परोपकारी निवेशक अग्रिम रूप से सेवा-डिलीवरी को वित्तपोषित करते हैं और उन्हें केवल तभी — एक प्रतिफल के साथ — चुकाया जाता है जब स्वतंत्र रूप से मापे गए परिणाम सहमत सीमाओं को पूरा करते हैं, जिससे डिलीवरी-जोख़िम करदाता से निवेशक की ओर स्थानांतरित होता है।

## यह क्यों महत्वपूर्ण है

दुनिया का पहला SIB सितंबर 2010 में HMP Peterborough में लॉन्च हुआ: Social Finance ने "One Service" को वित्तपोषित करने के लिए 17 निवेशकों से £50 लाख जुटाए, जो पुनर्अपराध कम करने के लिए छोटी-सज़ा वाले क़ैदियों (12 महीने से कम) के साथ काम करता था, जिसमें Ministry of Justice और Big Lottery Fund सहमत हुए कि वे निवेशकों को केवल तभी चुकाएँगे जब पुनः-दोषसिद्धि की घटनाएँ एक मिलान राष्ट्रीय तुलना-समूह के विरुद्ध कम से कम 7.5% कम हों। Peterborough पायलट के अंतिम समूह ने पुनर्दोषसिद्धि में 9.7% की कमी दर्ज की, जो सीमा से आरामदायक रूप से ऊपर थी, और निवेशकों को एक प्रतिफल के साथ चुकाया गया। यह तंत्र इसलिए मायने रखता था क्योंकि इसने एक विशिष्ट कमीशनिंग समस्या हल की: सरकार इनपुट के बजाय परिणामों के लिए भुगतान करना चाहती थी, लेकिन किसी ऐसे हस्तक्षेप का वित्तीय जोख़िम नहीं उठा सकती थी जो काम न करे, इसलिए SIB संरचना ने वह जोख़िम उन निवेशकों पर स्थानांतरित किया जो इसकी गारंटी लेने को तैयार थे। Oxford के Blavatnik School of Government में Government Outcomes Lab (GO Lab) अब दुनिया भर में PbR और SIB प्रदर्शन पर सबसे पूर्ण सार्वजनिक साक्ष्य-आधार बनाए रखता है, विश्व भर में 200 से अधिक इम्पैक्ट बॉन्ड को ट्रैक करता है और यह शोध प्रकाशित करता है कि कौन-सी डिज़ाइन-विशेषताएँ सफलता या विफलता से संबंधित हैं। साक्ष्य-आधार बार-बार जिस सबक पर लौटता है वह यह है कि *चुना गया परिणाम-मेट्रिक*, और उसे चूकने का जोख़िम कौन उठाता है, लगभग हर उस चीज़ को तय करता है कि एक PbR अनुबंध व्यवहार में वास्तव में कैसे व्यवहार करता है।

## गणितीय आधार

```
PbR payment = base payment (if any) + Σ (outcome achieved × unit price per outcome)

Social impact bond investor return:
  Investor outlay   = upfront capital funding service delivery
  Outcome payment   = commissioner pays only if outcome ≥ threshold, scaled by
                       how far above threshold performance lands
  Investor return   = outcome payments received − investor outlay
                       (a rate of return, often capped, reflecting risk taken)

Key design parameters that determine the whole contract's behaviour:
  Outcome metric        — must be an outcome, not an output (see outcomes-vs-outputs)
  Comparison/counterfactual — usually a matched cohort (see counterfactual-analysis)
  Payment threshold      — minimum improvement before any payment triggers
  Payment curve           — linear, stepped, or capped above the threshold
  Attribution/deadweight discount — see additionality-and-deadweight
```

## व्यावहारिक उदाहरण

**Peterborough One Service** (प्रकाशित मूल्यांकनों से लिए गए उदाहरणात्मक आँकड़े):

```
Investor capital raised:         £5,000,000
Cohort:                          ~3,000 short-sentence male prisoners over two cohorts
Threshold:                       ≥7.5% reduction in reconviction events vs matched
                                  national comparison group, or no payment
Cohort 1 result:                 8.4% reduction — below the contractual bar for that
                                  cohort alone under the original rules
Combined/final cohort result:    9.7% reduction — above threshold
Outcome payment:                 government (Ministry of Justice / Big Lottery Fund)
                                  pays per percentage point above threshold, funding
                                  investor repayment plus a return
```

**स्थानीय प्राधिकरण PbR अनुबंध (उदाहरणात्मक)**: एक परिवार-हस्तक्षेप सेवा को प्रति रेफ़र किए गए परिवार £4,000 (गतिविधि-भुगतान) प्लस बंद होने के 12 महीने बाद बिना किसी आगे बाल-सुरक्षा रेफ़रल वाले प्रति परिवार £6,000 (परिणाम-भुगतान) पर कमीशन किया जाता है। 200 परिवार रेफ़र किए गए, 150 मामले बंद हुए, 96 12 महीनों पर रेफ़रल-मुक्त रहते हैं:

```
Activity payment  = 200 × £4,000 = £800,000
Outcome payment   = 96 × £6,000  = £576,000
Total contract cost = £1,376,000 for 96 confirmed sustained outcomes
Cost per confirmed outcome ≈ £14,333 (see cost-per-outcome)
```

## सॉफ़्टवेयर इंजीनियरिंग से संबंध

परिणाम-भुगतान डेटा-समस्या होने से पहले एक प्रोत्साहन-संरेखण समस्या है, और डेटा-प्रणाली वह जगह है जहाँ वह संरेखण या तो टिकता है या टूटता है। स्वतंत्र, छेड़छाड़-प्रमाण परिणाम-सत्यापन ही पूरा खेल है: कमीशनर और प्रदाता के पास इस बारे में विरोधी प्रोत्साहन होते हैं कि किसी अस्पष्ट मामले को कैसे कोड किया जाए, इसलिए परिणाम रिकॉर्ड करने वाली प्रणाली को एक ऑडिट-ट्रेल, स्वतंत्र सत्यापनकर्ता (अक्सर प्रदाता से अलग निकाय, कभी-कभी पुलिस या लाभ रिकॉर्ड से मिलान करने वाला एक आधिकारिक सांख्यिकी निकाय) के साथ एक डेटा-साझाकरण समझौता, और परिणाम-परिभाषा का अपरिवर्तनीय वर्ज़निंग चाहिए — [सार्वजनिक क्षेत्र KPI](../public-sector-kpis/) में "मेट्रिक को फिर से परिभाषित करना" त्रुटि का PbR-समतुल्य। श्रेय-गणना [काउंटरफ़ैक्चुअल विश्लेषण](../counterfactual-analysis/) की मिलान-समूह विधियों पर निर्भर करती है, जिन्हें पुनरुत्पादन-योग्य, ऑडिट-योग्य कोड चाहिए, एक बार की स्प्रेडशीट नहीं। और मेट्रिक स्वयं एक वास्तविक परिणाम होना चाहिए, कोई प्रॉक्सी गतिविधि नहीं — देखें [आउटकम बनाम आउटपुट](../outcomes-vs-outputs/) — क्योंकि किसी आउटपुट के लिए भुगतान करने वाला PbR अनुबंध अतिरिक्त लेन-देन-लागत के साथ केवल व्यवसाय-सामान्य वित्तपोषण को फिर से लेबल करता है। जहाँ किसी SIB के सामाजिक प्रतिफल को भावी रूप से मॉडल किया जा रहा है, वह आकलन आमतौर पर सीधे [सामाजिक निवेश प्रतिफल](../social-return-on-investment/) पद्धति से उधार लेता है।

## सामान्य त्रुटियाँ

- **आसानी से हेराफेरी योग्य प्रॉक्सी परिणाम के लिए भुगतान करना**: "सेशन में उपस्थिति" एक परिणाम के रूप में सजाई गई गतिविधि है; ऐसा माप चाहिए जो मांगे गए वास्तविक परिवर्तन को दर्शाए (पुनर्अपराध, रोज़गार, आवास-स्थिरता)।
- **कोई विश्वसनीय काउंटरफ़ैक्चुअल नहीं**: बिना किसी मिलान तुलना-समूह के, कोई सुधार माध्य की ओर प्रतिगमन या एक व्यापक प्रवृत्ति हो सकता है, कार्यक्रम का प्रभाव नहीं — देखें [काउंटरफ़ैक्चुअल विश्लेषण](../counterfactual-analysis/) और [अतिरिक्तता और डेडवेट](../additionality-and-deadweight/)।
- **लेन-देन और मूल्यांकन लागतों को कम आँकना**: PbR/SIB योजनाओं के लिए स्वतंत्र सत्यापन, डेटा-लिंकेज और अनुबंध-प्रशासन नियमित रूप से अनुबंध-मूल्य के दोहरे-अंक प्रतिशत तक पहुँच जाते हैं — GO Lab का साक्ष्य-आधार इसे योजना-समाप्ति के एक दोहराए जाने वाले चालक के रूप में दर्ज करता है।
- **चुनिंदा-चयन या "पार्किंग"**: प्रति परिणाम भुगतान पाने वाले प्रदाताओं के पास उन ग्राहकों को प्राथमिकता देने का सीधा प्रोत्साहन होता है जो वैसे भी सफल होने की सबसे अधिक संभावना रखते हैं और सबसे कठिन मामलों को कम प्राथमिकता देते हैं — इसका मुक़ाबला करने के लिए भुगतान-स्तर या केस-मिश्रण समायोजन डिज़ाइन करें।

## स्रोत

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
