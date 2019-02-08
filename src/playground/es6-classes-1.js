
// REACT CLASSES

// create a class for people
class Person {
    // define the class attributes. set up default string '' if there is no name
    constructor(name = 'Anonymous', age = 0) {
        // this refers to the class instance
        this.name = name;
        this.age = age;
    }
    // name we pick instead of using built in constructor which gets called with keyword new
    // this constructor will run only if we explicitly call it 
    getGreeting(){
        // function body
        // return 'Hi. I am' + this.name + '!';
        // can actually inject a value into this string
        return `Hi. I am ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// create a subclass for person which inherits from Person
class Student extends Person {
    // setup constructor to take additional major attribute by overriding the original constructor function
    constructor(name, age, major){
        // so you don't have to redfine the same properties over , use keyword super
        // super calls parent constructor function
        super(name, age); 
        this.major = major;
    }
    // setup method for students
    hasMajor() {
        return !!this.major; 
    }
    // override parent method getDescription
    getDescription(){
        let description = super.getDescription();
        // check if the user has a major and then if they do add some data
        if (this.hasMajor()) {
            // add something to the message
            description += `Their major is ${this.major}`;
        }

        return description;
    }
}

// create new subclass of Person (Traveler). 
// Add Support for homeLocation
// Override getGreeting - if homeLocation include it in message . if not stick with parent function
class Traveler extends Student {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I was born in ${this.homeLocation}`;
        }
        return greeting;
    }

}


// create an instance of person
const me = new Student('Justin Brooks', 24, 'Computer Engineering');

console.log(me.getDescription());

const other = new Traveler('Corey Adams', 22, 'Simpsonville')

console.log(other.getGreeting());