'use strict'
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');
console.log(hasDriversLicense)

// this reserved word below will cause error silently if we not use strict Mode
const interface = 'Audio'; 
const private = '333'



/////////////////
// Function
/////////////////

function logger() {
  console.log('My name is Nami');
}

//Calling/running/invoking the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// Saving(capture) that return value in to a variable 
const ourJuice = fruitProcessor(5, 0);
console.log(ourJuice);

const ourJuice2 = fruitProcessor(2, 4);
console.log(ourJuice2);



////////////////////
// Function Declarations vs Expressions
////////////////////

//Function declaration 
function calAge1(birthYear) {
  return 2022 - birthYear
}
const age1 = calAge1(1991);

//Function Expression 
const calAge2 = function (birthYear) {
  return 2022 - birthYear
}
const age2 = calAge2(1998);

console.log(age1);
console.log(age2);



////////////////////
// Arrow Functions 
////////////////////

// One-Liner Arrow Function 
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Multiple-Liner function 
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1998, 'Mahdi'));



////////////////////
// Function calling other Function
////////////////////
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges)

  const juice = `Juice with ${applePieces} piece of apples and ${orangesPieces} piece of oranges.`;
  return juice;
}



////////////////////
// Reviewing Function
////////////////////

const calcAge = function (birthYear) {
  return 2022 - birthYear;
}

const calcRetire = age => {
  return 65 - age;
}

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = calcRetire(age);
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1998, 'Mahdi'));
console.log(yearsUntilRetirement(1950, 'John'));


/////////////////////
// Introduction to Arrays
/////////////////////
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const umur = function (birthYeah) {
  return 2022 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = umur(years[0]);
const age2 = umur(years[1]);
const age3 = umur(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [umur(years[0]), umur(years[1]), umur(years[years.length - 1])];
console.log(ages);
*/

/////////////////////
// Basic Array (Methods)
/////////////////////

const friends = ['Michael', 'Steven', 'Peter'];

// Add element
friends.push('Jay') // * add the element to the End of array
console.log(friends);

friends.unshift('John'); // * add the element to the Beginning of array
console.log(friends);

// Remove Element
friends.pop(); // * Remove last element 
friends.pop(); // * Remove last element 
console.log(friends);

friends.shift(); // * Remove first element
console.log(friends);

console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // true

if (friends.includes('Steven')) {
  console.log('You have  a friends called Steven');
}


/////////////////////
// Introduction to Objects
/////////////////////

const kucing = {
  firstName: 'Nami',
  lastName: 'Saputri',
  age: 2022 - 2021,
  job: 'Mewong',
  friends: ['Luna', 'Ludo', 'Lini']
};

// Retrieve Object Property 
console.log(kucing.lastName);
console.log(kucing['lastName']);

const nameKey = 'Name';
console.log(kucing['first' + nameKey]);
console.log(kucing['last' + nameKey]);

const interestedIn = prompt('What you want to know about nami ? firstName, lastName, age, job, and friends');

if (kucing[interestedIn]) {
  console.log(kucing[interestedIn]);
} else {
  console.log('Wrong Request! Choose between firstName, lastName, age, job and friends');
}

kucing.location = 'Gunung Ibul';
kucing['twitter'] = '@namiBon';
console.log(kucing);

// Challenges
// 'Nami has 3 friends, and his best friend is called Ludo'

console.log(`${kucing.firstName} has ${kucing.friends.length} friends, and his best friend is called ${kucing.friends[1]}`);