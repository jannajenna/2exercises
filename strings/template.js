"user strict"

/* const longline = "A very, very, very, very, very, very, very, very, very long line of text,\
that spans across the width of the editor.";


const navn = "Peter";
const drink = "Pepsi";

console.log(`Hello ${navn} would you like a ${drink}?`);
const text = `Hello ${navn} would you like a ${drink}?`;
console.log(text);

const owner = "Peter the tall";
const len = owner.length
const letter = owner[0];
const animal = "cat";
const animalName = "Mandu";

console.log(`My name is ${owner}.\nI have a ${animal} called ${animalName}.`);

console.log(`${owner} is ${len} characters long.`);

console.log(`The first lettter of ${owner} is ${letter}.`) */



const navn = "Albus Percival Wulfric Brian Dumbledore";

const total = navn.length;
const letter2 = navn[2];
const letter6 = navn[6];
const albus = navn.substring(0, 5);
const dumbledore = navn.substring(29);
const wulfric = navn.substring(15, 22);
const wulfric2 = navn.substring(14, 23);
const ian = navn.substring(25, 28);
const bus = navn.substring(2, 5);
const firstD = navn.indexOf("d");
const vowelE = navn.lastIndexOf("e");

console.log(`The total number of charaters of ${navn} is ${total}.`)
console.log(`The second letter of ${navn} is ${letter2} and the sixth is ${letter6} `);
console.log(`This is _${albus}_`);
console.log(`This is _${dumbledore}_`);
console.log(`This is _${wulfric}_`);
console.log(`This is _${wulfric2}_`);
console.log(`This is _${ian}_`);
console.log(`This is _${bus}_`);
console.log(`This is _${firstD}`);
console.log(`This is _${vowelE}_`);

/* spaces trim*/
const str1 = "  There is     space here \n ";
const str2 = str1.trim();

console.log(str1);
console.log(str2);
console.log(`_${str2}_`);

/* substring */
const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 5);
const lastName = fullName.substring(17)
console.log(`First name is:_${firstName}_`);
console.log(`Last name is:_${lastName}_`);