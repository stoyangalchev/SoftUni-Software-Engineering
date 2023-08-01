function trainTheTrainers(input) {
    let person = Number(input[0]);
    let index = 1;
    let array = input[index++];
    let avarageSum = 0
    let allcount=0
    while (array !== "Finish") {

        let gradeCount = 0;
        let sum = 0
        while (gradeCount < person) {
            let num = input[index];
            index++

            sum += Number(num)
            gradeCount++
            allcount++

            if (gradeCount === person) {
                console.log(`${array} - ${(sum / person).toFixed(2)}.`);
            }

        } avarageSum += sum
        array = input[index++]
        if (array === "Finish") {
            console.log(`Student's final assessment is ${(avarageSum / allcount).toFixed(2)}.`);
        }
    }

}
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])