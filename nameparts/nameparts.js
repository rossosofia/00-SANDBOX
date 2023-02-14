"use strict"

// // Split the string into three variables, firstName middleName and lastName. use indexof and substring
// const fullname = "Peter Heronimous Lind";
// const firstName = fullname.substring(0, fullname.indexOf(" "));
// const middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
// const lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

// const fullname2 = "Albus Percival Wulfric Brian Dumbledore";
// const middleName2 = fullname2.substring(fullname2.indexOf(" ") + 1, fullname2.lastIndexOf(" "));

// console.log(middleName2);

// // METHOD 2

// const names = fullname.split(" ");

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// // another method
// function fullName(lastName , firstName , middleName){
//     if(middleName===undefined){
//         let yourname =`${firstName} ${lastName}`;
//         console.log(yourname);
//     }else{
//     let  yourname =`${firstName} ${middleName} ${lastName}`;
//     console.log(yourname);
//     }
// }

// fullName("Potter", "Harry", "James");
// fullName("Potter", "Harry");
// fullName("Harry", "Potter"); 
// fullName("Potter", "Harry", "James", "Pottypotpot");

// --- 14.02 turn method --
const myFirstName = "sofia";
const mySecondName = "giovanna";
const myLastName = "amoroso";

 const result = giveFullName(myLastName, myFirstName, mySecondName);
 console.log(result);

 console.log("another result:", capitalize3(giveFullName("Amoroso", "Sofia", "Giovanna")))

 function giveFullName(lastName , firstName , middleName){
    if(middleName===undefined){
        return `${firstName} ${lastName}`
        // let yourname =`${firstName} ${lastName}`;
        // return yourname;
    }else{
        return `${firstName} ${middleName} ${lastName}`
    // let  yourname =`${firstName} ${middleName} ${lastName}`;
    // return yourname;
    }
}

function capitalize3(str){
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1).toLowerCase();
    }
    str = str.join(" ");
    return str;
}


