## LIRI-Node-App
This is an app that allows the user to use specific commands to do the following:

* look up event information about an artist or band
* look up information about a specfic song
* look up information about a specfic movie

Please look at a short video that demos the application [here](https://drive.google.com/file/d/1NnOlFlwibZ-X2Du3HcXW1sxXIehV5GJF/view)!

## Technologies used and why
<b>Built with:</b>
- [Node](https://nodejs.org/en/): An environment that allows developers to use Javascript to interact with the user without front-end coding.
- [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api): Used the Spotify API to gather requested song information.
- [Axios](https://www.npmjs.com/package/axios): Used Axios to passthrough the APIs of the following:
    - [OMDB API](http://www.omdbapi.com): Used the OMDB API to gather requested movie information.
    - [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api): Used the Bands In Town API to gather requested events information.
- [Moment](https://www.npmjs.com/package/moment): Allowed date of the event to be formatted correctly.
- [DotEnv](https://www.npmjs.com/package/dotenv): Set environment variables to the global `process.env` object in node.


## Code Example
![Image of commands](https://raw.githubusercontent.com/ddiongzon001/liri-node-app/master/images/example.PNG)

After the user types `node liri.js`, it shows the user the commands they can pick from. 

Once the user selects a command, they will have to look up a artist, song, or movie of their choice and type it in the following manner: `node liri.js concert-this Jason Mraz`

The code captures the user response and displays to the console the information regarding their search.
