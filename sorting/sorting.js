"use strict";
// ----------- SORTING --------

// const names = ["Signe", "John", "Frank", "Lone", "Gwendoline", "Freddie"];


// names.sort(sortAlphabetically);

// function sortAlphabetically(nameA, nameB){
//     // if(nameA < nameB){
//     //     return -1;
//     // } else if(nameB < nameA){
//     //     return 1;
//     // } else {
//     //     return 0;
//     // }
//         if(nameA.length < nameB.length){
//         return 1;
//     } else if(nameB.length < nameA.length){
//         return -1;
//     } else {
//         return 0;
//     }
// };

// console.log("sorted names", names);



// ----------- SORTING AND COMPARING --------
let cal = 0;

const animals = [
    {name: "Signe", type: "cat"},
    {name: "John", type: "honey badger"},
    {name: "Freddie", type: "dog"},
    {name: "ScoobyDoo", type: "dog"},
    {name: "Grazia", type: "cat"},
    {name: "Nico", type: "cat"},
];

console.log("Animals: ", animals);



const cats = animals.filter(findCats);

function findCats(animal){
    cal ++;
    return (animal.type === "cat");
}

console.log ("filtered animals", cats);




const FilteredAndCompared = cats.sort(compareByName);

function compareByName(animaleA, animaleB) {
    cal++;
    // console.log (`animaleA: ${animaleA.name}, animaleB: ${animaleB.name}`);
    if (animaleA.name < animaleB.name) {
        return -1;
    } else if (animaleA.name > animaleB.name) {
        return 1;
    } else {
        return 0;
    }
}

console.log("calculations:", cal++);
console.log("compared", FilteredAndCompared);