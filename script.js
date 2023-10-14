console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 5 > 2);

// & - will return first falsy value or last value

let a;

a = 0 && 2 && 30;

console.log(a);

const posts = ['pos', 'pios'];

posts.length > 0 && console.log(posts[0]);

// || will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - returns the right side operand when left is null or undefined

let c;
c = 10 ?? 20;
c = 0 ?? 20;


console.log(c);