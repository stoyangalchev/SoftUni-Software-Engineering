function timeMinutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    if (minutes > 59) {
        hour = hour+1 ;
        minutes = minutes - 60;
    }
    if(hour > 23){
        hour = hour - 24;
    }

    if(minutes < 10){
        console.log(`${hour}:0${minutes}`);
    }else{
        console.log(`${hour}:${minutes}`);
    }
}



timeMinutes(["1", "46"])