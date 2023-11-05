// const todo = {};
const todo = new Object();

todo.id = 1;
todo.name = 'buy milk';
todo.completed = false;

x = todo;

const person = {
    adress: {
        coords: {
            lat: 42.222,
            lng: -11.287287        },
    },
};

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2};
const obj4 = Object.assign({}, obj1, obj2);

const todos = [{
    id: 1,
    name: 'buy milk'
},
{
    id: 2,
    name: 'make bed'
},
{
    id: 1,
    name: 'drink beer'
}
];

x = todos[1];

x = Object.keys(todo);
x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('age');

console.log(x);