for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 > 0) {
        console.log('fizz');
    } else if (i % 5 === 0 && i % 3 > 0) { 
        console.log('buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else {
    console.log('num ' + i);
}
};

let j = 1;

while (j <= 100) { 
    if ( j % 3 === 0 && j % 5 === 0) {
        console.log('FizzBuzz');
    } else if ( j % 3 === 0) {
        console.log('Fizz');
    } else if ( j % 5 === 0) {
        console.log('FizzBuzz');
    } else {  console.log(j); }
    j++; 
}

