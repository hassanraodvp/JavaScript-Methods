//? Reduce Method in Js

//! Exapm 01:

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: [accumulator: 0, currentValue: 1] [accumulator: 1, currentValue: 2] [accumulator: 3, currentValue: 3] [accumulator: 6, currentValue: 4] [accumulator: 10, currentValue: 5] Total: 15

//! Exapm 02:

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const totalAge = people.reduce((accumulator, person) => {
  return accumulator + person.age;
}, 0);

console.log(`Total Age of People: ${totalAge}`); // Output: 90

//! Exapm 03:

const num = [1, 2, 3, 4, 5];

const product = num.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);

console.log(`Product of Numbers: ${product}`); // Output: 120
