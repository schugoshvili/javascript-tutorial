const people = [
    {
      firstName: 'john',
      lastName: 'doe',
      email: 'john@.gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'jane',
      lastName: 'smith',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'alice',
      lastName: 'jones',
      email: 'alice@gmail.com',
      phone: '333-333-3333',
      age: 35,
    },
    {
      firstName: 'bob',
      lastName: 'wilson',
      email: 'bob@gmail.com',
      phone: '444-444-4444',
      age: 28,
    },
    {
      firstName: 'susan',
      lastName: 'brown',
      email: 'susan@gmail.com',
      phone: '555-555-5555',
      age: 40,
    },
    {
      firstName: 'mike',
      lastName: 'johnson',
      email: 'mike@gmail.com',
      phone: '666-666-6666',
      age: 32,
    },
  ];

//   people.forEach(person => {
//     if (person.age < 34) {
//       console.log(`name ${person.firstName} ${person.lastName}, ${person.email}`);
//     }
//   });


const youngPeople = people
.filter((person) => person.age <= 34)
.map((person) => ({
    name: person.firstName + ' ' + person.lastName,
    email: person.email,

}));


console.log(youngPeople);


const numbers = [2, -10, 58, 20, -12, -9, 7];

const positiveNumbers = numbers
.filter((numbers) => numbers > 0)
.reduce((acc, cur) => acc + cur, 0);

console.log(positiveNumbers);

const words = ['coder', 'programmer', 'developer'];

// const capitalWords = words.map(word => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// });

const capitalWords = words.map((word) => {
    return word[0].toUpperCase(0) + word.slice(1, word.length);
})
console.log(capitalWords);