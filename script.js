var img_dice = document.getElementById("img_dice");

var turn;

function Player(){
    this.total = 0;
    this.current = 0;
}

var player0 = new Player();
var player1 = new Player();
var current_player;

function init(){
    
    img_dice.style.display="none";
    setTurn(0);
}

function setTurn(t){
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

init();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll(){
    
    num = getRandomInt(1,6);
    console.log(num);
    setDiceImage(num);
    
    
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
        if(turn===0)
            setTurn(1)
        else if(turn===1)
            setTurn(0);
    }else{
        current_player.current += num;
    }
    updateUI();
}

function updateUI(){
    
    document.getElementById("p_cu_score_0").innerHTML=player0.current;
    document.getElementById("p_cu_score_1").innerHTML=player1.current;
    
}



document.getElementById("roll").onclick=roll;
