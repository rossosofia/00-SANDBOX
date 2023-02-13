"run strict"

console.log("hello world");

function sayHello(firstName){
    console.log(`Hello ${firstName}`)
}

sayHello(`Sofia`);

//what if a function is called with a variable called myname?
const myName = sayHello(); // Hello undefined

//There is another variable called firstName outside the function?
const firstName = "Grazia"; //dunno
sayHello(firstName);

//called without any parameter
sayHello(``); // just "hello"

function presentPet( animalName, firstName, animalType){
    console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`)
}

presentPet(firstName, `cat`, `Mio`);

presentPet(`cat`, `Mio`, firstName); //order matters


