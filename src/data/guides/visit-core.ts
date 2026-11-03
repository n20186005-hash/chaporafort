// भेट नियोजन आनी प्रवास श्रेणीचीं 8 मार्गदर्शक पानां (visit & transport guides).
// दर पान द्विभाषी: इंग्रजी + कोंकणी (देवनागरी).
import type { Guide } from './types';

export const visitCoreGuides: Guide[] = [
  {
    slug: 'tickets-and-timings',
    category: 'visit',
    priority: 'P0',
    related: ['trail-and-climb', 'parking', 'best-time-and-sunset', 'with-kids'],
    en: {
      title: 'Chapora Fort Tickets and Timings — Vagator, Goa',
      h1: 'Chapora Fort Tickets and Timings: What to Check Before You Go',
      description:
        'Entry, opening hours and last entry for Chapora Fort in Vagator, Goa, plus how to verify current timings and any admission charge before travelling.',
      intro: [
        'Two practical questions come up before every visit to Chapora Fort: what does entry cost, and when can you go in? The honest answer for both is that they change, and this independent guide does not publish a fixed price or a guaranteed timetable. What follows is what the linked primary sources actually say, and how to check the details for your own travel date.',
        'Treat anything you read here as a starting point. Confirm current admission and opening hours with the operators or locally before you rely on them.'
      ],
      sections: [
        {
          heading: 'What the official pages state about tickets',
          paragraphs: [
            'The linked Government of Goa and Goa Tourism Development Corporation pages for Chapora Fort do not state a current admission price. That absence is important: a missing fee is not proof that entry is free, and it is not proof that a charge exists either.',
            'Some monuments in Goa have separate charges for parking, camera use or vehicles. Whether any of these apply at Chapora Fort is not established here. Ask on arrival or check with the managing authority, and keep small change available in case a charge applies.'
          ]
        },
        {
          heading: 'Opening hours and the question of sunset',
          paragraphs: [
            'A Google Maps listing showed hours of 10:00 to 17:00 daily when checked on 25 October 2026. Map listings are third-party snapshots and can lag behind reality, so use that only as an indication.',
            'Goa Tourism writes about evening and sunset views from the fort. That is not the same as confirming admission after the listed closing time. If a sunset visit matters to you, confirm the current closing time and whether late access is allowed rather than assuming it.'
          ]
        },
        {
          heading: 'How to verify the details for your date',
          bullets: [
            'Check the linked Government of Goa and GTDC pages for any published notice.',
            'Re-check the Google Maps listing and note the date it was last updated.',
            'Ask locally or at the site about current hours, last entry and any charge.',
            'Allow for temporary changes in the monsoon, on public holidays or during festivals.'
          ],
          paragraphs: [
            'Because hours and charges can change without notice, the safest plan is to arrive during a clearly open window and to keep your expectations flexible. If you are travelling far, a short confirmation call or message to your accommodation can save a wasted trip.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is entry to Chapora Fort free?',
          a: 'No current admission price is stated on the linked Government of Goa and GTDC pages. An omitted fee is not the same as free entry, so confirm admission locally before travelling.'
        },
        {
          q: 'What time does Chapora Fort open and close?',
          a: 'A Maps listing showed 10:00 to 17:00 daily in an October 2026 snapshot. Hours are not guaranteed, so confirm the current opening and closing times before your visit.'
        }
      ],
      verifyNote:
        'Independent guide; entry charges, opening hours and last entry change over time — confirm current information with the site operators or locally before travelling.'
    },
    kok: {
      title: 'चापोरा किल्लो तिकीट आनी वेळ — वागातोर, गोवा',
      h1: 'चापोरा किल्लो: तिकीट आनी वेळ — वचचे आदीं कितें तपासात',
      description:
        'वागातोर, गोवा हांगा चापोरा किल्ल्याचो प्रवेश, उगडपाची वेळ आनी शेवटलो प्रवेश कसो तपासचो, आनी वचचे आदीं कोणती माहिती खात्री करची हाची मार्गदर्शिका.',
      intro: [
        'चापोरा किल्ल्याक वचचे आदीं दोन प्रश्न सगळ्यांक पडटात: प्रवेशाक कितलें पडटा, आनी खंयच्या वेळार भितर वचूंक येता? दोनूय उत्तरां बदलतात, आनी हें स्वतंत्र मार्गदर्शक खंयचोच निश्चित दर वा वेळापत्रक दिता अशें सांगना. हांगा जोडिल्ल्या अधिकृत स्रोतांनी जें सांगलां तें आनी आपल्या भेटीच्या दिसा खातीर तपशील कसो खात्री करचो तें दिला.',
        'हांगा दिल्ली माहिती फकत सुरवात मानात. चालू प्रवेश आनी उगडपाची वेळ व्यवस्थापनाक वा स्थानिकांक विचारून खात्री करात.'
      ],
      sections: [
        {
          heading: 'तिकिटा विशीं अधिकृत पानां कितें सांगतात',
          paragraphs: [
            'गोवा सरकार आनी गोवा पर्यटन विकास मंडळाच्या चापोरा किल्ल्याच्या जोडिल्ल्या पानांवर चालू प्रवेश दर नमूद ना. हें लक्षांत दवरपाक जाय: दर नासप म्हळ्यार प्रवेश फुकट अशें न्हय, आनी दर आसा अशेंय न्हय.',
            'गोव्यांतल्या कांय स्मारकांक पार्किंग, कॅमेरा वा वाहना खातीर वेगळें शुल्क आसता. चापोरा किल्ल्याक हें लागू जाता काय हाची खात्री हांगा केल्ली ना. थळावेर विचारात; शुल्क लागू जाल्यार दुदू काडून दवरात.'
          ]
        },
        {
          heading: 'उगडपाची वेळ आनी सूर्यास्ताचो प्रश्न',
          paragraphs: [
            '25 ऑक्टोबर 2026 दिसा नकाशांत रोज 10:00 ते 17:00 वेळ आशिल्ली. नकाशाच्यो नोंदी तिसऱ्या पक्षाच्यो आसात आनी त्या मागें रावूंक शकतात, म्हणून तें फकत एक सूचक मानात.',
            'गोवा पर्यटन किल्ल्यावयल्या सांजेच्या आनी सूर्यास्ताच्या दृश्यांचो उल्लेख करता. पूण नमूद केल्ल्या बंद वेळे उपरांत प्रवेश आसा अशें तें सांगना. सूर्यास्ताची भेट म्हत्वाची आसल्यार चालू बंद वेळ आनी उशीरा प्रवेश दितात काय तें खात्री करात.'
          ]
        },
        {
          heading: 'आपल्या तारखे खातीर तपशील कसो तपासचो',
          bullets: [
            'गोवा सरकार आनी GTDC च्या जोडिल्ल्या पानांवर खंयची सूचना आसा काय तें पळयात.',
            'गुगल नकाशाची नोंद पुन्हा तपासात आनी ती केन्ना बदलली ती तारीख पळयात.',
            'थळावेर वा स्थानिकांक चालू वेळ, शेवटलो प्रवेश आनी शुल्क विचारात.',
            'पावसाळो, सुटयो वा उत्सव ह्या काळांत तात्पुरते बदल जावंक शकतात हें लक्षांत दवरात.'
          ],
          paragraphs: [
            'वेळ आनी शुल्क पयलींच सांगडी नासतना बदलूंक शकतात, म्हणून उघडपाच्या खात्रीच्या वेळार पावप आनी लवचीक रावप सर्वोत्तम. पयलींन दूर थावन येतात जाल्यार एक छोटो मेसेज वा कॉल केल्यार वाया भोंवडी टळटा.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याचो प्रवेश फुकट आसा काय?',
          a: 'गोवा सरकार आनी GTDC च्या जोडिल्ल्या पानांवर चालू प्रवेश दर नमूद ना. दर नासप म्हळ्यार फुकट प्रवेश न्हय, म्हणून वचचे आदीं स्थानिकांक विचारात.'
        },
        {
          q: 'चापोरा किल्लो खंयच्या वेळार उगडटा आनी बंद जाता?',
          a: 'ऑक्टोबर 2026 च्या नकाशा नोंदींत रोज 10:00 ते 17:00 वेळ आशिल्ली. वेळ खात्रीची न्हय, म्हणून भेटी आदीं चालू वेळ खात्री करात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; प्रवेश शुल्क, उगडपाची वेळ आनी शेवटलो प्रवेश बदलतात — वचचे आदीं चालू माहिती व्यवस्थापनाक वा स्थानिकांक विचारून खात्री करात.'
    }
  },
  {
    slug: 'trail-and-climb',
    category: 'visit',
    priority: 'P0',
    related: ['tickets-and-timings', 'parking', 'with-kids', 'accessibility-and-seniors'],
    en: {
      title: 'Chapora Fort Trail and Climb Guide — Vagator, Goa',
      h1: 'The Chapora Fort Trail: What the Uphill Climb Is Really Like',
      description:
        'A practical look at the Chapora Fort trail in Vagator, Goa: the uphill walk on uneven laterite, footing, fitness, shade and safety before you set out.',
      intro: [
        'The walk up to Chapora Fort is short but not flat. You climb on uneven laterite ground towards a hilltop above the Chapora river mouth, and the surface changes with the season. This page describes the climb in practical terms so you can judge whether it suits your group, your footwear and the time of day.',
        'No part of this description replaces what you see on the day. Check current conditions, and turn back if the ground or the weather feels unsafe.'
      ],
      sections: [
        {
          heading: 'The route in outline',
          paragraphs: [
            'The approach begins from the fort area near the Chapora Fort Trail in Vagator. From there the path rises along the shoulder of the hill towards the plateau and the surviving ramparts. Parts of the route are steeper and parts level off, and the last stretch opens onto the flat area inside the walls.',
            'Exact walking times depend on your pace, the heat and how often you stop. Rather than quote a fixed number of minutes, plan generously and treat any figure you read elsewhere as an estimate.'
          ]
        },
        {
          heading: 'Surface, footing and footwear',
          paragraphs: [
            'Much of the ground is laterite rock and packed soil. Laterite can be rough and uneven when dry and distinctly slippery when wet, especially after rain. Loose stones and worn edges are part of the terrain.',
            'Sturdy shoes with grip are a better choice than smooth soles or sandals. Carry water, since there is no verified drinking water on the hilltop, and be careful near the edges and any surviving openings in the walls.'
          ]
        },
        {
          heading: 'Fitness, heat and safety',
          paragraphs: [
            'The climb is manageable for many visitors but is not a step-free route, and this guide does not establish that any accessible path exists. If anyone in your group has mobility limits, heart or breathing conditions, or is unsteady on their feet, weigh that honestly before starting.',
            'The hilltop is exposed, so sun, heat and wind are felt more strongly than in the village below. Start early or later in the day when it is cooler. Keep a safe distance from cliff edges when taking photographs, and do not lean on old masonry.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is the Chapora Fort climb difficult?',
          a: 'It is a short but uneven uphill walk on laterite ground. Difficulty depends on your fitness, the heat and the surface condition, which is slippery after rain.'
        },
        {
          q: 'What shoes should I wear for the trail?',
          a: 'Choose shoes with good grip rather than smooth soles or sandals, and take care on loose stones and wet laterite.'
        }
      ],
      verifyNote:
        'Independent guide; the route surface, access and safety conditions change with weather and maintenance — check current conditions and local instructions before setting out.'
    },
    kok: {
      title: 'चापोरा किल्लो वाट आनी चडण — वागातोर, गोवा',
      h1: 'चापोरा किल्ल्याची वाट: चडण खरेंच कशें आसा',
      description:
        'वागातोर, गोवा हांगा चापोरा किल्ल्याची चडपाची वाट, निसरडो लेटराइट दगड, पादत्राणां, ताकद आनी सुरक्षितता हांची व्यवहारी मार्गदर्शिका.',
      intro: [
        'चापोरा किल्ल्याक चडपाची वाट सोपी पूण सपाट न्हय. चापोरा नदीच्या मुखाक वयर आशिल्ल्या डोंगरमाथ्याक वचपाक निसरड्या लेटराइट जमिनीचेर चडचें पडटा, आनी ऋतूप्रमाण जमीन बदलता. हें पान चडण व्यवहारी नदरेन सांगता, म्हणजे तुमच्या गटाक, पादत्राणांक आनी दिसाच्या वेळाक तें साजें काय तें तुमी ठरयूंक शकतात.',
        'हें वर्णन त्या दिसा दिसपी परिस्थितीची सुवात घेवंक शकना. चालू परिस्थिती तपासात, आनी जमीन वा हवामान असुरक्षित दिसल्यार परत वचात.'
      ],
      sections: [
        {
          heading: 'वाटेचो थोडक्यांत आराखडो',
          paragraphs: [
            'वाट वागातोरांतल्या चापोरा फोर्ट ट्रेल लागीं सुरू जाता. थावन वाट डोंगराच्या कडेकडेन पठाराक आनी उरलल्या तटबंदीकडेन चडटा. कांय भाग चड आनी कांय भाग सपाट आसात, आनी शेवटचो भाग भिंतीं भितरल्या सपाट जाग्यार उगडटा.',
            'चडपाक कितलो वेळ लागता तें तुमची गती, उन आनी विसव्यांचेर अवलंबून आसा. म्हणून निश्चित मिनटां ऐवजी पुरेसो वेळ दवरात आनी हेर कडेन दिल्ली आकडेवारी अंदाज मानात.'
          ]
        },
        {
          heading: 'जमीन, पाय आनी पादत्राणां',
          paragraphs: [
            'जमिनीचो बरोच भाग लेटराइट दगड आनी घट्ट माती आसा. लेटराइट सुकें आसतना खरखरीत आनी असमान जाता, आनी पावसान ओलें जाल्यार बरेंच निसरडें जाता. सुटके दगड आनी झिजिल्लीं कडां हांगा सामान्य आसात.',
            'गुळगुळ तळाच्या चपला वा सॅंडलां परस घट्ट, धर दिता तशीं पादत्राणां बरी. उदक घेवन वचात, कारण डोंगरमाथ्यार खात्रीचें पिवपाचें उदक ना. कडां लागीं आनी भिंतींतल्या उघड्या जागां लागीं काळजी घेवात.'
          ]
        },
        {
          heading: 'ताकद, उन आनी सुरक्षितता',
          paragraphs: [
            'चडण खूप जणांक परवडटा, पूण ही बिना पांवड्यांची वाट न्हय, आनी सगळ्यांक सोपी अशी वाट आसा अशी खात्री हांगा ना. तुमच्या गटांत चालपाक त्रास, काळजाचो वा श्वासाचो त्रास आशिल्लो कोणी आसल्यार तें सुरवात करचे आदीं समजून घेवात.',
            'डोंगरमाथो उघडो आसा, म्हणून उन, उश्णताय आनी वारो सकयल्या गांवापरस चड जाणवता. थंड वेळार, सकाळीं वा दनपारां उशीरा सुरवात करात. फोटो काडताना कड्यांच्या धारेपासून अंतर दवरात आनी जुन्या बांदणीचेर आदार दिवचो नाकात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याची चडण कठीण आसा काय?',
          a: 'ती सोपी पूण असमान लेटराइट जमिनीचेर चडपाची वाट आसा. कठीणपण तुमची ताकद, उन आनी जमिनीची स्थिती हांचेर अवलंबून आसा; पावसान ती निसरडी जाता.'
        },
        {
          q: 'वाटे खातीर खंयचीं पादत्राणां घेवचीं?',
          a: 'गुळगुळ तळापरस धर दिता तशीं पादत्राणां निवडात, आनी सुटके दगड आनी ओल्या लेटराइटाचेर काळजी घेवात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; वाटेची स्थिती, प्रवेश आनी सुरक्षितता हवामान आनी देखभालीप्रमाण बदलता — वचचे आदीं चालू परिस्थिती आनी स्थानिक सूचना तपासात.'
    }
  },
  {
    slug: 'parking',
    category: 'visit',
    priority: 'P0',
    related: ['tickets-and-timings', 'trail-and-climb', 'how-to-get-from-mapusa', 'facilities-and-packing'],
    en: {
      title: 'Parking at Chapora Fort — What to Expect in Vagator',
      h1: 'Parking at Chapora Fort: Planning the Last Stretch',
      description:
        'How parking near Chapora Fort in Vagator, Goa, usually works, the walk from the car to the trail, and how to verify current spaces and any fee.',
      intro: [
        'If you drive, the last part of the journey is the least predictable: where to leave the car and how much walking follows. This guide does not name an official car park or a fee, because neither is verified here. Instead, it sets out what to check so the arrangement does not surprise you.',
        'The fort sits above the village on a hill, so wherever you park, expect an uphill walk to reach the trail and the walls.'
      ],
      sections: [
        {
          heading: 'Where vehicles usually stop',
          paragraphs: [
            'Visitors generally park in the Chapora and Vagator area near the approach to the fort trail, on the roads and informal spaces that serve the village. Because these are ordinary village roads, availability varies with the time of day and the season, and spaces can be limited at busy periods.',
            'This guide has not verified a designated Chapora Fort car park, its capacity or its rules. Ask locally on arrival, and avoid blocking gates, driveways or narrow lanes that residents and emergency vehicles need.'
          ]
        },
        {
          heading: 'The walk from the car to the trail',
          paragraphs: [
            'From the parking area you continue on foot towards the fort trailhead and then up the hill. This adds distance, slope and time to the visit, so treat the car park as the start of the walk rather than the finish.',
            'Exact distances and walking times are not given here because they have not been measured and can change with the route you take. Plan for longer than you expect, especially in the heat.'
          ]
        },
        {
          heading: 'Verifying spaces and charges',
          bullets: [
            'Ask your accommodation or a local about where visitors usually park.',
            'Check whether any parking charge applies and keep small change ready.',
            'Note that availability is more limited at peak times and on market days.',
            'Avoid parking on surfaces or slopes your vehicle cannot handle.'
          ],
          paragraphs: [
            'Because parking arrangements and any charge are not confirmed by this guide, treat every detail as something to check on the day. If you would rather not deal with parking at all, a drop-off by taxi or another vehicle leaves you to enjoy the climb without the search for a space.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is there dedicated parking at Chapora Fort?',
          a: 'A designated car park, its capacity and any fee are not verified here. Visitors generally use road-side spaces in the Chapora and Vagator area, so availability varies.'
        },
        {
          q: 'How far is the walk from parking to the fort?',
          a: 'That distance is not measured here. Expect an uphill walk from wherever you park to the trail and the walls, and allow extra time.'
        }
      ],
      verifyNote:
        'Independent guide; parking availability, rules and charges change — confirm current arrangements locally on arrival.'
    },
    kok: {
      title: 'चापोरा किल्ल्याक पार्किंग — वागातोरांत कितें अपेक्षित',
      h1: 'चापोरा किल्ल्याक पार्किंग: शेवटचो टप्पो कसो आखचो',
      description:
        'वागातोर, गोवा हांगा चापोरा किल्ल्याक लागीं पार्किंग कशी चलता, गाडये थावन वाटेमेरेन चलप आनी चालू जागो वा शुल्क कसें तपासचें.',
      intro: [
        'तुमी गाडी चलयतात जाल्यार भोंवडेचो शेवटचो भाग सगळ्यांत अनिश्चित आसा: गाडी खंय दवरची आनी उपरांत कितलें चलचें. हें मार्गदर्शक अधिकृत पार्किंग वा शुल्क सांगना, कारण तांची खात्री हांगा केल्ली ना. तर तें तुमकां अचाट करूंक ना जावचे खातीर कितें तपासचें तें सांगता.',
        'किल्लो गांवाच्या वयर डोंगराचेर आसा, म्हणून खंयच पार्किंग करात तरी वाट आनी तटबंदीमेरेन चडपाची वाट आसता.'
      ],
      sections: [
        {
          heading: 'वाहनां सामान्यतः खंय थांबतात',
          paragraphs: [
            'भेट दिवपी सामान्यतः चापोरा आनी वागातोर भागांत, किल्ल्याच्या वाटेकडेन वचपी रस्त्यांचेर आनी गांवाक सेवा दिता त्या अनौपचारिक जागांनी गाडी दवरतात. हे सामान्य गांव-रस्ते आसात, म्हणून जागो वेळ आनी ऋतूप्रमाण बदलता; गर्दीच्या वेळार जागो उणी पडूंक शकता.',
            'ह्या मार्गदर्शकान चापोरा किल्ल्याची नेमिल्ली पार्किंग, तिची क्षमता वा नेम खात्री केल्ले नात. थळावेर विचारात, आनी गेट, दारां वा अडकुळ्या गल्ल्यां मेरेन गाडी दवरून राबितो वा आपत्कालीन वाहनांक अडयो करूं नाकात.'
          ]
        },
        {
          heading: 'गाडये थावन वाटेमेरेन चलप',
          paragraphs: [
            'पार्किंगच्या जाग्यार थावन तुमी पायी किल्ल्याच्या वाटेच्या सुरवातेकडेन आनी उपरांत डोंगराचेर चडतात. हें अंतर, उतार आनी वेळ वाडयता, म्हणून पार्किंगाक भोंवडेची सुरवात मानात, शेवट न्हय.',
            'अचूक अंतर आनी वेळ हांगा दिल्ले नात, कारण ते मेजिल्ले नात आनी तुमी घेवपी वाटेप्रमाण बदलतात. उनांत खात्रीच्या वेळापरस चड वेळ दवरात.'
          ]
        },
        {
          heading: 'जागो आनी शुल्क तपासप',
          bullets: [
            'भेट दिवपी सामान्यतः खंय गाडी दवरतात तें आपल्या राबित्याक वा स्थानिकांक विचारात.',
            'पार्किंग शुल्क लागू जाता काय तें तपासात आनी दुदू तयार दवरात.',
            'गर्दीच्या वेळार आनी बाजाराच्या दिसा जागो उणी आसता हें लक्षांत दवरात.',
            'आपल्या वाहनाक परवडना त्या उतारार वा पृष्ठभागार गाडी दवरूं नाकात.'
          ],
          paragraphs: [
            'पार्किंगची व्यवस्था आनी शुल्क ह्या मार्गदर्शकान खात्री केल्लें ना, म्हणून दर तपशील त्या दिसा तपासचो. पार्किंगाचो त्रास नको जाल्यार टॅक्सी वा हेर वाहनान सोडल्यार तुमी चडणाचो आनंद घेवूंक शकतात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याक खास पार्किंग आसा काय?',
          a: 'नेमिल्ली पार्किंग, तिची क्षमता आनी शुल्क हांगा खात्री केल्ली ना. भेट दिवपी सामान्यतः चापोरा आनी वागातोर भागांतल्या रस्त्याचेर गाडी दवरतात, म्हणून जागो बदलता.'
        },
        {
          q: 'पार्किंग थावन किल्ल्यामेरेन कितलें चलचें पडटा?',
          a: 'तें अंतर हांगा मेजिल्लें ना. तुमी खंयच पार्किंग करात तरी वाट आनी तटबंदीमेरेन चडपाची वाट आसता, म्हणून चड वेळ दवरात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; पार्किंगाची उपलब्धताय, नेम आनी शुल्क बदलतात — पावतकच चालू व्यवस्था स्थानिकांक विचारून खात्री करात.'
    }
  },
  {
    slug: 'how-to-get-from-mapusa',
    category: 'visit',
    priority: 'P0',
    related: ['how-to-get-from-panaji', 'from-thivim-station', 'parking', 'chapora-without-a-car'],
    en: {
      title: 'Mapusa to Chapora Fort — Bus, Taxi and the Last Walk',
      h1: 'Getting to Chapora Fort from Mapusa',
      description:
        'How to reach Chapora Fort in Vagator, Goa, from Mapusa by bus, taxi or scooter, with what to check about the route, drop-off and the final walk.',
      intro: [
        'Mapusa is the nearest market town to Chapora Fort and a common starting point for the northern beaches and the fort. From there you continue west towards Anjuna and Vagator, then approach the fort on foot. This page explains the options and the questions to ask, without quoting fares or timetables that change.',
        'Goa Tourism describes a Mapusa–Anjuna–Vagator bus connection, but that description is undated and is not a current timetable. Treat it as a direction of travel, not a schedule.'
      ],
      sections: [
        {
          heading: 'By bus',
          paragraphs: [
            'Public buses run from Mapusa towards the northern coastal villages, and Vagator and Anjuna are the stops most useful for the fort. Buses may be frequent in some periods and sparse in others, and services can change seasonally, so confirm the present route and timing at the Mapusa bus stand rather than relying on an old list.',
            'From the bus stop in the Vagator or Chapora area you still have to walk to the trail and climb to the walls. Ask locally which stop puts you closest to the Chapora Fort approach.'
          ]
        },
        {
          heading: 'By taxi or scooter',
          paragraphs: [
            'A taxi or a rented scooter gives you more control over timing and lets you stop at viewpoints on the way. If you use a taxi, agree the destination clearly and be aware that access roads narrow as you near the fort, so the driver may drop you a short walk away.',
            'On a scooter, ride carefully on the village lanes and park considerately. Helmets and valid documents apply as usual on the roads of Goa.'
          ]
        },
        {
          heading: 'The final approach on foot',
          paragraphs: [
            'Whichever way you arrive, the last stretch is on foot and uphill. There is no verified information here about a shuttle, lift or door-to-door access, so plan to walk from wherever you are set down.',
            'Allow extra time for the climb, carry water, and consider the heat if you travel in the middle of the day. If you are unsure about the exact turn towards the trailhead, ask a local rather than guessing from memory.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is there a direct bus from Mapusa to Chapora Fort?',
          a: 'GTDC describes a Mapusa–Anjuna–Vagator bus connection, but it is undated and not a current timetable. Confirm the present route and stops at the Mapusa bus stand.'
        },
        {
          q: 'How do I reach the fort after getting off the bus?',
          a: 'From the Vagator or Chapora area you walk uphill to the trail and the fort. Ask locally which stop is closest to the Chapora Fort approach.'
        }
      ],
      verifyNote:
        'Independent guide; bus routes, stops, fares and timings change — confirm current services at the Mapusa bus stand or locally before travelling.'
    },
    kok: {
      title: 'मापुसा थावन चापोरा किल्लो — बस, टॅक्सी आनी पायी वाट',
      h1: 'मापुसा थावन चापोरा किल्ल्याक कशें पावचें',
      description:
        'मापुसा थावन वागातोर, गोवा हांगा चापोरा किल्ल्याक बस, टॅक्सी वा स्कूटरान कशें पावचें, वाट, उतरपाची सुवात आनी पायी चलप हांची माहिती.',
      intro: [
        'मापुसा चापोरा किल्ल्याक सगळ्यांत लागींचें बाजार-नगर आसा आनी उत्तरेकडल्या किनाऱ्यांकडेन वचपाची सामान्य सुरवात. थावन तुमी अंजुना आनी वागातोराकडेन वचतात, आनी उपरांत पायी किल्ल्याकडेन पावतात. हें पान पर्याय आनी विचारचे प्रश्न सांगता, पूण बदलपी भाडां वा वेळापत्रकां दिना.',
        'गोवा पर्यटन मापुसा–अंजुना–वागातोर बस जोडणीचो उल्लेख करता, पूण तें तारीख नाशिल्लें आनी चालू वेळापत्रक न्हय. तें वचपाची दिका मानात, वेळापत्रक न्हय.'
      ],
      sections: [
        {
          heading: 'बसेन',
          paragraphs: [
            'सार्वजनिक बसो मापुसा थावन उत्तरेकडल्या किनारी गांवांकडेन वतात, आनी वागातोर आनी अंजुना किल्ल्याक सगळ्यांत उपेगी थांबे. बसो कांय काळांत वारंवार आनी कांय काळांत विरळ आसतात, आनी ऋतूप्रमाण सेवा बदलता; म्हणून जुन्या यादीचेर आदार दवरचे बदला मापुसा बस थानकार चालू वाट आनी वेळ खात्री करात.',
            'वागातोर वा चापोरा भागांतल्या बस थांब्याथावन तुमकां वाटेमेरेन आनी तटबंदीमेरेन वयर चडचें पडटा. चापोरा किल्ल्याच्या वाटेक सगळ्यांत लागीं खंयचो थांबो तें स्थानिकांक विचारात.'
          ]
        },
        {
          heading: 'टॅक्सी वा स्कूटरान',
          paragraphs: [
            'टॅक्सी वा भाडयाने घेतिल्लो स्कूटर तुमकां वेळाचेर चड नियंत्रण दिता आनी वाटेर थांबपाक मेळटा. टॅक्सी घेतल्यार गंतव्य स्पश्ट सांगात, आनी किल्ल्याक लागीं रस्ते अडकुळे जातात हें लक्षांत दवरात, म्हणून चालक तुमकां थोडें पयस सोडूंक शकता.',
            'स्कूटराचेर गांव-गल्ल्यांनी काळजीपूर्वक चलयात आनी सुसंस्कृतपणान पार्किंग करात. हेल्मेट आनी वैध कागदपत्रां गोव्याच्या रस्त्यांक नेहमीप्रमाणें लागू.'
          ]
        },
        {
          heading: 'शेवटची पायी वाट',
          paragraphs: [
            'खंयच्याय मार्गान आयल्यार शेवटचो भाग पायी आनी चडपाचो आसा. शटल, लिफ्ट वा दारामेरेन प्रवेश हांची खात्री हांगा ना, म्हणून जंय तुमकां सोडटात थावन चलपाची तयारी दवरात.',
            'चडणाक चड वेळ दवरात, उदक घेवन वचात, आनी दनपारार प्रवास केल्यार उनाचो विचार करात. वाटेचो नेमको वळण माहीत नासल्यार अंदाज करचे बदला स्थानिकांक विचारात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'मापुसा थावन चापोरा किल्ल्यामेरेन थेट बस आसा काय?',
          a: 'GTDC मापुसा–अंजुना–वागातोर बस जोडणीचो उल्लेख करता, पूण तें तारीख नाशिल्लें आनी चालू वेळापत्रक न्हय. मापुसा बस थानकार चालू वाट आनी थांबे खात्री करात.'
        },
        {
          q: 'बस थावन उतरल्या उपरांत किल्ल्यामेरेन कसें वचचें?',
          a: 'वागातोर वा चापोरा भागांतल्या थांब्याथावन तुमी वाटेमेरेन आनी किल्ल्यामेरेन वयर चडतात. चापोरा फोर्ट वाटेक सगळ्यांत लागीं खंयचो थांबो तें स्थानिकांक विचारात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; बस वाटो, थांबे, भाडां आनी वेळ बदलतात — प्रवासा आदीं मापुसा बस थानकार वा स्थानिकांक चालू सेवा विचारून खात्री करात.'
    }
  },
  {
    slug: 'how-to-get-from-panaji',
    category: 'visit',
    priority: 'P1',
    related: ['how-to-get-from-mapusa', 'from-mopa-airport', 'from-dabolim-airport', 'chapora-without-a-car'],
    en: {
      title: 'Panaji to Chapora Fort — Route Options and Checks',
      h1: 'Getting to Chapora Fort from Panaji',
      description:
        'Reaching Chapora Fort in Vagator, Goa, from Panaji by bus or car: the direction of travel, likely changes at Mapusa and the final walk to the fort.',
      intro: [
        'Panaji, the capital of Goa, sits south-east of Chapora Fort on the Mandovi river. The journey northwards crosses the river and passes through the Mapusa area before turning towards the coast. Because services and roads change, this page focuses on the shape of the trip and the checks that matter, rather than fares or times.',
        'Either way you travel, the last part of the journey is the same: leave the vehicle or bus in the Vagator or Chapora area and walk uphill to the fort.'
      ],
      sections: [
        {
          heading: 'The general direction of travel',
          paragraphs: [
            'From Panaji you head north across the Mandovi towards Mapusa, then west towards Anjuna and Vagator. Mapusa is the natural junction where longer-distance buses and the local coastal services connect, so many journeys involve a change there.',
            'GTDC describes a Mapusa–Anjuna–Vagator bus connection without dates, so use it as a guide to the direction of travel and confirm the current services yourself.'
          ]
        },
        {
          heading: 'By bus and by car',
          paragraphs: [
            'By bus, expect at least one change unless you find a through service, and check the connection at the Mapusa bus stand on the day. By car or taxi, the drive is more direct but heavier in the morning and evening, and parking near the fort is the uncertain part.',
            'A scooter gives flexibility for the coastal stretch, while a taxi removes the parking question but leaves you dependent on the driver for the drop-off point.'
          ]
        },
        {
          heading: 'Arriving and the final walk',
          paragraphs: [
            'Once you reach the Vagator or Chapora area, the fort is reached on foot up the hill. No shuttle or lift is verified here, so allow time for the climb and carry water.',
            'Check the weather and the time of day before starting, especially if you are travelling in the hotter months or during the monsoon, when the ground can be slippery.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Do I need to change buses to reach the fort from Panaji?',
          a: 'Many journeys change at Mapusa, where longer-distance and local coastal services connect. Confirm the current connection at the Mapusa bus stand on the day.'
        },
        {
          q: 'How much of the trip from Panaji is on foot?',
          a: 'Only the final part, from the Vagator or Chapora area up to the fort. No shuttle or step-free access is verified, so allow time for the uphill walk.'
        }
      ],
      verifyNote:
        'Independent guide; bus connections, roads, fares and timings change — confirm current services and conditions locally before travelling from Panaji.'
    },
    kok: {
      title: 'पणजी थावन चापोरा किल्लो — वाटेचे पर्याय',
      h1: 'पणजी थावन चापोरा किल्ल्याक कशें पावचें',
      description:
        'पणजी थावन वागातोर, गोवा हांगा चापोरा किल्ल्याक बस वा गाडयेन कशें पावचें: वाटेची दिका, मापुसा जोडणी आनी शेवटची पायी वाट.',
      intro: [
        'गोव्याची राजधानी पणजी, मांडवी न्हंयेचेर, चापोरा किल्ल्याच्या आग्नेयेक आसा. उत्तरेकडलो प्रवास न्हंय हुंपून मापुसा भागांतल्यान वचून उपरांत किनाऱ्याकडेन वळटा. सेवा आनी रस्ते बदलतात, म्हणून हें पान भाडां वा वेळां ऐवजी प्रवासाचो आकार आनी तपासचे मुद्दे सांगता.',
        'खंयच्याय मार्गान वचात, शेवटचो भाग सारकोच: वागातोर वा चापोरा भागांत बस वा गाडयेंतल्यान उतरून किल्ल्यामेरेन वयर चडचें.'
      ],
      sections: [
        {
          heading: 'प्रवासाची सामान्य दिका',
          paragraphs: [
            'पणजी थावन तुमी मांडवी हुंपून मापुसाकडेन उत्तरेक, आनी उपरांत अंजुना व वागातोराकडेन अस्तंतेक वचतात. मापुसा ही सामान्य जोडणीची सुवात आसा, जंय लांब पल्ल्याच्यो बसो आनी स्थानिक किनारी सेवा मेळटात, म्हणून खूप प्रवासांनी थंय बदल करचो पडटा.',
            'GTDC तारीख नाशिल्ली मापुसा–अंजुना–वागातोर बस जोडणी सांगता, म्हणून ती दिकेचो आदार मानात आनी चालू सेवा तुमीच खात्री करात.'
          ]
        },
        {
          heading: 'बसेन आनी गाडयेन',
          paragraphs: [
            'बसेन, थेट सेवा मेळ्ळी ना जाल्यार उण्यांत उणो एक बदल अपेक्षित दवरात, आनी त्या दिसा मापुसा बस थानकार जोडणी तपासात. गाडी वा टॅक्सीन प्रवास सरळ आसता पूण सकाळ-सांज गर्दी चड आसता, आनी किल्ल्याक लागीं पार्किंग हीच अनिश्चित गोजीर.',
            'स्कूटर किनारी भागांत लवचीकताय दिता, तर टॅक्सी पार्किंगाचो प्रश्न काडटा पूण उतरपाची सुवात चालकाचेर सोडटा.'
          ]
        },
        {
          heading: 'पावप आनी शेवटची पायी वाट',
          paragraphs: [
            'वागातोर वा चापोरा भागांत पावतकच किल्ल्यामेरेन पायी डोंगराचेर चडचें पडटा. शटल वा लिफ्ट हांगा खात्री केल्ली ना, म्हणून चडणाक वेळ दवरात आनी उदक घेवन वचात.',
            'सुरवात करचे आदीं हवामान आनी दिसाची वेळ तपासात, खास करून उश्ण म्हयन्यांनी वा पावसाळ्यांत, जेन्ना जमीन निसरडी आसूंक शकता.'
          ]
        }
      ],
      faqs: [
        {
          q: 'पणजी थावन किल्ल्यामेरेन बस बदल करचो पडटा काय?',
          a: 'खूप प्रवास मापुसाक बदलतात, जंय लांब पल्ल्याची आनी स्थानिक किनारी सेवा मेळटात. त्या दिसा मापुसा बस थानकार चालू जोडणी खात्री करात.'
        },
        {
          q: 'पणजी थावन प्रवासांत कितलो भाग पायी आसा?',
          a: 'फकत शेवटचो भाग, वागातोर वा चापोरा भागांतल्यान किल्ल्यामेरेन. शटल वा बिना पांवड्यांचो प्रवेश खात्री केल्लो ना, म्हणून चडणाक वेळ दवरात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; बस जोडणी, रस्ते, भाडां आनी वेळ बदलतात — पणजी थावन प्रवासा आदीं चालू सेवा आनी परिस्थिती स्थानिकांक विचारून खात्री करात.'
    }
  },
  {
    slug: 'from-mopa-airport',
    category: 'visit',
    priority: 'P1',
    related: ['from-dabolim-airport', 'from-thivim-station', 'how-to-get-from-mapusa', 'chapora-without-a-car'],
    en: {
      title: 'Mopa Airport to Chapora Fort — North Goa Arrival',
      h1: 'From Manohar International Airport (Mopa) to Chapora Fort',
      description:
        'Arriving at Manohar International Airport, Mopa (GOX) and heading to Chapora Fort in Vagator, Goa: the direction of travel, transfers and the final walk.',
      intro: [
        'Manohar International Airport at Mopa, usually shown with the code GOX, serves North Goa and is the closer of the two Goa airports to Chapora Fort. Even so, it is not on the fort’s doorstep, and the last part of the journey is the same for everyone: reach the Vagator or Chapora area and walk uphill.',
        'This page sets out the shape of the trip and the checks to make. Fares, taxi availability and road conditions change, so nothing here is a fixed price or timetable.'
      ],
      sections: [
        {
          heading: 'The direction of travel',
          paragraphs: [
            'From Mopa you head south and west towards the Bardez coastal belt, passing in the direction of the Mapusa area before turning towards Anjuna, Vagator and Chapora. The fort then lies above the village, reached on foot from the approach road.',
            'Because Mopa is in the north of the state, the road journey is shorter than from Dabolim in the south, though traffic near the coast can slow the last stretch.'
          ]
        },
        {
          heading: 'Transfer options',
          paragraphs: [
            'Taxis and pre-booked transfers are the usual choices from an airport. If you plan to use public transport, you may need to reach a bus stand such as Mapusa first and connect onwards towards the coast.',
            'No specific airport bus route, fare or journey time to the fort is verified here. Confirm current options at the airport on arrival rather than relying on old information.'
          ]
        },
        {
          heading: 'The final walk and what to carry',
          paragraphs: [
            'Whichever transfer you use, ask to be set down near the Chapora Fort approach, then continue on foot up the hill. Carry water and wear shoes with grip, since the ground is uneven and can be slippery after rain.',
            'If you arrive in the heat of the day, take the climb slowly and use the cooler hours where possible.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Mopa or Dabolim closer to Chapora Fort?',
          a: 'Mopa (GOX) is in North Goa and is the closer of the two airports to the fort. Dabolim (GOI) is in South Goa, so that journey is longer.'
        },
        {
          q: 'Can I reach the fort by public transport from Mopa?',
          a: 'You may need to reach a bus stand such as Mapusa and connect onwards. No specific route, fare or time is verified here, so confirm current options at the airport.'
        }
      ],
      verifyNote:
        'Independent guide; airport transfers, fares, routes and road conditions change — confirm current options at the airport or locally before travelling.'
    },
    kok: {
      title: 'मोपा विमानतळ थावन चापोरा किल्लो — उत्तर गोवा',
      h1: 'मनोहर आंतरराष्ट्रीय विमानतळ (मोपा) थावन चापोरा किल्ल्यामेरेन',
      description:
        'मनोहर आंतरराष्ट्रीय विमानतळ, मोपा (GOX) हांगा पावून वागातोर, गोवा हांगा चापोरा किल्ल्यामेरेन वचपाची दिका, बदल आनी शेवटची पायी वाट.',
      intro: [
        'मोपा हांगाचें मनोहर आंतरराष्ट्रीय विमानतळ, सामान्यतः GOX कोडान ओळखलां जाता, उत्तर गोव्याक सेवा दिता आनी गोव्याच्या दोनूय विमानतळांतल्यान चापोरा किल्ल्याक सगळ्यांत लागीं आसा. तरीय तें किल्ल्याच्या दारार न्हय, आनी शेवटचो भाग सगळ्यांक सारकोच: वागातोर वा चापोरा भागांत पावून वयर चडचें.',
        'हें पान प्रवासाचो आकार आनी तपासचे मुद्दे सांगता. भाडां, टॅक्सीची उपलब्धताय आनी रस्त्यांची स्थिती बदलता, म्हणून हांगा खंयचेंच निश्चित भाडें वा वेळापत्रक ना.'
      ],
      sections: [
        {
          heading: 'प्रवासाची दिका',
          paragraphs: [
            'मोपा थावन तुमी दक्षिण आनी अस्तंतेक बार्देश किनारी पट्ट्याकडेन, मापुसा भागाच्या दिकेन वचून उपरांत अंजुना, वागातोर आनी चापोराकडेन वळटात. उपरांत किल्लो गांवाच्या वयर आसा, जो वाटेच्या रस्त्याथावन पायी पावता.',
            'मोपा राज्याच्या उत्तरेक आसा, म्हणून दक्षिणेकडल्या दाबोळी परस रस्त्याचो प्रवास उणो आसता, तरीय किनाऱ्याक लागीं वर्दळीमुळे शेवटचो भाग सुस्त जावंक शकता.'
          ]
        },
        {
          heading: 'बदलीचे पर्याय',
          paragraphs: [
            'विमानतळाथावन सामान्यतः टॅक्सी वा पयलींच बुक केल्लीं ट्रान्सफर निवडतात. सार्वजनिक वाहनान वचपाचो विचार आसल्यार आदीं मापुसा सारक्या बस थानकार पावून उपरांत किनाऱ्याकडेन जोडणी घेवची पडूंक शकता.',
            'किल्ल्यामेरेन खंयचोच विशिष्ट विमानतळ बस मार्ग, भाडें वा प्रवासवेळ हांगा खात्री केल्लो ना. जुन्या माहितीचेर आदार दवरचे बदला पावतकच विमानतळाचेर चालू पर्याय खात्री करात.'
          ]
        },
        {
          heading: 'शेवटची पायी वाट आनी सोबत कितें',
          paragraphs: [
            'खंयचीय ट्रान्सफर वापरात, चापोरा फोर्ट वाटेक लागीं सोडपाक सांगात, आनी उपरांत पायी वयर चडात. उदक घेवन वचात आनी धर दिता तशीं पादत्राणां घालात, कारण जमीन असमान आनी पावसान निसरडी जावंक शकता.',
            'दिसा उन पडटा तेन्ना चडण सुस्त करात आनी शक्य जाल्यार थंड वेळार वचात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याक मोपा वा दाबोळी — खंयचें लागीं?',
          a: 'मोपा (GOX) उत्तर गोव्यांत आसा आनी किल्ल्याक दोनूय विमानतळांतल्यान सगळ्यांत लागीं. दाबोळी (GOI) दक्षिण गोव्यांत आसा, म्हणून तो प्रवास लांब आसा.'
        },
        {
          q: 'मोपा थावन सार्वजनिक वाहनान किल्ल्याक पावूं येता काय?',
          a: 'तुमकां आदीं मापुसा सारक्या बस थानकार पावून जोडणी घेवची पडूंक शकता. हांगा विशिष्ट मार्ग, भाडें वा वेळ खात्री केल्लो ना, म्हणून विमानतळाचेर चालू पर्याय खात्री करात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; विमानतळ ट्रान्सफर, भाडां, मार्ग आनी रस्त्यांची स्थिती बदलता — प्रवासा आदीं विमानतळाचेर वा स्थानिकांक चालू पर्याय खात्री करात.'
    }
  },
  {
    slug: 'from-dabolim-airport',
    category: 'visit',
    priority: 'P1',
    related: ['from-mopa-airport', 'from-thivim-station', 'how-to-get-from-panaji', 'chapora-without-a-car'],
    en: {
      title: 'Dabolim Airport to Chapora Fort — South Goa Arrival',
      h1: 'From Dabolim Airport to Chapora Fort',
      description:
        'Arriving at Dabolim Airport (GOI) and travelling north to Chapora Fort in Vagator, Goa: the direction, likely transfers and the final uphill walk.',
      intro: [
        'Dabolim Airport, shown with the code GOI, lies in South Goa near Vasco da Gama. It is the farther of the two Goa airports from Chapora Fort, and the journey north crosses the state before reaching the coast. Because that trip is long, it rewards a little planning.',
        'As with any arrival, the final stage is on foot: from the Vagator or Chapora area up the hill to the fort.'
      ],
      sections: [
        {
          heading: 'The long leg north',
          paragraphs: [
            'From Dabolim you travel north across Goa, in the general direction of Panaji and then towards the Bardez coastal belt. A large part of the journey is on roads that also carry local traffic, so timing depends heavily on the hour.',
            'Compared with Mopa in the north, Dabolim adds distance. If your schedule is tight, allow for that rather than assuming the two airports are equally close.'
          ]
        },
        {
          heading: 'Transfers and connections',
          paragraphs: [
            'A taxi or pre-booked transfer is the most direct option. By public transport you would typically move towards a bus stand such as Mapusa and connect onwards towards Anjuna and Vagator.',
            'No specific route, fare or journey time to the fort is verified here. Confirm current transport options on arrival, and treat any figure you find online as an estimate.'
          ]
        },
        {
          heading: 'Arriving at the fort',
          paragraphs: [
            'Once you reach the coastal villages, leave the vehicle near the Chapora Fort approach and continue uphill on foot. Carry water and wear suitable shoes, because the ground is uneven and slick when wet.',
            'If your arrival lands in the middle of a hot day, build in a slower pace and rest breaks on the climb.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Which airport is better for Chapora Fort, Dabolim or Mopa?',
          a: 'For Chapora Fort, Mopa (GOX) in North Goa is closer. Dabolim (GOI) in South Goa means a longer northbound journey across the state.'
        },
        {
          q: 'How do I finish the trip from Dabolim to the fort?',
          a: 'Reach the Vagator or Chapora area by road or bus, then walk uphill to the fort. No shuttle or step-free access is verified here.'
        }
      ],
      verifyNote:
        'Independent guide; airport transfers, fares, routes and road conditions change — confirm current options on arrival or locally before travelling.'
    },
    kok: {
      title: 'दाबोळी विमानतळ थावन चापोरा किल्लो — दक्षिण गोवा',
      h1: 'दाबोळी विमानतळ थावन चापोरा किल्ल्यामेरेन',
      description:
        'दाबोळी विमानतळ (GOI) हांगा पावून वागातोर, गोवा हांगा चापोरा किल्ल्यामेरेन उत्तरेक वचपाची दिका, बदल आनी शेवटची चडपाची वाट.',
      intro: [
        'दाबोळी विमानतळ, GOI कोडान ओळखलां जाता, वास्को द गामा लागीं दक्षिण गोव्यांत आसा. गोव्याच्या दोनूय विमानतळांतल्यान तें चापोरा किल्ल्याक पयस आसा, आनी उत्तरेकडलो प्रवास किनाऱ्याक पावचे आदीं हो राज्य हुंपता. हो प्रवास लांब आसा, म्हणून थोडें नियोजन फायद्याचें.',
        'हेर आगमनांप्रमाणें शेवटचो टप्पो पायी: वागातोर वा चापोरा भागांतल्यान डोंगराचेर वयर किल्ल्यामेरेन.'
      ],
      sections: [
        {
          heading: 'उत्तरेकडलो लांब पल्लो',
          paragraphs: [
            'दाबोळी थावन तुमी गोव्यांत उत्तरेक, पणजीच्या दिकेन आनी उपरांत बार्देश किनारी पट्ट्याकडेन वचतात. वाटेचो बरोच भाग स्थानिक वर्दळीच्या रस्त्यांनी आसा, म्हणून वेळ घडयेचेर बरोच अवलंबून आसा.',
            'उत्तरेकडल्या मोपा परस दाबोळी अंतर वाडटा. वेळ कमी आसल्यार दोनूय विमानतळां एकेच लागीं मानचे बदला तें लक्षांत दवरात.'
          ]
        },
        {
          heading: 'ट्रान्सफर आनी जोडणी',
          paragraphs: [
            'टॅक्सी वा पयलींच बुक केल्ली ट्रान्सफर सगळ्यांत सरळ पर्याय. सार्वजनिक वाहनान, सामान्यतः मापुसा सारक्या बस थानकार वचून उपरांत अंजुना आनी वागातोराकडेन जोडणी घेवची पडटा.',
            'किल्ल्यामेरेन खंयचोच विशिष्ट मार्ग, भाडें वा प्रवासवेळ हांगा खात्री केल्लो ना. पावतकच चालू पर्याय खात्री करात, आनी ऑनलायन मेळपी कोणतीय आकडेवारी अंदाज मानात.'
          ]
        },
        {
          heading: 'किल्ल्याचेर पावप',
          paragraphs: [
            'किनारी गांवांनी पावतकच चापोरा फोर्ट वाटेक लागीं गाडी दवरून पायी वयर चडात. उदक घेवन वचात आनी योग्य पादत्राणां घालात, कारण जमीन असमान आनी ओल्ली जाल्यार निसरडी आसता.',
            'उन पडटा तेन्ना पावल्यार सुस्त गती दवरात आनी चडणेचेर विसवो घेवात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याक खंयचें विमानतळ बरें — दाबोळी वा मोपा?',
          a: 'चापोरा किल्ल्याक उत्तर गोव्यांतलें मोपा (GOX) लागीं आसा. दक्षिण गोव्यांतलें दाबोळी (GOI) म्हळ्यार राज्य हुंपून लांब उत्तरेकडलो प्रवास.'
        },
        {
          q: 'दाबोळी थावन किल्ल्यामेरेन प्रवास कसो पुराय करचो?',
          a: 'गाडयेन वा बसेन वागातोर वा चापोरा भागांत पावात, आनी उपरांत पायी वयर किल्ल्यामेरेन चडात. शटल वा बिना पांवड्यांचो प्रवेश हांगा खात्री केल्लो ना.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; विमानतळ ट्रान्सफर, भाडां, मार्ग आनी रस्त्यांची स्थिती बदलता — पावतकच वा प्रवासा आदीं स्थानिकांक चालू पर्याय खात्री करात.'
    }
  },
  {
    slug: 'from-thivim-station',
    category: 'visit',
    priority: 'P1',
    related: ['from-mopa-airport', 'how-to-get-from-mapusa', 'how-to-get-from-panaji', 'chapora-without-a-car'],
    en: {
      title: 'Thivim Station to Chapora Fort — Rail Arrival, Goa',
      h1: 'From Thivim Railway Station to Chapora Fort',
      description:
        'Arriving at Thivim railway station in North Goa and reaching Chapora Fort in Vagator: the direction of travel, onward transport and time budgeting.',
      intro: [
        'Thivim is a railway station in North Goa and is the most convenient railhead for the Bardez coast, including Anjuna, Vagator and Chapora. From the station the fort lies to the west, reached by road and then on foot.',
        'This page describes the journey in outline and the checks to make. Train times, road conditions and onward transport change, so confirm the details for your own day.'
      ],
      sections: [
        {
          heading: 'From station to coast',
          paragraphs: [
            'From Thivim you travel west towards the coastal belt, in the direction of Mapusa and then on towards Anjuna and Vagator. This is a moderate road journey that can be made by taxi, by bus with a change, or by scooter.',
            'Because the road passes through built-up areas, the time needed varies with traffic. Budget the journey generously, especially if you arrive near the evening peak.'
          ]
        },
        {
          heading: 'Onward transport',
          paragraphs: [
            'Taxis are usually available at the station. For public transport, you may need to reach the Mapusa bus stand first and connect towards the coast on a local service.',
            'No specific route, fare or journey time to the fort is verified here. Ask at the station or at your accommodation for the current options.'
          ]
        },
        {
          heading: 'Time budget and the last climb',
          paragraphs: [
            'Add the uphill walk to your plan, because whatever brings you to the Vagator or Chapora area, the final section to the walls is on foot. Carry water and wear shoes with grip.',
            'If you arrive after a long train journey, consider resting before the climb, and check that you will still be within opening hours when you reach the fort.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Thivim station close to Chapora Fort?',
          a: 'Thivim is in North Goa and is the most convenient railhead for the Bardez coast, but the fort is still a road journey west and then a walk uphill.'
        },
        {
          q: 'How should I get from Thivim to Vagator or Chapora?',
          a: 'Taxi, scooter or bus with a change at Mapusa are the usual options. Confirm current services and fares locally, as none are fixed here.'
        }
      ],
      verifyNote:
        'Independent guide; train times, onward transport, fares and road conditions change — confirm current information locally before travelling.'
    },
    kok: {
      title: 'थिवीम स्टेशन थावन चापोरा किल्लो — रेल्वे आगमन',
      h1: 'थिवीम रेल्वे स्टेशन थावन चापोरा किल्ल्यामेरेन',
      description:
        'उत्तर गोव्यांतल्या थिवीम रेल्वे स्टेशन हांगा पावून वागातोर हांगा चापोरा किल्ल्यामेरेन वचपाची दिका, पुढील वाहन आनी वेळेचो अंदाज.',
      intro: [
        'थिवीम उत्तर गोव्यांतलें रेल्वे स्टेशन आसा आनी अंजुना, वागातोर आनी चापोरा हांगा बार्देश किनाऱ्याक सगळ्यांत सोयीचें रेल्वे-स्थानक. स्टेशन थावन किल्लो अस्तंतेक आसा, जो रस्त्यान आनी उपरांत पायी पावता.',
        'हें पान प्रवासाचो आराखडो आनी तपासचे मुद्दे सांगता. आगगाडयेची वेळ, रस्त्यांची स्थिती आनी पुढील वाहन बदलता, म्हणून आपल्या दिसा खातीर तपशील खात्री करात.'
      ],
      sections: [
        {
          heading: 'स्टेशन थावन किनाऱ्यामेरेन',
          paragraphs: [
            'थिवीम थावन तुमी किनारी पट्ट्याकडेन अस्तंतेक, मापुसाच्या दिकेन आनी उपरांत अंजुना व वागातोराकडेन वचतात. हो मध्यम पल्ल्याचो रस्त्याचो प्रवास आसा, जो टॅक्सी, एक बदल करून बस, वा स्कूटरान करूं येता.',
            'रस्तो वसाहती भागांतल्यान वता, म्हणून लागपी वेळ वर्दळीप्रमाण बदलता. सांजेच्या गर्दीचे वेळार पावल्यार प्रवासाक खात्रीपूर्वक चड वेळ दवरात.'
          ]
        },
        {
          heading: 'पुढील वाहन',
          paragraphs: [
            'स्टेशनाचेर सामान्यतः टॅक्सी मेळटात. सार्वजनिक वाहना खातीर तुमकां आदीं मापुसा बस थानकार पावून स्थानिक सेवेन किनाऱ्याकडेन जोडणी घेवची पडूंक शकता.',
            'किल्ल्यामेरेन खंयचोच विशिष्ट मार्ग, भाडें वा प्रवासवेळ हांगा खात्री केल्लो ना. स्टेशनाचेर वा राबित्यार चालू पर्याय विचारात.'
          ]
        },
        {
          heading: 'वेळेचो अंदाज आनी शेवटची चडण',
          paragraphs: [
            'वयर चडपाची वाट आपल्या आराखड्यांत जोडात, कारण तुमकां वागातोर वा चापोरा भागांत खंयचेंय आयलें तरी तटबंदीमेरेन शेवटचो भाग पायीच. उदक घेवन वचात आनी धर दिता तशीं पादत्राणां घालात.',
            'लांब रेल्वे प्रवासा उपरांत पावल्यार चडणे आदीं विसवो घेवात, आनी किल्ल्याचेर पावतकच उगडपाच्या वेळांत भितर आसतात ना तें तपासात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'थिवीम स्टेशन चापोरा किल्ल्याक लागीं आसा काय?',
          a: 'थिवीम उत्तर गोव्यांत आसा आनी बार्देश किनाऱ्याक सगळ्यांत सोयीचें रेल्वे-स्थानक, पूण किल्लो अजून अस्तंतेक रस्त्याचो प्रवास आनी उपरांत वयर चडपाची वाट आसा.'
        },
        {
          q: 'थिवीम थावन वागातोर वा चापोराक कसें वचचें?',
          a: 'टॅक्सी, स्कूटर वा मापुसाक बदल करून बस हे सामान्य पर्याय. चालू सेवा आनी भाडां स्थानिकांक विचारात, कारण हांगा खंयचेंच निश्चित ना.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; आगगाडयेची वेळ, पुढील वाहन, भाडां आनी रस्त्यांची स्थिती बदलता — प्रवासा आदीं चालू माहिती स्थानिकांक विचारून खात्री करात.'
    }
  }
];
