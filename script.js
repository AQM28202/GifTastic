
    
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

//this function handles events where one button is clicked
$("#submit").on('click', function() {
    alert("I have been clicked");
});