const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => 'number ' + number);

console.log(doubledNumbers);

// same with for.each

const doubledNumbers2 = [];

numbers.forEach((number) => {
    doubledNumbers2.push(number * 2);

} );

console.log(doubledNumbers2);

//create an array of company names

const companyNames = companies.map((company) => company.name);

console.log(companyNames);