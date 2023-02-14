"use strict"

function hexToRGB(hex) {
    const r = parseInt(hex.substring(1,3), 16);
    const g = parseInt(hex.substring(3,5), 16);
    const b = parseInt(hex.substring(5,7), 16);
    // TODO Return r, g and b! but how?
    // return `${r} ${g} ${b}` // //option1
    // return {r,g,b}; // //Option2
    return {r,g,b}
}

console.log("Color as RGB", hexToRGB("#f80ea3"));

console.log("Red component:", hexToRGB("#f80ea3").r);

// a factory that can return objects to you. if you want more than one value in return you put everything into an object
function personFactory(firstName, lastName, age, isGinger){
    return {firstName, lastName, age, isGinger}
}

let newPerson = personFactory("Peter", "Tolstrup", 44, true);

console.log("KEA Person", newPerson);