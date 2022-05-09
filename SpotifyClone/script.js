console.log("hello world");
// intitialize variables 
let songIndex = 0;
let audioElement = new Audio("https://github.com/BrownCoderAyush/filesStored-/raw/master/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songN = document.getElementById("songName");
let prevSong = document.getElementById("prevSong");
let nextSong = document.getElementById("nextSong");
let songItemContainer = document.getElementsByClassName("songItemContainer")[0];
// audioElement.play();
let songName;
let filePath;

let songs = [
   { songName: "Pull me closer", filePath: "https://github.com/BrownCoderAyush/filesStored-/raw/master/1.mp3", coverPath: "covers/1.jpg" },
   { songName: "Attention", filePath: "https://github.com/BrownCoderAyush/filesStored-/raw/master/2.mp3", coverPath: "covers/2.jpg" },
   { songName: "I love the way you lie", filePath: "https://github.com/BrownCoderAyush/filesStored-/raw/master/3.mp3", coverPath: "covers/3.jpg" },
   { songName: "I like me more", filePath: "https://github.com/BrownCoderAyush/filesStored-/raw/master/4.mp3", coverPath: "covers/4.jpg" },
   { songName: "Hall of Fame", filePath: "https://github.com/BrownCoderAyush/filesStored-/raw/master/5.mp3", coverPath: "covers/5.jpg" },
   { songName: "Dilbara X i Like me more", filePath: "https://github.com/BrownCoderAyush/filesStored-/raw/master/6.mp3", coverPath: "covers/6.jpg" },
   { songName: "Despacito", filePath: "https://github.com/BrownCoderAyush/filesStored-/raw/master/7.mp3", coverPath: "covers/7.jpg" }
]

songs.forEach((element, index, arr) => {
   let string = `<div class="songItem">
   <img src="${element.coverPath}" alt="${index}">
   <span>${element.songName}</span>
   <span class="songListPlay"><i
   class="far songItemPlay fa-play-circle"></i></span>
   </div>
   ` 
   songItemContainer.innerHTML+=string;
})

let songItemPlay = document.getElementsByClassName("songItemPlay");
masterPlay.addEventListener("click", () => {

   if (audioElement.paused && audioElement.currentTime >= 0 && !audioElement.ended) {
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      gif.style.opacity = 1;
   }
   else {
      audioElement.pause();
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
      gif.style.opacity = 0;
   }
})

audioElement.addEventListener("timeupdate", () => {
   let progress = (audioElement.currentTime / audioElement.duration) * 100;
   // console.log(progress);
   myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", () => {
   audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
})

function makeAllPlays(){
   Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
      element.classList.add("fa-play-circle");
      element.classList.remove("fa-pause-circle");
   })
}
prevSong.addEventListener("click", () => {
   makeAllPlays();
   if (songIndex == 0) {
      songIndex = songs.length - 1;
      audioElement.src=songs[songIndex].filePath;
      audioElement.play();
   } else {
      songIndex = songIndex - 1;
      audioElement.src=songs[songIndex].filePath;
      audioElement.play();
   }
   songN.innerText=songs[songIndex].songName;
   songItemPlay[songIndex].classList.remove("fa-play-circle");
   songItemPlay[songIndex].classList.add("fa-pause-circle");
   masterPlay.classList.remove("fa-play-circle");
   masterPlay.classList.add("fa-pause-circle");
})
nextSong.addEventListener("click", () => {
   makeAllPlays();
   if (songIndex == songs.length-1) {
      songIndex = 0;
      audioElement.src=songs[songIndex].filePath;
      audioElement.play();
   } else {
      songIndex = songIndex+1;
      audioElement.src=songs[songIndex].filePath;
      audioElement.play();
   }
   songN.innerText=songs[songIndex].songName;
   songItemPlay[songIndex].classList.remove("fa-play-circle");
   songItemPlay[songIndex].classList.add("fa-pause-circle");
   masterPlay.classList.remove("fa-play-circle");
   masterPlay.classList.add("fa-pause-circle");

})
Array.from(songItemPlay).forEach((element,index,arr)=>{
     element.addEventListener("click",(e)=>{
         makeAllPlays();
         e.target.classList.remove("fa-play-circle");
         e.target.classList.add("fa-pause-circle");
         // audioElement.src=`songs/${index+1}.mp3`;
         audioElement.src = songs[index+1].filePath; 
         songIndex=index;
         masterPlay.classList.remove("fa-play-circle");
         masterPlay.classList.add("fa-pause-circle");
         audioElement.play();
     })

})




