// dynamic creation and changing of heading which shows current status of alarm
var heading = document.createTextNode(``);
var node = document.createElement("p");
node.appendChild(heading);
document.getElementById('heading').appendChild(node);
var check = 1;

node.style.color = "white";
node.style.top = "100px";
node.style.right = "600px";


// dynamic hover function showing current time
var node_hover = document.getElementById("hovers");
var floater = document.createElement("p");
floater.style.color = "white";
var hover_check=1;
var text = document.createTextNode(``);
floater.appendChild(text);
document.getElementById('heading').appendChild(floater);
node_hover.addEventListener("mouseover", function( event ) {
    let day = new Date();
    let hour = day.getHours();
    let minute = day.getMinutes();
    let part;
    if(hour>=12){
        part = "PM";
    }else{
        part = "AM";
    }
    if(hour>=13){
        hour=hour-12;
    }
    if(minute<10){
        minute = `0${minute}`;
    }
    text.textContent = `Current Time: ${hour}:${minute} ${part}`;
    setTimeout(function() {
        text.textContent = "";
      }, 4000);
},false);

// For toggle button;

function toggleClass()
{

    const body = document.querySelector('body');
    body.classList.toggle('light');
    body.style.transition = `0.3s linear`;
    if(check){
        node.style.color = "black";
        check = 0;
    }else{
        node.style.color = "white";
        check = 1;
    }
    if(hover_check){
        floater.style.color = "black";
        hover_check = 0;
    }else{
        floater.style.color = "white";
        hover_check = 1;
    }
}


// for time;
const deg = 6; 
// 360 / (12 * 5);

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

var get_H=1000;
var get_M=1000;
var time_text;
var time = document.getElementById("set_time");

// keeps track of time input given
time.addEventListener('input', function(e){
    time_text = e.target.value;
})

setInterval(() => {
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let msec = day.getMilliseconds();
    
    // VERY IMPORTANT STEP:
    
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;

    // smooth transitioning bug fixed
    if(ss==0){
        sc.style.transform = `rotateX(6deg)`;
    }else{
        sc.style.transform = `rotateZ(${ss}deg)`;
    }
    
    // gives the smooth transitioning effect
    sc.style.transition = `1s`;

    // plays tick sound
    var audio= new Audio();
    audio.src="Sounds/clock.mp3";
    audio.play();
},1000)

// keeps track of alarm status continuously
setInterval(() =>{
    if(localStorage.getItem("set_time")=="undefined"){
        heading.textContent="No Alarm set";
    }else{
        heading.textContent=`Alarm set: ${localStorage.getItem("set_time")} Hours`;
    }
    if(localStorage.getItem("set_time") != "undefined"){
        
        // keeps track of when to play alarm if alarm is set
        var refresh = setInterval(() =>{
            let day = new Date();
            let hh = day.getHours();
            let mm = day.getMinutes();
            get_H  = localStorage.getItem("set_time")[0]+localStorage.getItem("set_time")[1];
            get_M  = localStorage.getItem("set_time")[3]+localStorage.getItem("set_time")[4];
            if(hh==get_H && mm==get_M){
                var alarm= new Audio();
                alarm.src="Sounds/Alarm.mp3";
                alarm.play();
                // once alarm is triggered, the current alarm is removed
                localStorage.setItem("set_time","undefined");
                // setInterval() is removed
                clearInterval(refresh);
            }
        },1000)
    }
},1000);

// triggered when button to set alarm is pressed
function setAlarm()
{
    // checking if alarm is already set or not
    if(localStorage.getItem("set_time")=="undefined"){
        // plays click sound
        var click = new Audio();
        click.src="Sounds/Click.mp3";
        click.play();
        //setting time
        if(time_text==undefined){
            localStorage.setItem("set_time","00:00");
        }else{
            localStorage.setItem("set_time",time_text);
        }
    }else{
        alert("One Alarm is already set!!");
    }
}

//triggered when button to delete alarm is pressed
function delAlarm()
{
    // checking if alarm is already set or not
    if(localStorage.getItem("set_time")!="undefined"){
        // plays click sound
        var click = new Audio();
        click.src="Sounds/Click.mp3";
        click.play();
        localStorage.setItem("set_time","undefined");
    }else{
        alert("No Alarms have been set to delete!!");
    }
}