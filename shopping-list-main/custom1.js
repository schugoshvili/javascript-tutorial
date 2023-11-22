const people = [
    {firstName: 'John', lastName: 'doe', email: 'john@example.com',
phone: '123 123 123', age: 30},
  {firstName: 'kevin', lastName: 'durant', email: 'kevin@example.com',
phone: '22 22 12223', age: 25},
{firstName: 'novak', lastName: 'djokovic', email: 'ndjk@example.com',
phone: '33 33 123', age: 45},
{firstName: 'rafael', lastName: 'nadal', email: 'rndl@example.com',
phone: '44 123 123', age: 40},
{firstName: 'roger', lastName: 'federa', email: 'rf@example.com',
phone: '55 123 123', age: 23},
];

// const youngPeople = people
//     .filter(person => person.age < 35)
//     .map(person => ({ name: `${person.firstName} ${person.lastName}`, email: person.email }));

// console.log(youngPeople);

// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const sum = numbers
// .filter((number) => number > 0)
// .reduce((sum, number) => sum + number, 0);

// console.log(sum);


const words = ['coder', 'developer', 'programmer'];

const cWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1) + ' ' +  word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(cWords);
