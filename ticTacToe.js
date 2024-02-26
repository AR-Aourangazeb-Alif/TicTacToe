let firstPlayer;
let secondPlayer;
let playCount = document.getElementsByClassName('cells').length;



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
        if (i.firstElementChild.innerText !== 'circle' && i.firstElementChild.innerText !== 'close' && playCount > 0) {
            playCount--;

            if (playCount % 2 === 0) {
                i.firstElementChild.innerText = firstPlayer;
                document.getElementById("player-select").innerText = firstPlayer;

                if (i.firstElementChild.innerText === 'circle') {
                    i.firstElementChild.style.fontSize = "100px";
                    i.firstElementChild.style.color = "#ed6677";

                    document.getElementById("player-select").style.fontSize = "5vw";
                    document.getElementById("player-select").style.color = "#ed6677";

                } else {
                    i.firstElementChild.style.fontSize = "120px";
                    i.firstElementChild.style.color = "#53bd9e";

                    document.getElementById("player-select").style.fontSize = "6vw";
                    document.getElementById("player-select").style.color = "#53bd9e";
                }

            } else {
                i.firstElementChild.innerText = secondPlayer;
                document.getElementById("player-select").innerText = secondPlayer;

                if (i.firstElementChild.innerText === 'circle') {
                    i.firstElementChild.style.fontSize = "100px";
                    i.firstElementChild.style.color = "#ed6677";

                    document.getElementById("player-select").style.fontSize = "5vw";
                    document.getElementById("player-select").style.color = "#ed6677";
                } else {
                    i.firstElementChild.style.fontSize = "120px";
                    i.firstElementChild.style.color = "#53bd9e";

                    document.getElementById("player-select").style.fontSize = "6vw";
                    document.getElementById("player-select").style.color = "#53bd9e";
                }
            }

        }
    })
}

