//Random Numer Generation
let firstRandomNum=Math.floor(Math.random()*6)+1
//going to generate pictures
let firstDiceImage="dice-picture/dice"+firstRandomNum+".png"
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage)

let secondRandomNum=Math.floor(Math.random()*6)+1
let secondDiceImage="dice-picture/dice"+secondRandomNum+".png"
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage)


if(firstRandomNum>secondRandomNum){
    document.querySelector('h1').textContent='Player 1 wins 🏆 '
}
else if(firstRandomNum<secondRandomNum){
    document.querySelector('h1').textContent='Player 2 wins 🏆 '
}
else
document.querySelector('h1').textContent="It's Draw!!"