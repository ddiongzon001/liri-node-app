require("dotenv").config();
var keys = require("./keys.js");
var Bands = require("./bands.js");

// var spotify = new Spotify(keys.spotify);
var band = new Bands();

var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

if (command === "concert-this") {
    console.log("this is the concert-this command");
    band.getBand(userInput);

} else if (command === "spotify-this-song") {
    console.log("this is spotify-this-song command");

} else if (command === "movie-this") {
    console.log("this is movie-this command");

} else if (command === "do-what-it-says") {
    console.log("this is do-what-it-says command");

} else {
    console.log("this is the default option");
}