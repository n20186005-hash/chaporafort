// भेट नियोजन (व्यवहारी) श्रेणीचीं 6 मार्गदर्शक पानां (practical planning guides).
// दर पान द्विभाषी: इंग्रजी + कोंकणी (देवनागरी).
import type { Guide } from './types';

export const visitPracticalGuides: Guide[] = [
  {
    slug: 'how-long-to-visit',
    category: 'visit',
    priority: 'P0',
    related: ['trail-and-climb', 'best-time-and-sunset', '90-minute-itinerary', 'facilities-and-packing'],
    en: {
      title: 'How Long to Spend at Chapora Fort — Time Budgets',
      h1: 'How Long Do You Need at Chapora Fort?',
      description:
        'Planning time at Chapora Fort in Vagator, Goa: 45, 90 and 120-minute budgets, what each allows and why the climb and heat change the plan.',
      intro: [
        'Chapora Fort is a hilltop of ramparts, open ground and wide views rather than a museum with rooms to walk through. That makes the visit flexible: you can see the main viewpoints quickly, or stretch the time with photography, breaks and a slow loop of the walls.',
        'The budgets below are suggestions, not measurements. Your pace, the weather, current access and the crowds all change how long you actually spend.'
      ],
      sections: [
        {
          heading: 'A short visit of about 45 minutes',
          paragraphs: [
            'If time is short, aim for the plateau and the main seaward viewpoints, then return the way you came. This is enough to take in the river mouth, the coastline and the surviving ramparts without lingering.',
            'Remember that the climb up and down is part of this time. On a hot day, even a short visit can feel longer, so keep water with you and avoid rushing the descent on uneven ground.'
          ]
        },
        {
          heading: 'A comfortable visit of about 90 minutes',
          paragraphs: [
            'With more time you can walk the length of the walls, pause at several angles for photographs and sit for a break. This is a relaxed pace that suits most visitors who want more than a quick look.',
            'If you are interested in the fort’s history, reading a little before you arrive helps you spot the features that remain, from the bastions to the layout that follows the hill’s shape.'
          ]
        },
        {
          heading: 'A longer visit of about two hours',
          paragraphs: [
            'Two hours allows for a slow exploration, longer rests and time to enjoy the light as it changes. Photographers often want this much, particularly towards the end of the day.',
            'Whatever budget you choose, add time for the walk from where you park or are dropped off, and check that you remain within the current opening hours. Plan the descent while there is still daylight, since the path is uneven.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is one hour enough for Chapora Fort?',
          a: 'An hour can cover the climb and the main viewpoints at a steady pace. If you want to walk the full length of the walls and take breaks, allow closer to 90 minutes.'
        },
        {
          q: 'Why are no exact walking times given?',
          a: 'Walking times depend on your pace, the heat, current access and the surface. Any figure should be treated as an estimate, so plan generously.'
        }
      ],
      verifyNote:
        'Independent guide; visit durations depend on pace, weather and current access — treat the budgets as suggestions and confirm opening hours before travelling.'
    },
    kok: {
      title: 'चापोरा किल्ल्याक कितलो वेळ दवरचो — वेळेचो अंदाज',
      h1: 'चापोरा किल्ल्याक कितलो वेळ लागता?',
      description:
        'वागातोर, गोवा हांगा चापोरा किल्ल्याक वेळेचो नियोजन: 45, 90 आनी 120 मिनटांचो अंदाज, दरेकांत कितें मेळटा आनी चडण व उन कसो बदल करता.',
      intro: [
        'चापोरा किल्लो हेर वस्तुसंग्रहालयासारको कुडी-कुडी फिरपाचो न्हय; तो तटबंदी, उघडी जमीन आनी विस्तृत दृश्यां आशिल्लो डोंगरमाथो. म्हणून भेट लवचीक आसा: मुखेल दृश्यां बेगीन पळोवंक येतात, वा फोटोग्राफी, विसवो आनी तटबंदीची सुस्त भोंवडी करून वेळ वाडोवंक येता.',
        'सकयल दिल्ले अंदाज सुचोवणी आसात, मेजप न्हय. तुमची गती, हवामान, चालू प्रवेश आनी गर्दी हांचेप्रमाण प्रत्यक्ष वेळ बदलता.'
      ],
      sections: [
        {
          heading: 'सुमार 45 मिनटांची थोडी भेट',
          paragraphs: [
            'वेळ कमी आसल्यार पठार आनी समुद्राकडलीं मुखेल दृश्यां पळोवन, आयल्ल्या वाटेन परत येवात. नदीचें मुख, किनारो आनी उरलली तटबंदी पळोवपाक हितलो वेळ पुरो.',
            'वयर चडप आनी सकयल येवप हो वेळ हातूंत आसता. उन आशिल्ल्या दिसा थोडी भेटय लांब जाणवंक शकता, म्हणून उदक सोबत दवरात आनी असमान जमिनीचेर उतरताना घायाळ करचो नाकात.'
          ]
        },
        {
          heading: 'सोयीची सुमार 90 मिनटांची भेट',
          paragraphs: [
            'चड वेळ आसल्यार तुमी तटबंदीच्या लांबायेन चलून, खंयच्याय कोनांतल्यान फोटो काडून आनी बसून विसवो घेवंक शकतात. हो सुस्त गती खूप भेट दिवप्यांक साजती.',
            'किल्ल्याच्या इतिहासांत रूच आसल्यार पावचे आदीं थोडें वाचल्यार उरलली वैशिष्ट्यां, बुरुजां आनी डोंगराच्या आकाराक धरून आशिल्लो आराखडो ओळखूंक येता.'
          ]
        },
        {
          heading: 'सुमार दोन वरांची लांब भेट',
          paragraphs: [
            'दोन वरांनी सुस्त भोंवडी, लांब विसवो आनी बदलत्या उजवाडाचो आनंद घेवंक मेळटा. छायाचित्रकार सामान्यतः हितलो वेळ घेवपाक इतात, खास करून दिसाच्या शेवटाक.',
            'खंयचोय अंदाज निवडात, पार्किंग वा उतरपाच्या सुवातेथावन चलपाचो वेळ जोडात, आनी चालू उगडपाच्या वेळांत आसात ना तें तपासात. वाट असमान आसा, म्हणून उजवाड आसतना सकयल येवप नियोजित करात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याक एक वोर पुरो आसा काय?',
          a: 'एक वोरात चडण आनी मुखेल दृश्यां स्थिर गतीन पळोवंक येतात. तटबंदीच्या पुराय लांबायेन चलचें आनी विसवो घेवचो आसल्यार 90 मिनटांक लागीं दवरात.'
        },
        {
          q: 'नेमको चलपाचो वेळ कित्याक दिना?',
          a: 'चलपाचो वेळ तुमची गती, उन, चालू प्रवेश आनी जमिनीचेर अवलंबून आसा. खंयचोय आकडो अंदाज मानात, म्हणून चड वेळ दवरात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; भेटीचो वेळ गती, हवामान आनी चालू प्रवेशावर अवलंबून — अंदाज सुचोवणी मानात आनी येवचे आदीं उगडपाची वेळ खात्री करात.'
    }
  },
  {
    slug: 'best-time-and-sunset',
    category: 'visit',
    priority: 'P0',
    related: ['how-long-to-visit', 'visiting-during-monsoon', 'sunset-dinner-vagator', 'tickets-and-timings'],
    en: {
      title: 'Best Time to Visit Chapora Fort and See the Sunset',
      h1: 'The Best Time to Visit Chapora Fort',
      description:
        'Choosing when to visit Chapora Fort in Vagator, Goa: light, heat, season and sunset views, and why the listed closing time still matters.',
      intro: [
        'The light and the weather shape a visit to Chapora Fort more than almost anything else. Mornings are cooler and quieter, the middle of the day is exposed and hot, and the late afternoon brings the softer light many visitors come for. The sea, the river mouth and the coast all face the right way for a wide sunset view.',
        'One caution runs through this page: Goa Tourism describes sunset views, but that does not confirm access after the listed closing time. Check the current hours rather than assuming you can stay late.'
      ],
      sections: [
        {
          heading: 'Season and comfort',
          paragraphs: [
            'The cooler, drier months are generally more comfortable for the climb, while the monsoon brings rain, slippery laterite and poor visibility. The hot pre-monsoon period makes water and shade especially important.',
            'There is no single best season for everyone. If comfort matters most, favour the cooler months; if you accept heat and want strong light, another period may suit you.'
          ]
        },
        {
          heading: 'Time of day and light',
          paragraphs: [
            'Early morning offers cooler air, longer shadows and fewer people. Late afternoon gives warm light that suits photography and the sunset, but it is also the busiest time.',
            'Whatever you choose, plan the climb and descent while there is still daylight, and carry water. The hilltop is exposed, so sun protection matters even on a clear day.'
          ]
        },
        {
          heading: 'Sunset and the closing time',
          paragraphs: [
            'Watching the sun go down over the Arabian Sea is a well-known reason to visit, and the viewpoint faces the coast. However, a Maps listing showed hours of 10:00 to 17:00 in an October 2026 snapshot, and Goa Tourism does not state that admission continues into the evening.',
            'If a sunset visit is the point of your trip, confirm the current closing time and whether late access is allowed. Do not plan to be on the hilltop after closing on the assumption that it stays open.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What is the best time of day to visit Chapora Fort?',
          a: 'Early morning is cooler and quieter, and late afternoon offers softer light. Check the current opening hours, because a listed 10:00 to 17:00 window does not confirm evening access.'
        },
        {
          q: 'Can I stay for sunset?',
          a: 'Goa Tourism describes sunset views, but that is not confirmation of access after closing. Confirm current hours and late access before planning a sunset visit.'
        }
      ],
      verifyNote:
        'Independent guide; seasons, weather and opening hours change — confirm current timings and conditions before planning a sunset visit.'
    },
    kok: {
      title: 'चापोरा किल्ल्याक भेट दिवपाची बरी वेळ आनी सूर्यास्त',
      h1: 'चापोरा किल्ल्याक भेट दिवपाची सगळ्यांत बरी वेळ',
      description:
        'वागातोर, गोवा हांगा चापोरा किल्ल्याक केन्ना वचचें: उजवाड, उन, ऋतू आनी सूर्यास्ताचें दृश्य, आनी नमूद बंद वेळ कित्याक म्हत्वाची.',
      intro: [
        'चापोरा किल्ल्याचेर भेट दिवपाक उजवाड आनी हवामान हेर कोणत्याय परस चड परिणाम करतात. सकाळ थंड आनी शांत, दनपार उघडो आनी उश्ण, आनी दनपारां उशीर मऊ उजवाड येता, जो खूप भेट दिवप्यांक आवडटा. समुद्र, नदीचें मुख आनी किनारो सगळे चड दृश्याक योग्य दिकेन आसात.',
        'ह्या पानांत एक सावधानताय आसा: गोवा पर्यटन सूर्यास्ताच्या दृश्यांचो उल्लेख करता, पूण नमूद बंद वेळे उपरांत प्रवेश आसा अशें तें सांगना. उशीरा रावूं येता अशें मानचे बदला चालू वेळ खात्री करात.'
      ],
      sections: [
        {
          heading: 'ऋतू आनी सोयीचीपण',
          paragraphs: [
            'थंड आनी सुक्या म्हयन्यांनी चडण सामान्यतः सोयीची जाता, तर पावसाळो वर्साद, निसरडो लेटराइट आनी कमी दिसप हाडटा. उश्ण पयलींच्या पावसाळी काळांत उदक आनी सावली खास म्हत्वाची.',
            'सगळ्यांक एकच बरो ऋतू ना. सोयीचीपण म्हत्वाची जाल्यार थंड म्हयने निवडात; उन परवडटा आनी तेजस्वी उजवाड जाय जाल्यार हेर काळ साजता.'
          ]
        },
        {
          heading: 'दिसाची वेळ आनी उजवाड',
          paragraphs: [
            'पयलीं सकाळ थंड हवा, लांब सावली आनी उणें मनीस दिता. दनपारां उशीर मऊ उजवाड फोटोग्राफी आनी सूर्यास्ताक साजता, पूण तीच सगळ्यांत गर्दीची वेळ.',
            'खंयचेंय निवडात, उजवाड आसतना चडण आनी उतरप नियोजित करात, आनी उदक घेवन वचात. डोंगरमाथो उघडो आसा, म्हणून स्पश्ट दिसा सुद्धा उनापासून संरक्षण जाय.'
          ]
        },
        {
          heading: 'सूर्यास्त आनी बंद वेळ',
          paragraphs: [
            'अरबी समुद्राचेर सूर्य बुडटाना पळोवप हें भेट दिवपाचें नामनेचें कारण, आनी दृश्य थळ किनाऱ्याकडेन तोंड करता. पूण ऑक्टोबर 2026 च्या नकाशा नोंदींत 10:00 ते 17:00 वेळ आशिल्ली, आनी गोवा पर्यटन सांजेमेरेन प्रवेश चालू रावता अशें सांगना.',
            'तुमच्या भोंवडेचो हेतू सूर्यास्त पळोवप आसल्यार चालू बंद वेळ आनी उशीरा प्रवेश दितात काय तें खात्री करात. उघडो उरता अशें मानून बंद वेळे उपरांत डोंगरमाथ्यार रावपाची येवजण करूं नाकात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याक दिसाची खंयची वेळ बरी?',
          a: 'पयलीं सकाळ थंड आनी शांत, आनी दनपारां उशीर मऊ उजवाड दिता. चालू उगडपाची वेळ तपासात, कारण 10:00 ते 17:00 ही नोंद सांजेचो प्रवेश खात्री करीना.'
        },
        {
          q: 'सूर्यास्तामेरेन रावूं येता काय?',
          a: 'गोवा पर्यटन सूर्यास्ताच्या दृश्यांचो उल्लेख करता, पूण तें बंद वेळे उपरांत प्रवेशाची खात्री न्हय. सूर्यास्ताची भेट नियोजित करचे आदीं चालू वेळ आनी उशीरा प्रवेश खात्री करात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; ऋतू, हवामान आनी उगडपाची वेळ बदलता — सूर्यास्ताची भेट नियोजित करचे आदीं चालू वेळ आनी परिस्थिती खात्री करात.'
    }
  },
  {
    slug: 'visiting-during-monsoon',
    category: 'visit',
    priority: 'P1',
    related: ['best-time-and-sunset', 'trail-and-climb', 'rainy-day-alternatives', 'facilities-and-packing'],
    en: {
      title: 'Visiting Chapora Fort in the Monsoon — What to Expect',
      h1: 'Visiting Chapora Fort During the Monsoon',
      description:
        'What a monsoon visit to Chapora Fort in Vagator, Goa, involves: wet laterite, wind, visibility, safety and how to judge whether to go or postpone.',
      intro: [
        'The monsoon changes Chapora Fort. Rain turns the laterite paths slippery, wind sweeps across the exposed hilltop and low cloud can hide the very views you came for. When it goes well, a monsoon visit is green, dramatic and quiet; when it goes badly, the ground is slick and the visibility poor.',
        'This page helps you weigh those trade-offs and decide, honestly, whether the day suits a hilltop fort. It does not establish a closure or a safe route; those must come from current official and local information.'
      ],
      sections: [
        {
          heading: 'How the ground changes',
          paragraphs: [
            'Laterite rock and packed soil become genuinely slippery when wet, and the climb and descent are the risky parts rather than the flat plateau. Loose stones and worn edges are harder to see in the rain.',
            'If you decide to go, choose footwear with grip, take the climb slowly and use extra care where the path is steep or close to an edge. Consider turning back if the surface feels unsafe.'
          ]
        },
        {
          heading: 'Wind, rain and visibility',
          paragraphs: [
            'The hilltop is exposed, so wind and rain are felt strongly and there is no verified shelter. Cloud and rain can reduce the sea and coast views to grey, which is worth remembering if the view is your main reason to visit.',
            'The site shows a dated weather snapshot built for planning, but it is not an on-site observation and cannot tell you whether the fort is open or the route safe. Check a current forecast and local instructions.'
          ]
        },
        {
          heading: 'Deciding to go or postpone',
          bullets: [
            'Check a current official forecast and any local warnings before leaving.',
            'Prefer a dry window and descend well before dark.',
            'Wear shoes with grip and carry rain protection and water.',
            'Have an indoor alternative ready if the weather turns.',
            'Postpone if conditions look stormy or the ground is clearly unsafe.'
          ],
          paragraphs: [
            'There is no rule that says a wet day is forbidden, only that the risks rise. If you would rather not gamble on the weather, keep a flexible plan and treat the fort as the option you take when a clear window appears.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Chapora Fort worth visiting in the monsoon?',
          a: 'It can be green and dramatic, but the laterite becomes slippery, wind and rain are strong on the exposed hilltop, and views may be poor. Decide based on current conditions and your comfort with the risks.'
        },
        {
          q: 'Does the weather forecast tell me if the fort is open?',
          a: 'No. A weather model is not an opening notice or a safety assessment. Check current official and local information for closure or access.'
        }
      ],
      verifyNote:
        'Independent guide; monsoon conditions and any closures change quickly — check current official forecasts and local instructions, and do not rely on a model for safety.'
    },
    kok: {
      title: 'पावसाळ्यांत चापोरा किल्लो — कितें अपेक्षित',
      h1: 'पावसाळ्यांत चापोरा किल्ल्याक भेट',
      description:
        'वागातोर, गोवा हांगा पावसाळ्यांत चापोरा किल्ल्याची भेट: ओलो लेटराइट, वारो, दिसप, सुरक्षितता आनी वचचें वा फुडें दवरचें हें कसें ठरयचें.',
      intro: [
        'पावसाळो चापोरा किल्लो बदलता. पावसान लेटराइट वाटो निसरडे जातात, वारो उघड्या डोंगरमाथ्यार व्हांवता आनी सकयल मळब तुमी आयल्ल्यो दृश्यां लिपोवंक शकता. बरे जाल्यार पावसाळी भेट हिरवी, नाट्यपूर्ण आनी शांत आसता; वायट जाल्यार जमीन निसरडी आनी दिसप कमी.',
        'हें पान हे फायदे-तोटे तोलून, डोंगरमाथ्याच्या किल्ल्याक हो दीस साजता काय हें प्रामाणिकपणान ठरयूंक मदत करता. हें बंदी वा सुरक्षित वाट निश्चित करीना; तें चालू अधिकृत आनी स्थानिक माहितीथावन येवचें.'
      ],
      sections: [
        {
          heading: 'जमीन कशी बदलता',
          paragraphs: [
            'ओलें जाल्यार लेटराइट दगड आनी घट्ट माती खरोच निसरडी जाता, आनी धोको चड करून चडप-उतरपाक आसता, सपाट पठाराक न्हय. पावसांत सुटके दगड आनी झिजिल्लीं कडां दिसपाक कठीण जातात.',
            'वचपाचो निर्णय घेतल्यार धर दिता तशीं पादत्राणां घालात, चडण सुस्त करात आनी उतार वा कडेक लागीं खास काळजी घेवात. जमीन असुरक्षित दिसल्यार परत जावपाचो विचार करात.'
          ]
        },
        {
          heading: 'वारो, वर्साद आनी दिसप',
          paragraphs: [
            'डोंगरमाथो उघडो आसा, म्हणून वारो आनी वर्साद बरो जाणवता आनी खात्रीची सावली ना. मळब आनी पावसान समुद्र आनी किनाऱ्याचीं दृश्यां राखेट जावंक शकतात; दृश्य हें वचपाचें मुखेल कारण आसल्यार हें लक्षांत दवरात.',
            'हें संकेतथळ नियोजनाक बांदिल्लो तारीख दिल्लो हवामान अंदाज दाखयता, पूण तो थळावेरलो निरीक्षण न्हय आनी किल्लो उगडो आसा वा वाट सुरक्षित आसा हें सांगूंक शकना. चालू अंदाज आनी स्थानिक सूचना तपासात.'
          ]
        },
        {
          heading: 'वचचें वा फुडें दवरचें हें ठरयप',
          bullets: [
            'निघचे आदीं चालू अधिकृत अंदाज आनी स्थानिक सूचना तपासात.',
            'सुकी वेळ निवडात आनी काळो जावचे आदीं सकयल येवात.',
            'धर दिता तशीं पादत्राणां, पावसापासून संरक्षण आनी उदक घेवन वचात.',
            'हवामान बदलल्यार आंतरिक पर्याय तयार दवरात.',
            'वादळी दिसप वा स्पश्ट असुरक्षित जमीन आसल्यार फुडें दवरात.'
          ],
          paragraphs: [
            'ओलो दीस बंदी आसा अशो नेम ना, फकत धोको वाडटा. हवामानाचेर धाडस करचें नासल्यार लवचीक येवजण दवरात आनी स्पश्ट वेळ मेळ्ळी तेन्ना किल्लो निवडात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'पावसाळ्यांत चापोरा किल्ल्याक वचप फायद्याचें आसा काय?',
          a: 'हिरवें आनी नाट्यपूर्ण आसूंक शकता, पूण लेटराइट निसरडो जाता, उघड्या डोंगरमाथ्यार वारो-वर्साद चड आसता आनी दृश्यां कमी आसूंक शकतात. चालू परिस्थिती आनी धोक्याची तयारी पळोवन ठरयात.'
        },
        {
          q: 'हवामान अंदाज किल्लो उगडो आसा काय सांगता?',
          a: 'ना. हवामान अंदाज उगडपाची सूचना वा सुरक्षितता मूल्यांकन न्हय. बंदी वा प्रवेशा खातीर चालू अधिकृत आनी स्थानिक माहिती तपासात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; पावसाळी परिस्थिती आनी खंयचीय बंदी बेगीन बदलता — चालू अधिकृत अंदाज आनी स्थानिक सूचना तपासात, आनी सुरक्षितता खातीर अंदाजाचेर आदार दवरू नाकात.'
    }
  },
  {
    slug: 'with-kids',
    category: 'visit',
    priority: 'P1',
    related: ['trail-and-climb', 'accessibility-and-seniors', 'family-morning-itinerary', 'facilities-and-packing'],
    en: {
      title: 'Chapora Fort with Kids — Safety and Planning',
      h1: 'Visiting Chapora Fort with Children',
      description:
        'Taking children to Chapora Fort in Vagator, Goa: the climb, edges and drop-offs, rest breaks and how to keep a family visit manageable.',
      intro: [
        'Children often enjoy Chapora Fort: there is space to explore, old walls to admire and a wide view over the sea. The same things that make it fun, however, are the things that need care, because the hilltop has uneven ground, high edges and no verified barriers in every place.',
        'With realistic expectations about the climb and close supervision near the edges, a family visit can work well. This page sets out what to weigh before you go.'
      ],
      sections: [
        {
          heading: 'The climb with children',
          paragraphs: [
            'The path up is uneven and, in places, steep. Young children may need to be carried or closely held on the rougher sections, and that effort should be part of your plan. Take the climb slowly and allow more breaks than you would on your own.',
            'Footwear matters. Closed shoes with grip are safer than open sandals on laterite, and small children should not run ahead on uneven ground.'
          ]
        },
        {
          heading: 'Edges, walls and supervision',
          paragraphs: [
            'The fort sits on a hill, and the plateau ends in drops in several directions. Existing walls are old, and this guide does not establish that every edge is protected. Keep children close, set clear boundaries, and take photographs away from the cliff edge.',
            'Do not let children climb on the masonry, both for their safety and to protect the monument.'
          ]
        },
        {
          heading: 'Comfort, heat and timing',
          paragraphs: [
            'The hilltop is exposed to sun and wind. Choose cooler hours where possible, carry water and snacks, and keep visits short with young children. There is no verified drinking water or toilet on the hilltop, so plan around that.',
            'If the weather turns wet or windy, the ground becomes slippery and a family visit is better postponed. Have a lower-level plan ready, such as a walk or a meal in the villages below.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Chapora Fort suitable for young children?',
          a: 'It can be, with close supervision. The ground is uneven, there are drops at the edges and no step-free route, so smaller children may need carrying on rougher sections.'
        },
        {
          q: 'Are there toilets or drinking water for families?',
          a: 'These are not verified on the hilltop, so carry water and plan toilet stops in the villages below before or after the climb.'
        }
      ],
      verifyNote:
        'Independent guide; conditions, access and safety features change — supervise children closely and confirm current information before a family visit.'
    },
    kok: {
      title: 'भुरग्यांसयत चापोरा किल्लो — सुरक्षितता आनी नियोजन',
      h1: 'भुरग्यांसयत चापोरा किल्ल्याक भेट',
      description:
        'वागातोर, गोवा हांगा भुरग्यांक चापोरा किल्ल्याक घेवन वचप: चडण, कडे वा सकयल पडप, विसवो आनी कुटुंबाची भेट कशी सोपी दवरची.',
      intro: [
        'भुरग्यांक चापोरा किल्लो बरोच आवडटा: भोंवपाक जागो, पळोवपाक जुनी तटबंदी आनी समुद्राचेर विस्तृत दृश्य आसा. पूण जें मजा दिता तेंच काळजी घेवपाचेंय कारण: डोंगरमाथ्यार असमान जमीन, उंच कडे आनी सगळ्याक खंयच आडथळे आसात हाची खात्री ना.',
        'चडणे विशीं खरे अपेक्षा आनी कडां लागीं चड लक्ष दवरल्यार कुटुंबाची भेट बरी जावंक शकता. हें पान वचचे आदीं कितें तोलचें तें सांगता.'
      ],
      sections: [
        {
          heading: 'भुरग्यांसयत चडण',
          paragraphs: [
            'वयर वचपी वाट असमान आनी कांय कडेन चड आसा. ल्हान भुरग्यांक खरखरीत भागांनी उखलून वा घट्ट धरून व्हरचें पडूंक शकता, आनी हो त्रास आपल्या येवजणेंत जोडात. चडण सुस्त करात आनी एकट्यान वचपापरस चड विसवो घेवात.',
            'पादत्राणां म्हत्वाचीं. लेटराइटाचेर मोकळ्या सॅंडलांपरस घट्ट, धर दिता तशीं बंद पादत्राणां सुरक्षित. असमान जमिनीचेर ल्हान भुरग्यांक धांवूं दिवचें नाकात.'
          ]
        },
        {
          heading: 'कडे, भिंती आनी लक्ष',
          paragraphs: [
            'किल्लो डोंगराचेर आसा, आनी पठार कांय दिकांनी कड्यांनी पुराय जाता. आशिल्ल्यो भिंती जुन्यो आसात, आनी दर कडो संरक्षित आसा हाची खात्री हांगा ना. भुरग्यांक लागीं दवरात, स्पश्ट मर्यादा घालात, आनी फोटो कड्याच्या धारेपासून पयस काडात.',
            'भुरग्यांक बांदणीचेर चडूं दिवचें नाकात — हें तांच्या सुरक्षिततेखातीर आनी स्मारक राखचे खातीर दोनूय लागीं.'
          ]
        },
        {
          heading: 'सोय, उन आनी वेळ',
          paragraphs: [
            'डोंगरमाथो उन आनी वार्याक उघडो आसा. शक्य जाल्यार थंड वेळ निवडात, उदक आनी अल्पोपहार घेवन वचात, आनी ल्हान भुरग्यांसयत भेट कमी वेळ दवरात. डोंगरमाथ्यार खात्रीचें पिवपाचें उदक वा शौचालय ना, म्हणून तसो प्लान करात.',
            'हवामान ओलें वा वार्याचें जाल्यार जमीन निसरडी जाता आनी कुटुंबाची भेट फुडें दवरप बरें. सकयल गांवांनी भोंवडी वा जेवण सारको सकयल पातळेचो पर्याय तयार दवरात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्लो ल्हान भुरग्यांक साजता काय?',
          a: 'कसोर लक्ष दवरल्यार साजूंक शकता. जमीन असमान, कडांनी सकयल पडप आनी बिना पांवड्यांची वाट ना, म्हणून ल्हान भुरग्यांक खरखरीत भागांनी उखलचें पडूंक शकता.'
        },
        {
          q: 'कुटुंबां खातीर शौचालय वा पिवपाचें उदक आसा काय?',
          a: 'हांची डोंगरमाथ्यार खात्री केल्ली ना, म्हणून उदक सोबत घेवन वचात आनी चडणे आदीं वा उपरांत सकयल गांवांनी शौचालयाचो प्लान करात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; परिस्थिती, प्रवेश आनी सुरक्षा सुविधा बदलतात — भुरग्यांक चड लक्ष दवरात आनी कुटुंबाचे भेटी आदीं चालू माहिती खात्री करात.'
    }
  },
  {
    slug: 'accessibility-and-seniors',
    category: 'visit',
    priority: 'P1',
    related: ['trail-and-climb', 'with-kids', 'nearby-places-on-foot', 'facilities-and-packing'],
    en: {
      title: 'Chapora Fort Accessibility and Visits for Seniors',
      h1: 'Accessibility and Older Visitors at Chapora Fort',
      description:
        'How accessible Chapora Fort in Vagator, Goa, is for older visitors and anyone with limited mobility, and what to check before planning a visit.',
      intro: [
        'Chapora Fort is a historic hill fort, not a modern attraction with lifts and ramps. Reaching the walls means an uphill walk over uneven laterite, and no step-free route is verified here. That does not rule out a visit for older people who are steady on their feet, but it does mean planning honestly.',
        'This page describes what to consider and suggests how to keep a visit comfortable, or how to enjoy the area if the climb is not for you.'
      ],
      sections: [
        {
          heading: 'What the route involves',
          paragraphs: [
            'The approach is a climb on uneven ground. In places it is steep, and the surface is rough when dry and slippery when wet. There is no confirmed handrail, ramp, lift or shuttle, and no verified seating along the way.',
            'Anyone who is steady on their feet and comfortable walking uphill may manage the climb with regular breaks. Anyone with limited mobility, balance problems or heart and breathing conditions should weigh the climb carefully and, ideally, confirm the current route on arrival.'
          ]
        },
        {
          heading: 'Making a visit manageable',
          paragraphs: [
            'If your group includes an older visitor, choose a cooler time of day, travel slowly and plan frequent rests. Shoes with grip and a walking stick, where useful, help on rough ground. Carry water, since none is verified on the hilltop.',
            'Keep the visit short and stay on the flatter parts of the plateau if that is more comfortable. Turning back early is always a valid choice.'
          ]
        },
        {
          heading: 'If the climb is not suitable',
          paragraphs: [
            'For anyone who would rather not climb, the surrounding coastal area still offers views and a day out. The villages and beaches nearby can be enjoyed at a lower level, and the sea and river mouth can be seen from points along the coast.',
            'Alternative viewpoints are not verified here, and their access and safety should be confirmed locally. Treat a lower-level day as a genuine option rather than a consolation.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Chapora Fort wheelchair accessible?',
          a: 'No step-free route, ramp or lift is verified here. Access involves an uphill walk on uneven ground, so a wheelchair visit is not considered practical without confirmation from the site.'
        },
        {
          q: 'Can older visitors manage the climb?',
          a: 'Some can, at a slow pace with breaks, if they are steady on their feet. Check the current route on arrival and judge honestly whether the surface and slope suit you.'
        }
      ],
      verifyNote:
        'Independent guide; access, surfaces and on-site facilities change — confirm current conditions and suitability before travelling with older visitors or anyone with limited mobility.'
    },
    kok: {
      title: 'चापोरा किल्लो सुलभताय आनी ज्येष्ठ नागरिक',
      h1: 'चापोरा किल्ल्याची सुलभताय आनी ज्येष्ठ भेट दिवपी',
      description:
        'वागातोर, गोवा हांगा चापोरा किल्लो ज्येष्ठ नागरिकांक आनी चलपाक मर्यादा आशिल्ल्यांक कितलो सुलभ, आनी भेट नियोजित करचे आदीं कितें तपासचें.',
      intro: [
        'चापोरा किल्लो मॉडर्न लिफ्ट आनी रॅम्प आशिल्लो आकर्षण न्हय, तो ऐतिहासिक डोंगर-किल्लो. तटबंदीमेरेन पावचे खातीर असमान लेटराइटाचेर चडपाची वाट आसा, आनी बिना पांवड्यांची वाट हांगा खात्री केल्ली ना. हें ज्येष्ठ नागरिकांक भेट दिवपाक अडयो करीना, पूण प्रामाणिकपणान नियोजन मागता.',
        'हें पान कितें तोलचें तें सांगता आनी भेट सोयीची कशी दवरची, वा चडण परवडना जाल्यार भाग कसो भोगचो हें सुचयता.'
      ],
      sections: [
        {
          heading: 'वाटेंत कितें आसा',
          paragraphs: [
            'वाट असमान जमिनीचेर चडपाची आसा. कांय कडेन ती चड आसा, आनी सुकी आसतना खरखरीत, ओली आसतना निसरडी. हातूंत धरून वचपाची कडी, रॅम्प, लिफ्ट वा शटल खात्री केल्ली ना, आनी वाटेर बसपाची सोय खात्री केल्ली ना.',
            'स्थिर पाय आनी चडपाक सोयीचे अशे ज्येष्ठ नागरिक नियमित विसवो घेवन चडूंक शकतात. चलपाक मर्यादा, तोल बिघडप वा काळजाचो-श्वासाचो त्रास आशिल्ल्यांनी चडण सावकाश तोलचें आनी शक्य जाल्यार पावतकच चालू वाट खात्री करची.'
          ]
        },
        {
          heading: 'भेट सोयीची कशी दवरची',
          paragraphs: [
            'तुमच्या गटांत ज्येष्ठ भेट दिवपी आसल्यार दिसाची थंड वेळ निवडात, सुस्त वचात आनी वारंवार विसवो घेवात. खरखरीत जमिनीचेर धर दिता तशीं पादत्राणां आनी गरज आसल्यार चलपाची काडी उपेगी. उदक घेवन वचात, कारण डोंगरमाथ्यार उदक खात्री केल्लें ना.',
            'भेट कमी वेळ दवरात आनी तें चड सोयीचें जाल्यार पठाराच्या सपाट भागांनी रावात. पयलींच परत येवप सदांच बरो निर्णय.'
          ]
        },
        {
          heading: 'चडण साजना जाल्यार',
          paragraphs: [
            'चडपाक नाका अशें कोणाक वाटा जाल्यार भोंवतणचो किनारी भाग अजून दृश्यां आनी दिसाचो आनंद दिता. लागींचे गांव आनी किनारे सकयल पातळेचेर भोगूंक येतात, आनी समुद्र व नदीचें मुख किनाऱ्यावयल्या जाग्यांथावन दिसता.',
            'पर्यायी दृश्य थळां हांगा खात्री केल्ली ना, आनी तांचो प्रवेश व सुरक्षितता स्थानिकांक विचारून खात्री करची. सकयल पातळेचो दीस सांत्वन न्हय, तो खरो पर्याय मानात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्लो व्हीलचेअर खातीर सुलभ आसा काय?',
          a: 'बिना पांवड्यांची वाट, रॅम्प वा लिफ्ट हांगा खात्री केल्ली ना. प्रवेश असमान जमिनीचेर चडपाचो आसा, म्हणून थळाचेर खात्री करचे बगर व्हीलचेअर भेट व्यवहारी मानना.'
        },
        {
          q: 'ज्येष्ठ भेट दिवपी चडण करूंक शकतात काय?',
          a: 'स्थिर पाय आसल्यार कांय जण विसवो घेवन सुस्त गतीन करूंक शकतात. पावतकच चालू वाट तपासात आनी जमीन व उतार तुमकां साजतात काय हें प्रामाणिकपणान ठरयात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; प्रवेश, जमीन आनी थळावेरल्यो सुविधा बदलतात — ज्येष्ठ नागरिकांसयत वा चलपाक मर्यादा आशिल्ल्यांसयत प्रवासा आदीं चालू परिस्थिती आनी योग्यतेची खात्री करात.'
    }
  },
  {
    slug: 'facilities-and-packing',
    category: 'visit',
    priority: 'P0',
    related: ['trail-and-climb', 'how-long-to-visit', 'visiting-during-monsoon', 'tickets-and-timings'],
    en: {
      title: 'Chapora Fort Facilities and Packing List',
      h1: 'What to Carry and What to Expect at Chapora Fort',
      description:
        'Facilities and packing for Chapora Fort in Vagator, Goa: water, shade, toilets, footwear and the items that make the hilltop climb easier.',
      intro: [
        'Because Chapora Fort is an open hilltop rather than a managed visitor centre, what you carry matters. No drinking water, toilet, seating or shade is verified on the summit, and the ground is uneven and exposed. A little preparation makes the climb far more comfortable.',
        'Treat this list as a planning guide rather than a confirmed inventory of services. Confirm anything you are relying on before you go.'
      ],
      sections: [
        {
          heading: 'Water, food and sun protection',
          paragraphs: [
            'Carry enough drinking water for the climb and your time on the summit, and bring it back down with you as waste. Snacks help if you plan to linger, and sun protection matters because the hilltop has little verified shade.',
            'There is no verified café, shop or drinking fountain at the fort, so do not count on buying supplies on the hill.'
          ]
        },
        {
          heading: 'Footwear and clothing',
          paragraphs: [
            'Shoes with grip are the single most useful item on laterite. Open sandals and smooth soles slip more easily, especially when the rock is wet. Comfortable clothing that lets you move on uneven ground helps too.',
            'In the monsoon, add rain protection; in the hot months, a hat and light, breathable clothing. Layers are useful because the exposed hilltop can be breezy even when the village below is still.'
          ]
        },
        {
          heading: 'Other useful items',
          bullets: [
            'Water, and a way to carry it back empty as waste.',
            'Shoes with grip and comfortable clothing.',
            'Sun protection: hat, sunscreen and sunglasses.',
            'A charged phone for photos and a light, in case you descend late.',
            'Any personal medication, and a small amount of cash in case a charge applies.',
            'A plan for toilet stops in the villages before or after the climb.'
          ],
          paragraphs: [
            'There is no verified toilet or seating on the hilltop, so plan those needs around the villages below. Keep the visit light and leave no litter, both for other visitors and for the monument itself.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are there toilets or drinking water at Chapora Fort?',
          a: 'Neither is verified on the hilltop. Carry your own water and plan toilet stops in the villages before or after the climb.'
        },
        {
          q: 'What should I wear to climb Chapora Fort?',
          a: 'Shoes with grip and comfortable clothing are best. Add sun protection in the hot months and rain protection in the monsoon.'
        }
      ],
      verifyNote:
        'Independent guide; on-site facilities and conditions change — carry what you need and confirm current services locally before travelling.'
    },
    kok: {
      title: 'चापोरा किल्ल्याच्यो सुविधा आनी सोबत घेवपाची यादी',
      h1: 'चापोरा किल्ल्याक सोबत कितें घेवचें आनी कितें अपेक्षित',
      description:
        'वागातोर, गोवा हांगा चापोरा किल्ल्याच्यो सुविधा आनी सोबत घेवपाचें: उदक, सावली, शौचालय, पादत्राणां आनी डोंगरमाथ्याची चडण सोपी करपी वस्तू.',
      intro: [
        'चापोरा किल्लो व्यवस्थापित प्रवासी केंद्र न्हय, तो उघडो डोंगरमाथो, म्हणून तुमी सोबत कितें घेवन वचतात तें म्हत्वाचें. माथ्यार पिवपाचें उदक, शौचालय, बसपाची सोय वा सावली हांची खात्री ना, आनी जमीन असमान व उघडी आसा. थोडें नियोजन चडण बरेंच सोयीची करता.',
        'ही यादी नियोजन मार्गदर्शक मानात, सुविधांची खात्री केल्ली यादी न्हय. खंयचेर आदार दवरतात तें वचचे आदीं खात्री करात.'
      ],
      sections: [
        {
          heading: 'उदक, खाणें आनी उनापासून संरक्षण',
          paragraphs: [
            'चडण आनी माथ्यार रावपी वेळ खातीर पुरेसें पिवपाचें उदक घेवन वचात, आनी कचरो म्हणून तें परत हाडात. उशीरा रावपाची येवजण आसल्यार अल्पोपहार उपेगी, आनी माथ्यार सावली उणी आसा, म्हणून उनापासून संरक्षण म्हत्वाचें.',
            'किल्ल्याचेर खात्री केल्लें कॅफे, दुकान वा पाण्याचो नळ ना, म्हणून डोंगराचेर वस्तू विकत घेवपाची अपेक्षा दवरू नाकात.'
          ]
        },
        {
          heading: 'पादत्राणां आनी कपडे',
          paragraphs: [
            'लेटराइटाचेर सगळ्यांत उपेगी वस्तू म्हळ्यार धर दिता तशीं पादत्राणां. मोकळी सॅंडलां आनी गुळगुळ तळं सोपें निसरडटा, खास करून दगड ओलो आसतना. असमान जमिनीचेर भोंवपाक सोयीचे कपडेय मदत करतात.',
            'पावसाळ्यांत पावसापासून संरक्षण जोडात; उश्ण म्हयन्यांनी टोपी आनी हलकें, हवा खेळोवपी कपडे. सकयल गांव शांत आसतना सुद्धा उघडो डोंगरमाथो वार्याचो आसूंक शकता, म्हणून थरांचे कपडे उपेगी.'
          ]
        },
        {
          heading: 'हेर उपेगी वस्तू',
          bullets: [
            'उदक, आनी खाली जाल्यार कचरो म्हणून परत हाडपाची सोय.',
            'धर दिता तशीं पादत्राणां आनी सोयीचे कपडे.',
            'उनापासून संरक्षण: टोपी, सनस्क्रीन आनी काळे चश्मे.',
            'फोटो खातीर चार्ज आशिल्लो फोन आनी उशीरा उतरल्यार एक लायट.',
            'आपलीं वैयक्तिक औषधां, आनी शुल्क लागू जाल्यार थोडें दुदू.',
            'चडणे आदीं वा उपरांत गांवांनी शौचालयाचो प्लान.'
          ],
          paragraphs: [
            'डोंगरमाथ्यार खात्री केल्लें शौचालय वा बसपाची सोय ना, म्हणून ह्यो गरजो सकयल गांवांभोंवतणी नियोजित करात. भेट हलकी दवरात आनी कचरो करूं नाकात — हें हेर भेट दिवप्यां खातीर आनी स्मारका खातीर दोनूय बरें.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याचेर शौचालय वा पिवपाचें उदक आसा काय?',
          a: 'डोंगरमाथ्यार दोनूय खात्री केल्ले नात. आपलें उदक घेवन वचात आनी चडणे आदीं वा उपरांत गांवांनी शौचालयाचो प्लान करात.'
        },
        {
          q: 'चापोरा किल्ल्याक चडपाक कितें घालचें?',
          a: 'धर दिता तशीं पादत्राणां आनी सोयीचे कपडे सगळ्यांत बरे. उश्ण म्हयन्यांनी उनापासून संरक्षण आनी पावसाळ्यांत पावसापासून संरक्षण जोडात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; थळावेरल्यो सुविधा आनी परिस्थिती बदलता — गरजेचें सोबत घेवन वचात आनी प्रवासा आदीं चालू सेवा स्थानिकांक विचारून खात्री करात.'
    }
  }
];
