const MAX_PLAYERS = 2;

function TicTacToe(){
	this.player1 = {};
	this.player2 = {};
	this.currentPlayer = null;
	this.winner = null;
	this.winningMoves = null;
	this.finished = false
	this.board = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
	];
}

function player(name, symbol){
	this.name = name;
	this.symbol = symbol;
	this.score = 0;
}

TicTacToe.prototype.setPlayers = function(name, symbol){
	this.player1 = new player(name, symbol.toUpperCase());
	this.player2 = new player("computer", (this.player1.symbol.toUpperCase() == "X") ? "O": "X");
	//When a new game is started, the first turn is picked randomly.
	this.setCurrentPlayer("random");
};

TicTacToe.prototype.setCurrentPlayer = function(player){
	if (player === "random"){
		var getTurn = flipCoin(0,MAX_PLAYERS);
		this.currentPlayer = getTurn == 0 ? this.player1 : this.player2;
	}
	else{
		this.currentPlayer = player;
	}
};

//returns a random number between 0 and max-1
function flipCoin(min, max){
 	return Math.floor(Math.random() * (max - min)) + min;
}

//returns a succesful move or empty object;
TicTacToe.prototype.play = function(player, row, col){
	var move = {};
	//place symbol
	if (player.toLowerCase() == "computer"){
		move = this.getBestMove();
		this.board[move.row][move.col] = this.player2.symbol;
	}
	else{
		//if move hasn't already been taken then set that move to the player's symbol
		if (!this.moveFilled(row,col)){
		 this.board[row][col] = this.player1.symbol;
			move.row = row;
			move.col = col;
		}else{
			//return an empty move to represent that the move was not available
			return move;
		}
	}
	//check if there is a winner	
	var isWinner = this.checkWinner();	
	if (isWinner){
		this.currentPlayer.score +=1;
		this.winner = this.currentPlayer;
		this.setCurrentPlayer(this.winner); 
		this.finished = true;
		return move;
	}
	//check if the game has finished;
	this.finished = this.isGameFinished();
	
	//Switch players
	this.currentPlayer = this.currentPlayer == this.player1 ? this.player2 : this.player1;
	return move;
};

TicTacToe.prototype.checkWinner = function(){


	var row = 0, col = 0;
	//checks if there is a horizontal line of 3 of the same symbol
	 for (row=0; row<=2; row++){
	 		if (this.board[row][col] === this.board[row][col+ 1] && this.board[row][col] != 0){
	 			if (this.board[row][col+1] === this.board[row][col+ 2]){
	 				this.winningMoves = [[row,col],[row,col+1], [row,col+2]];
	 				if (this.board[row][col] == this.currentPlayer.symbol){
	 					return 10;
	 				}
	 				return -10;
        }
      }
  }
  //checks if there is a vertical line of 3 of the same symbol
  for (col=0, row=0; col<=2; col++){
  	if (this.board[row][col] === this.board[row+1][col] && this.board[row][col]!= 0){
  		if (this.board[row+1][col] === this.board[row+2][col]){
  			this.winningMoves= [[row,col],[row+1,col], [row+2,col]];
	 			if (this.board[row][col] == this.currentPlayer.symbol){
	 					return 10;
	 			}
	 			return -10;
	 		}
     }
   }

 	col=0, row=0;
 	//checks if there is a diagonal line of 3 of one's own symbol
  if (this.board[row][col] === this.board[row+1][col+1] && this.board[row][col]!= 0){
  	if (this.board[row+1][col+1] === this.board[row+2][col+2]){
  		this.winningMoves = [[row,col],[row+1,col+1],[row+2,col+2]];
	 		if (this.board[row][col] == this.currentPlayer.symbol){
	 			return 10;
	 		}
	 		return -10;
	 	}
   }
	
	col=0, row=0;
 	//checks if there is a diagonal line of 3 of one's own symbol
 	if (this.board[row+2][col] === this.board[row+1][col+1] && this.board[row+2][col]!=0){
 		if (this.board[row+1][col+1] == this.board[row][col+2]){
 			this.winningMoves= [[row+2,col],[row+1,col+1], [row,col+2]];
   		if (this.board[row+2][col] == this.currentPlayer.symbol){
	 			return 10;
	 		}
	 		return -10
   	}
  }
	return 0;
}

//returns false if  a value of 0 is found in the board
TicTacToe.prototype.isGameFinished = function(){
	for (var i=0; i<this.board.length; i++){
		var row = this.board[i];
		if (row.indexOf(0) != -1){
			return false;
		}
	}
	return true;
}

//returns an array that represents a cell in the board
TicTacToe.prototype.getBestMove = function(){
	var bestMove = {
		"row": -1,
		"col": -1,
		"val": -1000,
	};
	for (var row=0; row<3; row++){
		for (var col=0; col<3; col++){
			//check that cell is empty
			if (this.board[row][col] === 0){
				//make the move and call minimax
				this.board[row][col] = this.currentPlayer.symbol;
				
				var currentMoveVal = this.minimax(this.board, 0, false);
				//undo the move
				this.board[row][col] = 0;
				this.winningMoves = null;
				if (currentMoveVal > bestMove.val){
					bestMove.row = row;
					bestMove.col = col;
					bestMove.val = currentMoveVal;
				}
			}
		}
	}
	return bestMove;
}

