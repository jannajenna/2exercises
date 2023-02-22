"use strict"

/* FLAGS */

//Consider this:
//A function that should return weather you've drowned or not based on these conditions:
//If se level is higher than 2 meters above average  and you are not wearing wetsuit
//If sea level is less than 1 meter and you're lying down

/* isDrowned(1.5, true, true) */
console.log("is drowned", isDrowned(2.5, true, true));

function isDrowned(seaLevel, wetSuit, lyingDown) {
    let isDrowned = false

    if (seaLevel > 2 && !wetSuit) {
        isDrowned = true;
        console.log("Drowned!")
    } else if (seaLevel < 1 && lyingDown) {
        isDrowned = true;
        console.log("Drowned!")
    }
    return isDrowned;
};

/* LEAP YEAR */

/* function isLeapYear() */