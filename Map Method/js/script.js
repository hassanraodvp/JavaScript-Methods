//? Map Function

//! Examp: 01

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplyBy2num = numbers.map((num) => {
  return num * 2; //todo ===> Remember if we use {} then we have to use return keyword.
});
const squaredNumbers = numbers.map((num) => num * num);

console.log(multiplyBy2num); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//! Examp: 02

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Alice", age: 28 },
];

const doubleAge = people.map((person) => ({
  name: person.name,
  age: person.age * 2,
}));

console.log(doubleAge); // Output: [{ name: "John", age: 50 }, { name: "Jane", age: 60 }, { name: "Bob", age: 40 }, { name: "Alice", age: 56 }]

//! Examp: 03

const fruits = ["apple", "banana", "orange", "grape"];

const uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());

console.log(uppercaseFruits); // Output: ["APPLE", "BANANA", "ORANGE", "GRAPE"]
