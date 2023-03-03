/*function sumNumbers(input) {
    let numFromArray = Number(input[0]);
    let arrayLength = Number(input.length);
    let curentNum = Number(input[1])
    let index = 1;
    let sum = 0

    while (index < arrayLength) {
        curentNum = Number(input[index])
        sum += curentNum
        index++
        
    }console.log(sum);


}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])*/
function sumNumbers(input) {
    let numFromArray = Number(input[0]);
   
    let curentNum = Number(input[1])
    let index = 1;
    let sum = 0

    while (sum < numFromArray) {
        curentNum = Number(input[index])
        sum += curentNum
        index++
        
    }console.log(sum);


}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])