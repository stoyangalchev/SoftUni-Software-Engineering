"use strict";
class Trainer {
    constructor(name, pokemon) {
        this.name = name;
        this.pokemon = pokemon;
    }
}
class Pokemon {
    constructor(name, element, health) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}
function pokemonTrainer(input) {
    let trainers = [];
    while (input.length > 0) {
        let [trainerName, pokemonName, element, health] = input.splice(0, 4);
        let pokemon = new Pokemon(pokemonName, element, Number(health));
        let trainer = trainers.find((t) => t.name === trainerName);
        if (trainer) {
            trainer.pokemon.push(pokemon);
        }
        else {
            trainers.push(new Trainer(trainerName, [pokemon]));
        }
    }
    return trainers;
}
console.log(pokemonTrainer([
    "Peter Charizard Fire 100",
    "George Squirtle Water 38",
    "Peter Pikachu Electricity 10",
    "Tournament",
    "Fire",
    "Electricity",
    "End",
]));
// Peter Charizard Fire 100
// George Squirtle Water 38
// Peter Pikachu Electricity 10
// Tournament
// Fire
// Electricity
// End
