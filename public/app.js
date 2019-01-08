$(document).ready(function() {

  function toggleMute() {
    var video = $('video')[0];

    if(video.muted){
      video.muted = false;
    } else {
      video.muted = true;
    }

    $('.sound-toggle').toggleClass('on');
  };

  $('html').on('click', '.sound-toggle a', function() {
    toggleMute();
  });

});
