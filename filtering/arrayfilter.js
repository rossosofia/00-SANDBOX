"use strict"

// array methods
//  A Predacate (and if functions)

const animals = [
    {
        name: "Mandu",
        type: "cat"
    },
    {
        name: "Mia",
        type: "cat"
    },
    {
        name: "Leeloo",
        type: "dog"
    },
    {
        name: "Toothless",
        type: "dog"
    }
];
  
function all(){
    return true;
}

function none(){
    return false;
}

function isCat(animal){
    if (animal.type === "cat") {
        return true;
    } else {
        return false;
    }
}

// console.log("ALL", animals.filter(all));
// console.log("NONE", animals.filter(none));
console.log("ONLY CATS", animals.filter(isCat));