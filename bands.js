var axios = require("axios");
var moment = require('moment');
var fs = require("fs");

var Bands = function () {
    // divider will be user as a spacer
    var divider = "\n------------------------------------------------------------\n\n";

    // takes artist from the liri and searches the bandsintown API
    this.getBand = function (artist) {

        // * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function (response) {
            var jsonData = response.data[0];


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