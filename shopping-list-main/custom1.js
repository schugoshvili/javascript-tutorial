const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;

// }, 0);

const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum2);

// using a forLoop 

const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
};

console.log(sum3());

const cart = [
    {id: 1, name: 'prod 1', price: 120},
    {id: 2, name: 'prod 2', price: 556},
    {id: 3, name: 'prod 3', price: 223},
];

const sumcart = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log(sumcart);