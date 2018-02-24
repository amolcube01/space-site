$(document).ready(function() {

  $(".button-collapse").sideNav();

  $("#contact-us-btn2, #contact-us-btn1").click(function() {
    $('html, body').animate({
      scrollTop: $("#contact-us").offset().top
    }, 1000);
  });

  $("#api-gateway-btn").click(function() {
    $('html, body').animate({
      scrollTop: $("#api-gateway").offset().top
    }, 1000);
  });

  $("#tutorial-btn").click(function() {
    $('html, body').animate({
      scrollTop: $("#tutorial").offset().top
    }, 1000);
  });

  $("#submitBtnContactUs").click(function() {
    var name = $('#name');
    var email = $('#email');
    var msg = $('#message');

    if (name.val().length == 0) {
      name.addClass('invalid')
    }

    if (msg.val().length == 0) {
      msg.addClass('invalid')
    }

    if (name.hasClass('invalid') || email.hasClass('invalid') || msg.hasClass('invalid')) {
      Materialize.toast('Form not properly filled', 1000)
      return
    }
    $.post("/contact", {
        name: name.val(),
        email: email.val(),
        message: msg.val()
      })
      .done(function(data) {
        name.val('')
        email.val('')
        msg.val('')
        if (data.ack) {
          Materialize.toast('Form submitted successfully', 1000)
        } else {
          Materialize.toast('Form not submitted', 1000)
        }
      });
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) $("#navbar").addClass('scrolled')
    else if (scroll < 100) $("#navbar").removeClass('scrolled')
  });

  $('.standard.tooltipped').tooltip({
    delay: 50,
    html: true,
    position: 'top',
    tooltip: 'I am standard'
  });

  $('.oracle.tooltipped').tooltip({
    delay: 50,
    html: true,
    position: 'top',
    tooltip: 'I am oracle'
  });

});
