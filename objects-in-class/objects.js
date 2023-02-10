"use strict"
console.log('hello world');

const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0
};

const animal = Object.create(Animal);
animal.name = "Mio";
animal.type = "cat";
animal.desc = "asshole";

animal.image = "image.jpg";

console.log(animal.image);
console.log(Animal);
console.log(animal);