const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const ctx = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined,
};

let score = 0;

window.addEventListener("mousemove", function (event) {
  mouse = {
    x: event.x,
    y: event.y,
  };
  // console.log(mouse)
});

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.stroke();
  };
  this.update = function () {
    if (this.radius < 25) {
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      // interactive
      if (
        mouse.x - this.x < 25 &&
        mouse.x - this.x > -25 &&
        mouse.y - this.y < 25 &&
        mouse.y - this.y > -25
      ) {
        if (this.radius < 50) {
          this.radius += 2;
          console.log(this.radius);
          if (this.radius === 25) {
            score += 1;
            console.log("+");
          }
        }
      } else if (this.radius > this.minRadius && this.radius < 25) {
        this.radius -= 2;
      }

      this.draw();
    }
  };
}

const circles = [];

for (let i = 0; i < 100; i++) {
  const radius = 5;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const dx = Math.random() - 0.25 * 2 + 1;
  const dy = Math.random() - 0.25 * 2 + 1;
  const circle = new Circle(x, y, dx, dy, radius, "white");
  circles.push(circle);
}

console.log(circles);

function renderScore() {
  ctx.beginPath();
  ctx.font = "bold 48px courier";
  const text = "Your score : " + score;
  const textX = Math.floor(canvas.width / 2 - ctx.measureText(text).width / 2);
  const textY = 100;
  console.log(textX, textY);
  ctx.fillStyle = "gold";
  ctx.fillText(text, textX, textY);
}

function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = "rgb(92, 184, 255)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  renderScore();
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
  }
}

draw();
