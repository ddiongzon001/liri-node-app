// all the variables that the files needs to import
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var fs = require("fs");

// creates an object that passes through the API keys
var spotify = new Spotify(keys.spotify);

//creates the Song constructor
var Song = function(){

    // divider that will be used for the log.txt file
    var divider = "\n------------------------------------------------------------\n\n";

    // method that looks through the API of spotify and prints it
    this.getSong = function(songName){

        // uses the spotify object that contains our key to search the user's input song
        spotify.search({
            type: 'track',
            query: songName
        }, function(err, data){
            if (err){
                throw err;
            }

            // stores the response to this variable
            var jSONdata = data.tracks.items[0];

            // saves each response that we need in this array
            var songData = [
                "Artist Name: " + jSONdata.artists[0].name,
                "Song Name: " + jSONdata.name,
                "Preview of the Song: " + jSONdata.preview_url,
                "Album: " + jSONdata.album.name
            ].join("\n\n");

            // appends the array to the log.txt file
            fs.appendFile("log.txt", songData + divider, function(err){
                if (err){
                    throw err;
                }
                // shows the user the information that is in the array.
                console.log("\n\n" + songData);
            })

        })
    }
}

// exports the Song constructor
module.exports = Song;