const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map((number) => 'freakin ' + number);



// console.log(doubledNumbers); 

// // Same with forEach

// const doubledNumbers2 = [];

// numbers.forEach((number) => {
//     doubledNumbers2.push(number * 2);
// });

// console.log(doubledNumbers2);



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

  // create an array of company names

//   const companyNames = companies.map((company) => company.name
//    );

//    console.log(companyNames);

//    // 

//    const companyNC = companies.map((company) => company.name + ' - ' + company.category);

//    console.log(companyNC);

// const companyYears = companies.map((company) => {
//     return {
//         name: company.name,
//         length: company.end - company.start
//     }
// }
// );

// console.log(companyYears);

// const squareAndDouble = numbers
// .map((number) => Math.sqrt(number))
// .map((sqrt) => sqrt * 2);



// const squareAndDouble2 = numbers
// .map( function (number) {
//     return Math.sqrt(number);
// })
// .map(function (sqrt) {
//     return sqrt * 2;
// })
// .map(function (sqrtDoubled) {
//     return sqrtDoubled * 2;
// }
// )


const evenDouble = numbers
.filter((number) => number % 2 === 0)
.map((number) => number * 2);

console.log(evenDouble);