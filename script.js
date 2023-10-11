// arrow functions

//function add(a, b) {
  //  return a + b;
//}

const add = (a, b) => { 
    return a + b;
};

// implicit return

const subtract = (a, b) => a - b;

console.log(add(10, 2));
console.log(subtract(10, 2));

// can leave off {} with a single param

const double = a => a * 2;

// returning an object

const createObj = () => ({
    name: 'brad'
});

const numbers = [ 1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n);

});
// arrow function in a callback

numbers.forEach(n => console.log(n));


console.log(double(10));
console.log(createObj());