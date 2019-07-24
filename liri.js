require("dotenv").config();
var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

if (command === "concert-this") {
    console.log("this is the concert-this command");

} else if (command === "spotify-this-song") {
    console.log("this is spotify-this-song command");

} else if (command === "movie-this") {
    console.log("this is movie-this command");

} else if (command === "do-what-it-says") {
    console.log("this is do-what-it-says command");

} else {
    console.log("this is the default option");
}