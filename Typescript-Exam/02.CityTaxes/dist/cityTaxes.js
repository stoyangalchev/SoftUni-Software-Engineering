function cityTaxes(cityName, population, treasury) {
    return {
        name: cityName,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += Math.floor((this.population * percentage) / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil((this.treasury * percentage) / 100);
        },
    };
}
const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
