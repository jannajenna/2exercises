"use sctrict"
console.log("Hello there");

/* const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0
};

const animal = Object.create(Animal);

Animal.image = "cat.jpg";

console.log(animal.image);
console.log(Animal);

 */

/* ADDING PROPERTIES */

/* let person1 = {
    fisrtName: "Peter",
    age: 43,
    student: false
}
console.log(person1.lastName);

person1.lastName = "Tolstrup";
console.log(person1.lastName); */

/* REMOVING PROPERTIES */

/* person1.lastName = undefined;
console.log("person1.lastName:", person1.lastName);
console.log("person1.middleName:", person1.middleName);

delete person1.lastName;
console.log(person1); */

/* OBJECTS AS VARIABLES */

const person1 = {
    fisrtName: "Peter",
    age: 43,
    student: false,
}
console.log(person1);

person1.age++;
console.log(person1);

/* const person2 = {
    fisrtName: "Bob",
    age: 34,
    student: true,
}
person1 = person2;
console.log(person2); */

const person2 = person1;
person2.fisrtName = "Bob";
console.log(person2);


const student1 = {
    firstName: "Harry",
    lastName: "Potter",
};

/* THEY ARE THE SAME */
/* const student2 = student1; */

/* if (student1 === student2) {
  console.log("They are the same!");
} else {
  console.log("They are not ...");
}
 */

/* if (student1 == student2) {
  console.log("They are the same!");
} else {
  console.log("They are not ...");
} */

/* THEY ARE NOT THE SAME */

const student2 = {
    firstName: "Harry",
    lastName: "Potter",
};

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

if (student1 === student2) {
    console.log("They are the same!");
} else {
    console.log("They are not ...");
}





