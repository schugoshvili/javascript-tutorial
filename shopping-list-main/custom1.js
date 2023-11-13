console.log(10 > 20 && 3 > 15);
console.log(10 > 20 || 30 > 15);

// && will return first falsy value or the last value;
let a;
a = 10 && 20;
a = 10 && 20 && 0 && 40;

console.log(a);

const posts = [];

posts.length > 0 && console.log(posts[0]);

// || will return the first truthy value or the last value

let b;

b = 10 || 400;
b = '' || undefined;


console.log(b);

// ?? - returns the right side operand when the left ins null or undefined

let c;

c = 12 ?? 40 ?? 80;

console.log(c);