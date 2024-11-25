//? Filter Methods in Js.

//! Exmp: 01

const numbers = [1, 2, 3, 4, 5];

const filteredNumbers = numbers.filter((num) => num % 2 === 0);
const numgreaterthan3 = numbers.filter((num) => {
  return num > 3; //todo ===> Remember if we use {} then we have to use return keyword.
});
console.log(numgreaterthan3); // Output: [4, 5]
console.log(filteredNumbers); // Output: [2, 4]

//! Exmp: 02

const people = [
  { name: "John", age: 25 },
  { name: "Mary", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Alice", age: 28 },
  { name: "Jazzy", age: 40 },
  { name: "Henry", age: 37 },
  { name: "Nancy", age: 31 },
];

const filteredPeople = people.filter(
  (person) => person.age >= 25 && person.age <= 37
);
console.log(filteredPeople); //Output ["John", "Mary", "Henry", "Alice", "Nancy"]

//! Exmp: 03

const fruits = ["apple", "banana", "orange", "grape", "mango"];

const filteredFruits = fruits.filter((fruit) => fruit.length > 5);

console.log(filteredFruits); // Output: ["banana", "orange"]
