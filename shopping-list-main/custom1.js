let a = false;

if (!a) {
    a = 10;
};

a = a || 10;

a ||= 10;

console.log(a);

//

let b = 10;

if (b) {
    b = 20;
}

console.log(b);

b = b && 20;

b &&= 20;

//
let c = null;

if (c === null || c === undefined) {
    c = 20;
}
 
c = c ?? 20;

c ??= 20;

console.log(c);