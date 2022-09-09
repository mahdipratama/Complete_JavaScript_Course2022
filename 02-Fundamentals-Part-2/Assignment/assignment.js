// LECTURE: Function
function describeCountry(country, population, capitalCity) {
  const nation = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
  return nation;
}

const isNation1 = describeCountry('Indonesia', 275, 'Jakarta');
console.log(isNation1);

const isNation2 = describeCountry('Japan', 123, 'Tokyo');
console.log(isNation2);

const isNation3 = describeCountry('United Kingdom', 67, 'London');
console.log(isNation3);



// LECTURE: Function Declaration vs. Expressions

// Declaration
/*
function percentageOfWorld1(population) {
  let country = population / 7900 * 100;
  const percentageCountry = Math.floor(country)
  return (percentageCountry)
}

const indonesiaPopulation = [275, percentageOfWorld1(275)];
console.log(`Indonesia has ${indonesiaPopulation[0]} million people, so it's about ${indonesiaPopulation[1]}% of the world population`);


const indiaPopulation = [1380, percentageOfWorld1(1380)];
console.log(`India has ${indiaPopulation[0]} million people, so it's about ${indiaPopulation[1]}% of the world population`);


const chinaPopulation = [1402, percentageOfWorld1(1402)];
console.log(`China has ${chinaPopulation[0]} million people, so it's about ${chinaPopulation[1]}% of the world population`);
*/

// Expression
const percentageOfWorld1 = function (population) {
  let country = population / 7900 * 100;
  const percentageCountry = Math.floor(country)
  return (percentageCountry)
}

const indonesiaPopulation = [275, percentageOfWorld1(275)];
console.log(`Indonesia has ${indonesiaPopulation[0]} million people, so it's about ${indonesiaPopulation[1]}% of the world population`);


const indiaPopulation = [1380, percentageOfWorld1(1380)];
console.log(`India has ${indiaPopulation[0]} million people, so it's about ${indiaPopulation[1]}% of the world population`);


const chinaPopulation = [1402, percentageOfWorld1(1402)];
console.log(`China has ${chinaPopulation[0]} million people, so it's about ${chinaPopulation[1]}% of the world population`);