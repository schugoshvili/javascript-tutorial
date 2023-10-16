const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => 'number ' + number);

console.log(doubledNumbers);

// same with foreach

const doubledNumbers2 = [];


numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2);


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

  //create array of company names

  const companyNames = companies.map((company) => company.name);

  console.log(companyNames);

  // create an array with just company and category 

  const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,

    }
  });

  console.log(companyInfo);

// create array of the length of each company in years  and names

const companyYears = companies.map((company) => {
    return {
        name: company.name,
        length: company.end - company.start + ' years'
    }
});

console.log(companyYears);

// chain map methods 

const squareAndDouble = numbers

.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers
.map (function (number) {
    return Math.sqrt(number);
}
)

.map(function (sqrt) {
    return sqrt * 2;
})
.map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });


  //chaining different methods

  const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

  console.log(evenDouble);

