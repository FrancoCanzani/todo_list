import "./styles/main.scss";

import { format } from "date-fns";

const newProjectButton = document.querySelector(".add_project");
const newProjectPopup = document.querySelector(".new_project");
const form = document.querySelector("#form");
const projectsContainer = document.querySelector(".projects");
const projectInfo = document.querySelector(".project_info");
const newTaskButton = document.querySelector(".new_task_button");

let projectsArray = [];

// Show the new project form when the new project button is clicked
newProjectButton.addEventListener("click", function () {
  newProjectPopup.style.visibility = "visible";
  newProjectPopup.style.opacity = 1;
});

// Helper function to hide the new project form
function hidePopup() {
  newProjectPopup.style.visibility = "hidden";
}

// Hide the new project form when the form is submitted
form.addEventListener("submit", function (e) {
  e.preventDefault();
  hidePopup();
});

class TodoList {
  constructor(name, due_date, notes) {
    this.name = name;
    this.due_date = due_date;
    this.notes = notes;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  getTasks() {
    return this.tasks;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the values from the form inputs
  let name = document.getElementById("project_name").value;
  let date = document.getElementById("due_date").value;
  let notes = document.getElementById("notes").value;

  // Create a new TodoList object and add it to the projectsArray
  projectsArray.push(new TodoList(name, date, notes));

  // Create a new div for the project and add it to the projects container
  let newProject = document.createElement("div");
  newProject.classList.add("added_project");
  projectsContainer.appendChild(newProject);

  // Create an h1 element for the project title and add it to the new project div
  let newProjectTitle = document.createElement("h1");
  newProjectTitle.innerText = name;
  newProject.appendChild(newProjectTitle);

  // Add a click event listener to the new project div
  newProject.addEventListener("click", function () {
    projectInfo.innerHTML = "";
    newTaskButton.style.visibility = "visible";

    let projectTitleDisplay = document.createElement("h1");
    projectTitleDisplay.classList.add("project_title_display");
    projectInfo.appendChild(projectTitleDisplay);
    let projectDateDisplay = document.createElement("h1");
    projectDateDisplay.classList.add("project_date_display");
    projectInfo.appendChild(projectDateDisplay);
    let projectNotesDisplay = document.createElement("h1");
    projectNotesDisplay.classList.add("project_notes_display");
    projectInfo.appendChild(projectNotesDisplay);
    let index = projectsArray.findIndex(
      (obj) => obj.name === newProjectTitle.textContent
    );

    const formatDate = format(new Date(date), "MMMM dd, yyyy");
    projectTitleDisplay.innerText = name;
    projectDateDisplay.innerText = `Due date: ${formatDate}`;
    if (notes != "") {
      projectNotesDisplay.innerText = `Notes: ${notes}`;
    }
  });

  const delete_button = document.createElement("img");
  delete_button.src = "assets/delete.svg";
  delete_button.classList.add("delete_button");
  newProject.appendChild(delete_button);
  delete_button.addEventListener("click", function () {
    const parent = this.parentElement;
    projectInfo.innerHTML = "";
    parent.remove();
    projectsArray = projectsArray.filter(
      (obj) => obj.name !== parent.firstElementChild.textContent
    );

    console.log(projectsArray);
  });

  hidePopup();
});
