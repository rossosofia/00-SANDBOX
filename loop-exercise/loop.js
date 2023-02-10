"use strict";
console.log("hello world");

// INIT LOOP PATTERN
let iterator = 0;
let maxNumberOfIteration;
let delay;
initLoop();

// function initLoop() {
//     console.log("initLoop");
//     maxNumberOfIteration = 15;
//     // maxNumberOfIteration can be a global variable
//     delay = 200;
//     // you can also omit this delay and just write 200 in the parentesis of the setTimeout. We used this one in comibination of delay += in the next function and we also declared delay as a global function.
//     loop();
// }

// function loop(){
//     console.log("loop", iterator);
//     iterator++; 
//     delay += 100;
//     if (iterator < maxNumberOfIteration){
//     setTimeout(loop, delay);
//     }
// }

// gived back random speeds, so it looks "natural" for example when typing
function initLoop() {
    console.log("initLoop");
    maxNumberOfIteration = 15;
    loop();
}

function loop(){
    console.log("loop", iterator);
    iterator++; 
    delay += 100;
    if (iterator < maxNumberOfIteration){
    setTimeout(loop, Math.random() * 1000);
    }
}


// LOOP MAKES SENSE WHEN YOU WANT TO DELAY SOMETHING. It's a tool if we want to present something to a user in a specific way.