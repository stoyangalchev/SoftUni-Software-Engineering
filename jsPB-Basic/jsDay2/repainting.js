/*function repainting(input) {
    let nailon = (Number(input[0]) + 2) * 1.5
    let paint = (Number(input[1]) * 1.1) * 14.5
    let tinner = Number(input[2]) * 5
    let hours = Number(input[3])
    let packet = 0.40
    let sum = nailon + paint + tinner + packet
    let man = sum * 0.30 * hours
    let total = man + sum

    console.log(total);

}
repainting(["5",
    "10",
    "10",
    "1"]
)*/
function repainting(input) {
    let nylon = Number(input[0])
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hour = Number(input[3]);

    let addNylon = (nylon + 2) * 1.50;
    let paintAdd = (paint + (paint / 100) * 10) * 14.50;
    let bags = 0.40;
    let thinnerAdd = thinner * 5;

    let sumMaterials = addNylon + paintAdd + bags + thinnerAdd;
    let sumForWorker = ((sumMaterials / 100) * 30) * hour;
    let allSum = sumForWorker + sumMaterials
    console.log(allSum)

} 
repainting(["10 ",

"11 ",

"4 ",

"8 "])
