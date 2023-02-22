"use strit"

/* FILTER */

const names = ["banana", "pear", "apple", "melon", "pineapple", "strawberry", "kiwi", "watermelon",];
/* console.log("Names", names); */

/* names.forEach(printNames);

function printNames(names, index, arr) {
    if (index === 0) {
        console.log("Array", arr);
    }

    console.log(`${names} has index number ${index}`)

} */

/* prints the last item of the array */

/* function printNames(arrayNames, index, arr) {
    if (index === arr.length - 1) {
        console.log("Array", arr);
    }

    console.log(`${arrayNames} has index number ${index}`)

} */

/* let shortNames = names.filter(removeLongNames);

function removeLongNames(name) {
    if (name.lenght > 5) {
        return false;
    } else {
        return true;
    }
}

function removeLongNames(name) {
    return (name.lenght <= 4)
}

console.log("Short names", shortNames); */

/* SORT  METHOD*/
console.log("Names not sorted", names);

names.sort();

console.log("names sorted with just methods sort", names);

/* COMPARE FUNCTON */

names.sort(sortAlphabet);

function sortAlphabet(a, b) {
    console.log(`name A: ${a} and name B: ${b}`);
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
}
console.log("names sorted with comparision function by alphabet", names);

//mirar screenshot i modificar 
function sortAlphabet(a, b) {
    console.log(`name A: ${a} and name B: ${b}`);
    if (a.lenght > b.lenght) {
        return 1;
    } else if (b.lenght < a.lenght) {
        return -1;
    } else {
        return 0;
    }
}
console.log("names sorted with comparision function by lenght", names);