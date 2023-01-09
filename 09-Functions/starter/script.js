'use strict';
/*
///////////////////////////////
// Default Parameters

const bookings = [];

// Default value parameters
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {

  // ES5 default value
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }

  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
// outputs: { flightNum: 'LH123', numPassengers: 1, price: 199 }
createBooking('LH123', 2, 800);
// outputs:{ flightNum: 'LH123', numPassengers: 2, price: 800 }
createBooking('LH123', 8);
// outputs: { flightNum: 'LH123', numPassengers: 8, price: 1592 }
createBooking('LH123', 5);
// outputs: { flightNum: 'LH123', numPassengers: 5, price: 995 }

// Skipping parameters
createBooking('LH123', undefined, 5);
// outputs: { flightNum: 'LH123', numPassengers: 1, price: 5 }





// ===================BORDER====================== //





///////////////////////////////
// How Passing Arguments Works: Value vs. Reference


const flight = 'LH123';
const nami = {
  name: 'Nami Tsunami',
  passport: 12213145443,
}

const checkIn = function (flightNum, passenger) {
  // this flightNum completely different variable, not got reflected.
  flightNum = 'LH999';

  // this will reflected, its the same object in memory heap
  passenger.name = 'Mrs.' + passenger.name;

  if (passenger.passport === 12213145443) {
    console.log('Checked in')
  } else {
    console.log('Wrong passport!')
  }
}

checkIn(flight, nami); // outputs: Check in
console.log(flight);   // outputs:  LH123
console.log(nami);
// outputs: { name: 'Mrs.Nami Tsunami', passport: 12213145443 }

// Passing a primitive types to a function is really just the same as creating a copy like this, outside of a function. the value is simply copied.
const flightNum = flight;

// On the other hand, when we pass an object to a function it's really just like copying an object like this. whatever we change in a copy will also happen in the original.
const passenger = nami;


// this newPassport function below manipulates that person object, it also gets reflected in Nami object.
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000)
}

// two functions manipulating the same object, causes problem
newPassport(nami);
checkIn(flight, nami)  // outputs: Wrong Passport!


// There are two terms that are used when dealing with function, which is passing by value, and passing by reference. So javascript does not have passing by reference, only passing by value ! JavaScript does not have pass by reference. For objects in fact we pass in a reference (the memory address of the object) that reference itself is still a value, it's simply a value that contains a memory address. JavaScript pass a reference to the function, but do not pass by reference. pass by reference? which means that the function receives a reference to the memory location of the variable. this allows function to modify the value of the variable.






// ===================BORDER====================== //






*/
///////////////////////////////
// First-class and Higher-order function

// First-class function is a function that can be treated like any other value in the language. This means that it can be assigned to a variable, passed as an argument to a function, or returned as a result from a function. we can storing them in variables or object properties. we can also return a function from another functions. There are also function methods, so methods that we can call on functions. 


// Higher-order function is A function that receives another function as an argument or a function that returns a new function.  that either take one or more functions as arguments or return a function as their result. Higher-order functions are often used to abstract over actions, create functions that transform other functions, or create functions that perform other functions on a particular type of data.
// We can also have functions that return another function. Basically this whole code block, which clearly returns a new function,When a function returns another function, the inner function is defined at the time the outer function is called and the inner function has access to the variables in the outer function's scope. This is known as a closure.

// So, what is the difference between First-class and Higher Order ? 

 // - First-Class function is just a feature that a programming language either has or does not have. All it means is that all function are values, they can be assigned to variables, passed as arguments to functions, or returned as result from function. There are no first class functions in practice it is just a concept.

 // - Higher-order-functions are functions that either take one or more functions as arguments or return a function as their result. There are however higher order functions in practice which are possible because the language supports First-Class functions.