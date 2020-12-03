$(document).ready(function(){

  // form submission
  $('form').submit(function(e){
   
    // avoid page reload
    e.preventDefault();

    // get the message 
    let getMessage = $('input').val();

    // if message not empty
    if( getMessage !== '' ) {

      // prepare message
      let newMessage = "<p class='message'>" + getMessage + "</p>";

      // append the message to box 
      $('.box .inner').append(newMessage);

      // clear form field
      $('input').val("");

      // move scroll to end after message submission
      $('.box .inner').scrollTop( $('.box .inner')[0].scrollHeight );

    }

  });

});