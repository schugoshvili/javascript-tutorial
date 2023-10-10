// object literals 

let x;


const person = {
  name: 'john doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 main st',
    city: 'boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'jane doe';
person['isAdmin'] = false;

x = person;

delete person.age;

person.hasChildren = true;
person.greet = function () {
    console.log(`hello my name is ${this.name}`)
}

person.greet();

const person2 = {
    'first name': 'Brad',
    'Last name': 'Traversy',
}

x = person2['first name'];


console.log(x);