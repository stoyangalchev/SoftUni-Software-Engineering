function sumOfNumbers([num]){
        let sum =0;
        for (let i=0; i<num.length;i++){
            let firstNum=Number(num[i]);
            sum += firstNum
            
            
        }
        console.log(`The sum of the digits is:${sum}`);
        
}
sumOfNumbers(["4321"])