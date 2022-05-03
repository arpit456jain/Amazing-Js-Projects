function clock(){
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const seconds = document.getElementById("seconds");
    const ampm = document.getElementById("ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = "AM";
    if (h>12){
        h = h-12;
        var am = "PM";
    }

    hour.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
    
}
var interval = setInterval(clock,1000)
