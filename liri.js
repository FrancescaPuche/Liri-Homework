require("dotenv").config();

const keys = require("./keys.js");

const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
const fs = require("fs");

const format = moment().format; 

let action = process.argv[2];
let userRequest = process.argv.slice(3).join(" "); 

function liriBot(action, userRequest) { 
    switch (action) { 
        case "spotify": 
            getSong(userRequest);
            break; 

        case "concerts": 
            getConcerts(userRequest); 
            break; 

        case "movie":
            getMovie(userRequest); 
            break; 
        
        case "help": 

        
        default: 
            console.log("Please pick an action: 'spotify', 'concerts', 'movie', 'help'"); 
    }
};

liriBot(action, userRequest);

function getSong() { 
    const spotify = new Spotify(keys.spotify); 

    if (!userRequest) { 
        //default song
        userRequest = "Under Pressure";
    };

    spotify.request("https://api.spotify.com/v1/search?q=track:" + userRequest + "&type=track&limit=1", function(err, response) { 
        if (err) { 
            console.log(err); 
        }
        
        console.log("-----------------------------------\n"); 
        console.log("Song: " + response.tracks.items[0].name + 
        "\nArtist: " + response.tracks.items[0].artists[0].name + 
        "\nAlbum: " + response.tracks.items[0].album.name + 
        + "\nURL: " + response.tracks.items[0].preview_url);

    });
}

function getConcerts() { 
    const queryURL = "https://rest.bandsintown.com/artists/" + userRequest + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
        function(response) { 

            var concertDatetime = response.data[0].datetime;
            var justDate = concertDatetime.slice(0,10);
            
            console.log("-----------------------------------\n"); 
            //console.log(response.data);
            console.log("Venue: " + response.data[0].venue.name); 
            console.log("\nCity: " + response.data[0].venue.city); 
            console.log("\nDate: " + justDate);

            // console.log("\nDate: " + moment(concertDate.format("MM/DD/YYYY"))); 
            // "\nEvent URL: " + response.data.url);

        }
    );
}
