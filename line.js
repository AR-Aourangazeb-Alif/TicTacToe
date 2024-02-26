function line(){
    if((cellOne === cellTwo && cellTwo === cellThree) && (cellOne && cellTwo && cellThree)){

        document.getElementById("row-1").style.width = "100%";
    }else if((cellFour === cellFive && cellFive === cellSix) && (cellFour && cellFive && cellSix)){

        document.getElementById("row-2").style.width = "100%";
    }
}