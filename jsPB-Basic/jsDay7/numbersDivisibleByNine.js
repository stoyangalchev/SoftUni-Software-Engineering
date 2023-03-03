function solve([num1, num2]) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let firstnum="";
    for (let i = num1; i <= num2; i++) {
        if (i % 9 === 0) {
            sum += i;
            firstnum+=`${i} \n`

        } 
    }
    console.log(`The sum: ${sum}`);
    console.log(firstnum);
    
    
}
solve(["100", "200"])
//Second Solve::::
function solve([num1, num2]) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let number=0
    for (let i = num1; i <= num2; i++) {
        if (i % 9 === 0) {
            sum += i;
            

        } ;
    }console.log(`The sum: ${sum}`);
    for (let z = num1; z <= num2; z++) {
        if (z % 9 === 0) {
            number += z;
           console.log(z);

        } 
    }
    
    
    
    
}
solve(["100", "200"])