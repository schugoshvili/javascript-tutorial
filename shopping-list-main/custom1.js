// function calculator(num1, num2, op) {
//     if (op === '+') {
//         return num1 + num2;
//     } else if (op === '-') {
//         return num1 - num2;
//     } else if (op === '/') {
//         return num1 / num2;
//     } else if (op === '*') {
//         return num1 * num2;
//     } else {
//         return 'error here'
//     }
// }

// let result = calculator(1723384, 13, '*');

// console.log(result);

function calculator(num1, num2, op) {
    switch (op) {
        case '+': 
        console.log(num1 + num2); break;
        case '-': 
        console.log(num1 - num2); break;
        case '*': 
        console.log(num1 * num2); break;
        case '/': 
        console.log(num1 / num2); break;
        default: 
        console.log('error');
    }
};

calculator (4, 2, '/')