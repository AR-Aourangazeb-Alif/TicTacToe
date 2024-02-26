if(document.getElementById("player-select").innerText === 'circle'){
    document.getElementById("player-select").style.fontSize = "5vw";
    document.getElementById("player-select").style.color = "#ed6677";
}

let clickCount = 0;
function playerSelect(){
    clickCount++;

    if(clickCount%2 !== 0){
        document.getElementById("player-select").innerText = `close`;
    }else{
        document.getElementById("player-select").innerText = `circle`;
    }

    if(document.getElementById("player-select").innerText === 'circle'){
        document.getElementById("player-select").style.fontSize = "5vw";
        document.getElementById("player-select").style.color = "#ed6677";
    }else{
        document.getElementById("player-select").style.fontSize = "6vw";
        document.getElementById("player-select").style.color = "#53bd9e";
    }

}


console.log(document.getElementsByClassName('cells'));