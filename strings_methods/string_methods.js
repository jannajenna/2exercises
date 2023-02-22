"use strict"

/* NAME PARTS */

const names = "Peter Heronimous Lind"

const firstName = names.substring(0, names.indexOf(" "));
const middleName = names.substring(names.indexOf(" ") + 1, names.lastIndexOf(" ") + 1)
const lastName = names.substring(names.lastIndexOf(" ") + 1);

console.log(names);

console.log(`First name is: ${firstName}`);
console.log(`Middle name is: ${middleName}`);
console.log(`Last name is: ${lastName}`);

/* 3caPITALIZATION */


const person1 = "PETER";

console.log(person1);

let personVar1 = person1.substring(0, 2).toLowerCase() + person1[2].toUpperCase() + person1.substring(3).toLowerCase();

console.log(`${personVar1}`);

/* REAL CAPITALIZATION */

const person2 = "pETErRrr";

console.log(person2);

let personVar2 = person2[0].toUpperCase() + person2.slice(1).toLowerCase();

console.log(`${personVar2}`)