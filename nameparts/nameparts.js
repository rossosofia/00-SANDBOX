"use strict"

// Split the string into three variables, firstName middleName and lastName. use indexof and substring
const fullname = "Peter Heronimous Lind";
const firstName = fullname.substring(0, fullname.indexOf(" "));
const middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
const lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);

console.log(firstName);
console.log(middleName);
console.log(lastName);

const fullname2 = "Albus Percival Wulfric Brian Dumbledore";
const middleName2 = fullname2.substring(fullname2.indexOf(" ") + 1, fullname2.lastIndexOf(" "));

console.log(middleName2);

// METHOD 2

const names = fullname.split(" ");

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
