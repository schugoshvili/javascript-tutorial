let x;

const fruits = ['apple', 'orange', 'pear'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits;

x = fruits.concat(berries);

x = [...fruits, ...berries];

// flatten

const arr1 = [1, 2, [3, 4], 5, [6, 7], 8];

arr2 = arr1.flat();

x = Array.isArray(fruits);

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);