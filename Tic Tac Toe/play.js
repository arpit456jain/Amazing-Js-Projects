var sound1 = document.getElementById("click1");
var sound2 = document.getElementById("click2");
var sound3 = document.getElementById("click3");
var sound4 = document.getElementById("click4");
var sound5 = document.getElementById("click5");
document.getElementById('play-again-btn').disabled = true;
var pl1_name;
var pl2_name;
let flag = 0;
function newgame() {
    sound1.play();
    document.getElementById('head').scrollIntoView();
    document.getElementById("name1").value="";
    document.getElementById("name2").value="";
}
function gamestrt() {
    sound1.play();
    document.getElementById('section2').scrollIntoView();
    pl1_name = document.getElementById("name1").value;
    pl2_name = document.getElementById("name2").value;
    document.getElementById('enter1').innerHTML = "(" + pl1_name + ")";
    document.getElementById('enter2').innerHTML = "(" + pl2_name + ")";
    document.getElementById('turn').innerHTML = pl1_name + " its your turn";
    firstview();
    document.getElementById('play-again-btn').disabled = true;
}
function win() {
    sound3.play();
    document.getElementById('play-again-btn').disabled = false;
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn9').disabled = true;
}
//when a player click
function played(idn) {
    sound2.play();
    var x = document.getElementById(idn);
    if (flag == 0) {
        x.innerHTML = "X";
        flag = 1;
        document.getElementById('turn').innerHTML = pl2_name + " its your turn";
    }
    else {
        x.innerHTML = "O";
        flag = 0;
        document.getElementById('turn').innerHTML = pl1_name + " now your turn";
    }
    x.disabled = true;
    check();
}
//check
function check() {
    b1 = document.getElementById('btn1').innerHTML;
    b2 = document.getElementById('btn2').innerHTML;
    b3 = document.getElementById('btn3').innerHTML;
    b4 = document.getElementById('btn4').innerHTML;
    b5 = document.getElementById('btn5').innerHTML;
    b6 = document.getElementById('btn6').innerHTML;
    b7 = document.getElementById('btn7').innerHTML;
    b8 = document.getElementById('btn8').innerHTML;
    b9 = document.getElementById('btn9').innerHTML;
    var x;
    //to check draw
    if (b1 != '-' && b2 != '-' && b3 != '-' && b4 != '-' && b5 != '-' && b6 != '-' && b7 != '-' && b8 != '-' && b9 != '-') {
        document.getElementById('turn').innerHTML = "Game Draw";
        document.getElementById('play-again-btn').disabled = false;
        sound5.play();
    }
    //rest condition
    if (b1 != '-') {
        if (b1 == 'X') x = pl1_name;
        else x = pl2_name;
        if (b1 == b2 && b2 == b3) {
            document.getElementById('turn').innerHTML = x + " wins";
            functionAlert("Congratulations!!!\n" + x + "\nYOU WIN");
            win();
        }
        if (b1 == b5 && b5 == b9) {
            document.getElementById('turn').innerHTML = x + " wins";
            functionAlert("Congratulations!!!\n" + x + "\nYOU WIN");
            win();
        }
        if (b1 == b4 && b4 == b7) {
            document.getElementById('turn').innerHTML = x + " wins";
            functionAlert("Congratulations!!!\n" + x + "\nYOU WIN");
            win();
        }
    }
    if (b2 != '-') {
        if (b2 == 'X') x = pl1_name;
        else x = pl2_name;
        if (b2 == b5 && b5 == b8) {
            document.getElementById('turn').innerHTML = x + " wins";
            functionAlert("Congratulations!!!\n" + x + "\nYOU WIN");
            win();
        }
    }
    if (b3 != '-') {
        if (b3 == 'X') x = pl1_name;
        else x = pl2_name;
        if (b3 == b6 && b3 == b9) {
            document.getElementById('turn').innerHTML = x + " wins";
            functionAlert("Congratulations!!!\n" + x + "\nYOU WIN");
            win();
        }
        if (b3 == b5 && b5 == b7) {
            document.getElementById('turn').innerHTML = x + " wins";
            functionAlert("Congratulations!!!\n" + x + "\nYOU WIN");
            win();
        }
    }
    if (b4 != '-') {
        if (b4 == 'X') x = pl1_name;
        else x = pl2_name;
        if (b4 == b5 && b5 == b6) {
            document.getElementById('turn').innerHTML = x + " wins";
            functionAlert("Congratulations!!!\n" + x + "\nYOU WIN");
            win();
        }
    }
    if (b7 != '-') {
        if (b7 == 'X') x = pl1_name;
        else x = pl2_name;
        if (b7 == b8 && b8 == b9) {
            document.getElementById('turn').innerHTML = x + " wins";
            functionAlert("Congratulations!!!\n" + x + "\nYOU WIN");
            win();
        }
    }
}
//For alert
function functionAlert(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function () {
        confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
}
//for play again
function playagain(){
    sound4.play();
    firstview();
    document.getElementById('turn').innerHTML =pl1_name+" its your turn";
    document.getElementById('play-again-btn').disabled = true;
}

function firstview(){
    document.getElementById('btn1').disabled = false;
    document.getElementById('btn2').disabled = false;
    document.getElementById('btn3').disabled = false;
    document.getElementById('btn4').disabled = false;
    document.getElementById('btn5').disabled = false;
    document.getElementById('btn6').disabled = false;
    document.getElementById('btn7').disabled = false;
    document.getElementById('btn8').disabled = false;
    document.getElementById('btn9').disabled = false;
    document.getElementById('btn1').innerHTML="-";
    document.getElementById('btn2').innerHTML="-";
    document.getElementById('btn3').innerHTML="-";
    document.getElementById('btn4').innerHTML="-";
    document.getElementById('btn5').innerHTML="-";
    document.getElementById('btn6').innerHTML="-";
    document.getElementById('btn7').innerHTML="-";
    document.getElementById('btn8').innerHTML="-";
    document.getElementById('btn9').innerHTML="-";
}