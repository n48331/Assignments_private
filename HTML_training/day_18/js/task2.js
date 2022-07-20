// create a form, store user input in session
// storage in json format and
// display one property in UI
// ask user to delete a key from session storage.

function addItem(){
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var key = document.getElementById('key').value

    var person = {
        firstname:fname,
        lastname:lname,
        email:email,

    }
   var personDetails = JSON.stringify(person) ;
   if (typeof (Storage !== 'undefined')) {
   sessionStorage.setItem(key,personDetails)
   displayUi = JSON.parse(sessionStorage.getItem(key))
   document.getElementById('diplay').innerHTML = displayUi.firstname +" Details Added"
   }else {
    document.getElementById('localStorageItem').innerHTML = 'Local storage not working'
    }

}

function delItem(){
    var key = document.getElementById('delitem').value
    if (typeof (Storage !== 'undefined')) {
        sessionStorage.removeItem(key)
        }else {
    document.getElementById('localStorageItem').innerHTML = 'Local storage not working'
         
         }

}