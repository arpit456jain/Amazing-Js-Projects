var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var imgSource1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var imgSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", imgSource1);
document.querySelector(".img2").setAttribute("src", imgSource2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins";
} else if (randomNumber2 == randomNumber1) {
  document.querySelector("h1").innerHTML = "Draw";
} else {
  document.querySelector("h1").innerHTML = "Play 2 Wins";
}
