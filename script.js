const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const products = ['apple', 'peach', 'watermelon', 'milk', 'chocolate'];


const sum = numbers.reduce (function (accumulator, currentValue) {
return accumulator + currentValue;

}, 0 );

const sum1 = numbers.reduce((acc, cur) => acc + cur, 10);

console.log(sum1);

// using a for loop

const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
}

console.log(sum3());

const cart = [
    { id: 1, name: 'product 1', price: 130},
    { id: 1, name: 'product 2', price: 150},
    { id: 1, name: 'product 3', price: 175},
    
];

const total = cart.reduce(function (acc, product){
    return acc + product.price
}, 0);

console.log(total);