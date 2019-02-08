// create a variable for user name
const userName = 'Mike';

// create a variable for user age
const userAge = 27;

// create a variable for user location
const userLocation = 'South Carolina';

// create an object instead
const user = {
    name:  'Justin',
    age: 27,
    location: 'South Carolina' 
};

// create a conditional function that takes in location property as an argument
function getLocation(location) {
    if (location) {
        return <p> Location: {location} </p>;
    } else {
        // undefined is explicitly returned 
        return undefined;
    }
}

// Create a templateTWo var JSX expression
// div
// h1 -> Name
// p -> Age
// p -> call getLocation function and pass in user.location 
// render it
// ternary operator goes the codition if true then value if not other value ( user.name ? user.name : 'Anonymous'). Is used where you want to do one of two things
// undefined, booleans, and null is ignored by JSX
// using the logical && operator (if the first value is true then use the second value). condition to do one thing or nothing at all
const templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
        { (user.age && user.age >= 18) && <p> Age: {user.age} </p> }
        { getLocation(user.location) }
    </div>
);