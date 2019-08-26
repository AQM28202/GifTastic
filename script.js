

// Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
var topics = ["Coming to America", "Bridesmaids", "Meet the Parents", "Friday", "Wedding Crashers", "The Nutty Professor", "Hitch", "Death at a Funeral"]

// Your app should take the topics in this array and create buttons in your HTML. Try using a loop that appends a button for each string in the array.
function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
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
$("#submit").on('click', function () {
    event.preventDefault();

    //Grabs the text from the input field
    var movie = $("#add-movie").val().trim();

    // Adds user input to array and creates new button
    topics.push(movie);
    $("#buttons-display").empty();
    renderButtons()
});

// Wiring up movie buttons to function when clicked
$(document).on('click', '.btn-outline-primary', function () {

    // Empty gif-display
    $('#gif-display').empty();

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
        .then(function (response) {
            console.log(response)

            // Storing the response's array of in a variable
            var results = response.data;

            // Looping over every array in preparation to pull out static images to display
            for (var i = 0; i < results.length; i++) {

                // Saving the images's url as  variable
                var staticImageUrl = response.data[i].images.fixed_height_still.url;
                var imgRating = response.data[i].rating;

                // Creating and storing an image tag
                var movieImage = $("<img>");
                movieImage.attr("src", staticImageUrl);
                movieImage.attr("alt", "movie gif");

                // Giving the img tag attributes of properties pulled off the response 
                movieImage.attr('data-still', response.data[i].images.fixed_height_still.url);
                movieImage.attr('data-animate', response.data[i].images.fixed_height.url);
		        movieImage.attr('data-state', "still");
                movieImage.addClass("gif");
                
                var indivGif = $('<div class="item">');


                var displayRating = $('<div class="p-1 mb-2 bg-primary text-white">').text("Rating: " + imgRating);




                indivGif.append(displayRating);
                indivGif.append(movieImage);


                $("#gif-display").append(indivGif);


            }

        });
});

// Targetting the button class gif that I just created to make every pichture cliackable
$(".gif").on("click", function() {
    alert("ClICKED!");
}


/* <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">
  <img src="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-still="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-animate="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200.gif" data-state="still" class="gif">
  <img src="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-still="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-animate="https://media3.giphy.com/media/W6LbnBigDe4ZG/200.gif" data-state="still" class="gif">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    }); */