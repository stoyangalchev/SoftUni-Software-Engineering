function oldBooks(input) {
    let index = 0;
    let favBook = input[index];
    index++
    let command = input[index];
    index++
    let counter = 0;
    let isFound = false;
    while (command !== "No More Books") {

        let book = command;
        if (favBook === book) {
            console.log(`You checked ${counter} books and found it.`);
            isFound=true
            break;
        }
        command = input[index]
        index++
        counter++
    }
    if (!isFound) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${counter} books.`)
    }
}
oldBooks(["Bourne",

    "True Story",

    "Forever",

    "More Space",

    "The Girl",

    "Spaceship",

    "Strongest",

    "Profit",

    "Tripple",

    "Stella",

    "The Matrix",

    "Bourne"])