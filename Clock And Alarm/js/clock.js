console.log('this is my clock');

function updateclock() {
    // get the current date and time
    let currenttime = new Date();

    // extract hours  min and sec from date
    let currenthour = currenttime.getHours();
    let currentminutes = currenttime.getMinutes();
    let currentseconds = currenttime.getSeconds();

    // convert railway clock to digital clock
    let currenthour2=currenthour;
    currenthour = (currenthour > 12 ? currenthour - 12 : currenthour);
    currenthour = (currenthour == 0 ? 12 : currenthour);
    
    // padding with 0 if it is single digit
    currenthour = (currenthour < 10 ? "0" : "") + currenthour;
    currentminutes = (currentminutes < 10 ? "0" : "") + currentminutes;
    currentseconds = (currentseconds < 10 ? "0" : "") + currentseconds;

    // checking Am Pm
    let timeofday = (currenthour2 < 12) ? "AM" : "PM";

    // seting the date 
    let currenttimestr = currenthour + ":" + currentminutes + ":" + currentseconds + " " + timeofday;
    document.getElementById('clock').innerHTML = currenttimestr;
    document.getElementById('clock2').innerHTML = currenttime;

}