// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
// 3 will still show in arguments function
console.log(add(55,2,3));

// convert to an arrow function
const addFunction = (a, b) => {
    // console.log(arguments);
    return a + b;
};
// arguments is not defined because arrow functions don't use arguments
console.log(addFunction(33,4,2));

// this keyword - no longer bound with arrow functions
// the this keyword is bound only to the function it was created inside of 
// to get around this, define this as a variable and then call it


// const user = {
//   name: 'Justin',
//   cities: ['Greenville', 'Atlanta', 'Charlotte'],
//   // add method
//   printPlacesLived: function () {
  
//  // this won't work because it is bound to the printPlacesLived function only 
//     this.cities.forEach(function (city) {
//         console.log(this.name + ' has lived in ' + city);
//     });
//   }
// };

// user.printPlacesLived();

// // Recreate user function using arrow functions so that keyword this can be used
// const user = {
//     name: 'Justin',
//     cities: ['Greenville', 'Atlanta', 'Charlotte'],
//     // printPlacesLived is called a method which is a function inside of object 
//     // to define methods in ES6, you don't have to use function keyword
//     printPlacesLived() {
//         // forEach is an array method that takes a function as its only argument
//         // this refers to parent object which is user
//         this.cities.forEach( (city) => {
//             console.log(this.name + ' has lived in ' + city);
//         } );
//     }
// };

// user.printPlacesLived();

// Recreate user function using an array method with Map instead of forEach
const user = {
    name: 'Justin',
    cities: ['Greenville', 'Atlanta', 'Charlotte'],
    // printPlacesLived is called a method which is a function inside of object 
    // to define methods in ES6, you don't have to use function keyword
    printPlacesLived() {
        // map is an array method that takes a function as its only argument
        // using map lets you transform each single item in the array getting a new array 
        // the cities array is still the same 
        return this.cities.map( (city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge 

const multiplier = {
    // numbers - an array of numbers
    numbers: [5, 6, 2, 6],
    // multiplyBy - single number 
    multiplyBy: 4,
    // multiply method - returns new array where the number have been multiplied 
    multiply() {
        return this.numbers.map( (number) => this.multiplyBy * number );
    }
};

console.log(multiplier.multiply());