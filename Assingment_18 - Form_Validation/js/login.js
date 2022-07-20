$(document).ready(function () {
  var date = new Date();
  var year = date.getFullYear();
  $("#signup_form").validate({
    errorClass: "error fail-alert",
    validClass: "valid",
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      age: {
        required: true,
        min: 18,
      },

      dob: {
        required: {
          depends: function () {
            return $("#age").val() !== "";
          },
        },
        max: year - 18 + "-" + date.getMonth() + "-" + date.getDate(),
      },
      email: {
        required: true,
        email: true,
      },
      pwd: {
        required: true,
        minlength: 4,
      },
    },
    messages: {
      name: {
        required: "Your name is required",
        minlength: "Enter at least 4 characters",
      },
      age: {
        required: "Please Enter Your age",
        min: "Age should be 18 years or above",
      },
      dob: {
        required: "DOB should be 18 years or above",
        max: "Dob should be 18 years or above",
      },
      email: {
        required: "Your email is required",
        email: "Enter a valid email",
      },
      pwd: {
        required: "Please enter Password",
        minlength: "Enter at least 4 characters",
      },
    },
    errorElement: "div",
    errorPlacement: function (error, element) {
      var placement = $(element).data("error");
      if (placement) {
        $(placement).append(error);
      } else {
        error.insertAfter(element);
      }
    },
  });
});
console.log();
