// EXAMPLE 1 - Check if a Key exists in an Object using the `in` Operator

const person = {
  name: 'Bobby Hadz',
};

console.log('name' in person); // 👉️ true
console.log('age' in person); // 👉️ false

if ('name' in person) {
  // 👇️ this runs
  console.log('key is in contained in object');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Checking if a key doesn't exist in an object

// const person = {
//   name: 'Bobby Hadz',
// };

// console.log(!('age' in person)); // 👉️ true

// console.log(!('name' in person)); // 👉️ false

// if (!('age' in person)) {
//   // 👇️ this runs
//   console.log('key is not in object');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Key exists in an Object using Optional Chaining

// const person = {
//   name: 'Bobby Hadz',
// };

// console.log(person?.name); // 👉️ Bobby Hadz
// console.log(person?.age); // 👉️ undefined

// if (person?.name !== undefined) {
//   // the key exists on the object
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Checking if an object has a nested property

// const obj = {a: {b: 'hello'}};

// const value = obj?.a?.b;
// console.log(value); // 👉️ hello

// if (value !== undefined) {
//   // if this block runs
//   // 👉️ property exists on the object
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if a Key exists in an Object using Object.hasOwnProperty

// const person = {
//   name: 'Bobby Hadz',
// };

// console.log(Object.hasOwn(person, 'name')); // 👉️ true
// console.log(Object.hasOwn(person, 'age')); // 👉️ false

// if (Object.hasOwn(person, 'name')) {
//   // 👇️ this runs
//   console.log('key exists in the object');
// }

// ------------------------------------------------------------------

// // EXAMPLE 6 - Check if a Key exists in an object using Object.keys()

// const person = {
//   name: 'Bobby Hadz',
//   age: 30,
// };

// const keys = Object.keys(person);

// if (keys.includes('age')) {
//   // 👇️ this runs
//   console.log('The key exists in the object');
// } else {
//   console.log('The key does NOT exist in the object');
// }

// console.log(keys.includes('name')); // 👉️ true
// console.log(keys.includes('another')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 7 - Check if a Key exists in an object using Array.some()

// const person = {
//   name: 'Bobby Hadz',
//   age: 30,
// };

// const keys = Object.keys(person);

// const keyExists = keys.some(key => {
//   return key === 'age';
// });

// if (keyExists) {
//   // 👇️ this runs
//   console.log('The key exists in the object');
// } else {
//   console.log('The key does NOT exist in the object');
// }

// ------------------------------------------------------------------

// // EXAMPLE 8 - Checking if a partial key exists in an object

// const person = {
//   name: 'Bobby Hadz',
//   age: 30,
// };

// const keys = Object.keys(person);

// const keyExists = keys.some(key => {
//   return key.includes('ag');
// });

// if (keyExists) {
//   // 👇️ this runs
//   console.log('The partial key exists in the object');
// } else {
//   console.log('The partial key does NOT exist in the object');
// }

// ------------------------------------------------------------------

// // EXAMPLE 9 - Checking if a key exists in an object in a case-insensitive manner

// const person = {
//   NAME: 'Bobby Hadz',
//   AGE: 30,
// };

// const keys = Object.keys(person);

// const keyExists = keys.some(key => {
//   const str = 'age';
//   return key.toLowerCase() === str.toLowerCase();
// });

// if (keyExists) {
//   // 👇️ this runs
//   console.log('The key exists in the object');
// } else {
//   console.log('The key does NOT exist in the object');
// }

// ------------------------------------------------------------------

// // EXAMPLE 10 - Returning a default value if a key doesn't exist

// const person = {
//   name: 'Bobby Hadz',
//   age: 30,
// };

// const result = person.country ?? 'Example';

// console.log(result); // 👉️ Example

// ------------------------------------------------------------------

// // EXAMPLE 11 - Checking if a key exists in an object using lodash

// import _ from 'lodash';

// const person = {
//   name: 'Bobby Hadz',
//   address: {
//     country: 'Example',
//   },
//   a: [{b: {c: 3}}],
// };

// console.log(_.has(person, 'name')); // 👉️ true
// console.log(_.has(person, 'address.country')); // 👉️ true
// console.log(_.has(person, 'a[0].b.c')); // 👉️ true

// console.log(_.get(person, 'name')); // 👉️ Bobby Hadz
// console.log(_.get(person, 'address.country')); // 👉️ Example
// console.log(_.get(person, 'a[0].b.c')); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 12 - Check if an Object has a Nested Property using the logical AND (&&) operator

// const obj = {};

// if (
//   obj.a !== undefined &&
//   obj.a.b !== undefined &&
//   obj.a.b.c !== undefined
// ) {
//   // if this block runs
//   // 👉️ the a.b.c property exists on the object
// }

// ------------------------------------------------------------------

// // EXAMPLE 13 - Check if an Object contains a Function in JavaScript

// const obj = {
//   sum: (a, b) => {
//     return a + b;
//   },
// };

// if (typeof obj.sum === 'function') {
//   // 👇️ this runs
//   console.log('✅ the sum property points to a function');
// } else {
//   console.log(
//     "⛔️ the sum property DOESN'T point to a function",
//   );
// }

// console.log(typeof obj.sum); // 👉️ "function"
// console.log(typeof obj.doesNotExist); // 👉️ "undefined"
