"use strict"

// console.log("hello world")

// HEX to RGB function

// #bada55 - 186 218 85

// function HexToRGB(#000000){
//     let r = " ";
//     let g = " ";
//     let b = " ";
//     console.log(r, g, b)
// }

window.addEventListener("DOMContentLoaded" , start);

function start(){
    console.log("START");
    addEventListeners();
}

function addEventListeners(){
    document.querySelector("input").addEventListener("input" , colorChange);
}

function colorChange(){
    console.log(this.value);
}

RGBToHSL(255, 0, 0);

// RGB to HSL  function
function RGBToHSL(r, g, b){
r /= 255;
g /= 255;
b /= 255;

let h, s, l;

const min = Math.min(r,g,b);
const max = Math.max(r,g,b);

if( max === min ) {
  h = 0;
} else
if (max === r) {
  h = 60 * (0 + (g - b) / (max - min) );
} else
if (max === g) {
  h = 60 * (2 + (b - r) / (max - min) );
} else
if (max === b) {
  h = 60 * (4 + (r - g) / (max - min) );
}

if (h < 0) {h = h + 360; }

l = (min + max) / 2;

if (max === 0 || min === 1 ) {
  s = 0;
} else {
  s = (max - l) / ( Math.min(l,1-l));
}
// multiply s and l by 100 to get the value in percent, rather than [0,1]
s *= 100;
l *= 100;

console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
}


