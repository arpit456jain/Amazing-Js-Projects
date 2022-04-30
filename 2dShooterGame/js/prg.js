import Perso from "./perso.js";
import Sprite from "./sprite.js";
import Tir from "./tir.js";

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
const fps = 60;
let perso = new Perso();
let feu = new Sprite(28, 46, 0, 0, 16, 1);
feu.img.src = "./assets/feu.png";
feu.img.onload = function () {
  feu.load();
};

let diotp = new Sprite(320, 180, 0, 0, 1, 64);
diotp.img.src = "./assets/diotp.png";
diotp.img.onload = function () {
  diotp.load();
};

let fond = new Sprite(872, 720, 0, 0, 1, 34);
fond.img.src = "./assets/fond.png";
fond.img.onload = function () {
  fond.load();
};

let fond2 = new Sprite(320, 180, 0, 0, 1, 58);
fond2.img.src = "./assets/fond3.png";
fond2.img.onload = function () {
  fond2.load();
};
fond2.slow = 2;
fond2.sslow = 2;

let fond3 = new Sprite(405, 168.75, 0, 0, 1, 60);
fond3.img.src = "./assets/fond2.png";
fond3.img.onload = function () {
  fond3.load();
};
fond3.slow = 2;
fond3.sslow = 2;

let fond4 = new Sprite(340, 255, 0, 0, 1, 51);
fond4.img.src = "./assets/fond4.png";
fond4.img.onload = function () {
  fond4.load();
};

let win = new Sprite(1920, 1080, 0, 0, 1, 1);
win.img.src = "./assets/win.png";
win.img.onload = function () {
  win.load();
};

let loose = new Sprite(1920, 1080, 0, 0, 1, 1);
loose.img.src = "./assets/loose.png";
loose.img.onload = function () {
  loose.load();
};

let dio = new Sprite(139.2, 120, 0, 0, 19, 1);
dio.img.src = "./assets/dio.png";
dio.img.onload = function () {
  dio.load();
};
dio.hp = 50;

let dioknife = new Sprite(200, 167, 0, 0, 11, 1);
dioknife.img.src = "./assets/dioknife.png";
dioknife.img.onload = function () {
  dioknife.load();
};

let summon = new Sprite(480, 270, 0, 0, 1, 54);
summon.img.src = "./assets/summon.png";
summon.img.onload = function () {
  summon.load();
};

let muda = new Sprite(200, 169, 0, 0, 20, 1);
muda.img.src = "./assets/muda.png";
muda.img.onload = function () {
  muda.load();
};

let tir2 = new Sprite(490, 360, 0, 0, 1, 17);
tir2.img.src = "./assets/tir2.png";
tir2.img.onload = function () {
  tir2.load();
};

let dioexpl = new Sprite(221, 180, 0, 0, 1, 21);
dioexpl.img.src = "./assets/dioexpl.png";
dioexpl.img.onload = function () {
  dioexpl.load();
};

let roadrollersummon = new Sprite(480, 270, 0, 0, 1, 54);
roadrollersummon.img.src = "./assets/roadrollersummon.png";
roadrollersummon.img.onload = function () {
  roadrollersummon.load();
};

let roadroller = new Sprite(193, 333, 0, 0, 1, 1);
roadroller.img.src = "./assets/roadroller.png";
roadroller.img.onload = function () {
  roadroller.load();
};

let knifevec = [];

let keysPressed = {};
let sniper = new Image();
sniper.src = "./assets/sniper.png";
let arme = new Image();
arme.src = "./assets/arme.png";
let robot = new Sprite(113, 213, 0, 0, 1, 1);
robot.img.src = "./assets/robot.png";
robot.img.onload = function () {
  robot.load();
};
let robot2 = new Sprite(113, 213, 0, 0, 1, 1);
robot2.img.src = "./assets/robot.png";
robot2.img.onload = function () {
  robot2.load();
};
let bgx3 = 0;
let bgs = 1;
let state = 0;
let tirvec = [];
let alitirvec = [];
let alienvec = [];
let robotvec = [];
let beamvec = [];
let newarme = false;
robotvec.push(robot);
robotvec.push(robot2);
let start = false;
let starto = new Sprite(1920, 1080, 0, 0, 1, 1);
starto.img.src = "./assets/start.png";
starto.img.onload = function () {
  starto.load();
};
let explosionvec = [];
let healthbar = new Sprite(604, 80, 0, 0, 1, 10);
healthbar.img.src = "./assets/healthbar.png";
healthbar.img.onload = function () {
  healthbar.load();
};

