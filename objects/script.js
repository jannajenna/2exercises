"use sctrict"
console.log("Hello there");

const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0
};

const animal = Object.create(Animal);

Animal.image = "cat.jpg";

console.log(animal.image);
console.log(Animal);

