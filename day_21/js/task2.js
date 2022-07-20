$(document).ready(function () {
      $("#form_validate").validate({
            errorClass: "error fail-alert",
            validClass: "valid",
            rules: {
                  email: {
                        required: true,
                        email: true,
                  },
                  pwd: {
                        required: {
                              depends: function () {
                                    return $('#email').val() !== '';
                              }

                        },
                        min: 3
                  },
                  age: {
                        required: true,
                        min: 18,

                  }
            },
            messages: {
                  email: {
                        required: 'Email cannot be EMPTY',
                        email: 'Please enter VALID email'
                  },
                  pwd: {
                        required: 'Password is required'
                  },
                  age: {
                        required: 'Age is required',
                        min: 'Age should be above 18'
                  }
            }


      });


})
