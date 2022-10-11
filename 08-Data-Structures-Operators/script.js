'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 22,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3} `);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    // console.log(otherIng);
  },
};

//======================//
// Rest Pattern and Parameters // 
//======================//

// ======= 1).Destructuring ===========

// SPREAD, because on RIGHT  side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// =======2). Function ==========
const add = function (...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log(sum);
};

add(2, 3);
add(3, 5, 6, 7);
add(8, 4, 3, 5, 7, 8, 3);

const x = [23, 5, 7];
add(...x);


const mainIng = prompt('one main ingredients ?', 'garlic');
const otherIng = [prompt('other ingredients ?', 'onion')];

restaurant.orderPizza(mainIng);
restaurant.orderPizza(otherIng);

//======================//
// The Spread Operator // 
//======================//
/* 
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// Spread Operator
const goodNewArr = [1, 2, ...arr];
console.log(badNewArr, goodNewArr);

console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array 
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterable: arrays, strings, maps, sets. NOT Objects
const str = 'Jonas';
const letters = [...str, '', 's.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // error

// real-world example
const ingredients = [
  // prompt('Let\'s make pasta! Ingredient 1 ? '),
  // prompt('Ingredient 2 ? '),
  // prompt('Ingredient 3')
]

console.log(ingredients);
// Oldies way 
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// Spread way ES6
restaurant.orderPasta(...ingredients);

// Objects 
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Vito',
};

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//======================//
// Destructuring Objects // 
//======================//

restaurant.orderDelivery({
  time: '22:30',
  address: 'Jl.Bintan',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Saint petersburg, 09',
  starterIndex: 0,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 112;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


//======================//
// Destructuring Arrays // 
//======================//

const arr = [2, 3, 4];
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z] = arr;
console.log(x, y, z);

const kucing = ['nami', 'ludo', 'luna'];
const [c1, c2, c3] = kucing;
console.log(c1, c2, c3);

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

let [main, , course] = restaurant.categories; // skip elements in the middle
console.log(main, course); // Italian Vegetarian


// Switching variables 

// //-oldies way
// const temp = main;
// main = course;
// course = temp;
// console.log(main, course); 

//-Destructuring 
[main, course] = [course, main];
console.log(main, main);


// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza


// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2, 5, 6


// Default values 
const [p = 1, q = 1, r = 1,] = [8, 9];
console.log(p, q, r); // 8, 9, 1
*/


