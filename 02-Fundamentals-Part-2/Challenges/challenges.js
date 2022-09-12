'use strict'


const calcAverage = (a, b, c) => {
  const sumAverage = (a + b + c) / 3;
  const finalAverage = Number.parseFloat(sumAverage).toFixed(2);
  return finalAverage;
};


// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

let avgDolphins = calcAverage(44, 23, 71)
console.log(avgDolphins);

let avgKoalas = calcAverage(65, 54, 49)
console.log(avgKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  // return avgDolphins >= 2 * avgKoalas ? `Dolphin win (${avgDolphins} vs. ${avgKoalas})` : `Koalas win (${avgKoalas} vs. ${avgDolphins})`

  if (avgDolphins > 2 * avgKoalas) {
    return `Dolphin win (${avgDolphins} vs. ${avgKoalas})`
  } else if (avgKoalas > 2 * avgDolphins) {
    return `Koalas win (${avgDolphins} vs. ${avgKoalas})`
  } else {
    return 'No Teams win today ...'
  }
}

console.log(checkWinner(avgDolphins, avgKoalas));

// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
avgDolphins = calcAverage(85, 54, 41)
console.log(avgDolphins);

avgKoalas = calcAverage(23, 34, 27)
console.log(avgKoalas);

console.log(checkWinner(avgDolphins, avgKoalas));