"use strict"

const people = ["Harry", "Ron", "Hermione"];

let result;

result = people.push("Draco");
result = people.pop();
result = people.push("Neville");
result = people.push("Luna");
result = people.slice(0, 3);
result = people.splice(1, 0, "Cho");
people[1] = "Ginny";
result = people.push("Fred", "George");
result = people.indexOf("Fred");
result = people.splice(result, 1);

console.log(people);
console.log(result);
