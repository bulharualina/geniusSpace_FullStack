
// This is a simple JavaScript file for learning purposes
// let vs const demonstration
//let allows reassignment, const does not

/*let a = 10;
console.log("Value of a is:", a);
a += 5;
console.log("Updated value of a is:", a);

const b = 20;
console.log("Value of b is:", b);
*/

// Data types demonstration
/*
let a = 10;
console.log(typeof a); // number   

let b = "Hello World";
console.log(typeof b); // string 

let c = true; 
console.log(typeof c); // boolean 

let d;
console.log(typeof d); // undefined  

let e = null;
console.log(typeof e); // object     
*/

/*const value = "3";
console.log(typeof value); // string
console.log(Number(value)); // Converts string to number
console.log(typeof Number(value)); // number
*/

/*NaN (Not-a-Number)
It returns true if the value is NaN and false otherwise.*/
/*const number = Number("1234");
console.log(Number.isNaN(number)); // false
*/

// Number.parseInt() and Number.parseFloat()

// console.log(Number.parseInt("100px")); // 100
// console.log(Number.parseInt("12fe34em")); // 12
// console.log(Number.parseInt("12.34em")); // 12
// console.log(Number.parseInt("px")); // NaN


// console.log(Number.parseFloat("100px")); // 100
// console.log(Number.parseFloat("12fe34em")); // 12
// console.log(Number.parseFloat("12.34em")); // 12.34
// console.log(Number.parseFloat("px")); // NaN


// Floating-point precision issues
// console.log(0.1 + 0.2 === 0.3); // false due to floating-point precision issues
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log((0.1 * 10 + 0.2 * 10)/10); // 0.3

//Math

//Math.floor(num) - Rounds num down to the nearest integer
//console.log(Math.floor(4.7)); // 4

//Math.ceil(num) - Rounds num up to the nearest integer
//console.log(Math.ceil(4.2)); // 5

//Math.round(num) - Rounds num to the nearest integer
//console.log(Math.round(4.5)); // 5
//console.log(Math.round(4.4)); // 4

//Math.max(a, b, c, ...) - Returns the largest of the given numbers
//console.log(Math.max(3, 7, 2, 9, 4)); // 9

//Math.min(a, b, c, ...) - Returns the smallest of the given numbers
//console.log(Math.min(3, 7, 2, 9, 4)); // 2

//Math.pow(base, exponent) - Returns base raised to the power of exponent
//console.log(Math.pow(2, 3)); // 8

//Math.random() - Returns a random number between 0 (inclusive) and 1 (exclusive)
// console.log(Math.random()); // e.g., 0.5345678901234567
//console.log(Math.random() * (10-1)+1); // random number between 1 and 10

//String

// let str = "Hello, World!";
// let str2 = 'JavaScript is fun.';
// let str3 = `${str} ${str2}`; // Template literal
// console.log(str3); // Hello, World! JavaScript is fun.

// const message = "Hello" + ", " + "World" + "!";
// console.log(message); // Hello, World!

//Concatenation
// let result;

// result = 5 + "5"; // "55"
// console.log(result);
// console.log(typeof result); // string

// result = 5 + "5" + 5; // "555"
// console.log(result);
// console.log(typeof result); // string

// result = 5 + 5 + "5"; // "105"
// console.log(result);
// console.log(typeof result); // string

// let str = "Hello, World!";

// //toUpperCase() and toLowerCase()
//  console.log(str.toUpperCase()); // "HELLO, WORLD!"
//  console.log(str.toLowerCase()); // "hello, world!"


// //length
// console.log(str.length); // 13

// //indexOf() and includes()
// console.log(str.indexOf("World")); // 7
// console.log(str.indexOf("JavaScript")); // -1
// console.log(str.indexOf("H")); // 0
// console.log(str.includes("Hello")); // true
// console.log(str.includes("hello")); // false
// //slice() and substring()
// console.log(str.slice(0,5)); // "Hello"
// console.log(str.substring(7, 13)); // "World!"
// //trim()
// console.log("   Hello, World!   ".trim()); // "Hello, World!"
// //replace()
// console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"


//Objects
//  let person = {
//      name: "John",
//      age: 30,
//      isStudent: false
// };
 
// console.log(typeof person); // object
// console.log(person); // { name: 'John', age: 30, isStudent: false }
// console.log(person.name); // "John"
// console.log(person["age"]); // 30
// person.age = 31; // Update age
// console.log(person.age); // 31

// //Methods
// let person = {
//      name: "John",
//     age: 30,
//      "likes coding": true,
//      isStudent: false
// };

// delete person.age; // Deletes the age property
// console.log(person); // { name: 'John', isStudent: false }

// //person.likes coding = true;  ERROR due to space in key
// // Accessing property with space in key
// console.log(person["likes coding"]); // true

// let user = {};
// user.name = "Alice";
// user.age = 25;
// console.log(user); // { name: 'Alice', age: 25 }


//CICLES
// for (key in object) {
//     // code block to be executed
// }

// let person = {
//      name: "John",
//      age: 30,
//      isStudent: false
// };

// for (let key in person) {
//     console.log(key); // Logs each key
//     console.log(person[key]); // Logs each value
// }


//Впорядкування об'єктів за ключами
// let codes = {
//     1: "USA",
//     44: "UK",
//     91: "India"
// }

// for (let code in codes) {
//     console.log(code); // Logs each key 1 44 91
// }


