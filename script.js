var img_dice = document.getElementById("img_dice");

var turn;
var game_ended = false;

function Player(){
    this.total = 0;
    this.current = 0;
}

var player0;
var player1;
var current_player;

function init(){
    player0 = new Player();
    player1 = new Player();
    img_dice.style.display="none";
    turn = 0;
    current_player = player0;
    document.getElementById("player1").style.backgroundColor="#607d8bf2"
    document.getElementById("player0").style.backgroundColor="#90a4aef2"
    game_ended = false;
}

function changeTurn(){
    if(turn===0)
            t=1
        else if(turn===1)
            t=0;
    turn=t;
    if(t===0){
        current_player = player0;
        document.getElementById("player1").style.backgroundColor="#607d8bf2"
        document.getElementById("player0").style.backgroundColor="#90a4aef2"
    }else{
        current_player = player1;
        document.getElementById("player0").style.backgroundColor="#607d8bf2"
        document.getElementById("player1").style.backgroundColor="#90a4aef2"
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll(){
    if(!game_ended){
        num = getRandomInt(1,6);
        console.log(num);
        setDiceImage(num);
    }
    
    
}

function setDiceImage(num){
    if(img_dice.style.display!=="block")
        img_dice.style.display="block";
    img_dice.src = "img/dice-"+num+".png";
    addCurrentScore(num);
}

function addCurrentScore(num){
    if(num===1){
        current_player.current=0;
        changeTurn();
    }else{
        current_player.current += num;
    }
    updateUI();
}

function hold(){
    if(!game_ended){
        current_player.total += current_player.current;
        current_player.current = 0;
        checkWinContition();
        if(!game_ended)
            changeTurn();
        updateUI();
    }
}

function checkWinContition(){
    if(current_player.total>=50){
        game_ended = true;
        document.getElementById("p_name_"+turn).innerHTML="WINNER !"
    }
}

function updateUI(){
    
    document.getElementById("p_cu_score_0").innerHTML=player0.current;
    document.getElementById("p_cu_score_1").innerHTML=player1.current;
    document.getElementById("p_score_0").innerHTML=player0.total;
    document.getElementById("p_score_1").innerHTML=player1.total;
    
}

function newGame(){
    if(game_ended)
        init();
    else{
        if(confirm("Do you really want to play a new game?")){
            init();
        }
        else{
            
        }
    }
    updateUI();
}

init();
document.getElementById("hold").onclick=hold;
document.getElementById("roll").onclick=roll;
document.getElementById("new_game").onclick=newGame;