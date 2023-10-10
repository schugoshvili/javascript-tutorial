const firstName = 'John';
const lastName = 'Doe';
const age = '30';

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);

// destructuring 

const todo = {
    id: 1,
    title: 'take out trash',
    user: {
        name: 'John',
    },
};

const { id, title, user: { name } } = todo;

console.log(id);

//destructure arrays

const numbers = [23, 67, 33, 49, 52];

const [first, second, ...nums] = numbers;


console.log(first, second, nums);