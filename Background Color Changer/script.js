/* function backColorChange(colorcode) {
    document.body.style.backgroundColor = colorcode;
    let txtClr = document.getElementsByClassName('textColor');
    if (colorcode == 'red') {
        for (let i of txtClr)
    
            i.style.color = "white";
    }
    else {
        for (let i of txtClr)
            i.style.color="black"
    }

}
 */
function col1(){
    document.body.style.background="linear-gradient(to right, rgb(67, 198, 172), rgb(25, 22, 84))";
    textColorWhite();
}

function col2(){
    document.body.style.background="linear-gradient(to right, rgb(3, 0, 30), rgb(115, 3, 192), rgb(236, 56, 188), rgb(253, 239, 249))";
    textColorWhite();
}
function col3(){
    document.body.style.background="linear-gradient(to right,rgb(255, 180, 194), rgb(58, 228, 240),rgb(64, 117, 233))";
    textColorBlack();

}
function col4(){
    document.body.style.background="linear-gradient(to right, rgb(232, 203, 192), rgb(99, 111, 164))";
    textColorBlack();
}
function col5(){
    document.body.style.background="linear-gradient(to right, rgb(0, 4, 40), rgb(0, 78, 146))"
    
    textColorWhite();
}
function col6(){
    document.body.style.background="linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))";
    textColorWhite();
}function col7(){
    document.body.style.background="linear-gradient(to right, rgb(0, 191, 143), rgb(0, 21, 16))";
    textColorWhite();
    
}function col8(){
    document.body.style.background="linear-gradient(to right, rgb(230, 218, 218), rgb(39, 64, 70))"
    textColorBlack();
}

function textColorWhite(){
    document.getElementById("textColor2").style.color="white";
    document.getElementById("textColor3").style.color="white";
}
function textColorBlack(){
    document.getElementById("textColor2").style.color="rgb(2, 4, 26)";
    document.getElementById("textColor3").style.color="rgb(2, 4, 26)";
}