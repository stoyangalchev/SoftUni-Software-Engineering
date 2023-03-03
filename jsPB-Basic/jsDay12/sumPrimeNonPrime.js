function sumPrimeNonPrime(input) {
       let index = 0;
       let command = input[index];
       index++
       let primeSum = 0;
       let nonePrimeSum = 0;

       while (command !== "stop") {
              let num = Number(command);
              if (num < 0) {
                     console.log("Number is negative.");
                     command = input[index]
                     index++
                     continue;
              }
              let isPrime = true
              for (let devider = 2; devider < num; devider++) {
                     if (num % devider === 0) {
                            isPrime = false
                            break;
                     }
              }
              if (isPrime) {
                     primeSum += num
              } else {
                     nonePrimeSum += num
              }

              command = input[index++]
       } console.log(`Sum of all prime numbers is: ${primeSum}`);
       console.log(`Sum of all non prime numbers is: ${nonePrimeSum}`);

}

sumPrimeNonPrime(["30",

       "83",

       "33",

       "-1",

       "20",

       "stop"])