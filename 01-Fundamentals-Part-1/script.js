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
*/

////////////////////////////////////
// let, const and var
let age = 30;
age = 31; //let can be re-assign

const birthYear = 1991;
//birthYear = 1920 //--causes error const can't be re-assign
//const job;

var job = 'kucing'; //outdated keyword
job = 'meong';
