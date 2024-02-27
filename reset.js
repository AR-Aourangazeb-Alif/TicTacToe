const rowLines = document.getElementsByClassName("row-lines");
const colmLines = document.getElementsByClassName("colm-lines");
const diagonalLines = document.getElementsByClassName("diagonal-lines");



function reset(){
    for(let r of cells){
        r.firstElementChild.innerText = "";
        r.firstElementChild.style.fontSize = "16px";
    }
    playCount = document.getElementsByClassName('cells').length;

    for(let rowline of rowLines){
        console.log(rowline);
        
        if(rowline.style.width === "100%"){
            rowline.style.width = "0%";
        }

    }

    for(let colmLine of colmLines){
        if(colmLine.style.height === "100%"){
            colmLine.style.height = "0%";
        }
    }

    result = null;

}