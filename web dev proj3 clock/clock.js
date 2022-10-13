setInterval(()=>{
let time=new Date();
let hr=time.getHours();
let min=time.getMinutes();
let sec=time.getSeconds();
let hro=(hr*30)+(min/2);
let minro=6*min;
let secro=6*sec;
hour.style.transform=`rotate(${hro}deg)`;
minute.style.transform=`rotate(${minro}deg)`;
second.style.transform=`rotate(${secro}deg)`;

},1000)
