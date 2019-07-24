require("dotenv").config();
var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

if (command === "concert-this") {
    console.log("this is the concert-this command");

    // * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

    // * Name of the venue

    // * Venue location

    // * Date of the Event (use moment to format this as "MM/DD/YYYY")

} else if (command === "spotify-this-song") {
    console.log("this is spotify-this-song command");

} else if (command === "movie-this") {
    console.log("this is movie-this command");

} else if (command === "do-what-it-says") {
    console.log("this is do-what-it-says command");

} else {
    console.log("this is the default option");
}