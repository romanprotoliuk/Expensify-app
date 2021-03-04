//
//  Object Destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const { name, age } = person
// console.log(`${name} is ${age}`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     } 
// }

// const { name: publisherName = 'Self-Published' } = book.publisher


// console.log(publisherName)

//
// Array Destructuring 
//

const address = ['1299 S Junior Street', 'Philadelphia', 'Pennsylvania', '19147']
const [, city, state] = address
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [coffee, small, medium, large] = item
console.log(`A medium ${coffee} costs ${medium}`)
