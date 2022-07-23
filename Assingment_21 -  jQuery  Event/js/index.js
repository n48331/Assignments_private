// •	Create 3 div(include h3, a(span inside anchor)): 
// Capture its data when user click on a: get its attribute
//  value(href) and heading value and display in UI.

// •	Create a drop down using jquery and display data in UI.


  $(document).ready(function () {
    $('a').click(function(){
      $('$(this) span').text($(this).attr('href'))
    })

    // task2
    $('#dropdown').click(function () {
    var selected = $('#dropdown :selected').text()
    $('.task2 h2').text(selected)
    })
  });

