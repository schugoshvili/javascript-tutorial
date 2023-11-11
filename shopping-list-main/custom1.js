// challenge 1

// const F2C = function(FH) {
//     return (FH - 32) * 5/9;
// };

const F2C = FH => (FH - 32) * 5/9;

console.log(F2C(0) + '\xB0');

// challenge 2

const numbers = [1, 2, 3, 4, 5];

const minMax = () => ({
    min: Math.min(...numbers),
    max: Math.max(...numbers)
});

console.log(minMax());

// challenge 3

(function(width, length) {
    console.log(`The area of a rectangle with width of ${width} 
    and length of ${length} is ${width * length}`);
})(5, 10);

