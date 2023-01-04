let x = 10;
let y = 15;
let z = 20;

console.log(x > z && x > y); //false

console.log(x != y); //true

console.log(z < y || z > x); //true

console.log(x == z || x != y); //true

console.log(x >= 10 && y <= 10); //false

console.log(x * z < 100 || x * y > 100); //true

// && And Operator returns true if both operands are truthy and false otherwise; AND returns the first falsy value or the last value if none were found.

// || Or Operator returns true if one true value exists
// ! Not Operator converts the operand to boolean type: true/false and returns the inverse value.
let a = true;

let b = false;

console.log(a && b); // false

console.log(a || b); // true

console.log(!a && b); // false
