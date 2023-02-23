"use strict"

// import {capitalize, makeSpaces} from "./stringscript.js"; 
import * as stringTools from "./stringscript.js";

// we don't need this because modules promise that the DOM is fully loaded before run the script. In addition, you can move script links up in the HTML (take a look at the HTML)
// window.addEventListener("DOMContentLoaded", start);ù
// MODULES ONLY RUN ON LIVE SERVER OR SERVERS

start();

function start() {
  console.log("Start!");
  sayHello("peter");
}

function sayHello( name ) {
  // const greeting = makeSpaces(`Hello ${capitalize(name)}!`);
  const greeting = stringTools.makeSpaces(`Hello ${stringTools.capitalize(name)}!`);
  document.querySelector("#output").textContent = greeting;
  console.log("greeting:", greeting);
}

