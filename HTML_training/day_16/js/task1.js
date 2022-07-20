// ask user input
// task using for loops
// display multiplication table
// 2 * 1 = 2
// 2 * 2 = 3
// .
// .
// .
// /
// 2 * 10 = 20-->
// ask user for number n
//     use for loops
// display even numbers upto n number
function generateTable() {
    var num = document.getElementById('num').value
    var result = ''
    for (var i = 1; i <= 10; i++) {
        result = result + '<p>' + num + ' x ' + i + ' = ' + num*i+'</p>'
    }
    document.getElementById('table').innerHTML=result
}


function evenNumbers() {
    var num = document.getElementById('n').value
    var result = ''
    if (num!=0){
        for (var i = 1; i < num; i++) {
            if (i%2==0){
                result = result + '<p>'+i+'</p>'
            }
        }
    }
    else{
        result ='0 cant be entered'
    }
    document.getElementById('even').innerHTML=result
}
// search for an element in an array, once you find it display "element found" and exit from loop
var arr = ['83','89','45','12','63','78','42','56','12','cat','apple','table']
document.getElementById('array').innerHTML='Array = '+ arr
function searchArr() {
    var result = ''
    var element = document.getElementById('searchArr').value
    for(i=0;i<arr.length;i++){
        if(arr[i]==element){
            result= '<p>Element found</p>'
            break;
       }
        else{
            result= '<p>Element not found</p>'

        }
    }
    document.getElementById('found').innerHTML=result
}