'use strict';

// Selecting elements 
const player0EL = document.querySelector('.player--0')
const player1EL = document.querySelector('.player--')
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const bntNew = document.querySelector('.btn--new');
const bntRoll = document.querySelector('.btn--roll');
const bntHold = document.querySelector('.btn--hold');


// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');


const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
bntRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;

  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
  }

});