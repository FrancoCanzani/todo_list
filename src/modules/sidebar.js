const sidebar = document.getElementById("sidebar");
const burger = document.getElementById("burger_menu");
const new_project = document.getElementsByClassName("add_project")[0];
const new_project_popup = document.getElementsByClassName("new_project")[0];

function openSidebar() {
  burger.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    burger.classList.toggle("open");
  });
}

function formPopup(button, formDiv) {
  button.addEventListener("click", function () {
    formDiv.style.visibility = "visible";
    formDiv.style.opacity = 1;
  });
}

export { openSidebar, formPopup, new_project, new_project_popup };
