var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;

var q = 0;


window.onload = function() {

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      //<img>
      let tile = document.createElement("img");
      tile.src = "./images/blank.jpg";
      q++;

      //DRAG FUNCTIONALITY
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      document.getElementById("board").append(tile);


    }
  }

  //pieces


  let pieces = [];
  for (let i = 1; i <= rows * columns; i++) {
    pieces.push(i.toString());


  }
  pieces.reverse();
  for (let i = 0; i < pieces.length; i++) {
    let j = Math.floor(Math.random() * pieces.length);

    //swap
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./images/" + pieces[i] + ".jpeg";

    //DRAG FUNCTIONALITY
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);

    document.getElementById("pieces").append(tile);
  }
}

function isWin() {
  var t = -1;
  q = 0;
  for (let i = 1; i <= rows * columns; i++) {
    if (document.getElementById("board").children[i - 1].src.match("/images/" + i + ".jpeg")) {
      q++;


    }


  }
  if (q === 25) {
    t = 1;
  } else {
    t = 0;
  }

  return t;

}


//DRAG TILES
function dragStart() {
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
  otherTile = this;
}
var closePopupBtn = document.querySelector(".popup-close");
var popUp = document.querySelector(".popup");
var overlayy = document.querySelector(".popup-overlay");
closePopupBtn.addEventListener("click", function() {
  overlayy.style.display = "none";
  popUp.style.top = "-150%";
});

function dragEnd() {
  if (currTile.src.includes("blank")) {
    return;
  }
  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;


  turns += 1;
  document.getElementById("turns").innerText = turns;


  if (isWin()) {
    popUp.style.top = "50%";
    overlayy.style.display = "block";
    console.log("You won");
  }

}
var q = 0;
