/*
////////////////////////////////////
// Values and Variables
let js = 'amazing';
console.log(40 + 8 + 24 - 10);

console.log('Nami');
console.log(23);

let firstName = 'Nami';
console.log(firstName);


// Variable name conventions
let nami_ludo = 'kucing';
let $function = 29;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


////////////////////////////////////
// Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 123);
// console.log(typeof 'Jonas');

javaScriptIsFun = 'YES';
console.log(javaScriptIsFun);

let year;
console.log(year); //Undefined
console.log(typeof year); //also Undefined

year = 1991; //re-assignment variable (dynamic typing)
console.log(typeof year); //now, the typeof this variable is Number

console.log(typeof null);


////////////////////////////////////
// let, const and var
let age = 30;
age = 31; //let can be re-assign

const birthYear = 1991;
//birthYear = 1920 //--causes error const can't be re-assign
//const job;

var job = 'kucing'; //outdated keyword
job = 'meong';


////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageNami = now - 1991;
const ageLudo = now - 2022;
console.log(ageNami, ageLudo);

console.log(ageNami * 2, ageNami / 10, 2 ** 3);
// 2 ** 3 means to the power of 3 = 2*2*2

const firstName = 'Nami';
const lastName = 'saputri';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageNami > ageLudo); // >, <, >=, <=
console.log(ageLudo >= 17);

const isFullAge = ageLudo >= 15;
console.log(now - 1991 > now - 2018);


////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = 'Nami';
const job = 'kucing';
const birthYear = 1998;
const year = 2037;

// Concatenation
const nami = 'I\'m ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(nami);

// Template Literals
const namiNew = `i'm ${firstName}, a ${year - birthYear} years old ${job}`
console.log(namiNew);

console.log(`just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
line
using backtick`);
*/

//////////////////////////////
// Decision: if/else Statement

/*
-----This structure below this is called an 'if', 'else' control structure
-----This structure allows us to have more control over the way that our code executed
-----
if (condition) {
  statement
} else {
  statement
}
*/

// const age = 19;

// if (age >= 18) { //Press Windows + . to create emoji
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// };

// const birthYear = 2010;

// //leave the variable below undefined,it's will reassign when our structure control executed
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

///////////////////////////////////
// Type Conversion and Coercion
/*
// Type Conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991 "1991"
console.log(Number(inputYear) + 18); // 2009

console.log(Number('Jonas')); // NaN
console.log(typeof NaN); // number

console.log(String(23), 23); // 23 23

// Type Coercion 
console.log('i am ' + 23 + ' Years old'); // I am 23 years old
console.log('23' - '10' - 3); // 10
console.log('23' / '2'); // 11.5

let n = '1' + 1; // 11
n = n - 1;
console.log(n); // 10
console.log(2 + 3 + 4 + '5'); // 95
console.log('10' - '4' - '3' - 2 + '5'); // 15


/////////////////////////////////
// Truthy and Falsy Values 
// 5 Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false 
console.log(Boolean(undefined)); // false 
console.log(Boolean('Jonas')); // true 
console.log(Boolean({})); // true 
console.log(Boolean('')); // false 

const money = 100;
if (money) {
  console.log('Don\'t spend it all');
} else {
  console.log('You should get a job!');
} // 'Don't spend it all'

let height = 0;
if (height) {
  console.log('Yay! height is defined');
} else {
  console.log('Height is UNDEFINED');
} // 'Height is UNDEFINED' 

*/


/////////////////////////
// Quality Operators: == vs ===

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict operator)');

// if (age == 18) console.log('You just became an adult :D (loose operator)');

// const favorite = Number(prompt('What\'s your favorite number ?', '23'));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//   console.log('7 is also a cool number');
// } else if (favorite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7 or 9');
// }

// if (favorite !== 23) console.log('What about 23?'); 



/////////////////////////
// The Switch Statement

// const day = 'monday';
// switch (day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to Coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code example');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// using If/else  
const day = 'friday';

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day!');
}