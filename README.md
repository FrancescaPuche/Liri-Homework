# Liri Homework
### For: Coding Bootcamp

Built With Node.js, Javascript
APIs OMDB, Spotify, Bandsintown

Description & Requirements
Liri is a command line application that takes user commands and queries from the command line and returns data from API's. The following commands have been hard coded into the program and neatly returns to users information about their requested film, band, or movie.

#### Functions: 
- spotify 
- concerts 
- movie
- help


#### Concert Function

Run node liri.js concerts

This will search the Bands in Town Artist Events API for an artist and returns the next concert time and date for that artist, as well as location and city.

Name of the venue
Venue location
Date of the Event


#### Spotify Function

Run node liri.js spotify

This will search for the user input and returns the artist, full track name, album and a preview link.

Artist(s)
The song's name
The album that the song is from

#### Movie Function

Run node liri.js movie

Function takes the user input and it will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Rotten Tomatoes Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.

#### Help Function

Run node liri.js help

LIRI will use the text from “random.txt” and call on of LIRI’s commands.



#### Technologies Used:
Spotify API
OMDB API
Bands In Town API
Node.js
Javascript
NPM packages
