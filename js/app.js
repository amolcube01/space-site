$(document).ready(function() {
  $("#navbar").hide()
  $(".button-collapse").sideNav();
  $("#contact-us-btn").click(function() {
    $('html, body').animate({
      scrollTop: $("#contact-us").offset().top
    }, 2000);
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) $("#navbar").show()
    else $("#navbar").hide()
  });
});
