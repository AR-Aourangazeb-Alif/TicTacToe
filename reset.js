const rowLines = document.getElementsByClassName("row-lines");
const colmLines = document.getElementsByClassName("colm-lines");
const diagonalLines = document.getElementsByClassName("diagonal-lines");



function reset() {
    for (let r of cells) {
        r.firstElementChild.innerText = "";
        r.firstElementChild.style.fontSize = "16px";
    }
    playCount = document.getElementsByClassName('cells').length;

    for (let rowline of rowLines) {
        console.log(rowline);

        if (rowline.style.width === "100%") {
            rowline.style.width = "0%";
        }

    }

    for (let colmLine of colmLines) {
        if (colmLine.style.height === "100%") {
            colmLine.style.height = "0%";
        }
    }

    for (let diagonalLine of diagonalLines) {
        if (diagonalLine.style.width === "94%") {
            diagonalLine.style.width = "0%";
        }
    }

    result = null;

    document.getElementById("reload-up").style.display = "none";
    document.getElementById("reload-down").style.display = "inline";
    document.getElementById("result-container").style.display = "none";
    document.getElementById("result").innerText = '';
    document.getElementById("wins").innerText = "";
    document.getElementById("player-select-container").style.display = "flex";

    document.getElementById("player-select").innerText = "circle";

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

    clickCount = 0;

}