const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNum = numbers.reduce((numbers) => numbers % 2 === 0);

console.log(newNum);











// Sum of even numbers (2 + 4 + 6 + 8 + 10)
console.log(sumOfEvenNumbers(numbers)); // Output should be 30
