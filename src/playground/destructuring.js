// const person = {
//     name: 'Andrew',
//     age: 26, 
//     location: {
//         city: 'Philadelphia',
//         temp: 31
//     }
// };

// const { name, age } = person;
// // const name = person.name;
// // const age = person.age;

// const {city, temp} = person.location;
// if(city && temp) {
//     console.log(`${temp} in ${city}`)
// }

// console.log(`${name} is ${age}`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Halliday',
    publisher: {
        //name: 'Penguin'
    }
};

const { name: publisherName = 'self published' } = book.publisher;

console.log(publisherName);


// ES6 Array Destructuring
const address = ['1299 S Juniper St', 
   'Philadelphia', 'Pennsylvania', '19147'];
const [, city, , postcode] = address;
console.log(`You are in ${city}, ${postcode}`)



const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [order, , medium] = item;
console.log(`A medium ${order} costs ${medium}`);