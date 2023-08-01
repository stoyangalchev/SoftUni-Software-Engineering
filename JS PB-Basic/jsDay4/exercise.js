function lunchBreak(input) {
    let nameMovie = input[0];
    let movieDuration = Number(input[1]);
    let restDuration = Number(input[2]);

    let timeForLunch = restDuration / 8;//12
    let timeForRelax = restDuration/4; //24

    let leftTime=restDuration-timeForLunch-timeForRelax;//60
    let leftMinutes = Math.abs(leftTime-movieDuration)
    if (movieDuration<= leftTime){
       console.log(`You have enough time to watch ${nameMovie} and left with ${Math.ceil(leftMinutes)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${nameMovie}, you need ${Math.ceil(leftMinutes)} more minutes.`);
    }
 

} lunchBreak(["Teen Wolf",

"35",

"60"])