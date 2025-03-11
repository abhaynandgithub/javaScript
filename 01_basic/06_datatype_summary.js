/*
primitive :

All types except Object define immutable values represented 
directly at the lowest level of the language. We refer to values of 
these types as primitive values.

All primitive types, except null, can be tested by the typeof operator. 
typeof null returns "object", so one has to use === null to test for null.
*/

// types 7 types: null,string ,boolean,undefine,numbber,symbol,bigInt;

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// non-primitive : Array,Object,function

/*
Type	typeof return value	 Object wrapper
Null	     "object"	           N/A
Undefined	"undefined".    	N/A
Boolean	    "boolean"	           Boolean
Number	     "number"	            Number
BigInt	     "bigint"	           BigInt
String	    "string"	           String
Symbol	     "symbol"	           Symbol
*/
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3