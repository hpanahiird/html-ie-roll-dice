var img_dice1 = document.getElementById("img_dice_1");
var img_dice2 = document.getElementById("img_dice_2");

var turn;
var game_ended = true;
var win_score;


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
    img_dice1.style.display="none";
    img_dice2.style.display="none";
    turn = 0;
    current_player = player0;
    document.getElementById("player1").style.backgroundColor="#607d8bf2"
    document.getElementById("player0").style.backgroundColor="#90a4aef2"
    
    win_score = parseInt(document.getElementById("win_score").value,10);
    if(win_score>0){
        
    }else{
        win_score = 100;
    }
    
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
        num1 = getRandomInt(1,6);
        num2 = getRandomInt(1,6);
//        console.log(num);
        setDiceImage(num1, num2);
    }
    
    
}

function setDiceImage(num1 , num2){
    if(img_dice1.style.display!=="block")
        img_dice1.style.display="block";
    if(img_dice2.style.display!=="block")
        img_dice2.style.display="block";
    img_dice1.src = "img/dice-"+num1+".png";
    img_dice2.src = "img/dice-"+num2+".png";
    addCurrentScore(num1, num2);
}

function addCurrentScore(num1, num2){
    if(num1===1 || num2 ===1){
        current_player.current=0;
        changeTurn();
    }else{
        current_player.current += num1+num2;
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
    if(current_player.total>=win_score){
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

img_dice1.style.display="none";
img_dice2.style.display="none";
document.getElementById("hold").onclick=hold;
document.getElementById("roll").onclick=roll;
document.getElementById("new_game").onclick=newGame;