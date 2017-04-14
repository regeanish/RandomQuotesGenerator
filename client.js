$(document).ready(function(){
var randomNumber;
var randomQuote
var randomAuthor;

Quote();
    
function Quote() { 
 
    
$.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
        $("#tweet").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });

var quotes = ["Never answer a critic, unless he's right.", "If you are a dog and your owner suggests that you wear a sweater, suggest that he wear a tail.", "Tradition is a guide and not a jailer."]
var authors = ["Bernard M. Baruch", "Fran Lebowitz ", "W. Somerset Maugham"];


randomNumber = Math.floor((Math.random()*quotes.length));
  
randomQuote = quotes[randomNumber];
randomAuthor = authors[randomNumber];    

$("#quote").text(randomQuote);
$("#author").text(randomAuthor); 

}

$("#newQuote").on("click", function(){
Quote();
    
});  
    
$("#tweet").on("click", function(){
window.open("https://www.twitter.com/intent/tweet?text="+randomQuote + " -" + randomAuthor );

});  
    
});