// •	Create 3 div(include h3, a(span inside anchor)):
// Capture its data when user click on a: get its attribute
//  value(href) and heading value and display in UI.

// •	Create a drop down using jquery and display data in UI.

$(document).ready(function () {
  $("a").click(function () {
    var attr = $(this).attr("href");
    var heading = $(this).siblings("h3").text();
    var a_value = $(this).text();
    $("#display").html(
      "href : " +
        attr +
        "<br>Heading : " +
        heading +
        "<br>Anchor value : " +
        a_value
    );
  });

  $("#dropdown").append(
    '<option value="mango">mango</option>',
    '<option value="orange">orange</option>',
    ' <option value="coconut">coconut</option>',
    '<option value="apple">apple</option>',
    ' <option value="sugarcane">sugarcane</option>'
  );
  // task2
  $("#dropdown").click(function () {
    var selected = $("#dropdown :selected").text();
    $("#display").text(selected);
  });
});
