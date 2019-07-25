var fs = require("fs");
var liri = require("./liri.js");

var readRandom = function () {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        data = data.split(", ");

        var command = data[0];
        var userInput = data.spice(1).join(" ");

        liri(command, userInput);
    });
}

module.exports = readRandom;