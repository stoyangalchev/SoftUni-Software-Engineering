function trainingLab(input){
 
    let height = Number(input[0]) * 100;
    let widht = Number (input[1]) * 100;
 
    let freeWidht = widht -100;
    let countDesksRow = Math.floor(freeWidht / 70);
    let conutDesksColumn = Math.floor(height /120);
    let totalSeets = (countDesksRow * conutDesksColumn) - 3;
 
    console.log(totalSeets);
 
}
trainingLab([8.4,
    5.2]);
