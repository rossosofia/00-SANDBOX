"use strict"

const nome = "Peter Heronimous Lind";
const newname1 = nome.replace(nome.charAt(2), nome.charAt(2).toUpperCase());
const newname2 = nome.replace(nome[1], nome[1].toUpperCase());
const newname3 = nome.toUpperCase();


console.log(newname1);
console.log(newname2);
console.log(newname3);

