// remove 4th index and add 2 elements
// there : [90, 89, 78, 67, 45, 39, 100]
// create an array of welcome headings,
// display that in UI: add styling
// ['hello', 'hi', 'welcome']
// display first 3 elements of an array
//  [90, 89, 78, 67, 45, 39, 100]
var arr1 = [90, 89, 78, 67, 45, 39, 100];
console.log(arr1);
arr1.splice(4,1,'a','b');
console.log(arr1);

var arr2 = ['hello', 'hi', 'welcome']; 
var heading =  arr2.join(' ')
console.log(heading);
document.getElementById('heading').innerHTML=heading;
document.getElementById('heading').style.color='tomato';
document.getElementById('heading').style.background='powderblue';
document.getElementById('heading').style.textTransform='uppercase';

var arr3 = [90, 89, 78, 67, 45, 39, 100];
console.log(arr3.slice(0,3));
console.log(Number(3.2)%2 ==1);
