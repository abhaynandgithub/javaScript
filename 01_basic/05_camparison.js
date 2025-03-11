console.log("2">1);
// we should comapre same datatype for predictable output
console.log(null>0); //false

console.log(null==0);// false

console.log(null>=0);// true
console.log(undefined == 0);
/*
reason is that an equality check == and camparison >, >= ,<=,< work differently
camparison convert null to a number, treating as 0

*/
