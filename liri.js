require("dotenv").config();
var fs = require("fs");
var Event = require("./bands.js");
var Song = require("./spotify.js");
var Movie = require("./movies.js");
// var random = require("./randomcommand.js");

var event = new Event();
var song = new Song();
var movie = new Movie();

var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

// function that takes in a command and userInput
function prompt(command, userInput) {

    //checks if command is concert-this
    if (command === "concert-this") {

        console.log("\n*** SEARCHING FOR AN EVENT FOR THE ARTIST: " + userInput.toUpperCase() + " ***");

        //takes the user's input and passes it into the band.js file
        event.getBand(userInput);

    }
    //checks if the command is spotify-this-song 
    else if (command === "spotify-this-song") {

        // if the userInput variable is blank, it searches the song the sign
        if (!userInput){
            userInput = "The Sign Ace of Base";
        }

        console.log("\n*** SEARCHING FOR A SONG WITH THE TITLE OF: " + userInput.toUpperCase() + " ***");

        //takes the user's input and passes it into the spotify.js file
        song.getSong(userInput);


    }
    //checks if the command is movie-this
    else if (command === "movie-this") {

        // if the userInput variable is blank, it searches the movie "Mr. Nobody"
        if (!userInput){
            userInput = "Mr. Nobody";
        }

        console.log("\n*** SEARCHING FOR A MOVIE WITH THE TITLE OF: " + userInput.toUpperCase()+ " ***");

        //takes the user's input and passes it into the movies.js file
        movie.getMovie(userInput);

    }
    //checks if the command is do-what-it-says
    else if (command === "do-what-it-says") {
        console.log("*** DOING WHATEVER RANDOM.TXT SAYS ***");

        //defines function that reads the random.txt file
        function readRandom() {

            //uses the method readFile from fs
            fs.readFile("random.txt", "utf8", function (err, data) {
                if (err) {
                    throw err;
                }
                console.log("*** Currently says: " + data + " ***");

                //puts the text from random.txt into an array
                data = data.split(" ");

                //takes the first index of the array and puts it into the command variable
                var command = data[0];

                //takes the rest of the array and puts it into the userInput variable as a string
                var userInput = data.slice(1).join(" ");

                //takes the command and userInput and passes it through the prompt function
                prompt(command, userInput);
            });
        }

        //calls the readRandom function
        readRandom();


    } else {
        console.log("\n*** PLEASE ENTER ONE OF THE FOLLOWING COMMANDS: ***\n");
        console.log("   concert-this <artist-name-of-choice>");
        console.log("   spotify-this-song <song-title-of-choice>");
        console.log("   movie-this <movie-title-of-choice>");
        console.log("   do-what-it-says");
    }
}

//calls the prompt function
prompt(command, userInput);