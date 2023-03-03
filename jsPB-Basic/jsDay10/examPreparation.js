function examPreparation(input) {
    let index = 0;
    let countBadGrade = Number(input[index]);
    index++
    
    let command = input[index];
    index++
    let badGrade = 0
    let sumScore = 0;
    let taskNumber = 0
    let lastTask = ""
    while (command !== "Enough") {
        let nameTask = command
        let grade = Number(input[index])
        index++
        sumScore += grade
        taskNumber++
        lastTask = nameTask
        if (grade <= 4) {
            badGrade++

        }
        if (badGrade === countBadGrade) {
            console.log(`You need a break, ${badGrade} poor grades.`);
            break;
        }
        command = input[index]
        index++
    }
    if (command === "Enough") { 
        let avrgScore= sumScore/taskNumber
        console.log(`Average score: ${avrgScore.toFixed(2)} `);
        console.log(`Number of problems: ${taskNumber} `);
        console.log(`Last problem: ${lastTask} `);
    }

}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])