
    
// Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
var topics = ["Coming to America", "Bridesmaids", "Meet the Parents", "Friday", "Wedding Crashers", "The Nutty Professor", "Hitch", "Death at a Funeral" ]

// Your app should take the topics in this array and create buttons in your HTML. Try using a loop that appends a button for each string in the array.
function renderButtons() {
    for (var i=0; i < topics.length; i++) {
        var movieBtn = $("<button>");
        movieBtn.addClass("btn btn-outline-primary");
        movieBtn.attr("movie-name", topics[i]);
        movieBtn.text(topics[i]);
        $("#buttons-display").append(movieBtn);

}
}

renderButtons()

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// Wiring up submit button
$("#submit").on('click', function() {
    event.preventDefault();

//Grabs the text from the input field
var movie = $("#add-movie").val().trim();

// Adds user input to array and creates new button
topics.push(movie);
$("#buttons-display").empty();
renderButtons()
});

// Wiring up movie buttons to function when clicked
$(document).on('click', '.btn-outline-primary',  function() {
   
// Creating variable for the new button that is created by user input
 var newButton = $(this).attr('movie-name');

 // Creating variable to house query url
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newButton + "&api_key=HxjyPcOPD2gWbFGHpMzakdcqp1m6KWI9&limit=10"; 
console.log(queryURL); 

// Perfoming an AJAX GET request to our queryURL
$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
      console.log(response)





    });
});

