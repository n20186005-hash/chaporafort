import type { Guide } from './types';

// भोंवडी-मार्ग (itineraries) — 8 द्विभाषी पानां.
// सगळे वेळ-अंदाज सुचयल्ले मार्ग; खात्री केल्ली मापां न्हय.
export const itineraryGuides: Guide[] = [
  {
    slug: '90-minute-itinerary',
    category: 'itinerary',
    priority: 'P0',
    related: [
      'fort-vagator-half-day',
      'family-morning-itinerary',
      'how-long-to-visit',
      'best-time-and-sunset',
      'trail-and-climb'
    ],
    en: {
      title: 'A 90-Minute Chapora Fort Itinerary',
      h1: 'A suggested 90-minute itinerary for Chapora Fort',
      description:
        'A flexible 90-minute plan for Chapora Fort in Vagator: the uphill trail, the viewpoints and the ruins, all paced to your own fitness and the weather.',
      intro: [
        'This is a suggested plan, not a measured schedule. Ninety minutes is simply a comfortable shape for a first visit to Chapora Fort in Vagator, with time to walk up, look around and come back down without rushing.',
        'Your own pace, the weather, current access and how busy the path is can change everything. Treat the timings below as a rough frame only, and adjust them freely: there is no single correct duration.'
      ],
      sections: [
        {
          heading: 'Before you set off',
          paragraphs: [
            'Start with water, sun protection and shoes that grip well. The route up to the fort is a laterite trail on uneven ground that can be slippery after rain, so quick sandals are not ideal. Check the current opening status and local conditions before you travel, because published hours and access can change without notice.'
          ],
          bullets: [
            'Carry water; there is little shade on the climb.',
            'Wear closed shoes with grip for the laterite path.',
            'Prefer early morning or late afternoon over the midday heat.',
            'Confirm current opening times locally before setting out.',
            'Build in spare time for crowds near the top.'
          ]
        },
        {
          heading: 'The climb (suggested: about 20–30 minutes)',
          paragraphs: [
            'Allow roughly twenty to thirty minutes for the uphill walk, and more if the day is hot or you stop often. The path rises over rocky, uneven ground, so steady steps matter far more than speed. Resting on the way is completely normal and usually makes the visit more enjoyable for everyone in the group.',
            'If anyone in your group walks more slowly, add time rather than shorten the visit. The figures here are only a suggestion: your real pace depends on fitness, the weather, how many other people are on the trail, and whether you stop to take photographs or simply to rest.'
          ]
        },
        {
          heading: 'At the top (suggested: about 30–40 minutes)',
          paragraphs: [
            'Once you are up, take in the Chapora river mouth, the coastline and the beaches below. Wander between the ruined walls and bastions at your own speed, and read any information panels if they are on site. The fort is a laterite hill fort in Vagator, and much of what remains is the surviving outline of a much older structure.',
            'Keep to obvious paths and avoid climbing on loose or clearly fragile stonework. Views and light change through the day, and the evening is often described as a good time to visit, though current opening hours should always be confirmed locally, as the published times and any sunset access may differ.'
          ]
        },
        {
          heading: 'Coming down and finishing',
          paragraphs: [
            'Descend carefully, especially on dusty or wet sections where footing is uncertain. Then choose how to round off the trip: a cold drink at a nearby café, a short look at the beach below the fort, or the start of your onward journey. None of this needs to be fixed in advance.'
          ],
          bullets: [
            'Take the steeper sections slowly on the way down.',
            'Rinse dust off before photos or a meal nearby.',
            'Consider the beach below the fort if you have extra time.',
            'Check onward transport before it gets dark.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is 90 minutes enough for Chapora Fort?',
          a: 'For many visitors it is a comfortable frame for the climb and the ruins, but it is only a suggestion — adjust it to your fitness, the weather and how busy it is.'
        },
        {
          q: 'Do I need to book a time slot?',
          a: 'No booking process is described here; check current opening hours and local conditions before you travel, and allow extra time if you visit towards sunset.'
        },
        {
          q: 'Can children follow this plan?',
          a: 'It can suit active families, but the ground is uneven and uphill, so allow extra time and close supervision.'
        }
      ],
      verifyNote:
        'Independent guide; timings, weather, transport and opening details change — adjust any plan and confirm current information before travelling.'
    },
    kok: {
      title: 'चापोरा किल्लो: 90 मिनुटांचो भोंवडी-मार्ग',
      h1: 'चापोरा किल्ल्या खातीर सुचयल्लो 90 मिनुटांचो मार्ग',
      description:
        'वागातोरांतल्या चापोरा किल्ल्या खातीर लवचीक 90 मिनुटांचो सुचयल्लो मार्ग: दोंगरार चडप, दृश्यां आनी अवशेशांक भेट — सगळें तुमच्या वेगा आनी हवामाना प्रमाण बदलपाक शक्य.',
      intro: [
        'हो एक सुचयल्लो मार्ग, खात्री केल्ली वेळ-पट्टी न्हय. चापोरा किल्ल्याक पयलें भेट दिवपाक 90 मिनूट सोपो आकार जावन आसा — चडपाक, भोंवतणी पळोवपाक आनी धांवधाव न करता परत येवपाक पुरो.',
        'तुमचो वेग, हवामान, सद्याची प्रवेश परिस्थिती आनी वाटेवेलो गर्दी हो सगळो बदल करूंक शकता. सकयल दिल्ले वेळो एक फक्त अंदाज माना आनी तो मोकळेपणान बदला; एकच बरोबर वेळ अशें कितेंच ना.'
      ],
      sections: [
        {
          heading: 'सुरू करचे पयलीं',
          paragraphs: [
            'उदक, सूर्यापासून संरक्षण आनी घट्ट पकड दिवपी पादत्राणां घेवन भायर सरा. किल्ल्याक वचपी वाट लेटराइट दोंगराचेर असमान जमनींतून वता, आनी पावसा उपरांत ती घसरपी जावंक शकता. भायर सरचे पयलीं सद्याची उक्तावणी स्थिती आनी थळावी परिस्थिती तपासा.'
          ],
          bullets: [
            'उदक व्हर; चडपाक छाया उणी आसा.',
            'लेटराइट वाटे खातीर घट्ट पकड आशिल्लीं पादत्राणां घाला.',
            'दनपाराचे उकाळ परस सकाळ वा सांजेचो वेळ बरो.',
            'भायर सरचे पयलीं सद्याची उक्तावणी वेळ थळावे तपासा.',
            'दोंगराचेर गर्दी खातीर थोडो वेळ सोडून दवरा.'
          ]
        },
        {
          heading: 'चडप (सुचयल्लें: सुमार 20–30 मिनूट)',
          paragraphs: [
            'दोंगरार चडपाक सुमार वीस ते तीस मिनूट दिव; दीस उकाळ आसलो वा वारंवार थांबल्यार आनी वेळ लागतलो. वाट फातराळ आनी असमान जमनींतून वयर वता, म्हूण वेग परस शांत पावलां चड म्हत्वाचीं.',
            'तुमच्या गटांत कोणी हळू चलता जाल्यार वेळ वाडयात, भेट कमी करूं नाकात. हे आंकडे फक्त सुचोवणी आसा; तुमचो खरो वेग तुमच्या तब्येती, हवामान आनी वाटेवेल्या लोकांच्या प्रमाण आसता.'
          ]
        },
        {
          heading: 'वयर (सुचयल्लें: सुमार 30–40 मिनूट)',
          paragraphs: [
            'वयर पावल्यार चापोरा न्हंयेचें तोंड, दर्यादेग आनी सकयल आशिल्लीं दर्यादेगां पळोवात. पडल्या वण्टां आनी बुरुजांमदीं तुमच्या वेगान भोंवात, आनी साइटीचेर म्हायती फलक आसल्यार ते वाचात. चापोरा किल्लो वागातोरांतलो लेटराइट दोंगरी किल्लो; आयज दिसपी बरोच भाग पोरन्या बांदावळीचो उरला.',
            'स्पश्ट वाटांनी चलात आनी सोडिल्ल्या वा नाजूक फातरां चडूं नाकात. दिसांत दृश्य आनी उजवाड बदलता, आनी सांजवेळ भेटी खातीर बरो वेळ अशें अनेकदा सांगतात — पूण सद्याची उक्तावणी वेळ थळावे थावन खात्री करची.'
          ]
        },
        {
          heading: 'सकयल देंवप आनी मार्ग सोंपोवप',
          paragraphs: [
            'धूळ वा ओल्या भागांनी खूब काळजी घेवन देंवात. उपरांत भोंवडी कशी सोंपोवची तें वेंचात: लागसारच्या कॅफेंत थंड पेय, किल्ल्याचे सकयल दर्यादेगेची थोडी भेट, वा पुढल्या प्रवासाची सुरवात. हें कितेंच आदीं थारायल्लें आसूंक जाय ना.'
          ],
          bullets: [
            'देंवतना तिखट उतार हळू हळू उतरात.',
            'फोटो वा जेवणा पयलीं धूळ धुवात.',
            'वेळ आसल्यार किल्ल्याचे सकयल दर्यादेग पळोवात.',
            'काळो जावचे पयलीं पुढलो वाहतूक तपासा.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्या खातीर 90 मिनूट पुरते?',
          a: 'जायत्या भेट दिवप्यां खातीर चडप आनी अवशेशां खातीर हो सोपो अंदाज, पूण हो फक्त सुचोवणी — तब्येत, हवामान आनी गर्दी प्रमाण बदला.'
        },
        {
          q: 'वेळेचो आरक्षण करचो पडटा?',
          a: 'हांगा कसलोच आरक्षण क्रम सांगिल्लो ना; भायर सरचे पयलीं सद्याची उक्तावणी वेळ आनी परिस्थिती तपासा, आनी सांजे वेळार वचत जाल्यार चड वेळ दवरा.'
        },
        {
          q: 'भुरगीं ह्या मार्गान वचूंक शकतात?',
          a: 'सक्रिय कुटुंबां खातीर चलतलो, पूण जमीन असमान आनी चडपाची आसा, म्हूण चड वेळ आनी कडक देखरेख दवरा.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; वेळ, हवामान, वाहतूक आनी उक्तावणीची म्हायती बदलता — खंयचोय मार्ग जुळोवन घेवन भोंवडे पयलीं सद्याची म्हायती खात्री करा.'
    }
  },
  {
    slug: 'fort-vagator-half-day',
    category: 'itinerary',
    priority: 'P0',
    related: [
      'fort-to-vagator-beach',
      '90-minute-itinerary',
      'cafes-and-quick-drinks',
      'best-time-and-sunset',
      'nearby-places-on-foot'
    ],
    en: {
      title: 'Chapora Fort and Vagator Half-Day Plan',
      h1: 'A half-day plan for Chapora Fort and Vagator Beach',
      description:
        'A suggested half-day combining Chapora Fort and Vagator Beach: the fort first, then the beach, a café stop and an easy return, all at your own pace.',
      intro: [
        'A half day is a relaxed way to pair the fort with the beach below it. The idea is simple: climb Chapora Fort while it is cooler, then come down to Vagator Beach to swim, sit or eat.',
        'This is only a suggested shape. Your pace, the weather, the tide, current access and how busy the area is will all affect the plan, so adjust the order and the time you spend at each stop freely.'
      ],
      sections: [
        {
          heading: 'How the half day fits together',
          paragraphs: [
            'Start with the fort, because the climb is more comfortable before the strongest heat, then move down to Vagator Beach. Keep it flexible: if the fort is busy, shorten the fort; if the sea looks appealing, stay on the sand longer.'
          ],
          bullets: [
            'Fort first, beach second.',
            'Carry water and sun protection for both stops.',
            'Check current opening times and local conditions.',
            'Leave room for a café or meal stop in between.',
            'Do not fix exact timings; go by how you feel.'
          ]
        },
        {
          heading: 'At the fort (suggested: about an hour)',
          paragraphs: [
            'Allow roughly an hour on the hill for the walk up, a look at the ruins and the viewpoints, and the descent. The ground is uneven laterite and can be slippery after rain, so take the steeper parts slowly and watch your footing.',
            'Published hours have been listed as daytime opening, and evening views are often recommended, but confirm current timings locally, since access and hours can change. There is no current admission price stated on the linked Government pages.'
          ]
        },
        {
          heading: 'At Vagator Beach',
          paragraphs: [
            'Below the fort, Vagator Beach is the natural next stop. Swim only where it is safe and where others are swimming, watch the currents, and follow any local advice or flags. Facilities, lifeguards and sea conditions vary through the season, so check before you go in.'
          ]
        },
        {
          heading: 'Eating, drinking and getting back',
          paragraphs: [
            'A drink or a meal nearby is an easy way to finish the half day. Prices and menus are not listed here and should be confirmed at the venue. For the return, check your transport options in advance, especially if you are heading on after dark, and keep a little flexibility in case you stay longer than planned.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Can I do the fort and the beach in a half day?',
          a: 'Yes, many visitors combine them, but the fort and the beach are two separate stops with a walk between them — allow extra time and adjust to your own pace.'
        },
        {
          q: 'Which should I do first?',
          a: 'The fort is usually more comfortable earlier, before the strongest heat, with the beach afterwards, but the order is only a suggestion.'
        }
      ],
      verifyNote:
        'Independent guide; timings, weather, transport and opening details change — adjust any plan and confirm current information before travelling.'
    },
    kok: {
      title: 'चापोरा किल्लो आनी वागातोर: अर्दो दीस',
      h1: 'चापोरा किल्लो आनी वागातोर दर्यादेगे खातीर अर्द्या दिसाचो मार्ग',
      description:
        'चापोरा किल्लो आनी वागातोर दर्यादेग एकठांय करपी सुचयल्लो अर्दो दीस: पयलीं किल्लो, उपरांत दर्यादेग, कॅफेंत थांबो आनी परत येवप — तुमच्या वेगान.',
      intro: [
        'अर्दो दीस हो किल्लो आनी ताचे सकयल दर्यादेग एकठांय जोडपाचो सोपो मार्ग. कल्पना सादी: उकाळ उणो आसतना चापोरा किल्ल्यार चडा, उपरांत वागातोर दर्यादेगेचेर देंवात — न्हावपाक, बसूंक वा जेवपाक.',
        'हो फक्त एक सुचयल्लो आकार. तुमचो वेग, हवामान, भरती-ओहोटी, सद्याची प्रवेश परिस्थिती आनी गर्दी ह्या सगळ्यांचो परिणाम मार्गाचेर जाता, म्हूण क्रम आनी दरेक थांब्याचो वेळ मोकळेपणान बदला.'
      ],
      sections: [
        {
          heading: 'अर्दो दीस कसो जुळटा',
          paragraphs: [
            'किल्ल्यान सुरवात करा, कारण उकाळ तीव्र जावचे पयलीं चडप चड सोयीचें आसता; उपरांत वागातोर दर्यादेगेचेर देंवात. लवचीक दवरा: किल्ल्याचेर गर्दी आसली जाल्यार किल्लो सोंपो करात; दर्या आवडलो जाल्यार रेंवेचेर चड वेळ रावात.'
          ],
          bullets: [
            'पयलीं किल्लो, उपरांत दर्यादेग.',
            'दोनूय थांब्यां खातीर उदक आनी सूर्य-संरक्षण व्हरात.',
            'सद्याची उक्तावणी वेळ आनी परिस्थिती तपासा.',
            'मदीं कॅफे वा जेवणाचो थांबो दवरा.',
            'नेमकी वेळ थारायनाकात; मनाक येवपा प्रमाण चलात.'
          ]
        },
        {
          heading: 'किल्ल्याचेर (सुचयल्लें: सुमार एक वर)',
          paragraphs: [
            'दोंगराचेर चडपाक, अवशेश आनी दृश्यां पळोवपाक आनी देंवपाक सुमार एक वर दिव. जमीन असमान लेटराइट आसा आनी पावसा उपरांत घसरपी जावंक शकता, म्हूण तिखट भाग हळू चला आनी पावलां नियाळत चला.',
            'उक्तावणी वेळ दिसा वेळार अशें नोंद केल्लें आसा, आनी सांजेचें दृश्य जायत्या वेळा सुचयता — पूण सद्याची वेळ थळावे खात्री करा, कारण प्रवेश आनी वेळ बदलूंक शकता. जोडिल्ल्या सरकारी पानांचेर सद्याचो प्रवेश दर सांगिल्लो ना.'
          ]
        },
        {
          heading: 'वागातोर दर्यादेगेचेर',
          paragraphs: [
            'किल्ल्याचे सकयल वागातोर दर्यादेग पुढलो सहाजिक थांबो. जंय सुरक्षित आसा आनी दुसरे लोक न्हावतात थंयच न्हावात, व्हर आनी ल्हरी नियाळात, आनी थळावो सल्लो वा झेंडे पाळात. सोयी, रक्षक आनी दर्याची परिस्थिती हंगामा प्रमाण बदलता, म्हूण दर्यांत वचचे पयलीं तपासा.'
          ]
        },
        {
          heading: 'जेवण, पेय आनी परत येवप',
          paragraphs: [
            'लागसार पेय वा जेवण हो अर्दो दीस सोंपोवपाचो सोपो मार्ग. दर आनी मेनू हांगा दिल्ले ना; ते थळावेरच खात्री करचे. परत येवपा खातीर तुमचीं वाहतूक सोयी आदीं तपासा, खास करून काळ्या उपरांत वचत जाल्यार, आनी नियोजन परस चड रावल्यार थोडी लवचीकताय दवरा.'
          ]
        }
      ],
      faqs: [
        {
          q: 'अर्द्या दिसांत किल्लो आनी दर्यादेग करूं येता?',
          a: 'हय, जायते भेट दिवपी दोनूय एकठांय करतात, पूण किल्लो आनी दर्यादेग हे दोन वेगळे थांबे आनी मदीं चलचो पडटा — चड वेळ दवरा आनी तुमच्या वेगा प्रमाण जुळोवात.'
        },
        {
          q: 'पयलीं कितें करचें?',
          a: 'तीव्र उकाळ येवचे पयलीं किल्लो चड सोयीचो, उपरांत दर्यादेग, पूण हो क्रम फक्त सुचोवणी.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; वेळ, हवामान, वाहतूक आनी उक्तावणीची म्हायती बदलता — खंयचोय मार्ग जुळोवन घेवन भोंवडे पयलीं सद्याची म्हायती खात्री करा.'
    }
  },
  {
    slug: 'fort-ozran-half-day',
    category: 'itinerary',
    priority: 'P2',
    related: [
      'fort-to-ozran-beach',
      'fort-vagator-half-day',
      'sunset-dinner-vagator',
      'best-time-and-sunset'
    ],
    en: {
      title: 'Chapora Fort and Ozran Half-Day Plan',
      h1: 'A half-day plan for Chapora Fort and Ozran Beach',
      description:
        'A suggested half-day pairing Chapora Fort with Ozran Beach, also called Little Vagator: fort views first, then the neighbouring cove, with time to slow down.',
      intro: [
        'Ozran Beach, also known as Little Vagator, is the cove next to Vagator Beach. Pairing it with the fort makes a gentle half day for travellers who prefer a quieter stretch of shoreline.',
        'As with any itinerary here, this is a shape rather than a fixed timetable. Adjust the order and the pace to your fitness, the weather, the sea and how busy it is on the day.'
      ],
      sections: [
        {
          heading: 'Why pair the fort with Ozran',
          paragraphs: [
            'The fort sits on the hill above the coast, and Ozran is one of the coves below the wider Vagator shoreline. Putting them together means one climb and one relaxed finish, without needing to move far between them.'
          ],
          bullets: [
            'Fort for the views and the ruins.',
            'Ozran for a calmer shoreline afterwards.',
            'Keep both stops flexible; go by how you feel.',
            'Check current access and conditions locally.',
            'Allow extra time rather than rushing either stop.'
          ]
        },
        {
          heading: 'The fort first',
          paragraphs: [
            'Climb while it is cooler. The route is an uphill laterite trail on uneven ground, and it can be slippery in the monsoon, so grip and steady steps matter more than speed. Confirm current opening hours before you travel, as published times may change and evening access is not guaranteed.'
          ]
        },
        {
          heading: 'Down at Ozran',
          paragraphs: [
            'After the fort, head down to Ozran. Swim only where it is safe and where others are in the water, watch for currents and rocks, and follow any local advice. Beaches here differ from day to day with the tide, so treat the sea with care and check conditions before entering.'
          ]
        },
        {
          heading: 'Around the cove',
          paragraphs: [
            'To finish, a drink or a meal at one of the places around the cove is a natural way to close the half day. Prices, menus and opening times are not listed here and should be confirmed at the venue. If you plan to stay until sunset, arrange your return transport in advance.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Ozran Beach the same as Little Vagator?',
          a: 'Ozran Beach is also known as Little Vagator; it is the cove near Vagator Beach, and it is usually reached on foot or by road rather than by any fixed route.'
        }
      ],
      verifyNote:
        'Independent guide; timings, weather, transport and opening details change — adjust any plan and confirm current information before travelling.'
    },
    kok: {
      title: 'चापोरा किल्लो आनी Ozran: अर्दो दीस',
      h1: 'चापोरा किल्लो आनी Ozran दर्यादेगे खातीर अर्द्या दिसाचो मार्ग',
      description:
        'चापोरा किल्लो आनी Ozran दर्यादेग (लिटल Vagator) एकठांय करपी सुचयल्लो अर्दो दीस: पयलीं किल्ल्याचें दृश्य, उपरांत शेजारचो कोव — हळू चलपाक वेळ दिल्लो.',
      intro: [
        'Ozran दर्यादेग, जिका लिटल Vagator अशेंय म्हण्टात, ती वागातोर दर्यादेगेचे शेजारचो कोव. तिका किल्ल्या वांगडा जोडल्यार, शांत दर्यादेग आवडपी भोंवडेकारां खातीर हो एक शांत अर्दो दीस जाता.',
        'हांगाच्या खंयच्याय मार्गा भाशेन हो एक आकार, थारायल्ली वेळ-पट्टी न्हय. तब्येत, हवामान, दर्या आनी त्या दिसाचे गर्दी प्रमाण क्रम आनी वेग बदला.'
      ],
      sections: [
        {
          heading: 'किल्लो आनी Ozran एकठांय कित्याक',
          paragraphs: [
            'किल्लो दर्यादेगेचे वयल्या दोंगराचेर आसा, आनी Ozran वागातोर दर्यादेगेच्या सकयल आशिल्ल्या कोवांमदलो एक. दोनूय एकठांय दवरल्यार एक चडप आनी एक शांत सोंपण मेळटा, आनी दोनूय मदीं चड पयस वचचें पडना.'
          ],
          bullets: [
            'दृश्य आनी अवशेशां खातीर किल्लो.',
            'उपरांत शांत दर्यादेगे खातीर Ozran.',
            'दोनूय थांबे लवचीक दवरा; मनाक येवपा प्रमाण चलात.',
            'सद्याचो प्रवेश आनी परिस्थिती थळावे तपासा.',
            'खंयचोय थांबो घायरी न करता चड वेळ दवरा.'
          ]
        },
        {
          heading: 'पयलीं किल्लो',
          paragraphs: [
            'उकाळ उणो आसतना चडा. वाट असमान जमनीवेलो वयर वचपी लेटराइट मार्ग, आनी पावसांत ती घसरपी जावंक शकता, म्हूण वेग परस पकड आनी शांत पावलां म्हत्वाचीं. भायर सरचे पयलीं सद्याची उक्तावणी वेळ खात्री करा, कारण नोंद केल्ली वेळ बदलूंक शकता आनी सांजेचो प्रवेश खात्रीलायक ना.'
          ]
        },
        {
          heading: 'सकयल Ozran वटेन',
          paragraphs: [
            'किल्ल्या उपरांत Ozran वटेन देंवात. जंय सुरक्षित आसा आनी दुसरे लोक उदकांत आसात थंयच न्हावात, व्हर आनी फातरां नियाळात, आनी थळावो सल्लो पाळात. हांगाच्यो दर्यादेगो भरती-ओहोटी प्रमाण दिसान दिस बदलतात, म्हूण दर्याक काळजी घेवन वागात आनी उदकांत वचचे पयलीं परिस्थिती तपासा.'
          ]
        },
        {
          heading: 'कोवाभोंवतणी',
          paragraphs: [
            'सोंपोवपाक, कोवाभोंवतणी खंयच्याय थळार पेय वा जेवण हो अर्दो दीस सोंपोवपाचो सहाजिक मार्ग. दर, मेनू आनी उक्तावणी वेळ हांगा दिल्ले ना; ते थळावेरच खात्री करचे. सांजेमेरेन रावपाचो विचार आसल्यार परत येवपाची वाहतूक आदीं थारायात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Ozran दर्यादेग आनी लिटल Vagator एकच?',
          a: 'Ozran दर्यादेगाक लिटल Vagator अशेंय म्हण्टात; ती वागातोर दर्यादेगे लागसारचो कोव, आनी थंय सादारणपणान पयलीं चलून वा रस्त्यान वचप जाता, कसल्या थारायल्ल्या मार्गान न्हय.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; वेळ, हवामान, वाहतूक आनी उक्तावणीची म्हायती बदलता — खंयचोय मार्ग जुळोवन घेवन भोंवडे पयलीं सद्याची म्हायती खात्री करा.'
    }
  },
  {
    slug: 'wednesday-anjuna-market-itinerary',
    category: 'itinerary',
    priority: 'P1',
    related: [
      'anjuna-flea-market-nearby',
      'fort-to-anjuna-beach',
      'how-to-get-from-mapusa',
      'parking',
      '90-minute-itinerary'
    ],
    en: {
      title: 'Wednesday Anjuna Market and Chapora Fort',
      h1: 'A suggested Wednesday: Anjuna market and Chapora Fort',
      description:
        'A suggested Wednesday plan pairing the Anjuna flea market with Chapora Fort: fort in the cooler hours, market later, after you confirm the seasonal day.',
      intro: [
        'Anjuna Flea Market is described as a Wednesday market, and Chapora Fort sits nearby in the same stretch of North Goa. In principle they can be combined on one day.',
        'Markets are seasonal and days can shift, so confirm the current season, day and hours locally before you build a plan around them. Everything below is a suggestion that should be adjusted to your own pace and the conditions on the day.'
      ],
      sections: [
        {
          heading: 'Check the market day and season first',
          paragraphs: [
            'Goa Tourism describes a Wednesday market at Anjuna, but this is general information and the actual day and season can vary. Confirm the current market day, opening hours and whether it is running before you travel, because planning around a market that is closed would leave a large gap in the day.'
          ]
        },
        {
          heading: 'Fort in the cooler hours',
          paragraphs: [
            'Climb Chapora Fort early, while it is cooler and quieter. The route is an uphill laterite trail on uneven ground and can be slippery after rain. Allow generous time for the ascent, the ruins and the viewpoints, and confirm current opening hours beforehand, since access and times can change.'
          ]
        },
        {
          heading: 'Market time',
          paragraphs: [
            'Once the fort is done, head to the market area. Treat the market stop as open-ended: browse, eat and rest, and let the day find its own pace. Prices, opening hours and the exact days should be confirmed locally rather than assumed from any single source.'
          ]
        },
        {
          heading: 'Getting between the two',
          paragraphs: [
            'The fort and the market are usually linked by road in the Anjuna–Vagator area. Goa Tourism describes a Mapusa–Anjuna–Vagator bus connection, but it is not a timetable, so check current routes, stops and frequency yourself. No fares or bus numbers are given here, and a drive with parking is another option to confirm in advance.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is the Anjuna market always on a Wednesday?',
          a: 'It is described as a Wednesday market, but markets are seasonal and the day can change, so confirm the current day and season locally before planning around it.'
        },
        {
          q: 'Can I do the fort and the market on the same day?',
          a: 'Many visitors do, but they are separate stops with a drive or bus ride between them, so check transport and timings and allow plenty of flexibility.'
        }
      ],
      verifyNote:
        'Independent guide; timings, weather, transport and opening details change — adjust any plan and confirm current information before travelling.'
    },
    kok: {
      title: 'बुधवार: अंजुना मार्केट आनी चापोरा किल्लो',
      h1: 'सुचयल्लो बुधवार: अंजुना मार्केट आनी चापोरा किल्लो',
      description:
        'अंजुना फ्ली मार्केट आनी चापोरा किल्लो एकठांय करपी सुचयल्लो बुधवार मार्ग: उकाळ उणो आसतना किल्लो, उपरांत मार्केट — आदीं हंगामी दीस खात्री करात.',
      intro: [
        'अंजुना फ्ली मार्केट बुधवारचो मार्केट अशें सांगतात, आनी चापोरा किल्लो उत्तर गोव्याच्या त्याच भागांत लागसार आसा. तत्वान दोनूय एका दिसा एकठांय करूं येतात.',
        'मार्केट हंगामी आसतात आनी दीस बदलूंक शकता, म्हूण मार्केटाभोंवतणी नियोजन करचे पयलीं सद्याचो हंगाम, दीस आनी वेळ थळावे खात्री करा. सकयल दिल्लें सगळें सुचोवणी; तुमच्या वेगा आनी त्या दिसाच्या परिस्थिती प्रमाण बदला.'
      ],
      sections: [
        {
          heading: 'पयलीं मार्केटाचो दीस आनी हंगाम तपासा',
          paragraphs: [
            'गोवा पर्यटन अंजुना भागांत बुधवारचो मार्केट सांगता, पूण ही सादारण म्हायती आनी खरो दीस आनी हंगाम बदलूंक शकता. भायर सरचे पयलीं सद्याचो मार्केट दीस, उक्तावणी वेळ आनी मार्केट चलता वा ना हें खात्री करा, कारण बंद आशिल्ल्या मार्केटाभोंवतणी नियोजन केल्यार दिसांत व्हड वेळ रितो उरतलो.'
          ]
        },
        {
          heading: 'उकाळ उण्या वेळार किल्लो',
          paragraphs: [
            'उकाळ उणो आनी गर्दी उणी आसतना चापोरा किल्ल्यार चडा. वाट असमान जमनीवेलो वयर वचपी लेटराइट मार्ग आनी पावसा उपरांत घसरपी जावंक शकता. चडप, अवशेश आनी दृश्यां खातीर भरपूर वेळ दिव, आनी आदीं सद्याची उक्तावणी वेळ खात्री करा, कारण प्रवेश आनी वेळ बदलूंक शकता.'
          ]
        },
        {
          heading: 'मार्केटाचो वेळ',
          paragraphs: [
            'किल्लो जालो म्हणटकच मार्केटाकडेन वचात. मार्केटचो थांबो मोकळो माना: तपासात, जेवात आनी विसावात, आनी दिसाक ताचो वेग स्वताक मेळूंक दिवात. दर, उक्तावणी वेळ आनी नेमके दीस खंयच्याय एका स्रोताक तें मानूं नाकात, थळावे खात्री करात.'
          ]
        },
        {
          heading: 'दोनूय मदीं वचप',
          paragraphs: [
            'किल्लो आनी मार्केट सादारणपणान अंजुना–वागातोर भागांत रस्त्यान जोडिल्ले आसतात. गोवा पर्यटन Mapusa–अंजुना–वागातोर बस जोडणी सांगता, पूण ती वेळ-पट्टी न्हय, म्हूण सद्याचे मार्ग, थांबे आनी वारंवारताय तुमच खातीर तपासा. हांगा भाडो वा बस नंबर दिल्ले ना, आनी पार्किंगा वांगडा गाडयेन वचप होय आदीं खात्री करचो पर्याय.'
          ]
        }
      ],
      faqs: [
        {
          q: 'अंजुना मार्केट सदांच बुधवाराकच आसता?',
          a: 'ताका बुधवारचो मार्केट अशें सांगतात, पूण मार्केट हंगामी आनी दीस बदलूंक शकता, म्हूण भोंवतणी नियोजन करचे पयलीं सद्याचो दीस आनी हंगाम थळावे खात्री करा.'
        },
        {
          q: 'एकाच दिसा किल्लो आनी मार्केट करूं येता?',
          a: 'जायते भेट दिवपी करतात, पूण हे वेगळे थांबे आनी मदीं गाडी वा बसने वचचें पडटा, म्हूण वाहतूक आनी वेळ तपासा आनी भरपूर लवचीकताय दवरा.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; वेळ, हवामान, वाहतूक आनी उक्तावणीची म्हायती बदलता — खंयचोय मार्ग जुळोवन घेवन भोंवडे पयलीं सद्याची म्हायती खात्री करा.'
    }
  },
  {
    slug: 'north-goa-forts-day-trip',
    category: 'itinerary',
    priority: 'P2',
    related: [
      'chapora-vs-aguada-fort',
      '90-minute-itinerary',
      'from-mopa-airport',
      'how-to-get-from-panaji'
    ],
    en: {
      title: 'North Goa Forts Day Trip: Chapora and Aguada',
      h1: 'A day trip linking Chapora Fort and Fort Aguada',
      description:
        'A suggested drive-based day trip linking Chapora Fort in Vagator with Fort Aguada on the Mandovi — plan it as a road journey, not a walk.',
      intro: [
        'Chapora Fort and Fort Aguada are the two best-known Portuguese-era forts in North Goa, but they sit at different river mouths and are not walking distance from each other.',
        'This outline treats the day as a drive. The order, the time at each fort and any stops in between should be adjusted to your own pace, the weather, current opening hours and traffic, none of which can be fixed in advance.'
      ],
      sections: [
        {
          heading: 'Plan it as a drive, not a walk',
          paragraphs: [
            'Chapora Fort stands above the Chapora river mouth in Vagator, while Fort Aguada sits at the mouth of the Mandovi river. Because they are in different parts of North Goa, the connection is a road journey, not a walk, so allow travel time and confirm your route and parking arrangements beforehand.'
          ]
        },
        {
          heading: 'Chapora Fort in Vagator',
          paragraphs: [
            'Start at Chapora Fort if you are based in the north. The climb is an uphill laterite trail on uneven ground that can be slippery in the monsoon, so allow real time for it. Check current opening hours before you go, as published times and access can change.'
          ]
        },
        {
          heading: 'Fort Aguada',
          paragraphs: [
            'Fort Aguada is a separate site with its own access and hours, and it should be verified independently rather than assumed to match Chapora. Both are historical sites, so treat posted rules, barriers and any staff instructions as the authority on where you may walk.'
          ]
        },
        {
          heading: 'Sequencing the day',
          paragraphs: [
            'A drive-based day works best with generous buffers. Choose the fort you want most and give it the most comfortable time, then treat the second as a bonus if the day runs short. Keep transport, fuel and return options checked in advance, and avoid a fixed timetable that leaves no room for delays.'
          ],
          bullets: [
            'Decide the fort you most want to see and give it more time.',
            'Leave a buffer for traffic and parking.',
            'Verify each fort’s current hours separately.',
            'Carry water and sun protection for both stops.',
            'Have a plan B if one site is busy or closed.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Can I walk between Chapora Fort and Fort Aguada?',
          a: 'No; they are at different river mouths in North Goa, so the connection is a drive rather than a walk, and the travel time should be planned separately.'
        }
      ],
      verifyNote:
        'Independent guide; timings, weather, transport and opening details change — adjust any plan and confirm current information before travelling.'
    },
    kok: {
      title: 'उत्तर गोव्याचे किल्ले: चापोरा आनी Aguada',
      h1: 'चापोरा किल्लो आनी Fort Aguada जोडपी एका दिसाची भोंवडी',
      description:
        'वागातोरांतलो चापोरा किल्लो आनी मांडवी न्हंयेचेरचो Fort Aguada जोडपी सुचयल्ली गाडयेची एका दिसाची भोंवडी — ही चलणी न्हय, रस्त्याची यात्रा.',
      intro: [
        'चापोरा किल्लो आनी Fort Aguada हे उत्तर गोव्यांतले पोर्तुगेज काळांतले दोन सगळ्यांत नामनेचे किल्ले, पूण ते वेगवेगळ्या न्हंयांच्या तोंडार आसात आनी एकामेकां सावन चलपाच्या अंतरार नात.',
        'हो आराखडो दिसाक गाडयेची भोंवडी मानता. क्रम, दरेक किल्ल्याचेर वेळ आनी मदलो खंयचोय थांबो तुमच्या वेगा, हवामान, सद्याची उक्तावणी वेळ आनी वाहतुकी प्रमाण बदला; ह्या कितेंचोय आदीं निर्णय करूंक येना.'
      ],
      sections: [
        {
          heading: 'ही चलणी न्हय, गाडयेची यात्रा माना',
          paragraphs: [
            'चापोरा किल्लो वागातोरांत चापोरा न्हंयेच्या तोंडार उबो आसा, जाल्यार Fort Aguada मांडवी न्हंयेच्या तोंडार. ते उत्तर गोव्याच्या वेगवेगळ्या भागांत आसात, म्हूण ही जोडणी चलणी न्हय, रस्त्याची यात्रा — म्हूण प्रवासाचो वेळ दिव आनी तुमचो मार्ग आनी पार्किंग आदीं खात्री करा.'
          ]
        },
        {
          heading: 'वागातोरांतलो चापोरा किल्लो',
          paragraphs: [
            'उत्तरेक रावतात जाल्यार चापोरा किल्ल्यान सुरवात करा. चडप असमान जमनीवेलो वयर वचपी लेटराइट मार्ग आनी पावसांत घसरपी जावंक शकता, म्हूण ताका खरो वेळ दिव. वचचे पयलीं सद्याची उक्तावणी वेळ तपासा, कारण नोंद केल्ली वेळ आनी प्रवेश बदलूंक शकता.'
          ]
        },
        {
          heading: 'Fort Aguada',
          paragraphs: [
            'Fort Aguada स्वतंत्र साइट, तिचो स्वताचो प्रवेश आनी वेळ आसा; ती चापोरा प्रमाणच आसतली अशें मानूं नाकात, स्वतंत्रपणान खात्री करा. दोनूय इतिहासीक थळां, म्हूण लायिल्ले नेम, अडयो आनी कर्मचाऱ्यांचे सूचना — खंय चलूंक येता हाचो अधिकार तांकांच माना.'
          ]
        },
        {
          heading: 'दिसाचो क्रम',
          paragraphs: [
            'गाडयेवेल्या दिसाक भरपूर मोकळो वेळ दिल्यार बरो चलता. जो किल्लो सगळ्यांत चड पळोवपाचो तो वेंचा आनी ताका सोयीचो चड वेळ दिव; दुसरो दीस सोंपता जाल्यार बोनस माना. वाहतूक, इंधन आनी परत येवपाचे पर्याय आदीं तपासून दवरा, आनी विलंब खातीर जागा न सोडपी कडक वेळ-पट्टी टाळात.'
          ],
          bullets: [
            'जो किल्लो चड पळोवपाचो तो थारायात आनी ताका चड वेळ दिवात.',
            'वाहतूक आनी पार्किंग खातीर वेळ सोडून दवरात.',
            'दरेक किल्ल्याची सद्याची वेळ वेगळे खात्री करात.',
            'दोनूय थांब्यां खातीर उदक आनी सूर्य-संरक्षण व्हरात.',
            'एक साइट गर्दीची वा बंद आसली जाल्यार पर्याय तयार दवरात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्लो आनी Fort Aguada मदीं चलूं येता?',
          a: 'ना; ते उत्तर गोव्याच्या वेगवेगळ्या न्हंयांच्या तोंडार आसात, म्हूण जोडणी चलणी न्हय तर गाडयेची, आनी प्रवासाचो वेळ वेगळो धरचो पडटा.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; वेळ, हवामान, वाहतूक आनी उक्तावणीची म्हायती बदलता — खंयचोय मार्ग जुळोवन घेवन भोंवडे पयलीं सद्याची म्हायती खात्री करा.'
    }
  },
  {
    slug: 'chapora-without-a-car',
    category: 'itinerary',
    priority: 'P1',
    related: [
      'how-to-get-from-mapusa',
      'how-to-get-from-panaji',
      'how-long-to-visit',
      'fort-to-vagator-beach'
    ],
    en: {
      title: 'Visiting Chapora Fort Without a Car',
      h1: 'How to plan a Chapora Fort visit without a car',
      description:
        'A suggested plan for reaching Chapora Fort in Vagator without a car: buses, shared transport and walking, with everything to confirm locally first.',
      intro: [
        'You do not need a car to visit Chapora Fort, but you do need to plan the last stretch with care. Public buses, shared transport and walking can all play a part, and the mix will differ depending on where you start.',
        'This outline is a suggestion only. Routes, frequency, stops and fares change, so confirm each step locally before you set out, and keep some flexibility in case a connection runs late or not at all.'
      ],
      sections: [
        {
          heading: 'Transport basics to confirm',
          paragraphs: [
            'Goa Tourism describes a Mapusa–Anjuna–Vagator bus connection, but it is undated and is not a timetable. Check the current routes, stops and frequency yourself, and ask locally about the closest stop to the fort. No bus numbers, fares or schedules are given here, because they change and cannot be relied on from a general source.'
          ]
        },
        {
          heading: 'Planning around your own pace',
          paragraphs: [
            'Build the day around the walk to the fort, which is uphill on uneven laterite ground and can be slippery in the monsoon. Give yourself a comfortable margin before any fixed connection, and confirm current opening hours before travelling, since published times can change.'
          ],
          bullets: [
            'Confirm the nearest stop to the fort locally.',
            'Allow extra time for the uphill walk.',
            'Keep a margin before any fixed bus or train connection.',
            'Have a fallback plan if a connection is missed.',
            'Carry water; onward options may be limited.'
          ]
        },
        {
          heading: 'Finishing and getting back',
          paragraphs: [
            'Plan the return before the light goes. Ask locally about the last practical connections and their reliability, and consider finishing with a stop for food or drink close to the fort so you are not depending on a single vehicle home. None of the timings here are fixed, so keep them flexible.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is there a bus to Chapora Fort?',
          a: 'Goa Tourism describes a Mapusa–Anjuna–Vagator bus connection, but it is not a timetable, so check current routes, stops and frequency locally.'
        },
        {
          q: 'How far is the walk from the road to the fort?',
          a: 'This guide does not give a measured distance; the route to the fort is uphill on uneven laterite ground, so allow generous time and confirm the closest access point locally.'
        }
      ],
      verifyNote:
        'Independent guide; timings, weather, transport and opening details change — adjust any plan and confirm current information before travelling.'
    },
    kok: {
      title: 'गाडी नासतना चापोरा किल्ल्याक भेट',
      h1: 'गाडी नासतना चापोरा किल्ल्याची भेट कशी नियोजित करची',
      description:
        'गाडी नासतना वागातोरांतल्या चापोरा किल्ल्याक पावपाचो सुचयल्लो मार्ग: बस, वाटेकार वाहतूक आनी चलप — सगळें आदीं थळावे खात्री करचें.',
      intro: [
        'चापोरा किल्ल्याक भेट दिवपाक गाडी गरजेची ना, पूण शेवटचो भाग काळजीपूर्वक नियोजित करप गरजेचें. सार्वजनिक बस, वाटेकार वाहतूक आनी चलप ह्या सगळ्यांचो वापर जावंक शकता, आनी तुम्ही खंय सावन सुरवात करतात हाचेर तो मेळ बदलता.',
        'हो आराखडो फक्त सुचोवणी. मार्ग, वारंवारताय, थांबे आनी भाडें बदलता, म्हूण भायर सरचे पयलीं दर एक पांवडो थळावे खात्री करा, आनी जोडणी उशीर जाली वा जाली ना ह्या खातीर थोडी लवचीकताय दवरा.'
      ],
      sections: [
        {
          heading: 'वाहतुकीची मुळावी म्हायती खात्री करची',
          paragraphs: [
            'गोवा पर्यटन Mapusa–अंजुना–वागातोर बस जोडणी सांगता, पूण ती दिस-तारीख नाशिल्ली आनी वेळ-पट्टी न्हय. सद्याचे मार्ग, थांबे आनी वारंवारताय तुमच खातीर तपासा, आनी किल्ल्याक सगळ्यांत लागसारचो थांबो खंय तें थळावे विचारात. हांगा बस नंबर, भाडें वा वेळापत्रक दिल्लें ना, कारण ते बदलता आनी सादारण स्रोता वेल्यान तांचेर विस्वास दवरूंक येना.'
          ]
        },
        {
          heading: 'तुमच्या वेगा प्रमाण नियोजन',
          paragraphs: [
            'किल्ल्याक वचपी चलणी म्हळ्यार असमान लेटराइट जमनीवेलो चडप, आनी पावसांत तो घसरपी जावंक शकता — ते लक्षांत दवरून दीस घडयात. खंयचेय थारायल्ल्या जोडणे पयलीं सोयीचो मोकळो वेळ दिव, आनी वचचे पयलीं सद्याची उक्तावणी वेळ खात्री करा, कारण नोंद केल्ली वेळ बदलूंक शकता.'
          ],
          bullets: [
            'किल्ल्याक सगळ्यांत लागसारचो थांबो थळावे खात्री करात.',
            'वयर वचपी चलणी खातीर चड वेळ दिवात.',
            'खंयचेय थारायल्ल्या बस वा रेल्वे जोडणे पयलीं वेळ सोडून दवरात.',
            'जोडणी चुकली जाल्यार पर्याय तयार दवरात.',
            'उदक व्हरात; पुढल्यो सोयी उण्यो आसूंक शकतात.'
          ]
        },
        {
          heading: 'सोंपोवप आनी परत येवप',
          paragraphs: [
            'उजवाड वचचे पयलीं परत येवपाचें नियोजन करा. शेवटच्यो व्यवहारीक जोडणी आनी तांची खात्री थळावे विचारात, आनी किल्ल्या लागसार जेवण वा पेयाच्या थांब्यान सोंपोवपाचो विचार करात, म्हणजे घरा वचपाक एकाच वाहनाचेर आदारून रावचें पडचें ना. हांगाचो खंयचोच वेळ थारायल्लो ना, म्हूण तो लवचीक दवरा.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याक बस वता?',
          a: 'गोवा पर्यटन Mapusa–अंजुना–वागातोर बस जोडणी सांगता, पूण ती वेळ-पट्टी न्हय, म्हूण सद्याचे मार्ग, थांबे आनी वारंवारताय थळावे तपासा.'
        },
        {
          q: 'रस्त्या सावन किल्ल्या मेरेन चलप कितलें?',
          a: 'हो मार्गदर्शक मापल्लें अंतर दिना; किल्ल्याक वचपी वाट असमान लेटराइट जमनीवेलो चडप, म्हूण भरपूर वेळ दिव आनी सगळ्यांत लागसारचो प्रवेश बिंदू थळावे खात्री करा.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; वेळ, हवामान, वाहतूक आनी उक्तावणीची म्हायती बदलता — खंयचोय मार्ग जुळोवन घेवन भोंवडे पयलीं सद्याची म्हायती खात्री करा.'
    }
  },
  {
    slug: 'family-morning-itinerary',
    category: 'itinerary',
    priority: 'P2',
    related: [
      'with-kids',
      'accessibility-and-seniors',
      'facilities-and-packing',
      '90-minute-itinerary'
    ],
    en: {
      title: 'A Family Morning at Chapora Fort',
      h1: 'A suggested family morning at Chapora Fort',
      description:
        'A gentle suggested morning at Chapora Fort for families with children: a slow climb, short stops, water breaks and an easy finish nearby.',
      intro: [
        'Mornings are often the most comfortable time to visit Chapora Fort with children, before the strongest heat. This is a suggested shape for a family morning, not a fixed schedule, and it should bend around the youngest or slowest member of the group.',
        'The ground is uneven laterite and uphill, so plan for short stages, plenty of breaks and realistic expectations — a shorter visit that ends happily is usually better than a longer one that ends in tears.'
      ],
      sections: [
        {
          heading: 'Set up for an easy start',
          paragraphs: [
            'Before leaving, pack water, hats, snacks and sun protection, and put everyone in closed shoes with grip. Decide in advance how far you will try to go, and agree that you can turn back at any point. Check current opening hours and local conditions, since these can change.'
          ],
          bullets: [
            'Water, snacks, hats and sunscreen for everyone.',
            'Closed shoes with grip, not loose sandals.',
            'Agree a turn-back point before you start.',
            'Start early, before the main heat.',
            'Keep the plan short and adjustable.'
          ]
        },
        {
          heading: 'A slow climb with breaks',
          paragraphs: [
            'Take the uphill trail in short stages and stop whenever anyone needs a rest. The path is uneven and can be slippery after rain, so hold hands on the rougher parts and step carefully. There is no need to reach the very top; the views open up along the way, and turning back early is a perfectly good outcome.'
          ]
        },
        {
          heading: 'Finishing the morning',
          paragraphs: [
            'Come down slowly, then finish with something easy: a drink, a snack or a short look at the beach below the fort. Keep the ending relaxed so the morning ends on a good note, and check your transport before the day gets busy.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Chapora Fort suitable for young children?',
          a: 'It can work for active families, but the ground is uneven and uphill and can be slippery, so keep stages short, supervise closely and be ready to turn back.'
        },
        {
          q: 'What about pushchairs or wheelchairs?',
          a: 'The uphill laterite trail is not described as step-free, so check accessibility locally and expect difficulties; see the accessibility guide for more detail.'
        }
      ],
      verifyNote:
        'Independent guide; timings, weather, transport and opening details change — adjust any plan and confirm current information before travelling.'
    },
    kok: {
      title: 'कुटुंबा खातीर चापोरा किल्ल्याची सकाळ',
      h1: 'कुटुंबा खातीर चापोरा किल्ल्याची सुचयल्ली सकाळ',
      description:
        'भुरग्यां वांगडा कुटुंबां खातीर चापोरा किल्ल्याची शांत सुचयल्ली सकाळ: हळू चडप, ल्हान थांबे, उदक विसावे आनी लागसार सोपो सोंपो.',
      intro: [
        'तीव्र उकाळ येवचे पयलीं, भुरग्यां वांगडा चापोरा किल्ल्याक भेट दिवपाक सकाळ सादारणपणान सगळ्यांत सोयीची वेळ. हो कुटुंबाचे सकाळेचो सुचयल्लो आकार, थारायल्ली वेळ-पट्टी न्हय, आनी तो गटांतल्या सगळ्यांत ल्हान वा हळू चलपी मेंबरा भोंवतणी वळचो.'
      ],
      sections: [
        {
          heading: 'सोपी सुरवात तयार करा',
          paragraphs: [
            'भायर सरचे पयलीं उदक, टोपी, अल्पोपहार आनी सूर्य-संरक्षण पॅक करा, आनी सगळ्यांक घट्ट पकड आशिल्लीं बंद पादत्राणां घालात. खंय मेरेन वचपाचो हो निर्णय आदीं करात, आनी खंयच्याय वेळार परत वचूं येता हें मान्य करात. सद्याची उक्तावणी वेळ आनी थळावी परिस्थिती तपासा, कारण ती बदलूंक शकता.'
          ],
          bullets: [
            'सगळ्यां खातीर उदक, अल्पोपहार, टोपी आनी सनस्क्रीन.',
            'सोडिल्ली चप्पल न्हय, घट्ट पकड आशिल्लीं बंद पादत्राणां.',
            'सुरू करचे पयलीं परत वचपाचो बिंदू थारायात.',
            'मुखेल उकाळ येवचे पयलीं सकाळीं सुरवात करात.',
            'मार्ग ल्हान आनी बदलपाक सोपो दवरात.'
          ]
        },
        {
          heading: 'वेळावेळान विसावो घेवन हळू चडप',
          paragraphs: [
            'वयर वचपी वाट ल्हान पांवड्यांनी चला आनी कोणाकाय विसावो जाय तेन्ना थांबात. वाट असमान आनी पावसा उपरांत घसरपी जावंक शकता, म्हूण खडबडीत भागांनी हात धरात आनी काळजीपूर्वक पावलां घालात. सगळ्यांत वयर पावपाची गरज ना; वाटेवेल्यानच दृश्य उगतात, आनी आदीं परत वचप होय एक बरो निकाल.'
          ]
        },
        {
          heading: 'सकाळ सोंपोवप',
          paragraphs: [
            'हळू हळू देंवात, उपरांत कितेंय सोपें करून सोंपोवात: पेय, अल्पोपहार वा किल्ल्याचे सकयल दर्यादेगेची थोडी भेट. शेवट शांत दवरात, म्हणजे सकाळ बऱ्या आठवणीन सोंपतली, आनी दीस गर्दीचो जावचे पयलीं तुमची वाहतूक तपासा.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ल्हान भुरग्यां खातीर चापोरा किल्लो योग्य आसा?',
          a: 'सक्रिय कुटुंबां खातीर चलतलो, पूण जमीन असमान, चडपाची आनी घसरपी जावंक शकता, म्हूण पांवडे ल्हान दवरात, कडक देखरेख करात आनी परत वचपाक तयार रावात.'
        },
        {
          q: 'पुशचेअर वा व्हीलचेअर विशीं कितें?',
          a: 'वयर वचपी लेटराइट वाट सोपी (step-free) न्हय अशें सांगता, म्हूण प्रवेश सोय थळावे तपासा आनी अडचणी अपेक्षा करात; चड म्हायती खातीर प्रवेश-सुलभतायेचो मार्गदर्शक पळोवात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; वेळ, हवामान, वाहतूक आनी उक्तावणीची म्हायती बदलता — खंयचोय मार्ग जुळोवन घेवन भोंवडे पयलीं सद्याची म्हायती खात्री करा.'
    }
  },
  {
    slug: 'rainy-day-alternatives',
    category: 'itinerary',
    priority: 'P2',
    related: [
      'visiting-during-monsoon',
      'cafes-and-quick-drinks',
      'nearby-places-on-foot',
      'how-long-to-visit'
    ],
    en: {
      title: 'Rainy-Day Alternatives Near Chapora Fort',
      h1: 'Rainy-day alternatives for a Chapora Fort trip',
      description:
        'When rain makes the fort trail slippery or unsafe, consider these indoor and covered alternatives nearby, with transport and opening hours to verify first.',
      intro: [
        'In heavy rain the laterite trail up to Chapora Fort can become slippery and walking conditions change quickly. On those days it is worth having a plan B rather than pushing on regardless.',
        'This outline suggests directions for a wet day, not a fixed itinerary. Distances, opening hours, transport and access should all be checked before you set out, and the weather should guide the final decision.'
      ],
      sections: [
        {
          heading: 'Why the fort may not be a good idea in heavy rain',
          paragraphs: [
            'The climb is uphill on uneven laterite ground, and the site itself notes that surfaces can be slippery in the monsoon. Rather than relying on any weather snapshot — which is not an on-site observation — look at conditions as they are on the day and judge for yourself whether the trail is sensible.'
          ]
        },
        {
          heading: 'Indoor and covered options',
          paragraphs: [
            'On a wet day, a drive-away museum or a long café or meal stop keeps you dry and busy while the weather passes. The Museum of Goa is one such option, but it is a drive away rather than a short walk, and its opening hours should be verified before you travel. Cafés and restaurants can also give you a comfortable place to wait out a shower.'
          ],
          bullets: [
            'Consider a museum or gallery as a drive-away option.',
            'Use a café or meal stop as a dry waiting place.',
            'Verify opening hours and any entry conditions first.',
            'Check that transport is running before you set out.',
            'Keep the fort as a flexible option if the rain eases.'
          ]
        },
        {
          heading: 'Keeping some flexibility',
          paragraphs: [
            'Treat a wet day as a chance to slow down rather than a problem to solve. If the rain eases, the fort may still be worth a short visit later, with careful footing; if it does not, a relaxed indoor stop is a perfectly good day. Either way, leave the final choice open and confirm the details before travelling.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Can I visit Chapora Fort in the rain?',
          a: 'The laterite trail can be slippery and potentially unsafe in heavy rain, so judge conditions on the day, and consider an indoor alternative if the weather is poor.'
        },
        {
          q: 'What can I do nearby instead?',
          a: 'Indoor and covered options such as a museum or gallery a drive away, or a café or meal stop, are sensible wet-day choices, with opening hours and transport verified first.'
        }
      ],
      verifyNote:
        'Independent guide; timings, weather, transport and opening details change — adjust any plan and confirm current information before travelling.'
    },
    kok: {
      title: 'चापोरा किल्ल्या लागसार पावसाचे दिसा खातीर पर्याय',
      h1: 'चापोरा किल्ल्याच्या भोंवडे खातीर पावसाच्या दिसा पर्याय',
      description:
        'पावसान किल्ल्याची वाट घसरपी वा असुरक्षित जाल्यार लागसारचे आंतल्या आनी झाक आशिल्ले पर्याय विचारात — वाहतूक आनी उक्तावणी वेळ आदीं खात्री करात.',
      intro: [
        'जोराच्या पावसांत चापोरा किल्ल्याक वचपी लेटराइट वाट घसरपी जावंक शकता आनी चलपाची परिस्थिती लवकर बदलता. अशा दिसा, कितेंय तरी पर्याय दवरप बरो, न्हय तर सगळें दुख्ख सोसून वचप बरें न्हय.'
      ],
      sections: [
        {
          heading: 'जोराच्या पावसांत किल्लो कित्याक बरो न्हय जावंक शकता',
          paragraphs: [
            'चडप असमान लेटराइट जमनीवेलो वयर वचपी आसा, आनी साइटूच खुद्द म्हण्टा की पावसांत पृष्ठभाग घसरपी जावंक शकता. खंयच्याय हवामानाच्या स्नॅपशॉटाचेर आदारून रावचे परस — जो थळाचेरचो निरीक्षण न्हय — त्या दिसाची परिस्थिती पळोवन वाट समजिक आसा वा ना तें तुमच निर्णय घेवात.'
          ]
        },
        {
          heading: 'आंतल्या आनी झाक आशिल्ले पर्याय',
          paragraphs: [
            'पावसाच्या दिसा, गाडयेन वचपाक लागपी संग्रहालय वा लांब कॅफे/जेवणाचो थांबो तुमकां सुकें आनी व्यस्त दवरता, जाल्यार हवामान सरता. Museum of Goa असो एक पर्याय, पूण तें थोड्या चलपाच्या अंतरार न्हय तर गाडयेन वचपाचें, आनी भायर सरचे पयलीं ताची उक्तावणी वेळ खात्री करची. कॅफे आनी रेस्टॉरंटूय पावसाची सर सोंपेमेरेन रावपाक सोयीची सुवात दितात.'
          ],
          bullets: [
            'गाडयेन वचपाचो पर्याय म्हणून संग्रहालय वा गॅलरी विचारात.',
            'कॅफे वा जेवणाचो थांबो सुक्या वाट पळोवपाची सुवात म्हणून वापरात.',
            'आदीं उक्तावणी वेळ आनी प्रवेशाचे नेम खात्री करात.',
            'भायर सरचे पयलीं वाहतूक चलता वा ना तें तपासात.',
            'पावसान उणें दिल्यार किल्लो लवचीक पर्याय म्हणून दवरात.'
          ]
        },
        {
          heading: 'थोडी लवचीकताय दवरप',
          paragraphs: [
            'पावसाच्या दिसाक सोडोवपाची संधी माना, न्हय तर सोडचो समस्या. पावसान उणें दिल्यार, काळजीपूर्वक पावलां घेवन उपरांत किल्ल्याची थोडी भेट अजून फायद्याची जावंक शकता; नाजाल्यार, शांत आंतलो थांबो होय एक बरो दीस. दोनूय परिस्थितींत शेवटचो वेंच मोकळो दवरात आनी भोंवडे पयलीं तपशील खात्री करात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'पावसांत चापोरा किल्ल्याक भेट दिवं येता?',
          a: 'जोराच्या पावसांत लेटराइट वाट घसरपी आनी असुरक्षित जावंक शकता, म्हूण त्या दिसाची परिस्थिती पळोवन निर्णय घेवात, आनी हवामान खराब आसल्यार आंतलो पर्याय विचारात.'
        },
        {
          q: 'ताचे परस लागसार हेर कितें करूं येता?',
          a: 'गाडयेन वचपाक लागपी संग्रहालय वा गॅलरी, वा कॅफे/जेवणाचो थांबो हे पावसाच्या दिसा योग्य पर्याय; उक्तावणी वेळ आनी वाहतूक आदीं खात्री करात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; वेळ, हवामान, वाहतूक आनी उक्तावणीची म्हायती बदलता — खंयचोय मार्ग जुळोवन घेवन भोंवडे पयलीं सद्याची म्हायती खात्री करा.'
    }
  }
];
