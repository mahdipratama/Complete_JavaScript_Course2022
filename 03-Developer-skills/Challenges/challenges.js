// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days ? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC 
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and eng of string 
// - Log string to console

const printForecast = function (arr) {
  str = '';
  for (let temp of arr) {
    str += `${temp}ºC in ${temp + 1} days..`
  }
  console.log('...' + str);
}

const temp1 = [12, 2, 3, 4]
const temp2 = [12, 5, -5, 0, 4];


printForecast(temp2);