/*The Student object
Rather than using objects directly from JSON, as you have done so far, you are going to create completely 
new objects, with data from the JSON, and store those in the global array.

You will have to design a new Student object, that will contain all the needed data, in an orderly fashion.

You decide that it should at least contain:

First name
Last name
Middle name (if any)
Nick name 
Image/photo filename
House 
You design the prototype for the object, and then build code to read each JSON-object, and create a new Student object, 
and populate it with cleaned data from the JSON-object.

Store all the created student objects in a global array, and use that to build and display your list and modal.

Cleaning data
Splitting into parts
Since the JSON-data only contains the full name of each student, you need to write code that splits it into parts, 
capitalizes those parts correctly, and puts them into the newly created student object.

If a student doesn't have a middle name, the object should either have null or undefined for the middle name - you decide.

If a student has multiple middle names, you can combine them all into a single string, but remember to capitalize each one.

Nick names are put in quotation marks in the JSON, but should just be plain text in the student object.

Make sure that there aren't any spaces around names.

Capitalization
Usually the first letter of each name should be upper case, and the remaining should be lower case.

However, names with a hyphen, must have the first letter after the hyphen capitalized as well.

The house names should be capitalized in the same way.

Displaying data
Change your existing code to display the data from the new student objects, rather than the old JSON-data.

Fix the list so that it uses some combination of first and last name, and fix the popup, so that it displays 
all names: first, last, middle, and nick - but only when they are not null or undefined.*/

"use strict";

window.addEventListener("DOMContentLoaded", getAllStudents);

function getAllStudents() {
  fetch("https://petlatkea.dk/2020/hogwarts/students.json")
    .then(res => res.json())
    .then(loadNames);
}

function loadNames(studentsNames) {
  const missingPhoto = "missing-photo-icon-20.jpg";

  studentsNames.forEach(function(student) {
    const studentList = document.querySelector(".studentList").content;
    const studentCopy = studentList.cloneNode(true);
    var singleStudent = studentCopy.querySelector(".singleStudent");
    var link = singleStudent.querySelector(".name");
    var button = singleStudent.querySelector(".seeDetails");

    link.innerHTML = student.fullname;

    button.setAttribute("name", student.fullname);
    button.setAttribute("house", student.house);
    button.setAttribute("somethingElse", student.somethingElse);

    if (student.pic === undefined) {
      var studentPhoto = missingPhoto;
    } else {
      var studentPhoto = student.pic;
    }

    button.setAttribute("pictureFilename", studentPhoto);
    document.body.appendChild(studentCopy);
    button.onclick = function() {
      popup(this);
    };
  });
}
/*just a test
const Student = {
  firstName: "Ben",
  lastName: "Some",
  middleName: "Ani",
  nickName: "blah",
  photoFileName: "",
  house: ""
};

console.log(Student);
const student = Object.create(Student);*/

function popup(el) {
  modal.querySelector(".modalName").textContent = el.getAttribute("name");
  modal.querySelector(".modalHouse").textContent = el.getAttribute("house");
  modal.querySelector(".modalSomethingElse").textContent = el.getAttribute(
    "somethingElse"
  );
  modal.querySelector(".modalPicture").src = el.getAttribute("pictureFileName");

  modal.setAttribute("class", "");
  modal.classList.add("modal");
  modal.classList.add(el.getAttribute("house") + "Theme");
  modal.style.display = "block";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.querySelector("select#theme").addEventListener("change", selected);
function selected() {
  modal.setAttribute("class", "");
  modal.classList.add("modal");
  modal.classList.add(this.value);
  modal.style.display = "block";
}
