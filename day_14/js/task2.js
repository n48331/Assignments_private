// 1. extract first five character from a string
// 2. replace a word in a string with another word
// 3. take a string value and make it uppercase and trim it
// 4. 80 + 170.2 : get the integer part
// 5. console.log(NaN + null);//
// 6. Demonstrate the type of NaN

var str1 = 'HTML is used to stucture Webpages';
console.log('Str 1: '+ str1);
console.log(str1.substring(0,5));
console.log(str1.replace('Webpages','WEBSITES'));

var str2 = '   CSS is used to beutify Webpages  '
console.log('Str 2: '+ str2);
var str2 = str2.toUpperCase()
console.log(str2.trim());
console.log(parseInt(80 + 170.2) );
console.log(NaN + null);
console.log(typeof(NaN));