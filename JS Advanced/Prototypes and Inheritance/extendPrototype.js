function extendPrototype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function (){
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

function Person(name, email) {
    this.name = name;
    this.email = email;
}

Person.prototype.toString = function () {
    return `Person (name: ${this.name}, email: ${this.email})`;
}

extendPrototype(Person);
let person = new Person("Ta4o", "TA4OWEB@test.com");
console.log(person.toSpeciesString());
