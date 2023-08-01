function graduation(input) {
    let name = input[0];
    let i = 1;
    let grade = input[i];
    let sum = 0;
    let avarageSum = 0;
    let badGrade = 0
    let excluded=0;
    
    while (i <= 12) {
        grade = Number(input[i]);

        if (grade < 4.00) {
            badGrade++
            if (badGrade>=1){
                excluded=true
                
                break;
            }
            continue;
        }
        sum += grade
        avarageSum = sum / 12
        i++

    }
     if (!excluded){
        console.log(`${name} graduated. Average grade: ${avarageSum.toFixed(2)}`);
     }else {
        console.log(`${name} has been excluded at ${i} grade`)
     }

}
graduation(["Gosho", "5", "5.5", "", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])