// create a parameterized function to multiple 3
//  numbers and function returns a value 
function product(a, b, c) {
    var result = a * b * c;
    console.log(result);
    return result;
}
product(10, 20, 30);


//  create a parameterized function to divide 2 numbers
function divide(a, b) {
    var result = a / b;
    return result;
}
var d = divide(50, 20);
console.log(d);


// create a button and div and change div
//  background color to red and button bg color to
//   pink, when user click on a button

function changeColor() {
    document.getElementById('button1').style.backgroundColor = 'pink';
    document.getElementById('div1').style.backgroundColor = 'red';

}
