"use strict"
console.log("hello world");

// let letters = ["a", "b", "c", "d","e","f"];
// console.log(letters);

// let someLetter = letters[3];
// let anotherLetter = letters[5];
// console.log(someLetter);
// console.log(anotherLetter);

// let newarr = letters;
// newarr[4] = "*";

// console.log(letters[4]);
// console.log(newarr);


// --------------

const people = ["harry", "ron", "hermione"];
console.log(people);

let result;

result = people.push("Draco"); // adds draco
console.log(people); // this gives an array of 4 elements
console.log(result); // number of objs in the array

result = people.pop(); // removes the last?
console.log(people); // this gives the current array
console.log(result); // a string with content of the removed item

result = people.push("Naville");
console.log(people); 
console.log(result); // number of objs in the array

result = people.push("Luna");
console.log(people); 
console.log(result); // number of objs in the array

result = people.slice(0,3);
console.log(people); // the entire array
console.log(result); // the array from index 0 to 3

result = people.splice(0,1 , "Cho"); // replace(remove this, put this)
console.log(people); // the new array
console.log(result); // gives you an array of the obj you replaced

people[1] = "Ginny"; // replace the obj at index 1
console.log(people); // the new array
console.log(result); // same as before, we haven't change it

result = people.push("Fred" , "George");
console.log(people); // the new array
console.log(result); // number of objs in the array

result = people.indexOf("Fred");
console.log(people); // the new array
console.log(result); // index of Fred

result = people.splice(result , 1); //note: result was 5!!! the 1 says how many to take
console.log(people); // not that one (fred) has been taken away
console.log(result); // gives you an array of the obj you replaced

const letters = Array.from("abcdefghijklmn");
console.log(letters);

const str = "abcdefghijklmn";
const arr1 = str.split();
const arr2 = Array.from(str);;
console.log(arr1); // array made of 1 item
console.log(arr2); // each elleter is one item (14 in total)
