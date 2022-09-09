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
function percentageOfWorld1(nation, population) {
  let numOfPopulation = population / 7900 * 100;
  const percentageCountry = Number.parseFloat(numOfPopulation).toFixed(2);
  return (`${nation} has ${percentageCountry}% of the world population`)
}

const indonesiaPopulation = percentageOfWorld1('Indonesia', 275);
console.log(indonesiaPopulation)

const indiaPopulation = percentageOfWorld1('Japan', 123);
console.log(indiaPopulation)

const chinaPopulation = percentageOfWorld1('United Kingdom', 67);
console.log(chinaPopulation);


//Expression
const percentageOfWorld1 = function (nation, population) {
  let numOfPopulation = population / 7900 * 100;
  const percentageCountry = Number.parseFloat(numOfPopulation).toFixed(2);
  return (`${nation} has ${percentageCountry}% of the world population`)
}

const indonesiaPopulation = percentageOfWorld1('Indonesia', 275);
console.log(indonesiaPopulation)

const indiaPopulation = percentageOfWorld1('Japan', 123);
console.log(indiaPopulation)

const chinaPopulation = percentageOfWorld1('United Kingdom', 67);
console.log(chinaPopulation);
*/



// LECTURE: Arrow Function
const percentageOfWorld1 = (nation, population) => {
  let numOfPopulation = population / 7900 * 100;
  const percentageCountry = Number.parseFloat(numOfPopulation).toFixed(2);
  return (`${nation} has ${percentageCountry}% of the world population`)
}

const indonesiaPopulation = percentageOfWorld1('Indonesia', 275);
console.log(indonesiaPopulation)

const indiaPopulation = percentageOfWorld1('Japan', 123);
console.log(indiaPopulation)

const chinaPopulation = percentageOfWorld1('United Kingdom', 67);
console.log(chinaPopulation);
