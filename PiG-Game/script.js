'use strict';

var rolldie = function () {
  var result = Math.trunc(Math.random() * 6 + 1);
  return result;
};

var winner = function (pno) {
  document.querySelector('.hidden').classList.remove('hidden');
  document.querySelector('.modal').textContent = `Hurray Player${pno} won`;
};
// winner(2);
var player1totalscore = 0;
var player1current = 0;
var player2current = 0;
var player2totalscore = 0;
var activeplayer = 1;

var player1 = function () {
  activeplayer = 1;
  var Player1 = document.querySelector('.player--0');
  var Player2 = document.querySelector('.player--1');
  Player1.classList.add('player--active');
  Player2.classList.remove('player--active');
};
var player2 = function () {
  activeplayer = 2;
  var Player1 = document.querySelector('.player--0');
  var Player2 = document.querySelector('.player--1');
  Player1.classList.remove('player--active');
  Player2.classList.add('player--active');
};
// player2();
// player1();
// console.log(rolldie());
document.querySelector('.btn--roll').addEventListener('click', function () {
  var number = rolldie();
  document.querySelector('.dice').src = `dice-${number}.png`;

  console.log(number);
  if (number == 1) {
    if (activeplayer == 1) {
      console.log('AYYO');
      player1current = 0;
      document.getElementById('current--0').textContent = player1current;
      player2();
    } else {
      if (activeplayer == 2) {
        player2current = 0;
        document.getElementById('current--1').textContent = player2current;
        player1();
      }
    }
  } else {
    if (activeplayer == 1) {
      player1current = player1current + number;
      document.getElementById('current--0').textContent = player1current;
    }
    if (activeplayer == 2) {
      player2current = player2current + number;
      document.getElementById('current--1').textContent = player2current;
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (activeplayer == 1) {
    player1totalscore = player1totalscore + player1current;
    if (player1totalscore > 50) {
      winner(1);
    }
    document.getElementById('score--0').textContent = player1totalscore;
    player1current = 0;
    document.getElementById('current--0').textContent = 0;
    player2();
  } else if (activeplayer == 2) {
    player2totalscore = player2totalscore + player2current;
    if (player2totalscore > 50) {
      winner(2);
    }
    document.getElementById('score--1').textContent = player2totalscore;
    player2current = 0;
    document.getElementById('current--1').textContent = 0;
    player1();
  }
});

document.location.reload(true);
document.querySelector('.btn--new').addEventListener('click', function () {});
