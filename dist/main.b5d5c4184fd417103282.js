/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/index.js":
/*!*****************************!*\
  !*** ./src/module/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "displayTask": () => (/* binding */ displayTask),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
var mytaskList = document.getElementById('myTasksList');
var displayTask = function displayTask() {
  mytaskList.innerHTML = '';
  tasks.forEach(function (task) {
    var taskContainer = document.createElement('div');
    taskContainer.classList = 'content';
    taskContainer.index = "".concat(task.index);
    taskContainer.innerHTML = "<div class=\"taskInput\" id='".concat(task.index, "'>\n                          <input id=\"checkbox\" type=\"checkbox\"></input>\n                            <input id=\"info\" class=\"").concat(task.completed === true ? 'taskCompleted' : 'edit', "\"\n                              type=\"text\" value=\"").concat(task.description, "\">\n                            </input>\n                          </div>\n                          <i class=\"fa-solid fa-trash-can deleteTask\" id=\"removeTask\"></i>");
    //                       console.log('info', info);
    // const info = document.getElementById('#myTasksList, #info');
    // if (task.completed === true) {
    //   info.classList.add('taskCompleted');
    // }
    mytaskList.appendChild(taskContainer);
  });
};
var newTask = document.getElementById('input');
var addTask = function addTask(e) {
  if (e instanceof KeyboardEvent && e.key === 'Enter' || e === 'clicked') {
    var taskItem = {
      description: newTask.value,
      completed: false,
      index: tasks.length + 1
    };
    newTask.value = '';
    tasks = [].concat(_toConsumableArray(tasks), [taskItem]);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTask();
  }
};
var btn = document.getElementById('submit');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  addTask();
});
var editTask = function editTask(index, event) {
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    tasks[index - 1].description = event.target.value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};
var deleteTask = function deleteTask(targetIndex) {
  var listFiltered = tasks.filter(function (item) {
    return +item.index !== +targetIndex;
  });
  var newList = listFiltered.map(function (item, index) {
    return {
      description: item.description,
      completed: item.completed,
      index: index + 1
    };
  });
  tasks = newList;
  localStorage.setItem('tasks', JSON.stringify(newList));
  displayTask();
};


/***/ }),

/***/ "./src/module/script.js":
/*!******************************!*\
  !*** ./src/module/script.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveTasks": () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.saveTasks)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/module/index.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ "./src/module/script.js");

var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
var checkbox = document.querySelector('#myTasksList, #checkbox');
function checkCheckbox() {
  tasks.forEach(function (task) {
    if (checkbox.unchecked) {
      task.completed = false;
      console.log('task is incomplete');
    } else {
      task.completed = true;
      console.log('task is complete');
    }
  });
  saveTasks();
}
checkbox.addEventListener('click', checkCheckbox);
var saveTasks = function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
var clearCompletedTasks = function clearCompletedTasks() {
  // tasks = tasks.filter((task) => !task.completed);
  // updateTaskIndexes();
  // saveTasks();
  // // renderTaskList();
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var content = document.querySelector('.content');
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked = false) {
      content.parentNode.remove();
    }
  });
};
var clearAll = document.getElementById('remove');
clearAll.addEventListener('click', clearCompletedTasks);
var updateTaskIndexes = function updateTaskIndexes() {
  tasks.forEach(function (task, index) {
    task.index = index;
  });
};

//   const renderTaskList = () => {
//     taskList.innerHTML = '';
//   }



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  margin-top: 5%;\r\n  margin-bottom: 10%;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  justify-content: center;\r\n  width: 60%;\r\n  background-color: #ffff;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\r\n  border-radius: 5px;\r\n  padding: 2%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 5%;\r\n  border-bottom: 1.5px #ddd solid;\r\n}\r\n\r\n.tasksTitle {\r\n  margin-bottom: 15px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-bottom: 10%;\r\n  padding-bottom: 2%;\r\n  border-bottom: #ddd 1.5px solid;\r\n}\r\n\r\n.form input {\r\n  width: 85%;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n  padding-left: 1%;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px #ddd solid;\r\n  margin-bottom: 2%;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n.taskInput {\r\n  display: flex;\r\n  width: 90%;\r\n}\r\n\r\n#info {\r\n  padding-left: 5px;\r\n  width: 100%;\r\n  font-style: normal;\r\n  font-weight: 300;\r\n}\r\n\r\n.taskCompleted {\r\n  text-decoration: line-through;\r\n  outline: none;\r\n  border: none;\r\n  margin-left: 2%;\r\n  margin-top: 2%;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n}\r\n\r\n.edit {\r\n  outline: none;\r\n  border: none;\r\n  margin-left: 2%;\r\n  margin-top: 2%;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n}\r\n\r\n.clear {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.btn {\r\n  width: 600px;\r\n  height: 40px;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 10px;\r\n  background-color: #dbe1ec;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  margin-top: 40px;\r\n}\r\n\r\n.btn:hover {\r\n  transition: 0.5s ease-in-out;\r\n  background-color: rgb(155, 186, 219);\r\n  color: black;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,uBAAuB;EACvB,UAAU;EACV,uBAAuB;EACvB,yCAAyC;EACzC,kBAAkB;EAClB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,6BAA6B;EAC7B,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,YAAY;EACZ,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;EAC5B,oCAAoC;EACpC,YAAY;AACd","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  margin-top: 5%;\r\n  margin-bottom: 10%;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  justify-content: center;\r\n  width: 60%;\r\n  background-color: #ffff;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\r\n  border-radius: 5px;\r\n  padding: 2%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 5%;\r\n  border-bottom: 1.5px #ddd solid;\r\n}\r\n\r\n.tasksTitle {\r\n  margin-bottom: 15px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-bottom: 10%;\r\n  padding-bottom: 2%;\r\n  border-bottom: #ddd 1.5px solid;\r\n}\r\n\r\n.form input {\r\n  width: 85%;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n  padding-left: 1%;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px #ddd solid;\r\n  margin-bottom: 2%;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n.taskInput {\r\n  display: flex;\r\n  width: 90%;\r\n}\r\n\r\n#info {\r\n  padding-left: 5px;\r\n  width: 100%;\r\n  font-style: normal;\r\n  font-weight: 300;\r\n}\r\n\r\n.taskCompleted {\r\n  text-decoration: line-through;\r\n  outline: none;\r\n  border: none;\r\n  margin-left: 2%;\r\n  margin-top: 2%;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n}\r\n\r\n.edit {\r\n  outline: none;\r\n  border: none;\r\n  margin-left: 2%;\r\n  margin-top: 2%;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n}\r\n\r\n.clear {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.btn {\r\n  width: 600px;\r\n  height: 40px;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 10px;\r\n  background-color: #dbe1ec;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  margin-top: 40px;\r\n}\r\n\r\n.btn:hover {\r\n  transition: 0.5s ease-in-out;\r\n  background-color: rgb(155, 186, 219);\r\n  color: black;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _module_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/index.js */ "./src/module/index.js");
/* harmony import */ var _module_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/script.js */ "./src/module/script.js");



