let x;

const todo = {};

todo.id = 1;
todo.name = 'buy milk';
todo.completed = false;

x = todo;

const person = {
    name: 'John',
    adress: {
        coords: {
            lng: 13.22,
            lat: 9392.11
        },
    },
};

x = person.adress.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2,};
const obj4 = Object.assign({}, obj1, obj2);

x = obj4;

console.log(x);
