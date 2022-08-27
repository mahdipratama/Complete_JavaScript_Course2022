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
*/

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

const isFullAge = ageLudo >= 17;
