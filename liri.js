
var keys = require('./keys.js');

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.Spotify); 


var artistNames = function(artist) {
    return artist.name;
}

var getSpotifySong = function(songName) {
 
    spotify.search({ type: 'track', query: songName}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songs = data.tracks.items;
        for (var i=0; i<songs.length; i++) {
            console.log(i);
            console.log('artist(s): ' + songs[i].artists.map(artistNames));
            console.log('song name: ' + songs[i].name);
            console.log('preview song: ' + songs[i].preview_url);
            console.log('album: '+ songs[i].album.name);
            console.log("//---//---//---//---//---//---//");
        } 
    });
}

var pickSong = function(caseData, functionData) {
    switch(caseData) {
        case "spotify-this-song":
            getSpotifySong(functionData);
            break;
        default:
        console.log("You got LIRI confused!");
    }
}

var run = function (argOne, argTwo) {
    pickSong(argOne, argTwo);
}

run(process.argv[2], process.argv[3]);