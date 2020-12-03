$(document).ready(function(){
  triggerSticky();
});

$(window).scroll(function(){
  triggerSticky();
});

function triggerSticky() {
  if ($(window).scrollTop() >= 1) {
    $('body').addClass('sticky');
  } else {
    $('body').removeClass('sticky');
  }
}


// console.log( $('h2').offset().top );

// var stickyTop = $('h2').offset().top;
// $(window).scroll(function() {
//   if ( $(window).scrollTop() > stickyTop ) {
//     $('body').addClass('sticky');
//   } else {
//     $('body').removeClass('sticky');
//   }
// });
