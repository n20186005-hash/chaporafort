// भोंवतणीचीं थळां आनी वाट ह्या श्रेणीचीं 8 मार्गदर्शक पानां (nearby places & walks).
// दर पान द्विभाषी: इंग्रजी + कोंकणी (देवनागरी).
import type { Guide } from './types';

export const nearbyGuides: Guide[] = [
  {
    slug: 'fort-to-vagator-beach',
    category: 'nearby',
    priority: 'P0',
    related: ['trail-and-climb', 'fort-ozran-half-day', 'restaurants-near-chapora-fort', 'best-time-and-sunset'],
    en: {
      title: 'Chapora Fort to Vagator Beach — Walking Down After the Fort',
      h1: 'From Chapora Fort Down to Vagator Beach',
      description:
        'How the walk down from Chapora Fort reaches Vagator Beach in Goa, what to expect on the way and how to plan it around heat, tide and the return climb.',
      intro: [
        'Vagator Beach sits below and to the west of Chapora Fort, and many visitors pair the two. The fort is the high viewpoint; the beach is the low, sandy counterpart, reached by heading down from the fort area towards the coast.',
        'The route is simple in direction but uneven in places, so treat it as a short walk rather than a flat stroll. Allow more time than you expect, especially going back up.'
      ],
      sections: [
        {
          heading: 'Understanding the two spots',
          paragraphs: [
            'The fort occupies a headland above the Chapora River mouth, with ramparts and open ground. Vagator Beach is one of the beaches on the bay to the west, reached from the village roads and paths that run below the fort.',
            'Because the fort is elevated, almost any route between them involves a descent and a climb. The exact paths and their condition can change with the season and with local access, so follow what is open on the day.'
          ]
        },
        {
          heading: 'Planning the walk',
          paragraphs: [
            'Do the descent in the cooler part of the day and keep the climb back in mind. On a hot afternoon the uphill return is the harder half, so carry water and take it slowly on loose or uneven stretches.',
            'If you are not returning to the fort, arrange your onward transport from the beach side in advance. Mobile signal and taxi availability can vary, so a little planning helps.'
          ],
          bullets: [
            'Start the descent while there is still daylight.',
            'Wear shoes with grip for uneven ground.',
            'Check the tide if you plan to walk the shoreline.',
            'Keep the climb back in mind when judging your energy.'
          ]
        },
        {
          heading: 'What you gain by doing both',
          paragraphs: [
            'The fort gives you the view of the river mouth and the coast; the beach gives you the sand and the sea at close range. Together they make a fuller half-day than either alone.',
            'For a slower version of the same idea, see the half-day itinerary that pairs the fort with Vagator.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Can you walk from Chapora Fort to Vagator Beach?',
          a: 'Yes, the two are close and visitors often pair them. The route involves a descent from the fort and, if you return, a climb back, so allow extra time and go in the cooler hours.'
        },
        {
          q: 'Why are no exact walking times given?',
          a: 'Times depend on your pace, the heat, the surface and which paths are open on the day. Treat any route as a loose guide and plan generously.'
        }
      ],
      verifyNote:
        'Independent guide; paths, access and conditions change with the season — confirm the route locally and avoid the climb in the heat of the day.'
    },
    kok: {
      title: 'चापोरा किल्ल्यासावन वागातोर दर्या-देगेमेरेन — किल्ल्यासावन सकयल चलप',
      h1: 'चापोरा किल्ल्यासावन वागातोर दर्या-देगेमेरेन',
      description:
        'गोवा हांगा चापोरा किल्ल्यासावन वागातोर दर्या-देगेमेरेन चलप कशें जाता, वाटेर कितें दिसता आनी उन, भरती आनी परत चडप हांचेभोंवतणी कसो नियोजन करचो.',
      intro: [
        'वागातोर दर्या-देग चापोरा किल्ल्याच्या सकयल आनी अस्तंतेक आसा, आनी खूप भेट दिवपी दोनूय एकामेकांसोबत पळयतात. किल्लो म्हळ्यार उंच दृश्य; दर्या-देग म्हळ्यार सकयली, रेंवेची सोबत, किल्ल्याच्या वाठारासावन किनाऱ्याकडे उतरून पावता.',
        'दिशा सोपी आसा पूण कांय जाग्यांनी असमान, म्हणून ही सपाट भोंवडी न्हय तर थोडी वाट समजात. तुमी अंदाज केल्ल्यापरस चड वेळ दवरात, खास करून परत वयर चडताना.'
      ],
      sections: [
        {
          heading: 'दोनूय थळां समजून घेवप',
          paragraphs: [
            'किल्लो चापोरा नदीच्या मुखाच्या वयर आशिल्ल्या दोंगरार, तटबंदी आनी उघडी जमीन घेवन आसा. वागातोर दर्या-देग अस्तंतेक आशिल्ल्या खाडीच्या किनाऱ्यावयल्यो देगांतली एक, किल्ल्याच्या सकयल व्हांवपी गांव-वाटांनी आनी पथांनी पावता.',
            'किल्लो उंच आशिल्ल्यान, दोनूय भितरलो खंयचोय मार्ग उतरप आनी चडप घेवनच येता. नेमक्यो वाटो आनी तांची स्थिती ऋतू आनी स्थानिक प्रवेशा प्रमाण बदलूंक शकता, म्हणून त्या दिसा उगडो आसा तोच अनुसरात.'
          ]
        },
        {
          heading: 'भोंवडेचें नियोजन',
          paragraphs: [
            'उतरप दिसाच्या थंड वेळार करात आनी परत वयर चडप नदरेंत दवरात. उन आशिल्ल्या दनपारार वयर चडप हो कठीण अर्द आसा, म्हणून उदक सोबत दवरात आनी सोडिल्ल्या वा असमान जाग्यार सुस्त चलात.',
            'किल्ल्याक परत येवपाचो विचार नासल्यार, दर्या-देगे वयल्यान पुढलो येरादारी आदींच थरयात. मोबाइल सिग्नल आनी टॅक्सी उपलब्धता बदलूंक शकता, म्हणून थोडें नियोजन उपकारक.'
          ],
          bullets: [
            'जेन्ना उजवाड आसा तेन्नाच उतरप सुरू करात.',
            'असमान जमिनीखातीर पकड आशिल्ले जोते घालात.',
            'किनार्यान चलपाचो विचार आसल्यार भरती तपासात.',
            'तुमची शक्त तपासताना परत चडप नदरेंत दवरात.'
          ]
        },
        {
          heading: 'दोनूय केल्यार कितें मेळटा',
          paragraphs: [
            'किल्लो तुमकां नदीचें मुख आनी किनारो दाखयता; दर्या-देग तुमकां लागींची रेंव आनी दर्या दिता. दोनूय एकठांय केल्यार एकेच परस पुराय अर्द-दीस जाता.',
            'हाचोच सुस्त आवृत्ती खातीर किल्लो आनी वागातोर एकठांय करपी अर्द-दिसाचो भोंवडी-मार्ग पळयात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्यासावन वागातोर दर्या-देगेमेरेन चलूंक येता?',
          a: 'हय, दोनूय लागीं आसात आनी भेट दिवपी दोनूय एकठांय पळयतात. वाटेंत किल्ल्यासावन उतरप आनी परत येवपाक चडप आसा, म्हणून चड वेळ दवरात आनी थंड वेळार वचात.'
        },
        {
          q: 'नेमकीं चलपाचीं मिनटां कित्याक दिल्लीं नात?',
          a: 'वेळ तुमची गती, उन, जमीन आनी त्या दिसा उगडो आशिल्लो वाटो हांचेर आदारीत आसता. खंयचोय मार्ग कच्चो मार्गदर्शक समजात आनी उदारपणान नियोजन करात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; वाटो, प्रवेश आनी स्थिती ऋतू प्रमाण बदलता — वाटो स्थानिकपणान तपासात आनी दिसाच्या उनेंत चडप टाळात.'
    }
  },
  {
    slug: 'fort-to-ozran-beach',
    category: 'nearby',
    priority: 'P1',
    related: ['fort-to-vagator-beach', 'fort-ozran-half-day', 'sunset-dinner-vagator', 'best-time-and-sunset'],
    en: {
      title: 'Chapora Fort to Ozran Beach (Little Vagator) — A Nearby Pair',
      h1: 'Ozran Beach, the Quiet Neighbour of Chapora Fort',
      description:
        'Ozran Beach, also called Little Vagator, sits near Chapora Fort in north Goa. What it is like, how it differs from Vagator Beach and how to plan a visit together with the fort.',
      intro: [
        'Ozran Beach is the smaller, rockier bay south of Vagator Beach, often called Little Vagator. It sits in the same coastal stretch as Chapora Fort, which makes it an easy companion stop on the same outing.',
        'It is known for its relaxed feel and the rocks along the shore rather than for long open sand. How busy it is varies a lot with the season and the time of day.'
      ],
      sections: [
        {
          heading: 'What makes Ozran different',
          paragraphs: [
            'Compared with the main Vagator Beach, Ozran is less about a wide expanse of sand and more about a compact cove with rock formations near the water. That gives it a different mood: smaller, quieter and more enclosed.',
            'The shoreline and how much sand is exposed can shift with the tide and the season, so what you find on one visit may differ from another.'
          ]
        },
        {
          heading: 'Pairing it with the fort',
          paragraphs: [
            'A common plan is to see Chapora Fort first for the views, then drop to the coast and finish at Ozran for the late afternoon. Because both lie in the same area, you avoid long transfers between them.',
            'Do the fort while the light is good and the ground is dry, then move down. If you want to end with a meal, the nearby cafés and restaurants are a natural finish.'
          ]
        },
        {
          heading: 'Staying safe on the shore',
          paragraphs: [
            'Rocky stretches and changing water conditions mean you should keep your distance from the water when the sea is rough, and avoid climbing on wet rocks.',
            'As with any beach in this area, swim only where and when it is safe to do so, and follow local advice and any warning signs.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Ozran Beach the same as Little Vagator?',
          a: 'Yes, Ozran Beach is commonly known as Little Vagator. It sits just south of the main Vagator Beach in the same coastal area near Chapora Fort.'
        },
        {
          q: 'Can you combine Ozran with Chapora Fort?',
          a: 'Yes, they are in the same area, so many visitors see the fort and then relax at Ozran. Allow extra time for the descent from the fort and for the climb back if you return.'
        }
      ],
      verifyNote:
        'Independent guide; sea conditions, tide and access change — follow local advice and never enter rough water.'
    },
    kok: {
      title: 'चापोरा किल्ल्यासावन ओझरां दर्या-देग (लिटल वागातोर) — लागींची जोडी',
      h1: 'ओझरां दर्या-देग, चापोरा किल्ल्याची शांत शेजारण',
      description:
        'ओझरां दर्या-देग, जिका लिटल वागातोर म्हणटात, उत्तर गोवा हांगा चापोरा किल्ल्याच्या लागीं आसा. ती कशी आसा, वागातोर दर्या-देगेसावन कशी वेगळी आनी किल्ल्यासोबत भेट कशी नियोजित करची.',
      intro: [
        'ओझरां दर्या-देग वागातोर दर्या-देगेच्या दक्षिणेक आशिल्ली ल्हान, फातराळ खाडी, जिका चड करून लिटल वागातोर म्हणटात. ती चापोरा किल्ल्याच्याच किनारी पट्ट्यांत आसा, म्हणून एकाच भोंवडेर सोपी सोबत.',
        'तिची खूबी म्हळ्यार भितर सुटसुटीत भाव आनी किनाऱ्यालागीं फातर, लांब पसरटल्ली रेंव न्हय. कितली गर्दी आसता तें ऋतू आनी दिसाच्या वेळेप्रमाण खूप बदलता.'
      ],
      sections: [
        {
          heading: 'ओझरां कशी वेगळी',
          paragraphs: [
            'मुखेल वागातोर दर्या-देगेकडेन तुळा केल्यार, ओझरां म्हळ्यार विस्तृत रेंव न्हय तर उदकालागीं फातरांची निर्मिती आशिल्ली आटीव खाडी. हाका लागून तिचो भाव वेगळो: ल्हान, शांत आनी चड बंदिस्त.',
            'भरती आनी ऋतू प्रमाण किनारो आनी दिसपी रेंव बदलता, म्हणून एका भेटेंत दिसल्लें दुसऱ्या भेटेंत वेगळें आसूंक शकता.'
          ]
        },
        {
          heading: 'किल्ल्यासोबत जोडप',
          paragraphs: [
            'सामान्य येवजण म्हळ्यार आदीं चापोरा किल्लो दृश्यांखातीर पळोवप, उपरांत किनाऱ्याक उतरून सांजे ओझरांत सोंपोवप. दोनूय एकाच वाठारांत आशिल्ल्यान, तांचेभितर लांब येरादारी टळता.',
            'जेन्ना उजवाड बरो आनी जमीन सुकी आसा तेन्ना किल्लो करात, मागीर सकयल वचात. जेवणान सोंपोवपाचो विचार आसल्यार, लागींचे कॅफे आनी हॉटेल सहज शेवट.'
          ]
        },
        {
          heading: 'किनाऱ्यार सुरक्षित रावप',
          paragraphs: [
            'फातराळ भाग आनी बदलपी उदकाची स्थिती हांचेकडेन लक्ष दिवन, दर्या उग्र आसताना उदकासावन पयस रावात आनी भितरल्या फातरांचेर चडचो नाकात.',
            'ह्या वाठारांतल्या खंयच्याय दर्या-देगेप्रमाण, सुरक्षित आसा तेन्नाच आनी थंयच आंगय-पावंक करात, आनी स्थानिक सल्लो व सूचना पाळात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ओझरां दर्या-देग आनी लिटल वागातोर एकूच?',
          a: 'हय, ओझरां दर्या-देगाक सामान्यपणान लिटल वागातोर म्हणटात. ती चापोरा किल्ल्याच्या लागींच्याच किनारी वाठारांत, मुखेल वागातोर दर्या-देगेच्या दक्षिणेक आसा.'
        },
        {
          q: 'ओझरां चापोरा किल्ल्यासोबत जोडूंक येता?',
          a: 'हय, दोनूय एकाच वाठारांत आसात, म्हणून खूप भेट दिवपी आदीं किल्लो पळोवन उपरांत ओझरांत विसवता. किल्ल्यासावन उतरपाक आनी परत येवपाक चडपाक चड वेळ दवरात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; दर्याची स्थिती, भरती आनी प्रवेश बदलता — स्थानिक सल्लो पाळात आनी उग्र उदकांत वचूंक नाकात.'
    }
  },
  {
    slug: 'fort-to-anjuna-beach',
    category: 'nearby',
    priority: 'P1',
    related: ['anjuna-flea-market-nearby', 'fort-to-vagator-beach', 'chapora-without-a-car', 'restaurants-near-chapora-fort'],
    en: {
      title: 'Chapora Fort to Anjuna Beach — A Nearby North Goa Outing',
      h1: 'From Chapora Fort to Anjuna Beach',
      description:
        'Anjuna Beach lies near Chapora Fort in north Goa. How the two fit into one outing, what each offers and how to plan transport between the fort and the beach.',
      intro: [
        'Anjuna Beach is another of the well-known north Goa beaches close to Chapora Fort. Visitors often build a day around the fort, the beaches of Vagator and Anjuna, and the village life between them.',
        'The two are not on the same immediate headland, so this is a short trip rather than a walk down the slope. A little planning on transport makes it smooth.'
      ],
      sections: [
        {
          heading: 'What Anjuna Beach is known for',
          paragraphs: [
            'Anjuna is one of the older beach destinations in north Goa, known for its long stretch of sand, its café culture and, in season, a lively market scene. It draws a mix of long-stay visitors and day-trippers.',
            'The atmosphere varies a great deal between the busy season and the quiet months, so what you find depends heavily on when you visit.'
          ]
        },
        {
          heading: 'Building one outing',
          paragraphs: [
            'A simple shape is to see the fort in the cooler morning or late afternoon for the views, then move to Anjuna for food and the beach. Keep the fort for the light, and the beach for the rest of the day.',
            'Because the two sit in different spots, plan your transport first. Scooters, taxis and app-based rides are the common choices in this part of Goa; confirm what is available on the day.'
          ],
          bullets: [
            'Fort first for the views, beach after for food and rest.',
            'Avoid the middle of the day for the fort climb.',
            'Sort transport between the two before you set off.',
            'Keep an eye on the light if you want sunset photographs.'
          ]
        },
        {
          heading: 'Keeping it independent',
          paragraphs: [
            'If you prefer not to drive, see the guide to visiting without a car, which covers the alternatives. If you want the market, check the separate page on the nearby flea market for timing.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are Chapora Fort and Anjuna Beach close?',
          a: 'They are in the same part of north Goa and are often visited on the same day, but they are separate spots, so plan a short transfer between them rather than expecting a single walk.'
        },
        {
          q: 'Which should you do first?',
          a: 'Many people do the fort first for the views, then relax at the beach. Doing the fort climb in the cooler hours makes the day more comfortable.'
        }
      ],
      verifyNote:
        'Independent guide; transport options, market days and beach conditions vary by season — confirm details locally before travelling.'
    },
    kok: {
      title: 'चापोरा किल्ल्यासावन अंजुना दर्या-देग — उत्तर गोव्यांतली लागींची भोंवडी',
      h1: 'चापोरा किल्ल्यासावन अंजुना दर्या-देगेमेरेन',
      description:
        'अंजुना दर्या-देग उत्तर गोवा हांगा चापोरा किल्ल्याच्या लागीं आसा. दोनूय एका भोंवडेंत कशे बसतात, दरेक कितें दिता आनी किल्लो आनी देग हांचेभितर येरादारी कशी नियोजित करची.',
      intro: [
        'अंजुना दर्या-देग चापोरा किल्ल्याच्या लागींच्या उत्तर गोव्यांतल्या नामनेच्या दर्या-देगांतली आनीक एक. भेट दिवपी चड करून किल्लो, वागातोर आनी अंजुनाच्यो देगां आनी तांचेभितरलें गांव-जिवीत हांचेभोंवतणी दीस घडयतात.',
        'दोनूय एकाच लागींच्या दोंगरार नात, म्हणून ही सकयल उतरपाची वाट न्हय तर थोडी भोंवडी. येरादारीचें थोडें नियोजन केल्यार सोपें जाता.'
      ],
      sections: [
        {
          heading: 'अंजुना दर्या-देग कित्याक नामनेची',
          paragraphs: [
            'अंजुना उत्तर गोव्यांतल्या पोरन्या दर्या-देगा-स्थळांतली एक, तिच्या लांब रेंवेच्या पट्ट्याक, कॅफे-संस्कृतायेक आनी ऋतूंत चलपी बाजार-दृश्याक लागून नामनेची. ती चड वेळ रावपी भेट दिवपी आनी एका दिसाचे भोंवडेकार हांचें मिश्रण ओडता.',
            'गर्दीच्या ऋतू आनी शांत म्हयन्यांमदीं भाव खूप बदलता, म्हणून तुमकां कितें मेळटा तें तुमी केन्ना येतात हाचेर खूब आदारीत.'
          ]
        },
        {
          heading: 'एक भोंवडी घडोवप',
          paragraphs: [
            'सोपो आराखडो म्हळ्यार थंड सकाळीं वा सांजे दृश्यांखातीर किल्लो पळोवप, उपरांत जेवण आनी दर्या-देगेखातीर अंजुनाक वचप. उजवाड किल्ल्याखातीर दवरात आनी उरिल्लो दीस दर्या-देगेखातीर.',
            'दोनूय वेगवेगळ्या जाग्यार आशिल्ल्यान, आदीं येरादारी थरयात. गोव्याच्या ह्या भागांत स्कूटर, टॅक्सी आनी अ‍ॅप-आदारीत राइड सामान्य पर्याय; त्या दिसा कितें उपलब्ध आसा तें तपासात.'
          ],
          bullets: [
            'दृश्यांखातीर आदीं किल्लो, जेवण आनी विसव्याखातीर उपरांत दर्या-देग.',
            'किल्ल्याच्या चडपाखातीर दनपार टाळात.',
            'वचपाच्या आदीं दोनूय भितरली येरादारी थरयात.',
            'सांजेचे फोटो जाय आसल्यार उजवाडाचेर लक्ष दवरात.'
          ]
        },
        {
          heading: 'स्वतंत्रतायेन दवरप',
          paragraphs: [
            'गाडी चलोवपाक नाका आसल्यार, गाडी नासताना भेट दिवपाचो मार्गदर्शक पळयात, जो पर्याय सांगता. बाजार जाय आसल्यार, लागींच्या फ्ली मार्केटाच्या वेळेखातीर वेगळें पान पळयात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्लो आनी अंजुना दर्या-देग लागीं आसात?',
          a: 'दोनूय उत्तर गोव्याच्याच भागांत आसात आनी एकाच दिसा पळयतात, पूण तीं वेगवेगळीं थळां, म्हणून एकच भोंवडी अशें मानून न्हय तर तांचेभितर थोडी येरादारी नियोजित करात.'
        },
        {
          q: 'पयलें कितें करचें?',
          a: 'चड लोक दृश्यांखातीर आदीं किल्लो करतात, उपरांत दर्या-देगेर विसवतात. थंड वेळार किल्ल्याची चडप केल्यार दीस चड सोयीचो जाता.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; येरादारीचे पर्याय, बाजाराचे दीस आनी दर्या-देगेची स्थिती ऋतू प्रमाण बदलता — वचपाच्या आदीं तपशील स्थानिकपणान तपासात.'
    }
  },
  {
    slug: 'anjuna-flea-market-nearby',
    category: 'nearby',
    priority: 'P1',
    related: ['fort-to-anjuna-beach', 'wednesday-anjuna-market-itinerary', 'chapora-without-a-car', 'facilities-and-packing'],
    en: {
      title: 'Anjuna Flea Market Near Chapora Fort — What to Know',
      h1: 'The Anjuna Flea Market Near Chapora Fort',
      description:
        'The Anjuna flea market is a well-known north Goa market near Chapora Fort. What it is, how it relates to the fort, and how to plan a visit without depending on unverified details.',
      intro: [
        'The Anjuna flea market is one of the best-known seasonal markets in north Goa, and it sits close enough to Chapora Fort that many visitors combine the two. It is a market for browsing: clothing, crafts, jewellery and food stalls.',
        'Market days and seasons can change, and a market that runs in the busy months may not run year-round. Always confirm the current arrangements locally before you plan around it.'
      ],
      sections: [
        {
          heading: 'What kind of market it is',
          paragraphs: [
            'Expect a lively mix of stalls rather than a formal shopping street. You will find clothing, accessories, crafts, jewellery and street food, with plenty of browsing and bargaining.',
            'Because the market is seasonal and its scale varies, the number of stalls and the atmosphere can differ a lot between visits. Go for the experience rather than for a specific item you have seen online.'
          ]
        },
        {
          heading: 'Fitting it around the fort',
          paragraphs: [
            'A sensible plan is to see Chapora Fort in the cooler hours, then head to the market later when it is busier and the light is softer. Keep the fort and the market as separate parts of the day rather than trying to rush both.',
            'On market days the area gets busy, so allow extra time for transport and parking, and keep valuables secure in crowds.'
          ],
          bullets: [
            'Do the fort earlier, the market later.',
            'Carry cash for small purchases.',
            'Expect crowds on market days.',
            'Confirm the market is running before you travel.'
          ]
        },
        {
          heading: 'Being a considerate visitor',
          paragraphs: [
            'Ask before photographing people and their stalls, and treat the market as people’s livelihood rather than a backdrop. A friendly, respectful approach goes a long way.',
            'For the wider area, see the guide to visiting without a car and the packaging and facilities page, which covers what to bring for a long day out.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is the Anjuna flea market near Chapora Fort?',
          a: 'Yes, it is in the same part of north Goa and is often combined with a fort visit. Confirm current market days and season locally, as these can change.'
        },
        {
          q: 'Is the market open all year?',
          a: 'The flea market is generally associated with the busier season and may not run year-round. Check locally before making it the centre of your plan.'
        }
      ],
      verifyNote:
        'Independent guide; market days and seasons change and are not stated here — confirm current details locally before travelling.'
    },
    kok: {
      title: 'चापोरा किल्ल्याच्या लागींचो अंजुना फ्ली मार्केट — जाणून घेवपाचें',
      h1: 'चापोरा किल्ल्याच्या लागींचो अंजुना फ्ली मार्केट',
      description:
        'अंजुना फ्ली मार्केट उत्तर गोव्यांतलो नामनेचो बाजार, चापोरा किल्ल्याच्या लागीं. तो कितें, किल्ल्याकडेन ताचो संबंध कितें आनी तपासणी न केल्ल्या तपशिलांवयर आदार न दवरता भेट कशी नियोजित करची.',
      intro: [
        'अंजुना फ्ली मार्केट उत्तर गोव्यांतल्या सगळ्यांत नामनेच्या ऋतू-बाजारांतलो एक, आनी चापोरा किल्ल्याच्या इतलो लागीं आसा की खूप भेट दिवपी दोनूय एकठांय करतात. हो पळोवपाचो बाजार: कपडे, हस्तकला, दागदागिने आनी जेवण-गाळे.',
        'बाजाराचे दीस आनी ऋतू बदलूंक शकतात, आनी गर्दीच्या म्हयन्यांत चलपी बाजार वर्सभर चलनात. ताचेभोंवतणी नियोजन करचे आदीं चालू वेवस्था सदांच स्थानिकपणान तपासात.'
      ],
      sections: [
        {
          heading: 'हो खंयचो बाजार',
          paragraphs: [
            'औपचारिक खरेदी-रस्तो न्हय तर गाळ्यांचें जिवंत मिश्रण अपेक्षा करात. कपडे, साहित्य, हस्तकला, दागदागिने आनी रस्त्यावयलें जेवण मेळटा, आनी भरपूर पळोवप-मोलबाजार चलता.',
            'बाजार ऋतू-आदारीत आनी ताचो आकार बदलपी आशिल्ल्यान, गाळ्यांची संख्या आनी भाव भेटेंप्रमाण खूप बदलूंक शकता. ऑनलायन दिसल्ल्या खास वस्तूखातीर न्हय तर अनुभवाखातीर वचात.'
          ]
        },
        {
          heading: 'किल्ल्याभोंवतणी बसोवप',
          paragraphs: [
            'समजूतदार येवजण म्हळ्यार थंड वेळार चापोरा किल्लो पळोवप, उपरांत बाजार चड गर्दी आनी मऊ उजवाड आसताना वचप. किल्लो आनी बाजार दिसाचे वेगवेगळे भाग म्हणून दवरात, दोनूय घाईत करपाचो यत्न करूंक नाकात.',
            'बाजाराच्या दिसा वाठार गर्दीचो जाता, म्हणून येरादारी आनी पार्किंगाखातीर चड वेळ दवरात आनी गर्दींत मोलादीक वस्तू सुरक्षित दवरात.'
          ],
          bullets: [
            'किल्लो आदीं, बाजार उपरांत.',
            'ल्हान खरेदेखातीर रोख दवरात.',
            'बाजाराच्या दिसा गर्दीची अपेक्षा करात.',
            'वचपाच्या आदीं बाजार चालू आसा तें तपासात.'
          ]
        },
        {
          heading: 'विचार करून भेट दिवपी रावप',
          paragraphs: [
            'लोक आनी तांचे गाळे हांचे फोटो काडचे आदीं विचारात, आनी बाजाराक लोकांची जिवीकाय म्हणून मानात, पड्डो म्हणून न्हय. मोगाळ आनी आदरान वागल्यार खूब फायदो जाता.',
            'विस्तृत वाठाराखातीर, गाडी नासताना भेट दिवपाचो मार्गदर्शक आनी लांब दिसाखातीर कितें व्हरचें हें सांगपी सुविधा आनी साहित्य पान पळयात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'अंजुना फ्ली मार्केट चापोरा किल्ल्याच्या लागीं आसा?',
          a: 'हय, तो उत्तर गोव्याच्याच भागांत आसा आनी चड करून किल्ल्याच्या भेटेंसोबत जोडटात. चालू बाजार-दीस आनी ऋतू स्थानिकपणान तपासात, कारण ते बदलूंक शकतात.'
        },
        {
          q: 'बाजार वर्सभर उगडो आसता?',
          a: 'फ्ली मार्केट सामान्यपणान गर्दीच्या ऋतूकडेन संबंदीत आसा आनी वर्सभर चलना. ताका तुमच्या येवजणेचो मध्यबिंदू करचे आदीं स्थानिकपणान तपासात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; बाजाराचे दीस आनी ऋतू बदलतात आनी हांगा सांगल्ले नात — वचपाच्या आदीं चालू तपशील स्थानिकपणान तपासात.'
    }
  },
  {
    slug: 'chapora-village-walk',
    category: 'nearby',
    priority: 'P2',
    related: ['chapora-fish-market', 'fort-to-vagator-beach', 'nearby-places-on-foot', 'history'],
    en: {
      title: 'Chapora Village Walk — River, Church and Daily Life',
      h1: 'A Gentle Walk Through Chapora Village',
      description:
        'Chapora village sits below the fort in north Goa, around the river mouth. A calm walk through its lanes, near its church and riverside, and how to do it respectfully.',
      intro: [
        'Chapora village lies at the mouth of the Chapora River, below the headland that carries the fort. It is a working village rather than a tourist strip, and a walk through it shows a side of the area that the fort alone does not.',
        'This is a place where people live, fish and go about their day. Walking it well means staying quiet, keeping to public paths and respecting privacy.'
      ],
      sections: [
        {
          heading: 'What you will see',
          paragraphs: [
            'The village sits around the river and its crossing, with lanes, small shops and a church in the older part. Fishing and river life are part of the daily scene, especially early and late in the day.',
            'The mix of the fort above, the river beside and the village below is what makes this corner distinctive in north Goa.'
          ]
        },
        {
          heading: 'How to walk it well',
          paragraphs: [
            'Keep to the roads and public paths, and avoid entering private property or photographing people without asking. Early morning and late afternoon are cooler and calmer.',
            'River crossings and local roads carry traffic, so take care near the water and when walking along roads. Carry water and wear comfortable shoes.'
          ],
          bullets: [
            'Walk in the cooler hours.',
            'Stay on public paths and roads.',
            'Ask before photographing people.',
            'Take care near the river and traffic.'
          ]
        },
        {
          heading: 'Linking it to the rest of the day',
          paragraphs: [
            'The village pairs naturally with the fort above and with a riverside look at the fish market. If you have limited time, choose the fort first and add the village as a slow finish.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is there a formal village walk?',
          a: 'Not a ticketed one. This is a suggestion for a gentle, self-guided stroll through public lanes and along the river, done respectfully.'
        },
        {
          q: 'When is the best time to walk the village?',
          a: 'The cooler hours, early morning or late afternoon, are more comfortable and quieter. Avoid the hottest part of the day and take care near traffic and the river.'
        }
      ],
      verifyNote:
        'Independent guide; respect residents’ privacy, keep to public paths and follow local advice near the river and roads.'
    },
    kok: {
      title: 'चापोरा गांव-भोंवडी — नदी, इगर्ज आनी दिसपट्टी जिवीत',
      h1: 'चापोरा गांवांतल्यान एक शांत भोंवडी',
      description:
        'चापोरा गांव उत्तर गोवा हांगा किल्ल्याच्या सकयल, नदीच्या मुखाभोंवतणी आसा. ताच्या गल्ल्यांतल्यान, इगर्ज आनी नदी-किनाऱ्यालागीं एक शांत भोंवडी, आनी ती आदरान कशी करची.',
      intro: [
        'चापोरा गांव चापोरा नदीच्या मुखार, किल्लो आशिल्ल्या दोंगराच्या सकयल आसा. तो भोंवडेकारांचो पट्टो न्हय तर काम करपी गांव, आनी तातूंतल्यान भोंवल्यार किल्ल्यान एकट्यान दाखोवंक नाशिल्ली वाठाराची एक बाजू दिसता.',
        'हें लोक रावतात, नुस्तें मारतात आनी आपलो दीस घालयतात अशें थळ. बरें भोंवप म्हळ्यार शांत रावप, सार्वजनिक वाटांनी चलप आनी खाजगीपणाचो आदर करप.'
      ],
      sections: [
        {
          heading: 'कितें दिसतलें',
          paragraphs: [
            'गांव नदी आनी तिच्या व्हडे भोंवतणी पसरला, गल्ल्यो, ल्हान दुकानां आनी पोरन्या भागांत एक इगर्ज घेवन. नुस्तें मारप आनी नदी-जिवीत दिसपट्ट्या दृश्याचो भाग, खास करून दिसाच्या सुरवातेक आनी शेवटाक.',
            'वयर किल्लो, लागीं नदी आनी सकयल गांव — हो संगम उत्तर गोव्यांत ह्या कोपऱ्याक वेगळो करता.'
          ]
        },
        {
          heading: 'बरें भोंवप कशें',
          paragraphs: [
            'रस्ते आनी सार्वजनिक वाटांनी चलात, आनी खाजगी मालमत्तेंत वचूंक वा विचारल्याबगर लोकांचे फोटो काडूंक नाकात. पयलीं सकाळ आनी उपरांत सांज थंड आनी शांत आसता.',
            'नदी-व्हडे आनी स्थानिक रस्त्यांनी येरादारी चलता, म्हणून उदकालागीं आनी रस्त्यान चलताना काळजी घेवात. उदक सोबत दवरात आनी सोयीचे जोते घालात.'
          ],
          bullets: [
            'थंड वेळार भोंवात.',
            'सार्वजनिक वाटा आनी रस्त्यांनी रावात.',
            'लोकांचे फोटो काडचे आदीं विचारात.',
            'नदी आनी येरादारीलागीं काळजी घेवात.'
          ]
        },
        {
          heading: 'दिसाच्या उरिल्ल्या भागाकडेन जोडप',
          paragraphs: [
            'गांव सहजपणान वयल्या किल्ल्यासोबत आनी नुस्तें-बाजाराच्या नदी-किनाऱ्यावयल्या पळोवपासोबत जोडटा. वेळ कमी आसल्यार, आदीं किल्लो निवडात आनी गांव सुस्त शेवट म्हणून जोडात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'औपचारिक गांव-भोंवडी आसा?',
          a: 'तिकेट घेवन करपाची ना. ही सार्वजनिक गल्ल्यांतल्यान आनी नदी-लागीं स्वयं-नेतृत्वान केल्ली शांत, आदरान केल्ली भोंवडीची सुचोवणी.'
        },
        {
          q: 'गांव भोंवपाक सगळ्यांत बरी वेळ खंयची?',
          a: 'थंड वेळ, म्हळ्यार पयलीं सकाळ वा उपरांत सांज, चड सोयीची आनी शांत आसता. दिसाचो सगळ्यांत उन आशिल्लो भाग टाळात आनी येरादारी व नदीलागीं काळजी घेवात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; रहिवाशांचो खाजगीपणाचो आदर करात, सार्वजनिक वाटांनी रावात आनी नदी व रस्त्यांलागीं स्थानिक सल्लो पाळात.'
    }
  },
  {
    slug: 'chapora-fish-market',
    category: 'nearby',
    priority: 'P2',
    related: ['chapora-village-walk', 'goan-food-and-seafood', 'fort-to-vagator-beach', 'history'],
    en: {
      title: 'Chapora Fish Market — River Life Near the Fort',
      h1: 'The Fish Market at Chapora',
      description:
        'The fish market at Chapora village, near the fort in north Goa, is part of the area’s river life. What a fish market visit is like and how to do it with respect.',
      intro: [
        'Fishing is part of life at the Chapora river mouth, and the village fish market is where some of the day’s catch changes hands. It is a working market, not a tourist attraction.',
        'Timings depend on the boats and the season, so the market is best treated as something you may pass rather than something to schedule precisely. Go to observe respectfully, not to expect a performance.'
      ],
      sections: [
        {
          heading: 'What a fish market visit is like',
          paragraphs: [
            'Expect early activity, fresh catch laid out for sale, and the everyday business of a fishing community. The atmosphere is functional and busy in the morning and quiet later in the day.',
            'The range of fish reflects what the sea and river are giving at that time of year. Because catches vary, there is no fixed list you can count on.'
          ]
        },
        {
          heading: 'Visiting respectfully',
          paragraphs: [
            'This is people’s workplace. Keep out of the way of workers and buyers, ask before taking photographs and do not handle the catch unless invited.',
            'Wear footwear that can cope with wet, uneven ground, and be careful near the water, the boats and any ice or slippery surfaces.'
          ],
          bullets: [
            'Go early for the busiest time.',
            'Ask before photographing.',
            'Do not handle the catch.',
            'Watch your footing on wet ground.'
          ]
        },
        {
          heading: 'Linking food and place',
          paragraphs: [
            'A market like this explains where the seafood served in nearby cafés and restaurants begins. For the wider picture, see the guide to Goan food and seafood near the fort.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is the Chapora fish market a tourist attraction?',
          a: 'No, it is a working fish market used by the local fishing community. Visitors are welcome to observe respectfully, but it is not set up as an attraction.'
        },
        {
          q: 'When is the market busiest?',
          a: 'Fish markets are generally busiest in the early morning after the boats come in. Exact timings change with the boats and season, so treat any time as a rough guide.'
        }
      ],
      verifyNote:
        'Independent guide; market timings depend on boats and season and are not stated exactly — observe respectfully and keep clear of the catch and the water.'
    },
    kok: {
      title: 'चापोरा नुस्तें-बाजार — किल्ल्यालागींचें नदी-जिवीत',
      h1: 'चापोरा हांगाचो नुस्तें-बाजार',
      description:
        'उत्तर गोवा हांगा किल्ल्यालागीं चापोरा गांवांतलो नुस्तें-बाजार वाठाराच्या नदी-जिविताचो भाग. नुस्तें-बाजाराक भेट कशी आसता आनी ती आदरान कशी करची.',
      intro: [
        'चापोरा नदीच्या मुखार नुस्तें मारप जिविताचो भाग, आनी गांवचो नुस्तें-बाजार म्हळ्यार दिसाचो कांय कातार हात बदलपी थळ. हो काम करपी बाजार, भोंवडेकारांचें आकर्षण न्हय.',
        'वेळो-वेळ बोटां आनी ऋतू हांचेर आदारीत, म्हणून बाजाराक नेमान थरयिल्लें कितें न्हय तर तुमी लागींवचन पासार जावपी कितें अशें मानात. आदरान पळोवपाखातीर वचात, नाटक अपेक्षा करूंक नाकात.'
      ],
      sections: [
        {
          heading: 'नुस्तें-बाजाराक भेट कशी आसता',
          paragraphs: [
            'सकाळची सुरवात, विकपाखातीर मांडिल्लें ताजें कातार आनी नुस्तें मारपी लोकांचो दिसपट्टो धंदो अपेक्षा करात. सकाळीं भाव कामाचो आनी गर्दीचो, उपरांत दिसा शांत.',
            'नुस्त्याचो प्रकार थंय वर्साच्या त्या वेळार दर्या आनी नदी कितें दिता हें दाखयता. कातार बदलताच, तुमी गणपाची थरिल्ली यादी ना.'
          ]
        },
        {
          heading: 'आदरान भेट दिवप',
          paragraphs: [
            'हें लोकांचें कामाचें थळ. काम करपी आनी खरेदी करपी हांच्या मदीं पडूंक नाकात, फोटो काडचे आदीं विचारात आनी आपयल्याबगर कातार हाताक लावूंक नाकात.',
            'भिजिल्ल्या, असमान जमिनीखातीर योग्य जोते घालात, आनी उदक, बोटां आनी बर्फ वा घसरपी पटलांलागीं काळजी घेवात.'
          ],
          bullets: [
            'गर्दीच्या वेळेखातीर सकाळीं वचात.',
            'फोटो काडचे आदीं विचारात.',
            'कातार हाताक लावूंक नाकात.',
            'भिजिल्ल्या जमिनीचेर पावलां सांबाळात.'
          ]
        },
        {
          heading: 'जेवण आनी थळ जोडप',
          paragraphs: [
            'ह्या सारक्या बाजारान लागींच्या कॅफे आनी हॉटेलांनी दितलें नुस्त्याचें जेवण खंयच्यान सुरू जाता हें सांगता. विस्तृत चित्राखातीर, किल्ल्यालागींच्या गोवेकार जेवण आनी नुस्त्याचो मार्गदर्शक पळयात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा नुस्तें-बाजार भोंवडेकारांचें आकर्षण आसा?',
          a: 'ना, तो स्थानिक नुस्तें मारपी लोकांनी वापरपी काम करपी नुस्तें-बाजार. भेट दिवपी आदरान पळोवंक येतात, पूण तो आकर्षण म्हणून मांडला ना.'
        },
        {
          q: 'बाजाराक सगळ्यांत गर्दी केन्ना आसता?',
          a: 'नुस्तें-बाजार चड करून बोटां येतकच पयलीं सकाळीं गर्दीचो आसता. नेमकी वेळ बोटां आनी ऋतूप्रमाण बदलता, म्हणून खंयचीय वेळ कच्ची मार्गदर्शक मानात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; बाजाराची वेळ बोटां आनी ऋतू हांचेर आदारीत आनी हांगा नेमान सांगल्ली ना — आदरान पळयात आनी कातार व उदकासावन पयस रावात.'
    }
  },
  {
    slug: 'fort-to-morjim-beach',
    category: 'nearby',
    priority: 'P2',
    related: ['fort-to-vagator-beach', 'fort-to-anjuna-beach', 'chapora-without-a-car', 'nearby-places-on-foot'],
    en: {
      title: 'Chapora Fort to Morjim Beach — A Quieter Nearby Coast',
      h1: 'From Chapora Fort to Morjim Beach',
      description:
        'Morjim Beach lies north of Chapora Fort across the river in Goa. What makes it different, how the two fit into one outing and how to plan the transfer.',
      intro: [
        'Morjim Beach sits to the north of Chapora, on the far side of the river from the fort’s headland. It is known as a quieter, more spread-out stretch than the busier beaches to the south.',
        'Because the fort and Morjim are on opposite sides of the river, this is a transfer rather than a short walk. Plan the crossing and the transport before you set out.'
      ],
      sections: [
        {
          heading: 'Why Morjim feels different',
          paragraphs: [
            'Morjim is generally calmer and less built-up than the beaches closer to the fort, with a longer, softer feel. It is a place people go to slow down rather than to be in the middle of everything.',
            'The beach and the river mouth area are also known for wildlife, so visitors are expected to keep their distance and follow local guidance, especially in sensitive seasons.'
          ]
        },
        {
          heading: 'Planning the outing',
          paragraphs: [
            'Do the fort for the views, then cross towards Morjim for the rest of the day. Because they are on different sides of the river, allow time for the crossing and for traffic on the way.',
            'If you want to keep travelling light, the without-a-car guide covers how people get around this side of north Goa using scooters, taxis and app-based rides.'
          ]
        },
        {
          heading: 'Respecting the wildlife',
          paragraphs: [
            'Parts of this coastline are important for nesting and marine life at certain times of year. Keep a respectful distance, avoid disturbing any marked or protected areas and follow what local authorities and signs ask of visitors.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Morjim Beach near Chapora Fort?',
          a: 'It is in the same stretch of north Goa but on the other side of the river, so expect a short transfer rather than a walk from the fort. Allow time for the crossing.'
        },
        {
          q: 'Why is Morjim quieter?',
          a: 'It is generally less built-up than the beaches nearer the fort and is known as a calmer, more spread-out spot. Conditions and crowds still vary with the season.'
        }
      ],
      verifyNote:
        'Independent guide; crossing points and transport vary — follow local guidance and keep a respectful distance from wildlife and protected areas.'
    },
    kok: {
      title: 'चापोरा किल्ल्यासावन मोर्जीम दर्या-देग — शांत लागींचो किनारो',
      h1: 'चापोरा किल्ल्यासावन मोर्जीम दर्या-देगेमेरेन',
      description:
        'मोर्जीम दर्या-देग गोवा हांगा नदीच्या पलतडी, चापोरा किल्ल्याच्या उत्तरेक आसा. ती कित्याक वेगळी, दोनूय एका भोंवडेंत कशे बसतात आनी व्हडे कसो नियोजित करचो.',
      intro: [
        'मोर्जीम दर्या-देग चापोराच्या उत्तरेक, किल्ल्याच्या दोंगरासावन नदीच्या पलतडी आसा. दक्षिणेकडल्या गर्दीच्या देगांपरस ती शांत आनी चड पसरटल्ली अशें तिका वळखतात.',
        'किल्लो आनी मोर्जीम नदीच्या दोनूय वटांनी आशिल्ल्यान, ही थोडी भोंवडी न्हय तर व्हडो. वचपाच्या आदीं व्हडो आनी येरादारी थरयात.'
      ],
      sections: [
        {
          heading: 'मोर्जीम कित्याक वेगळी जाणवता',
          paragraphs: [
            'मोर्जीम सामान्यपणान किल्ल्यालागींच्या देगांपरस शांत आनी उणी बांदावळ आशिल्ली, चड लांब आनी मऊ भाव दिता. सगळ्याच्या मदीं रावपापरस लोक सुस्तावपाक हांगा येतात.',
            'दर्या-देग आनी नदी-मुखाचो वाठार जिवी-वनस्पत आनी प्राणी हांचेखातीरय वळखतात, म्हणून भेट दिवपी पयस रावपाची अपेक्षा आसता आनी स्थानिक सल्लो पाळचो पडटा, खास करून संवेदनशील ऋतूंत.'
          ]
        },
        {
          heading: 'भोंवडेचें नियोजन',
          paragraphs: [
            'दृश्यांखातीर किल्लो करात, उपरांत दिसाच्या उरिल्ल्या भागाखातीर मोर्जीमाकडे व्हडो करात. दोनूय नदीच्या वेगवेगळ्या वटांनी आशिल्ल्यान, व्हड्याक आनी वाटेच्या येरादारीक वेळ दवरात.',
            'हलकेंच फिरपाचो विचार आसल्यार, गाडी नासताना भेट दिवपाचो मार्गदर्शक उत्तर गोव्याच्या ह्या वटार स्कूटर, टॅक्सी आनी अ‍ॅप-आदारीत राइड वापरून लोक कशे भोंवतात हें सांगता.'
          ]
        },
        {
          heading: 'जिवी-वनस्पत आनी प्राणी हांचो आदर',
          paragraphs: [
            'ह्या किनाऱ्याचे कांय भाग वर्साच्या खास वेळार घरटीं आनी दर्यांतल्या जिवाक महत्त्वाचे आसतात. आदरान पयस रावात, खुणायल्ल्या वा संरक्षित वाठारांत अडचण करूंक नाकात आनी स्थानिक अधिकारी व सूचना भेट दिवप्यांकडेन कितें मागतात तें पाळात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'मोर्जीम दर्या-देग चापोरा किल्ल्याच्या लागीं आसा?',
          a: 'ती उत्तर गोव्याच्याच पट्ट्यांत पूण नदीच्या दुसऱ्या वटार आसा, म्हणून किल्ल्यासावन चलपाची न्हय तर थोडी भोंवडी अपेक्षा करात. व्हड्याखातीर वेळ दवरात.'
        },
        {
          q: 'मोर्जीम कित्याक शांत आसा?',
          a: 'ती सामान्यपणान किल्ल्यालागींच्या देगांपरस उणी बांदावळ आशिल्ली आनी चड शांत, पसरटल्ली थळ म्हणून वळखतात. तरीय स्थिती आनी गर्दी ऋतूप्रमाण बदलता.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; व्हडे आनी येरादारी बदलता — स्थानिक सल्लो पाळात आनी जिवी-वनस्पत व संरक्षित वाठारांसावन आदरान पयस रावात.'
    }
  },
  {
    slug: 'nearby-places-on-foot',
    category: 'nearby',
    priority: 'P1',
    related: ['fort-to-vagator-beach', 'chapora-village-walk', 'chapora-without-a-car', 'how-long-to-visit'],
    en: {
      title: 'Nearby Places You Can Reach on Foot from Chapora Fort',
      h1: 'What You Can Walk to from Chapora Fort',
      description:
        'Which nearby spots around Chapora Fort in Goa can realistically be reached on foot, what the walking involves and when it is better to take transport instead.',
      intro: [
        'Chapora Fort sits in a cluster of places that are close together on a map, but “close” on a map and “walkable” in the heat are two different things. This page helps you judge which nearby stops suit a walk and which do not.',
        'The single biggest factor is the fort’s elevation: any walk out starts with a descent, and any return ends with a climb. Plan around that and the day is much easier.'
      ],
      sections: [
        {
          heading: 'The realistic on-foot options',
          paragraphs: [
            'The most natural walk is down towards the coast and the Vagator area, which sits below and to the west of the fort. The village and the riverside are also reachable on foot for those who enjoy a slow stroll.',
            'Beyond those, the distances to the further beaches grow, and the heat, the roads and the traffic make walking less pleasant. For those, transport is usually the better choice.'
          ],
          bullets: [
            'Coast and Vagator area: the most natural walk.',
            'Village and river lanes: good for a slow stroll.',
            'Further beaches: usually better by transport.',
            'Always count the climb back to the fort.'
          ]
        },
        {
          heading: 'Judging the weather',
          paragraphs: [
            'What feels easy in the early morning can feel hard by midday. If you plan to walk, start early or go late, carry water and cover up against the sun.',
            'During the monsoon the ground can be wet and slippery, and heavy rain changes everything. On those days, shorten the walking and use transport where you can.'
          ]
        },
        {
          heading: 'When not to walk',
          paragraphs: [
            'If you are short on time, travelling with young children or older family members, or visiting in the middle of a hot day, transport is the kinder option. The without-a-car guide covers how people get around here without driving.',
            'Whichever you choose, keep to public paths and roads and check what is open on the day.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Can you walk to Vagator Beach from Chapora Fort?',
          a: 'Yes, the coast and Vagator area are the most natural places to walk to from the fort, but it involves a descent and, if you return, a climb. Do it in the cooler hours.'
        },
        {
          q: 'Should you walk or take transport to the further beaches?',
          a: 'For the further beaches, transport is usually more comfortable because of the distance, heat and traffic. Walking suits only the closest stops and the cooler parts of the day.'
        }
      ],
      verifyNote:
        'Independent guide; distances and access change and are not stated exactly — judge by your own pace, the heat and current conditions.'
    },
    kok: {
      title: 'चापोरा किल्ल्यासावन पावलांनी पावपा सारकीं लागींचीं थळां',
      h1: 'चापोरा किल्ल्यासावन तुमी खंयमेरेन चलून वचूंक शकतात',
      description:
        'गोवा हांगा चापोरा किल्ल्याभोंवतणचीं खंयचीं लागींचीं थळां पावलांनी खरोखर पावपा सारकीं, चलपांत कितें आसा आनी केन्ना चलपापरस येरादारी बरी.',
      intro: [
        'चापोरा किल्लो नकाशार एकामेकांक लागीं आशिल्ल्या थळांच्या गठ्ठ्यांत आसा, पूण नकाशार “लागीं” आनी उनेंत “चलपा सारकें” हीं दोन वेगळीं. हो पान खंयचे लागींचे थांब चलपाक साजते आनी खंयचे न्हय हें तपासपाक मदत करता.',
        'सगळ्यांत व्हडलो घटक म्हळ्यार किल्ल्याची उंचाय: भायर खंयचीय भोंवडी उतरपान सुरू जाता, आनी परत येवप चडपान सोंपता. हाचेभोंवतणी नियोजन केल्यार दीस खूप सोपो जाता.'
      ],
      sections: [
        {
          heading: 'पावलांनी वचपाचे खरे पर्याय',
          paragraphs: [
            'सगळ्यांत सहज भोंवडी किनाऱ्याकडे आनी किल्ल्याच्या सकयल आनी अस्तंतेक आशिल्ल्या वागातोर वाठाराकडे. गांव आनी नदी-किनारोय सुस्त भोंवडी आवडपी लोकांखातीर पावलांनी पावपा सारके.',
            'हांच्या पलीकडे, पयसच्या देगांमेरेन अंतर वाडटा, आनी उन, रस्ते व येरादारी हांच्यान चलप उणें सोयीचें जाता. तांचेखातीर सामान्यपणान येरादारी बरी निवड.'
          ],
          bullets: [
            'किनारो आनी वागातोर वाठार: सगळ्यांत सहज भोंवडी.',
            'गांव आनी नदी-गल्ल्यो: सुस्त भोंवडेखातीर बऱ्यो.',
            'पयसच्यो देगां: चड करून येरादारीन बऱ्यो.',
            'सदांच किल्ल्यामेरेन परत चडप मेजात.'
          ]
        },
        {
          heading: 'हवामान तपासप',
          paragraphs: [
            'पयलीं सकाळीं सोपें जाणवपी काम दनपारामेरेन कठीण जाणवूंक शकता. चलपाचो विचार आसल्यार सकाळीं वा उशारा सुरू करात, उदक सोबत दवरात आनी उनेंसावन आंग धांपात.',
            'पावसाळ्यांत जमीन भिजिल्ली आनी घसरपी आसूंक शकता, आनी जोराचो पावस सगळें बदलता. त्या दिसांनी चलप उणें करात आनी जंय येता थंय येरादारी वापरात.'
          ]
        },
        {
          heading: 'केन्ना चलचें न्हय',
          paragraphs: [
            'वेळ कमी आसल्यार, ल्हान भुरग्यांवांगडा वा जाणट्या कुटुंबियांवांगडा भोंवताल्यार, वा उन आशिल्ल्या दनपारार भेट दितात जाल्यार, येरादारी चड दयाळ पर्याय. गाडी नासताना भेट दिवपाचो मार्गदर्शक हांगा लोक गाडी चलोवनांतर कशे भोंवतात हें सांगता.',
            'तुमी कितेंय निवडात, सार्वजनिक वाटा आनी रस्त्यांनी रावात आनी त्या दिसा कितें उगडें आसा तें तपासात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्यासावन वागातोर दर्या-देगेमेरेन चलून वचूंक येता?',
          a: 'हय, किनारो आनी वागातोर वाठार किल्ल्यासावन चलपाक सगळ्यांत सहज थळां, पूण तातूंत उतरप आनी परत येवपाक चडप आसा. थंड वेळार करात.'
        },
        {
          q: 'पयसच्या देगांमेरेन चलचें वा येरादारी घेवची?',
          a: 'पयसच्या देगांखातीर, अंतर, उन आनी येरादारी हांचेकडेन पळोवन येरादारी सामान्यपणान चड सोयीची. चलप फकत लागींच्या थळांखातीर आनी दिसाच्या थंड वेळांखातीर साजतें.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; अंतर आनी प्रवेश बदलता आनी हांगा नेमान सांगल्ले नात — तुमची गती, उन आनी चालू स्थिती हांचेप्रमाण ठरयात.'
    }
  }
];
