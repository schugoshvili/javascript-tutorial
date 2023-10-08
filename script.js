let x;

const name = 'john';
const age = 31;

x = 'Hello, my name is ' + name + 'and i am ' + age + ' years old';

//Template literals

x = `Hello, my name is ${name} and i am ${age} years old`

// string properties and methods

const s = String('hello world');

x = typeof s;

x = s.length;

// access value by key
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(1);
x = s.indexOf('o');
x = s.substring(1, 5);
x = s.substring(7);
x = s.slice(-11, -6);

x = '                hello world';
x = x.trim();
x = s.replace('world', 'jon');

x = s.includes('hello');
console.log(x); // Log the result of the includes operation

x = s.valueOf();
x = s.split('');


console.log(s);