TicTacToe.prototype.minimax = function(board, depth, isMaximizingPlayer){
	//if board is in terminal state, then return value of board
	var score = this.checkWinner();
	this.winningMoves = null;

	//If Maximizer or Minimizer has won the game return player's score
	if (score == 10){
		return score;
	}else if(score == -10){
		return score;
	}

	//If there are no more moves and no winner then it is a tie
	if (this.isGameFinished()){
		return 0;
	}

	//Maximizer's move
	if (isMaximizingPlayer){
		var bestVal = -Infinity;
		for (var row=0; row<3; row++){
			for (var col=0; col<3; col++){
				if (this.board[row][col] === 0){
					this.board[row][col] = this.currentPlayer.symbol;
					bestVal = Math.max(bestVal, this.minimax(board, depth+1, !isMaximizingPlayer));
					this.board[row][col] = 0;
					this.winningMoves = null;
				}
			}
		}
		return bestVal;
	//Minimizer's move
	}else{
		var bestVal = Infinity;
		for (var row=0; row<3; row++){
			for (var col=0; col<3; col++){
				if (this.board[row][col] === 0){
					this.board[row][col] = this.currentPlayer == this.player1 ? this.player2.symbol : this.player1.symbol;
					bestVal = Math.min(bestVal, this.minimax(board, depth+1, !isMaximizingPlayer));
					this.board[row][col] = 0;
					this.winningMoves = null;
				}
			}
		}
		return bestVal;
	}
}

//returns boolean reperesenting whether the cell in the board has been filled
TicTacToe.prototype.moveFilled = function(row,col){
	//if the cell is empty return false
	if (this.board[row][col] == 0){
		return false;
	}
	return true;
}

TicTacToe.prototype.reset = function(){
	//clear all properties
	this.player1 = {};
	this.player2 = {};
	this.currentPlayer = null;
	this.clearBoard();
}

TicTacToe.prototype.clearBoard = function(){
	this.finished = false;
	this.winner = null;
	this.winnerMove = null;
	this.board = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
	];
}

//model layer
var model = {
	game: {},
	setupGame: function(){
		this.game = new TicTacToe();
	}
};

//controller layer
var controller = {
	initializeGame: function(){
		model.setupGame();
	},
	setPlayers: function(name, symbol){
		model.game.setPlayers(name, symbol);
		//update showScores to two different functions. One to be setStats and the other to be updateStats.
		view.setScoreBoard(model.game.player1, model.game.player2);
		view.startGame();
		var timeoutID = setTimeout(function (){
			this.playGame();
		}.bind(this),1000);
	},
	playGame: function(move){
		if (!model.game.finished){
			//if the curent player is the computer, then disable the board and let computer take a turn
			if (model.game.currentPlayer.name.toLowerCase() == "computer"){
				view.disableBoard();
				view.showTurn(model.game.currentPlayer);
				var move = model.game.play(model.game.currentPlayer.name);
				var timeoutID = setTimeout(function (){
						//show the computer's move on the screen
						view.showMove(model.game.player2.symbol, move.row, move.col);
						this.playGame();
				}.bind(this),1000);

			}else{
				view.enableBoard();
				view.showTurn(model.game.currentPlayer);
			}
		}else{
			//Once the game is finished, disable board and display who won or if it was a tie. 
			view.disableBoard();
			this.showWinnerAndReplay();
		}
	},
	//shows winner and start new game round
	showWinnerAndReplay: function(){
		var timeoutID = setTimeout(function (){
			view.updateScores(model.game.player1.score, model.game.player2.score);
			view.showWinningMove(model.game.winningMoves);
			view.showWinner(model.game.winner);
			},1000);

		this.replayGame();
	},
	replayGame: function(){
		var timeoutID = setTimeout(function (){
			model.game.clearBoard();
			view.clearGameBoard();
			this.playGame();
			}.bind(this),3000);
	},	
	playerTurn: function(row, col){
		var move = model.game.play(model.game.currentPlayer.name, row, col);
		//if the play method doesn't return an empty move object, show the move
		if (Object.keys(move).length !== 0){
			//show the computer's move on the screen
			view.showMove(model.game.player1.symbol, move.row, move.col);
		}
		this.playGame();				
	},
	resetAll: function(){
		model.game.reset();
		view.disableBoard();
		view.resetAll();
	}
};

