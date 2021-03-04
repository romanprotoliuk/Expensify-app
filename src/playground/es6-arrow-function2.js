// arguments object - no longer bound with arrow fucntions 

// const add = (a, b) => {
//     console.log(arguments)
//     return a + b;
// }

// console.log(add(55, 1));


// this keyword - no longer bound

const user = {
    name: 'Roman',
    cities: ['La', 'New York', 'Dublin'],
    printPlacesLived() {
        // map cna transform each item
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }
};
console.log(multiplier.multiply());