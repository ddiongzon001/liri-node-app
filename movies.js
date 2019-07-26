// all the variables that holds the packages that the file needs to 
var axios = require("axios");
var fs = require("fs");

// creates the Movie constructor
var Movie = function(){

    // creates a divider that will be used for the log.txt
    var divider = "\n\n------------------------------------------------------------\n\n";

    // method that uses axios to look through the omdb API for the user's input of film
    this.getMovie = function(film){

        // forming the URL that we will use for axios
        var URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + film;

        // pushing the URL through axios and then getting a response back
        axios.get(URL).then(function(response){

            // stores the response.data into this variable
            var jSONdata = response.data;

            // stores are the required information into the array and joins it into a string
            var movieData =  [
                "Title of movie: " + jSONdata.Title,
                "Year: " + jSONdata.Year,
                "Rating: " + jSONdata.Rated,
                "Rotten Tomatoes Rating: " + jSONdata.Ratings[1].Value,
                "Country: " + jSONdata.Country,
                "Language: " + jSONdata.Language,
                "Plot: " + jSONdata.Plot,
                "Actors: " + jSONdata.Actors
            ].join("\n\n");

            // appends the joined array with the divider to the log.txt file
            fs.appendFile("log.txt", movieData + divider, function(err){
                if (err){
                    throw err;
                }
                // logs the information to the user
                console.log("\n" + movieData);
            })
        })
    }
}

// exports the Movie constructor
module.exports = Movie;