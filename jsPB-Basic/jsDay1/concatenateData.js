function ivo(input) {
    let name = input[0];
    let secNam=input[1];
    let age = Number(input[2]);
    let town =input[3];

    console.log(`You are ${name} ${secNam}, a ${age}-years old person from ${town}.`);
}
ivo(["Stoyan","Galchev","24","Sofia"])