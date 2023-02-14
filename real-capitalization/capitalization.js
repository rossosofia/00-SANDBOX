"use strict"

const fullname = "peter heronimous lind";

const firstName = fullname.substring(0, fullname.indexOf(" "));
const middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
const lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);

const arr = fullname.split(" ");
const newname = (arr[0].charAt(0).toUpperCase() + arr[0].slice(1)) + " " + (arr[1].charAt(0).toUpperCase() + arr[1].slice(1)) + " " + (arr[2].charAt(0).toUpperCase() + arr[2].slice(1))  ;

// console.log(newname);

// better way :)

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const newname2 = arr.join(" ");
// console.log(newname2);



// -------- 13.02 Capitalization function ---------

const fullname2 = "pETerheroNIMous lINd";

// capitalize the first letter of the entire sentence
function capitalize(str){
    let newname = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    console.log(newname);
}

// capitalize the first letter after each space
function capitalize2(str){
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1).toLowerCase();
    }
    str = str.join(" ");
    console.log(str);
}

// capitalize(fullname2);
// capitalize2(fullname2);
// capitalize2("pETer heroNIMous miChael lINd");



// ---- 14.02 capitalize(str) and return value -----

function capitalize3(str){
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1).toLowerCase();
    }
    str = str.join(" ");
    return str;
}

const fullname3 = "pETEr";
const cap = capitalize3(fullname3);
console.log( cap );

//short way, i just console log the function using the argument i need
console.log(capitalize3("sOFIa"));


