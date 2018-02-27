$(function() {
  $("a[href^='#']").click(function() {
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  /* ----------- */

  function fullSizeTopArea() {
    var wHeight = $(window).height();
    $(".top-area").height(wHeight + "px");
    $(".top-area-bg").height(wHeight + "px");
  }

  var $bgBack = $(".top-area-bg-back");
  var $bgFront = $(".top-area-bg-front");
  var bgImgPink = "/asset/img/top/" + ($(window).width() >= 768 ? "pc" : "sp") + "/top-area-bg-pink.jpg";
  var bgImgBlue = "/asset/img/top/" + ($(window).width() >= 768 ? "pc" : "sp") + "/top-area-bg-blue.jpg";

  function topBgBlueToPink() {
    $bgFront.fadeOut(4000, function() {
      $bgFront.css("background-image", "url(" + bgImgPink + ")").show();
      $bgBack.css("background-image", "url(" + bgImgBlue + ")");
      topBgPinkToBlue();
    });
  }

  function topBgPinkToBlue() {
    $bgFront.fadeOut(4000, function() {
      $bgFront.css("background-image", "url(" + bgImgBlue + ")").show();
      $bgBack.css("background-image", "url(" + bgImgPink + ")");
      topBgBlueToPink();
    });
  }

  topBgBlueToPink();

  if ($(window).width() >= 768) {
    fullSizeTopArea();
    $(window).resize(fullSizeTopArea);
  }

  /* ----------- */

  $(".top-scroll").click(function() {
    $("html, body").animate({ scrollTop: $(window).height() }, 800, "swing");
  });

  /* ----------- */

  var $win = $(window);
  var $main = $("body");
  var $nav = $("header");
  var navHeight = $nav.outerHeight();
  var navPos = $nav.offset().top;
  var fixedClass = "is-fixed";

  $win.on("load scroll", function() {
    var value = $(this).scrollTop();
    if (value > navPos) {
      $nav.addClass(fixedClass);
      $main.css("margin-top", navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css("margin-top", "0");
    }
  });

  /* ----------- */

  var gnav = $(".header-menu-sp");
  gnav.css("display", "none");
  $(".header-menu-sp a").on("click", function() {
    $(".header-menu-sp-button").click();
  });
  $(".header-menu-sp-button").on("click", function() {
    gnav.slideToggle(500);
    $(this).toggleClass("is-open");
  });

  /* ----------- */

  var emailAddress = ["om", "a.c", "nok", "ili", "t@k", "tac", "con"].reverse().join("");
  $(".js-contact-email-link").attr("href", "mailto:" + emailAddress).text(emailAddress);
});