var view = {
	boardEnabled: false,
	btnEntry: {
		"box0": [0,0],
		"box1": [0,1],
		"box2": [0,2],
		"box3": [1,0],
		"box4": [1,1],
		"box5": [1,2],
		"box6": [2,0],
		"box7": [2,1],
		"box8": [2,2],
		},
		setUpEventListeners: function(){
		  var boxList = document.querySelector("ul");

		  boxList.addEventListener('click', function(event){
		    if (view.boardEnabled){
				  var boxClicked = event.target;
					controller.playerTurn(view.btnEntry[boxClicked.id][0], view.btnEntry[boxClicked.id][1]);
    		}
		});

		document.getElementById("X").addEventListener("click", function(){
				controller.setPlayers("player1", "X");
		 });
		document.getElementById("O").addEventListener("click", function(){
				controller.setPlayers("player1", "O");
		 });
		document.getElementById("reset").addEventListener("click", function(){
			controller.resetAll();
		});
	},
	enableBoard: function(){
		this.boardEnabled = true;
	},
	disableBoard: function(){
		this.boardEnabled = false;
	},
	showMove: function(playerSymbol,row, col){
		var boxID = "";

		for (prop in this.btnEntry){
			if (this.btnEntry[prop][0] ==  row && this.btnEntry[prop][1] == col){
				boxID = prop;
				break;
			}
		}
		var box = document.getElementById(boxID);
		var circleIcon = "fa-circle-o";
		var timesIcon = "fa-times";

		var fontIcon = (playerSymbol.toUpperCase() == "X") ? timesIcon : circleIcon;
		box.getElementsByTagName("i")[0].classList.add(fontIcon);
	},
	showBoardContainer: function(){
		$(".board-container").fadeIn(1200);
	},
	clearGameBoard: function(){
		$("li>i").removeClass('fa-circle-o fa-times text-shadow');
	},
	hideBoardContainer: function(){
		return $(".board-container").fadeOut(300);
	},
	setScoreBoard: function(player1, player2){
		var player1Color =  (player1.symbol.toUpperCase() == "X") ? "x-gradient-color" : "o-gradient-color";
		var player2Color = (player2.symbol.toUpperCase() == "X") ? "x-gradient-color" : "o-gradient-color";

	//document.getElementsByClassName("player1")[0].classList.add(player1Color);
		$('.player1').addClass(player1Color);
		$('.player2').addClass(player2Color);
			
		//document.getElementsByClassName("player1-name")[0].innerHTML = model.game.player1.name;
		$('.player1-name').html(model.game.player1.name);
		$('.player2-name').html(model.game.player2.name);
			
		$('.player1-score').html(model.game.player1.score);
		$('.player2-score').html(model.game.player2.score);
	},
	clearScoreBoard: function(){
		$('.player1').removeClass('x-gradient-color o-gradient-color');
		$('.player2').removeClass('x-gradient-color o-gradient-color');

		$('.player1-name').html("");
		$('.player2-name').html("");
		
		$('.player1-score').html("");
		$('.player2-score').html("");
	},
	updateScores: function(player1Score, player2Score){
		$('.player1-score').html(player1Score);
		$('.player2-score').html(player2Score);
	},
	hideSymbolOptions: function(){
		return $(".symbolOptions").fadeOut(200);
	},
	showSymbolOptions: function(){
		return $(".symbolOptions").fadeIn(1200);
	},
	startGame: function(){
		this.hideSymbolOptions().promise().done(function(){
    		this.showBoardContainer();
		}.bind(this));
	},
	showTurn: function(player){
		$('#whosTurn').html( player.name + "'s " + "turn");
		document.getElementById("whosTurn").style.display = "block";
		document.getElementById("whoWon").style.display = "none"		
	},
	hideTurn: function(){
		return $("#whosTurn").fadeOut(200);
	},
	clearStatuses: function(player){
		$('#whosTurn').html("");
		$('#whosWon').html("");
	},
	showWinningMove: function(winningMove){
		if (winningMove == null){
			$("li>i").addClass('text-shadow');
		}
		else{
			for (var i=0; i<winningMove.length;i++){
				for (prop in this.btnEntry){
				  if (this.btnEntry[prop][0] ==  winningMove[i][0] && this.btnEntry[prop][1] == winningMove[i][1]){
					  var box = document.getElementById(prop);
					  box.getElementsByTagName("i")[0].classList.add("text-shadow");
					  break;
					}
			  }
		  }
	  }
	},
	showWinner: function(winner){
		var message = ""
		if (winner == null){
				message = "It was a tie"
		}
		else if (winner.name == "player1"){
				message	= "You Won :)"
		}
		else if (winner.name == "computer"){
				message = "You lost this time -_-"
		}
		document.getElementById("whoWon").style.display = "block";
		document.getElementById("whoWon").innerHTML = message;
		document.getElementById("whosTurn").style.display = "none";
	},
	resetAll: function(){
		this.clearGameBoard();
		this.clearStatuses();
		this.clearScoreBoard();
		this.hideBoardContainer().promise().done(function(){
    		this.showSymbolOptions();
		}.bind(this));
	}
};

//initializes the game when this script is loaded
controller.initializeGame();
view.setUpEventListeners();