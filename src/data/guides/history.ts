// इतिहास श्रेणीचीं 7 मार्गदर्शक पानां (history category guides).
// दर पान द्विभाषी: इंग्रजी + कोंकणी (देवनागरी).
import type { Guide } from './types';

export const historyGuides: Guide[] = [
  {
    slug: 'history',
    category: 'history',
    priority: 'P0',
    related: [
      'portuguese-maratha-conflicts',
      'architecture',
      'ruins-and-tunnels',
      'dil-chahta-hai-fort',
      'best-time-and-sunset'
    ],
    en: {
      title: 'Chapora Fort History: Timeline from 1617 to 1892',
      h1: 'The History of Chapora Fort: A Timeline from 1617 to 1892',
      description:
        'Trace the history of Chapora Fort in Vagator, Goa, from its 1617 Portuguese construction and Maratha sieges to military abandonment in 1892.',
      intro: [
        'Chapora Fort sits on a laterite hill above the mouth of the Chapora river in Vagator, Bardez taluka, North Goa. The Government of Goa dates the Portuguese construction over an earlier structure to 1617, while local accounts recall an even older Adil Shahi post known as Shahapura. From this ridge the fort watched both the river and the Arabian Sea.',
        'Its story runs through Portuguese rule, Maratha attacks and repeated rebuilding until the military finally abandoned it in 1892. Today the ramparts, the open plateau and the sunset draw visitors.'
      ],
      sections: [
        {
          heading: 'Why the Portuguese built here',
          paragraphs: [
            'The mouth of the Chapora river and the northern edge of Portuguese Goa explain the choice of this hill. From a fort on the ridge, guards could keep an eye on river traffic, the sea approaches and the land route along the border. The Government of Goa dates the Portuguese construction over an earlier structure to 1617. The position was therefore chosen for defence long before the walls that visitors climb today took shape.'
          ]
        },
        {
          heading: 'An earlier post named Shahapura',
          paragraphs: [
            'Before the Portuguese works, an Adil Shahi post named Shahapura is said to have stood here. This point matters because it suggests the site was already useful for defence before 1617. The exact form and dates of that earlier post are not verified on this page, so treat it as reported history and check the linked official sources for detail. When we write about the past, separating what is published from what is assumed is part of the job.'
          ]
        },
        {
          heading: 'Maratha attacks and rebuilding',
          paragraphs: [
            'The fort did not stay quietly in Portuguese hands. Records note that the Marathas took it in 1684, that the Portuguese rebuilt it in 1717, and that the Marathas took it again in 1739. These dates show how often the northern border shifted. Reading them as a single, simple story misses how contested the ridge really was, and how the same ground kept returning to the centre of regional politics.'
          ]
        },
        {
          heading: '1892: military abandonment',
          paragraphs: [
            'Military abandonment of the fort is recorded in 1892. After that, few buildings inside survived. Official descriptions note that the walls follow the natural slopes, with irregular bastions and deep emplacements for cannons. The main experience today is the ramparts, the open plateau, the river mouth, the beaches and the sunset rather than any complete structure.'
          ]
        },
        {
          heading: 'What remains today',
          paragraphs: [
            'Inside the fort, few buildings remain. What survives is mostly laterite walling and bastions, and the shape of the plateau above the river mouth. Visitors come for the open ground and the views. Climbing the fallen stones or entering openings is best avoided, because the ground is uneven and parts of the site are unprotected.'
          ],
          bullets: [
            '1617 — Portuguese construction over an earlier structure, as dated by the Government of Goa.',
            '1684 — Maratha forces take the fort.',
            '1717 — Portuguese rebuilding recorded.',
            '1739 — the Marathas take the fort again.',
            '1892 — military abandonment recorded.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Who built Chapora Fort?',
          a: 'The Government of Goa dates the Portuguese construction over an earlier structure to 1617; an earlier Adil Shahi post named Shahapura is also recalled.'
        },
        {
          q: 'When was Chapora Fort abandoned?',
          a: 'Military abandonment is recorded in 1892, after which few buildings inside survived.'
        }
      ],
      verifyNote:
        'Independent guide; historical accounts and any current access details should be confirmed against the linked Government of Goa and GTDC pages before travelling.'
    },
    kok: {
      title: 'चापोरा किल्ल्याचो इतिहास: 1617 ते 1892 मेरेन',
      h1: 'चापोरा किल्ल्याचो इतिहास: 1617 ते 1892 वर्सांतलो काळक्रम',
      description:
        'वागातोर, गोवा हांगा चापोरा किल्ल्याचो इतिहास — 1617 वर्साचें पोर्तुगेज बांदकाम आनी मराठ्यांचे हल्ले ते 1892 वर्सांतलो सैन्य-त्याग मेरेन.',
      intro: [
        'चापोरा किल्लो वागातोर, बार्देश तालुका, उत्तर गोवा हांगा चापोरा न्हंयच्या तोंडार एका लेटरायट दोंगुलार उबो आसा. गोवा सरकाराच्या म्हायती प्रमाणें पोर्तुगेजांनी 1617 वर्सा हांगा बांदकाम केलें, आनी ताचे आदीं आदिलशाहीचो एक ठाणो ‘शाहापुरा’ नांवान आशिल्लो अशें सांगतात.',
        'ह्या दोंगुलार उबो रावून किल्लो न्हंय आनी अरबी दर्याचेर नदर दवरतालो. पोर्तुगेज राज्य, मराठ्यांचे हल्ले आनी पुनर्रचणूक हें सगळें जावन, 1892 वर्सा ह्या किल्ल्याचो सैन्यान वापर सोडलो. आयज फातरांची वण्टी, मोकळो पठार आनी सांजवेळचो सूर्यास्त लोकांक आकर्षित करता.'
      ],
      sections: [
        {
          heading: 'पोर्तुगेजांनी हांगा कित्याक बांदलें',
          paragraphs: [
            'चापोरा न्हंयचें तोंड आनी उत्तर गोव्याची शिम हें मुखेल कारण. ह्या दोंगुलार उबो रावून गडाक न्हंयची येरादारी, दर्याचो रस्तो आनी जमनीवयलो रस्तो हें सगळें नदरेखाला दवरपाक मेळतालें. गोवा सरकाराच्या म्हायती प्रमाणें पोर्तुगेजांनी 1617 वर्सा हांगा बांदकाम केलें. देखून आयज दिसपी वण्टी आयचे आदींच, ही सुवात बचावाखातीर निवडिल्ली आशिल्ली.'
          ]
        },
        {
          heading: 'शाहापुरा नांवाचो पयलो ठाणो',
          paragraphs: [
            'किल्ल्याचे आदीं हांगा आदिलशाहीचो ‘शाहापुरा’ नांवाचो एक ठाणो आशिल्लो अशें सांगतात. हो बिंदू म्हत्वाचो, कारण तो दाखयता की ही सुवात 1617 चे आदींच सैन्यीक नदरेन उपेगी आशिल्ली. तरी ह्या ठाण्याची नेमकी रचना आनी काळ हांगा तपासिल्लो ना; सांगितल्लें आनी तपासिल्लें हातूंत फरक दवरप गरजेचो आसा. बारीक म्हायतीखातीर आधिकृत स्रोत पळोवपाक लागता.'
          ]
        },
        {
          heading: 'मराठ्यांचे हल्ले आनी पुनर्रचणूक',
          paragraphs: [
            'किल्लो एकदां पोर्तुगेजांचे ताब्यांत स्थिर रावलो ना. नोंदी प्रमाणें मराठ्यांनी 1684 वर्सा किल्लो जिंकलो, आनी पोर्तुगेजांनी 1717 वर्सा तो परत बांदलो. उपरांत 1739 वर्सा मराठ्यांनी तो परत घेतलो. हे तारखो दाखयतात की उत्तरेची शिम कितलीदां बदलताली. देखून ह्या किल्ल्याक एक सादो, एकेरी इतिहास मानप बरोबर न्हय.'
          ]
        },
        {
          heading: '1892: सैन्यान वापर सोडलो',
          paragraphs: [
            '1892 वर्सा ह्या किल्ल्याचो सैन्यान वापर सोडलो अशी नोंद आसा. ताचे उपरांत आंत आशिल्ल्यो कांय इमारती शिल्लक उरल्यो. आधिकृत वर्णना प्रमाणें वण्टी दोंगराच्या सैमीक तळवणीकडेन वतात, आनी बुरूज बेऱ्याबेऱ्याय आसून तोफांखातीर खोल सुवातो आसात. आयज मुखेल अनुभव म्हणजे वण्टी, मोकळो पठार, न्हंयचें तोंड, वाळवंटां आनी सूर्यास्त.'
          ]
        },
        {
          heading: 'आयज कितें उरलां',
          paragraphs: [
            'किल्ल्यांत आयज कांय इमारती उरल्यात. जे उरलां तें बहुतेक लेटरायट फातरांच्यो वण्टी आनी बुरूज, आनी न्हंयच्या तोंडार वयल्या पठाराचो आकार. लोक मोकळ्या जमनीखातीर आनी दृश्यांखातीर येतात. पडिल्ल्या फातरांचेर चडप वा खुल्ल्या वाटांत सरप टाळचें, कारण जमीन असमतोळ आसा आनी एका-एका जाग्यार सुवात असंरक्षित आसा.'
          ],
          bullets: [
            '1617 — गोवा सरकाराच्या म्हायती प्रमाणें पोर्तुगेजांनी आदल्या बांदकामाचेर बांदलें.',
            '1684 — मराठ्यांनी किल्लो जिंकलो.',
            '1717 — पोर्तुगेज पुनर्रचणूक नोंदिल्ली.',
            '1739 — मराठ्यांनी किल्लो परत घेतलो.',
            '1892 — सैन्यान वापर सोडलो अशी नोंद.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्लो कोणें बांदलो?',
          a: 'गोवा सरकाराच्या म्हायती प्रमाणें पोर्तुगेजांनी 1617 वर्सा आदल्या बांदकामाचेर बांदलें; ‘शाहापुरा’ नांवाचो आदिलशाही ठाणोय आठवणींत आसा.'
        },
        {
          q: 'किल्लो केन्ना सोडलो?',
          a: '1892 वर्सा सैन्यान वापर सोडलो अशी नोंद आसा, आनी उपरांत आंत कांय इमारती उरल्यो.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; इतिहासीक म्हायती आनी सद्याची भेट-म्हायती प्रवासाक भायर सरचे आदीं जोडिल्ल्या गोवा सरकार आनी GTDC पानांनी तपासची.'
    }
  },
  {
    slug: 'portuguese-maratha-conflicts',
    category: 'history',
    priority: 'P2',
    related: [
      'history',
      'chapora-river-strategic-location',
      'architecture',
      'chapora-vs-aguada-fort'
    ],
    en: {
      title: 'Portuguese and Maratha Struggles for Chapora Fort',
      h1: 'Portuguese and Maratha Conflicts over Chapora Fort',
      description:
        'How Chapora Fort changed hands in the Portuguese–Maratha wars of 1684, 1717 and 1739, and why it kept returning as a border stronghold.',
      intro: [
        'For much of its life Chapora Fort was a frontier point between Portuguese Goa and the Maratha territories inland. The Government of Goa records that the Marathas took the fort in 1684, that the Portuguese rebuilt it in 1717, and that the Marathas took it again in 1739.',
        'These dates show how often the northern border shifted. The fort was never a quiet monument; it changed hands with the politics of the region. Treating it as a single, simple story misses how contested this ridge really was.'
      ],
      sections: [
        {
          heading: 'A frontier between two powers',
          paragraphs: [
            'Chapora Fort sat where Portuguese Goa met the Maratha country to the north and east. A fortified ridge above the river mouth made borders visible: whoever held the hill could watch movement across the water and along the land route. This is why the same ground appears again and again in records of the period, and why the fort was valued well beyond its size.'
          ]
        },
        {
          heading: '1684: the first Maratha capture',
          paragraphs: [
            'Records note that the Marathas took the fort in 1684. For the Portuguese this was a real loss at a sensitive edge of their territory, and it set the pattern for the fort’s later life. The date is usually given briefly in official summaries, so check the linked Government of Goa and GTDC pages if you want the fuller account.'
          ]
        },
        {
          heading: '1717: rebuilding and new works',
          paragraphs: [
            'A Portuguese rebuilding is recorded in 1717. This is also the period when official descriptions mention the addition of underground passages, which belong to the fort’s defensive story. Rebuilding a captured frontier post was as much about signalling control as repairing stone, and it shows how firmly the Portuguese wanted to hold the northern approach.'
          ]
        },
        {
          heading: '1739: taken again',
          paragraphs: [
            'The Marathas took the fort again in 1739. Rather than a single decisive moment, the sequence of 1684, 1717 and 1739 shows a long contest in which control moved back and forth. Later, the Portuguese re-established authority before the fort was finally abandoned in 1892, ending its military role.'
          ]
        },
        {
          heading: 'Reading the dates carefully',
          paragraphs: [
            'It is tempting to turn these events into a neat story of winners and losers. The records do not support that. Official summaries give the key years without detail, and local accounts add colour that is not always verified. The honest approach is to treat the dates as solid, the detail as provisional, and to check published sources before repeating a claim as fact.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Did the Marathas capture Chapora Fort?',
          a: 'Yes — records note that the Marathas took the fort in 1684 and again in 1739.'
        },
        {
          q: 'When did the Portuguese rebuild it?',
          a: 'A Portuguese rebuilding of the fort is recorded in 1717.'
        }
      ],
      verifyNote:
        'Independent guide; historical accounts and any current access details should be confirmed against the linked Government of Goa and GTDC pages before travelling.'
    },
    kok: {
      title: 'पोर्तुगेज आनी मराठे: चापोरा किल्ल्याची झगडीं',
      h1: 'चापोरा किल्ल्याचेर पोर्तुगेज आनी मराठे हांचीं झगडीं',
      description:
        'चापोरा किल्लो 1684, 1717 आनी 1739 वर्सांनी पोर्तुगेज–मराठे झगड्यांनी कसो बदलत गेलो, आनी तो शिमेचो गड कसो उरलो हाची म्हायती.',
      intro: [
        'चापोरा किल्लो आपल्या आयुश्याचो चड वेळ पोर्तुगेज गोवा आनी आंतल्या मराठा प्रदेशांमदलो शिमेचो बिंदू आशिल्लो. गोवा सरकाराच्या नोंदी प्रमाणें मराठ्यांनी 1684 वर्सा किल्लो जिंकलो, पोर्तुगेजांनी 1717 वर्सा तो परत बांदलो, आनी 1739 वर्सा मराठ्यांनी तो परत घेतलो.',
        'ह्या तारखो दाखयतात की उत्तरेची शिम कितलीदां बदलताली. हो किल्लो कधीच एक शांत स्मारक नासलो; प्रदेशाच्या राजकारणा वांगडा तो हातबदल जातालो. ताका एक सादो, एकेरी इतिहास मानप चुकीचें.'
      ],
      sections: [
        {
          heading: 'दोन सत्तांमदलो शिमेचो गड',
          paragraphs: [
            'चापोरा किल्लो थंय आशिल्लो जंय पोर्तुगेज गोवा आनी उत्तरे-उदेंतेकडचो मराठा प्रदेश भेटताले. न्हंयच्या तोंडार वयलो गडयुक्त दोंगूल शिमा स्पश्ट करतालो: दोंगूल जाचे ताब्यांत, तो उदकाचेर आनी जमनी रस्त्याचेर भोंवड दवरूंक शकतालो. देखूनूच एकूच सुवात ह्या काळाच्या नोंदींनी परतून-परतून दिसता, आनी किल्ल्याचें मोल ताच्या आकारापरस चड आशिल्लें.'
          ]
        },
        {
          heading: '1684: मराठ्यांचो पयलो जैत',
          paragraphs: [
            'नोंदी प्रमाणें मराठ्यांनी 1684 वर्सा किल्लो जिंकलो. पोर्तुगेजांक हें शिमेचेर नाजूक जाग्यार खरें नुकसान आशिल्लें, आनी आगेच्या काळाक ताची दिशा हेंच ठरयलें. आधिकृत सारांशांनी ही तारीख थोडक्यांत दितात, देखून पुराय म्हायतीखातीर जोडिल्लीं गोवा सरकार आनी GTDC पानां पळोवचीं.'
          ]
        },
        {
          heading: '1717: पुनर्रचणूक आनी नवीं कामां',
          paragraphs: [
            '1717 वर्सा पोर्तुगेज पुनर्रचणूक नोंदिल्ली आसा. हाचोच काळ अशें सांगतात जेन्ना भुयारी मार्ग जोडले, आनी ते किल्ल्याच्या बचावी इतिहासाचो भाग. जिंकल्लो शिमेचो गड परत बांदप म्हणजे फातर दुरुस्त करपाइतलेंच, आपलें ताबो दाखोवप. हें दाखयता की उत्तरेचो मार्ग घट्ट धरपाची पोर्तुगेजांची इत्सा कितली खरी आशिल्ली.'
          ]
        },
        {
          heading: '1739: परत जिंकलो',
          paragraphs: [
            '1739 वर्सा मराठ्यांनी किल्लो परत घेतलो. 1684, 1717 आनी 1739 हीं एका थारायेच्या क्षणांपरस एक लांब झगड दाखयतात, जातूंत ताबो फुडें-फाटें वतालो. उपरांत किल्लो 1892 वर्सा निमाणें सोडचे आदीं पोर्तुगेजांनी परत आपलो ताबो प्रस्थापित केलो, आनी ताचें सैन्यीक जिवीत सोंपलें.'
          ]
        },
        {
          heading: 'तारखो काळजीपूर्वक वाचप',
          paragraphs: [
            'हे घडणुको जैतारू आनी हारिल्ल्यांचेरी सुंदर काणी म्हणून मांडपाक लोभ जाता. पूण नोंदी तशें सांगनात. आधिकृत सारांशांनी मुखेल वर्सां दितात, पूण बारीक म्हायती दिनात; आनी स्थानीक काणयो रंग भरतात, जो सगळो तपासिल्लो नासता. तारखो पक्क्यो मानच्यो, बारीक म्हायती तात्पुरती मानची, आनी खंयचोय दावो तथ्य म्हणून सांगचे आदीं स्रोत तपासचे.'
          ]
        }
      ],
      faqs: [
        {
          q: 'मराठ्यांनी चापोरा किल्लो जिंकलो?',
          a: 'होय — नोंदी प्रमाणें मराठ्यांनी 1684 आनी परत 1739 वर्सा किल्लो जिंकलो.'
        },
        {
          q: 'पोर्तुगेजांनी केन्ना परत बांदलो?',
          a: '1717 वर्सा पोर्तुगेज पुनर्रचणूक नोंदिल्ली आसा.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; इतिहासीक म्हायती आनी सद्याची भेट-म्हायती प्रवासाक भायर सरचे आदीं जोडिल्ल्या गोवा सरकार आनी GTDC पानांनी तपासची.'
    }
  },
  {
    slug: 'architecture',
    category: 'history',
    priority: 'P1',
    related: [
      'history',
      'ruins-and-tunnels',
      'chapora-river-strategic-location',
      'trail-and-climb'
    ],
    en: {
      title: 'Chapora Fort Architecture: Laterite Walls and Ramparts',
      h1: 'Architecture of Chapora Fort: Laterite, Ramparts and Defences',
      description:
        'A look at Chapora Fort’s laterite construction, its walls following the natural slopes, irregular bastions and deep cannon emplacements.',
      intro: [
        'Chapora Fort is built of laterite, the reddish local stone that shapes so much of Goan heritage. According to official descriptions, its walls follow the natural slopes of the hill rather than a strict geometric plan, and the defences include irregular bastions and deep emplacements for cannons.',
        'That design answered the terrain: a river mouth on one side, the Arabian Sea beyond, and open approaches that needed watching. Few buildings remain inside today, so the surviving ramparts and the shape of the plateau are the main things to read. Walking the walls is the best way to understand the layout.'
      ],
      sections: [
        {
          heading: 'Laterite: the local building stone',
          paragraphs: [
            'Laterite is a soft, iron-rich stone common across Goa, and it hardens on exposure to air. Using it meant the fort could be built from material close at hand rather than stone carried from far away. Its warm reddish colour is now part of how the fort looks in photographs, especially at sunset, and it is one reason the ruins blend into the hillside rather than standing apart from it.'
          ]
        },
        {
          heading: 'Walls that follow the hill',
          paragraphs: [
            'Official descriptions note that the walls follow the natural slopes instead of forming a rigid rectangle. This is a defensive habit as much as a style: a rampart that rides the contour uses the ground itself to slow an attacker. For visitors, it means the fort does not present one grand facade but a ring of walls and edges that the eye has to follow around the plateau.'
          ]
        },
        {
          heading: 'Bastions and cannon emplacements',
          paragraphs: [
            'The defences include irregular bastions and deep emplacements for cannons. Bastions project outward so that defenders can cover the wall beside them, and deep platforms give heavy guns stable ground. Official summaries mention these features without detail, so the sizes and exact positions are best judged on site rather than assumed from a plan.'
          ]
        },
        {
          heading: 'Inside the fort today',
          paragraphs: [
            'Few buildings remain inside today. Visitors mostly see open laterite ground, low walling and the edges of the plateau, with the river mouth, the beaches and the sea spread around them. Because so little of the interior survives, the architecture is read from the outline of the defences rather than from roofs and rooms.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What stone is Chapora Fort built from?',
          a: 'The fort is built of laterite, the reddish local stone used widely in Goan heritage buildings.'
        },
        {
          q: 'Why are the walls irregular?',
          a: 'Official descriptions say the walls follow the natural slopes of the hill, which gives the defences their irregular, contour-following shape.'
        }
      ],
      verifyNote:
        'Independent guide; historical accounts and any current access details should be confirmed against the linked Government of Goa and GTDC pages before travelling.'
    },
    kok: {
      title: 'चापोरा किल्ल्याची बांदावळ: लेटरायट आनी वण्टी',
      h1: 'चापोरा किल्ल्याची बांदावळ: लेटरायट, वण्टी आनी बचाव',
      description:
        'चापोरा किल्ल्याचें लेटरायट फातर, दोंगराच्या तळवणीक वचपी वण्टी, बेऱ्याबेऱ्याय बुरूज आनी तोफांखातीर खोल सुवातो हाचेर एक नदर.',
      intro: [
        'चापोरा किल्लो लेटरायट ह्या तांबड्या स्थानीक फातरान बांदला, आनी गोव्याच्या वारसा-बांदावळींत हो फातर खूब दिसता. आधिकृत वर्णना प्रमाणें ताच्यो वण्टी दोंगराच्या सैमीक तळवणीकडेन वतात, कडक भूमितीच्या आराखड्याप्रमाणें न्हय; आनी बचावांत बेऱ्याबेऱ्याय बुरूज आनी तोफांखातीर खोल सुवातो आस्पावतात.',
        'हो आराखडो भूंयरूपाक अनुसरून आसलो: एके वटेन न्हंयचें तोंड, पलतडी अरबी दर्या, आनी लागीं येवपी वाटो नदरेखाला दवरपाची गरज. आंत आयज कांय इमारती उरल्यात, देखून उरिल्ल्यो वण्टी आनी पठाराचो आकार होच मुखेल वाचपाचो भाग. वण्टी-वण्टी भोंवप हो आराखडो समजपाचो सगळ्यांत बरो मार्ग.'
      ],
      sections: [
        {
          heading: 'लेटरायट: स्थानीक बांदपाचो फातर',
          paragraphs: [
            'लेटरायट हो लोखणयुक्त मोव फातर गोव्यांत सगळेकडेन मेळटा, आनी हवेच्या संपर्कान तो घट जाता. तो वापरलो म्हणजे किल्लो लागसारच्या सामग्रीन बांदूंक मेळटालो, पयसून हाडिल्ल्या फातरान न्हय. ताचो उबदार तांबडो रंग आता किल्ल्याच्या फोटोचो भाग जाला, चड करून सांजवेळार, आनी देखूनूच अवशेश दोंगरांत विलीन जातात अशें दिसता.'
          ]
        },
        {
          heading: 'दोंगराक अनुसरपी वण्टी',
          paragraphs: [
            'आधिकृत वर्णना प्रमाणें वण्टी कडक आयताकृती बांदपाऐवजी सैमीक तळवणीकडेन वतात. हो बचावाचो सवय आसा: तळवणीक अनुसरपी वण्टी भूंयच आपूण हल्लेकाराक मंद करता. भोंवडेकारांखातीर हाचो अर्थ — किल्लो एकच व्हड भोवतो दाखयना, पूण पठाराभोंवतणी वण्टी आनी कडयांचो एक वण्टी-वळसो दाखयता, आनी नदर ताका लागून भोंवडी मारूंक लागता.'
          ]
        },
        {
          heading: 'बुरूज आनी तोफांच्यो सुवातो',
          paragraphs: [
            'बचावांत बेऱ्याबेऱ्याय बुरूज आनी तोफांखातीर खोल सुवातो आसात. बुरूज भायर वतात, देखून राखणदार लागसारची वण्टी आडावंक शकतात, आनी खोल माचयो जड तोफांक स्थिर जमीन दितात. आधिकृत सारांश हीं लक्षणां बारीकायेबगर सांगतात, देखून आकार आनी नेमक्यो सुवातो आराखड्यापरस हांगाच आंदल्यार बरे.'
          ]
        },
        {
          heading: 'आयज किल्ल्याच्या आंत',
          paragraphs: [
            'किल्ल्यांत आयज कांय इमारती उरल्यात. भोंवडेकारांक चड करून मोकळी लेटरायट जमीन, सकयल वण्टी आनी पठाराच्यो कडयो दिसतात; भोंवतणी न्हंयचें तोंड, वाळवंटां आनी दर्या पातळ्ळा. आंत इतलें उरलां तितलें उणें, देखून बांदावळ म्हणजे छतां आनी खोल्यांपरस बचावाचो आराखडो वाचप.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्लो खंयच्या फातरान बांदला?',
          a: 'किल्लो लेटरायट ह्या तांबड्या स्थानीक फातरान बांदला, आनी तो गोव्याच्या वारसा-इमारतींनी सगळेकडेन वापरतात.'
        },
        {
          q: 'वण्टी बेऱ्याबेऱ्याय कित्याक आसात?',
          a: 'आधिकृत वर्णना प्रमाणें वण्टी दोंगराच्या सैमीक तळवणीकडेन वतात, आनी देखूनूच बचावाक तळवणीक अनुसरपी बेऱ्याबेऱ्याय आकार मेळटा.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; इतिहासीक म्हायती आनी सद्याची भेट-म्हायती प्रवासाक भायर सरचे आदीं जोडिल्ल्या गोवा सरकार आनी GTDC पानांनी तपासची.'
    }
  },
  {
    slug: 'ruins-and-tunnels',
    category: 'history',
    priority: 'P1',
    related: [
      'architecture',
      'history',
      'trail-and-climb',
      'with-kids'
    ],
    en: {
      title: 'Chapora Fort Ruins and Its Underground Passages',
      h1: 'The Ruins of Chapora Fort and the Underground Passages',
      description:
        'What survives at Chapora Fort today, the underground passages the Portuguese added, and how to explore the ruins safely and respectfully.',
      intro: [
        'Visitors often expect a complete fortress and find a ruin: at Chapora Fort, few buildings remain inside, and the main experience is the ramparts, the open plateau, the river mouth, the beaches and the sunset.',
        'According to official descriptions, the Portuguese added underground passages during rebuilding, and these belong to the fort’s story. They are not a casual attraction. Treat any opening as unstable and off-limits, and stay on the clear, walked paths. Parts of the site are unprotected heritage, so care and respect matter as much as curiosity.'
      ],
      sections: [
        {
          heading: 'What remains today',
          paragraphs: [
            'Inside the fort, little is left standing. What survives is mainly laterite walling, broken bastions and the open shape of the plateau above the river mouth. Visitors read the site from these outlines and from the surrounding views rather than from complete buildings, which is exactly why the ramparts and the ground itself are the main things to look at.'
          ]
        },
        {
          heading: 'The underground passages',
          paragraphs: [
            'Official descriptions mention that underground passages were added during a period of rebuilding. Such passages are usually understood as a way to move people or stores without being seen, and they fit the fort’s defensive purpose. The details — how many, how far they run, and whether any part is safe to see — are not verified here, and they should be confirmed with the authorities rather than guessed from a visit.'
          ]
        },
        {
          heading: 'Safe and responsible visiting',
          paragraphs: [
            'The ground is uneven and parts of the site are unprotected, so safety comes first. Do not climb into openings, rubble or anything that looks like a passage entrance. Stay on clearly walked routes, watch where you step near edges, and take extra care when the stone is wet. Leaving no litter and disturbing nothing keeps the fort open and intact for everyone who comes after you.'
          ],
          bullets: [
            'Stick to clear, walked paths; keep away from the edges.',
            'Do not enter tunnels, openings or rubble.',
            'Rocks are slippery when wet; take care, especially in the monsoon.',
            'Carry water and sun protection.',
            'Take your litter away and respect the heritage site.',
            'Do not disturb wildlife or vegetation.'
          ]
        },
        {
          heading: 'A legend, clearly labelled',
          paragraphs: [
            'GTDC mentions a story about a monitor lizard at the fort. This is a legend, not a verified fact, and it should always be described as a legend. Stories like this add colour to a place, but they should never be repeated as though they were history. Enjoy the tale, keep the label, and leave room for the documented record beside it.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Can I go into the underground passages?',
          a: 'No — any opening or tunnel should be treated as unstable and off-limits; keep to the clear paths and confirm access questions with the authorities.'
        },
        {
          q: 'Is the legend about the monitor lizard true?',
          a: 'It is a legend mentioned by GTDC and is not a verified fact, so it should be described as a legend rather than as history.'
        }
      ],
      verifyNote:
        'Independent guide; historical accounts and any current access details should be confirmed against the linked Government of Goa and GTDC pages before travelling.'
    },
    kok: {
      title: 'चापोरा किल्ल्याचीं अवशेशां आनी भुयारां',
      h1: 'चापोरा किल्ल्याचीं अवशेशां आनी भुयारी मार्ग',
      description:
        'आयज चापोरा किल्ल्यार कितें उरलां, पोर्तुगेजांनी जोडिल्लीं भुयारां, आनी अवशेशां सुरक्षित आनी आदरान पळोवप कसो हाची म्हायती.',
      intro: [
        'भोंवडेकार चड करून पुराय किल्ल्याची अपेक्षा करतात, पूण हांगा अवशेशां मेळटात: चापोरा किल्ल्यांत आयज कांय इमारती उरल्यात, आनी मुखेल अनुभव म्हणजे वण्टी, मोकळो पठार, न्हंयचें तोंड, वाळवंटां आनी सूर्यास्त.',
        'आधिकृत वर्णना प्रमाणें पुनर्रचणुके वेळार पोर्तुगेजांनी भुयारी मार्ग जोडले, आनी ते किल्ल्याच्या इतिहासाचो एक भाग. पूण ते साद्या भोंवडेची सुवात न्हय. खंयचोय वाट अस्थिर आनी भितर सरूंक नशक्य मानून टाळचो; स्पश्ट, चलिल्ल्या वाटांरूच चलचें. एका-एका जाग्यार सुवात असंरक्षित वारसो आसा, देखून कुतूहलाबरोबरच काळजी आनी आदर गरजेचो.'
      ],
      sections: [
        {
          heading: 'आयज कितें उरलां',
          paragraphs: [
            'किल्ल्याच्या आंत उभें उरिल्लें उणें आसा. जे उरलां तें मुखेलपणान लेटरायट वण्टी, फुटिल्ले बुरूज आनी न्हंयच्या तोंडार मोकळ्या पठाराचो आकार. भोंवडेकार ही सुवात ह्या आराखड्यांतल्यान आनी भोंवतणच्या दृश्यांतल्यान वाचतात, पुराय इमारतींतल्यान न्हय; देखूनूच वण्टी आनी जमीन होच पळोवपाचो मुखेल भाग.'
          ]
        },
        {
          heading: 'भुयारी मार्ग',
          paragraphs: [
            'आधिकृत वर्णना प्रमाणें पुनर्रचणुके काळार भुयारी मार्ग जोडले. अशे मार्ग सादारणपणान लोक वा सामान दिसनासतना हालोवपाखातीर आसतात, आनी ते किल्ल्याच्या बचावी हेतूकडेन जुळतात. पूण कितले, कितले लांब, आनी खंयचो भाग पळोवपाक सुरक्षित — हें हांगा तपासिल्लें ना; अदमास लावपाऐवजी अधिकाऱ्यांकडेन खात्री करची.'
          ]
        },
        {
          heading: 'सुरक्षित आनी जबाबदार भेट',
          paragraphs: [
            'जमीन असमतोळ आसा आनी एका-एका जाग्यार सुवात असंरक्षित आसा, देखून पयलीं सुरक्षितताय. खुल्ल्या वाटांत, ढिगारांत वा भुयाराचो दारो दिसपी खंयच्याय जाग्यार सरूंक नाकात. स्पश्ट चलिल्ल्या वाटांरूच चलात, कडये लागसार पावल काळजीपूर्वक दवरात, आनी फातर भिजिल्लो आसतना खूब जतनाय घेयात. कचरो न दवरप आनी कितेंय न हालोवप हें किल्लो सगळ्यांखातीर उगतो आनी अभंग दवरता.'
          ],
          bullets: [
            'स्पश्ट, चलिल्ल्या वाटांरूच चलात; कडये-लागसार वचूंक नाकात.',
            'भुयारां, खुल्ले वाट वा ढिगार हातूंत सरूंक नाकात.',
            'भिजिल्लो फातर सरकट आसता; जतनाय घेयात, चड करून पावसाळ्यांत.',
            'उदक आनी सूर्य-संरक्षण सांगाता दवरात.',
            'कचरो घेवन वचात आनी वारसा-सुवातीचो आदर करात.',
            'जिवी-जनावरां वा वनस्पतींक त्रास दिवंक नाकात.'
          ]
        },
        {
          heading: 'स्पश्टपणान मांडिल्ली एक दंतकथा',
          paragraphs: [
            'GTDC चापोरा किल्ल्यार एका मॉनिटर सरड्या विशींची गोश्ट सांगता. ही एक दंतकथा (legend) आसा, तपासिल्लें तथ्य न्हय, आनी ती सदांच दंतकथा म्हणूनच मांडची. अशो काणयो सुवातेक रंग भरतात, पूण ती इतिहास सारकीं सांगूंक फावनात. काणी भोगात, पूण ‘दंतकथा’ हो शेरो दवरात, आनी ताचे वांगडा नोंदिल्ल्या इतिहासाक जागो दवरात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'भुयारी मार्गांत भितर वचूंक मेळटा?',
          a: 'ना — खंयचोय वाट वा भुयार अस्थिर आनी भितर सरूंक नशक्य मानचो; स्पश्ट वाटांरूच चलात आनी प्रवेशाचे प्रस्न अधिकाऱ्यांकडेन विचारात.'
        },
        {
          q: 'मॉनिटर सरड्या विशींची गोश्ट खरी?',
          a: 'ती GTDC नोंद करता तशी एक दंतकथा आसा, तपासिल्लें तथ्य न्हय, देखून ती इतिहास म्हणून न्हय तर दंतकथा म्हणूनच सांगची.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; इतिहासीक म्हायती आनी सद्याची भेट-म्हायती प्रवासाक भायर सरचे आदीं जोडिल्ल्या गोवा सरकार आनी GTDC पानांनी तपासची.'
    }
  },
  {
    slug: 'chapora-river-strategic-location',
    category: 'history',
    priority: 'P1',
    related: [
      'history',
      'portuguese-maratha-conflicts',
      'architecture',
      'fort-to-vagator-beach'
    ],
    en: {
      title: 'Why Chapora Fort Stands at the River Mouth',
      h1: 'The Strategic Location of Chapora Fort',
      description:
        'Why the Portuguese built Chapora Fort on a hill above the Chapora river mouth, and how the terrain served border defence in North Goa.',
      intro: [
        'Chapora Fort stands on a hill above the mouth of the Chapora river, with the Arabian Sea and Vagator beach below. That position was not accidental. A fort here could watch river traffic, scan the sea approaches and overlook the land route along the northern border of Portuguese Goa.',
        'The Government of Goa and GTDC both place the fort in this defensive role. Understanding the geography — the river, the ridge and the coastline — explains far more about the fort than any single date. It also explains why different powers fought for the same ground.'
      ],
      sections: [
        {
          heading: 'The river mouth',
          paragraphs: [
            'A river mouth is a natural gateway. Craft moving up or down the Chapora river and goods crossing the bar could all be observed from a fort on the neighbouring hill. Controlling that gateway meant more than guarding a road; it meant watching a route that linked the coast to the interior and gave real value to a small, exposed ridge.'
          ]
        },
        {
          heading: 'Guardianship of the sea approaches',
          paragraphs: [
            'The hill also looks outward to the Arabian Sea. In an age when the coast was approached by ship, a high position with a view of the water was a form of early warning. From the plateau, look toward the sea and you can still see how the fort sat between the river behind it and the open water ahead, covering both.'
          ]
        },
        {
          heading: 'A border ridge',
          paragraphs: [
            'Chapora lay along the northern edge of Portuguese territory, where rival powers held land inland. Official sources place the fort in a border-defence role, and its history of being taken and retaken supports that. The ground was valuable not because it was rich but because of where it sat — the boundary itself.'
          ]
        },
        {
          heading: 'How to read the view today',
          paragraphs: [
            'From the fort, visitors can see the river mouth, the beaches and the line of the coast. The view is the clearest explanation of why the fort is here at all. Take a moment at the ramparts to trace the river, then the sea, then the land behind you, and the defensive logic becomes obvious — and far more memorable than a list of dates.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What does Chapora Fort overlook?',
          a: 'It stands above the mouth of the Chapora river, with the Arabian Sea and Vagator beach below.'
        },
        {
          q: 'Why was this site chosen for a fort?',
          a: 'A hill above the river mouth let defenders watch river traffic, the sea approaches and the land route along the northern border of Portuguese Goa.'
        }
      ],
      verifyNote:
        'Independent guide; historical accounts and any current access details should be confirmed against the linked Government of Goa and GTDC pages before travelling.'
    },
    kok: {
      title: 'चापोरा किल्लो न्हंयच्या तोंडार कित्याक?',
      h1: 'चापोरा किल्ल्याची रणनीतीक सुवात',
      description:
        'चापोरा न्हंयच्या तोंडार दोंगुलार पोर्तुगेजांनी किल्लो कित्याक बांदलो, आनी उत्तर गोव्याच्या शिमेच्या बचावाक भूंयरूप कसें उपेगी पडलें.',
      intro: [
        'चापोरा किल्लो चापोरा न्हंयच्या तोंडार एका दोंगुलार उबो आसा, आनी ताच्या सकयल अरबी दर्या आनी वागातोर वाळवंट आसा. ही सुवात अचकीत नासली. हांगा आशिल्लो गड न्हंयची येरादारी, दर्याचे रस्ते आनी पोर्तुगेज गोव्याच्या उत्तरेकडच्या जमनी रस्त्याचेर नदर दवरूंक शकतालो.',
        'गोवा सरकार आनी GTDC दोनूय किल्ल्याक ह्या बचावी भूमिकेंत दवरतात. न्हंय, दोंगूल आनी दर्याचो किनारो हें भूगोल समजलो जाल्यार, खंयच्याय एका तारखेपरस किल्लो बरो समजता. देखूनूच वेगवेगळ्या सत्तांनी हेच सुवातेखातीर झगडलें.'
      ],
      sections: [
        {
          heading: 'न्हंयचें तोंड',
          paragraphs: [
            'न्हंयचें तोंड म्हणजे सैमीक दार. चापोरा न्हंयचेर वयर-सकयल वचपी होडी आनी वाळू-वाटेर व्हरपी सामान, हें सगळें लागसारच्या दोंगुलावयल्या गडांतल्यान नदरेखाला दवरूंक मेळटालें. त्या दाराचेर ताबो दवरप म्हणजे रस्त्याची राखण करपापरस चड; तो किनारो आनी आंतली वाट जोडपी वाट नदरेंत दवरप, आनी देखूनूच ल्हान, उक्त्या दोंगुलाक खरें मोल मेळटालें.'
          ]
        },
        {
          heading: 'दर्याच्या रस्त्यांची राखण',
          paragraphs: [
            'हो दोंगूल अरबी दर्याकडेनय पातळ्ळा. जेन्ना किनाऱ्याकडेन जहाजांन येताले तेन्ना, उदकाचेर नदर पडपी वयली सुवात ही एक तरेन पयलींच इशारो दिवपी साधन आशिल्ली. पठारावयल्यान दर्याकडेन पळेयात जाल्यार, किल्लो फाटल्यान न्हंय आनी मुखार मोकळें उदक हांचेमदीं बसून दोनूय सांबाळटालो, हें आयजूय दिसता.'
          ]
        },
        {
          heading: 'शिमेचो दोंगूल',
          paragraphs: [
            'चापोरा पोर्तुगेज प्रदेशाच्या उत्तरेच्या कडेर आशिल्लो, आनी आंत जमनीचेर प्रतिस्पर्धी सत्ता आसल्यो. आधिकृत स्रोत किल्ल्याक शिमेच्या बचावाची भूमिका दितात, आनी तो जिंकप-परत जिंकप हो इतिहास हेंच सुद्धा दाखयता. ही जमीन सोबीत आशिल्ली म्हणून मोलवान न्हय, तर ती जंय आशिल्ली — शिमा म्हणोच — देखून मोलवान आशिल्ली.'
          ]
        },
        {
          heading: 'आयज दृश्य कसें वाचचें',
          paragraphs: [
            'किल्ल्यावयल्यान भोंवडेकारांक न्हंयचें तोंड, वाळवंटां आनी किनाऱ्याची रेफ दिसता. किल्लो हांगा कित्याक आसा हें हो दृश्य सगळ्यांत स्पश्ट समजावन करता. वण्टी-लागसार एक क्षण थांबून पयलीं न्हंय, उपरांत दर्या, आनी मागीर आपल्या फाटल्यानची जमीन अशें एके वळेच मागोव्यान पळेयात — बचावाचें तर्कशास्त्र स्पश्ट जाता, आनी तारखांच्या यादीपरस खूब आठवणींत उरता.'
          ]
        }
      ],
      faqs: [
        {
          q: 'चापोरा किल्ल्यावयल्यान कितें दिसता?',
          a: 'तो चापोरा न्हंयच्या तोंडार वयल्या दोंगुलार आसा, आनी सकयल अरबी दर्या आनी वागातोर वाळवंट दिसता.'
        },
        {
          q: 'किल्ल्याखातीर ही सुवात कित्याक निवडली?',
          a: 'न्हंयच्या तोंडार वयलो दोंगूल राखणदारांक न्हंयची येरादारी, दर्याचे रस्ते आनी पोर्तुगेज गोव्याच्या उत्तरेकडचो जमनी रस्तो नदरेखाला दवरपाक मेळटालो.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; इतिहासीक म्हायती आनी सद्याची भेट-म्हायती प्रवासाक भायर सरचे आदीं जोडिल्ल्या गोवा सरकार आनी GTDC पानांनी तपासची.'
    }
  },
  {
    slug: 'dil-chahta-hai-fort',
    category: 'history',
    priority: 'P0',
    related: [
      'history',
      'best-time-and-sunset',
      'fort-to-vagator-beach',
      'trail-and-climb'
    ],
    en: {
      title: 'Chapora Fort: The Dil Chahta Hai Film Location',
      h1: 'The “Dil Chahta Hai” Fort: Chapora Fort, Goa',
      description:
        'Why Chapora Fort is called the Dil Chahta Hai Fort, where the 2001 film scenes were shot, and how fans can plan a respectful visit.',
      intro: [
        'Chapora Fort is widely known as the “Dil Chahta Hai Fort” because scenes from the 2001 Hindi film Dil Chahta Hai were filmed here. For many Indian travellers the fort became a place to recreate a favourite moment, and the nickname now travels with it on maps and in conversation.',
        'The setting suits a film: a laterite ridge above the Chapora river mouth, with the Arabian Sea and the beaches below. Fans should remember that this is also a heritage site with uneven ground, so a good visit mixes the film memory with care for the place.'
      ],
      sections: [
        {
          heading: 'Why the nickname stuck',
          paragraphs: [
            'A film can rename a place in everyday speech, and that is what happened here. Long after 2001, “Dil Chahta Hai Fort” appears beside the fort’s real name on maps and in travel talk. The nickname is useful but incomplete: it points to one famous moment, while the fort also carries four centuries of history, from Portuguese construction to Maratha sieges and final abandonment in 1892.'
          ]
        },
        {
          heading: 'The fort as a film setting',
          paragraphs: [
            'It is easy to see why a filmmaker would choose this ridge. The open plateau above the river mouth gives wide sky, sea and coastline, and the laterite walls add texture and age. Scenes filmed here worked with the real landscape rather than replacing it, which is part of why the location still feels recognisable to visitors who saw the film.'
          ]
        },
        {
          heading: 'A fan’s visiting guide',
          paragraphs: [
            'Fans usually come for the atmosphere and the photographs. The best approach is simple: arrive with enough time to walk the ramparts, expect uneven ground, and be considerate if others are also there for the same scenes. Popular moments can draw crowds, so plan around peak times and keep the site clean. Check current opening arrangements locally before travelling, as official listings and on-site practice can differ.'
          ],
          bullets: [
            'Recreate film moments without blocking or crowding others.',
            'Stay away from edges; the ground is uneven.',
            'Sunsets are busy — arrive early if you want space.',
            'Carry your litter away and keep the site tidy.',
            'Confirm current access and any fees locally before travelling.'
          ]
        },
        {
          heading: 'Heritage first',
          paragraphs: [
            'The film made the fort famous, but the fort is older and more fragile than the film. It is a heritage site with unprotected edges and thin surviving structures. Treating it with care keeps the experience good for the next fan, the next historian and the next local visitor alike. Enjoy the memory the film created, and give the place the respect its history deserves.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Was Dil Chahta Hai filmed at Chapora Fort?',
          a: 'Yes — scenes from the 2001 Hindi film Dil Chahta Hai were filmed at the fort, which is why it is called the Dil Chahta Hai Fort.'
        },
        {
          q: 'Is there a ticket for the film spot?',
          a: 'The fort is a public heritage site; check current access and any fees locally before travelling, as we do not publish unverified figures.'
        }
      ],
      verifyNote:
        'Independent guide; historical accounts and any current access details should be confirmed against the linked Government of Goa and GTDC pages before travelling.'
    },
    kok: {
      title: 'चापोरा किल्लो: Dil Chahta Hai चित्रपटाची सुवात',
      h1: '“Dil Chahta Hai” किल्लो: गोव्यांतलो चापोरा किल्लो',
      description:
        'चापोरा किल्ल्याक Dil Chahta Hai किल्लो कित्याक म्हणतात, 2001 वर्साच्या चित्रपटाचीं दृश्यां खंय घेतलीं, आनी चाहत्यांनी आदरान भेट कशी नियोजची.',
      intro: [
        'चापोरा किल्लो ‘Dil Chahta Hai Fort’ म्हणून सगळ्यांक खबर आसा, कारण 2001 वर्साच्या हिंदी चित्रपटा Dil Chahta Hai चीं कांय दृश्यां हांगा घेतलीं. खूब भारतीय भोंवडेकारांक हो किल्लो एक आवडटो खणाचो अशो जागो जालो, आनी हो उपनांव आता नकाशांनी आनी उलोवपांत ताचे वांगडा वता.',
        'सुवात चित्रपटाक सुसंगत आसा: चापोरा न्हंयच्या तोंडार एक लेटरायट दोंगूल, आनी सकयल अरबी दर्या आनी वाळवंटां. पूण चाहत्यांनी आठवचें की ही एक वारसा-सुवात आनी जमीन असमतोळ आसा, देखून बरी भेट म्हणजे चित्रपटाची आठवण आनी सुवातेची काळजी हांचो संगम.'
      ],
      sections: [
        {
          heading: 'उपनांव कसो रुजलो',
          paragraphs: [
            'चित्रपट एके सुवातेक रोजच्या उलोवपांत नवें नांव दिवंक शकता, आनी हांगा तेंच जालें. 2001 चे खूब उपरांत ‘Dil Chahta Hai Fort’ किल्ल्याच्या खऱ्या नांवा-लागसार नकाशांनी आनी भोंवडेच्या उलोवपांत दिसता. हो उपनांव उपेगी पूण अपुरो: तो एका नामनेच्या क्षणाकडेन व्हरता, जाल्यार किल्ल्याचेर पोर्तुगेज बांदकामा ते मराठ्यांचे हल्ले आनी 1892 चो निमाणो त्याग मेरेन चार शेंकडे इतिहास आसा.'
          ]
        },
        {
          heading: 'चित्रपटाची पार्श्वभूमी म्हणून किल्लो',
          paragraphs: [
            'चित्रकार हेच दोंगुलाक कित्याक वेंचतलो हें समजप सोपें. न्हंयच्या तोंडार मोकळो पठार व्हड आकाश, दर्या आनी किनारो दिता, आनी लेटरायट वण्टी तेखातीर आकार आनी जुनेंपण जोडता. हांगा घेतिल्लीं दृश्यां खऱ्या दृश्यावांगडा जुळलीं, ताका बदलून न्हय; देखूनूच चित्रपट पळयल्ल्या भोंवडेकारांक आयजूय ही सुवात वळखुपाक येता.'
          ]
        },
        {
          heading: 'चाहत्यांखातीर भेट-मार्गदर्शक',
          paragraphs: [
            'चाहते चड करून हवामान आनी फोटोखातीर येतात. बरो मार्ग सादो आसा: वण्टी-वण्टी भोंवपाक पुरो वेळ घेवन येयात, जमीन असमतोळ आसा हें मानून चलात, आनी हेच दृश्यांखातीर हेर लोक येतात जाल्यार तांचो आदर करात. नामनेच्या क्षणांक गर्दी जाता, देखून गर्दीचे वेळ टाळात आनी सुवात सुती दवरात. प्रवासाक भायर सरचे आदीं सद्याची भेट-वेवस्था स्थानीक पातळेर तपासात, कारण आधिकृत यादी आनी हांगाची प्रत्यक्ष पद्दत वेगळी आसूं येता.'
          ],
          bullets: [
            'दुसऱ्यांक आड येवंक नासतना चित्रपटाचे क्षण परत करात.',
            'कडये-लागसार वचूंक नाकात; जमीन असमतोळ आसा.',
            'सूर्यास्ताक गर्दी जाता — जागो जाय जाल्यार लवकर पावात.',
            'कचरो घेवन वचात आनी सुवात निर्मळ दवरात.',
            'प्रवासाक भायर सरचे आदीं सद्याची भेट आनी फी स्थानीक पातळेर तपासात.'
          ]
        },
        {
          heading: 'पयलीं वारसो',
          paragraphs: [
            'चित्रपटान किल्ल्याक नामना दिली, पूण किल्लो चित्रपटापरस जूनो आनी नाजूक आसा. ही असंरक्षित कडयो आनी उणीं उरिल्लीं बांदावळ आशिल्ली वारसा-सुवात आसा. तिची काळजी घेतल्यार फुडल्या चाहत्याक, फुडल्या इतिहासकाराक आनी फुडल्या स्थानीक भोंवडेकाराक बरो अनुभव मेळटा. चित्रपटान निर्माण केल्ली आठवण भोगात, आनी सुवातेक तिच्या इतिहासाक साजो असो आदर दियात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Dil Chahta Hai चापोरा किल्ल्यार चित्रित जालो?',
          a: 'होय — 2001 वर्साच्या हिंदी चित्रपटाचीं कांय दृश्यां हांगा घेतलीं, देखून ताका Dil Chahta Hai किल्लो म्हणतात.'
        },
        {
          q: 'चित्रपट-सुवातेखातीर तिकेट आसा?',
          a: 'हो किल्लो एक सार्वजनिक वारसा-सुवात आसा; सद्याची भेट आनी फी स्थानीक पातळेर तपासात — हांगा तपासिल्लीं आंकडे दिवनात.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; इतिहासीक म्हायती आनी सद्याची भेट-म्हायती प्रवासाक भायर सरचे आदीं जोडिल्ल्या गोवा सरकार आनी GTDC पानांनी तपासची.'
    }
  },
  {
    slug: 'chapora-vs-aguada-fort',
    category: 'history',
    priority: 'P2',
    related: [
      'history',
      'architecture',
      'north-goa-forts-day-trip',
      'how-to-get-from-panaji'
    ],
    en: {
      title: 'Chapora Fort vs Fort Aguada: Which to Visit',
      h1: 'Chapora Fort or Fort Aguada? A North Goa Comparison',
      description:
        'Chapora Fort and Fort Aguada compared: history, scale, location and access, to help you choose which North Goa Portuguese fort to see.',
      intro: [
        'North Goa has two famous Portuguese forts: Chapora Fort, on a laterite hill above the Chapora river mouth in Vagator, and Fort Aguada, at the mouth of the Mandovi river near Candolim. Their histories, size and access differ.',
        'Chapora is a ruin of ramparts and open plateau with a celebrated sunset; Aguada is commonly described as larger and more intact, and includes a lighthouse. Many visitors see only one, so the choice depends on time, location and what you want from the day.'
      ],
      sections: [
        {
          heading: 'Two forts, two settings',
          paragraphs: [
            'The two forts sit at different river mouths and give completely different experiences. Chapora looks over the Chapora river and the beaches of Vagator and Anjuna, and is known for ruins and sunsets. Fort Aguada sits at the Mandovi mouth near Candolim, on the edge of the busier Candolim and Sinquerim side of North Goa. Neither replaces the other, and each rewards a different mood.'
          ]
        },
        {
          heading: 'History and scale',
          paragraphs: [
            'Both are Portuguese forts, but their stories and surviving fabric are not the same. Chapora’s key dates run from a 1617 construction through Maratha attacks in 1684 and 1739 to military abandonment in 1892, and it survives mainly as ramparts and an open plateau. Fort Aguada is commonly described as the larger and better-preserved of the two and includes a lighthouse. Treat these differences as general, and check official sources for specific claims.'
          ]
        },
        {
          heading: 'Access and location',
          paragraphs: [
            'Chapora is in Vagator, in Bardez taluka, reached from Anjuna, Vagator and Mapusa, with the fort set on a hill above the beach. Fort Aguada lies further south, near the Mandovi river mouth close to Candolim and Sinquerim. Because they are some distance apart on the North Goa coast, few visitors see both comfortably in a single short outing; a day trip is the realistic way to combine them.'
          ]
        },
        {
          heading: 'Which should you choose?',
          paragraphs: [
            'Choose Chapora if you want ruins, an open ridge, a river-mouth view and a well-known sunset, and if you are already in Vagator or Anjuna. Choose Aguada if you want a larger, more built-up fort and are staying near Candolim, Sinquerim or Panaji. If you have time and a vehicle, seeing both in one day gives the clearest sense of how the Portuguese defended these two different river mouths.'
          ],
          bullets: [
            'Chapora: Vagator, above the Chapora river mouth; ruins and an open plateau.',
            'Aguada: Mandovi river mouth near Candolim; commonly described as larger and more intact, with a lighthouse.',
            'Both are in North Goa but on different stretches of coast.',
            'Confirm hours, any fees and current access locally before travelling.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Which fort is bigger, Chapora or Aguada?',
          a: 'Fort Aguada is commonly described as the larger and better-preserved of the two; Chapora survives mainly as ramparts and an open plateau.'
        },
        {
          q: 'Are both forts in North Goa?',
          a: 'Yes — Chapora is in Vagator, Bardez, and Fort Aguada is near the Mandovi river mouth in North Goa.'
        }
      ],
      verifyNote:
        'Independent guide; historical accounts and any current access details should be confirmed against the linked Government of Goa and GTDC pages before travelling.'
    },
    kok: {
      title: 'चापोरा विरुद्ध Aguada किल्लो: खंय वचचें?',
      h1: 'चापोरा किल्लो वा Aguada? उत्तर गोव्याची तुळा',
      description:
        'चापोरा किल्लो आनी Fort Aguada हांची तुळा: इतिहास, आकार, सुवात आनी पोहोच, आनी खंयचो पोर्तुगेज किल्लो पळोवचो हें थारावपाक.',
      intro: [
        'उत्तर गोव्यांत दोन नामनेचे पोर्तुगेज किल्ले आसात: वागातोरांत चापोरा न्हंयच्या तोंडार लेटरायट दोंगुलार चापोरा किल्लो, आनी मांडवी न्हंयच्या तोंडार कांदोळीं लागसार Fort Aguada. तांचो इतिहास, आकार आनी पोहोच वेगळी.',
        'चापोरा म्हणजे अवशेश — वण्टी आनी मोकळो पठार, आनी नामना जोडिल्लो सूर्यास्त. Aguada सामान्यपणान चड व्हड आनी चड बाळगिल्लो अशें सांगतात, आनी तातूंत एक दीपगृह आसा. खूब भोंवडेकार एकूच किल्लो पळोवतात, देखून निवड वेळ, सुवात आनी दिसाची अपेक्षा हांचेर आदारून आसता.'
      ],
      sections: [
        {
          heading: 'दोन किल्ले, दोन सुवाती',
          paragraphs: [
            'दोनूय किल्ले वेगवेगळ्या न्हंयच्या तोंडार आसात आनी पुराय वेगळो अनुभव दितात. चापोरा चापोरा न्हंय आनी वागातोर-अंजुना वाळवंटांकडेन पातळ्ळा, आनी तो अवशेश आनी सूर्यास्ताखातीर खबर आसा. Fort Aguada मांडवी न्हंयच्या तोंडार, कांदोळीं लागसार, उत्तर गोव्याच्या चड गर्दीच्या कांदोळीं-सिंक्वेरिम वाठाराच्या कडेर आसा. एक दुसऱ्याक पर्याय न्हय, आनी दर एक वेगळ्या मनःस्थितीक साजो जाता.'
          ]
        },
        {
          heading: 'इतिहास आनी आकार',
          paragraphs: [
            'दोनूय पोर्तुगेज किल्ले, पूण तांची काणी आनी उरिल्ली बांदावळ सारकी न्हय. चापोराच्यो मुखेल तारखो 1617 च्या बांदकामा ते 1684 आनी 1739 चे मराठा हल्ले, आनी 1892 चो सैन्य-त्याग मेरेन वतात, आनी तो मुखेलपणान वण्टी आनी मोकळो पठार म्हणून उरला. Fort Aguada दोनूय परस चड व्हड आनी चड बाळगिल्लो अशें सामान्यपणान सांगतात, आनी तातूंत एक दीपगृह आसा. हे फरक सादारण मानात, आनी नेमक्या दाव्यांखातीर आधिकृत स्रोत तपासात.'
          ]
        },
        {
          heading: 'पोहोच आनी सुवात',
          paragraphs: [
            'चापोरा बार्देश तालुकांतल्या वागातोरांत आसा, आनी अंजुना, वागातोर वा मापुसा हांगाच्यान पावपाक मेळटा; किल्लो वाळवंटाच्या वयल्या दोंगुलार आसा. Fort Aguada चड दक्षिणेक, मांडवी न्हंयच्या तोंडार कांदोळीं आनी सिंक्वेरिम लागसार आसा. उत्तर गोव्याच्या किनाऱ्याचेर दोनूय एकामेकांपसून पयस आसात, देखून एका ल्हान भोंवडेंत दोनूय पळोवप थोड्यांक सोपें जाता; दोनूय एकठांय करपाखातीर दिसाची भोंवड ही वास्तव मार्ग.'
          ]
        },
        {
          heading: 'खंयचो वेंचचो?',
          paragraphs: [
            'अवशेश, मोकळो दोंगूल, न्हंयचें दृश्य आनी एक नामनेचो सूर्यास्त जाय जाल्यार, आनी तुमी आदींच वागातोर वा अंजुना हांगा आसल्यार, चापोरा वेंचात. चड व्हड, चड बांदिल्लो किल्लो जाय जाल्यार, आनी तुमी कांदोळीं, सिंक्वेरिम वा पणजी लागसार रावतात जाल्यार, Aguada वेंचात. वेळ आनी वाहन आसल्यार, एकाच दिसा दोनूय पळोवप हें दोन वेगळ्या न्हंय-तोंडांक पोर्तुगेजांनी कसो बचावलो हाचो सगळ्यांत स्पश्ट बोध दिता.'
          ],
          bullets: [
            'चापोरा: वागातोर, चापोरा न्हंयच्या तोंडार वयल्यान; अवशेश आनी मोकळो पठार.',
            'Aguada: मांडवी न्हंयचें तोंड, कांदोळीं लागसार; चड व्हड आनी बाळगिल्लो अशें सांगतात, आनी एक दीपगृह आसा.',
            'दोनूय उत्तर गोव्यांत आसात, पूण किनाऱ्याच्या वेगवेगळ्या वाट्यार.',
            'प्रवासाक भायर सरचे आदीं वेळ, फी आनी सद्याची परवानगी स्थानीक पातळेर तपासात.'
          ]
        }
      ],
      faqs: [
        {
          q: 'खंयचो व्हड, चापोरा वा Aguada?',
          a: 'Fort Aguada दोनूय परस चड व्हड आनी चड बाळगिल्लो अशें सामान्यपणान सांगतात; चापोरा मुखेलपणान वण्टी आनी मोकळो पठार म्हणून उरला.'
        },
        {
          q: 'दोनूय उत्तर गोव्यांत आसात?',
          a: 'होय — चापोरा वागातोरांत आनी Fort Aguada मांडवी न्हंयच्या तोंडार उत्तर गोव्यांत.'
        }
      ],
      verifyNote:
        'स्वतंत्र मार्गदर्शक; इतिहासीक म्हायती आनी सद्याची भेट-म्हायती प्रवासाक भायर सरचे आदीं जोडिल्ल्या गोवा सरकार आनी GTDC पानांनी तपासची.'
    }
  }
];
