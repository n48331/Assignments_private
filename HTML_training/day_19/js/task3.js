// change backgroud-color and border color for a div and
// change fontsize and color of text
// when user click on a button

$(document).ready(function () {
    $('#btn1').click(function () {
        $('p').slideToggle(1000, "linear");
    });

    $('#btn2').click(function () {
        $('#div1').css({"background-color":"orangered","border":"3px solid black"});
        $('p').css({"color":"white","font-size":"18px"});
    });
    $('#swap').click(function () {
        if($('img').attr('src')=='./images/img1.jpg')
            $('img').attr('src','./images/img2.jpg')
        else
            $('img').attr('src','./images/img1.jpg')
        
    });

});