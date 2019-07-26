var axios = require("axios");
var fs = require("fs");

var Movie = function(){

    var divider = "\n------------------------------------------------------------\n\n";

    this.getMovie = function(film){
        var URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + film;

        axios.get(URL).then(function(response){
            console.log(response.data);
        })
    }
}

module.exports = Movie;