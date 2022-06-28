var start_btn = document.getElementById('btn-1');
var str_text = document.querySelector('#left-time');
start_btn.addEventListener('click', begin);

var time_1 = 5;
var time_2 = 5;
var sec_1 = 60;
var sec_2 = 60;
time_1 = time_1 - 1;
time_2 = time_2 - 1;
var player_1 = 0;

function begin() {
    players = setInterval(startGame, 1000);
    player_1 = 1;
}
function startGame() {
    start_btn.disabled = true; 
    if (time_1 >= 0) {
        sec_1--;
        str_text.innerHTML = time_1 + ':' + sec_1;
        if (sec_1 == 0) {
            time_1--;
            sec_1 = 60;
        }
    }
    else {
        clearInterval(players);
    }
}


var swap_btn = document.getElementById('btn');
swap_btn.addEventListener('click', swap);
var reset_1 = document.querySelector('#right-time');

var change;
function swap() {
    if (player_1 == 1) {
        clearInterval(players);
        change = setInterval(timeChange, 1000);
        player_1 = 0;
    }
    else {
        clearInterval(change);
        begin();
    }
}
function timeChange() {
    if (time_2 >= 0) {
        sec_2--;
        reset_1.innerHTML = time_2 + ':' + sec_2;
        if (sec_2 == 0) {
            time_2--;
            sec_2 = 60;
        }
    }
    else {
        clearInterval(change);
    }
}
var reset_btn = document.getElementById('btn-2');
reset_btn.addEventListener('click', gameEnd);
function gameEnd() {
    start_btn.disabled  = false;
    clearInterval(players);
    clearInterval(change);
    str_text.textContent = "05:00";
    reset_1.textContent = "05:00"
}



localStorage.setItem('channelName', 'Tamil Developer');
// local storage
//  store data in browser
// localStorage.setItem("price","5000");
// sessionStorage.setItem('name',Vimal');