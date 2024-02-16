// make first player to choose symbol and lock it when the game starts (it will only happen before the first round. the the following round the symbol will be changed for the first player and will go on)
// print the point of the cross and circle wins and ties and rounds number
// make the event when the symbols will appear after clicking. we will use different functions for it.
// every cell will have a value and by clicking on the div, it will modify and array. by which we will evaluate the the results
// print the result. 
// there will be a restart button at the bottom that will reset everything


let firstPlayer = 0;
let firstPlayerLock;
const cells = Array.from(document.getElementsByClassName('cells'));
const clickedCells = [];

document.getElementById("player-select").innerText = "circle";
document.getElementById("player-select").style.color = "#ed6677";
document.getElementById("player-select").style.fontSize = "62px";


let i = 1;

for (const cell of cells) {
    cell.addEventListener('click', function cellChange() {
        if (i === 10) {
            cell.removeEventListener("click", cellChange)
        } else {
            if (!clickedCells.includes(cells.indexOf(cell))) {
                firstPlayerLock = i;
                // console.log(firstPlayerLock);
                console.log(cells.indexOf(cell));
                clickedCells.push(cells.indexOf(cell));
                i++;
            }
        }
    });
}



document.getElementById("player-select").addEventListener("click", function chooseSymbol() {
    if (firstPlayerLock) {
        document.getElementById("player-select").removeEventListener("click", chooseSymbol)
    } else {
        firstPlayer += 1;
        if (firstPlayer % 2 === 0) {
            document.getElementById("player-select").innerText = "circle";
            document.getElementById("player-select").style.color = "#ed6677";
            document.getElementById("player-select").style.fontSize = "62px";

        } else {
            document.getElementById("player-select").innerText = "close";
            document.getElementById("player-select").style.color = "#53bd9e";
            document.getElementById("player-select").style.fontSize = "72px";

        }
        console.log(firstPlayer);
    }
})
