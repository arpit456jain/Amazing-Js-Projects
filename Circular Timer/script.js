var container = document.querySelector(".container")
var form = document.querySelector("form")
var sec = document.querySelector(".sec")
var min = document.querySelector(".min")
var num = 360;
var submit =false;
var caretUpMin = document.querySelector('.caret-up-min')
var caretDownMin = document.querySelector('.caret-down-min')

var caretUpSec = document.querySelector('.caret-up-sec')
var caretDownSec = document.querySelector('.caret-down-sec')

const minInput = document.querySelector("#min");
const secInput = document.querySelector("#sec");
const submitBtn = document.querySelector('button')
const timesUpText = document.querySelector("h2");

const minute = 1;
var duration;


// * ------ caret for minute input field
caretUpMin.addEventListener("click",(e)=>{
   const prevValue = +(minInput.value);
  
  if(prevValue<59){
    minInput.value = (prevValue<10)? "0" + (prevValue +1) : prevValue +1 ;
  }
})
caretDownMin.addEventListener("click",(e)=>{
    const prevValue = +(minInput.value);
  
   if(prevValue>0){
    minInput.value = (prevValue<10)? "0" + (prevValue -1) : prevValue -1 ;
   }
 })

// * ------ caret for second input field
 caretUpSec.addEventListener("click",(e)=>{
    const prevValue = +(secInput.value);
   
   if(prevValue<59){
     secInput.value = (prevValue<10)? "0" + (prevValue +1) : prevValue +1 ;
   }
 })
 caretDownSec.addEventListener("click",(e)=>{
    const prevValue = +(secInput.value);
   
   if(prevValue<59){
     secInput.value = (prevValue<10)? "0" + (prevValue +1) : prevValue +1 ;
   }
 })

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(minInput.value);
    const formData = new FormData(form)
    formData.append("min",minInput.value)
    formData.append("sec",secInput.value)
    const obj = Object.fromEntries(formData)
    console.log(obj);
    submit = true;
    caretDownMin.style.visibility = "hidden"
    caretUpMin.style.visibility = "hidden"
    caretDownSec.style.visibility = "hidden"
    caretUpSec.style.visibility = "hidden"

    min.style.display = "block";
    sec.style.display = "block";
    minInput.style.display ="none"
    secInput.style.display = "none";
    submitBtn.style.display = "none";
   

     duration = ((+obj.min)*60) + (+obj.sec);

    
})

var interval = setInterval(()=>{
    if(!submit){
        return ;
    }
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
        timesUpText.style.display = "block";
       clearInterval(interval)
   }
  

},1000)


