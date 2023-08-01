function vacationBooksList(input) {
    let numberPaper = Number(input[0]);
    let paperOur = Number(input[1]);
    let numDays = Number(input[2]);
    let time = numberPaper / paperOur;
    let dayHour =time / numDays;
    console.log(dayHour);
}
vacationBooksList(["212",
"20",
"2"
])