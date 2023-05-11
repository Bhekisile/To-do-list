/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

function addNewTask(description) {
  var taskIndex = tasks.length;
  var task = {
    description: description,
    completed: false,
    index: taskIndex
  };
  tasks.push(task);
  saveTasks();
  var listItemElement = createTaskLists(task);
  taskList.appendChild(listItemElement);
  console.log('task', task);
}
var btn = document.querySelector('.btn');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  addNewTask();
});
var saveTasks = function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
deleteTask = function deleteTask(index) {
  tasks = tasks.filter(function (task) {
    return task.index !== index;
  });
  updateTaskIndexes();
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
      renderTasks();
    } else if (event.key === 'Escape') {
      renderTasks();
    }
  });
  var listItemElement = taskList.children[task.index];
  listItemElement.replaceChild(inputElement, listItemElement.children[1]);
  inputElement.select();
  task.index = Array.from(listItemElement.parentNode.children).indexOf(listItemElement);
};
var updateTaskIndexes = function updateTaskIndexes() {
  tasks.forEach(function (task, index) {
    task.index = index;
  });
};
var clearCompletedTasks = function clearCompletedTasks() {
  tasks = tasks.filter(function (task) {
    return !task.completed;
  });
  updateTaskIndexes();
  saveTasks();
  renderTasks();
};
var clearCompleted = document.querySelector('a');
clearCompleted.addEventListener('click', function (event) {
  event.preventDefault();
  clearCompletedTasks();
});
var createTaskLists = function createTaskLists(task) {
  var deleteButton = document.createElement('button');
  var listItemElement = document.createElement('li');
  var descriptionElement = document.createElement('span');
  var checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.checked = task.completed;
  var markAsCompleted = function markAsCompleted(task) {
    task.completed = true;
  };
  var markAsIncomplete = function markAsIncomplete(task) {
    task.completed = false;
  };
  checkboxElement.addEventListener('change', function () {
    if (checkboxElement.checked) {
      markAsCompleted(task);
    } else {
      markAsIncomplete(task);
    }
    saveTasks();
    if (checkboxElement.checked) {
      deleteButton.style.display = 'block';
      listItemElement.style.display = 'flex';
      listItemElement.style.justifyContent = 'flex-start';
      deleteButton.style.marginLeft = 'auto';
    } else {
      deleteButton.style.display = 'none';
      descriptionElement.style.color = '#999';
    }
  });
  descriptionElement.textContent = task.description;
  descriptionElement.addEventListener('click', function () {
    editTaskDescription(task);
  });

  // the remains
  listItemElement.appendChild(checkboxElement);
  listItemElement.appendChild(descriptionElement);
  deleteButton.classList.add('delete-button');
  deleteButton.style.display = 'none';
  deleteButton.addEventListener('click', function () {
    deleteTask(task.index);
  });
  listItemElement.appendChild(deleteButton);
  return listItemElement;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  padding: 0;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  font-family: sans-serif, \"fantasy\";\r\n}\r\n\r\n.container {\r\n  width: 800px;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  background-color: #e5e5e5;\r\n}\r\n\r\n.wrapper {\r\n  width: 600px;\r\n  height: 450px;\r\n  margin: 50px auto;\r\n  background-color: #fff;\r\n  box-shadow: 1px 1px #fff;\r\n}\r\n\r\n.black {\r\n  width: 100%;\r\n  height: 20px;\r\n  background-color: black;\r\n  margin-bottom: 50px;\r\n  margin-top: 0;\r\n}\r\n\r\n.black-bottom {\r\n  width: 100%;\r\n  height: 20px;\r\n  background-color: black;\r\n  margin-bottom: 0;\r\n}\r\n\r\nheader {\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nh2 {\r\n  margin-bottom: 20px;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  padding-bottom: 20px;\r\n  width: 100%;\r\n  padding-left: 16px;\r\n  margin-top: 20px;\r\n  color: #7a869a;\r\n}\r\n\r\n.hr {\r\n  margin-bottom: 30px;\r\n}\r\n\r\nform {\r\n  width: 600px;\r\n  height: 60px;\r\n  border-bottom: 1px solid #7a869a;\r\n}\r\n\r\n#new-task-input {\r\n  font-size: 18px;\r\n  font-style: italic;\r\n  padding-left: 30px;\r\n  border: none;\r\n  color: #7a869a;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#task-list {\r\n  margin-bottom: 0;\r\n  margin-top: 0;\r\n  list-style: none;\r\n  border-bottom: 1px solid #7a869a;\r\n  color: #7a869a;\r\n  padding-left: 0;\r\n}\r\n\r\nul li {\r\n  display: flex;\r\n  gap: 24px;\r\n  margin-bottom: 40px;\r\n  margin-left: 0;\r\n  padding-left: 26px;\r\n  align-items: center;\r\n}\r\n\r\nul li:nth-child(1) {\r\n  height: 80px;\r\n  margin-top: 0;\r\n  border-bottom: 1px solid #7a869a;\r\n}\r\n\r\n#clear {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 70px;\r\n  color: #7a869a;\r\n  background-color: #e4e4e4;\r\n  box-shadow: 1px 1px 1px 1px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,gCAAgC;EAChC,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,2BAA2B;AAC7B","sourcesContent":["body {\r\n  padding: 0;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  font-family: sans-serif, \"fantasy\";\r\n}\r\n\r\n.container {\r\n  width: 800px;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  background-color: #e5e5e5;\r\n}\r\n\r\n.wrapper {\r\n  width: 600px;\r\n  height: 450px;\r\n  margin: 50px auto;\r\n  background-color: #fff;\r\n  box-shadow: 1px 1px #fff;\r\n}\r\n\r\n.black {\r\n  width: 100%;\r\n  height: 20px;\r\n  background-color: black;\r\n  margin-bottom: 50px;\r\n  margin-top: 0;\r\n}\r\n\r\n.black-bottom {\r\n  width: 100%;\r\n  height: 20px;\r\n  background-color: black;\r\n  margin-bottom: 0;\r\n}\r\n\r\nheader {\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nh2 {\r\n  margin-bottom: 20px;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  padding-bottom: 20px;\r\n  width: 100%;\r\n  padding-left: 16px;\r\n  margin-top: 20px;\r\n  color: #7a869a;\r\n}\r\n\r\n.hr {\r\n  margin-bottom: 30px;\r\n}\r\n\r\nform {\r\n  width: 600px;\r\n  height: 60px;\r\n  border-bottom: 1px solid #7a869a;\r\n}\r\n\r\n#new-task-input {\r\n  font-size: 18px;\r\n  font-style: italic;\r\n  padding-left: 30px;\r\n  border: none;\r\n  color: #7a869a;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#task-list {\r\n  margin-bottom: 0;\r\n  margin-top: 0;\r\n  list-style: none;\r\n  border-bottom: 1px solid #7a869a;\r\n  color: #7a869a;\r\n  padding-left: 0;\r\n}\r\n\r\nul li {\r\n  display: flex;\r\n  gap: 24px;\r\n  margin-bottom: 40px;\r\n  margin-left: 0;\r\n  padding-left: 26px;\r\n  align-items: center;\r\n}\r\n\r\nul li:nth-child(1) {\r\n  height: 80px;\r\n  margin-top: 0;\r\n  border-bottom: 1px solid #7a869a;\r\n}\r\n\r\n#clear {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 70px;\r\n  color: #7a869a;\r\n  background-color: #e4e4e4;\r\n  box-shadow: 1px 1px 1px 1px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_1__);



// const taskList = document.getElementById('task-list');

var tasks = [{
  index: '',
  description: '',
  completed: ''
}, {
  index: '',
  description: '',
  completed: ''
}];
function renderTasks() {
  var taskList = document.getElementById('task-list');
  tasks.sort(function (a, b) {
    return a.index - b.index;
  });
  tasks.forEach(function (task) {
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    var description = document.createElement('span');
    description.textContent = task.description;
    li.appendChild(description);
    taskList.appendChild(li);
  });
}
window.addEventListener('load', renderTasks);

// Create a horizontal line element
var hr = document.querySelector('.hr');
hr.innerHTML = '<hr>';
var clear = document.getElementById('clear');
clear.innerHTML = 'Clear all completed';
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxDQUFDLE1BQU0sQ0FBQztJQUNsRDlCLFdBQVcsQ0FBQzRELFdBQVcsR0FBR3hELElBQUksQ0FBQ0osV0FBVztJQUMxQ2lFLEVBQUUsQ0FBQ3JELFdBQVcsQ0FBQ1osV0FBVyxDQUFDO0lBQzNCVyxRQUFRLENBQUNDLFdBQVcsQ0FBQ3FELEVBQUUsQ0FBQztFQUMxQixDQUFDLENBQUM7QUFDSjtBQUVBRSxNQUFNLENBQUNqRCxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUVvQixXQUFXLENBQUM7O0FBRTVDO0FBQ0EsSUFBTThCLEVBQUUsR0FBR3BELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUN4Q21ELEVBQUUsQ0FBQ0MsU0FBUyxHQUFHLE1BQU07QUFDckIsSUFBTUMsS0FBSyxHQUFHdEQsUUFBUSxDQUFDNkMsY0FBYyxDQUFDLE9BQU8sQ0FBQztBQUM5Q1MsS0FBSyxDQUFDRCxTQUFTLEdBQUcscUJBQXFCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFkZE5ld1Rhc2soZGVzY3JpcHRpb24pIHtcclxuICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5sZW5ndGg7XHJcbiAgY29uc3QgdGFzayA9IHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZDogZmFsc2UsIGluZGV4OiB0YXNrSW5kZXggfTtcclxuICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gIHNhdmVUYXNrcygpO1xyXG4gIGNvbnN0IGxpc3RJdGVtRWxlbWVudCA9IGNyZWF0ZVRhc2tMaXN0cyh0YXNrKTtcclxuICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbUVsZW1lbnQpO1xyXG4gIGNvbnNvbGUubG9nKCd0YXNrJywgdGFzayk7XHJcbn1cclxuXHJcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcclxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBhZGROZXdUYXNrKClcclxufSk7XHJcblxyXG5jb25zdCBzYXZlVGFza3MgPSAoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxufTtcclxuXHJcbmRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcclxuICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCAhPT0gaW5kZXgpO1xyXG4gIHVwZGF0ZVRhc2tJbmRleGVzKCk7XHJcbn07XHJcblxyXG5lZGl0VGFza0Rlc2NyaXB0aW9uID0gKHRhc2spID0+IHtcclxuICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0RWxlbWVudC50eXBlID0gJ3RleHQnO1xyXG4gIGlucHV0RWxlbWVudC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXQtaW5wdXQnKTtcclxuXHJcbiAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGlucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XHJcbiAgICAgIHNhdmVUYXNrcygpO1xyXG4gICAgICByZW5kZXJUYXNrcygpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxpc3RJdGVtRWxlbWVudCA9IHRhc2tMaXN0LmNoaWxkcmVuW3Rhc2suaW5kZXhdO1xyXG4gIGxpc3RJdGVtRWxlbWVudC5yZXBsYWNlQ2hpbGQoaW5wdXRFbGVtZW50LCBsaXN0SXRlbUVsZW1lbnQuY2hpbGRyZW5bMV0pO1xyXG4gIGlucHV0RWxlbWVudC5zZWxlY3QoKTtcclxuICB0YXNrLmluZGV4ID0gQXJyYXkuZnJvbShsaXN0SXRlbUVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihsaXN0SXRlbUVsZW1lbnQpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlVGFza0luZGV4ZXMgPSAoKSA9PiB7XHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgIHRhc2suaW5kZXggPSBpbmRleDtcclxuICB9KTtcclxufTtcclxuXHJcbmxldCBjbGVhckNvbXBsZXRlZFRhc2tzID0gKCkgPT4ge1xyXG4gIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xyXG4gIHVwZGF0ZVRhc2tJbmRleGVzKCk7XHJcbiAgc2F2ZVRhc2tzKCk7XHJcbiAgcmVuZGVyVGFza3MoKTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYScpO1xyXG5jbGVhckNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY2xlYXJDb21wbGV0ZWRUYXNrcygpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2tMaXN0cyA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgbGlzdEl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gIGNvbnN0IGNoZWNrYm94RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY2hlY2tib3hFbGVtZW50LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94RWxlbWVudC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XHJcblxyXG4gIGNvbnN0IG1hcmtBc0NvbXBsZXRlZCA9ICh0YXNrKSA9PiB7XHJcbiAgICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgfTtcclxuICBjb25zdCBtYXJrQXNJbmNvbXBsZXRlID0gKHRhc2spID0+IHtcclxuICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XHJcbiAgfVxyXG4gIGNoZWNrYm94RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBpZiAoY2hlY2tib3hFbGVtZW50LmNoZWNrZWQpIHtcclxuICAgICAgbWFya0FzQ29tcGxldGVkKHRhc2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya0FzSW5jb21wbGV0ZSh0YXNrKTtcclxuICAgIH1cclxuICAgIHNhdmVUYXNrcygpO1xyXG5cclxuICAgIGlmIChjaGVja2JveEVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgICBkZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGxpc3RJdGVtRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XHJcbiAgICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gJ2F1dG8nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5zdHlsZS5jb2xvciA9ICcjOTk5JztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuXHJcbiAgZGVzY3JpcHRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZWRpdFRhc2tEZXNjcmlwdGlvbih0YXNrKTtcclxuICB9KTtcclxuXHJcbi8vIHRoZSByZW1haW5zXHJcbmxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChjaGVja2JveEVsZW1lbnQpO1xyXG4gIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XHJcbiAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRlbGV0ZVRhc2sodGFzay5pbmRleCk7XHJcbiAgfSk7XHJcblxyXG4gIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICByZXR1cm4gbGlzdEl0ZW1FbGVtZW50O1xyXG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgXFxcImZhbnRhc3lcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJsYWNrIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsYWNrLWJvdHRvbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBjb2xvcjogIzdhODY5YTtcXHJcXG59XFxyXFxuXFxyXFxuLmhyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3YTg2OWE7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzay1pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogIzdhODY5YTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWxpc3Qge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3YTg2OWE7XFxyXFxuICBjb2xvcjogIzdhODY5YTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnVsIGxpOm50aC1jaGlsZCgxKSB7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3YTg2OWE7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBjb2xvcjogIzdhODY5YTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgXFxcImZhbnRhc3lcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJsYWNrIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsYWNrLWJvdHRvbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBjb2xvcjogIzdhODY5YTtcXHJcXG59XFxyXFxuXFxyXFxuLmhyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3YTg2OWE7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzay1pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogIzdhODY5YTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWxpc3Qge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3YTg2OWE7XFxyXFxuICBjb2xvcjogIzdhODY5YTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnVsIGxpOm50aC1jaGlsZCgxKSB7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3YTg2OWE7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBjb2xvcjogIzdhODY5YTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL21haW4uY3NzJztcclxuaW1wb3J0ICcuL2luZGV4LmpzJztcclxuXHJcbi8vIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xyXG5cclxuY29uc3QgdGFza3MgPSBbXHJcbiAgeyBpbmRleDogJycsIGRlc2NyaXB0aW9uOiAnJywgY29tcGxldGVkOiAnJyB9LFxyXG4gIHsgaW5kZXg6ICcnLCBkZXNjcmlwdGlvbjogJycsIGNvbXBsZXRlZDogJycgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xyXG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xyXG4gIHRhc2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIGxpLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlbmRlclRhc2tzKTtcclxuXHJcbi8vIENyZWF0ZSBhIGhvcml6b250YWwgbGluZSBlbGVtZW50XHJcbmNvbnN0IGhyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhyJyk7XHJcbmhyLmlubmVySFRNTCA9ICc8aHI+JztcclxuY29uc3QgY2xlYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcclxuY2xlYXIuaW5uZXJIVE1MID0gJ0NsZWFyIGFsbCBjb21wbGV0ZWQnO1xyXG4iXSwibmFtZXMiOlsiYWRkTmV3VGFzayIsImRlc2NyaXB0aW9uIiwidGFza0luZGV4IiwidGFza3MiLCJsZW5ndGgiLCJ0YXNrIiwiY29tcGxldGVkIiwiaW5kZXgiLCJwdXNoIiwic2F2ZVRhc2tzIiwibGlzdEl0ZW1FbGVtZW50IiwiY3JlYXRlVGFza0xpc3RzIiwidGFza0xpc3QiLCJhcHBlbmRDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJidG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWxldGVUYXNrIiwiZmlsdGVyIiwidXBkYXRlVGFza0luZGV4ZXMiLCJlZGl0VGFza0Rlc2NyaXB0aW9uIiwiaW5wdXRFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImV2ZW50Iiwia2V5IiwidHJpbSIsInJlbmRlclRhc2tzIiwiY2hpbGRyZW4iLCJyZXBsYWNlQ2hpbGQiLCJzZWxlY3QiLCJBcnJheSIsImZyb20iLCJwYXJlbnROb2RlIiwiaW5kZXhPZiIsImZvckVhY2giLCJjbGVhckNvbXBsZXRlZFRhc2tzIiwiY2xlYXJDb21wbGV0ZWQiLCJkZWxldGVCdXR0b24iLCJkZXNjcmlwdGlvbkVsZW1lbnQiLCJjaGVja2JveEVsZW1lbnQiLCJjaGVja2VkIiwibWFya0FzQ29tcGxldGVkIiwibWFya0FzSW5jb21wbGV0ZSIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luTGVmdCIsImNvbG9yIiwidGV4dENvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsInNvcnQiLCJhIiwiYiIsImxpIiwiY2hlY2tib3giLCJ3aW5kb3ciLCJociIsImlubmVySFRNTCIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==