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
