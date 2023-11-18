function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// Example usage:
var num1 = 8;
console.log(num1 + " is " + checkEvenOrOdd(num1));

var num2 = 15;
console.log(num2 + " is " + checkEvenOrOdd(num2));
