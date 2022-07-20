$(document).ready(function () {
  function idGenerator() {
    $(".slides__img").each(function (index, el) {
      $(this).attr("id", "slide_" + index);
    });
    $(".dots__single").each(function (index, el) {
      $(this).attr("id", "dot_" + index);
    });
  }
  function dotsFocus() {
    $("[id^='dot_']").removeClass("dots__current");
    var id = $(".slides__img:eq(1)").attr("id");
    var n = Number(id.substr(-1));
    if (n === 0) {
      n = $(".slides__img").length;
    }
    $("#dot_" + (n - 1)).addClass("dots__current");
  }

  // slide up caption
  function captionSlideUp(d, e) {
    var $cap1 = $(".slide__caption:eq(1)");
    $cap1.animate(
      {
        bottom: "20%",
        opacity: 1,
      },
      {
        duration: d,
        easing: e,
        complete: dotsFocus(),
      }
    );
  }

  // slide down caption

  // slide movement
  function slideMove(t) {
    if (t === "prev") {
      return $(".slides__img").first().before($(".slides__img").last());
    }
    if (t === "next") {
      return $(".slides__img").last().after($(".slides__img").first());
    }
  }

  // slide images
  function slideIt(l, d, e, t) {
    var $slides = $(".slides");
    $slides.animate(
      {
        left: l,
      },
      {
        duration: d,
        easing: e,
        complete: function () {
          $slides.css("left", "-100%");
          slideMove(t);
        },
      }
    );
  }

  // slide with dots
  function dotsControl(d, e) {
    $(".dots__single").click(function () {
      var currentId = parseInt($(".dots__current").attr("id").substr(-1));
      var clickId = parseInt($(this).attr("id").substr(-1));
      var max = $(".dots__single").length - 1;
      var half = Math.floor($(".dots__single").length / 2);
      var diff;
      if (currentId > clickId) {
        diff = currentId - clickId;
        if (diff === max) {
          diff = 1;
          l = "-200%";
          t = "next";
        } else if (diff <= half) {
          l = "0%";
          t = "prev";
        } else {
          diff--;
          l = "-200%";
          t = "next";
        }
      }
      if (currentId < clickId) {
        diff = clickId - currentId;
        if (diff === max) {
          diff = 1;
          l = "0%";
          t = "prev";
        } else if (diff <= half) {
          l = "-200%";
          t = "next";
        } else {
          diff--;
          l = "0%";
          t = "prev";
        }
      }
      for (var i = 0; i < diff; i++) {
        slideIt(l, d, e, t);
      }
    });
  }

  function slideShow(d, e) {
    $("#prev").click(function () {
      var t = $(this).attr("id");
      slideIt("0%", d, e, t);
    });
    $("#next").click(function () {
      var t = $(this).attr("id");
      slideIt("-200%", d, e, t);
    });
    dotsControl(d, e);
  }

  idGenerator();

  setInterval(() => {
    slideIt("-200%", 800, "swing", "next");
  }, 5000);

  slideShow(800, "swing");
});
