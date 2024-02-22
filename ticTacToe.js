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
let playerOne;
let playerTwo;



if (firstPlayerCode % 2 === 0) {
    document.getElementById("player-select").innerText = "circle";
    document.getElementById("player-select").style.color = "#ed6677";
    document.getElementById("player-select").style.fontSize = "62px";
    firstPlayer = `
            <span class="material-symbols-outlined font-size-transition text-[#ed6677]">
                circle
            </span>`;
    firstPlayerTextSize = 'text-[28vw]';
    firstPlayerTextSizeMd = 'md:text-[18dvh]';
    playerOne = "circle";

    secondPlayer = `
            <span class="material-symbols-outlined font-size-transition text-[#53bd9e]">
                close
            </span>`;
    secondPlayerTextSize = 'text-[40vw]';
    secondPlayerTextSizeMd = 'md:text-[25dvh]';
    playerTwo = "close";





} else {
    document.getElementById("player-select").innerText = "close";
    document.getElementById("player-select").style.color = "#53bd9e";
    document.getElementById("player-select").style.fontSize = "72px";
    firstPlayerPlayer = `
            <span class="material-symbols-outlined font-size-transition text-[#53bd9e]">
                close
            </span>`;
    firstPlayerTextSize = 'text-[40vw]';
    firstPlayerTextSizeMd = 'md:text-[25dvh]';
    playerOne = "close";

    secondPlayer = `
            <span class="material-symbols-outlined font-size-transition text-[#ed6677]">
                circle
            </span>`;
    secondPlayerTextSize = 'text-[28vw]';
    secondPlayerTextSizeMd = 'md:text-[18dvh]';
    playerTwo = "circle";

}



document.getElementById("player-select").addEventListener("click", function chooseSymbol() {
    if (firstPlayerLock) {
        document.getElementById("player-select").removeEventListener("click", chooseSymbol)
    } else {
        firstPlayerCode++;
        console.log(firstPlayerCode)
        if (firstPlayerCode % 2 === 0) {
            document.getElementById("player-select").innerText = "circle";
            document.getElementById("player-select").style.color = "#ed6677";
            document.getElementById("player-select").style.fontSize = "62px";
            firstPlayer = `
            <span class="material-symbols-outlined font-size-transition text-[#ed6677]">
                circle
            </span>`;
            firstPlayerTextSize = 'text-[28vw]';
            firstPlayerTextSizeMd = 'md:text-[19dvh]';
            playerOne = "circle";

            secondPlayer = `
            <span class="material-symbols-outlined font-size-transition text-[#53bd9e]">
                close
            </span>`;
            secondPlayerTextSize = 'text-[40vw]';
            secondPlayerTextSizeMd = 'md:text-[25dvh]';
            playerTwo = "close";

        } else {
            document.getElementById("player-select").innerText = "close";
            document.getElementById("player-select").style.color = "#53bd9e";
            document.getElementById("player-select").style.fontSize = "72px";
            firstPlayer = `
            <span class="material-symbols-outlined font-size-transition text-[#53bd9e]">
                close
            </span>`;
            firstPlayerTextSize = 'text-[40vw]';
            firstPlayerTextSizeMd = 'md:text-[25dvh]';
            playerOne = "close";

            secondPlayer = `
            <span class="material-symbols-outlined font-size-transition text-[#ed6677]">
                circle
            </span>`;
            secondPlayerTextSize = 'text-[28vw]';
            secondPlayerTextSizeMd = 'md:text-[19dvh]';
            playerTwo = "circle";

        }
    }
})



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
                    cell.innerHTML = firstPlayer;
                    cell.firstElementChild.classList.add(firstPlayerTextSize, firstPlayerTextSizeMd);
                    document.getElementById("player-select").innerText = playerOne;

                    if(playerOne === "circle"){
                        document.getElementById("player-select").style.color = "#ed6677";
                    }else{
                        document.getElementById("player-select").style.color = "#53bd9e";
                    }

                } else {
                    cell.innerHTML = secondPlayer;
                    cell.firstElementChild.classList.add(secondPlayerTextSize, secondPlayerTextSizeMd);
                    document.getElementById("player-select").innerText = playerTwo;

                    if(playerTwo === "circle"){
                        document.getElementById("player-select").style.color = "#ed6677";
                    }else{
                        document.getElementById("player-select").style.color = "#53bd9e";
                    }

                }

                // console.log(cells.indexOf(cell) + 1);
                clickedCells[cells.indexOf(cell)] = cell.firstElementChild.innerText;
                // console.log(clickedCells);
                // console.log(firstPlayerColor);
                console.log(firstPlayerCode);
                i++;
            }
        }
    });
}