"use strict"

/* NAME PARTS */
/* const names = "Peter Heronimous Lind"

const firstName = names.substring(0, names.indexOf(" "));
const middleName = names.substring(names.indexOf(" ") + 1, names.lastIndexOf(" ") + 1)
const lastName = names.substring(names.lastIndexOf(" ") + 1);

console.log(names);

console.log(`First name is: ${firstName}`);
console.log(`Middle name is: ${middleName}`);
console.log(`Last name is: ${lastName}`); */

/* FULL NAME  */


fullName()

function fullName(lastName, firstName, middleName) {


}

/* const names = "Peter Heronimous Lind"
const firstName = names.substring(0, names.indexOf(" "));
const middleName = names.substring(names.indexOf(" ") + 1, names.lastIndexOf(" ") + 1)
const lastName = names.substring(names.lastIndexOf(" ") + 1);
console.log(names);
console.log(`First name is: ${firstName}`);
console.log(`Middle name is: ${middleName}`);
console.log(`Last name is: ${lastName}`); */

function getNameParts(fullname) {
    const firstName = fullname.substring(0, fullname.indexOf(" "));
    const middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" ") + 1)
    const lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);

    console.log({ firstName, middleName, lastName });
}

getNameParts("Peter Heronimous Lind")


/* REAL CAPITALIZATION */

/* const person2 = "pETErRrr";
console.log(person2);
let personVar2 = person2[0].toUpperCase() + person2.slice(1).toLowerCase();
console.log(`${personVar2}`) */

function capitalize(str) {
    let personVar2 = str[0].toUpperCase() + str.slice(1).toLowerCase();
    console.log(personVar2);
}

capitalize("peter");

