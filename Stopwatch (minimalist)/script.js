let hr = 0, min = 0, sec = 0, milisec = 0;

let state = false;

let minvar = document.getElementById("min");
let mintxtvar = document.getElementById("mintxt");
let hrvar = document.getElementById("hr");
let hrtxtvar = document.getElementById("hrtxt");

let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");



function hide() {

    //hides min display and text
    minvar.style.display = "none";
    mintxtvar.style.display = "none";

    //hides hour display and text
    hrvar.style.display = "none";
    hrtxtvar.style.display = "none";

    //hides stop button
    stopbtn.style.display = "none";
}

//running as initial command for hide and unhide
hide();



function start() {
    state = true;

    //start button hide stop button visible
    startbtn.style.display = "none";
    stopbtn.style.display = "inline";
    stopwatch();
    milisecfnc();

}

function stop() {
    state = false;

    //stop button hide start button visible
    startbtn.style.display = "inline";
    stopbtn.style.display = "none";


}

function reset() {
    state = false; hr = 0; min = 0; sec = 0; milisec = 0;

    document.getElementById("milisec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    startbtn.style.display = "inline";
    stopbtn.style.display = "inline";
    hide();
}






function milisecfnc() {
    if (state == true) {
        var milstr = milisec;
        milisec = milisec + 1;
        if (milisec <= 10) {

            milstr = "0" + milstr;
        }
        setTimeout("milisecfnc()", 10);
        if (milisec == 100) {
            milisec = 0;
        }


        document.getElementById("milisec").innerHTML = milstr;
    }
}

function stopwatch() {

    if (state == true) {

        var hrstr = hr;
        var minstr = min;
        var secstr = sec;

        sec = sec + 1;

        //displaying double 00 hence converting to string.

        if (hr <= 10) {
            hrstr = "0" + hrstr;
        }

        if (min <= 10) {
            minstr = "0" + minstr;
        }
        if (sec <= 10) {
            secstr = "0" + secstr;
        }

        if (sec == 60) {
            min = min + 1; milisec = 0; sec = 0;

            minvar.style.display = "inline";
            mintxtvar.style.display = "inline";
        }

        //hours
        if (min == 60) {
            hr = hr + 1; milisec = 0; sec = 0; min = 0;
            hrvar.style.display = "inline";
            hrtxtvar.style.display = "inline";

        }


        //as milisecond is 1000th time of a sec and we only need to show 100 parts so making ,10
        setTimeout("stopwatch()", 1000);

        



        document.getElementById("sec").innerHTML = secstr;
        document.getElementById("min").innerHTML = minstr;
        document.getElementById("hr").innerHTML = hrstr;

    }

}