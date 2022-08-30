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