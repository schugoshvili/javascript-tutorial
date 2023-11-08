let x;

const person = {
    name: 'john doe',
    age: 34,
    isAdmin: true,
    adress: {
    street: '123 main st',
    city: 'barcelona',
    state: 'ny'},
    hobby: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.adress.state;
x = person.hobby[0];

delete person.age;

person.hasChildren = true;

person.greet = function () {

console.log(`hello my name is ${person.name}`); }

person.greet();

x = person;


console.log(x);