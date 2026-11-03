// जेवण आनी कॅफे ह्या श्रेणीचीं 5 मार्गदर्शक पानां (food & cafés).
// दर पान द्विभाषी: इंग्रजी + कोंकणी (देवनागरी).
import type { Guide } from './types';

export const foodGuides: Guide[] = [
  {
    slug: 'restaurants-near-chapora-fort',
    category: 'food',
    priority: 'P0',
    related: ['cafes-and-quick-drinks', 'goan-food-and-seafood', 'sunset-dinner-vagator', 'facilities-and-packing'],
    en: {
      title: 'Restaurants Near Chapora Fort — Where to Eat in Vagator & Anjuna',
      h1: 'Where to Eat Near Chapora Fort',
      description:
        'How to choose a restaurant near Chapora Fort in north Goa, what the Vagator and Anjuna area offers and how to plan a meal around a fort visit.',
      intro: [
        'Chapora Fort itself is a hilltop of ruins and views, with no restaurants on the ramparts. The eating happens close by, in the Vagator, Chapora and Anjuna area, where cafés, beach shacks and restaurants cluster along the roads and the coast.',
        'Rather than naming a single “best” place, this page helps you choose well: match the spot to the time of day, your appetite and how far you are willing to go from the fort.',
        'Restaurants open, close and change hands often in this part of Goa, and menus and prices move with the season. Treat the kinds of place described here as types to look for, and check what is open on the day.'
      ],
      sections: [
        {
          heading: 'The kinds of places you will find',
          paragraphs: [
            'Around the fort you will find a mix of casual cafés, multi-cuisine restaurants, beach shacks serving drinks and snacks, and places focused on seafood. The choice is widest in the Vagator and Anjuna area.',
            'Casual spots suit a quick bite after the climb; fuller restaurants suit a sit-down meal; shacks suit a relaxed drink with a sea view. Which is right depends on how much time and energy you have left.'
          ],
          bullets: [
            'Cafés: quick drinks, coffee and light food.',
            'Multi-cuisine restaurants: fuller sit-down meals.',
            'Beach shacks: relaxed drinks and snacks by the sea.',
            'Seafood places: the local catch, prepared regionally.'
          ]
        },
        {
          heading: 'Choosing around your visit',
          paragraphs: [
            'If you have just come down from the fort in the heat, a drink and a light snack nearby is usually enough before you decide on a proper meal. If you have planned a beach stop, a shack near the water is the natural choice.',
            'For a special meal, the larger restaurants in the area offer more choice, but they also fill up in the busy season, so plan ahead if you have your heart set on one.'
          ]
        },
        {
          heading: 'Practical notes',
          paragraphs: [
            'Restaurant hours, menus and whether a place is open at all can change with the season, so confirm before you travel a long way for a particular spot. Vegetarian, vegan and Jain options exist in the area, but ask rather than assume.',
            'Carrying some cash is sensible, and if you are driving, think about parking before you commit to a busy area at peak time.'
          ]
        },
        {
          heading: 'A few places travellers often consider',
          paragraphs: [
            'To make planning easier, here are places commonly kept in mind around the fort. They are listed as examples of what exists in each area, not as recommendations, and their food, prices and hours change with the season.',
            'None of them are on the fort itself. The closest sit near the fort trail and Chapora village; the others are a short drive or scooter ride away in Vagator, Anjuna or Assagao.'
          ],
          bullets: [
            'Paulo’s Cafe — coffee and light food, handy near the Chapora Fort trail before or after the climb.',
            'Sunrise Restaurant — breakfast, juices and simple meals in the Chapora village area for an early start.',
            'Cafe Sanaya — Indian and local dishes for a fuller meal after coming down.',
            'House Of Ullassa Cafe Goa — vegetarian-friendly café food and a calmer stop.',
            'PAZ GOA CAFE Vagator — coffee and brunch in the Vagator beach area.',
            'Fish Point Restaurant & Bar — Goan seafood in Assagao, a short drive rather than a walk.',
            'Olive Bar & Kitchen — a larger, sea-view restaurant in the Big Vagator area for lunch or dinner.',
            'Antares Restaurant & Beach Club — sea-view dining near Ozran Beach; sunset tables often need booking ahead.'
          ]
        },
        {
          heading: 'What to check before you go',
          paragraphs: [
            'A few practical points save time. Confirm the current menu, prices and opening hours on the day, because they move with the season and from place to place.',
            'For a sea-view table at sunset, book ahead; for casual spots, turning up usually works. Ask about vegetarian, vegan or Jain needs rather than assuming, and keep some cash for smaller places.'
          ],
          bullets: [
            'Getting there: a short walk near the trail and Chapora village; otherwise a short drive in Vagator, Anjuna or Assagao.',
            'Best timing: cafés suit a break before or after the climb; fuller meals suit lunch or dinner.',
            'Cuisine: Goan, Indian and continental menus are all common in the area.',
            'Vegetarian: widely available — ask about the specifics.',
            'Booking: advisable for popular sea-view tables at sunset.',
            'After eating: Vagator Beach or Ozran are close for a walk; the fort trailhead is nearby.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are there restaurants at Chapora Fort itself?',
          a: 'No. The fort is a ruin with viewpoints and no dining on site. The nearest places to eat are in the Vagator, Chapora and Anjuna area below.'
        },
        {
          q: 'Which area is best for eating near the fort?',
          a: 'The Vagator and Anjuna area has the widest choice, from casual cafés to fuller restaurants and beach shacks. The right one depends on your time, appetite and how far you want to travel.'
        }
      ],
      verifyNote:
        'Independent, non-commercial guide; the places named are examples in the area, not endorsements — confirm current hours, prices and menus on the day.'
    },
    kok: {
      title: 'चापोरा किल्ल्यालागींचीं हॉटेलां — वागातोर आनी अंजुनांत खंय जेवचें',
      h1: 'चापोरा किल्ल्यालागीं खंय जेवचें',
      description:
        'उत्तर गोवा हांगा चापोरा किल्ल्यालागीं हॉटेल कशें निवडचें, वागातोर आनी अंजुना वाठार कितें दिता आनी किल्ल्याच्या भेटेभोंवतणी जेवण कशें नियोजित करचें.',
      intro: [
        'चापोरा किल्लो स्वताच म्हळ्यार पडिल्लीं आवशेशां आनी दृश्यां आशिल्लो दोंगरमाथो, तटबंदीचेर हॉटेल ना. जेवण लागींच, वागातोर, चापोरा आनी अंजुना वाठारांत जाता, जंय कॅफे, दर्या-देगेवयले शॅक आनी हॉटेलां रस्त्यांनी आनी किनाऱ्यालागीं एकठांय आसात.',
        'एक “सगळ्यांत बरें” थळ सांगपापरस, हो पान बरें निवडपाक मदत करता: दिसाच्या वेळेक, तुमच्या भूकेक आनी किल्ल्यासावन खंयमेरेन वचपाक तयार आसात हाचेकडेन थळ जुळोवन घेवात.',
        'गोव्याच्या ह्या भागांत हॉटेलां उगडतात, बंद जातात आनी हात बदलतात, आनी मेनू व दर ऋतूप्रमाण बदलतात. हांगा वर्णन केल्ल्या थळांचे प्रकार पळोवपा सारके समजात, आनी त्या दिसा कितें उगडें आसा तें तपासात.'
      ],
      sections: [
        {
          heading: 'खंयच्या प्रकारचीं थळां मेळटात',
          paragraphs: [
            'किल्ल्याभोंवतणी सुटसुटीत कॅफे, बहु-पदार्थ हॉटेलां, पेय आनी अल्पोपहार दिवपी दर्या-देगेवयली शॅक आनी नुस्त्याचेर लक्ष दिवपी थळां हांचें मिश्रण मेळटा. वागातोर आनी अंजुना वाठारांत निवड सगळ्यांत चड.',
            'चडप उतरल्याबगर बेगीन खावपाक सुटसुटीत थळां साजतात; चड बसून जेवपाक पुराय हॉटेलां; दर्या-दृश्यासोबत सुस्त पेयाखातीर शॅक. खंयचें बरें हें तुमचे उरिल्ले वेळ आनी शक्तीचेर आदारीत.'
          ],
          bullets: [
            'कॅफे: बेगीन पेय, कॉफी आनी हलकें जेवण.',
            'बहु-पदार्थ हॉटेलां: पुराय बसून जेवप.',
            'दर्या-देगेवयली शॅक: दर्यासोबत सुस्त पेय आनी अल्पोपहार.',
            'नुस्त्याचीं थळां: थळावो कातार, प्रादेशिक पद्दतीन तयार.'
          ]
        },
        {
          heading: 'भेटेभोंवतणी निवड',
          paragraphs: [
            'उनेंत किल्ल्यासावन आताच उतरलात जाल्यार, पुराय जेवणाचो निर्णय घेवचे आदीं लागींचें पेय आनी हलकें अल्पोपहार सामान्यपणान पुरो. दर्या-देगेचो थांबो नियोजित केला जाल्यार, उदकालागींचो शॅक सहज निवड.',
            'खास जेवणाखातीर, वाठारांतलीं व्हडलीं हॉटेलां चड निवड दितात, पूण गर्दीच्या ऋतूंत तीं भरतात, म्हणून खास एक निवडलां जाल्यार आदींच नियोजन करात.'
          ]
        },
        {
          heading: 'व्यवहारी नोंदी',
          paragraphs: [
            'हॉटेलांची वेळ, मेनू आनी थळ उगडें आसा वा ना हें ऋतूप्रमाण बदलूंक शकता, म्हणून खास थळाखातीर लांब वचचे आदीं तपासात. वाठारांत शाकाहारी, व्हेगन आनी जैन पर्याय आसात, पूण मानून घेवपापरस विचारात.',
            'थोडें रोख दवरप शहाणपणाचें, आनी गाडी चलयतात जाल्यार गर्दीच्या वेळार गर्दीच्या वाठारांत वचचे आदीं पार्किंगाचो विचार करात.'
          ]
        },
        {
          heading: 'प्रवासी चड करून विचार करतात अशीं कांय थळां',
          paragraphs: [
            'येवजण सोपी जावचेखातीर, किल्ल्याभोंवतणी चड करून लक्षांत दवरपी थळां हांगा दिल्लीं आसात. तीं दर वाठारांत कितें आसा हाचीं उदाहरणां म्हणून दिल्लीं, शिफारस म्हणून न्हय, आनी तांचें जेवण, दर आनी वेळ ऋतूप्रमाण बदलता.',
            'हांतूंतलें खंयचेंच किल्ल्याचेर ना. सगळ्यांत लागींचीं किल्ल्याच्या वाटेलागीं आनी चापोरा गांवांत आसात; हेर वागातोर, अंजुना वा असगांवांत थोड्या अंतराचेर गाडयेन वा स्कूटरेन वचपा सारकीं.'
          ],
          bullets: [
            'पावलू कॅफे (Paulo’s Cafe) — कॉफी आनी हलकें जेवण, चडपाचे आदीं वा उपरांत किल्ल्याच्या वाटेलागीं सोयीचें.',
            'सनराइज रेस्टॉरंट (Sunrise Restaurant) — चापोरा गांव वाठारांत नाश्तो, रोस आनी सादें जेवण, सकाळीं लवकर भायर सरपाखातीर.',
            'कॅफे सनया (Cafe Sanaya) — उतरल्याबगर पुराय जेवणाखातीर भारतीय आनी थळावे पदार्थ.',
            'हाऊस ऑफ उल्लासा कॅफे (House Of Ullassa Cafe Goa) — शाकाहारी-सोयीचें कॅफे जेवण आनी शांत थांबो.',
            'पाझ गोवा कॅफे वागातोर (PAZ GOA CAFE Vagator) — वागातोर दर्या-देग वाठारांत कॉफी आनी ब्रंच.',
            'फिश पॉइंट रेस्टॉरंट अँड बार (Fish Point Restaurant & Bar) — असगांवांत गोवेकार नुस्तें, चलपापरस थोडी गाडी.',
            'ऑलिव्ह बार अँड किचन (Olive Bar & Kitchen) — व्हड वागातोर वाठारांत दर्या-दृश्यासोबत व्हड हॉटेल, दनपार वा रात्रीच्या जेवणाखातीर.',
            'अँटारेस रेस्टॉरंट अँड बीच क्लब (Antares Restaurant & Beach Club) — ओझरान किनाऱ्यालागीं दर्या-दृश्य जेवण; सूर्यास्ताचीं बसपां चड करून आदीं बुक करचीं लागतात.'
          ]
        },
        {
          heading: 'वचपाचे आदीं कितें तपासचें',
          paragraphs: [
            'कांय व्यवहारी मुद्दे वेळ वाचयतात. त्या दिसा चालू मेनू, दर आनी उगडपाची वेळ खात्री करात, कारण ते ऋतूप्रमाण आनी थळा-थळार बदलतात.',
            'सूर्यास्तावेळार दर्या-दृश्य बसपाखातीर आदीं बुक करात; सुटसुटीत थळांखातीर थेट वचप सादारणपणान चलता. शाकाहारी, व्हेगन वा जैन गरजो मानून घेवपापरस विचारात, आनी ल्हान थळांखातीर थोडें रोख दवरात.'
          ],
          bullets: [
            'थंय पावप: वाटेलागीं आनी चापोरा गांवांत थोडें चलप; हेर वागातोर, अंजुना वा असगांवांत थोडी गाडी.',
            'बरी वेळ: कॅफे चडपाचे आदीं वा उपरांत थांबाखातीर; पुराय जेवण दनपार वा रात्रीखातीर.',
            'पाककला: वाठारांत गोवेकार, भारतीय आनी पाश्चात्त्य मेनू सामान्य.',
            'शाकाहारी: चड करून मेळटा — तपशील विचारात.',
            'बुकिंग: सूर्यास्तावेळार लोकप्रिय दर्या-दृश्य बसपांखातीर योग्य.',
            'जेवणाउपरांत: भोंवडेखातीर वागातोर किनारो वा ओझरान लागीं; किल्ल्याची वाट लागींच.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याचेरच हॉटेलां आसात?',
          a: 'ना. किल्लो म्हळ्यार दृश्यां आशिल्लीं पडिल्लीं आवशेशां, थंय जेवण ना. जेवपाक सगळ्यांत लागींचीं थळां सकयल वागातोर, चापोरा आनी अंजुना वाठारांत.'
        },
        {
          q: 'किल्ल्यालागीं जेवपाक खंयचो वाठार बरो?',
          a: 'वागातोर आनी अंजुना वाठारांत सगळ्यांत चड निवड, सुटसुटीत कॅफेंसावन पुराय हॉटेलां आनी दर्या-देगेवयल्या शॅकांमेरेन. बरो खंयचो हें तुमचो वेळ, भूक आनी खंयमेरेन वचपाची तयारी हांचेर आदारीत.'
        }
      ],
      verifyNote:
        'स्वतंत्र, नाफायद्याचो मार्गदर्शक; सांगल्लीं थळां वाठारांतलीं उदाहरणां, शिफारस न्हय — त्या दिसा चालू वेळ, दर आनी मेनू तपासात.'
    }
  },
  {
    slug: 'cafes-and-quick-drinks',
    category: 'food',
    priority: 'P1',
    related: ['restaurants-near-chapora-fort', 'breakfast-before-visit', 'facilities-and-packing', 'best-time-and-sunset'],
    en: {
      title: 'Cafés and Quick Drinks Near Chapora Fort — A Cool Break',
      h1: 'Cafés and Quick Drinks Near the Fort',
      description:
        'Cafés and quick refreshment stops near Chapora Fort in Goa: when a cool drink matters most, what to look for and how to fit a break into a fort visit.',
      intro: [
        'The climb to Chapora Fort and the open, unshaded ground at the top make heat the main thing to manage. A café or a quick drink stop nearby is not just a treat; it is part of visiting comfortably.',
        'Around the fort, in the Vagator and Chapora area, you will find cafés and small places serving coffee, cold drinks, juices and light food. This page is about using them well rather than about naming any one business.'
      ],
      sections: [
        {
          heading: 'When a break matters most',
          paragraphs: [
            'The middle of a hot day is when a cool drink and shade help most. If you visit the fort around midday, build in a stop before or after so you are not going up or down at your hottest.',
            'After the descent is also a good moment to sit, rehydrate and decide what to do next, whether that is a beach, a market or a meal.'
          ]
        },
        {
          heading: 'What to look for',
          paragraphs: [
            'Clean drinking water is the priority; cold water, fresh juices, soft drinks and coffee are the usual quick options. Light food such as snacks or a small plate works better than a heavy meal before more walking.',
            'Prices and opening hours rise and fall with the season in this part of Goa, so check on the day and carry some cash.'
          ],
          bullets: [
            'Clean drinking water first.',
            'Shade and seating to cool down.',
            'Light food rather than heavy meals.',
            'Cash for smaller places.'
          ]
        },
        {
          heading: 'Fitting it into your day',
          paragraphs: [
            'A simple rhythm is: fort early, café to cool down, then beach or market. That keeps the hardest part of the day, the climb, in the coolest window.',
            'If you are planning a fuller meal later, see the guide to restaurants near the fort, and for sunrise or sunset timing see the best time and sunset page.'
          ]
        },
        {
          heading: 'A few café options in the area',
          paragraphs: [
            'If you would rather head to a known place, these are commonly kept in mind around the fort. They are examples, not recommendations, and hours shift with the season.',
            'The closest sit near the climb and Chapora village; the others are a short ride into the Vagator beach area.'
          ],
          bullets: [
            'Paulo’s Cafe — coffee and light food near the Chapora Fort trail, convenient before or after the climb.',
            'House Of Ullassa Cafe Goa — vegetarian-friendly café food if you want a calmer stop.',
            'PAZ GOA CAFE Vagator — coffee and brunch in the Vagator beach area.',
            'Sunrise Restaurant — juices and simple refreshments in the Chapora village area.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are there cafés right at Chapora Fort?',
          a: 'No, the fort has no cafés on site. Refreshment stops are in the Vagator, Chapora and Anjuna area close by, so plan to drink before or after the climb.'
        },
        {
          q: 'Why does a drinks stop matter here?',
          a: 'The climb and the open, unshaded fort make heat the main challenge, so a cool drink and shade help you visit comfortably. Carry water even if you plan to stop.'
        }
      ],
      verifyNote:
        'Independent guide; the named places are examples in the area, not endorsements — carry water and confirm current hours and prices on the day.'
    },
    kok: {
      title: 'चापोरा किल्ल्यालागींचे कॅफे आनी बेगीन पेय — थंडायेचो विसवो',
      h1: 'किल्ल्यालागींचे कॅफे आनी बेगीन पेय',
      description:
        'गोवा हांगा चापोरा किल्ल्यालागींचे कॅफे आनी बेगीन ताजेतवाने थांब: थंड पेय केन्ना सगळ्यांत म्हत्त्वाचें, कितें पळोवचें आनी किल्ल्याच्या भेटेंत विसवो कसो बसोवचो.',
      intro: [
        'चापोरा किल्ल्यामेरेन चडप आनी वयर उघडी, सावली नाशिल्ली जमीन हांच्यान उन सांबाळपाची मुखेल गजाल जाता. लागींचो कॅफे वा बेगीन पेयाचो थांब फकत तोड न्हय; सोयीन भेट दिवपाचो भाग.',
        'किल्ल्याभोंवतणी, वागातोर आनी चापोरा वाठारांत, कॉफी, थंड पेय, रोस आनी हलकें जेवण दिवपी कॅफे आनी ल्हान थळां मेळटात. हो पान खंयचोच एक व्यापार सांगपाचो न्हय तर तीं बरें वापरपाचो.'
      ],
      sections: [
        {
          heading: 'विसवो केन्ना सगळ्यांत म्हत्त्वाचो',
          paragraphs: [
            'उन आशिल्ल्या दिसाचो मदलो भाग म्हळ्यार थंड पेय आनी सावली सगळ्यांत मदत करतात तो वेळ. दनपाराभोंवतणी किल्ल्याक भेट दितात जाल्यार, सगळ्यांत उन आशिल्ल्या वेळार वयर वा सकयल वचूंक नाशिल्ल्यान, आदीं वा उपरांत थांबो बसोवात.',
            'उतरल्याबगरय बसून, आंगांत उदक घेवन, फुडें कितें करचें — दर्या-देग, बाजार वा जेवण — हाचो निर्णय घेवपाक बरी वेळ.'
          ]
        },
        {
          heading: 'कितें पळोवचें',
          paragraphs: [
            'स्वच्छ पिवपाचें उदक सगळ्यांत पयलीं; थंड उदक, ताजे रोस, शीत-पेय आनी कॉफी सामान्य बेगीन पर्याय. चड चलपाचे आदीं जड जेवणापरस अल्पोपहार वा ल्हान पदार्थ बरो.',
            'गोव्याच्या ह्या भागांत दर आनी उगडपाची वेळ ऋतूप्रमाण वाडटा-उणी जाता, म्हणून त्या दिसा तपासात आनी थोडें रोख दवरात.'
          ],
          bullets: [
            'सगळ्यांत पयलीं स्वच्छ पिवपाचें उदक.',
            'थंडायेखातीर सावली आनी बसप.',
            'जड जेवणापरस हलकें जेवण.',
            'ल्हान थळांखातीर रोख.'
          ]
        },
        {
          heading: 'दिसांत बसोवप',
          paragraphs: [
            'सोपो क्रम म्हळ्यार: सकाळीं किल्लो, थंडायेखातीर कॅफे, उपरांत दर्या-देग वा बाजार. हाच्यान दिसाचो सगळ्यांत कठीण भाग, म्हळ्यार चडप, सगळ्यांत थंड वेळार येता.',
            'उपरांत पुराय जेवण नियोजित करतात जाल्यार, किल्ल्यालागींच्या हॉटेलांचो मार्गदर्शक पळयात, आनी सूर्योदय वा सूर्यास्ताच्या वेळेखातीर बरी वेळ आनी सूर्यास्त पान पळयात.'
          ]
        },
        {
          heading: 'वाठारांतल्यो कांय कॅफे निवडी',
          paragraphs: [
            'तुमकां ज्ञात थळाक वचप आवडटा जाल्यार, किल्ल्याभोंवतणी चड करून हीं लक्षांत दवरतात. तीं उदाहरणां, शिफारस न्हय, आनी वेळ ऋतूप्रमाण बदलता.',
            'सगळ्यांत लागींचीं चडपाक आनी चापोरा गांवांत; हेर वागातोर दर्या-देग वाठारांत थोड्या अंतराचेर.'
          ],
          bullets: [
            'पावलू कॅफे (Paulo’s Cafe) — किल्ल्याच्या वाटेलागीं कॉफी आनी हलकें जेवण, चडपाचे आदीं वा उपरांत सोयीचें.',
            'हाऊस ऑफ उल्लासा कॅफे (House Of Ullassa Cafe Goa) — शांत थांबो जाय जाल्यार शाकाहारी-सोयीचें कॅफे जेवण.',
            'पाझ गोवा कॅफे वागातोर (PAZ GOA CAFE Vagator) — वागातोर दर्या-देग वाठारांत कॉफी आनी ब्रंच.',
            'सनराइज रेस्टॉरंट (Sunrise Restaurant) — चापोरा गांव वाठारांत रोस आनी सादीं ताजेतवानां पेयां.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याचेरच कॅफे आसात?',
          a: 'ना, किल्ल्याचेर कॅफे ना. ताजेतवाने थांब लागींच्या वागातोर, चापोरा आनी अंजुना वाठारांत आसात, म्हणून चडपाचे आदीं वा उपरांत पियेवपाचें नियोजन करात.'
        },
        {
          q: 'हांगा पेयाचो थांब कित्याक म्हत्त्वाचो?',
          a: 'चडप आनी उघडो, सावली नाशिल्लो किल्लो हांच्यान उन मुखेल आव्हान जाता, म्हणून थंड पेय आनी सावली सोयीन भेट दिवपाक मदत करतात. थांबो नियोजित केलो तरी उदक सोबत दवरात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; सांगल्लीं थळां वाठारांतलीं उदाहरणां, शिफारस न्हय — उदक सोबत दवरात आनी त्या दिसा चालू वेळ आनी दर तपासात.'
    }
  },
  {
    slug: 'goan-food-and-seafood',
    category: 'food',
    priority: 'P1',
    related: ['restaurants-near-chapora-fort', 'chapora-fish-market', 'sunset-dinner-vagator', 'cafes-and-quick-drinks'],
    en: {
      title: 'Goan Food and Seafood Near Chapora Fort — What to Try',
      h1: 'Goan Food and Seafood Near the Fort',
      description:
        'An introduction to Goan food and seafood around Chapora Fort: the flavours, the dishes associated with the coast and how to choose what to eat.',
      intro: [
        'Goan cooking is one of the most distinctive in India, shaped by the coast, by the region’s history and by ingredients that are local and seasonal. Around Chapora Fort, in the Vagator, Chapora and Anjuna area, seafood and Goan dishes are a natural part of the menu.',
        'This page describes the food rather than any particular restaurant. Names of dishes are given as a general guide so you can recognise them on a menu and decide what suits you.'
      ],
      sections: [
        {
          heading: 'What makes Goan food distinctive',
          paragraphs: [
            'Goan food combines local ingredients with influences that arrived through the region’s maritime and colonial past. Coconut, rice, tamarind, chillies and spices are common foundations, and the coast brings fish and shellfish.',
            'The result ranges from gentle and creamy to sharp and fiery, so there is usually something to suit most tastes, from mild to strong.'
          ]
        },
        {
          heading: 'Dishes you may see',
          paragraphs: [
            'Menus around the fort commonly include fish curries, prawn and squid dishes, rice preparations and breads served with Goan curries. Vegetarian Goan dishes also exist and are worth asking about.',
            'Because the catch and the season vary, not everything will be available every day. Ask what is fresh and in season rather than expecting a fixed list.'
          ],
          bullets: [
            'Fish curry with rice: a Goan staple.',
            'Prawn and squid dishes: often the local catch.',
            'Vegetarian Goan curries: ask what is available.',
            'Breads and rice: served with the main dishes.'
          ]
        },
        {
          heading: 'Eating well and eating respectfully',
          paragraphs: [
            'Ask whether a dish is spicy before ordering, and say if you want it milder. If you have dietary needs, vegetarian, vegan or Jain, explain them clearly, since recipes differ from place to place.',
            'Seafood is best when it is fresh and in season, so be guided by what is recommended that day. See the fish market page for where the local catch begins its journey.'
          ]
        },
        {
          heading: 'Where to try it near the fort',
          paragraphs: [
            'Around the fort, Goan dishes and seafood appear on many menus in Vagator, Chapora and Anjuna. For a seafood-led meal, Fish Point Restaurant & Bar in Assagao is one commonly mentioned option, reached by a short drive rather than on foot.',
            'For a lunch closer to the fort, places such as Cafe Sanaya or PAZ GOA CAFE Vagator in the Vagator area serve Indian and local dishes. These are examples, not recommendations; ask what is fresh and in season on the day.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What food is Goa known for?',
          a: 'Goa is known for coastal Indian cooking shaped by coconut, rice, spices and seafood, alongside vegetarian dishes. Around Chapora Fort, seafood and Goan curries are common on menus.'
        },
        {
          q: 'Is there vegetarian Goan food?',
          a: 'Yes, Goan cooking includes vegetarian dishes as well as seafood. Ask what is available, since menus and specialities vary from place to place and with the season.'
        }
      ],
      verifyNote:
        'Independent guide; dish descriptions are general and named places are examples, not endorsements — ask locally about freshness, spice and dietary needs.'
    },
    kok: {
      title: 'चापोरा किल्ल्यालागींचें गोवेकार जेवण आनी नुस्तें — कितें चाखचें',
      h1: 'किल्ल्यालागींचें गोवेकार जेवण आनी नुस्तें',
      description:
        'चापोरा किल्ल्याभोंवतणच्या गोवेकार जेवण आनी नुस्त्याची ओळख: चव, किनाऱ्याकडेन जोडिल्लीं पदार्थ आनी कितें खावचें हें कशें निवडचें.',
      intro: [
        'गोवेकार पाककला भारतांतल्या सगळ्यांत वेगळ्या पाककलांतली एक, किनाऱ्यान, वाठाराच्या इतिहासान आनी थळाव्या व ऋतू-आदारीत घटकांनी घडयल्ली. चापोरा किल्ल्याभोंवतणी, वागातोर, चापोरा आनी अंजुना वाठारांत, नुस्तें आनी गोवेकार पदार्थ मेनूचो सहज भाग.',
        'हो पान खंयच्याय खास हॉटेलाचो न्हय तर जेवणाचो परिचय दिता. पदार्थांचीं नांवां सामान्य मार्गदर्शक म्हणून दिल्लीं, म्हणून तुमी मेनूचेर तीं वळखून तुमकां कितें साजतें तें ठरोवंक शकतात.'
      ],
      sections: [
        {
          heading: 'गोवेकार जेवण कित्याक वेगळें',
          paragraphs: [
            'गोवेकार जेवण थळावे घटक वाठाराच्या दर्यावयल्या आनी वसाहतवादी भूतकाळांतल्यान आयल्ल्या प्रभावांसोबत एकठांय करता. नाल्ल, भात, चिंच, मिरसांग आनी मसालो सामान्य आदार, आनी किनारो नुस्तें आनी शेल-जिव घेवन येता.',
            'हाचो परिणाम मंद आनी मलायम सावन तिखट आनी उग्रामेरेन, म्हणून मंद सावन तिखटामेरेन चडशा चवींक साजतो कितेंय सदांच आसता.'
          ]
        },
        {
          heading: 'दिसपा सारके पदार्थ',
          paragraphs: [
            'किल्ल्याभोंवतणच्या मेनूंत सामान्यपणान नुस्त्याचो हुमण, कोळंबी आनी मांकड पदार्थ, भाताच्यो तयारी आनी गोवेकार हुमणासोबत दिवपी पाव-भाकरी आसता. शाकाहारी गोवेकार पदार्थय आसात आनी तांचेखातीर विचारपाक लायक.',
            'कातार आनी ऋतू बदलताच, दर दिसा सगळें उपलब्ध नासता. थरिल्ली यादी अपेक्षा करपापरस कितें ताजें आनी ऋतूंत आसा तें विचारात.'
          ],
          bullets: [
            'भातासोबत नुस्त्याचो हुमण: गोवेकार मुखेल पदार्थ.',
            'कोळंबी आनी मांकड पदार्थ: चड करून थळावो कातार.',
            'शाकाहारी गोवेकार हुमण: कितें उपलब्ध आसा तें विचारात.',
            'पाव-भाकरी आनी भात: मुखेल पदार्थांसोबत.'
          ]
        },
        {
          heading: 'बरें जेवप आनी आदरान जेवप',
          paragraphs: [
            'मागपाचे आदीं पदार्थ तिखट आसा वा ना तें विचारात, आनी मंद जाय जाल्यार सांगात. शाकाहारी, व्हेगन वा जैन सारक्यो आहार-गरजो आसल्यार स्पश्ट सांगात, कारण पाककृती थळा-थळार वेगळी.',
            'नुस्तें ताजें आनी ऋतूंत आसतना सगळ्यांत बरें, म्हणून त्या दिसा कितें सुचयतात हाचेप्रमाण वचात. थळावो कातार खंयच्यान सुरू जाता हें नुस्तें-बाजाराच्या पानार पळयात.'
          ]
        },
        {
          heading: 'किल्ल्यालागीं तें खंय चाखचें',
          paragraphs: [
            'किल्ल्याभोंवतणी, वागातोर, चापोरा आनी अंजुना हांगा गोवेकार पदार्थ आनी नुस्तें खूब मेनूंत दिसता. नुस्त्याचेर आदारीत जेवणाखातीर, असगांवांतलें फिश पॉइंट रेस्टॉरंट अँड बार (Fish Point Restaurant & Bar) चड करून उल्लेख जावपी पर्याय, चलपापरस थोड्या गाडयेन वचपा सारकें.',
            'किल्ल्यालागीं दनपारच्या जेवणाखातीर, वागातोर वाठारांतलें कॅफे सनया (Cafe Sanaya) वा पाझ गोवा कॅफे वागातोर (PAZ GOA CAFE Vagator) सारकीं भारतीय आनी थळावे पदार्थ दितात. हीं उदाहरणां, शिफारस न्हय; त्या दिसा कितें ताजें आनी ऋतूंत आसा तें विचारात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'गोवा खंयच्या जेवणाखातीर नामनेचो?',
          a: 'गोवा नाल्ल, भात, मसालो आनी नुस्तें हांनी घडयल्ल्या किनारी भारतीय पाककलेखातीर, आनी शाकाहारी पदार्थांखातीरय नामनेचो. चापोरा किल्ल्याभोंवतणी नुस्तें आनी गोवेकार हुमण मेनूंत सामान्य.'
        },
        {
          q: 'गोवेकार शाकाहारी जेवण आसा?',
          a: 'हय, गोवेकार पाककलेंत नुस्त्यासोबत शाकाहारी पदार्थय आसात. कितें उपलब्ध आसा तें विचारात, कारण मेनू आनी खासियत थळा-थळार आनी ऋतूप्रमाण बदलता.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; पदार्थांचें वर्णन सामान्य आनी सांगल्लीं थळां उदाहरणां, शिफारस न्हय — ताजेपण, तिखटपण आनी आहार-गरजो स्थानिकपणान विचारात.'
    }
  },
  {
    slug: 'breakfast-before-visit',
    category: 'food',
    priority: 'P1',
    related: ['best-time-and-sunset', 'cafes-and-quick-drinks', 'restaurants-near-chapora-fort', 'facilities-and-packing'],
    en: {
      title: 'Breakfast Before Chapora Fort — Starting the Day Right',
      h1: 'Breakfast Before You Visit Chapora Fort',
      description:
        'Why a good breakfast helps before climbing Chapora Fort in Goa, what kind of meal suits a morning visit and how to time it around the heat.',
      intro: [
        'Visiting Chapora Fort early is one of the best ways to avoid the worst of the heat, and that makes breakfast part of the plan rather than an afterthought. A sensible meal beforehand gives you the energy for the climb and the walk at the top.',
        'This page is about the idea of a good pre-visit breakfast, not about recommending a particular place. What and where you eat is your choice; the aim is to get it right for the day ahead.'
      ],
      sections: [
        {
          heading: 'Why breakfast matters here',
          paragraphs: [
            'The fort has no food on site and little shade, so going up hungry makes the heat and the climb feel harder. Eating something beforehand keeps your energy steady through the visit.',
            'A sit-down breakfast also gives the morning a natural shape: eat, travel to the fort, climb while it is still cooler, then come down as the day warms up.'
          ]
        },
        {
          heading: 'What kind of breakfast suits a visit',
          paragraphs: [
            'A balanced meal with some protein and carbohydrate tends to sit better than something very heavy or very sweet before walking. In this part of Goa you will find a mix of Indian and continental breakfasts depending on where you go.',
            'Hydration matters as much as food. Start the day with water and carry more with you, because the climb and the open ground will make you thirsty.'
          ],
          bullets: [
            'Choose a balanced meal over a very heavy one.',
            'Include some protein and carbohydrate.',
            'Drink water before you set off.',
            'Carry extra water for the climb.'
          ]
        },
        {
          heading: 'Timing it for the cool hours',
          paragraphs: [
            'If you want the coolest conditions, eat early and reach the fort soon after. That leaves the hottest part of the day free for a beach, a café or a rest.',
            'For more on timing, see the best time and sunset page; for refreshment stops, see the cafés and quick drinks guide.'
          ]
        },
        {
          heading: 'Where to have breakfast nearby',
          paragraphs: [
            'In the Chapora and Vagator area, breakfast places are usually open through the morning. Sunrise Restaurant in the Chapora village area is one commonly used for an early start, and the Vagator beach area has cafés such as PAZ GOA CAFE for a later brunch.',
            'These are examples rather than recommendations. Check current opening hours on the day, since some places open late or close by mid-morning.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Should you eat before visiting Chapora Fort?',
          a: 'Yes, eating beforehand helps, because the fort has no food on site and the climb and open ground are demanding in the heat. A balanced breakfast and plenty of water are a good start.'
        },
        {
          q: 'What is the best breakfast before the climb?',
          a: 'A balanced meal with some protein and carbohydrate is usually better than a very heavy or very sweet one. Carry water as well, since there is no food or drink at the fort.'
        }
      ],
      verifyNote:
        'Independent guide; named places are examples, not endorsements — choose what suits you and confirm current hours on the day.'
    },
    kok: {
      title: 'चापोरा किल्ल्याचे आदीं नाश्तो — दीस बरो सुरू करप',
      h1: 'चापोरा किल्ल्याक वचपाचे आदीं नाश्तो',
      description:
        'गोवा हांगा चापोरा किल्ल्याक चडपाचे आदीं बरो नाश्तो कित्याक मदत करता, सकाळच्या भेटेखातीर खंयचें जेवण साजतें आनी उनाभोंवतणी वेळ कसो जुळोवचो.',
      intro: [
        'चापोरा किल्ल्याक सकाळीं भेट दिवप उनेंसावन सगळ्यांत बरो मार्ग, आनी हाच्यान नाश्तो येवजणेचो भाग जाता, उपरांतचो विचार न्हय. आदीं समजूतदार जेवण केल्यार चडपाखातीर आनी वयर चलपाखातीर तुमकां शक्त मेळटा.',
        'हो पान भेटेच्या आदींच्या बऱ्या नाश्त्याच्या कल्पनेभोंवतणी, खंयचेंच खास थळ सुचोवपाखातीर न्हय. कितें आनी खंय खावचें तें तुमची निवड; हेतू म्हळ्यार येवपी दिसाखातीर तो बरो करप.'
      ],
      sections: [
        {
          heading: 'हांगा नाश्तो कित्याक म्हत्त्वाचो',
          paragraphs: [
            'किल्ल्याचेर जेवण ना आनी सावलीय उणी, म्हणून भुकेलें वयर गेल्यार उन आनी चडप चड कठीण जाणवता. आदीं कितेंय खाल्यार भेटेंत तुमची शक्त स्थिर उरता.',
            'बसून नाश्तो केल्यार सकाळाक सहज आकार मेळटा: खावात, किल्ल्यामेरेन वचात, अजून थंड आसतना चडात, उपरांत दीस उन जातकच सकयल येवात.'
          ]
        },
        {
          heading: 'भेटेखातीर खंयचो नाश्तो साजतो',
          paragraphs: [
            'चलपाचे आदीं कांय प्रथिन आनी कर्बोदक आशिल्लो संतुलित जेवण खूब जड वा खूब गोड जेवणापरस बरो बसता. गोव्याच्या ह्या भागांत तुमी खंय वचता हाचेप्रमाण भारतीय आनी पाश्चात्त्य नाश्त्याचें मिश्रण मेळटा.',
            'जेवणाइतलेंच उदकय म्हत्त्वाचें. दीस उदकान सुरू करात आनी चड उदक सोबत व्हरात, कारण चडप आनी उघडी जमीन तान लागता.'
          ],
          bullets: [
            'खूब जड जेवणापरस संतुलित जेवण निवडात.',
            'कांय प्रथिन आनी कर्बोदक घालात.',
            'वचपाच्या आदीं उदक पियात.',
            'चडपाखातीर वेगळें उदक सोबत व्हरात.'
          ]
        },
        {
          heading: 'थंड वेळेखातीर वेळ जुळोवप',
          paragraphs: [
            'सगळ्यांत थंड स्थिती जाय आसल्यार, सकाळीं जेवन लागींच किल्ल्याक पावात. हाच्यान दिसाचो सगळ्यांत उन आशिल्लो भाग दर्या-देग, कॅफे वा विसव्याखातीर मेकळो उरता.',
            'वेळेचेर चड माहितीखातीर, बरी वेळ आनी सूर्यास्त पान पळयात; ताजेतवाने थांबांखातीर, कॅफे आनी बेगीन पेय मार्गदर्शक पळयात.'
          ]
        },
        {
          heading: 'लागीं नाश्तो खंय करचो',
          paragraphs: [
            'चापोरा आनी वागातोर वाठारांत नाश्त्याचीं थळां सकाळभर सादारणपणान उगडीं आसतात. चापोरा गांव वाठारांतलें सनराइज रेस्टॉरंट (Sunrise Restaurant) सकाळीं लवकर भायर सरपाखातीर चड करून वापरतात, आनी वागातोर दर्या-देग वाठारांत पाझ गोवा कॅफे (PAZ GOA CAFE) सारकीं उशारा ब्रंचाखातीर कॅफे आसात.',
            'हीं शिफारसींपरस उदाहरणां. त्या दिसा चालू उगडपाची वेळ तपासात, कारण कांय थळां उशारा उगडतात वा सकाळींच बंद जातात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्याक वचपाचे आदीं खावचें?',
          a: 'हय, आदीं खाल्यार मदत जाता, कारण किल्ल्याचेर जेवण ना आनी उनेंत चडप आनी उघडी जमीन कठीण आसता. संतुलित नाश्तो आनी भरपूर उदक बरी सुरवात.'
        },
        {
          q: 'चडपाचे आदीं सगळ्यांत बरो नाश्तो खंयचो?',
          a: 'कांय प्रथिन आनी कर्बोदक आशिल्लो संतुलित जेवण खूब जड वा खूब गोड जेवणापरस सामान्यपणान बरो. उदकय सोबत व्हरात, कारण किल्ल्याचेर जेवण वा पेय ना.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; सांगल्लीं थळां उदाहरणां, शिफारस न्हय — तुमकां साजतें तें निवडात आनी त्या दिसा चालू वेळ तपासात.'
    }
  },
  {
    slug: 'sunset-dinner-vagator',
    category: 'food',
    priority: 'P1',
    related: ['best-time-and-sunset', 'restaurants-near-chapora-fort', 'fort-to-vagator-beach', 'fort-ozran-half-day'],
    en: {
      title: 'Sunset and Dinner in Vagator After Chapora Fort',
      h1: 'Sunset and Dinner in Vagator',
      description:
        'Ending a Chapora Fort visit with sunset and dinner in Vagator, Goa: how to time the fort, the beach and a meal so the evening flows without rushing.',
      intro: [
        'The end of the day is one of the best times to be at Chapora Fort, and the Vagator area below is a natural place to finish with dinner. The trick is to sequence it well so you are not climbing down in the dark or eating before you are ready.',
        'This page is about the shape of the evening rather than any particular restaurant. Sunset times shift through the year, so check the day’s timing and work backwards from there.'
      ],
      sections: [
        {
          heading: 'Getting the order right',
          paragraphs: [
            'The usual pattern is: reach the fort while there is still light, watch the light change, then descend before it gets dark. The path is uneven, so finishing the descent in daylight is safer.',
            'After that, head down to the Vagator area for a drink or dinner. Doing it in this order means the fort gets the best light and the meal gets a relaxed, unhurried slot.'
          ],
          bullets: [
            'Fort while there is still daylight.',
            'Descend before it gets dark.',
            'Eat in Vagator afterwards.',
            'Leave buffer time, not a tight schedule.'
          ]
        },
        {
          heading: 'Why timing is everything',
          paragraphs: [
            'Sunset is early in winter and late in summer, so the same plan can feel different depending on the season. Aim to be at the fort a little before the light turns, not as it is already fading.',
            'In the busy season the popular spots fill up, so if you want a particular kind of evening, plan ahead or keep a flexible list of options.'
          ]
        },
        {
          heading: 'Making it a full evening',
          paragraphs: [
            'A relaxed version combines the fort, a short walk or stop by the coast, and then dinner, without trying to fit too much in. If you want more daylight activity first, see the half-day itinerary for Vagator.',
            'For the best time and sunset in general, and for restaurant guidance, the linked pages cover both in more detail.'
          ]
        },
        {
          heading: 'Sea-view dining nearby',
          paragraphs: [
            'For a dinner with a view, the Vagator and Ozran area is the natural choice. Olive Bar & Kitchen in the Big Vagator area and Antares Restaurant & Beach Club near Ozran Beach are commonly mentioned for sea-view meals and sunsets.',
            'Popular sunset tables usually need booking ahead, especially in the busy season. These are examples, not recommendations; confirm current hours, menus and reservations directly.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Chapora Fort good at sunset?',
          a: 'The end of the day is one of the best times to be at the fort for the light and the views. Plan to descend before it gets dark, because the path is uneven.'
        },
        {
          q: 'Where do people eat after the fort?',
          a: 'The Vagator area below the fort is a natural place to finish with a drink or dinner. There is a range of cafés and restaurants there; check what is open on the day.'
        }
      ],
      verifyNote:
        'Independent guide; sunset times change through the year and named places are examples, not endorsements — check the day’s timing, book ahead and descend in daylight.'
    },
    kok: {
      title: 'चापोरा किल्ल्याचे उपरांत वागातोरांत सूर्यास्त आनी जेवण',
      h1: 'वागातोरांत सूर्यास्त आनी जेवण',
      description:
        'गोवा हांगा चापोरा किल्ल्याची भेट सूर्यास्त आनी वागातोरांतल्या जेवणान सोंपोवप: किल्लो, दर्या-देग आनी जेवण हांचो वेळ कसो जुळोवचो की सांज घाई नासताना व्हांवता.',
      intro: [
        'दिसाचो शेवट चापोरा किल्ल्याचेर रावपाच्या बऱ्या वेळांतलो एक, आनी सकयलचो वागातोर वाठार जेवणान सोंपोवपाक सहज थळ. कला म्हळ्यार क्रम बरो मांडप, म्हणून तुमी काळोखांत सकयल उतरनात वा तयार आसचे आदीं जेवनात.',
        'हो पान सांजेच्या आकाराभोंवतणी, खंयच्याय खास हॉटेलाभोंवतणी न्हय. सूर्यास्ताची वेळ वर्सभर सरकता, म्हणून त्या दिसाची वेळ तपासात आनी थंयसावन मागीर मेजात.'
      ],
      sections: [
        {
          heading: 'क्रम बरो करप',
          paragraphs: [
            'सामान्य क्रम म्हळ्यार: उजवाड आसतना किल्ल्याक पावात, उजवाड बदलताना पळयात, उपरांत काळोख जावचे आदीं सकयल उतरात. वाट असमान आशिल्ल्यान, उजवाडांत उतरप सुरक्षित.',
            'उपरांत, पेय वा जेवणाखातीर वागातोर वाठारांत सकयल वचात. हो क्रम केल्यार किल्ल्याक सगळ्यांत बरो उजवाड आनी जेवणाक सुटसुटीत, घाई नाशिल्लो वेळ मेळटा.'
          ],
          bullets: [
            'उजवाड आसतना किल्लो.',
            'काळोख जावचे आदीं सकयल उतरात.',
            'उपरांत वागातोरांत जेवात.',
            'घट्ट वेळापाटी न्हय तर मोकळो वेळ दवरात.'
          ]
        },
        {
          heading: 'वेळ सगळें कित्याक',
          paragraphs: [
            'शियाळीं सूर्यास्त पयलीं आनी गिमांत उशारा जाता, म्हणून एकूच येवजण ऋतूप्रमाण वेगळी जाणवूंक शकता. उजवाड मावळटा तेन्ना न्हय तर ताचे थोडें आदीं किल्ल्याचेर पावपाचो यत्न करात.',
            'गर्दीच्या ऋतूंत लोकप्रिय थळां भरतात, म्हणून खास सांज हवी आसल्यार आदींच नियोजन करात वा लवचीक पर्याय-यादी दवरात.'
          ]
        },
        {
          heading: 'पुराय सांज करप',
          paragraphs: [
            'सुस्त आवृत्तींत किल्लो, किनाऱ्यालागीं थोडी भोंवडी वा थांबो आनी उपरांत जेवण एकठांय येता, चड बरें बसोवपाचो यत्न न करता. आदीं चड उजवाड-काळार खेळ जाय आसल्यार, वागातोराचो अर्द-दिसाचो भोंवडी-मार्ग पळयात.',
            'सामान्यपणान बरी वेळ आनी सूर्यास्त, आनी हॉटेल मार्गदर्शनाखातीर, जोडिल्लीं पानां दोनूय चड तपशिलान सांगतात.'
          ]
        },
        {
          heading: 'लागीं दर्या-दृश्य जेवण',
          paragraphs: [
            'दृश्यासोबत जेवणाखातीर, वागातोर आनी ओझरान वाठार सहज निवड. व्हड वागातोर वाठारांतलें ऑलिव्ह बार अँड किचन (Olive Bar & Kitchen) आनी ओझरान किनाऱ्यालागींचें अँटारेस रेस्टॉरंट अँड बीच क्लब (Antares Restaurant & Beach Club) दर्या-दृश्य जेवण आनी सूर्यास्ताखातीर चड करून उल्लेख जातात.',
            'लोकप्रिय सूर्यास्ताचीं बसपां चड करून आदीं बुक करचीं लागतात, खास करून गर्दीच्या ऋतूंत. हीं उदाहरणां, शिफारस न्हय; चालू वेळ, मेनू आनी बुकिंग थेट तपासात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्लो सूर्यास्ताक बरो आसा?',
          a: 'उजवाड आनी दृश्यांखातीर दिसाचो शेवट किल्ल्याचेर रावपाच्या बऱ्या वेळांतलो एक. काळोख जावचे आदीं सकयल उतरपाचें नियोजन करात, कारण वाट असमान आसा.'
        },
        {
          q: 'किल्ल्याचे उपरांत लोक खंय जेवतात?',
          a: 'किल्ल्याच्या सकयलचो वागातोर वाठार पेय वा जेवणान सोंपोवपाक सहज थळ. थंय कॅफे आनी हॉटेलांची श्रेणी आसा; त्या दिसा कितें उगडें आसा तें तपासात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; सूर्यास्ताची वेळ वर्सभर बदलता आनी सांगल्लीं थळां उदाहरणां, शिफारस न्हय — त्या दिसाची वेळ तपासात, आदीं बुक करात आनी उजवाडांत सकयल उतरात.'
    }
  }
];
