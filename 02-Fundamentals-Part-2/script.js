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

Calling/running/invoking the function
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
*/


/////////////////
// Function Declarations vs Expressions
/////////////////

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