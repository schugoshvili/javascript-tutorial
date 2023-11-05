const firstName = 'john';
const lastName = 'doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age
}

console.log(person.lastName);

// destructure

const todo = {
    id: 1,
    title: 'make bed',
    user: {
        name: 'John',
    }
}

const { id: todoId, title, user: {name}, } = todo;

console.log(todoId);

const numbers = [23, 67, 33, 49];

const [...rest] = numbers;

console.log(rest);