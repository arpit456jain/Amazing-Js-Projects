const {songs} = {
    "songs": [
        {
            "name": "Eternal Youth",
            "artist": "Rude",
            "location": "./assets/songs/Eternal.mp3",
            "image": "./assets/images/content/artist_image.jpeg",
            "liked": true,
            "disliked": false,
            "views": 657,
            "id": 0
        },
        {
            "name": "Never Gonna Give You Up",
            "artist": "Rick Astely",
            "location": "./assets/songs/NGGYU.mp3",
            "image": "./assets/images/content/nggyp.jpg",
            "liked": false,
            "disliked": false,
            "views": 749,
            "id": 1
        },
        {
            "name": "Keeping It",
            "artist": "Sou",
            "location": "./assets/songs/keepingIt.mp3",
            "image": "./assets/images/content/keepingIt.png",
            "liked": false,
            "disliked": true,
            "views": 877,
            "id": 2
        },
        {
            "name": "Eye of the Tiger",
            "artist": "Surviour",
            "location": "./assets/songs/eyeTiger.mp3",
            "image": "./assets/images/content/survivor.jpg",
            "liked": false,
            "disliked": false,
            "views": 543,
            "id": 3
        },
        {
            "name": "Kenny G Collection",
            "artist": "Kenny G",
            "location": "./assets/songs/kenny.mp3",
            "image": "./assets/images/content/kennyg.jpg",
            "liked": false,
            "disliked": true,
            "views": 674,
            "id": 4
        },
        {
            "name": "Noctornal",
            "artist": "The Midnight",
            "location": "./assets/songs/noctornal.mp3",
            "image": "./assets/images/content/noctornal.jpg",
            "liked": false,
            "disliked": false,
            "views": 444,
            "id": 5
        },
        {
            "name": "Unravel",
            "artist": "TK",
            "location": "./assets/songs/unravel.mp3",
            "image": "./assets/images/content/unravel.jpg",
            "liked": true,
            "disliked": false,
            "views": 695,
            "id": 6
        }
    ]
}

window.addEventListener("scroll",()=>{
    var nav = document.querySelector(".navbar");
    //var elmnt = document.querySelector("body");
    //console.log(elmnt.scrollTop)
    //if(elmnt.scrollTop > 0){
        nav.style.backgroundColor = "black";
        //console.log("heelo");
    //}
});

