//Basic Array Iteration:

const myArray = [1, 2, 3, 4, 5];

myArray.forEach(function(item) {
    console.log(item);
});

//Array Iteration with Arrow Function:

const myArray1 = [1, 2, 3, 4, 5];

myArray.forEach(item => {
    console.log(item);
});

//Iterating through an Object's Properties:

const myObject = { name: "John", age: 30, city: "New York" };

for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}

//Iterating through an Object using Object.keys:

const myObject = { name: "John", age: 30, city: "New York" };

Object.keys(myObject).forEach(key => {
    console.log(`${key}: ${myObject[key]}`);
});

// Iterating through an Array of Objects:
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

people.forEach(person => {
    console.log(`${person.name} is ${person.age} years old.`);
});


//Iterating with map (returns a new array):

javascript
Copy code
const myArray3 = [1, 2, 3, 4, 5];

const doubledArray = myArray.map(item => item * 2);
console.log(doubledArray);