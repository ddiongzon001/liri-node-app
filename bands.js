var axios = require("axios");
var moment = require ("moment");

var Bands = function () {
    this.getBand = function (artist) {
        // * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function (response) {
            var jsonData = response.data;

            var concertData = [
                // * Name of the venue
                "Name of venue: " + jsonData.venue.name,

                // * Venue location
                "Location of venue: " + jsonData.venue.city,

                // * Date of the Event (use moment to format this as "MM/DD/YYYY")
                "Date of the event: " + moment(jsonData.datatime)
            ].join("\n\n");
        });


    }
}