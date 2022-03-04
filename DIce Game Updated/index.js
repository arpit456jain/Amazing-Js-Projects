function dice(){
    var i=0, a=[];

    for(i=0;i<2;i++){
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        a[i]=randomNumber;
        var randomImageSource = "images/dice" + randomNumber + ".png";
        document.querySelectorAll("img")[i].setAttribute("src", randomImageSource);
    }
    
    if (a[0] > a[1]) 
      document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    else if (a[1] > a[0]) 
      document.querySelector("h1").innerHTML = "🚩Player 2 Wins! ";
    else
      document.querySelector("h1").innerHTML = "Draw!";    
}
document.getElementById("btn").onclick = dice;
