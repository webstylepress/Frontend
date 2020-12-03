$(document).ready(function(){
  
  // No.1. Find a character or characters in text and wrap it or all found characters in span

  $('h3:contains("-")').html(function(_, html){
    return html.split('-').join("<span>-</span>");
  });
    
  // No.2. Find a word in text, if present, add class to that element containing that text

  $('ul li:contains("Milk")').each(function(){
    $(this).addClass('highlight');
  });
  
  // No.3. Find a word in text, if not present, add class to those elements not containing that text

  $('ul li:not( :contains("Milk") )').each(function(){
    $(this).addClass('no-highlight');
  });

});


