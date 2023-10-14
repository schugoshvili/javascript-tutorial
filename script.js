// loop through the arrays

const items = [ 'book', 'table', 'chair', 'kite'];
const users = [ { name: 'John', email: 'john@example.com', carname: 'BMW' }];

for (const item of items) {
    console.log(item);
}

for (const user of users) {
    console.log(user.name, user.email, user.carname);
}

const str = 'hello world';

for (const letter of str) {
    console.log(letter);
}

const map = new Map();

map.set('name', 'john');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}