// create a list in html
// ask user any item from list
// display 'item' found
function findItem() {
    var list = document.querySelectorAll('.item')
    var str = document.getElementById('str').value
    result = '';
    console.log(list[0].innerHTML);
    for(i=0;i<list.length;i++){
        if(str.toLowerCase()===list[i].innerHTML.toLowerCase()){
            console.log('found');
            result = '<h3>item found</h3>'
            break;
        }else{
            console.log('Not found');
            result = '<h3>item NOT found</h3>'
        }   
    }
    document.getElementById('result').innerHTML=result
}

