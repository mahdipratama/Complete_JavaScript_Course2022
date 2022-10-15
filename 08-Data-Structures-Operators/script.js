'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//======================//
// Enhanced Object Literals //
//======================//
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 22,
  },
  [weekdays[5]]: {
    open: 0, // open 24 hours
    close: 12 + 12,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // ES6 method
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // old-school method
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

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3} `);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};


//======================//
// Sets//
//======================//
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Nami'));

console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true  
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (let order of ordersSet) console.log(order);


// Example 
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('NamiSaputri').size);


/* 
//======================//
// Looping Objects: Objects Keys, Values, and Entries//
//======================//
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

// Property VALUES 
const values = Object.values(openingHours);
console.log(values);

// Entire OBJECT
const entries = Object.entries(openingHours);
console.log(entries);

// [Key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
};



//======================//
// Optional Chaining (?.)//
//======================//
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example 
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day} we open at ${open}`);
}

// Methods 
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays 
const users = [
  {
    name: 'jonas ',
    email: 'hello@jonas.com'
  }
];

console.log(users[0]?.name ?? 'User Array empty');

// without ?. 
if (users.length > 0) console.log(users[0].name); else console.log('User array empty');


//======================//
// Looping Arrays: The for-of Loop //
//======================//
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // i = index, el = elements/value
}

// console.log(([...menu.entries()]));



//======================//
// Logical Assignment Operators //
//======================//

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giorno Giovanna',
};

// OR assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10; // 0
rest2.numGuests ??= 10; // 10

// AND assignment operator 
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);




//======================//
// The Nullish Coalescing Operator (??) //
//======================//

restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);




//======================//
// Short Circuiting (&& and ||) // 
//======================//
console.log('=======OR========');

console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello', cuz 'Hello' is the truthy value in this chain of OR operations


restaurant.numGuest = 0;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1); // 10, cuz restaurant.numGuest is doesn't exist (undefined) at the restaurant objects and so therefore 10 will be the result


const guest2 = restaurant.numGuest || 10;
console.log(guest2); // 10

console.log('=======AND========');

console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // 'Jonas'

console.log('Hello' && 23 && null && 'Jonas'); // null

// Practical Example 
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'sausage', 'spinach', 'tomato')
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


