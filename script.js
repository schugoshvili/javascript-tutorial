// values are stored on stack

const name = 'john';
const age = 30;

// reference values are stored on heap

const person = {
    name: 'brad',
    age: 40
}

let newName = name;

newName = 'jonathan';

let newPerson = person;

newPerson.name = 'bradley';

console.log(name, newName);

console.log(person, newPerson);
