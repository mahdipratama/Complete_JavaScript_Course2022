'use strict';

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
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
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

    // console.log(`Your Pizza with main topping ${mainIng} ${othersIng}`);

  }
};


///////////////////////////////
// Nullish Coalescing Operator (??)= = 

restaurant.numGuests = 0;

// Using SHORT-CIRCUITING ||
const guest = restaurant.numGuests || 10;
console.log(guest);

// Using Nullish Coalescing ??: is gonna check whether value is nullish or falsy. this operator works with the idea of nullish values (null and undefined) instead of falsy values. 0 and '' (empty string) it's doesn't include so this operator will assume the 0 and '' (empty string) is the valuable. and if the numGuests is undefined then the default value would executed and return (10).  
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);





// ===================BORDER====================== //





/*
///////////////////////////////
// Short Circuiting (&& and ||) = =

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
// Rest pattern and Parameters = = =


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
// Spread Operators (...) = = =


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
// Destructuring an Objects = = =

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
// Destructuring an Array = = =

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

// Destructuring an Array = = =

// ===================BORDER====================== //
