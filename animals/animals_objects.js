"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0
};

function start( ) {
    console.log("ready");

    loadJSON();
}

function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        // read the properties from the jsonObject
        let text = jsonObject.fullname.split(" ");
        //create new object from prototype
        const animal = Object.create(Animal); 
        // set properties on that object to the variables
        animal.name = text[0]; 
        animal.type = text[3];
        animal.desc = text[2];
        animal.age = jsonObject.age;
        // console.log(animal);
        allAnimals.push(animal); //pushing all the data into a new array and it's somehow working
        console.log(allAnimals);
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