let energy = new Sprite(604, 108.83, 0, 0, 1, 6);
energy.img.src = "./assets/energy.png";
energy.img.onload = function () {
  energy.load();
};

let zawarudo = new Sprite(641, 361.415, 0, 0, 1, 43);
zawarudo.img.src = "./assets/zawarudo.png";
zawarudo.img.onload = function () {
  zawarudo.load();
};

let konodio = new Sprite(480, 270, 0, 0, 1, 49);
konodio.img.src = "./assets/konodio.png";
konodio.img.onload = function () {
  konodio.load();
};

let teleportation = new Sprite(320, 180, perso.posx, perso.posy, 1, 33);
teleportation.img.src = "./assets/teleportation.png";
teleportation.img.onload = function () {
  teleportation.load();
};

teleportation.slow = 3;
teleportation.sslow = 3;

let teleportation2 = new Sprite(480, 270, 0, 0, 1, 54);
teleportation2.img.src = "./assets/teleportation2.png";
teleportation2.img.onload = function () {
  teleportation2.load();
};

teleportation2.slow = 2;
teleportation2.sslow = 2;

let beam = new Sprite(2282, 87.5, 200, 200, 1, 26);
beam.img.src = "./assets/kamehameha.png";
beam.img.onload = function () {
  beam.load();
};
beam.slow = 2;
beam.sslow = 2;
let beam2 = new Sprite(2282, 87.5, 0, 0, 1, 26);
beam2.img.src = "./assets/kamehameha.png";
beam2.img.onload = function () {
  beam2.load();
};
beam2.slow = 2;
beam2.sslow = 2;
beamvec.push(beam);
beamvec.push(beam2);
let dioexplosion = false;

function explosiondio(d) { 
  if (dioexplosion == true) {
    if (dioexpl.anim_id == 0) {
      var myAudio = new Audio("./assets/diohit.mp3");
      myAudio.play();
    }
    dioexpl.posX = d.posX - 50;
    dioexpl.posY = d.posY - 50;
    if (d == dioknife) {
      dioexpl.posX = d.posX;
      dioexpl.posY = d.posY;
    }
    dioexpl.draw();
    if (dioexpl.anim_id == 20) {
      dioexplosion = false;
      dioexpl.anim_id = 0;
    }
  }
}

function scaleimg(img) { 
  img.hRatio = cnv.width / img.Lx;
  img.vRatio = cnv.height / img.Ly;
  img.centerShift_x = (cnv.width - img.Lx * img.hRatio) / 2;
  img.centerShift_y = (cnv.height - img.Ly * img.vRatio) / 2;
}

function bgmove() { 
  for (let i = 0; i < robotvec.length; i++) {
    robotvec[i].hp = 3;
  };
}

function robotdm() { 
  for (let i = 0; i < robotvec.length; i++) {
    if (robotvec[i].state == false) {
      if (robotvec[i].hp == 5) {
        if (robotvec[i].posY + 213 <= cnv.height) {
          robotvec[i].posY += 20;
        } else {
          robotvec[i].hp = 4;
        }
      }
      if (robotvec[i].hp == 4) {
        if (robotvec[i].posY >= 0) {
          robotvec[i].posY -= 20;
        } else {
          robotvec[i].hp = 5;
        }
      }
    }
  }
}

function beamcol() { 
  for (let i = 0; i < beamvec.length; i++) {
    if (
      perso.posy > beamvec[i].posY + beamvec[i].Ly ||
      perso.posx + 30 < beamvec[i].posX ||
      perso.posy + 58 < beamvec[i].posY ||
      perso.posx > beamvec[i].posX + beamvec[i].Lx
    ) {
      beamvec[i].state = false;
    } else {
      if (robotvec[i].hp != 3) {
        if (robotvec[i].state == true) {
          if (beamvec[i].state == false) {
            perso.pv -= 1;
            if (energy.anim_id != 5) {
              energy.anim_id += 1;
            }
            if (healthbar.anim_id != 9) {
              healthbar.anim_id += 1;
            } else {
              state = 5;
            }

            beamvec[i].state = true;
          }
        }
      }
    }
  }
}

