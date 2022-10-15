const game = {
  club1: 'Bayern Munich',
  club2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2020',
  odds: {
    club1: 1.33,
    x: 3.25,
    club2: 6.5,
  },
};

// Coding CHALLENGE #1 
console.log('======Coding CHALLENGE #1========');
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. 
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...pencetakGol) {
  console.log(pencetakGol);
  console.log(`${pencetakGol.length} goals were scored`);
};


// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7. 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


// Coding CHALLENGE #2
console.log('======Coding CHALLENGE #2========');

// 1.
for (let [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
};

// 2.
const odds = Object.values(game.odds);
console.log(odds);

let average = 0
for (let num of odds) {
  average += num / odds.length;
}
console.log(average);

// 3. 

for (let [club, odd] of Object.entries(game.odds)) {
  const teamStr = club === 'x' ? 'draw' : `victory ${game[club]}`
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 4. 
const scorers = {};
for (let player of game.scored) {
  // scorers[player] ? scorers[player]++ : (scorers[player] = 1);

  if (scorers[player]) {
    scorers[player]++
  } else {
    (scorers[player] = 1)
  }

  /*
  if (player who scored exist) {
    player name increment by 1 
  } else {
    player scored = 1
  }
  */
};

console.log(scorers);


const scorers1 = {};
const myArr = game.scored
for (let i = 0; i < myArr.length; i++) {
  // console.log(myArr[i]);
  if (scorers1[myArr[i]]) {
    scorers1[myArr[i]]++
  } else {
    (scorers1[myArr[i]] = 1)
  }
}

console.log(scorers1);

// let myArray = ["one", "two", "three", "four"];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }