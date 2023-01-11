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







///////////////////////////////
// First-class and Higher-order function

// First-class function is a function that can be treated like any other value in the language. This means that it can be assigned to a variable, passed as an argument to a function, or returned as a result from a function. we can storing them in variables or object properties. we can also return a function from another functions. There are also function methods, so methods that we can call on functions.


// Higher-order function is A function that receives another function as an argument or a function that returns a new function.  that either take one or more functions as arguments or return a function as their result. Higher-order functions are often used to abstract over actions, create functions that transform other functions, or create functions that perform other functions on a particular type of data.
// We can also have functions that return another function. Basically this whole code block, which clearly returns a new function,When a function returns another function, the inner function is defined at the time the outer function is called and the inner function has access to the variables in the outer function's scope. This is known as a closure.

// So, what is the difference between First-class and Higher Order ?

 // - First-Class function is just a feature that a programming language either has or does not have. All it means is that all function are values, they can be assigned to variables, passed as arguments to functions, or returned as result from function. There are no first class functions in practice it is just a concept.

 // - Higher-order-functions are functions that either take one or more functions as arguments or return a function as their result. There are however higher order functions in practice which are possible because the language supports First-Class functions.







 // ===================BORDER====================== //







///////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);

  // function as an argument
  console.log(`Transform string: ${fn(str)}`);

  // Function properties
  console.log(`Transform by: ${fn.name}`);
}

// invoke transformer function then it will calling the upperFirstWord function
transformer('Javascript is the best!', upperFirstWord)
// outputs:
// 'Original string: Javascript is the best!'
// 'Transform string: JAVASCRIPT is the best!'
// 'Transform by: upperFirstWord'


transformer('Javascript is the best!', oneWord)
// outputs:
// Original string: Javascript is the best!
// Transform string: javascriptisthebest!
// Transform by: oneWord

// we're calling the transformer function and into that function we are passing the callback function (oneWord, upperFirstWord), we don't call them ourselves (invoke directly) but instead we calling them later with parameters happen right here(line: 160) it's the transform of function that will call these callback functions. in there, are called fn (as a parameters).



// JS uses callback all the time
const high5 = () => console.log('Hi hi');

// addEventListener is a higher order function, and high5 set as callback function
document.body.addEventListener('click', high5);

['Nami', 'Ludo', 'Sumbul'].forEach(high5)

// callback function allows us to create abstraction which means is that we hide the detail of some code implementation because we don't really care about all that detail and this allows us to think about problems at a higher more abstract level. in our example above, this transformer function doesn't care at all how the string is transformed, it doesn't care about the level of detail, all that wants to do is transform to transform a string but it doesn't care how it should do it.






 // ===================BORDER====================== //



///////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

// this greeterHey is actually now a new function that we create earlier it the greet function
const greeterHey = greet('Hey');

// it's the opposite of callback function, first we invoke greeterHey function with a name parameter, then we calling the greeting (greet function) and logs them with the name parameter value.
greeterHey('Jonas');  // outputs: Hey Jonas
greeterHey('Nami');   // outputs: Hey Nami


greet('Hello')('Nami');   // outputs: Hello Nami



const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Nami');  // outputs: Hi Nami





 // ===================BORDER====================== //





*/
///////////////////////////////
// The Call and Apply methods

const lufthansa = {
  airline: 'Lutfthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name })
  }

}

lufthansa.book(239, 'Nami Tsunami')
lufthansa.book(635, 'Ludo Tsunami')
console.log(lufthansa);


const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}



// storage a function into a new variable
const book = lufthansa.book;

// it is now separate function here, its no longer methods within an object anymore and so below here it's a regular function , the 'this' keyword inside of it will now point to undefined. The 'this keyword depends on how the function is actually called.
// does NOT Work
// book(23, 'Sarah william')
// outputs: undefined


// function methods 'call',the first argument is an object that we want the 'this' keyword to point to, then all the arguments after the first one are the original arguments function.

//  'call' invoke a function with a specified 'this' value and takes the arguments as separate values. in this case the 'this' keyword inside the book function will set to euroWings object.

book.call(euroWings, 23, 'Sarah William');
// outputs: Sarah William booked a seat on Eurowings flight EW23

console.log(euroWings);
// outputs:
// { airline: 'Eurowings', iataCode: 'EW',bookings: [{ flight: 'EW 23', name: 'Sarah William' }]}

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'Lx',
  bookings: [],
}

book.call(swiss, 32, 'Mary Ana');
console.log(swiss);

// Apply method
// 'apply' takes the arguments of an array

const flightData = [589, 'Goerge Cooper']
book.apply(swiss, flightData);
// outputs: Goerge Cooper booked a seat on Swiss Air Lines flight Lx589

console.log(swiss);
// outputs:
// {
//   airline: 'Swiss Air Lines',
//   iataCode: 'Lx',
//   bookings: [
//     { flight: 'Lx 32', name: 'Mary Ana' },
//     { flight: 'Lx 589', name: 'Goerge Cooper' }
//   ]
// }


// using a 'call' method and spread operator to takes an arguments of an array
const flightData2 = [123, 'Muh. Sumbul']
book.call(swiss, ...flightData2);
// outputs: Muh. Sumbul booked a seat on Swiss Air Lines flight Lx123






// ===================BORDER====================== //





///////////////////////////////
// The Bind method

// call and 'Bind' method allows us to manually set 'this' keyword for any function call, but the difference is 'bind'  doesn't immediately call the function instead it returns a new function where the 'this' keyword bound so it's set to whatever value we pass into 'bind'. 

// We borrow the 'book' function with 'call' method right ?
book.call(euroWings, 23, 'Sarah William');

// with 'bind' method we create a function based on 'book' method where 'this' keyword will always be set to euroWings object
const bookEW = book.bind(euroWings);
console.log(bookEW);   // outputs: an entire book function
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// invoke the new function that bound to euroWings object
bookEW(23, 'Steven Stone');
// outputs: Steven Stone booked a seat on Eurowings flight EW23


// we can also pass multiple arguments besides a bind method and all of these arguments will also be basically set in stone. so they will be defined and the function always be called with these same arguments.

// for instance: create a function for one specific airline and specific flight number. bookEW only for flight 23.
const bookEW23 = book.bind(euroWings, 23);

// first arguments was already set (23), so all remaining function now only need the name
bookEW23('Martha Bhak')
// outputs: Martha Bhak booked a seat on Eurowings flight EW23

// what we did before specifying parts of the arguments beforehand, is actually common pattern called partial application. Partial application means that a part of the arguments of the original function are already applied/set. 'bookEW23' function it's essentially the 'book' function but with '23' already predefined.  


// With Event listener 
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++
  console.log(this.planes);
}

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// the 'this' keyword always points to the element on which that handler is attached to, inside of the eventListeners above the 'this' keyword will point to the button element and the result it will be NaN. we need 'this' keyword to point to the lufthansa object, otherwise the 'buyPlane' function will not work. we used 'bind' cause' is gonna return a new function and so 'this' keyword should be lufthansa.



// Partial application, means we can pre-set parameters using 'bind' method

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value *0.23;

console.log(addVAT(200));  // outputs: 246
console.log(addVAT(23));   // outputs: 28.29

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));  // outputs: 246
console.log(addVAT2(23));   // outputs: 28.29