function robotattack() { 
  for (let i = 0; i < robotvec.length; i++) {
    if (robotvec[i].hp != 3) {
      if (robotvec[i].state == true) {
        beamvec[i].draw();
        if (beamvec[i].anim_id == 25) {
          robotvec[i].state = false;
          beamvec[i].anim_id = 0;
        }
      }
    }
  }
}

function changestate() { 
  for (let i = 0; i < robotvec.length; i++) {
    robotvec[i].state = true;
  }
}

function playback() { 
  var myAudio = new Audio("./assets/fond.mp3");
  myAudio.play();
}

function ZaWarudoTokiOTomare() { 
  if (zawarudo.state == true) {
    zawarudo.drawScale();
    if (zawarudo.anim_id == 42) {
      zawarudo.state = false;
      zawarudo.anim_id = 0;
    }
  }
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function spawnAlien() { 
  let y = getRandom(0, cnv.height - 82);
  let y2 = getRandom(0, cnv.height / 2);
  let ali = new Sprite(82, 62, cnv.width, y, 20, 1);
  ali.img.src = "./assets/alien.png";
  ali.img.onload = function () {
    ali.load();
  };
  let ali2 = new Sprite(82, 62, cnv.width, y2, 20, 1);
  ali2.img.src = "./assets/alien.png";
  ali2.img.onload = function () {
    ali2.load();
  };
  alienvec.push(ali);
  alienvec.push(ali2);
}

function moveAlien(i) {
  alienvec[i].posX -= 5;
}

function backgstop() { 
  bgs = 0;
  teleportation.posX = perso.posx - 140;
  teleportation.posY = perso.posy - 75;
  teleportation.state = true;
}

function attackchange() { 
  if (dio.hp <= 40) {
    if (dio.hp == 40) {
      if (healthbar.state == false) {
        if (healthbar.anim_id - 4 > 0) {
          healthbar.anim_id -= 4;
        } else {
          healthbar.anim_id = 0;
        }
        healthbar.state = true;
      }
    }
    dio.attack = 2;
  }
  if (dio.hp <= 20) {
    if (dio.hp == 20) {
      if (healthbar.state == true) {
        if (healthbar.anim_id - 4 > 0) {
          healthbar.anim_id -= 4;
        } else {
          healthbar.anim_id = 0;
        }
        healthbar.state = false;
      }
    }
    dio.attack = 3;
  }
  if (dio.hp < 10) {
    state = 4;
  }
}

function tirstart() { 
  let tir = new Tir(perso.posx + 40, perso.posy + 29);
  tirvec.push(tir);
}

function stoplv2() { 
  if (robotvec[0].hp == 3) {
    perso.stop();
    teleportation2.posX = perso.posx - 480;
    teleportation2.posY = perso.posy - 270;
    teleportation2.draw();
    if (teleportation2.anim_id == 52) {
      state = 3;
      teleportation2.anim_id = 52;
      perso.restart();
      if (healthbar.anim_id - 5 > 0) {
        healthbar.anim_id -= 5;
      } else {
        healthbar.anim_id = 0;
      }
    }
    dio.posY = cnv.height;
  }
}

function changeattack() { 
  dio.attack = 1;
}

function tircoldio(d) { 
  if (tir2.state == true) {
    if (tir2.anim_id == 15) {
      if (tir2.posY + 100 < d.posY + d.Ly && tir2.posY + tir2.Ly - 100 > d.posY) {
        dio.hp -= 1;
        dioexplosion = true;
        if (energy.anim_id != 5) {
          energy.anim_id += 1;
        }
      }
    }
  }
}

function tircol(i) { 
  for (let j = 0; j < tirvec.length; j++) {
    if (
      tirvec[j].y > alienvec[i].posY + alienvec[i].Ly ||
      tirvec[j].x + 23 < alienvec[i].posX ||
      tirvec[j].y + 6 < alienvec[i].posY ||
      tirvec[j].x > alienvec[i].posX + alienvec[i].Lx
    ) {} else {
      alienvec[i].state = true;
      tirvec.splice(j, 1);
      let explosion = new Sprite(
        64,
        45,
        alienvec[i].posX,
        alienvec[i].posY,
        1,
        30
      );
      explosion.img.src = "./assets/explosion.png";
      explosion.img.onload = function () {
        explosion.load();
      };
      explosion.slow = 8;
      explosion.sslow = 8;
      explosionvec.push(explosion);
      var myAudio = new Audio("./assets/explosion.mp3");
      myAudio.volume = 0.1;
      myAudio.play();
      if (energy.anim_id != 5) {
        energy.anim_id += 1;
      }
    }
  }
}

document.addEventListener("keypress", (event) => { 
  keysPressed[event.key] = true;
  if (
    (keysPressed["w"] && event.key == "d" && event.key == "j") ||
    (keysPressed["d"] && event.key == "w" && event.key == "j")
  ) {
    perso.fly();
    perso.fly_right();
    tirstart();
  }
  if (
    (keysPressed["w"] && event.key == "a" && event.key == "j") ||
    (keysPressed["a"] && event.key == "w" && event.key == "j")
  ) {
    perso.fly();
    perso.fly_left();
    tirstart();
  }
  if (
    (keysPressed["s"] && event.key == "d" && event.key == "j") ||
    (keysPressed["d"] && event.key == "s" && event.key == "j")
  ) {
    perso.stop_fly();
    perso.fly_right();
    tirstart();
  }
  if (
    (keysPressed["s"] && event.key == "a" && event.key == "j") ||
    (keysPressed["a"] && event.key == "s" && event.key == "j")
  ) {
    perso.stop_fly();
    perso.fly_left();
    tirstart();
  }

  if (
    (keysPressed["w"] && event.key == "d") ||
    (keysPressed["d"] && event.key == "w")
  ) {
    perso.fly();
    perso.fly_right();
  }
  if (
    (keysPressed["w"] && event.key == "a") ||
    (keysPressed["a"] && event.key == "w")
  ) {
    perso.fly();
    perso.fly_left();
  }
  if (
    (keysPressed["s"] && event.key == "d") ||
    (keysPressed["d"] && event.key == "s")
  ) {
    perso.stop_fly();
    perso.fly_right();
  }
  if (
    (keysPressed["s"] && event.key == "a") ||
    (keysPressed["a"] && event.key == "s")
  ) {
    perso.stop_fly();
    perso.fly_left();
  }
  if (keysPressed["j"]) {
    if (perso.bossstage == false) {
      tirstart();
    }
    if (perso.bossstage == true) {
      tir2.state = true;
    }
  }
  if (keysPressed["e"]) {
    if (state == 3) {
      if (perso.posy > cnv.height / 2 - 200 + arme.height || perso.posx + 30 < cnv.width / 2 - 200 || perso.posy + 58 < cnv.height / 2 - 200 || perso.posx > cnv.width / 2 - 200 + arme.width) {} else {
        perso.img.src = "./assets/perso2.png";
        newarme = true;
        dio.posY = cnv.height;
        perso.bossstage = true;
      }
    }
  }
  if (keysPressed["Enter"]) {
    if (start == false) {
      playback();
      start = true;
      state = 1;
      setTimeout(backgstop, 20000);
    }
  }
  if (keysPressed["i"]) {
    if (energy.anim_id == 5) {
      zawarudo.state = true;
      energy.anim_id = 0;
      var myAudio = new Audio("./assets/zawarudo.mp3");
      myAudio.play();
    }
  }
  if (keysPressed["w"]) {
    perso.fly();
  }
  if (keysPressed["s"]) {
    perso.stop_fly();
  }
  if (keysPressed["d"]) {
    perso.fly_right();
  }
  if (keysPressed["a"]) {
    perso.fly_left();
  }
});

document.addEventListener("keyup", (event) => {
  if (keysPressed["w"]) {
    perso.restartup();
  }
  if (keysPressed["s"]) {
    perso.restartdown();
  }
  if (keysPressed["a"]) {
    perso.restartleft();
  }
  if (keysPressed["d"]) {
    perso.restartright();
  }
  if (keysPressed["j"]) {
    if (perso.bossstage == true) {
      tir2.state = true;
    }
  }
  if (keysPressed["Enter"]) {
    if (state == 4 || state == 5) {
      window.location.reload();
    }
  }
  delete keysPressed[event.key];
});


function starttir2() { 
  if (tir2.state == true) {
    if (tir2.anim_id == 0) {
      var myAudio = new Audio("./assets/laser.mp3");
      myAudio.play();
    }
    tir2.posX = perso.posx;
    tir2.posY = perso.posy - 150;
    tir2.draw();
    if (tir2.anim_id == 16) {
      tir2.state = false;
      tir2.anim_id = 0;
    }
  }
}


function level0() { 
  scaleimg(fond4);
  fond4.drawScale();
  scaleimg(starto);
  starto.drawScale();
}

function level1() { 
  scaleimg(zawarudo);
  scaleimg(fond2);
  if (bgs != 0) {
    fond2.drawScale();
  } else {
    fond2.drawpercent();
  }
  perso.limite(cnv.height);
  perso.limite2(0);
  perso.limite3(0);
  perso.limite4(cnv.width);
  if (teleportation.state == false) {
    perso.setup_gravity();
  }
  feu.posX = perso.posx - 4;
  feu.posY = perso.posy + 40;

  for (let i = 0; i < alienvec.length; i++) {
    tircol(i);
  }

  for (let i = 0; i < alienvec.length; i++) {
    if (zawarudo.state == true) {  
      alienvec[i].posX += 5;
      alienvec[i].slow = 9;
      alienvec[i].sslow = 9;
    } 
    alienvec[i].draw();
    moveAlien(i);
    if (alienvec[i].anim_id == 12) {
      if (alienvec[i].slow == 2) {
        let fball = new Sprite(
          32,
          32,
          alienvec[i].posX + 20,
          alienvec[i].posY + 15,
          6,
          1
        );
        fball.img.src = "./assets/fireball.png";
        fball.img.onload = function () {
          fball.load();
        };
        alitirvec.push(fball);
      }
    }
    if (alienvec[i].posX < -82 || alienvec[i].state == true) {
      alienvec.splice(i, 1);
    }
  }

  for (let i = 0; i < alitirvec.length; i++) {
    if (zawarudo.state == true) {  
      alitirvec[i].posX += 15;
      alitirvec[i].slow = 9;
      alitirvec[i].sslow = 9;
    } 
    if (
      perso.posy > alitirvec[i].posY + alitirvec[i].Ly ||
      perso.posx + 30 < alitirvec[i].posX ||
      perso.posy + 58 < alitirvec[i].posY ||
      perso.posx > alitirvec[i].posX + alitirvec[i].Lx
    ) {
      alitirvec[i].draw();
      alitirvec[i].posX -= 15;
      if (alitirvec[i].posX < -32) {
        if (zawarudo.state == false) {
          alitirvec.splice(i, 1);
        }
      }
    } else {
      perso.pv -= 1;
      if (zawarudo.state == false) {
        alitirvec.splice(i, 1);
      }
      if (healthbar.anim_id != 9) {
        healthbar.anim_id += 1;
      } else {
        state = 5;
      }
    }
  }

  for (let i = 0; i < explosionvec.length; i++) {
    if (explosionvec[i].anim_id == 4) {
      explosionvec.splice(i, 1);
    } else {
      explosionvec[i].draw();
    }
  }
  feu.draw();
  perso.draw();
  for (let i = 0; i < tirvec.length; i++) {
    tirvec[i].draw(cnv.width);
    tirvec[i].move();
    if (tirvec[i].state == false) {
      tirvec.splice(i, 1);
    }
  }

  if (bgs == 0) {
    teleportation.draw();
  }
  ZaWarudoTokiOTomare();
  healthbar.drawSlice();
  energy.drawSlice();
  if (bgs == 0) {
    clearInterval(alinter);
  }
  if (teleportation.anim_id == 32) {
    state = 2;
    teleportation.anim_id = 0;
    perso.posx = 200;
    perso.posy = 200;
    bgs = 1;
    teleportation.posX = perso.posx - 140;
    teleportation.posY = perso.posy - 75;
    if (healthbar.anim_id - 5 > 0) {
      healthbar.anim_id -= 5;
    } else {
      healthbar.anim_id = 0;
    }
    robotvec[0].posX = cnv.width - 113;
    beamvec[0].posX = cnv.width - beam.Lx + 80;
    beamvec[1].posX = cnv.width - beam.Lx + 80;
    robotvec[1].posX = cnv.width - 113;
    robotvec[1].posY = cnv.height - 213;
  }
}

function level2() { 
  scaleimg(zawarudo);
  robotvec[0].posX = cnv.width - 113;
  beamvec[0].posX = cnv.width - beam.Lx + 80;
  beamvec[1].posX = cnv.width - beam.Lx + 80;
  robotvec[1].posX = cnv.width - 113;
  setTimeout(bgmove, 20000);
  scaleimg(fond3);
  if (robotvec[0].hp != 3) {
    fond3.drawScale();
  } else {
    fond3.drawpercent();
  }
  perso.limite(cnv.height);
  perso.limite2(0);
  perso.limite3(0);
  perso.limite4(cnv.width);
  if (teleportation.state == false) {
    perso.setup_gravity();
  }
  feu.posX = perso.posx - 4;
  feu.posY = perso.posy + 40;
  for (let i = 0; i < tirvec.length; i++) {
    tirvec[i].draw(cnv.width);
    tirvec[i].move();
    if (tirvec[i].state == false) {
      tirvec.splice(i, 1);
    }
  }
  stoplv2();
  feu.draw();
  perso.draw();
  if (teleportation.anim_id != 32) {
    teleportation.draw();
  } else {
    teleportation.state = false;
  }
  robotdm();
  beamvec[0].posY = robotvec[0].posY + 20;
  beamvec[1].posY = robotvec[1].posY + 20;
  robotattack();
  beamcol();
  robotvec[0].draw();
  robotvec[1].draw();
  ZaWarudoTokiOTomare();
  healthbar.drawSlice();
  energy.drawSlice();
}

function level3() { 
  scaleimg(zawarudo);
  scaleimg(fond);
  fond.drawScale();
  dio.posX = cnv.width - 140;
  dioknife.posX = cnv.width - 200;
  if (teleportation2.state == false) {
    teleportation2.draw();
  }
  if (teleportation2.anim_id == 1) {
    teleportation2.state = true;
  }
  if (newarme == false) {
    ctx.drawImage(
      arme,
      cnv.width / 2 - 200,
      cnv.height / 2 - 200
    );
  }
  if (newarme == true) {
    if (diotp.anim_id != 63) {
      scaleimg(diotp);
      diotp.drawScale();
    }
  }
  if (diotp.anim_id == 63) {
    dio.posX = cnv.width / 2 - 100;
    dio.posY = cnv.height / 2 - 100;
    bgx3 = 300;
  }
  if (bgx3 == 300) { 
    if (konodio.state == false) {
      konodio.hp = 4;
      konodio.hRatio = cnv.width / konodio.Lx;
      konodio.vRatio = cnv.height / konodio.Ly;
      konodio.centerShift_y = 0;
      konodio.drawScale();
    }
    if (konodio.centerShift_x > 0) {
      konodio.centerShift_x -= 100;
    }
    if (konodio.anim_id == 1) {
      var myAudio = new Audio("./assets/konodio.mp3");
      myAudio.play();
    }
    if (konodio.anim_id == 48) {
      konodio.state = true;
      konodio.hp = 5;
      setTimeout(changeattack, 2000);
      konodio.anim_id = 0;
    }
  }
  perso.limite(cnv.height);
  perso.limite2(0);
  perso.limite3(0);
  perso.limite4(cnv.width);
  if (konodio.hp == 5 && muda.state == false && tir2.state == false) {
    perso.setup_gravity();
  }
  feu.posX = perso.posx - 4;
  feu.posY = perso.posy + 40;
  for (let i = 0; i < tirvec.length; i++) {
    tirvec[i].draw(cnv.width);
    tirvec[i].move();
    if (tirvec[i].state == false) {
      tirvec.splice(i, 1);
    }
  }
  if (dio.attack == 3) { 
    muda.state = false;
    if (roadrollersummon.anim_id == 0) {
      var myAudio = new Audio("./assets/roadrollerda.mp3");
      myAudio.play();
    }
    if (roadrollersummon.anim_id != 53) {
      scaleimg(roadrollersummon);
      roadrollersummon.drawScale();
      roadroller.posY = -roadroller.Ly;
      roadroller.posX = perso.posx;
    }
    if (roadrollersummon.anim_id == 53) {
      roadroller.draw();
      if (zawarudo.state == false) {
        roadroller.posY += 40;
      }
      if (perso.posy > roadroller.posY + roadroller.Ly || perso.posx + 30 < roadroller.posX || perso.posy + 58 < roadroller.posY || perso.posx > roadroller.posX + roadroller.Lx) {} else {
        perso.pv -= 1;
        if (healthbar.anim_id != 9) {
          healthbar.anim_id += 1;
        } else {
          state = 5;
        }
      }
      if (roadroller.posY > cnv.height) {
        dio.state = true;
        dio.posX = cnv.width - 140;
        dio.posY = cnv.height / 2;
        dio.draw();
        tircoldio(dio);
        explosiondio(dio);
        if (dio.anim_id == 18) {
          roadroller.hp -= 1;
        }
        if (roadroller.hp == 0) {
          dio.state = false;
          dio.anim_id = 0;
          roadrollersummon.anim_id = 0;
          roadroller.hp = 5;
        }
        if (zawarudo.state == true) {
          if (dio.anim_id > 0) {
            dio.anim_id -= 1;
          } else {
            dio.anim_id == 0;
          }
        }
      }
    }
    ctx.drawImage(
      sniper,
      cnv.width - 100,
      perso.posy,
    );
  }
  if (dio.attack == 2) { 
    if (summon.anim_id == 0) {
      var myAudio = new Audio("./assets/summon.mp3");
      myAudio.play();
    }
    if (summon.anim_id != 53) {
      scaleimg(summon);
      summon.drawScale();
      muda.posY = perso.posy;
      muda.posX = perso.posx;
      if (summon.anim_id == 52) {
        muda.state = true;
      }
    }
    if (summon.anim_id == 53) {
      muda.draw();
      if (muda.anim_id == 19) {
        if (muda.hp == 5) {
          if (muda.state == true) {
            perso.pv -= 1;
            if (healthbar.anim_id != 9) {
              healthbar.anim_id += 1;
            } else {
              state = 5;
            }
          }
        }
        muda.hp -= 1;
      }
      if (muda.hp == 0) {
        muda.state = false;
        muda.anim_id = 0;
        summon.anim_id = 0;
        muda.hp = 5;
      }
    }
    if (zawarudo.state == true) {
      muda.state = false;
    }
    dio.posX = cnv.width - 140;
    dio.posY = cnv.height / 2;
    dio.draw();
    tircoldio(dio);
    explosiondio(dio);
    ctx.drawImage(
      sniper,
      cnv.width - 100,
      perso.posy,
    );
  }
  if (dio.attack == 1) { 
    dio.posX = cnv.width - 140;
    if (dioknife.anim_id == 0) {
      if (zawarudo.state == false) {
        dioknife.posY = perso.posy;
      }
    }
    if (dioknife.anim_id == 6) {
      let knife = new Sprite(173, 129, dioknife.posX - 173, dioknife.posY, 1, 1);
      knife.img.src = "./assets/knife.png";
      knife.img.onload = function () {
        knife.load();
      };
      knifevec.push(knife);
    }
    dioknife.draw();
    if (zawarudo.state == true) {
      if (dioknife.anim_id > 0) {
        dioknife.anim_id -= 1;
      } else {
        dioknife.anim_id == 0;
      }
    }
    tircoldio(dioknife);
    explosiondio(dioknife);
    ctx.drawImage(
      sniper,
      cnv.width - 100,
      perso.posy,
    );
  }
  if (dio.attack == 0) {
    dio.draw();
  }
  for (let i = 0; i < knifevec.length; i++) {
    if (perso.posy > knifevec[i].posY + knifevec[i].Ly || perso.posx + 30 < knifevec[i].posX || perso.posy + 58 < knifevec[i].posY || perso.posx > knifevec[i].posX + knifevec[i].Lx) {
      if (zawarudo.state == false) {
        knifevec[i].draw();
        knifevec[i].posX -= 30;
      }
      if (knifevec[i].posX - 200 < 0) {
        knifevec.splice(i, 1);
      }
    } else {
      perso.pv -= 2;
      if (healthbar.anim_id != 9) {
        healthbar.anim_id += 1;
      } else {
        state = 5;
      }
      knifevec.splice(i, 1);
    }
  }
  feu.draw();
  perso.draw();
  starttir2();
  ZaWarudoTokiOTomare();
  healthbar.drawSlice();
  energy.drawSlice();
  attackchange();
}

function update() {
  cnv.width = window.innerWidth;
  cnv.height = window.innerHeight;
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  if (state == 0) {
    level0();
  }
  if (state == 1) {
    level1();
  }
  if (state == 2) {
    level2();
  }
  if (state == 3) {
    level3();
  }
  if (state == 4) {
    scaleimg(fond4);
    fond4.drawScale();
    scaleimg(win);
    win.drawScale();
  }
  if (state == 5) {
    scaleimg(fond4);
    fond4.drawScale();
    scaleimg(loose);
    loose.drawScale();
  }
  setTimeout(() => {
    requestAnimationFrame(update);
  }, 1000 / fps);
}

var alinter = setInterval(spawnAlien, 2000);
setInterval(changestate, 3000);
update();