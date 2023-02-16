"use strict"

function greeting(firstName){
    return `Hello ${firstName}`  
}

const sayHi = greeting;

console.log(sayHi("Harry"));

