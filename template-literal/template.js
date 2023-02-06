"use strict";

// const nome = "Nico";
// const animaltype = "naughty cat";
// const animalname = "Mio";
// const len = nome.length;
// const letter = nome[0];

// console.log (`My name is ${nome}. \nI have a ${animaltype} called ${animalname}.`);
// console.log (`${nome} is ${len} characters long`);
// console.log (`The first letter of ${nome} is ${letter}`);ù

const fullname = "Albus Percival Wulfric Brian Dumbledore";
const len = fullname.length;
const letterindex = fullname[2];
// const firstName = fullname.substring(0,39); if you want the entire length you can omit the end
const firstName = fullname.substring(0, 5);
const searchTerm = 'Dumbledore';
const searchTerm2 = 'e';
const indexOfFirst = fullname.indexOf(searchTerm);
const lastIndexOf = fullname.lastIndexOf(fullname);
// text.substring(text.length - 4)



// What it the total number of characters, including spaces?
console.log(`${len}`);

// What is the character at index 2?
console.log(`${letterindex}`);

// Console the first name
console.log(`${firstName}`);

// what is the index of the first D in Dumbledore?
console.log(indexOfFirst);

// What is the index of the last e in Dumbledore?
console.log(`${fullname.lastIndexOf(searchTerm2)}`);

console.log(fullname.substring(fullname.length - 4));
