$(function () {
  $("#datepicker").datepicker({
    showOn: "button",
    buttonImage: "../images/calender.png",
    buttonImageOnly: true,
    buttonText: "Select date",
  });
});

$(function () {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
  ];

  $("#tags").autocomplete({
    source: availableTags,
    autoFocus: true,
    classes: {
      "ui-autocomplete": "autocomplete",
      "ui-autoFocus": "autocomplete",
    },
  });
});

$(function () {
  $("#accordion").accordion({
    event: "mouseover",
  });
});
