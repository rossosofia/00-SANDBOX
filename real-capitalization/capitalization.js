"use strict"

const fullname = "peter heronimous lind";

const firstName = fullname.substring(0, fullname.indexOf(" "));
const middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
const lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);

const arr = fullname.split(" ");
const newname = (arr[0].charAt(0).toUpperCase() + arr[0].slice(1)) + " " + (arr[1].charAt(0).toUpperCase() + arr[1].slice(1)) + " " + (arr[2].charAt(0).toUpperCase() + arr[2].slice(1))  ;

console.log(newname);



// better way :)

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const newname2 = arr.join(" ");
console.log(newname2);

