// sum of digits: e.g. (123: 1 + 2 + 3 = 6) or (1234 : 1 + 2 + 3 + 4 = 10)
function getSum() {
    var num = document.getElementById('div1_input').value;
    digits = num.split('')
    sum = 0;
    // console.log(Number(digits[1]));
    for (i = 0; i < digits.length; i++) {
        sum += Number(digits[i])
    }
    document.getElementById('div1_result').innerHTML = sum

}
// palindrome string (aca: aca(reverse) is a palindrome, abc: cba is not a palindrome): try it with loops/array method
function isPalindrome() {
    // div2
    var str = document.getElementById('div2_input').value;
    strArr = str.split('')
    revStr = strArr.reverse().join('')

    if (str === revStr) {
        document.getElementById('div2_result').innerHTML = 'It is a Palimdrome'
    } else {
        document.getElementById('div2_result').innerHTML = 'Not Palimdrome'
    }
}
// From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if multiple of both display "hello" or
// else print the number
// e.g.
// 1
// 2
// foo
// 4
// bar
// foo
function printNum() {
    // div3
    result = ''
    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result += ' hello ';
            continue;
        }
        else if (i % 3 == 0) {
            result += ' foo ';
            continue;
        }
        else if (i % 5 == 0) {
            result += ' bar ';
            continue;
        } else {
            result += ' ' + i + ' ';
            continue;
        }
    }
    document.getElementById('div3_result').innerHTML = result
}

// • count occurrence of a particular character in a string (hello: count of l is 2): try using loops
function countStr() {
    // div4
    var str = document.getElementById('div4_input1').value.toLowerCase()
    var strCheck = document.getElementById('div4_input2').value.toLowerCase()
    count = 0
    strArr = str.split('')
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i] == strCheck)
            count += 1
    }
    document.getElementById('div4_result').innerHTML = 'No. of occurance : ' + count
}

// • add only even numbers in an array (array elements to be input by user)
function getEven() {
    // div5
    var str = document.getElementById('div5_input').value
    var arr = str.split(',')
    result = ''
    console.log(arr);
    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0)
            result += ' ' + arr[i] + ' '
    }
    document.getElementById('div5_result').innerHTML = 'Even numbers : ' + result
}
// • biggest of even number in an array ([10, 12, 90, 93, 707]): biggest even number is 90
function bigEven() {
    // div6
    var result = 0
    var str = document.getElementById('div6_input').value
    var arr = str.split(',')
    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0 && result <= Number(arr[i]))
            result = arr[i]
    }

    document.getElementById('div6_result').innerHTML ='Biggest of even number : '+ result
}


// 2. Create a dropdown using js, when user click on a button it should display default selected item in the UI.
// For creating a drop down take array.
// div7
function createDropdown() {
    var names = ['Abhiram', 'Prem', 'Nihal', 'Jeevitha', 'Sneha', 'Aditya', 'Ashrith', 'Deekshitha', 'Mamith', 'Muskan', 'Shreyas', 'Thanushree', 'Varsha', 'Srinivasa', 'Rahul']
    for (var i = 0; i < names.length; i++) {
        document.getElementById('div7_input').innerHTML += ('<option value= ' + names[i] + '>' + names[i] + '</option>')
    }
}
function diaplayName() {
    var name = document.getElementById('div7_input').value
    console.log(name);
    document.getElementById('div7_result').innerHTML ='You selected : '+ name
}

createDropdown();