var tasksList = document.getElementById('myTasksList');
var newTask = document.getElementById('input');
var submit = document.getElementById('submit');
newTask.addEventListener('keypress', function (e) {
  (0,_module_index_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(e);
});
submit.addEventListener('click', function () {
  (0,_module_index_js__WEBPACK_IMPORTED_MODULE_1__.addTask)('clicked');
});
tasksList.addEventListener('click', function (event) {
  var clickedItem = event.target.classList[event.target.classList.length - 1];
  var li = event.target.parentElement;
  if (clickedItem === 'deleteTask') {
    (0,_module_index_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(li.index);
    event.target.parentElement.remove();
  }
  // saveTasks();
});

tasksList.addEventListener('keypress', function (event) {
  var taskToEdit = event.target.classList[event.target.classList.length - 1];
  var li = event.target.parentElement;
  var index = li.id;
  if (taskToEdit === 'edit') {
    (0,_module_index_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(index, event);
  }
});
document.addEventListener('DOMContentLoaded', (0,_module_index_js__WEBPACK_IMPORTED_MODULE_1__.displayTask)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzRCLGFBQWE7RUFDckMsSUFBSUYsV0FBVyxLQUFLLFlBQVksRUFBRTtJQUNoQ3pCLDREQUFVLENBQUMwQixFQUFFLENBQUNoRCxLQUFLLENBQUM7SUFDcEJvQixLQUFLLENBQUNDLE1BQU0sQ0FBQzRCLGFBQWEsQ0FBQ1AsTUFBTSxDQUFDLENBQUM7RUFDckM7RUFDQTtBQUNGLENBQUMsQ0FBQzs7QUFFRkcsU0FBUyxDQUFDNUIsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQUNHLEtBQUssRUFBSztFQUNoRCxJQUFNOEIsVUFBVSxHQUFHOUIsS0FBSyxDQUFDQyxNQUFNLENBQUN0QixTQUFTLENBQUNxQixLQUFLLENBQUNDLE1BQU0sQ0FBQ3RCLFNBQVMsQ0FBQ2EsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUM1RSxJQUFNb0MsRUFBRSxHQUFHNUIsS0FBSyxDQUFDQyxNQUFNLENBQUM0QixhQUFhO0VBQ3JDLElBQU1qRCxLQUFLLEdBQUdnRCxFQUFFLENBQUNHLEVBQUU7RUFDbkIsSUFBSUQsVUFBVSxLQUFLLE1BQU0sRUFBRTtJQUN6Qi9CLDBEQUFRLENBQUNuQixLQUFLLEVBQUVvQixLQUFLLENBQUM7RUFDeEI7QUFDRixDQUFDLENBQUM7QUFFRjdCLFFBQVEsQ0FBQzBCLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFeEIsNkRBQVcsQ0FBQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvbW9kdWxlL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvbW9kdWxlL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcclxuXHJcbmNvbnN0IG15dGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlUYXNrc0xpc3QnKTtcclxuY29uc3QgZGlzcGxheVRhc2sgPSAoKSA9PiB7XHJcbiAgbXl0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250ZW50JztcclxuICAgIHRhc2tDb250YWluZXIuaW5kZXggPSBgJHt0YXNrLmluZGV4fWA7XHJcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGFza0lucHV0XCIgaWQ9JyR7dGFzay5pbmRleH0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImluZm9cIiBjbGFzcz1cIiR7dGFzay5jb21wbGV0ZWQgPT09IHRydWUgPyAndGFza0NvbXBsZXRlZCcgOiAnZWRpdCd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7dGFzay5kZXNjcmlwdGlvbn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gZGVsZXRlVGFza1wiIGlkPVwicmVtb3ZlVGFza1wiPjwvaT5gO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmZvJywgaW5mbyk7XHJcbiAgICAvLyBjb25zdCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJyNteVRhc2tzTGlzdCwgI2luZm8nKTtcclxuICAgIC8vIGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgLy8gICBpbmZvLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb21wbGV0ZWQnKTtcclxuICAgIC8vIH1cclxuICAgIG15dGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Jyk7XHJcbmNvbnN0IGFkZFRhc2sgPSAoZSkgPT4ge1xyXG4gIGlmICgoKGUgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSAmJiAoZS5rZXkgPT09ICdFbnRlcicpKSB8fCAoZSA9PT0gJ2NsaWNrZWQnKSkge1xyXG4gICAgY29uc3QgdGFza0l0ZW0gPSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiBuZXdUYXNrLnZhbHVlLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcclxuICAgIH07XHJcbiAgICBuZXdUYXNrLnZhbHVlID0gJyc7XHJcbiAgICB0YXNrcyA9IFsuLi50YXNrcywgdGFza0l0ZW1dO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgIGRpc3BsYXlUYXNrKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xyXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBhZGRUYXNrKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgZWRpdFRhc2sgPSAoaW5kZXgsIGV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJycpIHJldHVybjtcclxuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICB0YXNrc1tpbmRleCAtIDFdLmRlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVUYXNrID0gKHRhcmdldEluZGV4KSA9PiB7XHJcbiAgY29uc3QgbGlzdEZpbHRlcmVkID0gdGFza3MuZmlsdGVyKChpdGVtKSA9PiAraXRlbS5pbmRleCAhPT0gK3RhcmdldEluZGV4KTtcclxuICBjb25zdCBuZXdMaXN0ID0gbGlzdEZpbHRlcmVkLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XHJcbiAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgIGNvbXBsZXRlZDogaXRlbS5jb21wbGV0ZWQsXHJcbiAgICBpbmRleDogaW5kZXggKyAxLFxyXG4gIH0pKTtcclxuICB0YXNrcyA9IG5ld0xpc3Q7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xyXG4gIGRpc3BsYXlUYXNrKCk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGRpc3BsYXlUYXNrLCBhZGRUYXNrLCBlZGl0VGFzaywgZGVsZXRlVGFzayxcclxufTsiLCJpbXBvcnQge2Rpc3BsYXlUYXNrLCBhZGRUYXNrfSBmcm9tICcuL2luZGV4LmpzJztcclxuXHJcbmxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xyXG5jb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteVRhc2tzTGlzdCwgI2NoZWNrYm94Jyk7XHJcblxyXG5mdW5jdGlvbiBjaGVja0NoZWNrYm94KCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2JveC51bmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rhc2sgaXMgaW5jb21wbGV0ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rhc2sgaXMgY29tcGxldGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgc2F2ZVRhc2tzKCk7XHJcbn1cclxuXHJcbmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDaGVja2JveCk7XHJcblxyXG5jb25zdCBzYXZlVGFza3MgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyQ29tcGxldGVkVGFza3MgPSAoKSA9PiB7XHJcbiAgICAvLyB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcclxuICAgIC8vIHVwZGF0ZVRhc2tJbmRleGVzKCk7XHJcbiAgICAvLyBzYXZlVGFza3MoKTtcclxuICAgIC8vIC8vIHJlbmRlclRhc2tMaXN0KCk7XHJcbiAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNoZWNrYm94ZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hlY2tib3gpIHtcclxuICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkID0gZmFsc2UpIHtcclxuICAgICAgICBjb250ZW50LnBhcmVudE5vZGUucmVtb3ZlKCk7IFxyXG4gICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXJBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlJyk7XHJcbiAgY2xlYXJBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckNvbXBsZXRlZFRhc2tzKTtcclxuICAgIFxyXG4gIGNvbnN0IHVwZGF0ZVRhc2tJbmRleGVzID0gKCkgPT4ge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgdGFzay5pbmRleCA9IGluZGV4O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8vICAgY29uc3QgcmVuZGVyVGFza0xpc3QgPSAoKSA9PiB7XHJcbi8vICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcclxuLy8gICB9XHJcblxyXG5leHBvcnQge3NhdmVUYXNrc30gZnJvbSAnLi9zY3JpcHQuanMnOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggI2RkZCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzVGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMCU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxuICBib3JkZXItYm90dG9tOiAjZGRkIDEuNXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggI2RkZCBzb2xpZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0lucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5mbyB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb21wbGV0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmUxZWM7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAxODYsIDIxOSk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggI2RkZCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzVGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMCU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxuICBib3JkZXItYm90dG9tOiAjZGRkIDEuNXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggI2RkZCBzb2xpZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0lucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5mbyB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb21wbGV0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmUxZWM7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAxODYsIDIxOSk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL21haW4uY3NzJztcclxuaW1wb3J0IHtcclxuICBkaXNwbGF5VGFzaywgYWRkVGFzaywgZWRpdFRhc2ssIGRlbGV0ZVRhc2ssXHJcbn0gZnJvbSAnLi9tb2R1bGUvaW5kZXguanMnO1xyXG5pbXBvcnQge3NhdmVUYXNrc30gZnJvbScuL21vZHVsZS9zY3JpcHQuanMnO1xyXG5cclxuY29uc3QgdGFza3NMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215VGFza3NMaXN0Jyk7XHJcbmNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKTtcclxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xyXG5cclxubmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgYWRkVGFzayhlKTtcclxufSk7XHJcblxyXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgYWRkVGFzaygnY2xpY2tlZCcpO1xyXG59KTtcclxuXHJcbnRhc2tzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGNsaWNrZWRJdGVtID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFtldmVudC50YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aCAtIDFdO1xyXG4gIGNvbnN0IGxpID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgaWYgKGNsaWNrZWRJdGVtID09PSAnZGVsZXRlVGFzaycpIHtcclxuICAgIGRlbGV0ZVRhc2sobGkuaW5kZXgpO1xyXG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfVxyXG4gIC8vIHNhdmVUYXNrcygpO1xyXG59KTtcclxuXHJcbnRhc2tzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IHRhc2tUb0VkaXQgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0W2V2ZW50LnRhcmdldC5jbGFzc0xpc3QubGVuZ3RoIC0gMV07XHJcbiAgY29uc3QgbGkgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICBjb25zdCBpbmRleCA9IGxpLmlkO1xyXG4gIGlmICh0YXNrVG9FZGl0ID09PSAnZWRpdCcpIHtcclxuICAgIGVkaXRUYXNrKGluZGV4LCBldmVudCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkaXNwbGF5VGFzaygpKTsiXSwibmFtZXMiOlsidGFza3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibXl0YXNrTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwbGF5VGFzayIsImlubmVySFRNTCIsImZvckVhY2giLCJ0YXNrIiwidGFza0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJpbmRleCIsImNvbmNhdCIsImNvbXBsZXRlZCIsImRlc2NyaXB0aW9uIiwiYXBwZW5kQ2hpbGQiLCJuZXdUYXNrIiwiYWRkVGFzayIsImUiLCJLZXlib2FyZEV2ZW50Iiwia2V5IiwidGFza0l0ZW0iLCJ2YWx1ZSIsImxlbmd0aCIsIl90b0NvbnN1bWFibGVBcnJheSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJlZGl0VGFzayIsImV2ZW50IiwidGFyZ2V0IiwiZGVsZXRlVGFzayIsInRhcmdldEluZGV4IiwibGlzdEZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsIm5ld0xpc3QiLCJtYXAiLCJjaGVja2JveCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja0NoZWNrYm94IiwidW5jaGVja2VkIiwiY29uc29sZSIsImxvZyIsInNhdmVUYXNrcyIsImNsZWFyQ29tcGxldGVkVGFza3MiLCJjaGVja2JveGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRlbnQiLCJjaGVja2VkIiwicGFyZW50Tm9kZSIsInJlbW92ZSIsImNsZWFyQWxsIiwidXBkYXRlVGFza0luZGV4ZXMiLCJ0YXNrc0xpc3QiLCJzdWJtaXQiLCJjbGlja2VkSXRlbSIsImxpIiwicGFyZW50RWxlbWVudCIsInRhc2tUb0VkaXQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=