var allboxes= document.querySelectorAll('.box');
var x=document.querySelector('#rgbspan');
var color=generalRandomColor(6);
var selectedColor=color[Math.floor(Math.random()*6)];
x.textContent=selectedColor;

var playButton=document.querySelector('#playagain');
var easyButton=document.querySelector('#easyButton');
var hardButton=document.querySelector('#hardButton');
var totalBox=6;
var statusTxt=document.querySelector('.status');
statusTxt.textContent="Let's play!!!";


easyButton.addEventListener('click',function(){
  document.querySelector('h1').style.background='#f88989';
  statusTxt.textContent="Let's play!!!";
  totalBox=3;
  this.style.background='#f88989';
  this.style.color='white';
  hardButton.style.background='white';
  hardButton.style.color='#f88989';
  color=generalRandomColor(totalBox);
  selectedColor=color[Math.floor(Math.random()*3)];
  x.textContent=selectedColor;

  for(var i=0;i<allboxes.length;i++){
    if(color[i]){
      allboxes[i].style.background=color[i];
    }else{
      allboxes[i].style.display='none';
    }
  }
});

hardButton.addEventListener('click',function(){
  document.querySelector('h1').style.background='#f88989';
  statusTxt.textContent="Let's play!!!";
  totalBox=6;
  this.style.background='#f88989';
  this.style.color='white';
  easyButton.style.background='white';
  easyButton.style.color='#f88989';
  color=generalRandomColor(totalBox);
  selectedColor=color[Math.floor(Math.random()*6)];
  x.textContent=selectedColor;

  for(var i=0;i<allboxes.length;i++){
    allboxes[i].style.background=color[i];
    allboxes[i].style.display='block';
    }

});

playButton.addEventListener('click',function(){
  document.querySelector('h1').style.background='#f88989';
  statusTxt.textContent="Let's Play!!!";
  color=generalRandomColor(totalBox);
  selectedColor=color[Math.floor(Math.random()*totalBox)];
  x.textContent=selectedColor;
  for(var i=0;i<allboxes.length;i++){
    allboxes[i].style.background=color[i];
  }
});

for(var i=0;i<color.length;i++){
  allboxes[i].style.background=color[i];
  allboxes[i].addEventListener('click',function(){
    var pickedcolor=this.style.background;
    if(pickedcolor===selectedColor){
      win();
    }else{
      loose(this);
    }
  });
}

function win(){
  for(var i=0;i<color.length;i++){
    allboxes[i].style.background=selectedColor;
  }
  document.querySelector('h1').style.background=selectedColor;
  statusTxt.textContent='Correct!!';
}

function loose(b){
  b.style.background='aquamarine';
  statusTxt.textContent='Try Again!';
}

function generalRandomColor(num){
  var arr=[];
  for(var i=0;i<num;i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return 'rgb('+ r +', '+ g +', '+ b +')';
  'rgb(r, g, b)'
}
