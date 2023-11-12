// function add(a, b) {
//     return a + b;
// }



const add = (a, b) => {
    return a + b;
 };


 // implicit return
 const subtract = (a, b) => a - b;

 const double = (a) => a * 2;

// returning an object

const createObj = () => ({
    name: 'brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => console.log(n));


console.log(subtract(1, 2));
console.log(createObj());
console.log(double(20));