const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
// return number % 2 === 0;
// });

// console.log(evenNumbers);

//shorter way

// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// let evenNumbers = [];
// numbers.forEach((number) => {
//     if (number % 2 === 0) {
//         evenNumbers.push(number);
//     }
// });


// console.log(evenNumbers);

const companies = [
    {
        name: "TechSolutions Inc.",
        category: "Technology",
        startYear: 2000,
        endYear: 2022
    },
    {
        name: "FoodFusion Co.",
        category: "Food & Beverage",
        startYear: 2010,
        endYear: 2023
    },
    {
        name: "GreenEnergy Ltd.",
        category: "Energy",
        startYear: 2005,
        endYear: 2021
    },
    {
        name: "FashionHub LLC",
        category: "Fashion",
        startYear: 2012,
        endYear: 2024
    },
    {
        name: "AutoMasters Corp.",
        category: "Automotive",
        startYear: 2008,
        endYear: 2019
    },
    {
        name: "HealthCare Innovations",
        category: "Healthcare",
        startYear: 2015,
        endYear: 2025
    },
    {
        name: "TravelWise Ventures",
        category: "Travel & Tourism",
        startYear: 2003,
        endYear: 2020
    },
    {
        name: "Artistry Creations",
        category: "Arts & Crafts",
        startYear: 2011,
        endYear: 2023
    },
    {
        name: "Financial Insights Ltd.",
        category: "Finance",
        startYear: 2007,
        endYear: 2022
    }
];

const retailCompanies = companies.filter(
    (company) => company.category === 'Retail');
console.log(retailCompanies);


//companies in/after 1980 in/before 2005

const earlyCompanies = companies.filter(
    (company) => company.category === company.start >= 1980 && company.end <= 2005
);

console.log(earlyCompanies);

// get companies that lasted 10 years or more 

const longCompanies = companies.filter(
    (company) => company.end - company.start >= 10
);



