// Using forismatic.com API for generating random quotes

$(document).ready(function(){
var randomNumber;
var randomQuote
var randomAuthor;

Quote();
    
function Quote() { 
 
    
//var quotes = ["Never answer a critic, unless he's right", "If you are a dog and your owner suggests that you wear a sweater, suggest that he wear a tail", "Tradition is a guide and not a jailer"]
//var authors = ["Bernard M. Baruch", "Fran Lebowitz ", "W. Somerset Maugham"];
//
//
//randomNumber = Math.floor((Math.random()*quotes.length));
//  
//randomQuote = quotes[randomNumber];
//randomAuthor = authors[randomNumber]; 
    
var quoteText, quoteAuthor;

    
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    
$.getJSON(url, function(data){
    
   $("#quote").html('"'+data.quoteText+'"');
    $("#author").html('-'+data.quoteAuthor);
    quoteText = data.quoteText;
    quoteAuthor = data.quoteAuthor;
    console.log("quoteText: ", data.quoteText);
    console.log("quoteAuthor: ", data.quoteAuthor);
    
    $("#tweet").on("click", function(){
    window.open("https://www.twitter.com/intent/tweet?text="+ quoteText + "-" + quoteAuthor );   
});
    
//$("#quote").text(randomQuote);
//$("#author").text(randomAuthor); 
 
}); 
    
}

$("#newQuote").on("click", function(){
Quote();
       
});  
    
});