
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll(){
    
    num = getRandomInt(1,6);
    console.log(num);
    img_dice.src = "img/dice-"+num+".png";
}

document.getElementById("roll").onclick=roll;
