var playerOneTime = 5; // Time in Minutes here
var playerTwoTime = 5;
var chessTimer; // Timer
var isPlayerOne = true ; // Initially player one timer starts

var start_btn = document.getElementById('btn-1');
start_btn.addEventListener('click',startPlaying);

var swap_btn = document .getElementById('btn');
swap_btn.addEventListener('click',swapTimer);

var str_btn = document.querySelector('#left-time');
var reset_1 = document . querySelector('#right-time');

function startPlaying(){
    playerOneTime = 5 * 60;
    playerTwoTime = 5 * 60;
    chessTimer = setInterval(timerFunctionCalled, 1000) // 1000 ms = 1 sec
}

function timerFunctionCalled(){
    if(isPlayerOne){
        console.log("Player One time" + calculateTime(playerOneTime));
        playerOneTime --;
    }
    else{
        console.log("Player two time" + calculateTime(playerTwoTime));
        playerTwoTime--;
    }
}

function calculateTime(timeInSecs){
    var minutes = timeInSecs / 60;
    var sec = timeInSecs % 60;
    var time = Math.floor(minutes) +" : " + sec;
    return(time);
}

function swapTimer(){
    isPlayerOne = !isPlayerOne;
}