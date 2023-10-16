const people = [
    { 
        firstName: 'John', 
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '111-111-1111',
        age: 30
    }, 
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'poe@example.com',
        phone: '111-111-1112',
        age: 25,
    },
    {
        firstName: 'bob',
        lastName: 'foe',
        email: 'foe@example.com',
        phone: '111-111-1113',
        age: 45,
    },
    {
        firstName: 'sara',
        lastName: 'soe',
        email: 'soe@example.com',
        phone: '111-111-1114',
        age: 19,
    },
    {
        firstName: 'jose',
        lastName: 'koe',
        email: 'koe@example.com',
        phone: '111-111-1114',
        age: 19,
    }
];

const youngPeople = people
  .filter(person => person.age <= 25)
  .map(person => ({ name: `${person.firstName} ${person.lastName}`, email: person.email }));

console.log(youngPeople);


const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers 
.filter((number) => number > 0)
.reduce((acc, curr) => acc + curr, 0);

console.log(positiveSum); // 79


// challenge 3 

const words = ['coder', 'programmer', 'developer' ];

const cWords = words.map ((word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(cWords);