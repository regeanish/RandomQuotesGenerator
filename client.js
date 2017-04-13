$(document).ready(function(){
  
  function Quote() { 
 
var quotes = ["Never answer a critic, unless he's right.", "If you are a dog and your owner suggests that you wear a sweater, suggest that he wear a tail.", "Tradition is a guide and not a jailer."]
var authors = ["Bernard M. Baruch", "Fran Lebowitz ", "W. Somerset Maugham"];


var randomNumber = Math.floor((Math.random()*quotes.length));
  
var RandomQuote = quotes[randomNumber];
var RandomAuthor = authors[randomNumber];    

$("#quote").text(RandomQuote);
$("#author").text(RandomAuthor); 

}
 
$(".btn").on("click", function(){
Quote();

});    
    
});