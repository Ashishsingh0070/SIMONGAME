
var gamePattern=[]
var buttonColours=["red", "blue", "green", "yellow"];
var userClickedPattern=[]

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        
        setTimeout(function () {
          nextSequence();
        }, 750);}} 
        
        
    else {
        wsound();
        wrong(); 
        change();
        startOver();
        console.log("wrong");}

}
function wrong( ){
    $("body").addClass("game-over")
    
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
}
function wsound(){
    var waud= new Audio("sounds/wrong.mp3")
    waud.play();
}

function change(){
    $("h1").text("Game Over, Press Any Key to Restart")

}




function nextSequence(){
    
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber =Math.random()*4;// random fnction 
    randomNumber= Math.floor(randomNumber);// same
    var randomChosenColour= buttonColours[randomNumber];// randomly any sound color from the array is picked
    //console.log(randomChosenColour)
    gamePattern.push(randomChosenColour);// moveed to an empty arrat
    console.log(gamePattern + "the game aptter")
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);//flicker animation
    //console.log("sounds/" + randomChosenColour + ".mp3
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}


function playSound(){
     $(".btn").click(
        function(event){
           // alert("button clicked")
            var userChosenColour=this.id
            userClickedPattern.push(userChosenColour)
            console.log(userClickedPattern+" user clicked")
            var currentLevel=(userClickedPattern.length-1)
            checkAnswer(currentLevel)
            switch(userChosenColour){
                case "green":
                    var aud1 = new Audio("sounds/green.mp3")
                    aud1.play();
                    break
                case "blue":
                    var aud2 = new Audio("sounds/blue.mp3")
                    aud2.play();
                    break
                case "red":
                    var aud3 = new Audio("sounds/red.mp3")
                    aud3.play();
                    break
                
                case "yellow":
                    var aud1 = new Audio("sounds/yellow.mp3")
                    aud1.play();
                    break}})}
playSound()




function animatePress(currentColour){

    
    $(".btn").click(function(event){
        var whatid=this.id
        $("#"+whatid).addClass("pressed")
        
        setTimeout(function() {
            $("#"+whatid).removeClass("pressed");
        }, 100);
    })

}animatePress()

function startOver(){
    level=0;
    started=false;
    gamePattern=[];
    userClickedPattern=[];
};




var started=false
var level=0

$(document).keydown(function (e) {
    //console.log(e)
    if (started===false){
        $("h1").html("level "+ level)
        nextSequence();
        started= true

    }});


 
