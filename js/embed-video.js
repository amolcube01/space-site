function videoButton() {
  $('.video-button').css('display', 'none');
  var url = $('.video-url').attr('video-url');
  var autoplay = url + '?modestbranding=1&rel=0&html5=1&autoplay=1';
  console.log(autoplay)
  $('.video-iframe').attr('src', autoplay);
  $('.homepage-video').css('display', 'block');
}