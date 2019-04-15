// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var linkUrl = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
var original = "https://media1.giphy.com/media/Y4pAQv58ETJgRwoLxj/giphy_s.gif?cid=e1bb72ff5cb49f73542e6e7251e5dc67";


$("#search-button").click(function(){
  $.ajax({
       url: linkUrl,
       method: "GET",
       success: function(response){
           $('#original').append('<img src="' + original + '">');
           
           var searchTerm = $("#search-term").val();
           var requestUrl = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
           $('#original').append('<img src="' + requestUrl + '">');
       }
    }); 
    
});

