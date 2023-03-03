function weekendOrWorkingDay(input) {
    let dayInWeek = input[0];

    switch (dayInWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day"); break;

        case "Saturday":
        case "Sunday":
            console.log("Weekend"); break;

        default: console.log("Error"); break;
    }
}
weekendOrWorkingDay(["Monday"])