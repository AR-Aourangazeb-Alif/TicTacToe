window.addEventListener('resize', function () {

    if (document.getElementById("player-select").innerText === 'circle') {

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

    }
})