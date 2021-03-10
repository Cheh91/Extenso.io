'use strict';

const btn = document.firstElementChild

jQuery(document).ready(function () {

  languageHeader();
  scrollFunction();
  


});

function languageHeader(){
  $(".header__language-item").on("click", function(){
    $(".header__language-item").removeClass("active");
    $(this).addClass("active");
  });
}

function scrollFunction() {

  
  
    // if ($(window).width() >= 1440) {
      $(document).on("scroll", function () {
        $(".phrase-one").css("left", Math.max(340 - 1 * window.scrollY) + "px");
        $(".phrase-two").css("left", Math.max(1500 - 1 * window.scrollY) + "px");
        $(".phrase-three").css("left", Math.max(3600 - 1 * window.scrollY) + "px");
        $(".phrase-four").css("left", Math.max(5400 - 1 * window.scrollY) + "px");
        $(".phrase-five").css("left", Math.max(6500 - 1 * window.scrollY) + "px");
        $(".clients__block").css("right", Math.max(6700 - 1 * window.scrollY) + "px");
      })
    // } else if ($(window).width() < 1440) {
    //   $(document).on("scroll", function () {
    //     $(".phrase-one").css("left", Math.max(150 - 0.5 * window.scrollY) + "px");
    //     $(".phrase-two").css("left", Math.max(800 - 0.5 * window.scrollY) + "px");
    //     $(".phrase-three").css("left", Math.max(2000 - 0.7 * window.scrollY) + "px");
    //     $(".phrase-four").css("left", Math.max(3300 - 0.7 * window.scrollY) + "px");
    //     $(".phrase-five").css("left", Math.max(6200 - 1 * window.scrollY) + "px");
    //     $(".clients__block").css("right", Math.max(6300 - 1 * window.scrollY) + "px");
    //   })
    // } else if ($(window).width() < 768) {
      // $(document).on("scroll", function () {
      //   $(".phrase-one").css("left", Math.max(50 - 0.7 * window.scrollY) + "px");
      //   $(".phrase-two").css("left", Math.max(550 - 0.5 * window.scrollY) + "px");
      //   $(".phrase-three").css("left", Math.max(2200 - 0.7 * window.scrollY) + "px");
      //   $(".phrase-four").css("left", Math.max(4700 - 0.9 * window.scrollY) + "px");
      //   $(".phrase-five").css("left", Math.max(8500 - 1.2 * window.scrollY) + "px");
      //   $(".clients__block").css("right", Math.max(8300 - 1.2 * window.scrollY) + "px");
      // })
    // }
  // })
// })
}






