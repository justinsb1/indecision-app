// var can have a issue where it won't give an error if it was already defined previously

var nameVar = 'Andrew';
console.log('nameVar', nameVar);

// can reassign the let value but you can't define it again
let nameLet = 'Brian';
console.log('nameLet', nameLet);

// cannot redefine const just like let  AND cannot reassign. Use this as a default value
const nameConst = 'Rodrick';
console.log('nameConst', nameConst);

// var based variables are function scoped which mean each var is specific to the function it was created in and cannot be accessed outside the function
function getPetName() {
    var petName = 'Hal';
    return petName;
} 

// must create another variable so it can be accessed by the global scope
var petName = getPetName();
console.log(petName);

// let and const are also function scoped

// var is not block scoped which means it can be defined inside curly braces {} and accessed anywhere
var fullName = 'Justin Brooks';

// if fullName exists the create an array for firstName which splits the firstName string by a space
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

// let and const ARE blocked scoped which means if defined inside curly braces, then can't be accessed by global scope
var fullName = 'Jakari Brooks';
let lastName;

if (fullName) {
    lastName = fullName.split(' ')[1];
    console.log(lastName);
}

console.log(lastName);

// const doesn't let you change the variable
// use let to let you reassign 