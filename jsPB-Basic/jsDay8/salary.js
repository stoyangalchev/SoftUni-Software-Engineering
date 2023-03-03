function salary(input) {
    let tabInBrowser = Number(input[0]);
    let salary = Number(input[1]);;
    let inputL = input.length
    let facebookFine = 150;
    let instagramFine = 100;
    let redditFine = 50;
    



    for (let i = 2; i < inputL; i++) {
        let curentTab = input[i]
        switch (curentTab) {
            case "Facebook": salary -= facebookFine; break;
            case "Instagram": salary -= instagramFine; break;
            case "Reddit": salary -= redditFine; break;
            default:
        }

    } if (salary <= 0) {
        console.log(`You have lost your salary.`);
    }else  {
         console.log(Math.trunc(salary)) }
}



salary(["10",
    "750",
    "Facebok",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])