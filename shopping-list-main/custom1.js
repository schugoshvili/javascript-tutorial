const items = ['book', 'table', 'kite', 'chair'];
const users = [
    { name: 'brad'},
    { name: 'sese'},
    { name: 'dato'},
];

// for (const item of items) {
//     console.log(club);
// }

for (const user of users) {
    console.log(user.name);
}

const str = 'hello world';

for (const letter of str) {
    console.log(letter);
}

const map = new Map();

map.set ('name', 'john');
map.set ('age', '50');

for (const [key, value] of map) {
    console.log(key, value);
}