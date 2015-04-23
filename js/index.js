window.onload =  function fillremaindingPage() {

     var windowHeight = window.innerHeight;
     var navbarHeight = document.getElementById('navbar').clientHeight;
     var height = "height:" + (windowHeight - navbarHeight) + "px;" + "margin-top:" + navbarHeight + "px;";
     document.getElementById('first-container').setAttribute('style', height)
}

$(document).ready(function scrolling() {

  $(".about-menu").click(function() {
    $('html, body').animate({
      scrollTop: $(".about-container").offset().top
    }, 1000);
  });

  $(".skills-menu").click(function() {
    $('html, body').animate({
      scrollTop: $(".skills-container").offset().top
    }, 1000);
  });

  $(".interests-menu").click(function() {
    $('html, body').animate({
      scrollTop: $(".interests-container").offset().top
    }, 1000);
  });

  $(".timeline-menu").click(function() {
    $('html, body').animate({
      scrollTop: $(".timeline-container").offset().top
    }, 1000);
  });

  $(".contact-menu").click(function() {
    $('html, body').animate({
      scrollTop: $(".contact-container").offset().top
    }, 1000);
  });

  $(".brand-logo").click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1000);
  });

});
