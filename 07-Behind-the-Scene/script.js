'use strict'


// Scoping in practice

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