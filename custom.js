$(document).ready(function(){
  moveToTop();
});

/*! Animate to top */
function moveToTop() {
  $('.top').click(function (e) {
    e.preventDefault();
    $('body,html').animate({scrollTop: 0}, 800,'easeInOutExpo');
        return false;
  });
}