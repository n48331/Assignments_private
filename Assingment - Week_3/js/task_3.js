// 1. extract first five character from a string
// 2. replace a word in a string with another word
// 3. take a string value and make it uppercase and trim it 
// 4. 80 + 170.2 : get the integer part
// 5. console.log(NaN + null);//
// 6. Demonstrate the type of NaN 

var str1 = '  HTML is used to stucture Webpages   ';

console.log('String: ' + str1);
document.getElementById('str1').innerHTML = 'String: ' + str1

console.log(str1.substring(0, 5));
document.getElementById('q1').innerHTML = str1.substring(0, 5)

console.log(str1.replace('Webpages', 'WEBSITES'));
document.getElementById('q2').innerHTML = str1.replace('Webpages', '<u>WEBSITES</u>')

console.log(str1.toUpperCase().trim());
document.getElementById('q3').innerHTML = str1.toUpperCase().trim()

console.log(parseInt(80 + 170.2));
document.getElementById('q4').innerHTML = parseInt(80 + 170.2)

console.log(NaN + null);
document.getElementById('q5').innerHTML = NaN + null

console.log(typeof (NaN));
document.getElementById('q6').innerHTML = typeof (NaN)
