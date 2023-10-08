const myString = 'developer';

 // 'Developer'

// how to capitalaze first letter using charAt() method, string [index], .toUppercase
// substring() and slice() methods


// Capitalize the first letter using charAt(), substring(), and toUpperCase()
let myNewString = myString[0].toUpperCase() + myString.substring(1);


myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);
