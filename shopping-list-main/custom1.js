const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// })

// console.log(evenNumbers);

// let evenNumbers = [];

// numbers.forEach((number) => {
//     if (number % 2 === 0) {
//         evenNumbers.push(number);

//     }
// });

// console.log(evenNumbers);

const companies = [
    { name: 'BMW', category: 'Automotive', start: 1916, end: 2023 },
    { name: 'Apple', category: 'Technology', start: 1976, end: 2023 },
    { name: 'Nike', category: 'Apparel', start: 1964, end: 2023 },
    { name: 'Microsoft', category: 'Technology', start: 1975, end: 2023 },
    { name: 'Coca-Cola', category: 'Beverages', start: 1886, end: 2023 },
    { name: 'Amazon', category: 'E-Commerce', start: 1994, end: 2023 },
    { name: 'Google', category: 'Technology', start: 1998, end: 2023 },
    { name: 'Samsung', category: 'Technology', start: 1938, end: 2023 },
    { name: 'Toyota', category: 'Automotive', start: 1937, end: 2023 }
  ];
  
//   const techCompanies = companies.filter((company) =>
//    company.category === 'Technology');


// console.log(techCompanies);

//

// const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2025);
// console.log(earlyCompanies);

// get companies that lasted 10 or more

const longCompanies = companies.filter((company) => company.end - company.start >= 10 );
console.log(longCompanies);
