// returns index of duplicate elements 
function getDupIndex(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i]
        for (var j = 0; j < arr.length; j++)
            if (temp === arr[j] && i != j)
                result.push(j);
    }
    return result.sort();
}
// Remove duplicate items from an array [10, 50,20 67, 10, 20]: e.g. remove 10, 20 (use loops)
function removeDup() {
    var arr = [10, 50, 20, 67, 10, 20];
    var indexes = getDupIndex(arr)
    // [0, 2, 4, 5]
    for (var i = 0; i < indexes.length; i++) {
        arr.splice(indexes[i] - i, 1)
    }
    document.getElementById('div1_result').innerHTML = '[' + arr + ']'
}

function indexDup() {
    var arr = [10, 50, 20, 67, 10, 20];
    var result = getDupIndex(arr)
    document.getElementById('div2_result').innerHTML = '[' + result + ']'
}


function diff() {
    var arr1 = [12, 56, 789]
    var arr2 = [12, 56, 789]
    var result = []
    for (var i = 0; i < arr1.length; i++) {
        result.push(arr1[i] - arr2[i])
    }
    console.log(result);
    document.getElementById('div3_result').innerHTML = '[' + result + ']'

}
function remEle() {
    var arr = [12, 56, 89];
    ele = document.getElementById('div4_input').value
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === Number(ele)) {
            arr.splice(i, 1);
        }
    }

    document.getElementById('div4_result').innerHTML = '[' + arr + ']'
}
function addInt() {
    arr = []
    arr.push(Math.floor(Math.random() * 10))
    console.log(arr);
    document.getElementById('div5_result').innerHTML = '[' + arr + ']'
}
function bigOdd() {
    var result = 0
    var arr = [10, 12, 900, 93, 707]
    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 !== 0 && result <= Number(arr[i]))
            result = arr[i]
    }

    document.getElementById('div6_result').innerHTML = 'Biggest of even number : ' + result
}