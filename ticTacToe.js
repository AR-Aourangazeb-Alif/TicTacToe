// make first player to choose symbol and lock it when the game starts (it will only happen before the first round. the the following round the symbol will be changed for the first player and will go on)
// print the point of the cross and circle wins and ties and rounds number
// make the event when the symbols will appear after clicking. we will use different functions for it.
// every cell will have a value and by clicking on the div, it will modify and array. by which we will evaluate the the results
// print the result. 
// there will be a restart button at the bottom that will reset everything

// to reset
let firstPlayerCode = 0;
// to reset
let firstPlayerLock;
const cells = Array.from(document.getElementsByClassName('cells'));
const clickedCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let firstPlayer;
let secondPlayer;
let firstPlayerTextSize;
let firstPlayerTextSizeMd;
let secondPlayerTextSize;
let secondPlayerTextSizeMd;
let firstPlayerColor;
let secondPlayerColor;


if (firstPlayerCode % 2 === 0) {
    document.getElementById("player-select").innerText = "circle";
    document.getElementById("player-select").style.color = "#ed6677";
    document.getElementById("player-select").style.fontSize = "62px";
    firstPlayer = "circle";
    firstPlayerTextSize = 'text-[28vw]';
    firstPlayerTextSizeMd = 'md:text-[18dvh]';
    firstPlayerColor = "text-[#ed6677]";

    secondPlayer = "close"
    secondPlayerTextSize = 'text-[40vw]';
    secondPlayerTextSizeMd = 'md:text-[25dvh]';
    secondPlayerColor = "text-[#53bd9e]";

} else {
    document.getElementById("player-select").innerText = "close";
    document.getElementById("player-select").style.color = "#53bd9e";
    document.getElementById("player-select").style.fontSize = "72px";
    firstPlayer = "close";
    firstPlayerTextSize = 'text-[40vw]';
    firstPlayerTextSizeMd = 'md:text-[25dvh]';
    firstPlayerColor = "text-[#53bd9e]";

    secondPlayer = "circle";
    secondPlayerTextSize = 'text-[28vw]';
    secondPlayerTextSizeMd = 'md:text-[18dvh]';
    firstPlayerColor = "text-{[#ed6677]}";

}

// to reset
let i = 1;

for (const cell of cells) {
    cell.addEventListener('click', function cellChange() {
        if (i === 10) {
            cell.removeEventListener("click", cellChange);
        } else {
            if (clickedCells.includes(cells.indexOf(cell) + 1)) {
                firstPlayerLock = i;
                if (i % 2 !== 0) {
                    cell.firstElementChild.innerHTML = firstPlayer;
                    cell.firstElementChild.classList.add(firstPlayerTextSize, firstPlayerTextSizeMd, firstPlayerColor);
                } else {
                    cell.firstElementChild.innerHTML = secondPlayer;
                    cell.firstElementChild.classList.add(secondPlayerTextSize, secondPlayerTextSizeMd, secondPlayerColor);
                }
                console.log(cells.indexOf(cell) + 1);
                clickedCells[cells.indexOf(cell)] = cell.firstElementChild.innerText;
                console.log(clickedCells);
                i++;
            }
        }
    });
}



document.getElementById("player-select").addEventListener("click", function chooseSymbol() {
    if (firstPlayerLock) {
        document.getElementById("player-select").removeEventListener("click", chooseSymbol)
    } else {
        firstPlayerCode += 1;
        if (firstPlayerCode % 2 === 0) {
            document.getElementById("player-select").innerText = "circle";
            document.getElementById("player-select").style.color = "text-{[#ed6677]}";
            document.getElementById("player-select").style.fontSize = "62px";
            firstPlayer = "circle";
            firstPlayerTextSize = 'text-[28vw]';
            firstPlayerTextSizeMd = 'md:text-[18dvh]';
            firstPlayerColor = "text-{[#ed6677]}";

            secondPlayer = "close"
            secondPlayerTextSize = 'text-[40vw]';
            secondPlayerTextSizeMd = 'md:text-[25dvh]';
            secondPlayerColor = "text-[#53bd9e]";

        } else {
            document.getElementById("player-select").innerText = "close";
            document.getElementById("player-select").style.color = "text-[#53bd9e]";
            document.getElementById("player-select").style.fontSize = "72px";
            firstPlayer = "close";
            firstPlayerTextSize = 'text-[40vw]';
            firstPlayerTextSizeMd = 'md:text-[25dvh]';
            firstPlayerColor = "text-[#53bd9e]";

            secondPlayer = "circle";
            secondPlayerTextSize = 'text-[28vw]';
            secondPlayerTextSizeMd = 'md:text-[18dvh]';
            firstPlayerColor = "text-{[#ed6677]}";

        }
        console.log(firstPlayerCode);
    }
})
