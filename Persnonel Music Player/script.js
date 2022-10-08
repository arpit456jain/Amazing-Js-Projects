console.log("Welcome MAi Hoon Yahan")
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let range = document.getElementById('range');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let gif = document.getElementById('gif');
let gif1 = document.getElementById('gif1');


// let playsong = document.getElementsByClassName('fa');


let songs = [
    { songName: "Hope", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Hope", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Hope", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Hope", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Hope", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Hope", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Hope", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Hope", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Hope", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Hope", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]

// audioElement.play()



// listen to events

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        gif1.style.opacity = 1;


    }
    else {
        audioElement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
        gif1.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    range.value = progress;
})
range.addEventListener("change", () => {
    audioElement.currentTime = (audioElement.duration * range.value) / 100
})


previous.addEventListener('click', () => {
    audioElement.pause();
    range.value = 0;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    gif1.style.opacity = 1;
    if (songindex != 0) {
        songindex--;
    }

    audioElement = new Audio(songs[songindex].filePath);
    audioElement.play();
    audioElement.addEventListener('timeupdate', () => {
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        range.value = progress;
    })
    range.addEventListener("change", () => {
        audioElement.currentTime = (audioElement.duration * range.value) / 100
    })

})
next.addEventListener('click', () => {
    audioElement.pause()
    range.value = 0;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
    songindex++;
    audioElement = new Audio(songs[songindex].filePath);
    audioElement.play();
    gif.style.opacity = 1;
    gif1.style.opacity = 1;
    audioElement.addEventListener('timeupdate', () => {
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        range.value = progress;
    })
    range.addEventListener("change", () => {
        audioElement.currentTime = (audioElement.duration * range.value) / 100
    })

})

const list = document.querySelectorAll('.fa');
for (let index = 0; index < songs.length; index++) {
    const element = list[index];
    gif.style.opacity = 0;
    gif1.style.opacity = 0;
    element.addEventListener('click', () => {
        audioElement.pause();
        gif.style.opacity = 1;
        gif1.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        audioElement = new Audio(songs[index].filePath)
        audioElement.play();
        audioElement.addEventListener('timeupdate', () => {
            let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
            range.value = progress;
        })
        range.addEventListener("change", () => {
            audioElement.currentTime = (audioElement.duration * range.value) / 100
        })

    });
}


