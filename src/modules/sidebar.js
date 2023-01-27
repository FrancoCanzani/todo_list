const new_project = document.getElementsByClassName("add_project")[0];
const new_project_popup = document.getElementsByClassName("new_project")[0];
const form = document.getElementById("form");
const projects = document.getElementsByClassName("projects")[0];
const content = document.getElementsByClassName("content")[0];

function formPopup(button, formDiv) {
  button.addEventListener("click", function () {
    formDiv.style.visibility = "visible";
    formDiv.style.opacity = 1;
  });
}

formPopup(new_project, new_project_popup);

function hidePopup() {
  new_project_popup.style.visibility = "hidden";
}

function addNewProject() {
  let newProject = document.createElement("div");
  newProject.classList.add("added_project");
  projects.appendChild(newProject);
  let new_project_title = document.createElement("h1");
  new_project_title.innerText = document.getElementById("project_name").value;
  newProject.appendChild(new_project_title);
  newProject.addEventListener("click", function () {
    content.innerHTML = "";
    let project_title_display = document.createElement("h1");
    project_title_display.classList.add("project_title_");
    content.appendChild(project_title_display);
    project_title_display.innerText = "Hello";
  });

  const delete_button = document.createElement("img");
  delete_button.src = "assets/delete.svg";
  delete_button.classList.add("delete_button");
  newProject.appendChild(delete_button);
  delete_button.addEventListener("click", function () {
    const parent = this.parentElement;
    parent.remove();
  });
}

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

let projectsArray = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("project_name").value;
  let date = document.getElementById("due_date").value;
  let notes = document.getElementById("notes").value;
  projectsArray.push(new TodoList(name, date, notes));
  addNewProject();
  hidePopup();
});

export { formPopup, new_project, new_project_popup, form };
