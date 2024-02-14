const cells=[];
const checkResult = [1,2,3,4,5,6,7,8,9];


function cellCheck(cellID){
 
    let checkSymbol;
    let symbolSizeOne;
    let symbolSizeTwo;
    let result;

    if(cells.length <= 9 && !cells.includes(cellID) && !resultCheck()){

        if(cells.length%2 === 0){
            checkSymbol = `<i class="fa-solid fa-circle"></i>`;
            symbolSizeOne = `md:text-[15svh]`;
            symbolSizeTwo = `text-[21vw]`;
            checkResult[Number(cellID)-1] = 'O';
        }else{
            checkSymbol = `<i class="fa-solid fa-xmark"></i>`;
            symbolSizeOne = `md:text-[20svh]`;
            symbolSizeTwo = `text-[29vw]`;
            checkResult[Number(cellID)-1] = 'X';
        }
    
        document.getElementById(cellID).innerHTML = checkSymbol;
        document.getElementById(cellID).classList.add(symbolSizeOne, symbolSizeTwo);
        cells.push(cellID);
        console.log(cells);
        result = resultCheck();
        console.log(result);

    }
    
}

function resultCheck() {
    if ((checkResult[0] === `X` && checkResult[1] === `X` && checkResult[2] === `X`) || (checkResult[3] === `X` && checkResult[4] === `X` && checkResult[5] === `X`) || (checkResult[6] === `X` && checkResult[7] === `X` && checkResult[8] === `X`) || (checkResult[0] === `X` && checkResult[4] === `X` && checkResult[8] === `X`) || (checkResult[2] === `X` && checkResult[4] === `X` && checkResult[6] === `X` || (checkResult[0] === `X` && checkResult[3] === `X` && checkResult[6] === `X`) || (checkResult[1] === `X` && checkResult[4] === `X` && checkResult[7] === `X`) || (checkResult[2] === `X` && checkResult[5] === `X` && checkResult[8] === `X`))) {
        return `X`;
    } else if (!checkResult.includes(1) && !checkResult.includes(2) && !checkResult.includes(3) && !checkResult.includes(4) && !checkResult.includes(5) && !checkResult.includes(6) && !checkResult.includes(7) && !checkResult.includes(8) && !checkResult.includes(9)) {
        return `Draw`;
    } else if ((checkResult[0] === `O` && checkResult[1] === `O` && checkResult[2] === `O`) || (checkResult[3] === `O` && checkResult[4] === `O` && checkResult[5] === `O`) || (checkResult[6] === `O` && checkResult[7] === `O` && checkResult[8] === `O`) || (checkResult[0] === `O` && checkResult[4] === `O` && checkResult[8] === `O`) || (checkResult[2] === `O` && checkResult[4] === `O` && checkResult[6] === `O`) || (checkResult[0] === `O` && checkResult[3] === `O` && checkResult[6] === `O`) || (checkResult[1] === `O` && checkResult[4] === `O` && checkResult[7] === `O`) || (checkResult[2] === `O` && checkResult[5] === `O` && checkResult[8] === `O`)) {
        return `O`;
    }
}