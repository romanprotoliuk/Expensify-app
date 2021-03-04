
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
       return `Hi. I am ${ this.name }. I am ${ this.age } years old`;
    }
    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major; 
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is  ${this.major}.`; // description = description + their major is ..
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}


const me = new Traveler('Andrew Mead', 26, 'Los Angeles');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());