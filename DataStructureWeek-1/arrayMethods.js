// array methods

const numbers = [2,4,6,7,3,5];
console.log("--------------------------------");
console.log("Numbers", numbers);
console.log("--------------------------------");

// push 
const push = numbers.push(8);
console.log("Push = ", numbers);
console.log("--------------------------------");

// unshift
const unshift = numbers.unshift(0);
console.log("Unshift = ", numbers);
console.log("--------------------------------");

// pop
const pop = numbers.pop();
console.log("Pop = ", numbers);
console.log("--------------------------------");

// shift
const shift = numbers.shift();
console.log("Shift = ", numbers);
console.log("--------------------------------");

// reduce
const reduce = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce = ", reduce);
console.log("--------------------------------");

// map
const map = numbers.map((item) => item * 2);
console.log("Map = ", map);
console.log("--------------------------------");

// filter
const filter = numbers.filter((num) => num%2 == 0);
console.log("Filter = ", filter);
console.log("--------------------------------");

// concat
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const concat = num1.concat(num2);
console.log("Concat = ", concat);
console.log("--------------------------------");

// slice -  Returns a new array containing the extracted elements - Does not modify the original array.
// Used to extract a section of an array and return it as a new array.
// Takes start and end indices (end not included).
const str = "helloworld";
console.log(str.slice(4));
const slice = numbers.slice(0, 4);
console.log("Slice = ", slice);
console.log("Original array = ", numbers);
console.log("--------------------------------");

// splice - Returns a new array containing the removed elements - Modifies the original array.
// Used to modify an array by removing, replacing, or adding elements.
// Takes start index, 'deleteCount', and optional items to add.
const splice = numbers.splice(0, 4, 12, 0);
console.log("Splice = ", splice);
console.log("Original array = ", numbers);
console.log("--------------------------------");

console.log("Understanding 'for of' loop");
for(const number of numbers){
    console.log(number);
}
console.log("--------------------------------");
