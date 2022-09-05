// const dolphins = (96 + 108 + 89) / 3;
// const koala = (88 + 91 + 110) / 3;
// const dolphinsAverage = Math.floor(dolphins);
// console.log(`Dolphins Averages: ${dolphinsAverage}`);

// const koalaAverage = Math.floor(koala);
// console.log(`Koala Averages: ${koalaAverage}`);
// if (dolphins > koala) {
//   console.log('The Winner is dolphins 🏆')
// } else if (koala > dolphins) {
//   console.log('The Winner is koala 🏆')
// } else if (dolphins === koala) {
//   console.log('Both win the trophy! 🏅');
// }

// // BONUS 1
// const dolphins = (97 + 112 + 101) / 3;
// const koala = (108 + 95 + 123) / 3;
// const dolphinsAverage = Math.floor(dolphins);
// console.log(`Dolphins Averages: ${dolphinsAverage}`);

// const koalaAverage = Math.floor(koala);
// console.log(`Koala Averages: ${koalaAverage}`);
// if (dolphins > koala && dolphins >= 100) {
//   console.log('The Winner is dolphins 🏆')
// } else if (koala > dolphins && koala >= 100) {
//   console.log('The Winner is koala 🏆')
// } else if (dolphins === koala) {
//   console.log('Both win the trophy! 🏅');
// }


// BONUS 2
const dolphins = (97 + 112 + 101) / 3;
const koala = (109 + 95 + 106) / 3;
const dolphinsAverage = Math.floor(dolphins);
console.log(`Dolphins Averages: ${dolphinsAverage}`);

const koalaAverage = Math.floor(koala);
console.log(`Koala Averages: ${koalaAverage}`);
if (dolphins > koala && dolphins >= 100) {
  console.log('The Winner is dolphins 🏆')
} else if (koala > dolphins && koala >= 100) {
  console.log('The Winner is koala 🏆')
} else if (dolphins === koala && dolphins >= 100 && koala >= 100) {
  console.log('Both win the trophy! 🏅');
} else {
  console.log('No one wins the trophy 😬');
}