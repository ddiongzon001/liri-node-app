var spotify = require("node-spotify-api");
var keys = require("./keys.js");
var song = new spotify(keys.spotify);

var Song = function(){
    this.getSong = function(songName){
        song.search({
            type: 'track',
            query: songName
        }, function(err, data){
            if (err){
                throw err;
            }

            console.log(data);
        })
    }
}

module.exports = Song;