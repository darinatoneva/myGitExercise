"use strict";
/*3caPitalization
Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string 
with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.

Hint: use substring, toUpperCase, toLowerCase and simple string concatenation


Test your code with various crazy combinations of your own name, like “pETer”, “PEter”, “peteR”, “PEtER” and so on.

Make sure that it also works with longer names. Don't worry about names shorter than 3 characters.

 

Important: DO NOT look for solutions online - use the MDN documentation, and find the string methods that will help you. This exercise is about solving an unknown problem, not about finding existing solutions.
*/
/*let givenName = "peter";
let findThirdLetter = givenName.substring(2, 3);
let givenNamefirstPart = givenName.substring(0, 2);
let givenNameSecondPart = givenName.substring(3, givenName.length);

console.log(
  `${givenNamefirstPart}` +
    findThirdLetter.toUpperCase() +
    `${givenNameSecondPart}`
);*/

let givenName = "PEter";
let findThirdLetter = givenName.substring(2, 3);
let givenNamefirstPart = givenName.substring(0, 2);
let givenNameSecondPart = givenName.substring(3, givenName.length);

console.log(
  `${givenNamefirstPart}` +
    findThirdLetter.toUpperCase() +
    `${givenNameSecondPart}`
);
