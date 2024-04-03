function arabictransliterate(input, direction, language) {
  if (direction == null || direction == undefined || direction == "latin2arabic") {
    let latinToArabic;
    let vowels;
    const latinVowels = ['a','e','i','o','u','y','ā','ē','ī','ō','ū']; // Letters with Macron
    // 'A','E','I','O','U','Y','Ā','Ē','Ī','Ō','Ū'

    const textVocalisation = ["\uFE70","\uFE71","\uFE72","\uFE74","\u08F0","\u08F1","\u08F2","\u064C","\u064D","\u064B"," ࣰ","ࣱ","ࣲ","\u064E","\u0618","\uFE76","\uFE77","\u064F","\u0619","\uFE78","\uFE79","\u0650","\uFE7A","\uFE7B","\u061A","◌ٰ","◌ٖ"];
    const shaddaForms = ["\uFC5E","\uFC60","\uFC61","\uFC62","\uFC63","\uFCF2","\uFCF3","\uFCF4","\uFC5F","\u0651","\uFE7D","\uFE7C"];

    const nonjoining = ["ء","ا","آ","د","ذ","ر","ز","و"];

    if (language == "Arabic") {
      const ijmesArabic = {"0":"٠","1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦","7":"٧","8":"٨","9":"٩"
      ," ":" ",".":"۔", ",":"،", ";":"؛","?":"؟","!":"!","\"":"\"","'":"'","(":"﴿",")":"﴾",":":"؞","+":"+","=":"=","/":"؍","<":"<",">":">","*":"٭","|":"|","\\":"\\","€":"﷼","{":"{","}":"}","[":"[","]":"]","_":"_","-":"","%":"%","@":"@","ˆ":"ˆ","`":"`","´":"´","˜":"˜","·":"·","˙":"˙","¯":"¯","¨":"¨","˚":"˚","˝":"˝","ˇ":"ˇ","¸":"¸","˛":"˛","˘":"˘","’":"’","§":"؎","ʾ":"ء","b":"ب","B":"ب","p":"","P":"","t":"ت","T":"ت","th":"ث","Th":"ث","ch":"","Ch":"","j":"ج","J":"ج","ḥ":"ح","Ḥ":"ح","kh":"خ","Kh":"خ","d":"د","D":"د","dh":"ذ","Dh":"ذ","r":"ر","R":"ر","z":"ز","Z":"ز","s":"س","S":"س","sh":"ش","Sh":"ش","ṣ":"ص","Ṣ":"ص","ḍ":"ض","Ḍ":"ض","ṭ":"ط","Ṭ":"ط","ẓ":"ظ","Ẓ":"ظ","ʿ":"ع","gh":"غ","Gh":"غ","f":"ف","F":"ف","q":"ق","Q":"ق","k":"ك","K":"ك","g":"","G":"","l":"ل","L":"ل","m":"م","M":"م","n":"ن","N":"ن","h":"ه","H":"ه","w":"و","W":"و","y":"ي","Y":"ي","la":"ﻻ","la":"ﻼ"};
      const ijmesArabicVowels = {"a":"ا","A":"ا","i":"ا","I":"ا","u":"ا","U":"ا","ā":"ا","Ā":"ا","āʾ":"ئ","ay":"ای","Ay":"ای","ū":"و","Ū":"و","ī":"ي","Ī":"ي","ʾī":"ئي","ʾĪ":"ئي","iyy":"ّيِ","Iyy":"ّيِ","uvv":"ّوُ","Uvv":"ّوُ","au":"وَ","Au":"وَ","aw":"وَ","Aw":"وَ","ai":"یَ","Ai":"یَ","ay":"یَ","Ay":"یَ","ʾu":"أُ","ʾa":"أَ","ʾā":"آ","ʾi":"إِ","ʾū":"ئُ","ʾu":"ؤُ","aʾ":"أْ","iʾ":"ئْ","uʾ":"ؤْ"};

      // Vocalised Vowels - "a":"\u064E","A":"\u064E","u":"\u064F","U":"\u064F","i":"\u0650","I":"\u0650"
      // Nunation - "in":"\uFE74","In":"\uFE74","un":"\uFE72","Un":"\uFE72","an":"\uFE70","An":"\uFE70"
      // "ū":"ّوُ","Ū":"ّوُ"
      // ā = a + "̄":"ا"

      latinToArabic = ijmesArabic;
      vowels = ijmesArabicVowels;
    }/* else if (language == "Persian") {
      const ijmesPersian = {"0":"۰","1":"١","2":"٢","3":"٣","4":"۴","5":"۵","6":"۶","7":"٧","8":"٨","9":"٩"
      ," ":" ",".":"۔", ",":"،",";":"؛","?":"؟","!":"!","\"":"\"","'":"'","(":"﴿",")":"﴾",":":"؞","+":"+","=":"=","/":"؍","<":"<",">":">","*":"٭","|":"|","\\":"\\","€":"﷼","{":"{","}":"}","[":"[","]":"]","_":"_","-":"","%":"%","@":"@","ˆ":"ˆ","`":"`","´":"´","˜":"˜","·":"·","˙":"˙","¯":"¯","¨":"¨","˚":"˚","˝":"˝","ˇ":"ˇ","¸":"¸","˛":"˛","˘":"˘","’":"’","§":"؎","ʾ":"ء","b":"ب","B":"ب","p":"پ","P":"پ","t":"ت","T":"ت","s̲":"ث","S̲":"ث","j":"ج","J":"ج","ch":"چ","Ch":"چ","ḥ":"ح","Ḥ":"ح","kh":"خ","Kh":"خ","d":"د","D":"د","z̲":"ذ","Z̲":"ذ","r":"ر","R":"ر","z":"ز","Z":"ز","zh":"ژ","Zh":"ژ","s":"س","S":"س","sh":"ش","Sh":"ش","ṣ":"ص","Ṣ":"ص","ż":"ض","Ż":"ض","ṭ":"ط","Ṭ":"ط","ẓ":"ظ","Ẓ":"ظ","ʿ":"ع","gh":"غ","Gh":"غ","f":"ف","F":"ف","q":"ق","Q":"ق","k":"ك","K":"ك","g":"ك","G":"ك","g":"گ","G":"گ","l":"ل","L":"ل","m":"م","M":"م","n":"ن","N":"ن","h":"ه","H":"ه","v":"و","V":"و","U":"و","U":"و","y":"ي","Y":"ي"};
      const ijmesPersianVowels = {"a":"ا","A":"ا","i":"ا","I":"ا","u":"ا","U":"ا","ā":"ا","Ā":"ا","āʾ":"ئ","ay":"ای","Ay":"ای","ū":"و","Ū":"و","ī":"ی","Ī":"ی","ʾī":"ئي","ʾĪ":"ئي","iyy":"ّيِ","Iyy":"ّيِ","uvv":"ّوُ","Uvv":"ّوُ","au":"وَ","Au":"وَ","aw":"وَ","Aw":"وَ","ai":"یَ","Ai":"یَ","ay":"یَ","Ay":"یَ","ʾu":"أُ","ʾa":"أَ","ʾi":"إِ","ʾī":"ئي","ʾū":"ئُ","ʾu":"ؤُ","aʾ":"أْ","iʾ":"ئْ","uʾ":"ؤْ"};
      latinToArabic = ijmesPersian;
      vowels = ijmesPersianVowels;
    } else if (language == "OttomanTurkish") {
      const ijmesOttomanTurkish = {"0":"٠","1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦","7":"٧","8":"٨","9":"٩"
      ," ":" ",".":"۔", ",":"،",";":"؛","?":"؟","!":"!","\"":"\"","'":"'","(":"﴿",")":"﴾",":":"؞","+":"+","=":"=","/":"؍","<":"<",">":">","*":"٭","|":"|","\\":"\\","€":"﷼","{":"{","}":"}","[":"[","]":"]","_":"_","-":"","%":"%","@":"@","ˆ":"ˆ","`":"`","´":"´","˜":"˜","·":"·","˙":"˙","¯":"¯","¨":"¨","˚":"˚","˝":"˝","ˇ":"ˇ","¸":"¸","˛":"˛","˘":"˘","’":"’","§":"؎","ʾ":"ء","b":"ب","B":"ب","p":"پ","P":"پ","t":"ت","T":"ت","s̲":"ث","S̲":"ث","c":"ج","C":"ج","ç":"چ","Ç":"چ","ḥ":"ح","Ḥ":"ح","h":"خ","H":"خ","d":"د","D":"د","z̲":"ذ","Z̲":"ذ","r":"ر","R":"ر","z":"ز","Z":"ز","j":"ژ","J":"ژ","s":"س","S":"س","ş":"ش","Ş":"ش","ṣ":"ص","Ṣ":"ص","ż":"ض","Ż":"ض","ṭ":"ط","Ṭ":"ط","ẓ":"ظ","Ẓ":"ظ","ʿ":"ع","g":"غ","G":"غ","ğ":"غ","Ğ":"غ","f":"ف","F":"ف","ḳ":"ق","Ḳ":"ق","k":"ك","K":"ك","ñ":"ك","Ñ":"ك","ğ":"ك","Ğ":"ك","y":"ك","Y":"ك","g":"گ","G":"گ","l":"ل","L":"ل","m":"م","M":"م","n":"ن","N":"ن","h":"ه","H":"ه","v":"و","V":"و","y":"ي","Y":"ي"};
      const ijmesOttomanTurkishVowels = {"a":"ا","A":"ا","i":"ا","I":"ا","u":"ا","U":"ا","ā":"ا","Ā":"ا","āʾ":"ئ","ay":"ای","Ay":"ای","ū":"و","Ū":"و","ī":"ي","Ī":"ي","ʾī":"ئي","ʾĪ":"ئي","iy":"ّيِ","Iy":"ّيِ","uvv":"و-ُ","Uvv":"و-ُ","ev":"وَ","Ev":"وَ","ey":"یَ","Ey":"یَ","e":" َ","E":" َ","ü":" ُ","Ü":" ُ","o":" ُ","O":" ُ","ö":" ُ","Ö":" ُ","ı":" ِ","ʾu":"أُ","ʾa":"أَ","ʾi":"إِ","ʾū":"ئُ","ʾu":"ؤُ","aʾ":"أْ","iʾ":"ئْ","uʾ":"ؤْ"};
      latinToArabic = ijmesOttomanTurkish;
      vowels = ijmesOttomanTurkishVowels;
    } else if (language == "ModernTurkish") {
      const ijmesModernTurkish = {"0":"٠","1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦","7":"٧","8":"٨","9":"٩"
      ," ":" ",".":"۔", ",":"،",";":"؛","?":"؟","!":"!","\"":"\"","'":"'","(":"﴿",")":"﴾",":":"؞","+":"+","=":"=","/":"؍","<":"<",">":">","*":"٭","|":"|","\\":"\\","€":"﷼","{":"{","}":"}","[":"[","]":"]","_":"_","-":"","%":"%","@":"@","ˆ":"ˆ","`":"`","´":"´","˜":"˜","·":"·","˙":"˙","¯":"¯","¨":"¨","˚":"˚","˝":"˝","ˇ":"ˇ","¸":"¸","˛":"˛","˘":"˘","’":"’","§":"؎","b":"ب","B":"ب","p":"پ","b":"ب","P":"پ","B":"ب","t":"ت","T":"ت","s":"ث","S":"ث","c":"ج","C":"ج","ç":"چ","Ç":"چ","ḥ":"ح","Ḥ":"ح","h":"خ","H":"خ","d":"د","D":"د","z":"ذ","Z":"ذ","r":"ر","R":"ر","z":"ز","Z":"ز","j":"ژ","J":"ژ","s":"س","S":"س","ş":"ش","Ş":"ش","s":"ص","S":"ص","z":"ض","Z":"ض","t":"ط","T":"ط","z":"ظ","Z":"ظ","ġ":"غ","ġ":"غ","ğ":"غ","Ğ":"غ","f":"ف","F":"ف","k":"ق","K":"ق","k":"ك","K":"ك","ñ":"ك","Ñ":"ك","ğ":"ك","Ğ":"ك","y":"ك","Y":"ك","g":"گ","G":"گ","l":"ل","L":"ل","m":"م","M":"م","n":"ن","N":"ن","h":"ه","H":"ه","v":"و","V":"و","y":"ي","Y":"ي","ʿ":"","ʾ":""};
      const ijmesModernTurkishVowels = {"a":"ا","A":"ا","i":"ا","I":"ا","u":"ا","U":"ا","ā":"ا","Ā":"ا","āʾ":"ئ","ay":"ای","Ay":"ای","ū":"و","Ū":"و","ī":"ي","Ī":"ي","ʾī":"ئي","ʾĪ":"ئي","iy":"ّيِ","Iy":"ّيِ","uvv":"و-ُ","Uvv":"و-ُ","ev":"وَ","Ev":"وَ","ey":"یَ","Ey":"یَ","e":" َ","E":" َ","ü":" ُ","Ü":" ُ","o":" ُ","O":" ُ","ö":" ُ","Ö":" ُ","ı":" ِ","ʾu":"أُ","ʾa":"أَ","ʾi":"إِ","ʾū":"ئُ","ʾu":"ؤُ","aʾ":"أْ","iʾ":"ئْ","uʾ":"ؤْ"};
      latinToArabic = ijmesModernTurkish;
      vowels = ijmesModernTurkishVowels;
    }*/

    let resultAr = "";
    let textLa = input;

    // Normalising IJMES text to use default Letters with Macron and replace U+304 : COMBINING MACRON
    textLa = textLa.replaceAll('ā','ā').replaceAll('ē','ē').replaceAll('ī','ī').replaceAll('ō','ō').replaceAll('ū','ū');

    // TODO generic initial & final character position determination
    const initialPossibilities = [' ', '\n', '\u000A', ',', ' , ', ', ', '.', ' . ', '. ', ':', ': ', ' : ', ';', '; ', ' ; ', ''];
    const finalPossibilities = [' ', '\n', '\u000A', ',', ', ', '.', '. ', ':', ': ', ';', '; ', ''];

    for (let u = 0; u < textLa.length; u++) {
      if (textLa[u] && (textLa[u].indexOf("\n") > -1 || textLa[u] == "\n" || textLa[u] == "\u000A")) { // New Lines
        resultAr = resultAr + "\n";
      } else if ((textLa[u-2] == " " && latinToArabic[textLa[u] + textLa[u+1]] && textLa[u+2] == " ") || (textLa[u-2] == " " && latinToArabic[textLa[u] + textLa[u+1]] && textLa[u+2] == "\n") || (textLa[u-2] == "\n" && latinToArabic[textLa[u] + textLa[u+1]] && textLa[u+2] == " ") || (textLa[u-2] == " " && latinToArabic[textLa[u] + textLa[u+1]] && textLa[u+2] == undefined) || (textLa[u-2] == "\n" && latinToArabic[textLa[u] + textLa[u+1]] && textLa[u+2] == undefined) || (textLa[u-2] == undefined && latinToArabic[textLa[u] + textLa[u+1]] && textLa[u+2] == " ") || (textLa[u-2] == "\n" && latinToArabic[textLa[u] + textLa[u+1]] && textLa[u+2] == "\n") || (textLa[u-2] == undefined && latinToArabic[textLa[u] + textLa[u+1]] && textLa[u+2] == undefined)) { // Isolate Double consonant position 
        console.log("1. Isolate double consonant ", textLa[u], textLa[u+1], latinToArabic[textLa[u] + textLa[u+1]])
        if ((textLa[u] == "a" || textLa[u] == "i" || textLa[u] == "u") && textLa[u+1] == "n") { // Kasratan, Dammatan, Fathatan
          resultAr = (nonjoining.indexOf(latinToArabic[textLa[u-1]]) > -1 || nonjoining.indexOf(vowels[textLa[u-1]]) > -1) ?  resultAr + "ن" : resultAr + "ـن";
          u = u + 1;
        } else  if (latinToArabic[textLa[u] + textLa[u+1]]) {
          resultAr = resultAr.slice(0, -1) + latinToArabic[textLa[u] + textLa[u+1]];
          u = u + 1;
        }
      } else if ((textLa[u-2] == " " && vowels[textLa[u] + textLa[u+1]] && textLa[u+2] == " ") || (textLa[u-2] == " " && vowels[textLa[u] + textLa[u+1]] && textLa[u+2] == "\n") || (textLa[u-2] == "\n" && vowels[textLa[u] + textLa[u+1]] && textLa[u+2] == " ") || (textLa[u-2] == " " && vowels[textLa[u] + textLa[u+1]] && textLa[u+2] == undefined) || (textLa[u-2] == "\n" && vowels[textLa[u] + textLa[u+1]] && textLa[u+2] == undefined) || (textLa[u-2] == undefined && vowels[textLa[u] + textLa[u+1]] && textLa[u+2] == " ") || (textLa[u-2] == "\n" && vowels[textLa[u] + textLa[u+1]] && textLa[u+2] == "\n") || (textLa[u-2] == undefined && vowels[textLa[u] + textLa[u+1]] && textLa[u+2] == undefined)) { // Isolate Double vowel position 
        console.log("1. Isolate double vowel ",  textLa[u], textLa[u+1], vowels[textLa[u] + textLa[u+1]])
        resultAr = resultAr.slice(0, -1) + vowels[textLa[u] + textLa[u+1]];
      } else if ((textLa[u-1] == " " || textLa[u-1] == undefined || textLa[u-1] == "") && latinToArabic[textLa[u] + textLa[u+1]] && !((textLa[u] + textLa[u+1]) == "la" && (textLa[u+2] == "d" || textLa[u+2] == "m" || textLa[u+2] == "q"))) { // Initial Double Character position 
        console.log("2. Initial double consonant ", latinToArabic[textLa[u] + textLa[u+1]])
        resultAr = resultAr + latinToArabic[textLa[u] + textLa[u+1]]; 
        u = u + 1;
      } else if (textLa[u-1] != " " && textLa[u-1] && latinToArabic[textLa[u-1]] && textLa[u] && textLa[u] != " " && latinToArabic[textLa[u]] && textLa[u+1] == " ") { // Final Double Character position 
        if (textLa[u-1] == textLa[u] && textLa[u] != " " && textLa[u-3] == "n") {
          console.log("3. Final shadda -nann -ninn -nunn") // TODO
          resultAr = resultAr.slice(0, -2) + latinToArabic[textLa[u]] + "ّ" + " ";
          u = u + 1;
        } else if (textLa[u-1] == textLa[u] && textLa[u] != " ") {
          console.log("3. Final shadda ") 
          resultAr = resultAr.slice(0, -1) + latinToArabic[textLa[u]] + "ّ";
          u = u + 2;
        } else if (latinToArabic[textLa[u]] && textLa[u] == "n" && latinToArabic[textLa[u+1]]) {
          console.log("3. Final double consonant -n ", latinToArabic[textLa[u-1]], latinToArabic[textLa[u]] + latinToArabic[textLa[u+1]])
          resultAr = resultAr.slice(0, -1) + latinToArabic[textLa[u-1]] + latinToArabic[textLa[u]] + latinToArabic[textLa[u+1]];
          u = u + 1;  // final 'n'
        } else if (latinToArabic[textLa[u]] && textLa[u] != " " && latinToArabic[textLa[u+1]]) {
          console.log("3. Final double consonant ", latinToArabic[textLa[u-1]], latinToArabic[textLa[u]] + latinToArabic[textLa[u+1]])
          resultAr = resultAr.slice(0, -1) + latinToArabic[textLa[u-1]] + latinToArabic[textLa[u]] + latinToArabic[textLa[u+1]];
          u = u + 1;
        }
      } else if (textLa[u] && textLa[u+1] && vowels[textLa[u] + textLa[u+1]] && latinVowels.indexOf(textLa[u] + textLa[u+1]) > -1) { // Vowel Double Character
        console.log("4. Final double vowel ", vowels[textLa[u] + textLa[u+1]])
        resultAr = resultAr.slice(0, -1) + vowels[textLa[u] + textLa[u+1]];
        u = u + 1;
      } else if (textLa[u] && textLa[u+1] && latinToArabic[textLa[u] + textLa[u+1]] && textLa[u+2] != " ") { // Medial Position Double Character
        if(textLa[u-1] == "l" && (textLa[u] + textLa[u+1]) == "la" && (textLa[u+2] == "d" || textLa[u+2] == "m" || textLa[u+2] == "q")) {
          console.log("5. Medial consonant '-ll-' shadda")
          resultAr = resultAr.slice(0, -1) + latinToArabic[textLa[u]] + "ّ";
          u = u + 1;
        } else if((textLa[u] + textLa[u+1]) == "la" && (textLa[u+2] == "d" || textLa[u+2] == "m" || textLa[u+2] == "q")) {
          console.log("5. Medial consonant 'lam' 'lad' 'laq'")
          resultAr = resultAr + latinToArabic[textLa[u]];
          u = u + 1;
        } else if ((textLa[u-1] == "a" || textLa[u-1] == "-" || textLa[u-1] == "l") && (textLa[u] + textLa[u+1]) == "la") {
          if (textLa[u-1] == "l") {
            console.log("5. Medial double consonant 'lla' ", textLa[u-1], latinToArabic[textLa[u] + textLa[u+1]])
            resultAr = resultAr; 
          } else {
            console.log("5. Medial double consonant 'ala' ", textLa[u-1], latinToArabic[textLa[u] + textLa[u+1]])
            resultAr = resultAr + "ل"; 
          }
          u = u + 1;
        } else if (textLa[u-1] != "a" && (textLa[u] + textLa[u+1]) == "la") {
          console.log("5. Medial double consonant 'la' ", textLa[u-1], latinToArabic[textLa[u] + textLa[u+1]])
          resultAr = (nonjoining.indexOf(latinToArabic[textLa[u-1]]) > -1 || nonjoining.indexOf(vowels[textLa[u-1]]) > -1) ? resultAr + "ﻻ" : resultAr + "ﻼ"; 
          u = u + 1;
        } else if ((textLa[u] + textLa[u+1]) == (textLa[u-2] + textLa[u-1])) {
          console.log("5. Medial double consonant shadda ", latinToArabic[textLa[u] + textLa[u+1]])
          resultAr = resultAr.slice(0, -1) + latinToArabic[textLa[u] + textLa[u+1]] + "ّ";
          u = u + 1;
        } else if (latinToArabic[textLa[u] + textLa[u+1]] == "غ" && textLa[u+2] == "a" && textLa[u+3] == " ") {
          console.log("5. Final double consonant -gha ", latinToArabic[textLa[u] + textLa[u+1]])
          resultAr = resultAr + latinToArabic[textLa[u] + textLa[u+1]] + "ه"; // TODO - ch-  dh- sh- th-
          u = u + 1;
        } else if (latinToArabic[textLa[u] + textLa[u+1]] == "غ" && textLa[u+2] == "a") {
          console.log("5. Medial double consonant -gha ", latinToArabic[textLa[u] + textLa[u+1]])
          resultAr = resultAr + latinToArabic[textLa[u] + textLa[u+1]];  // TODO - ch-  dh- sh- th-
          u = u + 1;
        } else {
          console.log("5. Medial double consonant ", textLa[u-1], latinToArabic[textLa[u] + textLa[u+1]])
          resultAr = resultAr + latinToArabic[textLa[u] + textLa[u+1]];
          u = u + 1;
        }
      } else if (textLa[u] && vowels[textLa[u]] && textLa[u-1] && vowels[textLa[u-1] + textLa[u]]) { // Medial Position vowels Character
        console.log("5. Medial double vowels ", vowels[textLa[u-1] + textLa[u]])
        resultAr = resultAr.slice(0, -1) + vowels[textLa[u-1] + textLa[u]];
        //u = u + 1;
      } else if (textLa[u] && textLa[u+1] && textLa[u+2] && vowels[textLa[u] + textLa[u+1] + textLa[u+2]] && latinVowels.indexOf(textLa[u] + textLa[u+1] + textLa[u+2]) > -1) { // Vowel Triple Character
        console.log("6. Medial triple vowel ", vowels[textLa[u] + textLa[u+1] + textLa[u+2]])
        resultAr = resultAr.slice(0, -2) + vowels[textLa[u] + textLa[u+1] + textLa[u+2]];
        u = u + 2;
      } else if ((textLa[u-1] == " " && latinToArabic[textLa[u]] && textLa[u+1] == " ") || (textLa[u-1] == " " && latinToArabic[textLa[u]] && textLa[u+1] == "\n") || (textLa[u-1] == "\n" && latinToArabic[textLa[u]] && textLa[u+1] == " ") || (textLa[u-1] == " " && latinToArabic[textLa[u]] && textLa[u+1] == undefined) || (textLa[u-1] == "\n" && latinToArabic[textLa[u]] && textLa[u+1] == undefined) || (textLa[u-1] == undefined && latinToArabic[textLa[u]] && textLa[u+1] == " ") || (textLa[u-1] == "\n" && latinToArabic[textLa[u]] && textLa[u+1] == "\n") || (textLa[u-1] == undefined && latinToArabic[textLa[u]] && textLa[u+1] == undefined)) { // Isolate Single consonant position 
        console.log("7. Isolate consonant ", latinToArabic[textLa[u]])
        resultAr = resultAr + latinToArabic[textLa[u]];
      } else if ((textLa[u-1] == " " && vowels[textLa[u]] && textLa[u+1] == " ") || (textLa[u-1] == " " && vowels[textLa[u]] && textLa[u+1] == "\n") || (textLa[u-1] == "\n" && vowels[textLa[u]] && textLa[u+1] == " ") || (textLa[u-1] == " " && vowels[textLa[u]] && textLa[u+1] == undefined) || (textLa[u-1] == "\n" && vowels[textLa[u]] && textLa[u+1] == undefined) || (textLa[u-1] == undefined && vowels[textLa[u]] && textLa[u+1] == " ") || (textLa[u-1] == "\n" && vowels[textLa[u]] && textLa[u+1] == "\n") || (textLa[u-1] == undefined && vowels[textLa[u]] && textLa[u+1] == undefined)) { // Isolate Single vowel position 
        console.log("7. Isolate vowel ", vowels[textLa[u]])
        resultAr = resultAr + vowels[textLa[u]];
      } else if ((textLa[u-1] == " " || textLa[u-1] == undefined || textLa[u-1] == "") && textLa[u] && textLa[u] != " " && latinToArabic[textLa[u]]) { // Initial Consonant Character position 
        console.log("8. Initial consonant ", latinToArabic[textLa[u]])
        if (textLa[u] == "l" && textLa[u+1] == "-") {
          console.log("8. Initial consonant l- ", latinToArabic[textLa[u]])
          resultAr = resultAr + "ال";
        } else {
          resultAr = resultAr + latinToArabic[textLa[u]];
        }
      } else if ((textLa[u-1] == " " || textLa[u-1] == undefined || textLa[u-1] == "") && textLa[u] && textLa[u] != " " && vowels[textLa[u]]) { // Initial Vowel Character position 
        console.log("8. Initial vowel ", vowels[textLa[u]])
        resultAr = resultAr + vowels[textLa[u]];
      } else if ((textLa[u] && latinToArabic[textLa[u]] && textLa[u+1] && textLa[u+1] == " ") || (textLa[u] && latinToArabic[textLa[u]] && textLa[u+1] && textLa[u+1] == "\n") || (textLa[u] && latinToArabic[textLa[u]] && textLa[u+1] && textLa[u+1] == undefined)) { // Final Consonant Character position 
        if (textLa[u-2] != "h" && textLa[u-2] != "ʾ" && textLa[u-1] == "a" && latinToArabic[textLa[u]] == "ت") {
          console.log("8. Final consonant ta-marbuta 'at' ", latinToArabic[textLa[u]])
          resultAr = (nonjoining.indexOf(latinToArabic[textLa[u-1]]) > -1 || nonjoining.indexOf(vowels[textLa[u-1]]) > -1) ? resultAr + "ة" : resultAr + "ـة"; 
        } else if (((textLa[u-2] == "y" || textLa[u-2] == "ʾ") && textLa[u-1] == "ā") && latinToArabic[textLa[u]] == "ت") {
          console.log("8. Final consonant ta-marbuta 't' ", latinToArabic[textLa[u]])
          resultAr = (nonjoining.indexOf(latinToArabic[textLa[u-1]]) > -1 || nonjoining.indexOf(vowels[textLa[u-1]]) > -1) ? resultAr + "ة" : resultAr + "ـة"; 
        } else if (latinToArabic[textLa[u]] && latinToArabic[textLa[u+1]]) {
          console.log("8. Final consonant ", latinToArabic[textLa[u]], latinToArabic[textLa[u+1]])
          resultAr = resultAr + latinToArabic[textLa[u]] + latinToArabic[textLa[u+1]]; // TODO OT & MT "ه" is NOT final
        }
      } else if (textLa[u-1] && textLa[u] && textLa[u] != " " && textLa[u+1] != " " && vowels[textLa[u]] && latinVowels.indexOf(textLa[u]) > -1) { // Medial Position Vowel Character
        if ((textLa[u] == "a" || textLa[u] == "u") && textLa[u+1] == "n" && (textLa[u+2] == "" || textLa[u+2] == " " || textLa[u+2] == "\n" || textLa[u+2] == undefined)) { // final nunation position
          if (textLa[u-1] == "t") {
            console.log("9. Final nunation -tun or -tin or -tan ", textLa[u], textLa[u+1])
            resultAr = (nonjoining.indexOf(latinToArabic[textLa[u-1]]) > -1 || nonjoining.indexOf(vowels[textLa[u-1]]) > -1) ? resultAr + "ة" : resultAr + "ـة";
          } else if (textLa[u] == "a") {
            console.log("9. Final nunation -an ", textLa[u], textLa[u+1])
            resultAr = resultAr + "اً";
          } else {
            console.log("9. Final nunation ", textLa[u], textLa[u+1])
            resultAr = resultAr;
          }
          u = u + 1;
        } else if (textLa[u] != "a" && textLa[u] != "i" && textLa[u] != "u" && textLa[u+1] != " " && textLa[u-1] != "ʾ") { // long-vowel in medial position
          if (textLa[u-2] == "-" && textLa[u-1] == "l") {
            console.log("9. Medial long vowel ignored ", vowels[textLa[u]])
            resultAr = resultAr.slice(0, -2) + latinToArabic[textLa[u-1]];
          } else if (textLa[u-2] == "l" && textLa[u-1] == "-" && textLa[u] == "ī") {
            console.log("9. Medial long vowel al-ī ", vowels[textLa[u]])
            resultAr = resultAr.slice(0, -1) + "لإي";
          } else if (textLa[u-2] == "-" && textLa[u-1] == "h" && textLa[u] == "ā" && textLa[u+1] == "d" && textLa[u+2] == "h") {
            console.log("9. Medial long vowel ignore in hādh ", vowels[textLa[u]])
            resultAr = resultAr;
          } else {
            console.log("9. Medial long vowel ", vowels[textLa[u]])
            resultAr = resultAr + vowels[textLa[u]];
          }
        } else if (textLa[u] != "a" && textLa[u] != "i" && textLa[u] != "u" && textLa[u+1] != " " && textLa[u-1] == "ʾ") { // long-vowel in medial position
          console.log("9. Medial long vowel with hamza ", vowels[textLa[u]])
          resultAr = resultAr + vowels[textLa[u-1] + textLa[u]];
        } else if (textLa[u-1] == "-" && textLa[u] == "a" && textLa[u+1] == "l" && textLa[u+2] == "-") {
          console.log("9. Medial '-al-' after vowel ")
          resultAr = resultAr + "ال";
          u = u + 2;
        } else if (textLa[u-1] == "-" && textLa[u] == "a") {
          console.log("9. Medial 'la-' after vowel ", vowels[textLa[u]], textLa[u-1])
          resultAr = (nonjoining.indexOf(latinToArabic[textLa[u-1]]) > -1 || nonjoining.indexOf(vowels[textLa[u-1]]) > -1 || textLa[u-1] == "-") ? resultAr.slice(0, -1) + "ﻻ" : resultAr.slice(0, -1) + "ﻼ";
        } else if (textLa[u] == "a" && textLa[u+1] == "l" && textLa[u+1] == "-" && textLa[u+2] != "ā") {
          console.log("9. Medial 'al' vowel ", vowels[textLa[u]])
          resultAr = resultAr + vowels[textLa[u]];
        } else if (textLa[u] == "i" && textLa[u+1] == "-" && textLa[u+2] == "s" && textLa[u+3] == "t") {
          console.log("9. Medial 'i-st' vowel case")
          resultAr = resultAr + vowels[textLa[u]];
        } else if (textLa[u-1] == "m" && textLa[u] == "u" && textLa[u+1] == "q") {
          console.log("9. Medial 'muq' vowel case")
          resultAr = resultAr + "و";
        } else if (textLa[u-1] == "-" && textLa[u] == "u") {
          console.log("9. Medial '-u' vowel case")
          resultAr = resultAr.slice(0, -1) + "لا";
        } else if (textLa[u-3] == "a" && textLa[u-2] == "l" && textLa[u-1] == "-" && textLa[u] == "i") {
          console.log("9. Medial 'al-i' vowel case")
          resultAr = resultAr.slice(0, -1) + "لا";
        } else if (textLa[u] == "ī") {
          console.log("9. Medial 'ī' vowel case")
          resultAr = resultAr.slice(0, -1) + vowels[textLa[u]];
        }
      } else if (textLa[u-1] && textLa[u] && textLa[u] != " " && latinToArabic[textLa[u]]) { // Medial Position Consonant Character
        if (textLa[u-3] == "l" && textLa[u-1] == "-" && textLa[u] == "l" && textLa[u+1] == "-") {
          console.log("9. Medial consonant li-l- ", latinToArabic[textLa[u]])
          resultAr = resultAr + "ل";
        } else if (textLa[u-1] == "-" && textLa[u] == "l") {
          console.log("9. Medial consonant -l- ", latinToArabic[textLa[u]])
          resultAr = resultAr + "ال";
        } else if (textLa[u-3] == "ʿ" && textLa[u-2] == "a" && textLa[u-1] == textLa[u] && textLa[u] == "l") {
          console.log("3. Medial consonant shadda ʿallah ", textLa[u]) 
          resultAr = resultAr.slice(0, -2) + "ٱ" + latinToArabic[textLa[u]] + latinToArabic[textLa[u]];
          u = u + 1;
        } else if ((textLa[u-2] == "a" || textLa[u-2] == "i") && textLa[u-1] == textLa[u] && textLa[u] == "l") {
          console.log("3. Medial consonant shadda -all- -ill- ", textLa[u]) 
          resultAr = resultAr.slice(0, -1) + "ا" + latinToArabic[textLa[u]] + latinToArabic[textLa[u]];
          u = u + 1;
        } else if (textLa[u-1] == textLa[u] && textLa[u] != " ") {
          console.log("3. Medial consonant shadda ", textLa[u]) 
          resultAr = resultAr.slice(0, -1) + latinToArabic[textLa[u]] + "ّ";
        } else if (textLa[u-1] == "a" && latinToArabic[textLa[u]] == "ء") {
          console.log("9. Medial consonant aʾa case ", latinToArabic[textLa[u]])
          resultAr = resultAr + "أ";
        } else if (latinToArabic[textLa[u]] == "ء" && textLa[u+1] == "a") {
          console.log("9. Medial consonant ء case ", latinToArabic[textLa[u]])
          resultAr = resultAr + latinToArabic[textLa[u]];
          u = u + 1;
        } else if (textLa[u] == "h" && textLa[u+1] == "ū") {
          console.log("9. Medial consonant -h# ", latinToArabic[textLa[u]])
          resultAr = resultAr + latinToArabic[textLa[u]];
          u = u + 1;
        } else if (textLa[u] == "y" && textLa[u+1] == "i" && textLa.indexOf("ya-yi") > -1) {
          console.log("9. Medial consonant ya-yi ", latinToArabic[textLa[u]])
          resultAr = resultAr + "ة";
          u = u + 1;
        } else if (textLa[u] == "y" && textLa[u+1] == "i") {
          console.log("9. Medial consonant -yi ", latinToArabic[textLa[u]])
          resultAr = resultAr + "ه";
          u = u + 1;
        } else if (textLa[u] != " ") {
          console.log("9. Medial consonant ", latinToArabic[textLa[u]])
          resultAr = resultAr + latinToArabic[textLa[u]];
        }
      } else if ((textLa[u] && vowels[textLa[u]] && textLa[u+1] && textLa[u+1] == " ") || (textLa[u] && vowels[textLa[u]] && textLa[u+1] && textLa[u+1] == "\n") || (textLa[u] && vowels[textLa[u]] && textLa[u+1] && textLa[u+1] == undefined)) { // Final Vowel position
        if (textLa[u] == "ī") {
          console.log("10. final ī ", vowels[textLa[u]])
          resultAr = resultAr + vowels[textLa[u]];
        } else if ((textLa[u-1] == "b" || textLa[u-1] == "f" || textLa[u-1] == "l" || textLa[u-1] == "m" || textLa[u-1] == "n" || textLa[u-1] == "r" || textLa[u-1] == "q" || textLa[u-1] == "y" || textLa[u-1] == "ṣ") && textLa[u] == "a" && textLa[u+1] == " ") {  // ta marbuta case
          console.log("9. Final '-a' ta marbuta vowel case")
          resultAr = (nonjoining.indexOf(latinToArabic[textLa[u-2]]) > -1) ? resultAr + "ة" : resultAr + "ـة"; 
        } else if (textLa[u-1] != "h" && textLa[u-1] != "l" && textLa[u-1] != "m" && textLa[u] == "ā") {
          console.log("10. final vowel ā - alef maksura ")
          resultAr = resultAr + "ى";
        } else if ((textLa[u-2] == "i" || textLa[u-2] == "a") && textLa[u-1] == "l" && textLa[u] == "ā") {
          console.log("10. final vowel ilā ʿalā ", vowels[textLa[u]])
          resultAr = resultAr + "ى";
        } else if (textLa[u] != "a" && textLa[u] != "i" && textLa[u] != "u") {
          console.log("10. final vowel ", vowels[textLa[u]])
          resultAr = resultAr + vowels[textLa[u]];
        }
      } else if (latinToArabic[textLa[u]]) {
        console.log("10. Others ", latinToArabic[textLa[u]])
        resultAr = resultAr + latinToArabic[textLa[u]];
      }
    }

    if (textLa[0] == "a" || textLa[0] == "i" || textLa[0] == "u" || textLa.indexOf(" a") > -1 || textLa.indexOf(" i") > -1 || textLa.indexOf(" u") > -1) {
      console.log("Multi-word suggestion when beginning with a, i, u");
      let unprocessed = resultAr.split(" ");
      let processed = "";
      let latinWords = textLa.split(" ");

      for (let i = 0; i < unprocessed.length; i++) {
        if (latinWords[i] && latinWords[i].startsWith("al-an")) {
          console.log("word being processed al-an ", unprocessed[i])
          processed = processed + unprocessed[i] + ' ' + unprocessed[i].replace("الا","الأ").replaceAll("اﻻ","الأ") + ' ';
        } else if (latinWords[i] && (latinWords[i].startsWith("al-i") || latinWords[i].startsWith("al-ī")) && unprocessed[i].indexOf("الا") > -1) {
          console.log("word being processed al-i ", unprocessed[i])
          processed = processed + unprocessed[i] + ' ' + unprocessed[i].replace("الا","الإ").replaceAll("اﻻ","الإ") + ' ';
        } else if (unprocessed[i].indexOf("ال") == -1 && unprocessed[i][0] == "ا" && latinWords[i] && latinWords[i].indexOf("al-i") == -1) {
          if (latinWords[i] && !latinWords[i].startsWith("i")) {
            console.log("word being processed a- u- ", unprocessed[i])
            processed = processed + unprocessed[i] + ' ' + unprocessed[i].replace("ا","أ") + ' ';
          } else {
            console.log("word being processed i- ", unprocessed[i])
            processed = processed + unprocessed[i] + ' ' + unprocessed[i].replace("ا","إ") + ' ';
          }
        } else {
          console.log("word not processed ", unprocessed[i])
          processed = processed + unprocessed[i] + ' ';
        } 
      }
      resultAr = processed;
    }

    // Clean-up extra 'kashida' / 'tatweel''
    resultAr = resultAr.replaceAll("\u0640","");

    return resultAr;
  } else if (direction == "arabic2latin") {
  
    // Arabic Unicode : exact appearing letter available in multiple planes and mapped here

    let arabicToLatin;
    let ligatures;
    let diacritics;
    let vowels;
    /* 
      const fixedligatures = fixedligatures.json; 
    */

    if (language == "Arabic") {
      const ijmesArabic = {" ": " ", ",": ",", ";": ";", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", ":": ":", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "﷼": "€", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "˜": "˜", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "،":",", "؍":"/", "؎":"§", "؏":"", "؛":";", "؞":":", "؟":"?", "٭":"*", "۔":".", "۝":"", "۞":"", "۩":"", "۽":"", "﴾":")", "﴿":"(",
      "٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9", "٪":"%", "؆": "∛", "؇":"∜", "؉":"‰", "؊":"‱", "ﺞ":"j", "ﺠ":"j", "ﺟ":"j", "ﺝ":"j", "ـج":"j", "ـجـ":"j", "جـ":"j", "ج":"j", "ﺚ":"th", "ﺜ":"th", "ﺛ":"th", "ﺙ":"th", "ـث":"th", "ـثـ":"th", "ثـ":"th", "ث":"th", "ﺖ":"t", "ﺘ":"t", "ﺗ":"t", "ﺕ":"t", "ـت":"t", "ـتـ":"t", "تـ":"t", "ت":"t", "ﺐ":"b", "ﺒ":"b", "ﺑ":"b", "ﺏ":"b", "ـب":"b", "ـبـ":"b", "بـ":"b", "ب":"b", "ﺲ":"s", "ﺴ":"s", "ﺳ":"s", "ﺱ":"s", "ـس":"s", "ـسـ":"s", "سـ":"s", "س":"s", "ﺰ":"z", "ﺯ":"z", "ـز":"z", "ز":"z", "ﺮ":"r", "ﺭ":"r", "ـر":"r", "ر":"r", "ﺬ":"dh", "ﺫ":"dh", "ـذ":"dh", "ذ":"dh", "ﺪ":"d", "ﺩ":"d", "ـد":"d", "د":"d", "ﺦ":"kh", "ﺨ":"kh", "ﺧ":"kh", "ﺥ":"kh", "ـخ":"kh", "ـخـ":"kh", "خـ":"kh", "خ":"kh", "ﺢ":"ḥ", "ﺤ":"ḥ", "ﺣ":"ḥ", "ﺡ":"ḥ", "ـح":"ḥ", "ـحـ":"ḥ", "حـ":"ḥ", "ح":"ḥ", "ﻆ":"ẓ", "ﻈ":"ẓ", "ﻇ":"ẓ", "ﻅ":"ẓ", "ـظ":"ẓ", "ـظـ":"ẓ", "ظـ":"ẓ", "ظ":"ẓ", "ﻂ":"ṭ", "ﻄ":"ṭ", "ﻃ":"ṭ", "ﻁ":"ṭ", "ـط":"ṭ", "ـطـ":"ṭ", "طـ":"ṭ", "ط":"ṭ", "ﺾ":"ḍ", "ﻀ":"ḍ", "ﺿ":"ḍ", "ﺽ":"ḍ", "ـض":"ḍ", "ـضـ":"ḍ", "ضـ":"ḍ", "ض":"ḍ", "ﺺ":"ṣ", "ﺼ":"ṣ", "ﺻ":"ṣ", "ﺹ":"ṣ", "ـص":"ṣ", "ـصـ":"ṣ", "صـ":"ṣ", "ص":"ṣ", "ﺶ":"sh", "ﺸ":"sh", "ﺷ":"sh", "ﺵ":"sh", "ـش":"sh", "ـشـ":"sh", "شـ":"sh", "ش":"sh", "ﻚ":"k", "ﻜ":"k", "ﻛ":"k", "ﻙ":"k", "ـك":"k", "ـڪ":"k", "ـکـ":"k", "كـ":"k", "ڪـ":"k", "ڪ":"k", "ك":"k", "ﻖ":"q", "ﻘ":"q", "ﻗ":"q", "ﻕ":"q", "ـق":"q", "ـقـ":"q", "قـ":"q", "ق":"q", "ﻒ":"f", "ﻔ":"f", "ﻓ":"f", "ﻑ":"f", "ـف":"f", "ـفـ":"f", "فـ":"f", "ف":"f", "ﻎ":"gh", "ﻐ":"gh", "ﻏ":"gh", "ﻍ":"gh", "ـغ":"gh", "ـغـ":"gh", "غـ":"gh", "غ":"gh", "ﻊ":"ʿ", "ﻌ":"ʿ", "ﻋ":"ʿ", "ﻉ":"ʿ", "ـع":"ʿ", "ـعـ":"ʿ", "عـ":"ʿ", "ع":"ʿ", "ﻱ":"y", "ﻴ":"y", "ﻳ":"y", "ﻱ":"y", "ـي":"y", "ـيـ":"y", "يـ":"y", "ي":"y", "ﮮ":"ī", "ﮯ":"ī", "ے":"ī", "ﻮ":"w", "ﻭ":"w", "ـو":"w", "و":"w", "ﻪ":"h", "ﻬ":"h", "ﻫ":"h", "ﻩ":"h", "ـه":"h", "ـهـ":"h", "هـ":"h", "ه":"h", "ﻦ":"n", "ﻨ":"n", "ﻧ":"n", "ﻥ":"n", "ـن":"n", "ـنـ":"n", "نـ":"n", "ن":"n", "ﻢ":"m", "ﻤ":"m", "ﻣ":"m", "ﻡ":"m", "ـم":"m", "ـمـ":"m", "مـ":"m", "م":"m", "ﻞ":"l", "ﻠ":"l", "ﻟ":"l", "ﻝ":"l", "ـل":"l", "ـلـ":"l", "لـ":"l", "ل":"l", "\u066B":".", "٬":",", "ﺀ": "ʾ", "ء": "ʾ", "ﺔ":"t", "ﺓ":"a", "ـة":"t", "ة":"a", "پ":"", "ﭖ":"", "چ":"", "ﭺ":"", "ژ":"", "ﮊ":"", "گ":"", "ﮒ":"", "ال":"al-"}; 
      // TODO  "ال":"al-" and  "ال":"-l-" 
      // TODO "ة" : "at", "ة":"h" , "ة":"a"
      arabicToLatin = ijmesArabic;
      const ijmesArabicVowels = {"ا":"a","ﺎ":"a","ﺍ":"a","ﴼ":"ā","ﴽ":"ā","ای":"ā","ﻭ":"u","و":"ū","ﻱ":"ī","ي":"ī","ّيِ":"iyy","ّيِ":"ī","ّوُ":"uvv","ّوُ":"ū","وَ":"au","وَ":"aw","یَ":"ai","یَ":"ay","\u064E":"a","\u0618":"a","\uFE76":"a","\uFE77":"a","\u064F":"u","\u0619":"u","\uFE78":"u","\uFE79":"u","\u0650":"i","\u061A":"i","\uFE7A":"i","\uFE7B":"i","ا َ":"ā","ا ُ":"ū","ا ِ":"ī","\uFE74":"in","\u08F2":"in","\u064D":"in","\uFE72":"un","\u08F1":"un","\u064C":"un","\uFE70":"an","\uFE71":"an","\u08F0":"an","\u064B":"an","أُ":"u","أَ":"a","إِ":"i","ئُ":"ū","ئِ":"i","ـئ":"i","ـئـ":"i","ئـ":"i","ئ":"i","ـؤ":"u","ؤ":"u","ـإ":"i","إ":"i","ٵ":"a","ـأ":"a","أ":"a","ـآ":"ā","آ":"ā","ـى":"y","ـىـ":"y","ىـ":"ā","ى":"y","ؤُ":"u","أْ":"a","ئْ":"i","ؤْ":"u","ﱝ":"","ﲐ":"","ٔ":"ʾ","ٕ":"ʾ"}; // TODO Reading Flow only then required "أُ":"ʾu","أَ":"ʾa","إِ":"ʾi"
      vowels = ijmesArabicVowels;
      diacritics = [];
      ligatures = {"ﻻ":"la","ﻼ":"la","لأ":"laʾ","لْأ":"laʾ","ﻶ":"lā","ﻸ":"laʾ","ﻹ":"laʾ","ﻺ":"laʾ"};
    }/* else if (language == "Persian") {
      const ijmesPersian = {" ": " ", ",": ",", ";": ";", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", ":": ":", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "﷼": "€", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "˜": "˜", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "،":",", "؍":"/", "؎":"§", "؏":"", "؛":";", "؞":":", "؟":"?", "٭":"*", "۔":".", "۝":"", "۞":"", "۩":"", "۽":"", "﴾":")", "﴿":"(", 
      "۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9", "٪":"%", "؆": "∛", "؇":"∜", "؉":"‰", "؊":"‱", "ﺞ":"j", "ﺠ":"j", "ﺟ":"j", "ﺝ":"j", "ـج":"j", "ـجـ":"j", "جـ":"j", "ج":"j", "ﺚ":"s̲", "ﺜ":"s̲", "ﺛ":"s̲", "ﺙ":"s̲", "ـث":"s̲", "ـثـ":"s̲", "ثـ":"s̲", "ث":"s̲", "ﺖ":"t", "ﺘ":"t", "ﺗ":"t", "ﺕ":"t", "ـت":"t", "ـتـ":"t", "تـ":"t", "ت":"t",  "ﭗ":"p", "ﭙ": "p", "ﭘ": "p", "ﭖ":"p", "ـپ":"p", "ـپـ": "p", "پـ": "p", "پ":"p", "ﺐ":"b", "ﺒ":"b", "ﺑ":"b", "ﺏ":"b", "ـب":"b", "ـبـ":"b", "بـ":"b", "ب":"b", "ﺲ":"s", "ﺴ":"s", "ﺳ":"s", "ﺱ":"s", "ـس":"s", "ـسـ":"s", "سـ":"s", "س":"s", "ﮋ":"zh", "ﮊ":"zh", "ـژ":"zh", "ژ":"zh", "ﺰ":"z", "ﺯ":"z", "ـز":"z", "ز":"z", "ﺮ":"r", "ﺭ":"r", "ـر":"r", "ر":"r", "ﺬ":"z̲", "ﺫ":"z̲", "ـذ":"z̲", "ذ":"z̲", "ﺪ":"d", "ﺩ":"d", "ـد":"d", "د":"d", "ﺦ":"kh", "ﺨ":"kh", "ﺧ":"kh", "ﺥ":"kh", "ـخ":"kh", "ـخـ":"kh", "خـ":"kh", "خ":"kh", "ﺢ":"ḥ", "ﺤ":"ḥ", "ﺣ":"ḥ", "ﺡ":"ḥ", "ـح":"ḥ", "ـحـ":"ḥ", "حـ":"ḥ", "ح":"ḥ", "ﭻ":"ch", "ﭽ":"ch", "ﭼ":"ch", "ﭺ":"ch", "ـچ":"ch", "ـچـ":"ch", "چـ":"ch", "چ":"ch", "ﻆ":"ẓ", "ﻈ":"ẓ", "ﻇ":"ẓ", "ﻅ":"ẓ", "ـظ":"ẓ", "ـظـ":"ẓ", "ظـ":"ẓ", "ظ":"ẓ", "ﻂ":"ṭ", "ﻄ":"ṭ", "ﻃ":"ṭ", "ﻁ":"ṭ", "ـط":"ṭ", "ـطـ":"ṭ", "طـ":"ṭ", "ط":"ṭ", "ﺾ":"ż", "ﻀ":"ż", "ﺿ":"ż", "ﺽ":"ż", "ـض":"ż", "ـضـ":"ż", "ضـ":"ż", "ض":"ż", 
      "ﺺ":"ṣ", "ﺼ":"ṣ", "ﺻ":"ṣ", "ﺹ":"ṣ", "ـص":"ṣ", "ـصـ":"ṣ", "صـ":"ṣ", "ص":"ṣ", "ﺶ":"sh", "ﺸ":"sh", "ﺷ":"sh", "ﺵ":"sh", "ـش":"sh", "ـشـ":"sh", "شـ":"sh", "ش":"sh", "ﮓ":"g", "ﮕ":"g", "ﮔ": "g", "ﮒ":"g", "ـگ":"g", "ـگـ":"g", "گـ": "g", "گ":"g", "ﻚ":"g", "ﻜ":"g", "ﻛ":"g", "ﻙ":"g", "ـڪ":"g", "ـکـ":"g", "كـ":"g", "ڪـ":"g", "ڪ":"g", "ك":"g", "ـڪ":"k", "ـکـ":"k", "كـ":"k", "ڪـ":"k", "ڪ":"k", "ﻖ":"q", "ﻘ":"q", "ﻗ":"q", "ﻕ":"q", "ـق":"q", "ـقـ":"q", "قـ":"q", "ق":"q", "ﻒ":"f", "ﻔ":"f", "ﻓ":"f", "ﻑ":"f", "ـف":"f", "ـفـ":"f", "فـ":"f", "ف":"f", "ﻎ":"gh", "ﻐ":"gh", "ﻏ":"gh", "ﻍ":"gh", "ـغ":"gh", "ـغـ":"gh", "غـ":"gh", "غ":"gh", "ﻊ":"ʿ", "ﻌ":"ʿ", "ﻋ":"ʿ", "ﻉ":"ʿ", "ـع":"ʿ", "ـعـ":"ʿ", "عـ":"ʿ", "ع":"ʿ", "ﻱ":"y", "ﻴ":"y", "ﻳ":"y", "ﻱ":"y", "ـي":"y", "ـيـ":"y", "يـ":"y", "ي":"y", "ﮮ":"ī", "ﮯ":"ī", "ے":"ī", "ﻮ":"u", "ﻭ":"u", "ـو":"u", "و":"u", "ﻮ":"v", "ﻭ":"v", "ـو":"v", "و":"v", "ﻪ":"h", "ﻬ":"h", "ﻫ":"h", "ﻩ":"h", "ـه":"h", "ـهـ":"h", "هـ":"h", "ه":"h", "ﻦ":"n", "ﻨ":"n", "ﻧ":"n", "ﻥ":"n", "ـن":"n", "ـنـ":"n", "نـ":"n", "ن":"n", "ﻢ":"m", "ﻤ":"m", "ﻣ":"m", "ـم":"m", "ـمـ":"m", "مـ":"m", "م":"m", "ﻞ":"l", "ﻠ":"l", "ﻟ":"l", "ﻝ":"l", "ـل":"l", "ـلـ":"l", "لـ":"l", "ل":"l", "\u066B":".", "٬":",", "ﺀ": "ʾ", "ء": "ʾ", "ﺔ":"ih", "ﺓ":"a", "ـة":"ih", "ة":"a", "ال":"al-"};
      arabicToLatin = ijmesPersian;
      const ijmesPersianVowels = {"ا":"a","ا":"ā","ای":"ā","ﻭ":"u","و":"ū","ﻱ":"ī","ي":"ī","ّيِ":"iyy","ّيِ":"ī","ّوُ":"uvv","ّوُ":"ū","وَ":"au","وَ":"aw","یَ":"ai","یَ":"ay","\u064E":"a","\u0618":"a","\uFE76":"a","\uFE77":"a","\u064F":"u","\u0619":"u","\uFE78":"u","\uFE79":"u","\u0650":"i","\u061A":"i","\uFE7A":"i","\uFE7B":"i","ا َ":"ā","ا ُ":"ū","ا ِ":"ī","\uFE74":"in","\u08F2":"in","\u064D":"in","\uFE72":"un","\u08F1":"un","\u064C":"un","\uFE70":"an","\uFE71":"an","\u08F0":"an","\u064B":"an","أُ":"ʾu","أَ":"ʾa","إِ":"ʾi","ئُ":"ʾū","ـئ":"ʾi","ـئـ":"ʾi","ئـ":"ʾi","ئ":"ʾi","ـؤ":"ʾu","ؤ":"ʾu","ـإ":"ʾi","إ":"ʾi","ـأ":"ʾa","أ":"ʾa","ـآ":"ā","آ":"ā","ـى":"y","ـىـ":"y","ىـ":"y","ى":"y","ؤُ":"ʾu","أْ":"aʾ","ئْ":"iʾ","ؤْ":"uʾ","ٔ":"ʾ","ٕ":"ʾ"};
      vowels = ijmesPersianVowels;
      diacritics = [];
      ligatures = [];
    } else if (language == "OttomanTurkish") {
      const ijmesOttomanTurkish = {" ": " ", ",": ",", ";": ";", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", ":": ":", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "﷼": "€", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "˜": "˜", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "،":",", "؍":"/", "؎":"§", "؏":"", "؛":";", "؞":":", "؟":"?", "٭":"*", "۔":".", "۝":"", "۞":"", "۩":"", "۽":"", "﴾":")", "﴿":"(", 
      "٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9", "٪":"%", "؆": "∛", "؇":"∜", "؉":"‰", "؊":"‱", 
      "ﺞ":"c", "ﺠ":"c", "ﺟ":"c", "ﺝ":"c", "ـج":"c", "ـجـ":"c", "جـ":"c", "ج":"c", "ﺚ":"s̲", "ﺜ":"s̲", "ﺛ":"s̲", "ﺙ":"s̲", "ـث":"s̲", "ـثـ":"s̲", "ثـ":"s̲", "ث":"s̲", "ﺖ":"t", "ﺘ":"t", "ﺗ":"t", "ﺕ":"t", "ـت":"t", "ـتـ":"t", "تـ":"t", "ت":"t", "ﭗ":"p", "ﭙ": "p", "ﭘ": "p", "ﭖ":"p", "ـپ":"p", "ـپـ": "p", "پـ": "p", "پ":"p", "ﺐ":"b", "ﺒ":"b", "ﺑ":"b", "ﺏ":"b", "ـب":"b", "ـبـ":"b", "بـ":"b", "ب":"b", "ﺲ":"s", "ﺴ":"s", "ﺳ":"s", "ﺱ":"s", "ـس":"s", "ـسـ":"s", "سـ":"s", "س":"s", "ﮋ":"j", "ﮊ":"j", "ـژ":"j", "ژ":"j", "ﺰ":"z", "ﺯ":"z", "ـز":"z", "ز":"z", "ﺮ":"r", "ﺭ":"r", "ـر":"r", "ر":"r", "ﺬ":"z̲", "ﺫ":"z̲", "ـذ":"z̲", "ذ":"z̲", "ﺪ":"d", "ﺩ":"d", "ـد":"d", "د":"d", "ﺦ":"h", "ﺨ":"h", "ﺧ":"h", "ﺥ":"h", "ـخ":"h", "ـخـ":"h", "خـ":"h", "خ":"h", "ﺢ":"ḥ", "ﺤ":"ḥ", "ﺣ":"ḥ", "ﺡ":"ḥ", "ـح":"ḥ", "ـحـ":"ḥ", "حـ":"ḥ", "ح":"ḥ", "ﭻ":"ç", "ﭽ":"ç", "ﭼ":"ç", "ﭺ":"ç", "ـچ":"ç", "ـچـ":"ç","چـ":"ç", "چ":"ç", "ﻆ":"ẓ", "ﻈ":"ẓ", "ﻇ":"ẓ", "ﻅ":"ẓ", "ـظ":"ẓ", "ـظـ":"ẓ", "ظـ":"ẓ", "ظ":"ẓ", "ﻂ":"ṭ", "ﻄ":"ṭ", "ﻃ":"ṭ", "ﻁ":"ṭ", "ـط":"ṭ", "ـطـ":"ṭ", "طـ":"ṭ", "ط":"ṭ", "ﺾ":"ż", "ﻀ":"ż", "ﺿ":"ż", "ﺽ":"ż", "ـض":"ż", "ـضـ":"ż", "ضـ":"ż", "ض":"ż", "ﺺ":"ṣ", "ﺼ":"ṣ", "ﺻ":"ṣ", "ﺹ":"ṣ", "ـص":"ṣ", "ـصـ":"ṣ", "صـ":"ṣ", "ص":"ṣ", "ﺶ":"ş", "ﺸ":"ş", "ﺷ":"ş", "ﺵ":"ş", "ـش":"ş", "ـشـ":"ş", "شـ":"ş", "ش":"ş", 
      "ﮓ":"g", "ﮕ":"g", "ﮔ": "g", "ﮒ":"g", "ـگ":"g", "ـگـ":"g", "گـ": "g", "گ":"g", "ﻚ":"ğ", "ﻜ":"ğ", "ﻛ":"ğ", "ﻙ":"ğ", "ـك":"ğ", "ـڪ":"ğ", "ـکـ":"ğ", "كـ":"ğ", "ڪـ":"ğ", "ڪ":"ğ", "ك":"ğ", "ﻚ":"y", "ﻜ":"y", "ﻛ":"y", "ﻙ":"y", "ـك":"y", "ـڪ":"y", "ـکـ":"y", "كـ":"y", "ڪـ":"y", "ڪ":"y", "ك":"y", "ﻚ":"ñ", "ﻜ":"ñ", "ﻛ":"ñ", "ﻙ":"ñ", "ـك":"ñ", "ـڪ":"ñ", "ـکـ":"ñ", "كـ":"ñ", "ڪـ":"ñ", "ڪ":"ñ", "ك":"ñ",  "ﻚ":"k", "ﻜ":"k", "ﻛ":"k", "ﻙ":"k", "ـك":"k", "ـڪ":"k", "ـکـ":"k", "كـ":"k", "ڪـ":"k", "ڪ":"k", "ك":"k", "ﻖ":"ḳ", "ﻘ":"ḳ", "ﻗ":"ḳ", "ﻕ":"ḳ", "ـق":"ḳ", "ـقـ":"ḳ", "قـ":"ḳ", "ق":"ḳ", "ﻒ":"f", "ﻔ":"f", "ﻓ":"f", "ﻑ":"f", "ـف":"f", "ـفـ":"f", "فـ":"f", "ف":"f", "ﻎ":"ğ", "ﻐ":"ğ", "ﻏ":"ğ", "ﻍ":"ğ", "ـغ":"ğ", "ـغـ":"ğ", "غـ":"ğ", "غ":"ğ", "ﻎ":"g", "ﻐ":"g", "ﻏ":"g", "ﻍ":"g", "ـغ":"g", "ـغـ":"g", "غـ":"g", "غ":"g", "ﻊ":"ʿ", "ﻌ":"ʿ", "ﻋ":"ʿ", "ﻉ":"ʿ", "ـع":"ʿ", "ـعـ":"ʿ", "عـ":"ʿ", "ع":"ʿ", "ﻱ":"y", "ﻴ":"y", "ﻳ":"y", "ﻱ":"y", "ـي":"y", "ـيـ":"y", "يـ":"y", "ي":"y", "ﮮ":"ī", "ﮯ":"ī", "ے":"ī", "ﻮ":"v", "ﻭ":"v", "ـو":"v", "و":"v", "ﻪ":"h", "ﻬ":"h", "ﻫ":"h", "ﻩ":"h", "ـه":"h", "ـهـ":"h", "هـ":"h", "ه":"h", "ﻦ":"n", "ﻨ":"n", "ﻧ":"n", "ﻥ":"n", "ـن":"n", "ـنـ":"n", "نـ":"n", "ن":"n", "ﻢ":"m", "ﻤ":"m", "ﻣ":"m", "ـم":"m", "ـمـ":"m", "مـ":"m", "م":"m", "ﻞ":"l", "ﻠ":"l", "ﻟ":"l", "ﻝ":"l", "ـل":"l", "ـلـ":"l", "لـ":"l", "ل":"l", "ﺀ": "ʾ","ء": "ʾ", "ﺔ":"t", "ﺓ":"a", "ـة":"t", "ة":"a", "ال":"al-", 
      "\u066B":".", "٬":"," };
      arabicToLatin = ijmesOttomanTurkish;
      const ijmesOttomanTurkishVowels = {"ا":"a","ا":"ā","ای":"ā","ﻭ":"ū","و":"ū","ﻱ":"ī","ي":"ī","ّيِ":"iyy","ّيِ":"ī","ّوُ":"uvv","ّوُ":"ū","وَ":"au","وَ":"aw","یَ":"ai","یَ":"ay","\u064E":"a","\u0618":"a","\uFE76":"a","\uFE77":"a","\u064F":"u","\u0619":"u","\uFE78":"u","\uFE79":"u","\u0650":"i","\u061A":"i","\uFE7A":"i","\uFE7B":"i","ا َ":"ā","ا ُ":"ū","ا ِ":"ī","\uFE74":"in","\u08F2":"in","\u064D":"in","\uFE72":"un","\u08F1":"un","\u064C":"un","\uFE70":"an","\uFE71":"an","\u08F0":"an","\u064B":"an","أُ":"ʾu","أَ":"ʾa","إِ":"ʾi","ئُ":"ʾū","ـئ":"ʾi","ـئـ":"ʾi","ئـ":"ʾi","ئ":"ʾi","ـؤ":"ʾu","ؤ":"ʾu","ـإ":"ʾi","إ":"ʾi","ـأ":"ʾa","أ":"ʾa","ـآ":"ā","آ":"ā","ـى":"y","ـىـ":"y","ىـ":"y","ى":"y","ؤُ":"ʾu","أْ":"aʾ","ئْ":"iʾ","ؤْ":"uʾ","ٔ":"ʾ","ٕ":"ʾ"};
      vowels = ijmesOttomanTurkishVowels;
      diacritics = [];
      ligatures = [];
    } else if (language == "ModernTurkish") {
      const ijmesModernTurkish = {" ": " ", ",": ",", ";": ";", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", ":": ":", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "﷼": "€", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "˜": "˜", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "،":",", "؍":"/", "؎":"§", "؏":"", "؛":";", "؞":":", "؟":"?", "٭":"*", "۔":".", "۝":"", "۞":"", "۩":"", "۽":"", "﴾":")", "﴿":"(", 
      "٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9", "٪":"%", "؆": "∛", "؇":"∜", "؉":"‰", "؊":"‱", 
      "ﺞ":"c", "ﺠ":"c", "ﺟ":"c", "ﺝ":"c", "ـج":"c", "ـجـ":"c", "جـ":"c", "ج":"c", "ﺚ":"s", "ﺜ":"s", "ﺛ":"s", "ﺙ":"s", "ـث":"s", "ـثـ":"s", "ثـ":"s", "ث":"s", "ﺖ":"t", "ﺘ":"t", "ﺗ":"t", "ﺕ":"t", "ـت":"t", "ـتـ":"t", "تـ":"t", "ت":"t", "ﭗ":"p", "ﭙ": "p", "ﭘ": "p", "ﭖ":"p", "ـپ":"p", "ـپـ": "p", "پـ": "p", "پ":"p", "ﺐ":"b", "ﺒ":"b", "ﺑ":"b", "ﺏ":"b", "ـب":"b", "ـبـ":"b", "بـ":"b", "ب":"b", "ﺐ":"p", "ﺒ":"p", "ﺑ":"p", "ﺏ":"p", "ـب":"p", "ـبـ":"p", "بـ":"p", "ب":"p", "ﺲ":"s", "ﺴ":"s", "ﺳ":"s", "ﺱ":"s", "ـس":"s", "ـسـ":"s", "سـ":"s", "س":"s", "ﮋ":"j", "ﮊ":"j", "ـژ":"j", "ژ":"j", "ﺰ":"z", "ﺯ":"z", "ـز":"z", "ز":"z", "ﺮ":"r", "ﺭ":"r", "ـر":"r", "ر":"r", "ﺬ":"z", "ﺫ":"z", "ـذ":"z", "ذ":"z", "ﺪ":"d", "ﺩ":"d", "ـد":"d", "د":"d", "ﺦ":"h", "ﺨ":"h", "ﺧ":"h", "ﺥ":"h", "ـخ":"h", "ـخـ":"h", "خـ":"h", "خ":"h", "ﺢ":"ḥ", "ﺤ":"ḥ", "ﺣ":"ḥ", "ﺡ":"ḥ", "ـح":"ḥ", "ـحـ":"ḥ", "حـ":"ḥ", "ح":"ḥ", "ﭻ":"ç", "ﭽ":"ç", "ﭼ":"ç", "ﭺ":"ç", "ـچ":"ç", "ـچـ":"ç", "چـ":"ç", "چ":"ç", "ﻆ":"z", "ﻈ":"z", "ﻇ":"z", "ﻅ":"z", "ـظ":"z", "ـظـ":"z", "ظـ":"z", "ظ":"z", "ﻂ":"t", "ﻄ":"t", "ﻃ":"t", "ﻁ":"t", "ـط":"t", "ـطـ":"t", "طـ":"t", "ط":"t", "ﺾ":"z", "ﻀ":"z", "ﺿ":"z", "ﺽ":"z", "ـض":"z", "ـضـ":"z", "ضـ":"z", "ض":"z", "ﺺ":"ṣ", "ﺼ":"ṣ", "ﺻ":"ṣ", "ﺹ":"ṣ", "ـص":"ṣ", "ـصـ":"ṣ", "صـ":"ṣ", "ص":"ṣ", "ﺶ":"ş", "ﺸ":"ş", "ﺷ":"ş", "ﺵ":"ş", "ـش":"ş", "ـشـ":"ş", "شـ":"ş", "ش":"ş", "ﮓ":"g", "ﮕ":"g", "ﮔ": "g", "ﮒ":"g", "ـگ":"g", "ـگـ":"g", "گـ": "g", "گ":"g", 
      "ﻚ":"ğ", "ﻜ":"ğ", "ﻛ":"ğ", "ﻙ":"ğ", "ـك":"ğ", "ـڪ":"ğ", "ـکـ":"ğ", "كـ":"ğ", "ڪـ":"ğ", "ڪ":"ğ", "ك":"ğ", "ﻚ":"y", "ﻜ":"y", "ﻛ":"y", "ﻙ":"y", "ـك":"y", "ـڪ":"y", "ـکـ":"y", "كـ":"y", "ڪـ":"y", "ڪ":"y", "ك":"y", "ﻚ":"n", "ﻜ":"n", "ﻛ":"n", "ﻙ":"n", "ـك":"n", "ـڪ":"n", "ـکـ":"n", "كـ":"n", "ڪـ":"n", "ڪ":"n", "ك":"n", "ـك":"k", "ـڪ":"k", "ـکـ":"k", "كـ":"k", "ڪـ":"k", "ڪ":"k", "ك":"k", "ﻖ":"k", "ﻘ":"k", "ﻗ":"k", "ﻕ":"k", "ـق":"k", "ـقـ":"k", "قـ":"k", "ق":"k", "ﻒ":"f", "ﻔ":"f", "ﻓ":"f", "ﻑ":"f", "ـف":"f", "ـفـ":"f", "فـ":"f", "ف":"f", "ﻎ":"ğ", "ﻐ":"ğ", "ﻏ":"ğ", "ﻍ":"ğ", "ـغ":"ğ", "ـغـ":"ğ", "غـ":"ğ", "غ":"ğ", "ﻎ":"g", "ﻐ":"g", "ﻏ":"g", "ﻍ":"g", "ـغ":"ġ", "ـغـ":"ġ", "غـ":"ġ", "غ":"ġ", "ﻱ":"y", "ﻴ":"y", "ﻳ":"y", "ﻱ":"y", "ـي":"y", "ـيـ":"y", "يـ":"y", "ي":"y", "ﮮ":"ī", "ﮯ":"ī", "ے":"ī", "ﻮ":"v", "ﻭ":"v", "ـو":"v", "و":"v", "ﻪ":"h", "ﻬ":"h", "ﻫ":"h", "ﻩ":"h", "ـه":"h", "ـهـ":"h", "هـ":"h", "ه":"h", "ﻦ":"n", "ﻨ":"n", "ﻧ":"n", "ﻥ":"n", "ـن":"n", "ـنـ":"n", "نـ":"n", "ن":"n", "ﻢ":"m", "ﻤ":"m", "ﻣ":"m", "ـم":"m", "ـمـ":"m", "مـ":"m", "م":"m", "ﻞ":"l", "ﻠ":"l", "ﻟ":"l", "ﻝ":"l", "ـل":"l", "ـلـ":"l", "لـ":"l", "ل":"l", "\u066B":".", "٬":",", "ﺔ":"t", "ﺓ":"a", "ـة":"t", "ة":"a", "ﻉ":"", "ع":"", "ال":"al-"};
      arabicToLatin = ijmesModernTurkish;
      const ijmesModernTurkishVowels = {"ا":"a","ا":"ā","ای":"ā","ﻭ":"ū","و":"ū","ﻱ":"ī","ي":"ī","ّيِ":"iyy","ّيِ":"ī","ّوُ":"uvv","ّوُ":"ū","وَ":"au","وَ":"aw","یَ":"ai","یَ":"ay","\u064E":"a","\u0618":"a","\uFE76":"a","\uFE77":"a","\u064F":"u","\u0619":"u","\uFE78":"u","\uFE79":"u","\u0650":"i","\u061A":"i","\uFE7A":"i","\uFE7B":"i","ا َ":"ā","ا ُ":"ū","ا ِ":"ī","\uFE74":"in","\u08F2":"in","\u064D":"in","\uFE72":"un","\u08F1":"un","\u064C":"un","\uFE70":"an","\uFE71":"an","\u08F0":"an","\u064B":"an","أُ":"ʾu","أَ":"ʾa","إِ":"ʾi","ئُ":"ʾū","ـئ":"ʾi","ـئـ":"ʾi","ئـ":"ʾi","ئ":"ʾi","ـؤ":"ʾu","ؤ":"ʾu","ـإ":"ʾi","إ":"ʾi","ـأ":"ʾa","أ":"ʾa","ـآ":"ā","آ":"ā","ـى":"y","ـىـ":"y","ىـ":"y","ى":"y","ؤُ":"ʾu","أْ":"aʾ","ئْ":"iʾ","ؤْ":"uʾ","ٔ":"ʾ","ٕ":"ʾ"};
      vowels = ijmesModernTurkishVowels;
      diacritics = [];
      ligatures = [];
    }*/
    
    // TODO determine vocalised or unvocalised in text
    const textVocalisation = ["\uFE70","\uFE71","\uFE72","\uFE74","\u08F0","\u08F1","\u08F2","\u064C","\u064D","\u064B","\u08F0","\u08F1","\u08F2","\u064E","\u0618","\uFE76","\uFE77","\u064F","\u0619","\uFE78","\uFE79","\u0650","\uFE7A","\uFE7B","\u061A","◌ٰ","◌ٖ","\uFE7E","\u0652"]; 
    // Fatha, Kasra, Damma : Normal, Small, Isolated, Medial forms included above
    const shaddaForms = ["\uFC5E","\uFC60","\uFC61","\uFC62","\uFC63","\uFCF2","\uFCF3","\uFCF4","\uFC5F","\u0651","\uFE7D","\uFE7C"];
    
    let resultLa = "";
    let textAr = input;

    // TODO - Normalisation of Arabic - Unicode block : U+060 to U+06F
    // textAr = textAr

    for (let u = 0 ; u < textAr.length ; u++ ) {
      if (textAr[u].indexOf("\n") > -1) {
        resultLa = resultLa + "\n";
      } else if (textAr[u] && diacritics[textAr[u]]) {
        console.log("1. Diacritic ", textAr[u], " : " , diacritics[textAr[u]] )
        resultLa = resultLa + diacritics[textAr[u]];
      } else if (textAr[u] && ligatures[textAr[u]]) {
        console.log("2. Ligature ", textAr[u], " : " , ligatures[textAr[u]] )
        resultLa = resultLa + ligatures[textAr[u]];
      } else if (textAr[u] && shaddaForms.indexOf(textAr[u]) > -1) { // Shadda rules
          /* if (vowels[textAr[u-1]] == "a" && !arabicToLatin[textAr[u-1]]) {
            console.log("3. Shadda - a long ", textAr[u], vowels[textAr[u-1]])
            resultLa = resultLa.slice(0, -1) + "ā"; 
          } else if (vowels[textAr[u-1]] == "i" && !arabicToLatin[textAr[u-1]]) {
            console.log("3. Shadda - i long ", textAr[u], vowels[textAr[u-1]])
            resultLa = resultLa.slice(0, -1) + "ī"; 
          } else if (vowels[textAr[u-1]] == "u" && !arabicToLatin[textAr[u-1]]) {
            console.log("3. Shadda - u long ", textAr[u], vowels[textAr[u-1]])
            resultLa = resultLa.slice(0, -1) + "ū"; 
          } else */
          if (textVocalisation.indexOf(textAr[u-1]) > -1 && !arabicToLatin[textAr[u-1]] && vowels[textAr[u-1]] != "a" && vowels[textAr[u-1]] != "i" && vowels[textAr[u-1]] != "u") {
            console.log("3. Shadda - vocalised ", textAr[u], textVocalisation.indexOf(textAr[u-1]))
            resultLa = resultLa + resultLa[resultLa.length - 1];
          }/*  else if (arabicToLatin[textAr[u-1]] && arabicToLatin[textAr[u-1]].length == 2 && !arabicToLatin[textAr[u+2]] && textAr[u+2] != " ") {
            console.log("3. Shadda 2-consonant not followed by consonant - ", textAr[u], arabicToLatin[textAr[u-1] + textAr[u-2]])
            resultLa = resultLa + resultLa[resultLa.length - 2] + resultLa[resultLa.length - 1] + "a"; 
          } */ else if (arabicToLatin[textAr[u-1]] && arabicToLatin[textAr[u-1]].length == 2) {
            console.log("3. Shadda 2-consonant - ", textAr[u], arabicToLatin[textAr[u-1] + textAr[u-2]])
            resultLa = resultLa + resultLa[resultLa.length - 2] + resultLa[resultLa.length - 1]; 
          }/*  else if (arabicToLatin[textAr[u-1]] && arabicToLatin[textAr[u-1]].length == 1 && arabicToLatin[textAr[u+2]] && textAr[u+2] != " ") {
            console.log("3. Shadda 1-consonant not followed by consonant - ", textAr[u], arabicToLatin[textAr[u-1]])
            resultLa = resultLa + resultLa[resultLa.length - 1] + "a"; 
          } */ else if (arabicToLatin[textAr[u-1]] && arabicToLatin[textAr[u-1]].length == 1) {
            console.log("3. Shadda 1-consonant - ", textAr[u], arabicToLatin[textAr[u-1]])
            resultLa = resultLa + resultLa[resultLa.length - 1]; 
          } else {
            console.log("3. Shadda - ", textAr[u], arabicToLatin[textAr[u-1]])
            resultLa = resultLa.slice(0, -1) + resultLa[resultLa.length - 2] + resultLa[resultLa.length - 1]; 
          }
      } else if (((textAr[u-2] == " " && textAr[u-1] && textAr[u] != "" && textAr[u+2] == " ") || (textAr[u-2] == " " && textAr[u-1] && textAr[u] != "" && textAr[u+2] == "\n") || (textAr[u-2] == "\n" && textAr[u-1] && textAr[u] != "" && textAr[u+2] == " ") || (textAr[u-2] == " " && textAr[u-1] && textAr[u] != "" && textAr[u+2] == undefined) || (textAr[u-2] == "\n" && textAr[u-1] && textAr[u] != "" && textAr[u+2] == undefined) || (textAr[u-2] == undefined && textAr[u-1] && textAr[u] != "" && textAr[u+2] == " ") || (textAr[u-2] == "\n" && textAr[u-1] && textAr[u] != "" && textAr[u+2] == "\n") || (textAr[u-2] == undefined && textAr[u-1] && textAr[u] != "" != "" && textAr[u+2] == undefined)) && (arabicToLatin[textAr[u] + textAr[u-1]] || vowels[textAr[u] + textAr[u-1]])) { // Isolate double position 
        if (vowels[textAr[u] + textAr[u-1]]) {
          console.log("4. Isolate double vowel ", textAr[u] , " : ", textAr[u-1], " : ", vowels[textAr[u] + textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + vowels[textAr[u] + textAr[u-1]];  // Isolate double vowel position
        } else {
          console.log("4. Isolate double consonant ", textAr[u] , " : ", textAr[u-1], " : ", arabicToLatin[textAr[u] + textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + arabicToLatin[textAr[u] + textAr[u-1]];  // Isolate double consonant position
        }
      } else if (textAr[u+1] == " " && arabicToLatin[textAr[u] + textAr[u-1]]) { // Initial position with double character consonant
        console.log("5. Initial double consonant ", textAr[u] , " : ", textAr[u-1], " : ", arabicToLatin[textAr[u] + textAr[u-1]])
        resultLa = resultLa.slice(0, -1) + arabicToLatin[textAr[u] + textAr[u-1]];
      } else if (textAr[u+1] == " " && vowels[textAr[u] + textAr[u-1]]) { // Initial position with double character vowel
        console.log("6. Initial double vowel ", textAr[u] , " : ", textAr[u-1], " : ", vowels[textAr[u] + textAr[u-1]])
        resultLa = resultLa.slice(0, -1) + vowels[textAr[u] + textAr[u-1]]; 
      } else if (textAr[u] && arabicToLatin[textAr[u] + textAr[u-1]]) { // Medial Position with double character consonant
        console.log("7. Medial double consonant ", textAr[u] , " : ", textAr[u-1], " : ", arabicToLatin[textAr[u] + textAr[u-1]])
        resultLa = resultLa.slice(0, -1) + arabicToLatin[textAr[u] + textAr[u-1]];
      } else if (textAr[u] && vowels[textAr[u] + textAr[u-1]]) { // Medial Position with double character vowel
        console.log("8. Medial double vowel ", textAr[u] , " : ", textAr[u-1], " : ", vowels[textAr[u] + textAr[u-1]])
        resultLa = resultLa.slice(0, -1) + vowels[textAr[u] + textAr[u-1]];
      } else if ((textAr[u-1] == " " && textAr[u] && arabicToLatin[textAr[u] + textAr[u-1]]) || (textAr[u-1] == "\n" && textAr[u] && arabicToLatin[textAr[u] + textAr[u-1]]) || (textAr[u-1] == undefined && textAr[u] && arabicToLatin[textAr[u] + textAr[u-1]])) { // Final double character consonant position 
        console.log("9. Final double consonant ", textAr[u] , " : ", textAr[u-1], " : ", arabicToLatin[textAr[u] + textAr[u-1]])
        resultLa = resultLa.slice(0, -1) + arabicToLatin[textAr[u] + textAr[u-1]]; // TODO OT & MT "ه" is NOT final and ة constructed rules
      } else if ((textAr[u-1] == " " && textAr[u] && vowels[textAr[u] + textAr[u-1]]) || (textAr[u-1] == "\n" && textAr[u] && vowels[textAr[u] + textAr[u-1]]) || (textAr[u-1] == undefined && textAr[u] && vowels[textAr[u] + textAr[u-1]])) { // Final double character vowel position 
        console.log("10. Final double vowel ", textAr[u] , " : ", textAr[u-1], " : ", vowels[textAr[u] + textAr[u-1]])
        resultLa = resultLa.slice(0, -1) + vowels[textAr[u] + textAr[u-1]];
      } else if (((textAr[u-1] == " " && textAr[u] != "" && textAr[u+1] == " ") || (textAr[u-1] == " " && textAr[u] != "" && textAr[u+1] == "\n") || (textAr[u-1] == "\n" && textAr[u] != "" && textAr[u+1] == " ") || (textAr[u-1] == " " && textAr[u] != "" && textAr[u+1] == undefined) || (textAr[u-1] == "\n" && textAr[u] != "" && textAr[u+1] == undefined) || (textAr[u-1] == undefined && textAr[u] != "" && textAr[u+1] == " ") || (textAr[u-1] == "\n" && textAr[u] != "" && textAr[u+1] == "\n") || (textAr[u-1] == undefined && textAr[u] != "" && textAr[u+1] == undefined)) && (arabicToLatin[textAr[u]] || vowels[textAr[u]])) { // Isolate position 
        if (vowels[textAr[u]]) {
          console.log("11. Isolate vowel ", textAr[u] , " : ", vowels[textAr[u]])
          resultLa = resultLa + vowels[textAr[u]];  // Isolate vowel position
        } else {
          console.log("11. Isolate consonant ", textAr[u] , " : ", arabicToLatin[textAr[u]])
          resultLa = resultLa + arabicToLatin[textAr[u]];  // Isolate consonant position
        }
      } else if (textAr[u] && textAr[u-1] == " " && arabicToLatin[textAr[u]]) { // Initial consonant position 
        console.log("12. Initial consonant ", textAr[u] , " : ", arabicToLatin[textAr[u]])
        resultLa = resultLa + arabicToLatin[textAr[u]]; // TODO Capitalisation of Letter
      } else if (textAr[u] && textAr[u-1] == " " && vowels[textAr[u]]) { // Initial vowel position 
        console.log("13. Initial vowel ", textAr[u] , " : ", vowels[textAr[u]])
        resultLa = resultLa + vowels[textAr[u]]; // TODO Capitalisation of Letter
      } else if ((textAr[u-1] == " " && textAr[u] && arabicToLatin[textAr[u]]) || (textAr[u-1] == "\n" && textAr[u] && arabicToLatin[textAr[u]]) || (textAr[u-1] == undefined && textAr[u] && arabicToLatin[textAr[u]])) { // Final consonant position 
        if (textAr[u] == "ـة" || textAr[u] == "ﺔ" || textAr[u] == "ﺓ" || textAr[u] == "ة") {
          console.log("14. Final consonant - constructus modus ", textAr[u])
          resultLa = resultLa + "a"; 
        } else {
          console.log("14. Final consonant ", textAr[u] , " : ", arabicToLatin[textAr[u]])
          resultLa = resultLa + arabicToLatin[textAr[u]]; // TODO OT & MT "ه" is NOT final
        }
      } else if ((textAr[u-1] == " " && textAr[u] && vowels[textAr[u]]) || (textAr[u-1] == "\n" && textAr[u] && vowels[textAr[u]]) || (textAr[u-1] == undefined && textAr[u] && vowels[textAr[u]])) { // Final vowel position 
        console.log("15. Final vowel ", textAr[u] , " : ", vowels[textAr[u]])
        resultLa = resultLa + vowels[textAr[u]];
      } else if (textAr[u] && arabicToLatin[textAr[u]]) { // Medial consonant Position
        if ((textAr[u] == "ﺓ" || textAr[u] == "ة") && textAr[u+1] != " " && textAr[u+1] != "\n" && textAr[u+1] != undefined) {
          console.log("16. Medial consonant - constructus modus ", textAr[u])
          resultLa = resultLa + "t"; 
        } else if ((textAr[u] == "ﺓ" || textAr[u] == "ة") && vowels[textAr[u-1]] != "a") {
          console.log("16. Medial consonant - constructus modus ", textAr[u])
          resultLa = resultLa + "a"; 
        } else if ((textAr[u] == "ﺓ" || textAr[u] == "ة") && vowels[textAr[u-1]] == "a") {
          console.log("16. Medial consonant - constructus modus ", textAr[u])
          resultLa = resultLa.slice(0, -1) + "ā"; 
        } else if (arabicToLatin[textAr[u]] == "y" && vowels[textAr[u-1]] == "i") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "ī";
        } else {
          console.log("16. Medial consonant ", textAr[u] , " : ", arabicToLatin[textAr[u]])
          resultLa = resultLa + arabicToLatin[textAr[u]];
        }
        if (arabicToLatin[textAr[u]] == "l" && vowels[textAr[u-1]] == "a") {// al-
          console.log("16. Medial consonant al- ", textAr[u] , " : ", arabicToLatin[textAr[u]] , vowels[textAr[u-1]])
          resultLa = resultLa + "-";
        } else if (arabicToLatin[textAr[u]] == "l" && vowels[textAr[u-1]] == "i") { //il- 
          console.log("16. Medial consonant il- ", textAr[u] , " : ", arabicToLatin[textAr[u]] , vowels[textAr[u-1]])
          resultLa = resultLa + "-";
        } else if (arabicToLatin[textAr[u]] == "l" && vowels[textAr[u-1]] == "u") { //ul- 
          console.log("16. Medial consonant ul- ", textAr[u] , " : ", arabicToLatin[textAr[u]] , vowels[textAr[u-1]])
          resultLa = resultLa + "-";
        } else if (arabicToLatin[textAr[u]] == "l" && textAr[u-1] == "ٱ") {// l- 
          console.log("16. Medial consonant l- ", textAr[u] , " : ", arabicToLatin[textAr[u]] , vowels[textAr[u-1]])
          resultLa = resultLa + "-";
        } else if (arabicToLatin[textAr[u]] == "w" && vowels[textAr[u-1]] == "u") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", arabicToLatin[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -2) + "ū";
        } 
      } else if (textAr[u] && vowels[textAr[u]]) { // Medial vowel Position
        console.log("17. Medial vowel ", textAr[u] , " : ", vowels[textAr[u]])

        // TODO 3 character vowels and long vowels : إِ followed by ي = ī
        // ءُ followed by و = ū or ئِ followed by ي = ī or أُ followed by و = ū 
        // ا َ followed by ءْ = ā

        if (vowels[textAr[u]] == "a" && vowels[textAr[u-1]] == "a" && (textAr[u-1] + textAr[u]) != "أَ" && (textAr[u-1] + textAr[u]) != "ﺍَ") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "ā";
        } else if (vowels[textAr[u]] == "a" && vowels[textAr[u-1]] == "a" && ((textAr[u-1] + textAr[u]) == "ﺍَ" || (textAr[u-1] + textAr[u]) == "أَ")) {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa;
        } else if (vowels[textAr[u]] == "a" && vowels[textAr[u-1]] == "ʾa") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -2) + "a"; // TODO Reading Flow only then ʾā 
        } else if (vowels[textAr[u]] == "a" && shaddaForms.indexOf(textAr[u-1]) > -1) {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "ā";
        } else if (vowels[textAr[u]] == "an" && vowels[textAr[u-1]] == "a") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "an"; // "ān"
        } else if (vowels[textAr[u]] == "ā" && vowels[textAr[u-1]] == "a") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "ā";
        } else if (vowels[textAr[u]] == "i" && vowels[textAr[u-1]] == "i") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "ī";
        } else if (vowels[textAr[u]] == "i" && vowels[textAr[u-1]] == "ʾi") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -2) + "ʾī";
        } else if (vowels[textAr[u]] == "i" && (textAr[u-1] == "ا" || vowels[textAr[u-1]] == "a")) {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "i";
        } else if (vowels[textAr[u]] == "in" && vowels[textAr[u-1]] == "i") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "in"; // "īn"
        } else if (vowels[textAr[u]] == "u" && vowels[textAr[u-1]] == "u") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "ū";
        } else if (vowels[textAr[u]] == "u" && vowels[textAr[u-1]] == "a") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "u";
        } else if (vowels[textAr[u]] == "u" && vowels[textAr[u-1]] == "ʾa") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -2) + "u";
        } else if (vowels[textAr[u]] == "u" && vowels[textAr[u-1]] == "ʾu") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -2) + "ʾū";
        } else if (vowels[textAr[u]] == "u" && vowels[textAr[u-1]] == "ا") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "ū";
        } else if (vowels[textAr[u]] == "un" && vowels[textAr[u-1]] == "u") {
          console.log("17. Medial vowel long ", textAr[u] , " : ", vowels[textAr[u]], " : ", vowels[textAr[u-1]])
          resultLa = resultLa.slice(0, -1) + "un"; // "ūn"
        } else {
          resultLa = resultLa + vowels[textAr[u]];
        }
      }
    }
    // Form īīaa should be īya or iyya
    if (resultLa.indexOf("īīaa") > -1) {
      // 
      let unprocessed = resultLa.split(" ");
      let processed = "";
      let arabicWords = textAr.split(" ");

      for (let i = 0; i < unprocessed.length; i++) {
        if (arabicWords[i] && unprocessed[i].indexOf("īīaa") > -1) {
          console.log("word being processed īīaa ", unprocessed[i])
          processed = processed + unprocessed[i].replace("īīaa","īya") + ' ' + unprocessed[i].replace("īīaa","iyya") + ' ';
        } else {
          console.log("word not processed ", unprocessed[i])
          processed = processed + unprocessed[i] + ' ';
        } 
      }
      resultLa = processed;
    }
    resultLa = resultLa.replaceAll(" il-"," il").replaceAll("-il-","-il").replaceAll(" ul-"," ul").replaceAll("-ul-","-ul"); // il-,ul- : when non-definite article used
    
    return resultLa;
  }
}

module.exports = arabictransliterate;
/*
  Github : https://github.com/Vyshantha/arabic-transliterate/
  NPM Package : https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/
    https://snyk.io/blog/best-practices-create-modern-npm-package/
    https://docs.npmjs.com/creating-node-js-modules

    Transliterator between الْعَرَبِيَّة (Arabic) and Latin script based on IJMES Standard

    transliterate, arabic, IJMES, latin, script

  npm init
  npm link (test)
  npm link <name-of-package>
  node script.js

  npm login
  npm publish

  npm install <name-of-package>
*/