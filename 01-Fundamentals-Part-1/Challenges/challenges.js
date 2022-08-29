// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall
// Mark
let markMass = 78; //78
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;
const isRataMark = Math.floor(markBMI)
console.log(`Mark BMI: ${isRataMark}`);

// John
let johnMass = 92;
const johnHeight = 1.85
const johnBMI = johnMass / johnHeight ** 2;
const isRataJohn = Math.floor(johnBMI)
console.log(`John BMI: ${isRataJohn}`);

console.log(`Is Mark has a higher BMI than John? 
Answer: `)
const higherBMI = isRataMark > isRataJohn;

//TEST DATA 2:  Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
//Mark
// let markMass = 95; //78
// const markHeight = 1.88; //1.69
// const markBMI = markMass / markHeight ** 2;
// const isRataMark = Math.floor(markBMI)
// console.log(`Mark BMI: ${isRataMark}`);

// // John
// let johnMass = 85; //92
// const johnHeight = 1.76 //1.85
// const johnBMI = johnMass / johnHeight ** 2;
// const isRataJohn = Math.floor(johnBMI)
// console.log(`John BMI: ${isRataJohn}`);

// console.log(`Is Mark has a higher BMI than John? 
// Answer: `)
// const higherBMI = isRataMark > isRataJohn;
// console.log(higherBMI);

// let isRata = [markBMI, johnBMI];
// console.log(isRata);
// console.log(bulat);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${isRataMark}) is higher than John's BMI (${isRataJohn})`);
} else {
  console.log(`John's BMI (${isRataJohn}) is higher than Mark's (${isRataMark})`);
};