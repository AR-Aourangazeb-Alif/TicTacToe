function line(){
    if((cellOne === cellTwo && cellTwo === cellThree) && (cellOne && cellTwo && cellThree)){

        document.getElementById("row-1").style.width = "100%";
    }else if((cellFour === cellFive && cellFive === cellSix) && (cellFour && cellFive && cellSix)){

        document.getElementById("row-2").style.width = "100%";
    }else if((cellSeven === cellEight && cellEight === cellNine) && (cellSeven && cellEight && cellNine)){

        document.getElementById("row-3").style.width = "100%";
    }else if((cellOne === cellFour && cellFour === cellSeven) && (cellOne && cellFour && cellSeven)){

        document.getElementById("colm-1").style.height = "100%";
    }else if((cellTwo === cellFive && cellFive === cellEight) && (cellTwo && cellFive && cellEight)){

        document.getElementById("colm-2").style.height = "100%";
    }else if((cellThree === cellSix && cellSix === cellNine) && (cellThree && cellSix && cellNine)){

        document.getElementById("colm-3").style.height = "100%";
    }else if((cellOne === cellFive && cellFive === cellNine) && (cellOne && cellFive && cellNine)){

        document.getElementById("diagonal-1").style.width = "94%";
    }else if((cellThree === cellFive && cellFive === cellSeven) && (cellThree && cellFive && cellThree)){

        document.getElementById("diagonal-2").style.width = "94%";
    }
}