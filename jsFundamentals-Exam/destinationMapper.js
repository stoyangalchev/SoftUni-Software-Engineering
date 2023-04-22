function destinationMapper(input) {

    let numberOfbarcode = Number(input.shift());
    let pattern = /^(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@#+)$/;
    for (const line of input) {
        let code = '';
        match = pattern.exec(line);
        if (match) {
            for (const el of match.groups.barcode) {
                if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
                    code += el;
                }
            }
            code == '' ? console.log(`Product group: 00`) : console.log(`Product group: ${code}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
destinationMapper(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log("....................");
destinationMapper([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
/*
@#FreshFisH@# -> product group: 00

@###Brea0D@### -> product group: 0

@##Che4s6E@## -> product group: 46
*/
