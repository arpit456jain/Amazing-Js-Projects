const WHITE_KEYS=['z','x','c','v','b','n','m']
const BLACK_KEYS=['s','d','g','h','j']

const keys = document.querySelectorAll(".key")
const whitekeys = document.querySelectorAll(".key.white")
const blackkeys = document.querySelectorAll(".key.black")
keys.forEach(key =>{
    key.addEventListener('click',()=>playnote(key))
})

document.addEventListener('keydown',e=>{
    if(e.repeat) return
    const key=e.key;
    const whitekeyIndex=WHITE_KEYS.indexOf(key);
    const blackkeyIndex=BLACK_KEYS.indexOf(key);
    
    if(whitekeyIndex>-1) playnote(whitekeys[whitekeyIndex]);
    if(blackkeyIndex>-1) playnote(blackkeys[blackkeyIndex]);

})

function playnote(key) {
const noteAudio= document.getElementById(key.dataset.note);
noteAudio.currentTime = 0;
noteAudio.play();
key.classList.add('active');
noteAudio.addEventListener('ended',()=>{
    key.classList.remove('active');
})
}