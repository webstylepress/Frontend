
// Plain JS 
// var targetDiv = document.querySelector('.box');
// targetDiv.scrollTop = targetDiv.scrollHeight;

//jQuery
$(document).ready(function(){
  $('.box').scrollTop( $('.box')[0].scrollHeight );
});

// scrollTop
//// number of pixels the content of div is scrolled
// scrollHeight
//// entire height of width of an element, including its padding
