var playing = false;
var trialsLeft, 
step, 
action,
score;
var fruits = ['apple', 'grapes', 'mango', 'guava','heart','grapes','mango','guava','heart'];
$(function () {
   //click on the reset button

$('#startreset').click(function () {
   //we are playing
    if (playing == true) {
        //reload page
        location.reload();
   }
    else {
        //we are playing
        playing = true;  //game initiated
        score = 0; //set score to zero
        $('#scorevalue').html(score);
        //show trials left
        $('#trialsLeft').show();
        trialsLeft = 3;
        addHearts();
        // hide game over box
        $('#gameOver').hide();
        //change button text to reset game
        $('#startreset').html('Reset Game');
        //start sending fruits
        startAction();
    }
});
//slice a fruit

$('#fruit1').mouseover(function () {
    score++;
    $('#scorevalue').html(score); //update score 
    //document.getElementById('#slicesound').play();
    $('#slicesound')[0].play();
    //stop fruit
    clearInterval(action);
    //hide fruit
    $('#fruit1').hide('explode', 500);
    //send new fruit 
    setTimeout(startAction, 500);
  });
    //functions
    //fill trialLeft box with hearts
function addHearts() {
    $('#trialsLeft').empty();
    for (var i = 0; i < trialsLeft; i++) {
        $('#trialsLeft').append('<img src="Images/heart.png" class="life">');
    }
}
//start sending fruits
function startAction () {
    $('#fruit1').show();
    chooseFruit();
    $('#fruit1').css({'left': Math.round(550 * Math.random()), 'top' : -50});
    //generate of random step
    step = 1 + Math.round(5 * Math.random());
    //move fruit down
    action = setInterval(function () {
        $('#fruit1').css('top', $('#fruit1').position().top + step);
        //check if the fruit is too low
        if ($('#fruit1').position().top > $('#fruitsContainer').height()) {
           //chec if we have trials left 
            if (trialsLeft > 1) {
                $('#fruit').show();
                chooseFruit();
                $('#fruit1').css({'left' : Math.round(550 * Math.random()), 'top' : -50});
                //generate a random step 
                step = 1 + Math.round(5* Math.round());
                //reduce trials by one 
                trialsLeft--;
                //populate trialsLeft box
                addHearts();
            }
            else{ //game over
                playing = false;
                $("#startreset").html("Start Game");
                //change button to start game
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your Score is:' + score + '</p>');
                $("#trialsLeft").hide();
                stopAction();
           }
        }
    }, 10);
}
function chooseFruit() {
    $("#fruit1").attr('src', 'Images/' + fruits[Math.round(8 * Math.random())] + '.png');
}
//stop dropping fruits
    
function stopAction() {
    clearInterval(action);
    $("#fruit1").hide();
}
});