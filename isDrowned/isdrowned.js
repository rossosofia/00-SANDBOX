"use strict"

console.log("Is drowned", isDrowned(2.5, false, true));


function isDrowned(seaLevel, wetSuit, lyingDown){
    let isDrowned = false;
    if (seaLevel > 2 && !wetSuit){
        isDrowned = true;
        console.log ("Drowned");
    } else if (seaLevel < 1 && lyingDown){
        isDrowned = true;
        console.log ("Drowned");
    }
    return isDrowned;
}