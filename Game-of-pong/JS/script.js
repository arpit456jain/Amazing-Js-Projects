let canvas;
let canvasContext;
let framesPerSecond = 30;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 6;
let ballSpeedY = 6;
let paddle1Y = 250;
let paddle2Y = 250;
const paddleHeight = 100;
const paddleWidth = 10;
let player1Score = 0;
let player2Score = 0;
let display1score = document.getElementById("player-one-score");
let display2score = document.getElementById("player-two-score");

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  setInterval(function () {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);

  canvas.addEventListener("mousemove", function (evt) {
    let mousePos = calculateMousePos(evt);
    paddle1Y = mousePos.y - paddleHeight / 2;
  });
};

function moveEverything() {
  computerMovement();
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;
  if (ballX > canvas.width - 20) {
    if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
      ballSpeedX = -ballSpeedX;
    } else {
      if (ballX > canvas.width + 10) {
        ballReset();
        player1Score++;
        display1score.innerText = player1Score;
        display1score.textContent = player1Score;
      }
    }
  }
  if (ballX < 20) {
    if (ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
      ballSpeedX = -ballSpeedX;

      let deltaY = ballY - (paddle1Y + paddleHeight / 2);
      ballSpeedY = deltaY * 0.5 + 6;
    } else {
      if (ballX < -10) {
        ballReset();
        player2Score++;
        display2score.innerText = player2Score;
        display2score.textContent = player2Score;
      }
    }
  }
  if (ballY > canvas.height - 10) {
    ballSpeedY = -ballSpeedY;
  }
  if (ballY < 10) {
    ballSpeedY = -ballSpeedY;
  }
}

function drawEverything() {
  //Court
  colorRect(0, 0, canvas.width, canvas.height, "green");
  //Middle Circle 1
  colorCircle(canvas.width / 2, canvas.height / 2, 100, "lightgrey");
  //Middle Circle 1
  colorCircle(canvas.width / 2, canvas.height / 2, 50, "green");
  //Center Line
  colorRect((canvas.width - 20) / 2, 0, 20, canvas.height, "lightgrey");
  //Ball
  colorCircle(ballX, ballY, 10, "white");
  //Paddle Left
  colorRect(5, paddle1Y, paddleWidth, paddleHeight, "brown");
  //Paddle Right
  colorRect(685, paddle2Y, paddleWidth, paddleHeight, "brown");
}

function colorRect(X, Y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(X, Y, width, height);
}

function colorCircle(centerX, centerY, radius, color) {
  canvasContext.fillStyle = color;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function calculateMousePos(evt) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = evt.clientX - rect.left;
  let mouseY = evt.clientY - rect.top;
  return {
    x: mouseX,
    y: mouseY,
  };
}

function ballReset() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
  ballSpeedY = -ballSpeedY;
}

function computerMovement() {
  let paddle2YCenter = paddle2Y + paddleHeight / 2;
  if (paddle2YCenter < ballY - 25) {
    paddle2Y += 6;
  } else if (paddle2YCenter > ballY + 25) {
    paddle2Y -= 6;
  }
}
