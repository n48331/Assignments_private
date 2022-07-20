// task
// create a data inside local storage
// and retreive data in UI
// and add a button to delete a particular
//  item from local storage

if (typeof (Storage !== 'undefined')) {
    localStorage.setItem('username', 'Arun123');
    localStorage.setItem('firstname', 'Arun');
    document.getElementById('localStorageItem').innerHTML = localStorage.getItem('firstname')
} else {
    document.getElementById('localStorageItem').innerHTML = 'Local storage not working'

}

function delItem() {
    if (typeof (Storage !== 'undefined')) {
        localStorage.removeItem('firstname');
        document.getElementById('localStorageItem').innerHTML = localStorage.getItem('firstname')
    } else {
        document.getElementById('localStorageItem').innerHTML = 'Local storage not working'

    }
}
// create a json data(json) inside
// session storage and display any
// property in UI
var book = '{"name":"Zero to One","author":"Blake","published year":"2014","language":"English"}'
if (typeof (Storage !== 'undefined')) {
    sessionStorage.setItem('book', book);
    var bookDetails = JSON.parse(sessionStorage.getItem('book'))
    document.getElementById('jsonItem').innerHTML = bookDetails.name
} else {
    document.getElementById('localStorageItem').innerHTML = 'Local storage not working'

}
console.log(book);
// document.getElementById('jsonItem').innerHTML = book.name
