// array challenge

// use some of the array methods that we looked at to mutate the following
// array to = the expected result bellow:

const arr = [1, 2, 3, 4, 5];

//expected console.log() result [6, 5, 4, 3, 2, 1, 0];



arr.push(6);
arr.unshift(0);

arr.reverse();



console.log(arr);


// challenge 2 

//combine arr1 and arr2 into a new array called arr3 with the following elements

//notice that both arr1 and arr2 include number 5. you will have to find a way 
//to get rid ot the extra 5.

//expected result: console.log(arr3); - [1,2,3,4,5,6,7,8,9,10]

// hint concat method, spread operator as well as slice() splice() methods

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];


const indexToRemove = 4;
arr1.splice(indexToRemove, 1);

const arr3 = arr1.concat(arr2);

console.log(arr3);