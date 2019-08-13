require("dotenv").config();

const keys = require("./keys.js");

const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
const fs = require("fs");

let action = process.argv[2];
let userRequest = process.argv.slice(3).join(" "); 
