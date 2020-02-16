"use strict";

//1. get and return the input value
function getInputValue() {
  return document.getElementById("myInput").value;
}

//2. print the result in <div id="output"></div>
function printResult(myText) {
  let output = document.getElementById("output");

  //print it every time when the button is clicked, not just once
  output.innerHTML = output.innerHTML + myText + "<br>";
  option1();
}

/*3. when an option from the dropdown menu is chosen, trigger the function
related to this chosen option. Here I need 8 different option, one for each
of the 8 options of the <select>*/

//Option 1. If input is a first name: Make the first character in a name uppercase,
// and the rest lowercase
function option1() {
  let input = document.querySelector("#myInput").value;
  if (IsAfirstName(input)) {
    console.log("hip hip hooray");
  } else {
    console.log("ops, it's wrong");
  }
}
/*function IsAfirstName(inputText) {
  if (inputText.indexOf(" ") == -1 && inputText != "") {
    return true;
    //if (inputText.indexOf(" ") == -1 && inputText.length > 0) {
    //if there is no space return true
  } else {
    return false;
  }
}*/
function IsAfirstName(inputText) {
  if (inputText.indexOf(" ") == -1 && inputText != "") {
    return true;
    //if (inputText.indexOf(" ") == -1 && inputText.length > 0) {
    //if there is no space return true
  } else {
    return false;
  }
}

function UpperFirstLetter() {
  //Make the first character in a name uppercase, and the rest lowercase
  let writtenText = getInputValue();
  let findFirstLetter = writtenText.substring(0, 1);
  let makeUpperLetter = findFirstLetter.toUpperCase();
  printResult(makeUpperLetter);
}
UpperFirstLetter();

// Option 2. If input is a full name: Find the first name

function FindTheFirstName() {
  
}
