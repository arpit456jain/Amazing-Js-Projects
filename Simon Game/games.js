var buttonColours = ["red","blue","green","yellow"]; 
var gamePattern = [];
var userClickedPattern = [];



$(".btn").on("click",function(){
    var userChoosenColour = $(this).attr("id");
    userClickedPattern.push(userChoosenColour);
    playSound(userChoosenColour);
    animatePress(userChoosenColour);
    checkAnswer(userClickedPattern.length-1);
})

var toggle = 1;
var level = 0;
$(document).on("keypress",function(){
    if(toggle == 1)
    {
        $("#level-title").text("Level" + level)
        nextSequence();
        toggle = 0;
    }
    
})

function nextSequence(){
    userClickedPattern = [];
    level += 1;
    $("#level-title").text("Level" + " " + level)
    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    
    $("#" + randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColour);
    
     
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    },100);
}

function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
        console.log("success");
        if(userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else
    {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $('body').addClass("game-over");
        setTimeout(function(){
            $('body').removeClass("game-over")
        },200)
        $('h1').text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver()
{
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    toggle=1;
    $(document).on("keypress",function(){
        if(toggle == 1)
        {
            $("#level-title").text("Level" + level)
            nextSequence();
            toggle = 0;
        }
        
    })
    

}