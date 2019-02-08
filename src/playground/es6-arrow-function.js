// // create a function that squares a number
// // can name regular functions such as function square(x){} 
// const square = function (x) {
//     return x * x;
// };

// console.log(square(8));

// /*
// // create same function using arrow functions
// // to name an arrowFunction, must use variable
// const squareArrow = (x) => {
//     return x * x;
// };
// */

// // recreate squareArrow using arrowFunction express syntax can only be used if returning a single expression
// // dont have to explicitly define return
// const squareArrowShort = (x) => x * x; 

// console.log(squareArrowShort(5));

// Challenge - use arrow functions 
// Recreate getFirstName function using regualar arrow function and express arrow function
const fullName = 'Justin Brooks';
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName(fullName));


// using arrow function express syntax
const fullNameExpress = 'Corey Adams';

const getFirstNameExpress = (fullNameExpress) => fullNameExpress.split(' ')[0];

console.log(getFirstNameExpress(fullNameExpress));



