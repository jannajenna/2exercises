"use sctrict"
console.log("Hello there");

/* Concatenation */
const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

console.log(n1 + n2);
console.log(s1 + s2);
console.log(n1 + s2);
console.log(s1 + n2);

/* Test falsy and truthy */

const value = -0;

if (value) {
    console.log("Value is truthy");
} else {
    console.log("Value is falsy")
}