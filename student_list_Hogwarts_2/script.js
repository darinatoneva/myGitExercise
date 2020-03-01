"use strict";
window.addEventListener("DOMContentLoaded", getAllStudents);

const HTML = {};
const allStudents = [];
let allStudentsArray = new Array();
const missingPhoto = "missing-photo-icon-20.jpg"; //default image for students without photos
const StudentClass = {
  fullName: "",
  firstName: "",
  middelName: "",
  lastName: "",
  nickName: "",
  photo: missingPhoto,
  house: "",
  gender: "",
  prefect: false,
  expelled: false
};
let activeStudent;

function getAllStudents() {
  document.querySelectorAll(".filterButton").forEach(item => {
    item.addEventListener("click", event => {
      filterByHouse(item.innerText);
    });
  });

  document.querySelectorAll(".btn6").forEach(item => {
    item.addEventListener("click", event => {
      printExpelled();
    });
  });
  //tuk dobavqm tazi funkciq test
  document.querySelectorAll(".btn7").forEach(item => {
    item.addEventListener("click", event => {
      printPrefects();
    });
  });
  document.querySelector("#sortSelect").addEventListener("change", sortSelect);

  fetch("https://petlatkea.dk/2020/hogwarts/students.json")
    .then(res => res.json())
    .then(loadNames);

  modal.querySelector(".expelled").addEventListener("change", function() {
    activeStudent.expelled = this.checked;
  });
  modal.querySelector(".prefect").addEventListener("change", function() {
    activeStudent.prefect = this.checked;
  });
}

function printExpelled() {
  let expelledStudents = new Array();
  allStudentsArray.forEach(element => {
    if (element.expelled) {
      expelledStudents.push(element);
    }
  });
  printStudents(expelledStudents, true);
}

function printPrefects() {
  let prefectStudents = new Array();
  allStudentsArray.forEach(element => {
    if (element.prefect) {
      prefectStudents.push(element);
    }
  });
  printStudents(prefectStudents, true);
}

function loadNames(studentsNames) {
  //let studentsArray = new Array();
  studentsNames.forEach(function(jsonStudent) {
    //student object
    let studentObject = Object.create(StudentClass); //creating studentObject from StudentClass prototype/template
    studentObject.fullName = jsonStudent.fullname.toLowerCase().trim(); //student full name (from JSON)
    studentObject.gender = jsonStudent.gender.toLowerCase().trim(); // student gender (from JSON)
    studentObject.house = jsonStudent.house.toLowerCase().trim(); //student house (from JSON)

    //Changed list
    let nameString = studentObject.fullName.replace(/[-""]/g, " ");

    //console.log(nameString);

    //find the first name in the string
    const firstSpace = nameString.indexOf(" ");
    const firstNameOfTheString = nameString.substring(0, firstSpace);
    //console.log(firstNameOfTheString);

    //Find the last name in the string
    const lastSpace = nameString.lastIndexOf(" ");
    const lastNameOfTheString = nameString.substring(
      lastSpace + 1,
      nameString.length
    );

    //find the middle name in the string
    let middleNameOfTheString = nameString.substring(firstSpace + 1, lastSpace);

    //fixing the first name, capital letter + concatenation
    let firstNameFirstLetter = firstNameOfTheString.substring(0, 1);
    let capitalLetterFirstName = firstNameFirstLetter.toUpperCase();
    let restOfTheFirstName = firstNameOfTheString.substring(1, firstSpace);
    let firstNameFixed = `${capitalLetterFirstName}${restOfTheFirstName}`;

    //fixing the middle name, capital letter + concatenation
    let middleNameFirstLetter = middleNameOfTheString.substring(0, 1);
    let capitalLetterMiddleName = middleNameFirstLetter.toUpperCase();
    let restOfTheMiddleName = middleNameOfTheString.substring(1, lastSpace);
    let middleNameFixed = `${capitalLetterMiddleName}${restOfTheMiddleName}`;

    //fixing the last name, capital letter + concatenation
    let lastNameFirstLetter = lastNameOfTheString.substring(0, 1);
    let capitalLetterlastName = lastNameFirstLetter.toUpperCase();
    let restOfTheLastName = lastNameOfTheString.substring(1, nameString.length);
    let lastNameFixed = `${capitalLetterlastName}${restOfTheLastName}`;
    //replacing the fixed full names and showing them on the website
    studentObject.fullName = `${firstNameFixed} ${middleNameFixed} ${lastNameFixed}`.trim(); //student full name (from JSON)
    studentObject.firstName =
      firstNameFixed.length > 0
        ? firstNameFixed.trim()
        : studentObject.fullName;
    studentObject.lastName = lastNameFixed.trim();

    //fixing house names

    let houseFirstLetter = studentObject.house[0];
    //console.log(houseFirstLetter);
    let houseFirstLetterUpper = houseFirstLetter.toUpperCase();
    //console.log(houseFirstLetterUpper);
    let houseSecondPart = studentObject.house.substring(
      1,
      studentObject.house.length
    );
    //console.log(houseSecondPart);
    let houseFixed = `${houseFirstLetterUpper}${houseSecondPart}`;
    //replacing the fixed house name and showing it on the popup window
    studentObject.house = houseFixed.trim();

    //studentObject.gender = jsonStudent.gender.toLowerCase().trim(); // student gender (from JSON)

    studentObject.photo =
      "images/" +
      lastNameFixed.toLowerCase() +
      "_" +
      firstNameFirstLetter +
      ".png";
    //console.log(studentObject.photo);
    allStudentsArray.push(studentObject);
  });
}
function sortSelect() {
  let select = document.querySelector("#sortSelect");
  let selected = select.options[select.selectedIndex].value;

  if (selected == "firstname") {
    printStudents(allStudentsArray.sort(compareFirstName));
  }
  if (selected == "lastname") {
    printStudents(allStudentsArray.sort(compareLastName));
  }
  if (selected == "house") {
    printStudents(allStudentsArray.sort(compareHouse));
  }
}

