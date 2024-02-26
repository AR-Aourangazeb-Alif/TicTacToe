function checkResult(){
    if((cellOne === 'close' && cellTwo === 'close' && cellThree === 'close') || (cellFour === 'close' && cellFive === 'close' && cellSix === 'close') || (cellSeven === 'close' && cellEight === 'close' && cellNine === 'close') || (cellOne === 'close' && cellFour === 'close' && cellSeven === 'close') || (cellTwo === 'close' && cellFive === 'close' && cellEight === 'close') || (cellThree === 'close' && cellSix === 'close' && cellNine === 'close') || (cellOne === 'close' && cellFive === 'close' && cellNine === 'close') || (cellThree === 'close' && cellFive === 'close' && cellSeven === 'close')){
    
        return "PLAYER X WIN";

    }else if((cellOne === 'circle' && cellTwo === 'circle' && cellThree === 'circle') || (cellFour === 'circle' && cellFive === 'circle' && cellSix === 'circle') || (cellSeven === 'circle' && cellEight === 'circle' && cellNine === 'circle') || (cellOne === 'circle' && cellFour === 'circle' && cellSeven === 'circle') || (cellTwo === 'circle' && cellFive === 'circle' && cellEight === 'circle') || (cellThree === 'circle' && cellSix === 'circle' && cellNine === 'circle') || (cellOne === 'circle' && cellFive === 'circle' && cellNine === 'circle') || (cellThree === 'circle' && cellFive === 'circle' && cellSeven === 'circle')){

        return "PLAYER O WIN";

    }else if(playCount === 0){
        
        return "DRAW";
    }
}