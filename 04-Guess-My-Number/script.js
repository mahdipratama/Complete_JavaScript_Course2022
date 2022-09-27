'use strict';

/*
// Selecting and Manipulating Elements

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🏆 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value = 23);
*/


// Handling Click Event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '📛 Insert a Number!'
  }
})