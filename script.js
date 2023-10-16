const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

//const evenNumbers = numbers.filter(function (number) {
  //  return number % 2 === 0;
// }) ;


//const evenNumbers = numbers.filter((number) => number % 2 === 0);

/*const evenNumbers = [];
numbers.forEach ((number) => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});

console.log(evenNumbers); */


const companies = [
    {
      name: "Company One",
      category: "Technology",
      start: 2000,
      end: 2010,
    },
    {
      name: "Company Two",
      category: "Retail",
      start: 2005,
      end: 2015,
    },
    {
      name: "Company Three",
      category: "Finance",
      start: 2012,
      end: 2018,
    },
    {
      name: "Company Four",
      category: "Healthcare",
      start: 2007,
      end: 2013,
    },
    {
      name: "Company Five",
      category: "Education",
      start: 2011,
      end: 2016,
    },
    {
      name: "Company Six",
      category: "Automotive",
      start: 2002,
      end: 2010,
    },
    {
      name: "Company Seven",
      category: "Entertainment",
      start: 2014,
      end: 2019,
    },
    {
      name: "Company Eight",
      category: "Hospitality",
      start: 2008,
      end: 2012,
    },
    {
      name: "Company Nine",
      category: "Real Estate",
      start: 2010,
      end: 2017,
    },
  ];

// get only retail

//const retailCompanies = companies.filter((company) => company.category === "Retail");

// console.log(retailCompanies);

// get companies in or after 2007 in or before 2012

//const earlyCompanies = companies.filter((company) => company.start >= 2007
//&& company.end <= 2012
//)

//console.log(earlyCompanies);

// get companies that lasted 10 years or more

const longCompanies = companies.filter((company) => company.end - company.start >= 10 );

console.log(longCompanies);