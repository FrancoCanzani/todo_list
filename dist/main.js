/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo_list/./src/styles/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sidebar */ \"./src/modules/sidebar.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"formPopup\": () => (/* binding */ formPopup),\n/* harmony export */   \"new_project\": () => (/* binding */ new_project),\n/* harmony export */   \"new_project_popup\": () => (/* binding */ new_project_popup),\n/* harmony export */   \"openSidebar\": () => (/* binding */ openSidebar)\n/* harmony export */ });\nconst sidebar = document.getElementById(\"sidebar\");\r\nconst burger = document.getElementById(\"burger_menu\");\r\nconst new_project = document.getElementsByClassName(\"add_project\")[0];\r\nconst new_project_popup = document.getElementsByClassName(\"new_project\")[0];\r\nconst form = document.getElementById(\"form\");\r\nconst projects = document.getElementsByClassName(\"projects\")[0];\r\n\r\nfunction openSidebar() {\r\n  burger.addEventListener(\"click\", function () {\r\n    sidebar.classList.toggle(\"open\");\r\n    burger.classList.toggle(\"open\");\r\n  });\r\n}\r\n\r\nopenSidebar();\r\n\r\nfunction formPopup(button, formDiv) {\r\n  button.addEventListener(\"click\", function () {\r\n    formDiv.style.visibility = \"visible\";\r\n    formDiv.style.opacity = 1;\r\n  });\r\n}\r\n\r\nformPopup(new_project, new_project_popup);\r\n\r\nfunction hidePopup() {\r\n  new_project_popup.style.visibility = \"hidden\";\r\n}\r\n\r\nfunction addNewProject() {\r\n  let newProject = document.createElement(\"div\");\r\n  newProject.classList.add(\"added_project\");\r\n  projects.appendChild(newProject);\r\n  let new_project_title = document.createElement(\"h1\");\r\n  new_project_title.innerText = document.getElementById(\"project_name\").value;\r\n  newProject.appendChild(new_project_title);\r\n\r\n  const delete_button = document.createElement(\"img\");\r\n  delete_button.src = \"assets/delete.svg\";\r\n  delete_button.classList.add(\"delete_button\");\r\n  newProject.appendChild(delete_button);\r\n  delete_button.addEventListener(\"click\", function () {\r\n    const parent = this.parentElement;\r\n    parent.remove();\r\n  });\r\n}\r\n\r\nlet data = [];\r\n\r\nform.addEventListener(\"submit\", function (e) {\r\n  e.preventDefault();\r\n  const myFormData = new FormData(e.target);\r\n  const formDataObj = {};\r\n  myFormData.forEach((value, key) => (formDataObj[key] = value));\r\n  data.push(formDataObj);\r\n  console.log(data);\r\n  addNewProject();\r\n  hidePopup();\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/modules/sidebar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;