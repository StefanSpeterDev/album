var image = document.getElementsByClassName("background");
new simpleParallax(image);

/* Gestion musique en fonction du scroll */

var playing = false;
var audioJeVis = $("#audio-je-vis").get(0);
var playerJeVis = $("#player-jevis").get(0);
var audioLeMonde = $("#audio-le-monde").get(0);
var playerLeMonde = $("#player-lemonde").get(0);
var audioDa = $("#audio-da").get(0);
var playerDa = $("#player-da").get(0);
var audioDd = $("#audio-dd").get(0);
var playerDd = $("#player-dd").get(0);

function togglePlayJeVis() {
  audioJeVis.muted = false;
  if (audioJeVis.paused) {
    audioJeVis.play();
    playerJeVis.play();
    return;
  } else {
    playerJeVis.pause();
    return audioJeVis.pause();
  }
}
function togglePlayLeMonde() {
  audioLeMonde.muted = false;
  if (audioLeMonde.paused) {
    audioLeMonde.play();
    playerLeMonde.play();
    return;
  } else {
    playerLeMonde.pause();
    return audioLeMonde.pause();
  }
}
function togglePlayDa() {
  audioDa.muted = false;
  if (audioDa.paused) {
    audioDa.play();
    playerDa.play();
    return;
  } else {
    playerDa.pause();
    return audioDa.pause();
  }
}
function togglePlayDd() {
  audioDd.muted = false;
  if (audioDd.paused) {
    audioDd.play();
    playerDd.play();
    return;
  } else {
    playerDd.pause();
    return audioDd.pause();
  }
}

/* $(window).scroll(function () {
  var pageScroll = $(window).scrollTop();
  console.log(pageScroll);
  if (pageScroll < 1018) {
    $( "#btn-jevis" ).trigger('click');
  } else if (pageScroll > 1018 && pageScroll < 1840) {
    audioLeMonde.play();
    audioJeVis.pause();
  } else if (pageScroll > 1840 && pageScroll < 2600) {
    audioDa.play();
    audioLeMonde.pause();
  } else {
    audioDd.play();
    audioDa.pause();
  }
}); */
