var container = document.querySelector(".container")
var sec = document.querySelector(".sec")
var min = document.querySelector(".min")
var num = 360;

const minute = 1;
let duration = minute*60;

var interval = setInterval(()=>{
    if(duration>=0){
        min.textContent = `0${Math.floor(duration/60)}`
        if(duration%60 <10){
            sec.textContent = `0${(duration%60)}`
        }
        else{
            sec.textContent = `${(duration%60)}`
        }
       
        container.style.background = ` conic-gradient(#8b8bff ${num}deg ,#8b8bff 0deg ,#585862d5 0deg,#585862d5 360deg)`
        num = num - (num / duration);
        duration--;
   }
   else{
   
       clearInterval(interval)
   }
  

},1000)