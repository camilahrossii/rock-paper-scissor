
    var elements = document.querySelectorAll('.player-options div > img');
    var playerOpt = "";
    var inimigoOpt = "";

    function validateVictory(){

        let winner = document.querySelector('.winner');
         
        if(playerOpt == "rock"){

        if(adversaryOpt == "paper"){
            winner.innerHTML = "Adversary won!";

        }else if(adversaryOpt == "scissor"){
            winner.innerHTML = "You won!"

        }else if(adversaryOpt == "rock"){
            winner.innerHTML = "Draw!"
        }
     }
     
    if(playerOpt == "paper"){
        if(adversaryOpt == "paper"){
            winner.innerHTML = "Draw!";
        }else if(adversaryOpt == "scissor"){
            winner.innerHTML = "Adversary won!"
        }else if(adversaryOpt == "rock"){
            winner.innerHTML = "You won!"
        }
     }

     if(playerOpt == "scissor"){
        if(adversaryOpt == "paper"){
            winner.innerHTML = "You won!";
        }else if(adversaryOpt == "scissor"){
            winner.innerHTML = "Draw!"
        }else if(adversaryOpt == "rock"){
            winner.innerHTML = "Adversary won!"
        }
     }
}

function resetAdversary(){
    const adversaryOptions = document.querySelectorAll('.adversary-options div');
    for(var i = 0; i < adversaryOptions.length; i++){
        adversaryOptions[i].childNodes[0].style.opacity = 0.3;
    }

}

function adversaryPlay(){
    let rand = Math.floor(Math.random()*3);

    const adversaryOptions = document.querySelectorAll('.adversary-options div');

    resetAdversary();

    for(var i = 0; i < adversaryOptions.length; i++){
        if(i == rand){
            adversaryOptions[i].childNodes[0].style.opacity = 1;
            adversaryOpt = adversaryOptions[i].childNodes[0].getAttribute('opt');
        }
    }


    validateVictory();

}

function resetOpacityPlayer(){
    for(var i = 0; i < elements.length; i++){
        elements[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        adversaryPlay()
    })
}