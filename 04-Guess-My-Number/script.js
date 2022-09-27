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

let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

// Handling Click Event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  // When Player is no Input
  if (!guess) {
    document.querySelector('.message').textContent = '📛 Insert a Number!'

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number!';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔥 Too high'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🐸 You Lose !'
      document.querySelector('.score').textContent = 0;
    }

    // When guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🌊 Too Low'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🐸 You Lose !'
      document.querySelector('.score').textContent = 0;
    }
  }
});


const restart = document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

