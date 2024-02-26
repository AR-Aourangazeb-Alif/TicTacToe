let firstPlayer;
let secondPlayer;
let playCount = document.getElementsByClassName('cells').length;

let cellOne = document.getElementById("cell-1").innerText;
let cellTwo = document.getElementById("cell-2").innerText;
let cellThree = document.getElementById("cell-3").innerText;
let cellFour = document.getElementById("cell-4").innerText;
let cellFive = document.getElementById("cell-5").innerText;
let cellSix = document.getElementById("cell-6").innerText;
let cellSeven = document.getElementById("cell-7").innerText;
let cellEight = document.getElementById("cell-8").innerText;
let cellNine = document.getElementById("cell-9").innerText;


let result;

if (document.getElementById("player-select").innerText === 'circle') {
    document.getElementById("player-select").style.fontSize = "5vw";
    document.getElementById("player-select").style.color = "#ed6677";
    firstPlayer = 'circle';
    secondPlayer = 'close';
}

let clickCount = 0;
function playerSelect() {
    if (playCount === 9) {
        clickCount++;

        if (clickCount % 2 !== 0) {
            document.getElementById("player-select").innerText = `close`;
        } else {
            document.getElementById("player-select").innerText = `circle`;
        }

        if (document.getElementById("player-select").innerText === 'circle') {
            document.getElementById("player-select").style.fontSize = "5vw";
            document.getElementById("player-select").style.color = "#ed6677";

            firstPlayer = 'circle';
            secondPlayer = 'close';
        } else {
            document.getElementById("player-select").style.fontSize = "6vw";
            document.getElementById("player-select").style.color = "#53bd9e";

            firstPlayer = 'close';
            secondPlayer = 'circle';
        }
    }

}



const cells = document.getElementsByClassName('cells');

for (let i of cells) {
    i.addEventListener('click', function () {
        if (i.firstElementChild.innerText !== 'circle' && i.firstElementChild.innerText !== 'close' && playCount > 0 && !result) {
            playCount--;

            if (playCount % 2 === 0) {
                i.firstElementChild.innerText = firstPlayer;
                document.getElementById("player-select").innerText = secondPlayer;

                if (i.firstElementChild.innerText === 'circle') {
                    i.firstElementChild.style.fontSize = "100px";
                    i.firstElementChild.style.color = "#ed6677";

                    document.getElementById("player-select").style.fontSize = "6vw";
                    document.getElementById("player-select").style.color = "#53bd9e";

                } else {
                    i.firstElementChild.style.fontSize = "120px";
                    i.firstElementChild.style.color = "#53bd9e";

                    document.getElementById("player-select").style.fontSize = "5vw";
                    document.getElementById("player-select").style.color = "#ed6677";
                }

                cellOne = document.getElementById("cell-1").innerText;
                cellTwo = document.getElementById("cell-2").innerText;
                cellThree = document.getElementById("cell-3").innerText;
                cellFour = document.getElementById("cell-4").innerText;
                cellFive = document.getElementById("cell-5").innerText;
                cellSix = document.getElementById("cell-6").innerText;
                cellSeven = document.getElementById("cell-7").innerText;
                cellEight = document.getElementById("cell-8").innerText;
                cellNine = document.getElementById("cell-9").innerText;

                result = checkResult();
                console.log(result);

            } else {
                i.firstElementChild.innerText = secondPlayer;
                document.getElementById("player-select").innerText = firstPlayer;

                if (i.firstElementChild.innerText === 'circle') {
                    i.firstElementChild.style.fontSize = "100px";
                    i.firstElementChild.style.color = "#ed6677";

                    document.getElementById("player-select").style.fontSize = "6vw";
                    document.getElementById("player-select").style.color = "#53bd9e";
                } else {
                    i.firstElementChild.style.fontSize = "120px";
                    i.firstElementChild.style.color = "#53bd9e";

                    document.getElementById("player-select").style.fontSize = "5vw";
                    document.getElementById("player-select").style.color = "#ed6677";
                }

                cellOne = document.getElementById("cell-1").innerText;
                cellTwo = document.getElementById("cell-2").innerText;
                cellThree = document.getElementById("cell-3").innerText;
                cellFour = document.getElementById("cell-4").innerText;
                cellFive = document.getElementById("cell-5").innerText;
                cellSix = document.getElementById("cell-6").innerText;
                cellSeven = document.getElementById("cell-7").innerText;
                cellEight = document.getElementById("cell-8").innerText;
                cellNine = document.getElementById("cell-9").innerText;

                result = checkResult();
                console.log(result);
            }

        }
    })
}

