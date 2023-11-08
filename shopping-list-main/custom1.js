let x;

const arr = [23, 34, 444, 55, 67, 12];

// arr.push(100);

// arr.pop();

// arr.unshift(123);

// arr.shift();

// arr.reverse();

x = arr.includes(12); // logs true;

x = arr.indexOf(340);

x = arr.slice(1, 4);

// x = arr.splice(0, 2);

// x = arr.splice (2, 1);

x = arr.slice(1, 4).reverse().toString().charAt(0).toUpperCase();


console.log(x);