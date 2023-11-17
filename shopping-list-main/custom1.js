let a = false;

if (!a) {
    a = 10;
}

// a = a || 10;

a ||= 20;

// console.log(a);

// e

let b = 10;

if (b) {
    b = 20;
}

b = b && 20;

b &&= b;


console.log(b); 
//

let c = null;

if (c === null || c === undefined)  {
    c = 20;
}

