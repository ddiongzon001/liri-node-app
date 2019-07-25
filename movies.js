var axios = require("axios");
var fs = require("fs");

var Movies = function () {
    // divider will be user as a spacer
    var divider = "\n------------------------------------------------------------\n\n";

    // takes artist from the liri and searches the omdb API
    this.getMovie = function (movie) {

        // * This will search the omdb API
        var URL = "http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

        axios.get(URL).then(function (response) {
            var jsonData = response.data;


            //creates the array that stores the 
            var concertData = [
                // * Name of the venue
                "Name of venue: " + jsonData.venue.name,

                // * Venue location
                "Location of venue: " + jsonData.venue.city,

                // * Date of the Event (use moment to format this as "MM/DD/YYYY")
                "Date of the event: " + moment(jsonData.datetime).format("MM/DD/YYYY")
            ].join("\n\n");

            // append concert data to log.txt
            fs.appendFile("log.txt", concertData + divider, function(err){
                if(err){
                    throw err;
                }
                console.log(concertData);
            });
        });

    }
}

module.exports = Bands;