var Search = document.querySelector(".search");
Search.onclick = () =>{
    var NavLinks = document.querySelector(".nav-links");
    NavLinks.style.display = "none";
    var NavItem = document.querySelector(".nav-items");
    var search = document.createElement("input");
    var icon = document.createElement("i");
    icon.classList = "fas fa-arrow-left back"
    search.type = "search";
    search.classList = "searchbox input-field";
    NavItem.append(icon,search);
    icon.onclick = () =>{
        var NavLinks = document.querySelector(".nav-links");
        NavLinks.style.display = "flex";
        search.style.display = "none";
        icon.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const playerHead = document.querySelector(".playerhead");
    let playBtn = document.querySelector("playbtn");
    let pauseBtn = document.querySelector("pausebtn");
    let cardCollections = document.querySelectorAll(".card_collection_main");
    let currentSong = new Audio();
    
    playerHead.style.display = "none";

    const createCard = (song) => {
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardInfo = document.createElement("div");
        const cardName = document.createElement("p");
        const cardArtist = document.createElement("p");

        card.className = "song_card";
        cardInfo.className = "song_card_info";
        cardName.className = "song_card_name";
        cardArtist.className = "song_card_artist";

        cardName.innerHTML = song.name;
        cardArtist.innerHTML = song.artist + " | " + song.views + " views";
        img.src = song.image;
        img.alt = song.name;

        cardInfo.append(cardName, cardArtist);
        card.append(img, cardInfo);

        card.onclick = function(){
            playerHead.style.display = "flex";
            currentSong = updatePlayer(song)
            playPauseFunc(currentSong)
            //returns the song, updates the player head, adds play pause functionality
        }

        return card;
    }

    const updatePlayer = ({name, artist, location, image, liked, disliked, views, id}) => {
        currentSong.setAttribute("src", location);

        const songContainer = document.querySelector(".song_name");
        const artistContainer = document.querySelector(".song_artist");
        const likeBtn = document.querySelector(".likebtn");
        const dislikeBtn = document.querySelector(".dislikebtn");
        const artistImage = document.querySelector(".song_image");
        const endTime = document.querySelector(".end-time");

        playBtn = document.querySelector(".playbtn");
        pauseBtn = document.querySelector(".pausebtn");

        playBtn.style.display = "inline";
        pauseBtn.style.display = "none";

        songContainer.innerHTML = name;
        artistContainer.innerHTML = artist + " | " + views + " views";
        artistImage.src = image;

        likeBtn.id = id;
        dislikeBtn.id = id;
        likeBtn.style.color = "grey";
        dislikeBtn.style.color = "grey";
        if(liked){
            likeBtn.style.color = "green"
        }
        else if(disliked){
            dislikeBtn.style.color = "red";
        }
        likeBtn.onclick = function(){
            likeSong(id, likeBtn, dislikeBtn, name)
        }

        dislikeBtn.onclick = function(){
            dislikeSong(id, likeBtn, dislikeBtn, name)
        }

        currentSong.onloadedmetadata = () => {
            let duration = currentSong.duration;
            duration = (duration/60).toPrecision(3) + "";
            endTime.innerHTML = duration;
        }
        return currentSong;
    }

    const playPauseFunc = (song) => {
        playBtn = document.querySelector(".playbtn");
        pauseBtn = document.querySelector(".pausebtn");

        playBtn.addEventListener("click", () => {
            song.play();
            playBtn.style.display = "none";
            pauseBtn.style.display = "inline";
        });

        pauseBtn.addEventListener("click", () => {
            song.pause();
            playBtn.style.display = "inline";
            pauseBtn.style.display = "none";
        })
    }

    const likeSong = (id, likeBtn, dislikeBtn, songName) => {
        cardCollections = document.querySelectorAll(".card_collection_main");
        let likedSongs = cardCollections[1].children;
        likedSongs = Array.from(likedSongs);

        if(songs[id].liked){
            likeBtn.style.color = "grey";
            songs[id].liked = false;
            likedSongs.forEach((songCard) => {
                const name = songCard.lastChild.firstChild.innerHTML;
                if(name == songName){
                    songCard.style.display = "none";
                    songCard.remove();
                }
            });
        } else {
            songs[id].liked = true;
            songs[id].disliked = false;
            dislikeBtn.style.color = "grey";
            likeBtn.style.color = "green";
            cardCollections[1].append(createCard(songs[id]));
            cardCollections[2].append(createCard(songs[id]))
        }
    }

    const dislikeSong = (id, likeBtn, dislikeBtn, songName) => {
        cardCollections = document.querySelectorAll(".card_collection_main");
        let likedSongs = cardCollections[1].children;
        let yourSongs = cardCollections[2].children;
        yourSongs = Array.from(yourSongs);
        likedSongs = Array.from(likedSongs);

        songs[id].liked = false;
        songs[id].disliked = true;
        likeBtn.style.color = "grey";
        dislikeBtn.style.color = "red";
        likedSongs.forEach((songCard) => {
            const name = songCard.lastChild.firstChild.innerHTML;
            if(name == songName){
                songCard.style.display = "none";
                songCard.remove();
            }
        }); 
        yourSongs.forEach((myCard) => {
            const name = myCard.lastChild.firstChild.innerHTML;
            if(name == songName){
                myCard.style.display = "none";
                myCard.remove();
            }
        });         
    }

    const updateCollection = () => {
        cardCollections = document.querySelectorAll(".card_collection_main");
        cardCollections.forEach((collection, index) => {
            if(index === 1){
                songs.forEach((song) => {
                    if(song.liked){
                        collection.append(createCard(song))
                    }
                })
            } else if(index === 2){
                songs.forEach((song) => {
                    if(!song.disliked){
                        collection.append(createCard(song));
                    }
                });
            } else {
                songs.forEach((song) => {
                    collection.append(createCard(song));
                });
            }
        })
    }

    updateCollection();

});