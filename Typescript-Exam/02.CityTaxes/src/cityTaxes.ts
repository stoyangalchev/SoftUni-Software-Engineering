interface City {
  name: string;
  population: number;
  treasury: number;
  taxRate: number;
  collectTaxes: () => void;
  applyGrowth: (percentage: number) => void;
  applyRecession: (percentage: number) => void;
}

function cityTaxes(
  cityName: string,
  population: number,
  treasury: number
): City {
  return {
    name: cityName,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage: number) {
      this.population += Math.floor((this.population * percentage) / 100);
    },
    applyRecession(percentage: number) {
      this.treasury -= Math.ceil((this.treasury * percentage) / 100);
    },
  };
}

const city: City = cityTaxes("Tortuga", 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
