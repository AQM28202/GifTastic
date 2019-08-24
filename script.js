$(document).ready(function(){
    
// Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
    var topics = ["Coming to America", "Bridesmaids", "Meet the Parents", "Friday", "Wedding Crashers", "The Nutty Professor", "Hitch", "Death at a Funeral" ]

// Your app should take the topics in this array and create buttons in your HTML. Try using a loop that appends a button for each string in the array.
function renderButtons() {
    for (var i=0; i < topics.length; i++) {


