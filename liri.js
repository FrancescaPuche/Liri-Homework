require("dotenv").config();

const keys = require("./keys.js");

const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
const fs = require("fs");

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

function getSong() { 
    const spotify = new Spotify(keys.spotify); 

    if (!songName) { 
        //default song
        songName = "Under Pressure";
    };
    spotify.search({ type: "track", query: songName }, 
        function (err, data) { 

            spotify.request("https://api.spotify.com/v1/search?q=track:" + request + "&type=track&limit=1", function(error, response) { 
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
    );
}

function getConcerts() { 
    const queryURL = "https://rest.bandsintown.com/artists/" + userRequest + "/events?app_id=codingbootcamp";

    axios.ger(queryURL).then(
        function(response) { 
            console.log(response); 

            let concertDate = moment(response.data[0].datetime.format("MM/DD/YYYY"));
            
            console.log("-----------------------------------\n"); 
            console.log("Venue: " + response.data[0].venue.name + 
            "\nCity: " + response.data[0].venue.city + 
            "\nDate: " + concertDate);
        }
    );
}

liriBot(); 