// challenge

//function getCelsius(f) {
   // const celsius = (f - 32) * 5 / 9;
  //  return celsius;

//}

const getCelsius = (f) => (f - 32) * 5 / 9;


console.log(`the temperature is ${getCelsius(32)} \u2103`);


// challenge 2

function minMax(arr) {
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(max);

return {
    min,
    max
}
}

console.log(minMax([1, 2, 3, 4, 5]));

//challenge 3

((length, width) => {
 const area = length * width;
 
 const output = `the area of a regtangle with length of ${length} a width of ${width} is ${area}.`;
 console.log(output);
})(10, 5);

