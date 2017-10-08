$(document).ready(function() {
  var navClosed = true
  $(".button-collapse").sideNav();
  $("#contact-us-btn2, #contact-us-btn1").click(function() {
    $('html, body').animate({
      scrollTop: $("#contact-us").offset().top
    }, 1000);
  });
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100 && navClosed) {
      $("#navbar").removeClass('close')
      navClosed = false
    } else if (scroll < 100 && !navClosed) {
      $("#navbar").addClass('close')
      navClosed = true
    }
  });
});
