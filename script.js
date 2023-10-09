let x;


// array literal
const numbers = [12, 45, 33, 29, 3, 102];
const mixed = [12, 'hello', true, null];

// array constructor

const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `my favourite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

x = fruits;

//fruits.length = 2;

fruits[3] = 'strawbery';

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';



console.log(x);

