'use strict'


// ----------Scoping in practice----------//
/*
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



// --------this keyword-------- // '

console.log(this); // Window property

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // undefined
}

calcAge(1998);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this); // Window object, arrow function does not get its own this keyword.
}

calcAgeArrow(1998);


const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2022 - this.year); // 31;
  },
};

jonas.calcAge();

const ludo = {
  year: 2000,
};

ludo.calcAge = jonas.calcAge;
ludo.calcAge();

const f = jonas.calcAge;
f(); // error year is undefined because f() its just regular function contains jonas.calcAge() method
*/

// --------Regular Functions vs. Arrow Functions-------- // 

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    // Solution 1:
    // const self = this; // self or that
    // const isMillenials = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996); // undefined

    // Solution 2:
    const isMillenials = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenials();
  },

  // Method with arrow function
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); // 'Hey undefined' arrow function doesn't get its own 'this' keyword and will use the global scope, bcs object its not a block scope, object just object literals
jonas.calcAge();


// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b
};

addArrow(2, 3, 4) // its getting error bcs arguments keyword only exist in regular function