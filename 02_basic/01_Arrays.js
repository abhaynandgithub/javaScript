//  arrays
const arr=[0,1,2,3,4,5,6,7]
const arr2 = new Array(1,2,3,4,5,6)
console.log(arr[1]);
console.log(arr2[1]);



// Arrays methods
arr.push(8)
console.log(arr);
arr.pop()  
// inside parenthesis we not provide any argument because it automatically remove last value
console.log(arr);


arr.unshift(9) 
// is used to add one or more elements to the beginning of an array.
console.log(arr);
arr.shift() 
//Removes the first element from an array. 
// in this no need to provide argument because it is predefine
console.log(arr);



const newarr= arr.join()
// is used to convert an array into a string by joining
console.log(newarr);
console.log(typeof newarr);
console.log(arr);

// Extracts a portion of an array without modifying the original array
let arr1 = [1, 2, 3, 4, 5];
let newArr = arr1.slice(1, 4);
console.log(newArr); // Output: [2, 3, 4]
console.log(arr1);    // Output: [1, 2, 3, 4, 5] (unchanged)

//  Modifies an array by adding/removing elements.
let arr3 = [1, 2, 3, 4, 5];
let removedElements = arr3.splice(1, 2, 8, 9);
console.log(arr3);            // Output: [1, 8, 9, 4, 5] (modified)


