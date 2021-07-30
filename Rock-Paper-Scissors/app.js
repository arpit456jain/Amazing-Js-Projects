window.onload = () => {
    var i = 0;
    var txt = "So, What's your pick Human?";

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    setTimeout(typeWriter, 800);
}
var score = 0;
var highScore=localStorage.getItem('highScore');
if(highScore==null)
{
    localStorage.setItem("highScore",0);
    highScore=0;
}
highScoreText.innerHTML="Win Streak "+highScore;
console.log(highScore)
pickCard = () => random = Math.floor(Math.random() * 3)
checkVictory = (i, j) => {
    if (i == j)
        return "DRAW";
    else if (i == 0) {
        if (j == 1) {
            score=score?--score:0;
            return "LOSE";
        }
        if (j == 2) {
            score++;
            return "WIN";
        }
    } else if (i == 1) {
        if (j == 0) {
            score++;
            return "WIN";
        }
        if (j == 2) {
            score=score?--score:0;
            return "LOSE";
        }
    } else if (i == 2) {
        if (j == 0) {
            score=score?--score:0;
            return "LOSE";
        }
        if (j == 1) {
            score++;
            return "WIN";
        }
    }
}
var cards = document.querySelectorAll('.card')
for (let I = 0; I < 3; I++) {
    cards[I].addEventListener('click', () => {
        for (let i = 0; i < 3; i++){if(i!=I)cards[i].classList.add('remove');
setTimeout(() => {
    scoreboard.classList.toggle('invisible')
}, 300);
}
cards[I].classList.add('removebtn')
        random = pickCard();
        setTimeout(() => {
        document.getElementById(random + 1).classList.toggle('hide')
        }, 800);
        setTimeout(() => {
            scoreboard.classList.toggle('hide')
        scoreboard.classList.toggle('invisible')
        }, 1500);
        result.innerHTML = checkVictory(I, random);
        var scoreText=document.getElementById('scoreText')
        highScore=score>highScore?++highScore:highScore;
        localStorage.setItem("highScore",highScore)
        scoreText.innerHTML="Score "+score;
        highScoreText.innerHTML="Win Streak "+highScore;

console.log(score,highScore)
    })
}
retry.addEventListener('click', () => {
    scoreboard.classList.toggle('hide')
    document.getElementById(random + 1).classList.toggle('hide')
    setTimeout(() => {
    for (let i = 0; i < 3; i++) cards[i].classList.remove('remove','removebtn')
    }, 400);
})