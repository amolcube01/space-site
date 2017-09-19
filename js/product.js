$(document).ready(function () {
  $("#downarrow").on('click', function () {
    $('html, body').animate({
      scrollTop: $("#productflow").offset().top
    }, 1000);
  });
});
