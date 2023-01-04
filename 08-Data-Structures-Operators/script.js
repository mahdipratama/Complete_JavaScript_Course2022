'use strict';

// Compute property name
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri',
  'sat', 'sun'];


const openingHours = {
  // compute the weekdays properties name into an object
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
}


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  // old Ways
  // openingHours: openingHours,

  // Properties value short-hand
  openingHours,


  // ES6 Method Definition Shorthand
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // write a method properties with definition short-hand
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  ///////////////////////////////
  orderDelivery: function ({   //
    starterIndex = 0,          //
    mainIndex = 0,             //
    time = '23:00',            //
    address,                   //
  }) {                         //
    console.log(               //
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );                         //
  },///////////////////////////// 

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIng, ...othersIng) {
    // console.log(mainIng);
    // console.log(othersIng);

    if (othersIng.length === 0) {
      console.log(`Your Pizza with ${mainIng} main topping `);
    } else {
      console.log(`Your Pizza with ${mainIng} main topping and ${othersIng} plus topping`);
    }

  }
};
///////////////////////////////
// Maps: Iteration

// Create a map from scratch without set method
const question = new Map([
  ['question', 'what is the best programming language in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try Again!'],
])

console.log(question);
// outputs:
// Map(7) {
//   'question' => 'what is the best programming language in the world ?',
//   1 => 'C',
//   2 => 'Java',
//   3 => 'JavaScript',
//   'correct' => 3,
//   true => 'Correct!',
//   false => 'Try Again!'
// }


// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


// Quiz app
console.log(question.get('question'));

