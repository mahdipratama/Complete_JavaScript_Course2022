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
*/


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