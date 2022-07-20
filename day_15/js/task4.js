// calculate compound interest (p/ (r * t))* 100:
// ask user for p, r, t

function calculate() {
    var p = document.getElementById('p').value ;
    var r = document.getElementById('r').value;
    var t = document.getElementById('t').value;
    
    if ( p!=0 && t!=0 && r!=0) {      
        var result = (p / (r * t)) * 100
        document.getElementById('result').innerHTML= 'Result = '+ result;
        console.log(result);
        return result;
    }
    else{
        console.log('Enter Proper Values');
    }
}
