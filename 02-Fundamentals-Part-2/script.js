'use strict'

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');
// console.log(hasDriversLicense)

// // this reserved word below will cause error silently if we not use strict Mode
// const interface = 'Audio'; 
// const private = '333'



/////////////////
// Function
/////////////////
// function logger() {
//   console.log('My name is Nami');
// }

// Calling/running/invoking the function
// logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// Saving(capture) that return value in to a variable 
const ourJuice = fruitProcessor(5, 0);
console.log(ourJuice);

const ourJuice2 = fruitProcessor(2, 4);
console.log(ourJuice2);