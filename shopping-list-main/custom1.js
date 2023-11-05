let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 main st',
        city: 'boston',
        state: 'kakheti'
    },
    hobbies: [
        'music', 'sports'
    ]
};

x = person.name;
x = person['age'];
x = person.address.city
x = person.hobbies[0];

person.name = 'jane doe';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
    console.log(`hey my name is ${this.name}`);
}

x = person;

person.greet();





console.log(x);