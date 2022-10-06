'use strict'


// ----------Scoping in practice----------//

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear};`
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1999) {
      var millenial = true;

      // Creating NEW variable's with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `You'are Millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str); // error, blockScope
    console.log(millenial); // true, var keyword is a function scope!
    console.log(output);
  }

  printAge();
  return age;
};

const firstName = 'Nami';
calcAge(1998);



// --------Hoisting adn TDZ in Practice------ // 

// Variables
console.log(me); // undefined
// console.log(job); // error
// console.log(year); // error

var me = 'Nami';
let job = 'Cat'
const year = 1998;

// Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // Error
console.log(addArrow);
// console.log(addArrow(2, 3)); // Error

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

// Example
console.log(numProduct);
if (!numProduct) deleteShopCart();

var numProduct = 10;

function deleteShopCart() {
  console.log('All product deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true => with var keyword will create a property on the global window object
console.log(y === window.y); //false 
console.log(z === window.z); //false