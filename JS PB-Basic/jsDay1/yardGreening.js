function yardGreening(input){
let yard = Number(input[0]);
let kvMetrer= 7.61
let allYard= yard*kvMetrer
let dicount= allYard*0.18
let result = allYard- dicount

console.log (`The final price is: ${result} lv.`)
console.log (`The discount is: ${dicount} lv.`)
}
yardGreening(["150"])