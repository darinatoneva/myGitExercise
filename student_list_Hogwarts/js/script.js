window.addEventListener("DOMContentLoaded", getAllStudents);

function getAllStudents() {
  fetch("js/students1991.json")
    .then(res => res.json())
    .then(loadNames);
}

function loadNames(studentsNames) {
  const missingPhoto = "res/missing-photo-icon-20.jpg";

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
