// Global & Function scope

const x = 100;


console.log(x, 'in global scope');
function run() {
console.log(innerHeight);
console.log(x, 'in function');
//console.log(y);
}

run();

if (true) {
    console.log(x, 'in block scope');
}


function add() {
    const x = 1;
    const y = 50;
    console.log(x + y);
}


//console.log(y);
add();