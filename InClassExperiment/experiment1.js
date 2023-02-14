"use strict"

let myName = "Peter";

let myFullName = {
    value: "Peter",
};

console.log(myName);

console.log(myFullName.value); //you are accessing the property of the value

anExample();

printStuff(myFullName);

anotherFunction(myName); //nothing appens because the function at this moment is just returning something and not console.logit

//I want to put the function with the argument we need inside a variable, and then console.log the variable OUTSIDE the funcition
let theSailorSolution = anotherFunction(myName);

console.log(theSailorSolution)

function anExample() {
    console.log("This if stuff ... I guess")
}

function printStuff(theStuff) {
    console.log(theStuff);
}

function anotherFunction(anArgument){
    let aVariable = "What should we do with the " + anArgument;
    return aVariable;
}

// ---------

function greeting(firstName){
    return `Hell ${firstName}`;
}

const result = greeting("Peter");
console.log("Result:", result);


console.log("Result directly:", greeting("Sofia")); // this is the shortest way to write it, you don't have to declare a variable, you can call directly the function with the argument

Math.florr(Math.random()); //the logic is actually very similar to this