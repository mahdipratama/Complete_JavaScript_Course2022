'use strict'

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');
console.log(hasDriversLicense)

// // this reserved below will cause error silently if we not use strict Mode
// const interface = 'Audio';
// const private = '333'