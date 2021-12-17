function startTimer(duration, houres, min, sec) {
  var timer = duration,
    houres,
    minutes,
    seconds;
  var moon = $(".zoominheader");
  x = setInterval(function () {
    minutes = Math.floor((timer % 3600) / 60);
    seconds = Math.floor((timer % 3600) % 60);
    hours = Math.floor(timer / 3600);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    houres.text(hours);
    min.text(minutes);
    sec.text(seconds);

    if (--timer < 0) {
      clearInterval(x);
      $(".wrapper-time").css("animation", "disappear 3s  forwards");
      $(".timer").css("animation", "disappear 3s  forwards");
      $("#button-disappear").css("animation", "disappear 3s  forwards");
      $(".zoomoutheader").css("animation", "disappear 3s forwards");

      moon.fadeOut();
      moon.css({
        "background-size": "cover",
        "height": "100%",
        "animation": "moonup 6s ease-in forwards",
        "overflow": "visible",
        "margin-top": "-250px"
      });
      moon
        .css(
          "background-image",
          'url("' + "./assets/images/background-final.jpg" + '")'
        ) //Change BG
        .fadeIn(); //FadeIn
      $(".header-wrapper .block-rs").css("top", "30%");

      setTimeout(function(){
        $('.wrapper-post-timer').fadeIn('slow');
        $('section.histoire').fadeIn('slow');
    },5500);
    }
  }, 1000);
}

jQuery(function ($) {
  var fiveMinutes = 60 * 0.16;
  $(".wrapper-post-timer").hide();
  $("section.histoire").hide();
  min = $("#minutes");
  hours = $("#hours");
  sec = $("#seconds");
  startTimer(fiveMinutes, hours, min, sec);
});
