var a = 42;
var b = "foo";
a < b; // false
a > b; // false
a == b; // false

var a = 2;
foo(); // works because `foo()`
 // declaration is "hoisted"
function foo() {
 a = 3;
 console.log( a ); // 3
 var a; // declaration is "hoisted"
 // to the top of `foo()`
}
console.log( a ); //

function foo() {
    var a = 1;
    function bar() {
    var b = 2;
    function baz() {
    var c = 3;
    console.log( a, b, c ); // 1 2 3
    }
    baz();
    console.log( a, b ); // 1 2
    }
    bar();
    console.log( a ); // 1
   }
   foo();


   function foo() {
    var a = 1;
    if (a >= 1) {
    let b = 2;
    while (b < 5) {
    let c = b * 2;
    b++;
    console.log( a + c );
    }
    }
   }
   foo();
   // 5 7 9

   if (a == 2) {
    // do something
   }
   else if (a == 10) {
    // do another thing
   }
   else if (a == 42) {
    // do yet another thing
   }
   else {
    // fallback to here
   }


   switch (a) {
    case 2:
    // do something
    break;
    case 10:
    // do another thing
    break;
    case 42:
    // do yet another thing
    break;
    default:
    // fallback to here
   }

   switch (a) {
    case 2:
    case 10:
    // some cool stuff
    break;
    case 42:
    // other stuff
    break;
    default:
    // fallback
   }
   
   
   