$(document).ready(function(){
      $("#form_validate").validate({
            rules: {
              name:{
                  required: true,
                  minlength: 3
                  }, 
                  phone:{
                        required: true,
                        minlength: 10,
                        number:true          
                  },
              email: {
                required: true,
                email: true,
              }}
             
          });
})
