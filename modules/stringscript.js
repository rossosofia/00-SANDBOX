"use strict";

export function capitalize( str ) {
  let tempString = makeSpaces(str);
  return tempString.trim().charAt(0).toUpperCase() + tempString.trim().substring(1).toLowerCase();
}

export function makeSpaces(str){
  let result = "";

  for(let i = 0; i < str.length; i++){
    if(i < str.length - 1){
      result += str[i] + " ";
    } else {
      result += str[i];
    }
  }

  return result;
}