// make first player to choose symbol and lock it when the game starts (it will only happen before the first round. the the following round the symbol will be changed for the first player and will go on)
// print the point of the cross and circle wins and ties and rounds number
// make the event when the symbols will appear after clicking. we will use different functions for it.
// every cell will have a value and by clicking on the div, it will modify and array. by which we will evaluate the the results
// print the result. 
// there will be a restart button at the bottom that will reset everything


let firstPlayer = 0;

document.getElementById("player-select").innerText = "circle";
document.getElementById("player-select").style.color= "#ed6677";
document.getElementById("player-select").style.fontSize= "62px";
document.getElementById("player-select").style.fontWeight= "bold";


document.getElementById("player-select").addEventListener("click", function(){
    firstPlayer += 1;
    if(firstPlayer%2 === 0){
        document.getElementById("player-select").innerText = "circle";
        document.getElementById("player-select").style.color= "#ed6677";
        document.getElementById("player-select").style.fontSize= "62px";

    }else{
        document.getElementById("player-select").innerText = "close";
        document.getElementById("player-select").style.color= "#53bd9e";
        document.getElementById("player-select").style.fontSize= "72px";

    }
    console.log(firstPlayer);
})