'use strict';

jQuery(function () {

  languageHeader();
  scrollFunction();
  openModalProject();
  openModalStart();
  typingText(); 
  
});

function languageHeader(){
  $(".header__language-item").on("click", function(){
    $(".header__language-item").removeClass("active");
    $(this).addClass("active");
  });
}

function openModalProject(){
  $(".works-btn").on("click", function(){
    $(".modal").addClass("active");
    $("body").css("overflow-y", "hidden");
  })

  $(".modal__close").on("click", function(){
    $(".modal").removeClass("active");
    $("body").css("overflow-y", "auto");
  })
}

function openModalStart(){
  $(".start-project").on("click", function(){
    $(".modal-start").addClass("active");
    $("body").css("overflow-y", "hidden");
    $(".modal-start").css("overflow-y", "auto");
  })
  

  $(".modal-start__item-close").on("click", function(){
    $(".modal-start").removeClass("active");
    $("body").css("overflow-y", "auto");
  })
}


function scrollFunction() {

  $(document).on("scroll", function () {

    

    if ($(window).width() >= 1280) {

      var phrase1 = Math.max(340 - 1 * window.scrollY) + "px";

      
      $(".phrase-two").css("left", Math.max(1500 - 1 * window.scrollY) + "px");
      $(".phrase-three").css("left", Math.max(3600 - 1 * window.scrollY) + "px");
      $(".phrase-four").css("left", Math.max(5400 - 1 * window.scrollY) + "px");
      $(".phrase-five").css("left", Math.max(6500 - 1 * window.scrollY) + "px");
      $(".clients__block").css("right", Math.max(6700 - 1 * window.scrollY) + "px");
    } else if ($(window).width() > 768 && $(window).width() < 1279) {
     
      var phrase1 = Math.max(150 - 0.5 * window.scrollY) + "px";
      $(".phrase-two").css("left", Math.max(800 - 0.5 * window.scrollY) + "px");
      $(".phrase-three").css("left", Math.max(2000 - 0.7 * window.scrollY) + "px");
      $(".phrase-four").css("left", Math.max(3300 - 0.7 * window.scrollY) + "px");
      $(".phrase-five").css("left", Math.max(6200 - 1 * window.scrollY) + "px");
      $(".clients__block").css("right", Math.max(6300 - 1 * window.scrollY) + "px");
    } else if ($(window).width() < 768) {
      var phrase1 = Math.max(50 - 0.7 * window.scrollY) + "px";
    
      $(".phrase-two").css("left", Math.max(550 - 0.5 * window.scrollY) + "px");
      $(".phrase-three").css("left", Math.max(2500 - 0.7 * window.scrollY) + "px");
      $(".phrase-four").css("left", Math.max(4700 - 0.9 * window.scrollY) + "px");
      $(".phrase-five").css("left", Math.max(8500 - 1.2 * window.scrollY) + "px");
      $(".clients__block").css("right", Math.max(8300 - 1.2 * window.scrollY) + "px");
    }

    console.log(phrase1);
    $(".phrase-one").css("left", phrase1);
  })

}


function typingText(){
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 120 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
}






