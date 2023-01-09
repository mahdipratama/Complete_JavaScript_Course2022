'use strict';

///////////////////////////////
// Default Parameters

const bookings = [];

// Default value parameters
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {

  // ES5 default value
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }

  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
// outputs: { flightNum: 'LH123', numPassengers: 1, price: 199 }
createBooking('LH123', 2, 800);
// outputs:{ flightNum: 'LH123', numPassengers: 2, price: 800 }
createBooking('LH123', 8);
// outputs: { flightNum: 'LH123', numPassengers: 8, price: 1592 }
createBooking('LH123', 5);
// outputs: { flightNum: 'LH123', numPassengers: 5, price: 995 }

// Skipping parameters 
createBooking('LH123', undefined, 5);
// outputs: { flightNum: 'LH123', numPassengers: 1, price: 5 }





// ===================BORDER====================== //