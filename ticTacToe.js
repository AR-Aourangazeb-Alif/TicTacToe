let firstPlayer;
let secondPlayer;
let playCount = document.getElementsByClassName('cells').length;
let width;

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
    document.getElementById("player-select").style.color = "#ed6677";
    width = window.innerWidth;
    if (width >= 1024) {
        document.getElementById("player-select").style.fontSize = "5vw";
    } else if (width >= 768) {
        document.getElementById("player-select").style.fontSize = "7vw";
    } else if (width >= 640) {
        document.getElementById("player-select").style.fontSize = "9vw";
    } else if (width >= 540) {
        document.getElementById("player-select").style.fontSize = "11vw";
    } else if (width >= 440) {
        document.getElementById("player-select").style.fontSize = "13vw";
    } else if (width < 440) {
        document.getElementById("player-select").style.fontSize = "15vw";
    }


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
            document.getElementById("player-select").style.color = "#ed6677";

            width = window.innerWidth;
            if (width >= 1024) {
                document.getElementById("player-select").style.fontSize = "5vw";
            } else if (width >= 768) {
                document.getElementById("player-select").style.fontSize = "7vw";
            } else if (width >= 640) {
                document.getElementById("player-select").style.fontSize = "9vw";
            } else if (width >= 540) {
                document.getElementById("player-select").style.fontSize = "11vw";
            } else if (width >= 440) {
                document.getElementById("player-select").style.fontSize = "13vw";
            } else if (width < 440) {
                document.getElementById("player-select").style.fontSize = "15vw";
            }

            firstPlayer = 'circle';
            secondPlayer = 'close';
        } else {
            document.getElementById("player-select").style.fontSize = "6vw";
            document.getElementById("player-select").style.color = "#53bd9e";

            width = window.innerWidth;
            if (width >= 1024) {
                document.getElementById("player-select").style.fontSize = "6vw";
            } else if (width >= 768) {
                document.getElementById("player-select").style.fontSize = "8vw";
            } else if (width >= 640) {
                document.getElementById("player-select").style.fontSize = "10vw";
            } else if (width >= 540) {
                document.getElementById("player-select").style.fontSize = "13vw";
            } else if (width >= 440) {
                document.getElementById("player-select").style.fontSize = "15vw";
            } else if (width < 440) {
                document.getElementById("player-select").style.fontSize = "17vw";
            }

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

                    width = window.innerWidth;
                    if (width >= 1024) {
                        document.getElementById("player-select").style.fontSize = "5vw";
                    } else if (width >= 768) {
                        document.getElementById("player-select").style.fontSize = "7vw";
                    } else if (width >= 640) {
                        document.getElementById("player-select").style.fontSize = "9vw";
                    } else if (width >= 540) {
                        document.getElementById("player-select").style.fontSize = "11vw";
                    } else if (width >= 440) {
                        document.getElementById("player-select").style.fontSize = "13vw";
                    } else if (width < 440) {
                        document.getElementById("player-select").style.fontSize = "15vw";
                    }

                } else {
                    i.firstElementChild.style.fontSize = "120px";
                    i.firstElementChild.style.color = "#53bd9e";

                    document.getElementById("player-select").style.fontSize = "5vw";
                    document.getElementById("player-select").style.color = "#ed6677";

                    width = window.innerWidth;
                    if (width >= 1024) {
                        document.getElementById("player-select").style.fontSize = "6vw";
                    } else if (width >= 768) {
                        document.getElementById("player-select").style.fontSize = "8vw";
                    } else if (width >= 640) {
                        document.getElementById("player-select").style.fontSize = "10vw";
                    } else if (width >= 540) {
                        document.getElementById("player-select").style.fontSize = "13vw";
                    } else if (width >= 440) {
                        document.getElementById("player-select").style.fontSize = "15vw";
                    } else if (width < 440) {
                        document.getElementById("player-select").style.fontSize = "17vw";
                    }
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

                if (result === "PLAYER X WIN") {
                    document.getElementById("result-container").style.display = "flex";
                    document.getElementById("result").innerText = 'close';
                    document.getElementById("result").style.fontSize = '38px';
                    document.getElementById("result").style.color = '#53bd9e';
                    document.getElementById("player-select-container").style.display = "none";
                    document.getElementById("reload-down").style.display = "none";
                    document.getElementById("reload-up").style.display = "inline";
                } else if (result === "PLAYER O WIN") {
                    document.getElementById("result-container").style.display = "flex";
                    document.getElementById("result").innerText = 'circle';
                    document.getElementById("result").style.fontSize = '40px';
                    document.getElementById("result").style.color = '#ed6677';
                    document.getElementById("player-select-container").style.display = "none";
                    document.getElementById("reload-down").style.display = "none";
                    document.getElementById("reload-up").style.display = "inline";
                } else if (result === "DRAW") {
                    document.getElementById("result-container").style.display = "flex";
                    document.getElementById("result").style.display = "none";
                    document.getElementById("wins").innerText = "DRAW :)";
                    document.getElementById("player-select-container").style.display = "none";
                    document.getElementById("reload-down").style.display = "none";
                    document.getElementById("reload-up").style.display = "inline";
                }

                line();

            } else {
                i.firstElementChild.innerText = secondPlayer;
                document.getElementById("player-select").innerText = firstPlayer;

                if (i.firstElementChild.innerText === 'circle') {
                    i.firstElementChild.style.fontSize = "100px";
                    i.firstElementChild.style.color = "#ed6677";

                    document.getElementById("player-select").style.fontSize = "6vw";
                    document.getElementById("player-select").style.color = "#53bd9e";

                    width = window.innerWidth;
                    if (width >= 1024) {
                        document.getElementById("player-select").style.fontSize = "5vw";
                    } else if (width >= 768) {
                        document.getElementById("player-select").style.fontSize = "7vw";
                    } else if (width >= 640) {
                        document.getElementById("player-select").style.fontSize = "9vw";
                    } else if (width >= 540) {
                        document.getElementById("player-select").style.fontSize = "11vw";
                    } else if (width >= 440) {
                        document.getElementById("player-select").style.fontSize = "13vw";
                    } else if (width < 440) {
                        document.getElementById("player-select").style.fontSize = "15vw";
                    }
                } else {
                    i.firstElementChild.style.fontSize = "120px";
                    i.firstElementChild.style.color = "#53bd9e";

                    document.getElementById("player-select").style.fontSize = "5vw";
                    document.getElementById("player-select").style.color = "#ed6677";

                    width = window.innerWidth;
                    if (width >= 1024) {
                        document.getElementById("player-select").style.fontSize = "6vw";
                    } else if (width >= 768) {
                        document.getElementById("player-select").style.fontSize = "8vw";
                    } else if (width >= 640) {
                        document.getElementById("player-select").style.fontSize = "10vw";
                    } else if (width >= 540) {
                        document.getElementById("player-select").style.fontSize = "13vw";
                    } else if (width >= 440) {
                        document.getElementById("player-select").style.fontSize = "15vw";
                    } else if (width < 440) {
                        document.getElementById("player-select").style.fontSize = "17vw";
                    }
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

                if (result === "PLAYER X WIN") {
                    document.getElementById("result-container").style.display = "flex";
                    document.getElementById("result").innerText = 'close';
                    document.getElementById("result").style.fontSize = '38px';
                    document.getElementById("result").style.color = '#53bd9e';
                    document.getElementById("player-select-container").style.display = "none";
                    document.getElementById("reload-down").style.display = "none";
                    document.getElementById("reload-up").style.display = "inline";
                } else if (result === "PLAYER O WIN") {
                    document.getElementById("result-container").style.display = "flex";
                    document.getElementById("result").innerText = 'circle';
                    document.getElementById("result").style.fontSize = '40px';
                    document.getElementById("result").style.color = '#ed6677';
                    document.getElementById("player-select-container").style.display = "none";
                    document.getElementById("reload-down").style.display = "none";
                    document.getElementById("reload-up").style.display = "inline";
                } else if (result === "DRAW") {
                    document.getElementById("result-container").style.display = "flex";
                    document.getElementById("result").style.display = "none";
                    document.getElementById("wins").innerText = "DRAW :)";
                    document.getElementById("player-select-container").style.display = "none";
                    document.getElementById("reload-down").style.display = "none";
                    document.getElementById("reload-up").style.display = "inline";
                }

                line();
            }

        }
    })
}