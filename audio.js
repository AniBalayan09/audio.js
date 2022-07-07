var data = {
    title: [

    
    ],
    song: [

       
    ],

    poster: [


        "https://i.gifer.com/TjnT.gif",
        "https://media0.giphy.com/media/5ehBR5qtLEXBe/giphy.gif",
        "https://c.tenor.com/yO2w1FK1IQIAAAAC/music.gif",
    ]
}


var currentSong = 0
var song = new Audio()

// console.log(song);

window.onload = function () {
    playSong()
}






function playSong() {
    song.src = data.song[currentSong];

    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];

    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";

    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    //  song.play();

}


function playOrPauseSong() {
    let play = document.getElementById("play")
    //console.log(play);

    if (song.paused) {
        song.play();
        play.src = "images/pause.png" //pause
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png" //play
    }
}
song.addEventListener("timeupdate", function () {
    console.log(song.currentTime);
    console.log(song.duration);

    let fill = document.getElementById("fill")
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%";//fill
    
    convertTime(song.currentTime)//cur.time
    if (song.ended) {
        next()
    }




})
function convertTime(seconds) {


    let currentTime = document.getElementById("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    currentTime.textContent = min + ":" + sec
    totalTime(Math.round(song.duration))
    console.log(seconds);
    console.log(min);

};
function totalTime(seconds) {
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    if(isNaN(min) || isNaN(sec)){
        return false
    }else{

        currentTime.textContent += " / " + min + ":" + sec
    }

};
function next() {
    currentSong++;
    if (currentSong == data.song.length) {
        currentSong = 0
    }
    playSong();
    play.src = "images/pause.png"
}
function pre() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "images/pause.png"
}
//var data = { title: [ "Infinity - Jaymes Young", "Elley Duhe - MIDDLE OF THE NIGTH", "Xcho- Only you", ], song: [ "music/inf.mp3", "music/el.mp3", "music/xcho.mp3", ], poster: [ "https://i.gifer.com/TjnT.gif", "https://media0.giphy.com/media/5ehBR5qtLEXBe/giphy.gif", "https://c.tenor.com/yO2w1FK1IQIAAAAC/music.gif", ] } var currentSong = 0 var song = new Audio() // console.log(song); window.onload = function () { playSong() } function playSong() { song.src = data.song[currentSong]; let songTitle = document.getElementById("songTitle"); songTitle.textContent = data.title[currentSong]; let img = document.getElementById("row1"); img.style.backgroundImage = "url(" + data.poster[currentSong] + ")"; let main = document.getElementById("main") main.style.backgroundImage = "url(" + data.poster[currentSong] + ")"; // song.play(); } function p
function muted() {
    var mute = document.getElementById ("mute")
    if (song.muted) {
    song.muted = false
    mute.src = "images/volume.png" //mute
    } else {
    song.muted = true
    mute.src = "images/volume-mute.png"
    //unmute
    }
    }
    function increase() {
        song.volume += 0.2;
        }
        
        function decrease() {
        song.volume -= 0.2;
       
        }