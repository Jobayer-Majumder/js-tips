let a = 10;
let b = 20;

const temp = a;

a = b;
b = temp;

console.log(a, b)


// without temp 
let c = 30;
let d = 40;

[c, d] = [d, c];

console.log(c, d)


// with math
let x = 4;
let z = 5;

z = x + (x = z) - z;

console.log({x, z})