// loop through from maps
for (let [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3
console.log(answer);

// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

console.log(question.get(answer === question.get('correct')));


// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
// console.log(question.entries());






// ===================BORDER====================== //






/*
///////////////////////////////
// Maps: Fundamentals

// In maps, the keys can have any type, could be an objects, arrays, or other maps.
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'));

// Calling the set method returns the updated map.
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

// get method to read data from map
console.log(rest.get('name'));   //outputs: Classico Italiano
console.log(rest.get(true));     //outputs: we are open
console.log(rest.get(1));        //outputs: Firenze, Italy

console.log(rest);
// outputs:
// Map(8) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenze, Italy',
//   2 => 'Lisbon, Portugal',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 23,
//   true => 'we are open',
//   false => 'we are closed'
// }

// Example expression of boolean as keys
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))
//outputs: We are open

// Check a properties
console.log(rest.has('categories'));  // outputs: true

// Deleting properties
rest.delete(2);
console.log(rest);
// outputs:
// Map(7) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenze, Italy',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 23,
//   true => 'we are open',
//   false => 'we are closed'
// }

console.log(rest.size);           // outputs: 7

// Deleting entire rest
rest.clear();
console.log(rest);                // outputs: Map(0) {size: 0}

// Arrays as a keys
rest.set([1, 2], 'Test')
console.log(rest);
// outputs: Map(1) { [ 1, 2 ] => 'Test' }

console.log(rest.get([1, 2]))
// outputs: undefined (because is that two arrays are actually not the same object in the heap)

// to make it works
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
// outputs: 'Test'

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
// outputs: Map(3) {Array(2) => 'Test', Array(2) => 'Test', h1 => 'Heading'}
// key: h1
// value: "Heading"






// ===================BORDER====================== //







///////////////////////////////
// Sets

// Sets can't have any duplicates
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]);

console.log(ordersSet);
// outputs: set(3) {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Jonas'));
// outputs: Set(5) {'J', 'o', 'n', 'a', 's'}


// To check how many different meals to cook
console.log(ordersSet.size);      // outputs: 3



// 'has.' is a method to check if a certain elements is in a set.
console.log(ordersSet.has('Pizza'));  // outputs: true
console.log(ordersSet.has('Bread'));  // outputs: false

// the sets has to be unique
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);
// outputs: Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}

// to clear a sets
// ordersSet.clear();
console.log(ordersSet);
// outputs: Set(0) {size: 0}


// sets also iterable
for (let order of ordersSet) console.log(order);
// outputs: Pasta, Pizza, Garlic Bread


// Example convert an array into sets
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// to make it the values pack to an array, wrap it with bracket notation and spread.
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// outputs: (3) ['Waiter', 'Chef', 'Manager']

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);  // outputs: 3


console.log(new Set('NamiSunami').size); // outputs: 7






// ===================BORDER====================== //







///////////////////////////////
// Looping Objects: Object Keys, values, and Entries


// Looping over an object keys (Property NAMES)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length}
days: `;

for (let day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);


// Looping over an object (Property VALUES)
const values = Object.values(openingHours);
console.log(values);


// Looping over The entire object (NAMES AND VALUES)
const entries = Object.entries(openingHours);
// console.log(entries);


for (let [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}





// ===================BORDER====================== //






///////////////////////////////
// Optional Chaining (?.)

// it would not return anything, invisible bug
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH Optional Chaining, operator accesses an object's property or calls a function. if the object accessed or function called is 'undefined or 'null', it returns 'undefined' instead of throwing an error like expression above (line 84.)
console.log(restaurant.openingHours.mon?.open); // Undefined
console.log(restaurant.openingHours?.mon?.open); // Undefined


const days = ['mon', 'tue', 'wed', 'thu', 'fri',
  'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
// Check if method exist
console.log(restaurant.order?.(0, 1) ?? 'method doesn\'t exist');          // ['Focaccia', 'Pasta']

console.log(restaurant.orderRisotto?.(0, 1) ?? 'method doesn\'t exist'); // Method doesn't exist

// Arrays
const user = [{ name: 'Nami', email: 'namiCantik@gmail.com' }];
// const user = [];

// old ways
if (user.length > 0) {
  console.log(user[0].name);
} else {
  console.log('user array empty');
}

// with optional chaining ES6
console.log(user[0]?.name ?? 'user array empty');  // Nami



// ===================BORDER====================== //







///////////////////////////////
// Enhanced Object Literals

note:
* Enhanced object literals

Property values shorthand:
  - let say, we got another object then we want put them into another object, we can write the copyObject name inside to the targetObject. in above we modify the restaurant object so its no longer contain 'openingHours' properties anymore
  (line 32.). we can enhanced the copyObject (line 8.) to the targetObject (restaurant) by writing the copyObject name (line 35.)

Method definition shorthand:
  - To define a method in an object literal in a shorter way
  by omitting the 'function' keyword and ':' (line 40.)


Computed property names:
  - to specify a computed property name
  we have an array contains the 'days' expression (line 3.)
  and we use them to specify a computed property names in an object (line 9.)






// ===================BORDER====================== //






///////////////////////////////
// Logical Assignment Operators

// For Of loop
const menu = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu
];

for (const item of menu) console.log(item);

// 'entries()' method we can returns an iterator
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());





// ===================BORDER====================== //






///////////////////////////////
// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Giorno',
  owner: 'Giorno Giovanna',
};

// OR || assignment operator
// Basic Statement
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Short version statement
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment Operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// rest2.owner = rest2.owner && '<ANONYMOUS';
// rest1.owner = rest1.owner && '<ANONYMOUS';

rest1.owner &&= '<ANONYMOUS';
rest2.owner &&= '<ANONYMOUS';

console.log(rest1);
console.log(rest2);




// ===================BORDER====================== //






///////////////////////////////
// Nullish Coalescing Operator (??)

restaurant.numGuests = 0;

// Using SHORT-CIRCUITING ||
const guest = restaurant.numGuests || 10;
console.log(guest);

// Using Nullish Coalescing ??: is gonna check whether value is nullish or falsy. this operator works with the idea of nullish values (null and undefined) instead of falsy values. 0 and '' (empty string) is doesn't include so this operator will assume the 0 and '' (empty string) is valuable. and if the numGuests is undefined then the default value would executed and return (10).
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);




// ===================BORDER====================== //






///////////////////////////////
// Short Circuiting (&& and ||)

console.log('=== OR operator ===');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);

// if both value is falsie, then the last value will be the result
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// Check if any guest inside the object, if it doesn't exist default value will return
const guest1 =
  restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// use SHORT-CIRCUITING || : if the numGuests its undefined then it will return 10 as default value. because short-circuiting is checking whether the first value is 'truthy' value or 'falsie'  value. in this case numGuests is undefined which means it's a falsie value. then, the evaluation continues and check the value. 10 is first truthy value so 10 will be the result. is a way easier method of setting default values.
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('=== AND operator ===');
// AND operator short-circuiting work when the first value is falsie then it will be the result
console.log(0 && 'Jonas'); // 0
// both truthy, last value will be a result
console.log(7 && 'Jonas'); // Jonas

console.log('hello' && 23 && null && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderLasagna && restaurant.orderLasagna('avocado', 'sausage');





// ===================BORDER====================== //






///////////////////////////////
// Rest pattern and Parameters


// 1). DESTRUCTURING

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on lEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// the REST element, must be last element
const [main1, , main2, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(main1, main2, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);



// 2). FUNCTION

// REST as Parameters
const add = function (...numbers) {
  let sum = 1;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 3, 4, 5, 2, 3);

const x = [23, 5, 7];
// SPREAD as arguments
add(...x);


// ORDER PIZZA
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');




// ===================BORDER====================== //





///////////////////////////////
// Spread Operators (...)


// Bad ways X
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr);

// Good ways (Spread operators)
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

// this array is completely new
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];


// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterable: arrays, strings, maps, sets. NOT objects
const str = 'Nami';
const letters = [...str, '', 'S.'];
const letters1 = [...str];
console.log(letters);
console.log(letters1);

// pass an argument as a spread operator (real-world example)
const ingredients = [
  // prompt('Let\'s make pasta! ingredient 1 ?'),
  // prompt('ingredient 2 ?'),
  // prompt('ingredient 3 ?')
];
console.log(ingredients);

// bad ways
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// good ways (spread operator)
restaurant.orderPasta(...ingredients);


// Spread an Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giorgino' }
console.log(newRestaurant);

// Only copying the surface not DEEP CLONE
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
// restaurantCopy.mainMenu.push('Meatballs');
console.log(restaurantCopy.name);
console.log(restaurant.name);
console.log(restaurantCopy.mainMenu);
console.log(restaurant.mainMenu);

// a function to copying object more deeply an will not effect to the originals object
const deepCloneObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

const restaurantCopy1 = deepCloneObj(restaurant);
restaurantCopy1.mainMenu.push('Meatballs');

console.log(restaurantCopy1.mainMenu);
console.log(restaurant.mainMenu);




// ===================BORDER====================== //




///////////////////////////////
// Destructuring an Objects

// As an arguments
//////////////////////////////////
restaurant.orderDelivery({      //
  time: '22:30',                //
  address: 'Via del sole, 21',  //
  mainIndex: 2,                 //
  starterIndex: 2,              //
});                             //
//////////////////////////////////

restaurant.orderDelivery({
  address: 'Via del sole, 25',
  starterIndex: 3,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Give a new variables names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Destructuring with default value and changes the variables names
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);



// ===================BORDER====================== //



///////////////////////////////
// Destructuring an Array

// Old ways
const arr = [1, 2, 3];
const a = arr[0]
const b = arr[1]
const c = arr[2]

// Destructuring assignment (unpacking an array)
const [e, f, g] = arr;
console.log(e, f, g); // 1 2 3

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


// // Switching variables (old ways)
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);


// Switching variables (ES 6 destructuring)
[main, secondary] = [secondary, main];
console.log(main, secondary);


// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);


// Nested array destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// rest syntax
const numbers = [1, 2, 3, 4, 5]
const [s, t, ...rest] = numbers;
console.log(s, t, rest);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r);
*/


// ===================BORDER====================== //
