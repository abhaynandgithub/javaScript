// singletone object
const tinderuser = new Object()
console.log(tinderuser);
// non-singletone objecct
const tinderuser1={}
console.log(tinderuser1);
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true