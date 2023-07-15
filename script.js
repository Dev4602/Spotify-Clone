console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let mastersongName = document.getElementById('mastersongName');

let songs = [
    {songName: " Lean on - Major Lezar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: " Can't feel my face - Weekend", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: " The Hills - Weekend", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: " Labon ko ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: " StarBoy - Weekend ", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: " Demons", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: " Vaalam Aao Ne ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: " Apna Bana Le- Arijit Singh ", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: " Double Take - Dhruv", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: " Until I Found You- Stephen Sanchez", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

 

// // Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})