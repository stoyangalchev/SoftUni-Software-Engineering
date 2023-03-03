function depositCalculator (input){
    let depositeAmount = Number(input[0]);
    let termOfDeposite = Number(input[1]);
    let annualInterestRate = (Number(input[2]))/100;
    let amount = depositeAmount+ termOfDeposite*((depositeAmount*annualInterestRate)/12)
    console.log(amount)
}
depositCalculator (["2350",
"6",
"7"]
)