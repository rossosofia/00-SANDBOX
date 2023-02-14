"use strict"
function randomBackground(){
    document.querySelector("body").style.backgroundColor = rgbToCSS(randomColor());
    // receives no parameters
    // call randomColor to get an rgb object
    // calls rgbToCSS with that object
    // uses the return value as value for body.style.backgroundColor, this setting the background color to a random value
    // setTimeout(randomBackground,100); //discoparty
    }

randomBackground();

function randomColor(){
    // receives no parameters
    //creates random values for r,g, b from 0 to 255
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return {r,g,b} // returns those as an object
}

function rgbToCSS(rgb){
    // receive rgb object with values - parameter
    // creates a string like "rgb(192,5,42)"
    // Return that string
    let result = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
    return result;
}




