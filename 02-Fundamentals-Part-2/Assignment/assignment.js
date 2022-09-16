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

const japanPopulation = percentageOfWorld1('Japan', 123);
console.log(japanPopulation)

const unitedKingdomPopulation = percentageOfWorld1('United Kingdom', 67);
console.log(unitedKingdomPopulation);
*/

//Expression
const percentageOfWorld1 = function (population) {
  let numOfPopulation = population / 7900 * 100;
  const percentageCountry = Number.parseFloat(numOfPopulation).toFixed(2);
  return percentageCountry;
}

const indonesiaPopulation = percentageOfWorld1(275);
console.log(`Indonesia has ${indonesiaPopulation}% of the world`)

const japanPopulation = percentageOfWorld1(123);
console.log(`India has ${japanPopulation}% of the world`)

const unitedKingdomPopulation = percentageOfWorld1(67);
console.log(`United Kingdom has ${unitedKingdomPopulation}% of the world`);



// LECTURE: Arrow Function
// const percentageOfWorld3 = (nation, population) => {
//   let numOfPopulation = population / 7900 * 100;
//   const percentageCountry = Number.parseFloat(numOfPopulation).toFixed(2);
//   return (`${nation} has ${percentageCountry}% of the world population`)
// }

// const indonesiaPopulation = percentageOfWorld3('Indonesia', 275);
// console.log(indonesiaPopulation)

// const indiaPopulation = percentageOfWorld3('Japan', 123);
// console.log(indiaPopulation)

// const chinaPopulation = percentageOfWorld3('United Kingdom', 67);
// console.log(chinaPopulation);


//LECTURE: Function Calling other Function 
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`
  console.log(description);
}

describePopulation('Portugal', 10);
describePopulation('China', 1141);
describePopulation('USA', 332);


//LECTURE: Introduction to Arrays
const populations = [10, 1141, 332, 275]
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
]

console.log(percentages);


// LECTURE: Basic Array Operations (Method)
const neighbours = ['Malaysia', 'Singapore', 'Brunei'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

neighbours[0] = 'Republic of Malaysia'
console.log(neighbours);


// LECTURE: Introduction to Object
const myCountry = {
  country: 'Indonesia',
  capital: 'Jakarta',
  language: 'Bahasa',
  population: 275,
  neighbours: ['Malaysia', 'Singapore', 'Australia']
}

// LECTURE: Dot vs. Bracket Notation 
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry['population']);

// LECTURE: Iteration: The For Loop

const voter = 50;
for (let vote = 1; vote <= voter; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}