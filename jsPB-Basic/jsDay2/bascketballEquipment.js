function bascketball(input) {

    let yearsPay = Number(input[0]);

    let sneakers = yearsPay - (yearsPay * (40 / 100));
    let outFit = sneakers - (sneakers * (20 / 100));
    let ball = outFit / 4;
    let accessoaries = ball / 5;

    let sumOfall = sneakers + outFit + ball + accessoaries + yearsPay;

    console.log(sumOfall)
}
bascketball(["365"])