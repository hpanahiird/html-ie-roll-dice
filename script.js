var img_dice = document.getElementById("img_dice");

function init(){
    
    img_dice.style.display="none";
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
    
    if(img_dice.style.display!=="block")
        img_dice.style.display="block";
    img_dice.src = "img/dice-"+num+".png";
}

document.getElementById("roll").onclick=roll;
