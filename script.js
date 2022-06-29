window.onload =function() {
    startstop();
}
    
let dice = document.getElementById("dice_btn");

let diceEmoji = ['&#9856;','&#9857;','&#9858;','&#9859;','&#9860;','&#9861;'];

var x;
var rolling =true;

function getRandomEmoji() {
    var random = Math.floor( Math.random() * diceEmoji.length );
    dice.innerHTML = diceEmoji[random];
}

function startstop() {
    if(rolling) {
    rolling = false;
    x = setInterval(getRandomEmoji,120);
}
else{
    clearInterval(x);
    rolling =true;
}
}