'use strict'

console.log('-----FUNCTION-----');
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


console.log('================LECTURE: Function Declaration vs. Expressions');
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
console.log(`Japan has ${japanPopulation}% of the world`)

const unitedKingdomPopulation = percentageOfWorld1(67);
console.log(`United Kingdom has ${unitedKingdomPopulation}% of the world`);


console.log('================LECTURE: Arrow Function');
// LECTURE: Arrow Function
const percentageOfWorld3 = (nation, population) => {
  let numOfPopulation = population / 7900 * 100;
  const percentageCountry = Number.parseFloat(numOfPopulation).toFixed(2);
  return (`${nation} has ${percentageCountry}% of the world population`)
}

const indonesiaPopulation1 = percentageOfWorld3('Indonesia', 275);
console.log(indonesiaPopulation1)

const japanPopulation1 = percentageOfWorld3('Japan', 123);
console.log(japanPopulation1)

const ukPopulation = percentageOfWorld3('United Kingdom', 67);
console.log(ukPopulation);

console.log('================LECTURE: Function Calling other Function ');
//LECTURE: Function Calling other Function 
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`
  console.log(description);
}

describePopulation('Portugal', 10);
describePopulation('China', 1141);
describePopulation('USA', 332);

console.log('================LECTURE: Introduction to Arrays');
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

console.log('================LECTURE: Basic Array Operations (Method)');
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


console.log('================LECTURE: Introduction to Object');
// LECTURE: Introduction to Object
const myCountry = {
  country: 'Indonesia',
  capital: 'Jakarta',
  language: 'Bahasa',
  population: 275,
  neighbours: ['Malaysia', 'Singapore', 'Australia']
}
console.log(myCountry);

console.log('================LECTURE: Dot vs. Bracket Notation ');
// LECTURE: Dot vs. Bracket Notation 
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry['population']);


console.log('================LECTURE: Iteration: The For Loop');
// LECTURE: Iteration: The For Loop

const voter = 50;
for (let vote = 1; vote <= voter; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}

console.log('================LECTURE: Looping Arrays, Breaking and Continuing');
// LECTURE: Looping Arrays, Breaking and Continuing

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc)
}

console.log(percentages2);

console.log('================LECTURE: Looping Backwards and Loops in Loops');
// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden'],
  ['Russia']
]


for (let i = 0; i < listOfNeighbours.length; i++) {
  const index = listOfNeighbours[i]
  for (let a = 0; a < index.length; a++) {
    console.log(`Neighbour: ${index[a]}`);
  }
}

console.log('================');
// LECTURE: The While Loops
const percentages3 = []
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  i++
  percentages3.push(perc)
}

console.log(percentages3);