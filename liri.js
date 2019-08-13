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
            getArtist(userRequest); 
            break; 

        case "movie":
            getMovie(userRequest); 
            break; 
        
        case "help": 

        
        default: 
            console.log("Please pick an action: 'spotify', 'concerts', 'movie', 'help'"); 
    }
};