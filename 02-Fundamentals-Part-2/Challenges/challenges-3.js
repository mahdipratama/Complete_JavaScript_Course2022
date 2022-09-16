'use strict'


const markMiller = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.avgBMI = this.mass / this.height ** 2;
    this.finalBMI = Number.parseFloat(this.avgBMI).toFixed(1);
    return this.finalBMI;
  }
};

markMiller.calcBMI();
console.log(markMiller.finalBMI);

const johnSmith = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.avgBMI = this.mass / this.height ** 2;
    this.finalBMI = Number.parseFloat(this.avgBMI).toFixed(1);
    return this.finalBMI;
  }
};

johnSmith.calcBMI();
console.log(johnSmith.finalBMI);

const getSummary = function () {
  if (markMiller.finalBMI > johnSmith.finalBMI) {
    return `${markMiller.firstName}'s BMI (${markMiller.finalBMI}) is higher than ${johnSmith.firstName}'s (${johnSmith.finalBMI}) BMI`
  } else {
    return `${johnSmith.firstName}'s BMI (${johnSmith.finalBMI}) is higher than ${markMiller.firstName}'s (${markMiller.finalBMI}) BMI`
  }
}

console.log(getSummary());