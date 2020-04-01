var bottom = document.querySelector('#bottom');
var guess = document.querySelector('#guess');
var timer = document.querySelector('#timer');
var score = document.querySelector('#score');

var timerValue = 60;
var currentscore = 0;

function getScoreWorking(){
    currentscore = currentscore + 10;
    score.textContent = currentscore;
}

function getANewGuessNumber(){
    var random = Math.floor(Math.random() * 10);
    guess.textContent = random;
}

function makeTimerWork(){
    setInterval(function(){
        if(timerValue > 0){
            --timerValue;
            timer.textContent = timerValue;
        }
        else{
            bottom.innerHTML = '<h1 class="center">Game Over</h1>';
        }
    }, 1000);    
}

function makeBubbles(){
    for(var i = 0; i<80; i++){
        var random = Math.floor(Math.random() * 10);
        bottom.innerHTML += `<div class="bubble">${random}</div>`;
    }
}


bottom.addEventListener('click', function(dets){
    var ispeclickhua = dets.target.textContent;
    if(ispeclickhua === guess.textContent){
        getScoreWorking();
        bottom.innerHTML = '';
        makeBubbles();
        getANewGuessNumber();
    }
    else{
        bottom.innerHTML = '';
        makeBubbles();
        getANewGuessNumber();
    }
});

makeBubbles();
getANewGuessNumber();
makeTimerWork();