function compareFirstName(student1, student2) {
  if (student1.firstName < student2.firstName) {
    return -1;
  } else {
    return 1;
  }
}
function compareLastName(student1, student2) {
  if (student1.lastName < student2.lastName) {
    return -1;
  } else {
    return 1;
  }
}
function compareHouse(house1, house2) {
  if (house1.house.toLowerCase().trim() < house2.house.toLowerCase().trim()) {
    return -1;
  } else {
    return 1;
  }
}

function filterByHouse(houseName) {
  //console.log(houseName);
  let filteredStudentsArray = new Array();
  allStudentsArray.forEach(function(student) {
    if (
      student.house.toLowerCase() == houseName.toLowerCase() ||
      houseName == "All"
    ) {
      filteredStudentsArray.push(student);
    }
  });
  document.body.querySelector("#test").innerHTML = "";
  printStudents(filteredStudentsArray);
}

function printStudents(studentsArray, showExpelled = false) {
  //console.log(1);
  document.body.querySelector("#test").innerHTML = "";

  studentsArray.forEach(function(studentObject) {
    if (!studentObject.expelled || showExpelled) {
      //console.log(studentObject.fullname);
      let studentList = document.querySelector(".studentList").content; //the template class
      let studentCopy = studentList.cloneNode(true); //copy of the template
      let singleStudent = studentCopy.querySelector(".singleStudent"); //the student table row class
      let link = singleStudent.querySelector(".name"); //student name <a> link
      let button = singleStudent.querySelector(".seeDetails"); //the button

      link.innerHTML = studentObject.fullName; //shows student full name (from JSON) into <a> html tag with class"name"
      //adding attributes to html "details button"
      button.setAttribute("name", studentObject.fullName);
      button.setAttribute("house", studentObject.house);

      //if a student has no image, use a default one
      if (studentObject.photo === undefined) {
        var studentPhoto = missingPhoto;
      } else {
        var studentPhoto = studentObject.photo;
      }

      button.setAttribute("pictureFilename", studentPhoto);

      //append modified template ("studentList") back to HTML and makes it "pop up" on button click
      //where:
      //studentCopy (const studentCopy = studentList.cloneNode(true)
      //let singleStudent = studentCopy.querySelector(".singleStudent"))

      document.body.querySelector("#test").appendChild(studentCopy);
      button.onclick = function() {
        popup(studentObject);
      };
      //console.log(studentObject.fullname);
    }
  });
}

//The modal code:
function popup(el) {
  activeStudent = el;

  modal.querySelector(".modalName").textContent = el.fullName;
  modal.querySelector(".modalHouse").textContent = el.house;
  modal.querySelector(".modalPicture").src = el.photo;
  let expelledCheck = modal.querySelector(".expelled");
  expelledCheck.checked = el.expelled ? true : false;

  let prefectCheck = modal.querySelector(".prefect");
  prefectCheck.checked = el.prefect ? true : false;

  modal.setAttribute("class", "");
  modal.classList.add("modal");
  modal.classList.add(el.house + "Theme");

  /*
  modal.querySelector(".modalName").textContent = el.getAttribute("name");
  modal.querySelector(".modalHouse").textContent = el.getAttribute("house");
  modal.querySelector(".modalSomethingElse").textContent = el.getAttribute(
    "somethingElse"
  );
  modal.querySelector(".modalPicture").src = el.getAttribute("pictureFileName");

  modal.setAttribute("class", "");
  modal.classList.add("modal");
  modal.classList.add(el.getAttribute("house") + "Theme");
  */

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
  printStudents(allStudentsArray);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    printStudents(allStudentsArray);
  }
};
// changing modal themes from the dropdown in thepop up window/modal
/*document.querySelector("select#theme").addEventListener("change", selected);
function selected() {
  modal.setAttribute("class", "");
  modal.classList.add("modal");
  modal.classList.add(this.value);
  modal.style.display = "block";
}
*/
