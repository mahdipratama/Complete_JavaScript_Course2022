const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];

let tips = [];
let totals = [];

// Using For Loops
for (let i = 0; i < bills.length; i++) {
  const sum = calcTip(bills[i]);
  tips.push(sum);
  const total = sum + bills[i];
  totals.push(sum + bills[i]);
}

// // Using For..Of Loops
// for (let sum of bills) {
//   const perc = calcTip(sum);
//   tips.push(perc);
//   totals.push(perc + sum)
// }

console.log(bills, tips, totals);

const calcAverage = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));