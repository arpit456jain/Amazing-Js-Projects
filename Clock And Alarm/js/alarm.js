console.log("this is my alarm file ")
let alarmsubmit =  document.getElementById('alarmsubmit');

alarmsubmit.addEventListener('click',setalarm);

function setalarm(e)
{
    //    audio.play();
    e.preventDefault();
    let alarm = document.getElementById('alarm');
    
    alarmdate = new Date(alarm.value);
    console.log(`alarm is set.. for ${alarmdate}`);
    now = new Date();
    
    let timeToAlarm = alarmdate-now
    if(timeToAlarm>0)
    {
        setTimeout(() =>{

            ringbell();
        },timeToAlarm);

        alarm.value=" ";
    }
    else
    {

    }
}
// var audio = new Audio("../  ");
// var audio = new Audio("http://music.ogg" ) ;
var audio = document.getElementById('my-audio');
function ringbell()
{
    audio.play();
}
function stop()
{
    audio.stop();
}