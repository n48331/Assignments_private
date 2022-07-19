function storeData(){
    var pname = document.getElementById('name').value
    var age = document.getElementById('age').value
    var contact = document.getElementById('contact').value
    var email = document.getElementById('email').value

    var details ={
        name:pname,
        age:age,
        contact:contact,
        email:email
    }

    var detailsJson = JSON.stringify(details)
    console.log(detailsJson);
    
    if (typeof (Storage) !== 'undefined') {
        localStorage.setItem(pname,detailsJson)
        var person = JSON.parse(localStorage.getItem(pname))
    } else {
        document.getElementById('storageweb').innerHTML = "Sorry, your browser doesn't support Web Storage";
    }
        console.log(person);
        document.getElementById('display_name').innerHTML ='Name :' +'<span>' +person.name +'  </span>'
        document.getElementById('display_age').innerHTML ='Age : ' + '<span>' +person.age  + '  </span>'
        document.getElementById('display_contact').innerHTML ='Contact :' + '<span>' +person.contact + '  </span>'
        document.getElementById('display_email').innerHTML ='Email :' + '<span>' +person.email + '  </span>'


        

    }