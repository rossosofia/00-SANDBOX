"use strict"

// function isLeapYear(year){
//     let isLeapYear = false;
//     if (year%4 === 0 && !(year%100 === 0)){
//         isLeapYear = true;
//         console.log (`True, ${year} it's a leap year`);
//     } else if (year%400 === 0){
//         isLeapYear = true;
//         console.log (`True, ${year} it's a leap year`);
//     } else {
//         console.log (`False, ${year} it's not a leap year`);
//     }
//     return isLeapYear;
// }

function isLeapYear(year){
    let isLeapYear = false;
    if (year%4 ===0 && !(year%100 === 0) || year%400 ===0){
        isLeapYear = true;
        console.log (`True, ${year} it's a leap year`);
    } else {
        console.log (`False, ${year} it's not a leap year`);
    }
    return isLeapYear;
}

isLeapYear(2020);
isLeapYear(2019);
isLeapYear(1900);
isLeapYear(2000);
isLeapYear(1600);

// console.log(isLeapYear(2020));
// console.log(isLeapYear(2019));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));
