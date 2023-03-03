function numberPyramid(input) {
    let n = Number(input[0]);
    let curent = 1;
    let isEqual = false;
    let printLine = '';
    for (let r = 1; r <= n; r++) {

        for (let c = 1; c <= r; c++) {
            if (curent > n) {
                isEqual = true
                break;
            }
            printLine += curent + " "
            curent++
        }
        console.log(printLine.trim());
        printLine = ""
        if(isEqual){
            break;
        }
    }
}
numberPyramid(["7"])