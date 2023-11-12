// challenge 1 

function getCelsius(fheit) {
    return (fheit - 32) * 5 / 9;
};

console.log(`the temperature is ${getCelsius(32)}\xB0C`);

// challenge 2 

function minMax(arr) {
    const min = Math.max(...arr);
    const max = Math.min(...arr);
    return {min, max};
};

console.log(minMax([1, 2, 3, 0, 4, 8, 5, 6]));

// challenge 3 

((length, width) => { 
    const area = length * width;

    const result = `the area of a rectangle with length of ${length}
     and a width of ${width} is ${area}`;
    alert(result); // Add this line to log the result
})(2, 4);

