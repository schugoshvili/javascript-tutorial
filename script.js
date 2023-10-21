// const items  = ['book', 'table', 'chair', 'kite'];

// const users = [
//     {name: 'kate'},
//     {name: 'kite'},
//     {name: 'chair'},
// ];

// for (user of users) {
//     console.log(user.name);
// }


// const str = 'get the hell autta here';

// for (const letter of str) {
//     console.log(letter);
// }

// //loop over maps 

const map = new Map();

map.set('name', 'jon');
map.set('age', '30');

for (const [key, value] of map) {
    console.log(key, value);
}