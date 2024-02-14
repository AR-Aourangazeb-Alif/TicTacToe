function cellCheck(cellID){
    const cells=[1,2,3,4,5,6,7,8,9];
    
    
    let checkSymbol;
    let symbolSize;

    if(cells.length <= 9 && cells.length >= 1){

        if(cells.length%2 === 0){
            checkSymbol = `<i class="fa-solid fa-circle"></i>`;
            symbolSize = `text-[15svh]`;
        }else{
            checkSymbol = `<i class="fa-solid fa-xmark"></i>`;
            symbolSize = `text-[20svh]`;
        }
    
        document.getElementById(cellID).innerHTML = checkSymbol;
        document.getElementById(cellID).classList.add(symbolSize);
        cells.pop(cells);

    }
    
}