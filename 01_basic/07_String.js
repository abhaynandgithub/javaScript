const name = "Abhaynand"
const repocount = 4;
// console.log(name + " "+ repocount+" value");
console.log(`hello my name is ${name} and my repocount is ${repocount}`);
 

// i can decalre string in differnt way
const  gameName = new String("abhay")
console.log(gameName[0]);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.indexOf('y'));



const newString =gameName.substring(0,4);
console.log(newString);



//slice(start, end): Supports negative indices, which count from the end of the string.
// but substring(start, end): Treats negative values as 0
const anotherString = gameName.slice(-3,4);
console.log(anotherString);

// trim() it is use to remove unwanted space. if we use only trim then it remove extra space from start and end .
// if we want to remove extra space only from start position then i can use trimStart().
// if we want to remove extra space only from end position then i can use trimEnd()

const newStringone="      abhay.   "
console.log(newStringone);
console.log(newStringone.trim());




