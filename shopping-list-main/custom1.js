// capitalize challenge

let myString = 'developer';

let newString = myString.charAt(0).toUpperCase() + myString.slice(1);

//console.log(newString);

// math challenge

let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;



// console.log(x, y)
// console.log(sum);
// console.log(difference);
// console.log(product);
// console.log(quotient);
// console.log(remainder);

// array challenge

// challenge1 

const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.push(0);
arr.unshift(6);

// console.log(arr);


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1.slice(0, 4).concat(arr2)];


console.log(arr3, typeof arr3);

