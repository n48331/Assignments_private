// create a function inside obj for addition and multiplication and display result outside the obj
var obj = {
    add: function (a, b) {
        return a + ' + ' + b + ' = ' + (a + b);
    },
    product: function (a, b) {
        return a + ' x ' + b + ' = ' + (a * b);
    },

}

console.log(obj.add(4, 8));
console.log(obj.product(4, 6));

// create a variable outside and display it inside function with another variable
var company = 'Indegene';
function display() {
    var x = company;
    return x;
}
console.log(display());