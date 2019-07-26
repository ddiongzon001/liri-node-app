var axios = require("axios");
var fs = require("fs");

var Movie = function(){

    var divider = "\n------------------------------------------------------------\n\n";

    this.getMovie = function(film){
        var URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + film;

        axios.get(URL).then(function(response){

            var jSONdata = response.data;

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
            console.log("\n" + movieData);
        })
    }
}

module.exports = Movie;