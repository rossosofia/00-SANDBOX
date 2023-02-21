"use strict"

// let otherName = "Klaus";

// console.log("other name:" , otherName);


// console.log("Names:", names);


names.forEach(printNames);

function printNames(element, index, arr){
        if(index === arr.length -1){
                console.log("Array: ", arr)}
                console.log(`${element} has index number ${index}`)
        }
        
        
const names = ["Signe", "John", "Frank", "Lone", "Gwendoline", "Freddie"];

let shortNames = names.filter(removeLongNames);

// function removeLongNames(name){
//     if (name.length > 5){
//         return false;
//         } else {
//         return true;    }
// }

function removeLongNames(name){
    return (name.length <= 5);
}

console.log(shortNames);