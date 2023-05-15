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
/* harmony export */   "createTaskLists": () => (/* binding */ createTaskLists),
/* harmony export */   "renderTaskList": () => (/* binding */ renderTaskList),
/* harmony export */   "updateTaskIndexes": () => (/* binding */ updateTaskIndexes)
/* harmony export */ });
var taskList = document.getElementById('task-list');
var deleteTask;
var editTaskDescription;
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
var saveTasks = function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
var markAsCompleted = function markAsCompleted(task) {
  task.completed = true;
};
var markAsIncomplete = function markAsIncomplete(task) {
  task.completed = false;
};
var createTaskLists = function createTaskLists(task) {
  var deleteButton = document.createElement('button');
  var listItemElement = document.createElement('li');
  var iconElement = document.createElement('i');
  var descriptionElement = document.createElement('span');
  var checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.checked = task.completed;
  checkboxElement.addEventListener('change', function () {
    if (checkboxElement.checked) {
      markAsCompleted(task);
    } else {
      markAsIncomplete(task);
    }
    saveTasks();

    //  Check if the checkbox is now checked
    if (checkboxElement.checked) {
      deleteButton.style.display = 'block';
      iconElement.style.display = 'none';
      listItemElement.style.display = 'flex';
      listItemElement.style.justifyContent = 'flex-start';
      deleteButton.style.marginLeft = 'auto';
    } else {
      deleteButton.style.display = 'none';
      iconElement.style.display = 'block';
      descriptionElement.style.color = '#999';
    }
  });
  descriptionElement.textContent = task.description;
  descriptionElement.addEventListener('click', function () {
    editTaskDescription(task);
  });
  listItemElement.appendChild(checkboxElement);
  listItemElement.appendChild(descriptionElement);
  iconElement.classList.add('uil', 'uil-ellipsis-v');
  iconElement.addEventListener('click', function () {
    editTaskDescription(task);
  });
  listItemElement.appendChild(iconElement);
  deleteButton.innerHTML = '<i class="uil uil-trash"></i>';
  deleteButton.classList.add('delete-button');
  deleteButton.style.display = 'none';
  deleteButton.addEventListener('click', function () {
    deleteTask(task.index);
  });
  listItemElement.appendChild(deleteButton);
  return listItemElement;
};
var renderTaskList = function renderTaskList() {
  taskList.innerHTML = '';
  tasks.sort(function (task1, task2) {
    return task1.index - task2.index;
  }).forEach(function (task) {
    var listItemElement = createTaskLists(task);
    taskList.appendChild(listItemElement);
  });
};
var updateTaskIndexes = function updateTaskIndexes() {
  tasks.forEach(function (task, index) {
    task.index = index;
  });
};
deleteTask = function deleteTask(index) {
  tasks.filter(function (task) {
    return task.index !== index;
  });
  updateTaskIndexes();
  saveTasks();
  renderTaskList();
};
editTaskDescription = function editTaskDescription(task) {
  var inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.value = task.description;
  inputElement.classList.add('edit-input');
  inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      task.description = inputElement.value.trim();
      saveTasks();
      renderTaskList();
    } else if (event.key === 'Escape') {
      renderTaskList();
    }
  });
  var listItemElement = taskList.children[task.index];
  listItemElement.replaceChild(inputElement, listItemElement.children[1]);
  inputElement.select();
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  outline: 0;\r\n  border: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  background: rgb(211,211,211);\r\n}\r\n\r\n.container {\r\n  width: 50%;\r\n  margin: 8rem auto 0;\r\n  padding: 2rem;\r\n  background: #f9f9f9;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\r\n}\r\n\r\nhr {\r\n  border-bottom: 1px solid #ddd;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.3rem;\r\n  color: rgb(105,105,105);\r\n  font-weight: 400;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  margin: 20px;\r\n}\r\n\r\n#new-task {\r\n  border: none;\r\n}\r\n\r\n#task-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: rgb(105,105,105);\r\n  font-size: 1.1rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\ni.uil-ellipsis-v {\r\n  margin-left: auto;\r\n}\r\n\r\ninput[type='text'] {\r\n  flex: 1;\r\n  padding: 10px;\r\n  background: transparent;\r\n  margin-left: -1.3rem;\r\n  color: rgb(105,105,105);\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#new-task::placeholder {\r\n  color: rgb(105,105,105);\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.delete-button {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #c0392b;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.2rem;\r\n  margin-left: 0.5rem;\r\n  padding: 0;\r\n}\r\n\r\nli:hover .delete-button {\r\n  display: block;\r\n}\r\n\r\ni {\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.title i {\r\n  color: rgb(105,105,105);\r\n}\r\n\r\nbutton[type='submit'] {\r\n  border: none;\r\n  border-radius: 0 5px 5px 0;\r\n  background-color: #dbe1ec;\r\n  cursor: pointer;\r\n  outline: none;\r\n  margin-left: 0.5rem;\r\n  color: rgb(105,105,105);\r\n}\r\n\r\nspan {\r\n  margin-left: 10px;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  margin-right: 10px;\r\n}\r\n\r\ninput[type='checkbox']:checked + span {\r\n  text-decoration: line-through;\r\n}\r\n\r\na {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 2rem auto 0;\r\n  font-size: 1.3rem;\r\n  font-weight: 400;\r\n  color: rgb(105,105,105);\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;EAC/B,4BAA4B;AAC9B;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,iDAAiD;AACnD;;AAEA;EACE,6BAA6B;EAC7B,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,yBAAyB;EACzB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300;1,400&display=swap');\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  outline: 0;\r\n  border: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  background: rgb(211,211,211);\r\n}\r\n\r\n.container {\r\n  width: 50%;\r\n  margin: 8rem auto 0;\r\n  padding: 2rem;\r\n  background: #f9f9f9;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\r\n}\r\n\r\nhr {\r\n  border-bottom: 1px solid #ddd;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.3rem;\r\n  color: rgb(105,105,105);\r\n  font-weight: 400;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  margin: 20px;\r\n}\r\n\r\n#new-task {\r\n  border: none;\r\n}\r\n\r\n#task-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: rgb(105,105,105);\r\n  font-size: 1.1rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\ni.uil-ellipsis-v {\r\n  margin-left: auto;\r\n}\r\n\r\ninput[type='text'] {\r\n  flex: 1;\r\n  padding: 10px;\r\n  background: transparent;\r\n  margin-left: -1.3rem;\r\n  color: rgb(105,105,105);\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#new-task::placeholder {\r\n  color: rgb(105,105,105);\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.delete-button {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #c0392b;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.2rem;\r\n  margin-left: 0.5rem;\r\n  padding: 0;\r\n}\r\n\r\nli:hover .delete-button {\r\n  display: block;\r\n}\r\n\r\ni {\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.title i {\r\n  color: rgb(105,105,105);\r\n}\r\n\r\nbutton[type='submit'] {\r\n  border: none;\r\n  border-radius: 0 5px 5px 0;\r\n  background-color: #dbe1ec;\r\n  cursor: pointer;\r\n  outline: none;\r\n  margin-left: 0.5rem;\r\n  color: rgb(105,105,105);\r\n}\r\n\r\nspan {\r\n  margin-left: 10px;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  margin-right: 10px;\r\n}\r\n\r\ninput[type='checkbox']:checked + span {\r\n  text-decoration: line-through;\r\n}\r\n\r\na {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 2rem auto 0;\r\n  font-size: 1.3rem;\r\n  font-weight: 400;\r\n  color: rgb(105,105,105);\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!***************************!*\
  !*** ./src/module/app.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/module/index.js");


var taskList = document.getElementById('task-list');
var newTask = document.getElementById('new-task');
var form = document.querySelector('form');
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function addNewTask(description) {
  var taskIndex = tasks.length;
  var task = {
    description: description,
    completed: false,
    index: taskIndex
  };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  var listItemElement = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.createTaskLists)(task);
  taskList.appendChild(listItemElement);
}
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var taskDescription = newTask.value;
  if (taskDescription.trim() === '') {
    return;
  }
  addNewTask(taskDescription);
  newTask.value = '';
});
(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskList)();
window.addEventListener('load', _index_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskList);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLEVBQUU7QUFFN0QsU0FBU2dELFVBQVVBLENBQUN4QixXQUFXLEVBQUU7RUFDL0IsSUFBTXlCLFNBQVMsR0FBR3JELEtBQUssQ0FBQ3NELE1BQU07RUFFOUIsSUFBTTdDLElBQUksR0FBRztJQUFFbUIsV0FBVyxFQUFYQSxXQUFXO0lBQUVsQixTQUFTLEVBQUUsS0FBSztJQUFFdUIsS0FBSyxFQUFFb0I7RUFBVSxDQUFDO0VBQ2hFckQsS0FBSyxDQUFDdUQsSUFBSSxDQUFDOUMsSUFBSSxDQUFDO0VBQ2hCTixZQUFZLENBQUNHLE9BQU8sQ0FBQyxPQUFPLEVBQUVMLElBQUksQ0FBQ00sU0FBUyxDQUFDUCxLQUFLLENBQUMsQ0FBQztFQUNwRCxJQUFNZSxlQUFlLEdBQUdILDBEQUFlLENBQUNILElBQUksQ0FBQztFQUM3Q2QsUUFBUSxDQUFDa0MsV0FBVyxDQUFDZCxlQUFlLENBQUM7QUFDdkM7QUFFQW1DLElBQUksQ0FBQzdCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDc0IsS0FBSyxFQUFLO0VBQ3pDQSxLQUFLLENBQUNhLGNBQWMsQ0FBQyxDQUFDO0VBQ3RCLElBQU1DLGVBQWUsR0FBR1IsT0FBTyxDQUFDUCxLQUFLO0VBQ3JDLElBQUllLGVBQWUsQ0FBQ1osSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDakM7RUFDRjtFQUNBTyxVQUFVLENBQUNLLGVBQWUsQ0FBQztFQUMzQlIsT0FBTyxDQUFDUCxLQUFLLEdBQUcsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFFRlIseURBQWMsQ0FBQyxDQUFDO0FBQ2hCd0IsTUFBTSxDQUFDckMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFYSxxREFBYyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL21vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvbW9kdWxlL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcbmxldCBkZWxldGVUYXNrO1xubGV0IGVkaXRUYXNrRGVzY3JpcHRpb247XG5cbmNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG5jb25zdCBzYXZlVGFza3MgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59O1xuXG5jb25zdCBtYXJrQXNDb21wbGV0ZWQgPSAodGFzaykgPT4ge1xuICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XG59O1xuXG5jb25zdCBtYXJrQXNJbmNvbXBsZXRlID0gKHRhc2spID0+IHtcbiAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2tMaXN0cyA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBsaXN0SXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIGNvbnN0IGNoZWNrYm94RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrYm94RWxlbWVudC50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2tib3hFbGVtZW50LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcbiAgY2hlY2tib3hFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAoY2hlY2tib3hFbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgIG1hcmtBc0NvbXBsZXRlZCh0YXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFya0FzSW5jb21wbGV0ZSh0YXNrKTtcbiAgICB9XG4gICAgc2F2ZVRhc2tzKCk7XG5cbiAgICAvLyAgQ2hlY2sgaWYgdGhlIGNoZWNrYm94IGlzIG5vdyBjaGVja2VkXG4gICAgaWYgKGNoZWNrYm94RWxlbWVudC5jaGVja2VkKSB7XG4gICAgICBkZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBpY29uRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgICBkZWxldGVCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBpY29uRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5zdHlsZS5jb2xvciA9ICcjOTk5JztcbiAgICB9XG4gIH0pO1xuXG4gIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgZGVzY3JpcHRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVkaXRUYXNrRGVzY3JpcHRpb24odGFzayk7XG4gIH0pO1xuXG4gIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChjaGVja2JveEVsZW1lbnQpO1xuICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcblxuICBpY29uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1aWwnLCAndWlsLWVsbGlwc2lzLXYnKTtcbiAgaWNvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZWRpdFRhc2tEZXNjcmlwdGlvbih0YXNrKTtcbiAgfSk7XG4gIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG5cbiAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cInVpbCB1aWwtdHJhc2hcIj48L2k+JztcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZVRhc2sodGFzay5pbmRleCk7XG4gIH0pO1xuXG4gIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gIHJldHVybiBsaXN0SXRlbUVsZW1lbnQ7XG59O1xuXG5jb25zdCByZW5kZXJUYXNrTGlzdCA9ICgpID0+IHtcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgdGFza3NcbiAgICAuc29ydCgodGFzazEsIHRhc2syKSA9PiB0YXNrMS5pbmRleCAtIHRhc2syLmluZGV4KVxuICAgIC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbUVsZW1lbnQgPSBjcmVhdGVUYXNrTGlzdHModGFzayk7XG4gICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbUVsZW1lbnQpO1xuICAgIH0pO1xufTtcblxuY29uc3QgdXBkYXRlVGFza0luZGV4ZXMgPSAoKSA9PiB7XG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGluZGV4O1xuICB9KTtcbn07XG5cbmRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmluZGV4ICE9PSBpbmRleCk7XG4gIHVwZGF0ZVRhc2tJbmRleGVzKCk7XG4gIHNhdmVUYXNrcygpO1xuICByZW5kZXJUYXNrTGlzdCgpO1xufTtcblxuZWRpdFRhc2tEZXNjcmlwdGlvbiA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RWxlbWVudC50eXBlID0gJ3RleHQnO1xuICBpbnB1dEVsZW1lbnQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdC1pbnB1dCcpO1xuXG4gIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGlucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XG4gICAgICBzYXZlVGFza3MoKTtcbiAgICAgIHJlbmRlclRhc2tMaXN0KCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICByZW5kZXJUYXNrTGlzdCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1FbGVtZW50ID0gdGFza0xpc3QuY2hpbGRyZW5bdGFzay5pbmRleF07XG4gIGxpc3RJdGVtRWxlbWVudC5yZXBsYWNlQ2hpbGQoaW5wdXRFbGVtZW50LCBsaXN0SXRlbUVsZW1lbnQuY2hpbGRyZW5bMV0pO1xuICBpbnB1dEVsZW1lbnQuc2VsZWN0KCk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVUYXNrSW5kZXhlcywgcmVuZGVyVGFza0xpc3QsIGNyZWF0ZVRhc2tMaXN0cyB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCw0MDA7MSwzMDA7MSw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjExLDIxMSwyMTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDhyZW0gYXV0byAwO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMCA3cHggMjlweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDQge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBjb2xvcjogcmdiKDEwNSwxMDUsMTA1KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogcmdiKDEwNSwxMDUsMTA1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5pLnVpbC1lbGxpcHNpcy12IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMS4zcmVtO1xcclxcbiAgY29sb3I6IHJnYigxMDUsMTA1LDEwNSk7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiKDEwNSwxMDUsMTA1KTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYzAzOTJiO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIgLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaSB7XFxyXFxuICBjb2xvcjogcmdiKDEwNSwxMDUsMTA1KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZTFlYztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgY29sb3I6IHJnYigxMDUsMTA1LDEwNSk7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBzcGFuIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG8gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiByZ2IoMTA1LDEwNSwxMDUpO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDQwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyMTEsMjExLDIxMSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogOHJlbSBhdXRvIDA7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwIDdweCAyOXB4IDA7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMTA1LDEwNSwxMDUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2sge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiByZ2IoMTA1LDEwNSwxMDUpO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbmkudWlsLWVsbGlwc2lzLXYge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xLjNyZW07XFxyXFxuICBjb2xvcjogcmdiKDEwNSwxMDUsMTA1KTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2s6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTA1LDEwNSwxMDUpO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNjMDM5MmI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciAuZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBpIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTA1LDEwNSwxMDUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b25bdHlwZT0nc3VibWl0J10ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlMWVjO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICBjb2xvcjogcmdiKDEwNSwxMDUsMTA1KTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIHNwYW4ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDJyZW0gYXV0byAwO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6IHJnYigxMDUsMTA1LDEwNSk7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJUYXNrTGlzdCwgY3JlYXRlVGFza0xpc3RzIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2soZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgdGFza0luZGV4ID0gdGFza3MubGVuZ3RoO1xuXG4gIGNvbnN0IHRhc2sgPSB7IGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQ6IGZhbHNlLCBpbmRleDogdGFza0luZGV4IH07XG4gIHRhc2tzLnB1c2godGFzayk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIGNvbnN0IGxpc3RJdGVtRWxlbWVudCA9IGNyZWF0ZVRhc2tMaXN0cyh0YXNrKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW1FbGVtZW50KTtcbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gbmV3VGFzay52YWx1ZTtcbiAgaWYgKHRhc2tEZXNjcmlwdGlvbi50cmltKCkgPT09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFkZE5ld1Rhc2sodGFza0Rlc2NyaXB0aW9uKTtcbiAgbmV3VGFzay52YWx1ZSA9ICcnO1xufSk7XG5cbnJlbmRlclRhc2tMaXN0KCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlbmRlclRhc2tMaXN0KTsiXSwibmFtZXMiOlsidGFza0xpc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVsZXRlVGFzayIsImVkaXRUYXNrRGVzY3JpcHRpb24iLCJ0YXNrcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzYXZlVGFza3MiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibWFya0FzQ29tcGxldGVkIiwidGFzayIsImNvbXBsZXRlZCIsIm1hcmtBc0luY29tcGxldGUiLCJjcmVhdGVUYXNrTGlzdHMiLCJkZWxldGVCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwibGlzdEl0ZW1FbGVtZW50IiwiaWNvbkVsZW1lbnQiLCJkZXNjcmlwdGlvbkVsZW1lbnQiLCJjaGVja2JveEVsZW1lbnQiLCJ0eXBlIiwiY2hlY2tlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJjb2xvciIsInRleHRDb250ZW50IiwiZGVzY3JpcHRpb24iLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImluZGV4IiwicmVuZGVyVGFza0xpc3QiLCJzb3J0IiwidGFzazEiLCJ0YXNrMiIsImZvckVhY2giLCJ1cGRhdGVUYXNrSW5kZXhlcyIsImZpbHRlciIsImlucHV0RWxlbWVudCIsInZhbHVlIiwiZXZlbnQiLCJrZXkiLCJ0cmltIiwiY2hpbGRyZW4iLCJyZXBsYWNlQ2hpbGQiLCJzZWxlY3QiLCJuZXdUYXNrIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGROZXdUYXNrIiwidGFza0luZGV4IiwibGVuZ3RoIiwicHVzaCIsInByZXZlbnREZWZhdWx0IiwidGFza0Rlc2NyaXB0aW9uIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==