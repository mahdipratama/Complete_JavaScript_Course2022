// Lecture: Values and Variables
const country = 'Indonesia';
const continent = 'Asian';
let population = 275;

console.log(country); //Indonesia
console.log(continent); //Asian
console.log(population); //275000000

// lecture: Data Types
const isIsland = true;
let language;
console.log(typeof isIsland); //boolean
console.log(typeof population); //number
console.log(typeof country); //string
console.log(typeof language); //undefined

// Lecture: let, const and var (change which variable should be const)
language = 'bahasa';

// lecture: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description =
  `${country} is in ${continent}, and it's ${population} speak ${language}`;

console.log(description);

if (population > 33) {
  console.log(`${country}'s population is above average`)
} else {
  console.log(`${country}'s population is ${33 - population} million below average`)
};

// Lecture: Type Conversion and Coercion 
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// Lecture: Equality Operators: == vs ===
const numNeighbour = Number(prompt('How many neighbour countries does your country have?'))

if (numNeighbour === 1) {
  console.log('Only 1 border');
} else if (numNeighbour > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}