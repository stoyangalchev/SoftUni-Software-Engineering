function workingHours(input) {
    let hour = Number(input[0]);
    let date = input[1];
    let openTime = hour >= 10 && hour <= 18;
    let closeTime = hour < 10 && hour > 18;

    if (openTime) {
        switch (date) {
            case "Monday": console.log("open"); break;
            case "Tuesday": console.log("open"); break;
            case "Wednesday": console.log("open"); break;
            case "Thursday": console.log("open"); break;
            case "Friday": console.log("open"); break;
            case "Saturday": console.log("open"); break;
            default: case "Sunday": console.log("closed");
        }
    }else
    {
        switch (date) {
            case "Monday": console.log("closed"); break;
            case "Tuesday": console.log("closed"); break;
            case "Wednesday": console.log("closed"); break;
            case "Thursday": console.log("closed"); break;
            case "Friday": console.log("closed"); break;
            case "Saturday": console.log("closed"); break;
            default: case "Sunday": console.log("closed");
        }
    }


}
workingHours(["12", "Saturday"])