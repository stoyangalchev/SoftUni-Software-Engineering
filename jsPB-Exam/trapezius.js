function trapezius(input) {
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let s = (b1 + b2) * h / 2;

    console.log(s.toFixed(2))
}

trapezius([8, 13, 7])
 //Формулата за лице на трапец е (b1 + b2) * h / 2.
//На фигурата по-долу е показан трапец със страни 8 и 13 и височина 7. Той има лице (8 + 13) * 7 / 2 = 73.5.
//Отговорът трябва да е форматиран до втората цифра след десетичния знак.