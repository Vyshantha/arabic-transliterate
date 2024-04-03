# NPM Package : arabic-transliterate
Transliterator between الْعَرَبِيَّة (Arabic) and Latin script based on IJMES Standard

# NPM Package : arabic-transliterate
The package transliteration texts from `fully-vocalised` الْعَرَبِيَّة (Arabic) script to Latin script based on [IJMES](https://en.wikipedia.org/wiki/International_Journal_of_Middle_East_Studies) standard. Additionally the application transliterate texts from Latin script based on IJMES standard to `non-vocalised` الْعَرَبِيَّة (Arabic) script. To experiment functionality of this package use the [Arabic Transliterator App](https://vyshantha.github.io/arabictransliterate/) website on you browser. 

Note : the `non-vocalised` الْعَرَبِيَّة (Arabic) text to Latin IJMES translieration isn't completely supported.

## Install [Node](https://nodejs.org/en/download), [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then install this package
```npm install arabic-transliterate```

## Usage
### Import the "arabic-transliterate" package

```
const arabictransliterate = require("arabic-transliterate");
```

### Method call in code 
```arabictransliterate(input, direction, language)```

> input
>> text in IJMES for Latin \
>> text in الْعَرَبِيَّة

> direction
>> 'latin2arabic' \
>> 'arabic2latin'

> language
>> 'Arabic' \
>> 'Persian' (# to be completed) \
>> 'Ottoman Turkish' (# to be completed) \
>> 'Modern Turkish' (# to be completed)

### Latin transliteration examples :

```
console.log('Latin IJMES >> الْعَرَبِيَّة non-vocalised : ', arabictransliterate("Maṭlaʿ al-Saʿdīn","latin2arabic","Arabic")); 
    // Expected Latin IJMES >> الْعَرَبِيَّة non-vocalised :  مطﻼع  السعدين
```


### الْعَرَبِيَّة transliteration examples :

```
console.log('fully-vocalised الْعَرَبِيَّة >> Latin IJMES : ', arabictransliterate("مُكَاتَبَات علاَّمي","arabic2latin","Arabic")); 
    // Expected fully-vocalised الْعَرَبِيَّة >> Latin IJMES : mukātabāt ʿallāmy
```

## Execution 
Given the above JavaScript code is included into a script.js file : ```node script.js```

## License
Distributed under the MIT License. See LICENSE for more information.

## Contact Author
[Github](https://github.com/Vyshantha)

## Report Issues
[Code](https://github.com/Vyshantha/arabic-transliterate)
