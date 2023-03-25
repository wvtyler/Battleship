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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Assets/hitWater.png */ \"./src/Assets/hitWater.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Assets/missWater.png */ \"./src/Assets/missWater.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin: 0;\\n    font-family: 'Space Grotesk', sans-serif;\\n    letter-spacing: 2px;\\n}\\n.gameWindow {\\n    width: 90vw;\\n    height: 90vh;\\n    margin-left: 5vw;\\n    margin-top: 5vh;\\n}\\n.background {\\n    z-index: -1;\\n    /* height: 90vh;\\n    width: 90vw;\\n    left: 5vw;\\n    top: 5%; */\\n    height: 100vh;\\n    width: 100vw;\\n    left: 0;\\n    top: 0;\\n    position: absolute;\\n}\\n.titles{\\n    position: absolute;\\n\\n    top: 10%;\\n    left:50%;\\n    margin-left: auto;\\n    text-align: center;\\n    transform: translate(-50%, -50%);\\n    border-radius: 20%;\\n\\n}\\n\\n.mainLogo{\\n    height: 100px;\\n}\\n\\n.game-start{\\n    font-size: 35px;\\n    color:white;\\n    -webkit-text-stroke: 1px rgb(0, 0, 156);\\n    text-align: center;\\n    z-index: 5;\\n    height: 50px;\\n    width: 200px;\\n    position: absolute;\\n    left: 50%;\\n    top: 50%;\\n    transform: translate(-50%, -50%);\\n    background-color: rgb(111, 194, 249);\\n    border-radius: 7px;\\n    border-style: solid;\\n    border-width: 3px;\\n    border-color: white;\\n    overflow: hidden;\\n    padding-top: 5px;\\n\\n\\n    \\n}\\n.game-start::before{\\n    position: absolute;\\n    content: '';\\n    left: -60px;\\n    top:0;\\n    background-color: rgb(255,255,255, .3);\\n    transform: skewX(-30deg);\\n    width: 40px;\\n    height: 70px;\\n    transition: .6s;\\n}\\n.game-start:hover::before{\\n    left: 220px;\\n}\\n\\n.spacebar-tip{\\n    margin-top: 10px;\\n}\\n@keyframes wiggle {\\n    0% { transform: rotate(0deg); }\\n   80% { transform: rotate(0deg); }\\n   85% { transform: rotate(5deg); }\\n   95% { transform: rotate(-5deg); }\\n  100% { transform: rotate(0deg); }\\n}\\n.wiggle{\\n    animation: wiggle 2s infinite;\\n}\\n.game-holder{\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n    padding-top: 20vh;\\n\\n    gap:10%;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.board-holder{\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    width: max(30%, 450px);\\n    height: 70vh;\\n    justify-content: center;\\n\\n    /* margin-left: min(50% - 230px); */\\n\\n\\n    opacity: 0;\\n\\n\\n    align-items: center;\\n\\n}\\n.board-holder-info{\\n    height: 30%;\\n    text-align: center;\\n    background-color: white;\\n    border-radius: 20px;\\n    width: 90%;\\n    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);\\n    margin-bottom: 50px;\\n\\n    \\n}\\n.placement-header{\\n    margin-top: 15px;\\n}\\n.placement-icon{\\n    margin-top: 15px;\\n\\n}\\n.board2-info{\\n    height: 30%;\\n    width: 90%;\\n    background-color: white;\\n    border-radius: 20px;\\n    margin-bottom: 50px;\\n}\\n.ship-icon{\\n    transform-origin: top left;\\n    pointer-events: none;\\n    transition: all ease .3s;\\n}\\n\\n.board{\\n    border: 1px solid black;\\n    background-color: white;\\n    width: 409px;\\n    height: auto;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n    gap:1px;\\n    opacity: 100%;\\n    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5); \\n}\\n.board2{\\n    opacity: 0;\\n    height: 0;\\n    width: 0;\\n    left: 0;\\n    top:0;\\n    z-index: -1;\\n    margin: 0;\\n    transition: all ease 1.2s;\\n    margin-left: 3%;\\n    display: none;\\n}\\n.board2-right{\\n    height: 70vh;\\n    width: max(30%, 450px);\\n    margin: 0;\\n\\n    \\n}\\n.show{\\n    opacity: 80%;\\n    z-index: 1;\\n    transition: opacity ease 1s;\\n    display: flex;\\n}\\n.hide{\\n    opacity: 0;\\n    pointer-events: none;\\n}\\n.twoBoardSetupLeft{\\n    /* margin-left: max(25px, 10%); */\\n    transition: margin-left ease 1.2s;\\n    margin: 0;\\n}\\n.cell-holder{\\n    width: 40px;\\n    height: 40px;\\n}\\n.cell{\\n    width: 40px;\\n    height: 40px;\\n}\\n.positive-cell{\\n    background-color: blue;\\n}\\n.cell-hover{\\n\\n}\\n.nextSong-button{\\n    margin-left: 20px;\\n    height: 30px;\\n}\\n.audio-div{\\n    position: absolute;\\n    top:95%;\\n}\\n.playPause-button{\\n    height: 30px;\\n    margin-left: 10px;\\n}\\n.no-pointer-events{\\n    pointer-events: none;\\n}\\n.hit{\\n\\n    content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\n}\\n.miss{\\n    content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n.red-filter{\\n    filter: invert(23%) sepia(98%) saturate(4757%) hue-rotate(357deg) brightness(88%) contrast(128%);\\n}\\n.missed-attack{\\n    color: blue;\\n\\n}\\n.successful-attack{\\n    color: red;\\n}\\n\\n.result-display{\\n    position: absolute;\\n    top: 30%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    font-size: 40px;\\n    color: #f2f9ff;\\n \\n    text-shadow:  -2px 0 rgb(111, 194, 249), 2px -2px 0 rgb(111, 194, 249), -2px 2px 0 rgb(111, 194, 249), 2px 2px 0 rgb(111, 194, 249)\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Gamehelpers/Shiptypes.js":
/*!**************************************!*\
  !*** ./src/Gamehelpers/Shiptypes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst shipTypes =\n    [   //AirCraft Carrier\n        { \n                name: 'AircraftCarrier',\n                length: 5\n        },\n        //Battleship\n        {\n                name: 'Battleship',\n                length: 4\n        },\n        //Submarine\n        {\n                name: 'Submarine',\n                length: 3\n        },\n        //Destroyer\n        {\n                name: 'Destroyer',\n                length: 3\n        },\n        //Frigate\n        {\n                name: 'Frigate',\n                length: 2\n        }\n    ];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipTypes);\n\n//# sourceURL=webpack://battleship/./src/Gamehelpers/Shiptypes.js?");

/***/ }),

/***/ "./src/Gamehelpers/boardLoader.js":
/*!****************************************!*\
  !*** ./src/Gamehelpers/boardLoader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Assets_water1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Assets/water1.jpg */ \"./src/Assets/water1.jpg\");\n\nfunction boardLoader(cb, pcPlayer){\n\n    const board = document.createElement('div');\n    board.classList.add('board');\n\n    for(let i =0; i<100; i++) {\n        const cell = document.createElement('img');\n        cell.classList.add('cell');\n        cell.src = _Assets_water1_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        cell.id = `cell-${pcPlayer ? '2' : \"\"}${i}`;\n        board.appendChild(cell);\n        if(cb){\n        cell.addEventListener('click', function func(e){\n                cb(e)\n                cell.removeEventListener('click', func)\n            })\n        }\n        if(pcPlayer) {\n            cell.addEventListener('mouseover' , function(){\n                cell.classList.add('cell-hover');\n            })\n        }   cell.addEventListener('mouseout', function(){\n\n        })\n    }\n\n    return board;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boardLoader);\n\n//# sourceURL=webpack://battleship/./src/Gamehelpers/boardLoader.js?");

/***/ }),

/***/ "./src/Gamehelpers/init.js":
/*!*********************************!*\
  !*** ./src/Gamehelpers/init.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _boardLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardLoader */ \"./src/Gamehelpers/boardLoader.js\");\n/* harmony import */ var _Assets_blue_cell_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/blue-cell.png */ \"./src/Assets/blue-cell.png\");\n/* harmony import */ var _Assets_red_cell_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assets/red-cell.png */ \"./src/Assets/red-cell.png\");\n/* harmony import */ var _Assets_water1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/water1.jpg */ \"./src/Assets/water1.jpg\");\n\n\n\n\n\n\n\nlet lastIndex = undefined;\nlet currentMove = false;\n\nfunction init(human, gameControllerCallback) {\n\n    let shipsPlaced = 0;\n    const board = (0,_boardLoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(placementCheck);\n    const boardArr = Array.prototype.slice.call(board.children);\n    loadTips();\n    loadShipPlacement();\n\n    spacebarListener();\n    placementController()\n    addHoverToCells();\n\n\n\n\n// Listens for end of init and updates hover listeners after a click\n    function placementController() {\n        if(shipsPlaced === 5) {\n            //Place AI ships randomly\n            gameControllerCallback();\n            return;\n    }\n        loadInfo();\n\n    }\n    \n    //Loads screen for player to place ships\n    function loadShipPlacement() {\n        const div = document.querySelector('.board-holder')\n        div.classList.add('show');\n\n        if (div.classList[3]) div.classList.remove('hide');\n        div.appendChild(board);\n    }\n    \n    function loadTips() {\n\n        const header = document.createElement('h2')\n        header.classList.add('placement-header')\n        header.innerHTML = 'Place your ships';\n        const tip = document.createElement('p')\n        tip.classList.add('spacebar-tip', 'wiggle')\n        tip.innerHTML = 'Hit space to rotate';\n        const info = document.querySelector('.board-holder-info')\n        info.appendChild(header);\n        info.appendChild(tip);\n        //          <h2 class=\"placement-header\"> Place your ships</h2>\n        //          <p class=\"spacebar-tip wiggle\"> Hit space to rotate</p>\n    }\n    //Load top info during ship placement phase(tip, boat)\n    function loadInfo() {\n\n        const info = document.querySelector('.board-holder-info')\n        const ship = document.createElement('img');\n        const shipname = document.createElement('p');\n        shipname.innerHTML = `${human.ships[shipsPlaced].name}`;\n        ship.classList.add('placement-icon');\n        ship.src = human.ships[shipsPlaced].icon;\n        //add a space for 'aircraft carrier'\n        if(shipsPlaced===0) shipname.innerHTML = shipname.innerHTML.slice(0,8) + ' ' +shipname.innerHTML.slice(8);\n        if(info.children[2]) {\n            info.removeChild(info.children[2])\n            info.removeChild(info.children[2])\n        }\n        info.appendChild(ship);\n        info.appendChild(shipname);\n  \n    }\n    // add a listener for the spacebar which swaps ship orientation\n    function spacebarListener() {\n        document.body.onkeyup = (function(e){\n            if(e.code === 'Space') {\n\n                human.ships[shipsPlaced].xAxis = !human.ships[shipsPlaced].xAxis\n                if(lastIndex === 0 || lastIndex){\n                    spacebarHoverRemove(human.ships[shipsPlaced].length, lastIndex, _Assets_water1_jpg__WEBPACK_IMPORTED_MODULE_3__);\n                    placementCheck(lastIndex, human.ships[shipsPlaced]);\n                    hoverHelper(human.ships[shipsPlaced].length, lastIndex, currentMove ? _Assets_blue_cell_png__WEBPACK_IMPORTED_MODULE_1__ : _Assets_red_cell_png__WEBPACK_IMPORTED_MODULE_2__);\n                }\n            }\n        })\n    }\n    \n    //Add hover listeners mouseout, mouseover\n    function addHoverToCells() {\n        const ship = human.ships[shipsPlaced]\n        const length = ship.length;\n        for(let i=0; i<100; i++){\n            \n            //Mouseout Listener \n            board.children[i].addEventListener('mouseout',  function outListener(e){\n                if(shipsPlaced===5) {\n                    //remove outListener\n                    boardArr[i].removeEventListener('mouseout', outListener)\n\n                    return;\n                }\n                hoverHelper(human.ships[shipsPlaced].length, i, _Assets_water1_jpg__WEBPACK_IMPORTED_MODULE_3__)\n                lastIndex = null;\n            })\n            \n            //Mouseover Listener\n            board.children[i].addEventListener('mouseover',  function mouseoverListener(e){\n                if(shipsPlaced===5) {\n                    //remove mouseOver Listener\n                    boardArr[i].removeEventListener('mouseover', mouseoverListener)\n                    return;\n                }\n                lastIndex = i;\n                // If ship can be placed\n                if(placementCheck(e.target.id.slice(5), ship )) {\n                    hoverHelper(length, i, _Assets_blue_cell_png__WEBPACK_IMPORTED_MODULE_1__);\n                } else { // Ship cannot be placed\n                    hoverHelper(length, i, _Assets_red_cell_png__WEBPACK_IMPORTED_MODULE_2__)\n                }\n            })  \n        }\n    }\n    //Iterates through cells that should be highlighted and gives them img as src\n    function hoverHelper(length, index, img){\n        // X axis\n        if(human.ships[shipsPlaced].xAxis) {\n            for(let i = 0; i<human.ships[shipsPlaced].length; i++){\n                board.children[index +i].src= img;\n                //break if next instance is null\n                if(human.gameboard.board[index+i].right === null) break;\n            }\n        } else {\n            // Y axis\n            for(let i = 0; i < human.ships[shipsPlaced].length *10; i=i+10) {\n                board.children[ index +i ].src= img;\n                //break if next instance is null\n                if(human.gameboard.board[index+i].below === null) break;\n            }\n        }\n    }\n    //Function to remove hover effects after hitting spacebar\n    function spacebarHoverRemove(length, index, img){\n        if(!human.ships[shipsPlaced].xAxis) {\n            //Delete from old x axis \n            for(let i = 0; i<length; i++){\n                board.children[index +i].src= img;\n                if(human.gameboard.board[index+i].right === null) break;\n            }\n        } else {\n            //Delete from old Y axis\n            for(let i = 0; i<length; i++) {\n                board.children[index +i*10].src= img;\n                if(human.gameboard.board[index+i*10]?.below === null) break;\n\n            }\n        }\n    }\n    //use gameboard.testPlacement to check if a boat can be placed into a a cell\n    function placementCheck(e){\n\n        if(shipsPlaced === 5) {\n            e.target.removeEventListener('click', placementCheck)\n            return;\n        }\n        //if E is a mouse event, isolate the index number\n        let index = (e === 0 || e ==='0' || Number(e))  ? e : e.target.id.slice(5)\n        //If gameboard index is good for move\n        if(human.gameboard.testPlacement(human.ships[shipsPlaced], index)) {\n            currentMove = true;\n            //Click Event on possible Move\n            if(e.type === 'click') {\n                human.gameboard.placeShip(human.ships[shipsPlaced], Number(index));\n                let arr = Array.prototype.slice.call(board.children);\n                //Put Highlighted cells back to water img\n                human.ships[shipsPlaced].location.map(\n                    (index) => arr[index].src=_Assets_water1_jpg__WEBPACK_IMPORTED_MODULE_3__)\n                //Load ship icon in correct place (maybe in boardLoader?)\n                human.ships[shipsPlaced].loadShipIcon();\n                shipsPlaced++;\n                placementController()\n            }\n            return true;\n        } else {\n            currentMove = false;\n            return false;\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://battleship/./src/Gamehelpers/init.js?");

/***/ }),

/***/ "./src/Gamehelpers/postgame.js":
/*!*************************************!*\
  !*** ./src/Gamehelpers/postgame.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/gameController */ \"./src/modules/gameController.js\");\n\nconst postgame = (result, restart) => {\n\n    const resultDisplay = document.querySelector('.result-display')\n    resultDisplay.classList.remove('hide');\n    result === 'win' ? resultDisplay.innerHTML = \"YOU WON!\" : resultDisplay.innerHTML = 'YOU LOST!';\n    \n    const restartButton = document.querySelector('.game-start')\n    const boardholder = document.querySelector('.board-holder')\n    boardholder.classList.add('hide');\n    boardholder.removeChild(boardholder.children[1]);\n    const boardholder2 = document.querySelector('.board2')\n    boardholder2.removeChild(boardholder2.children[1])\n\n    boardholder2.classList.remove('show');\n    restartButton.classList.remove('hide');\n    restartButton.addEventListener('click', function reset(){\n        restartButton.classList.add('hide');\n        restart();\n        restartButton.removeEventListener('click', reset);\n        resultDisplay.classList.add('hide');\n    });\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postgame);\n\n//# sourceURL=webpack://battleship/./src/Gamehelpers/postgame.js?");

/***/ }),

/***/ "./src/Gamehelpers/recursiveFunctions.js":
/*!***********************************************!*\
  !*** ./src/Gamehelpers/recursiveFunctions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst recursive = () => {\n        //Null doesnt return false (to allow AI to shoot borders)\n        \n        const left = (cell, num, key1, key2) => {\n\n        if (cell === null) return true;\n        if (cell[key1]) return false;\n        if (num < 1) return true;\n        return left(cell.left, --num, key1)\n    }\n    const right = (cell, num, key1) => {\n        if (cell === null) return true;\n        if (cell[key1]) return false;\n        if (num < 1) return true;\n        return right(cell.right, --num, key1)\n    }\n    const below = (cell, num, key1) => {\n        if (cell === null) return true;\n        if (cell[key1]) return false;\n        if (num < 1) return true;\n        return below(cell.below, --num, key1)\n    }\n    const above = (cell, num, key1) => {\n        if (cell === null) return true;\n        if (cell[key1]) return false;\n        if (num < 1) return true;\n        return above(cell.above, --num, key1)\n    }\n    \n    \n    //Null triggers false\n    const leftNoNull = (cell, num, key1, key2) => {\n        if (cell === null) return false;\n        if (key1) return false;\n        if (num < 1) return true;\n        return left(cell.left, num--)\n    }\n    const rightNoNull = (cell, num, key1) => {\n        if (cell === null) return false;\n        if (key1) return false;\n        if (num < 1) return true;\n        return right(cell.right, num--)\n    }\n    const belowNoNull = (cell, num, key1) => {\n        if (cell === null) return false;\n        if (key1) return false;\n        if (num < 1) return true;\n        return below(cell.below, num--)\n    }\n    const aboveNoNull = (cell, num, key1) => {\n        if (cell === null) return false;\n        if (key1) return false;\n        if (num < 1) return true;\n        return above(cell.above, num--)\n    }\n    \n    return {left, right, above, below, leftNoNull, rightNoNull, aboveNoNull, belowNoNull};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recursive);\n\n//# sourceURL=webpack://battleship/./src/Gamehelpers/recursiveFunctions.js?");

/***/ }),

/***/ "./src/Gamehelpers/setUpGame.js":
/*!**************************************!*\
  !*** ./src/Gamehelpers/setUpGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _boardLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardLoader */ \"./src/Gamehelpers/boardLoader.js\");\n\n\n\nconst setUpGame = (fireShotListener) => {\n    boardControls();\n\n    \n    function boardControls(){\n\n        const div = document.querySelector('.board2');\n        const board = document.querySelector('.board-holder');\n        const boardLoc = board.getBoundingClientRect();\n        loadSecondBoard();\n\n        splitBoards();\n\n\n        function loadSecondBoard(){\n            const board2 = (0,_boardLoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fireShotListener, true);\n\n            div.style.top = `${boardLoc.top}px`;\n            div.style.left = `${boardLoc.left}px`;\n            div.classList.add('board2-right')\n            board2.classList.add('pc-board')\n            div.appendChild(board2);\n            \n        \n        }\n        \n\n        function splitBoards(){\n\n            \n\n            board.classList.add('twoBoardSetupLeft')\n\n            div.style.left = `${window.innerWidth/2}px`;\n            div.classList.add('show');\n\n            \n        }\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setUpGame);\n\n//# sourceURL=webpack://battleship/./src/Gamehelpers/setUpGame.js?");

/***/ }),

/***/ "./src/Gamehelpers/startButton.js":
/*!****************************************!*\
  !*** ./src/Gamehelpers/startButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst startButton = (callback) => {\n    const start = document.querySelector('.game-start')\n    start.addEventListener('click', function begin(){\n        callback();\n        start.classList.add('hide');\n        start.removeEventListener('click', begin);\n        start.innerHTML = 'RESTART';\n    });\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startButton);\n\n//# sourceURL=webpack://battleship/./src/Gamehelpers/startButton.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_gameController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameController */ \"./src/modules/gameController.js\");\n\n\n\n\n\n\nconst game = (0,_modules_gameController__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/ai.js":
/*!***************************!*\
  !*** ./src/modules/ai.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gamehelpers_recursiveFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gamehelpers/recursiveFunctions */ \"./src/Gamehelpers/recursiveFunctions.js\");\n\n\nconst recursiver = (0,_Gamehelpers_recursiveFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst AI = (humanplayer) => {\n\n    const gameboard = humanplayer.gameboard.board;\n    \n    // If there are unsunk ships that have been hit, finish them off\n\n    // Else find a shot with max length boat free spaces in all directions\n\n    // Return the max ship length of unsunk ships ***** Need to check if ship is SUNK!!!\n    const maxEnemyLength = () => {\n        return humanplayer.ships.reduce(\n            (acc, cur) => {\n                if(cur.length > acc.length && cur.isSunk === false) return cur;\n                return acc;\n            }\n        ).length\n    }\n    \n    const filterShotsByValue = (numFreeSpaces) => {\n        const filter1 = gameboard.filter(cell => recursionFilter(cell, numFreeSpaces)).map(x => x.index);\n        if(filter1.length>0) {\n            return filter1;\n        }\n        return filterShotsByValue(numFreeSpaces-1);\n    }\n    \n    \n    const recursionFilter = (cell, numFreeSpaces) => {\n        if( recursiver.left(cell, numFreeSpaces, 'wasShot') && recursiver.right(cell, numFreeSpaces, 'wasShot') && recursiver.above(cell, numFreeSpaces, 'wasShot') && recursiver.below(cell, numFreeSpaces, 'wasShot')) {\n            return true;\n        }\n        return false;\n    }\n\n    // Return Hits on board ==> return goes to unsunkHits()\n    const getHits = () => {\n        const hits = gameboard.filter( cell => {\n            if(cell.wasShot === true && cell.hasShip === true) return true;\n            return false;\n        })\n        return hits.map(x => x.index);\n    }\n    \n    // Sort array of hits => array of hits on unsunken ships   ====> return goes to attack from unsunk\n    const getUnsunkHits = (hits) => {\n        console.log('get unsunk hits')\n        const x = hits.map(hit => {\n           const tempShip = humanplayer.ships.find( ship => ship.location.includes(hit))\n           if( ! tempShip.isSunk ) return hit;\n           return null;\n        })\n        return x.filter(s=>typeof s === 'number');\n    }\n    \n     // Find Next shot when there are any hits on unsunken ships ==> calls either linked attack(1+) or potential neighbor attack(1)\n    const attackFromUnsunk = (unsunkHits) => {\n        console.log('attack from unsunk ship')\n        const multiHits = unsunkHits.filter(hit => humanplayer.gameboard.board[hit].ship.hits>1)\n        if(multiHits.length > 0) {\n            const multiHitStrikes =  multiHits.map( hit => multiHitPotentialAttacks(hit, humanplayer.gameboard.board[hit].ship.xAxis))\n            return chooseRandom(multiHitStrikes.flat())\n        }\n        return linkedAttack(unsunkHits);\n    }\n    \n    //Get linked attacks (unsunk will be asc order)     `````~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n    const linkedAttack = (unsunkHits) => {\n        if (chooseRandom([1,2])===1) unsunkHits = unsunkHits.reverse();\n        // const cell = unsunkHits.shift();\n        const suitableStrikes = unsunkHits.map(hit => potentialNeighborAttacks(hit))\n        return chooseRandom(suitableStrikes.flat())\n    }\n    \n    //Get all neighbor cells that are open to attack from a single cell (if no ship has been shot more than once)\n    const potentialNeighborAttacks = (strike) => {\n        let potentialStrikes = [];\n        if(gameboard[strike].right && !gameboard[strike].right.wasShot) potentialStrikes.push(gameboard[strike].right.index);\n        if(gameboard[strike].below && !gameboard[strike].below.wasShot) potentialStrikes.push(gameboard[strike].below.index);\n        if(gameboard[strike].left  && !gameboard[strike].left.wasShot)  potentialStrikes.push(gameboard[strike].left.index);\n        if(gameboard[strike].above && !gameboard[strike].above.wasShot) potentialStrikes.push(gameboard[strike].above.index);\n        return potentialStrikes;\n    }\n    //Get potential attacks when a ship has more than 1 hit already(its direction is known)\n    const multiHitPotentialAttacks = (strike, dir) => {\n        let potentialStrikes = [];\n        if ( dir ){\n            if(gameboard[strike].left  && !gameboard[strike].left.wasShot)  potentialStrikes.push(gameboard[strike].left.index);\n            if(gameboard[strike].right && !gameboard[strike].right.wasShot) potentialStrikes.push(gameboard[strike].right.index);\n        \n        } else {\n            if(gameboard[strike].above && !gameboard[strike].above.wasShot) potentialStrikes.push(gameboard[strike].above.index);\n            if(gameboard[strike].below && !gameboard[strike].below.wasShot) potentialStrikes.push(gameboard[strike].below.index);\n        }\n        return potentialStrikes;\n    }\n    //Choose a random element from array\n    const chooseRandom = (arr) => {\n        const length = arr.length;\n        return arr[Math.floor(Math.random() * length)];\n    }\n\n    const placeShips = (aiPlayer) => {\n        aiPlayer.ships.map((ship) => {           \n            if(chooseRandom([1,2])===2) ship.xAxis = false;\n            let cell = (chooseRandom(aiPlayer.gameboard.board))\n            while(!aiPlayer.gameboard.testPlacement(ship, cell.index)) {\n                cell = (chooseRandom(aiPlayer.gameboard.board))\n            }\n            aiPlayer.gameboard.placeShip(ship, cell.index);\n        });\n    }\n    \n    return {maxEnemyLength, getHits, attackFromUnsunk, getUnsunkHits, potentialNeighborAttacks, chooseRandom, linkedAttack, recursionFilter, filterShotsByValue, placeShips};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AI);\n\n//# sourceURL=webpack://battleship/./src/modules/ai.js?");

/***/ }),

/***/ "./src/modules/aiController.js":
/*!*************************************!*\
  !*** ./src/modules/aiController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai */ \"./src/modules/ai.js\");\n\n\nconst aiController = (player) => {\n\n    const aiC =  (0,_ai__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(player);\n\n    //If there are hits on unsunk ships, fire at them\n    const hits = aiC.getHits();\n    if ( hits.length > 0){\n        const unsunk = aiC.getUnsunkHits(hits);\n        if (unsunk.length > 0) {\n            return aiC.attackFromUnsunk(unsunk);\n        }\n    }\n    \n    //If there are no obvious attacks, choose an efficient one randomly\n    const numFreeSpaces = aiC.maxEnemyLength()-1;\n    const attacks = aiC.filterShotsByValue(numFreeSpaces);\n    return aiC.chooseRandom(attacks);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aiController);\n\n//# sourceURL=webpack://battleship/./src/modules/aiController.js?");

/***/ }),

/***/ "./src/modules/audioPlayer.js":
/*!************************************!*\
  !*** ./src/modules/audioPlayer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Assets_song1_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Assets/song1.mp3 */ \"./src/Assets/song1.mp3\");\n/* harmony import */ var _Assets_song2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/song2.mp3 */ \"./src/Assets/song2.mp3\");\n/* harmony import */ var _Assets_song3_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assets/song3.mp3 */ \"./src/Assets/song3.mp3\");\n/* harmony import */ var _Assets_play_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/play.png */ \"./src/Assets/play.png\");\n/* harmony import */ var _Assets_pause1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Assets/pause1.png */ \"./src/Assets/pause1.png\");\n/* harmony import */ var _Assets_nextSong_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Assets/nextSong.png */ \"./src/Assets/nextSong.png\");\n\n\n\n\n\n\n\nconst songs = [_Assets_song1_mp3__WEBPACK_IMPORTED_MODULE_0__, _Assets_song2_mp3__WEBPACK_IMPORTED_MODULE_1__, _Assets_song3_mp3__WEBPACK_IMPORTED_MODULE_2__];\nlet songNumber = 0;\nlet playing = true;\nlet audio = new Audio()\nconst audioPlayer = () => {\n\n        audio.src = _Assets_song1_mp3__WEBPACK_IMPORTED_MODULE_0__;\n        audio.volume = 0.001;\n        audio.play();\n\n\n\n    const nextSong = document.createElement('img');\n    nextSong.classList.add('nextSong-button');\n    nextSong.src = _Assets_nextSong_png__WEBPACK_IMPORTED_MODULE_5__;\n    \n    const playPause = document.createElement('img');\n    playPause.classList.add('playPause-button');\n    playPause.src = _Assets_pause1_png__WEBPACK_IMPORTED_MODULE_4__;\n\n    nextSong.addEventListener('click', function nextSongListener(){\n        songNumber++;\n        if(songNumber > 2) songNumber = 0;\n        audio.src = songs[songNumber];\n        audio.play();\n        playPause.src = _Assets_pause1_png__WEBPACK_IMPORTED_MODULE_4__;\n        playing = true;\n    })\n\n    playPause.addEventListener('click', function playPauseListener(){\n        if(playing) {\n            audio.pause();\n            playPause.src = _Assets_play_png__WEBPACK_IMPORTED_MODULE_3__;\n            playing = false;\n        } else{\n            audio.play();\n            playPause.src = _Assets_pause1_png__WEBPACK_IMPORTED_MODULE_4__;\n            playing = true;\n        }\n\n    })\n    const audioDiv = document.createElement('div');\n    audioDiv.classList.add('audio-div');\n    audioDiv.appendChild(nextSong);\n    audioDiv.appendChild(playPause);\n    document.body.appendChild(audioDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audioPlayer);\n\n//# sourceURL=webpack://battleship/./src/modules/audioPlayer.js?");

/***/ }),

/***/ "./src/modules/gameController.js":
/*!***************************************!*\
  !*** ./src/modules/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n/* harmony import */ var _Gamehelpers_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Gamehelpers/init */ \"./src/Gamehelpers/init.js\");\n/* harmony import */ var _startGameplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startGameplay */ \"./src/modules/startGameplay.js\");\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai */ \"./src/modules/ai.js\");\n/* harmony import */ var _aiController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aiController */ \"./src/modules/aiController.js\");\n/* harmony import */ var _Gamehelpers_setUpGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Gamehelpers/setUpGame */ \"./src/Gamehelpers/setUpGame.js\");\n/* harmony import */ var _modules_audioPlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/audioPlayer */ \"./src/modules/audioPlayer.js\");\n/* harmony import */ var _Gamehelpers_startButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Gamehelpers/startButton */ \"./src/Gamehelpers/startButton.js\");\n/* harmony import */ var _Gamehelpers_postgame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Gamehelpers/postgame */ \"./src/Gamehelpers/postgame.js\");\n\n\n\n\n\n\n\n\n\nlet humanPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlet computerPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlet pcAI = (0,_ai__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(computerPlayer);\n\nconst gameController = () => {\n    console.log('GAME CONTROLLER!!!')\n\n\n    window.addEventListener('resize', resizeListener)\n    ;(0,_Gamehelpers_startButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(start);\n    \n    function start(){\n    \n    (0,_Gamehelpers_init__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(humanPlayer, postInitCallback);\n    (0,_modules_audioPlayer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n    }\n\n\n\n\n}\n\n//Called after init is finished\nfunction postInitCallback(){\n    //Randomly Place AI Ships\n    pcAI.placeShips(computerPlayer);\n    //Load the start of game html\n    const start = (0,_startGameplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(postGameCallback, humanPlayer, computerPlayer);\n  \n    //Load 2nd board and place html accordingly\n        (0,_Gamehelpers_setUpGame__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(start.fireShotListener);\n        resizeListener();\n        //Begin the game!\n\n        const restart = () => {\n            console.log('RESTARTO!!!')\n            humanPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n            computerPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n            pcAI = (0,_ai__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(computerPlayer);\n            (0,_Gamehelpers_init__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(humanPlayer, postInitCallback);\n        }\n\n        function postGameCallback(result){\n        console.log('games over')\n        ;(0,_Gamehelpers_postgame__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(result, restart);\n    }\n}\n    //Listens for window resize and adjusts ship placement accordingly\n    function resizeListener(){\n\n        humanPlayer.ships.map( (ship) => {\n            ship.loadShipIcon() \n\n        });\n    }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameController);\n\n//# sourceURL=webpack://battleship/./src/modules/gameController.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gamehelpers_recursiveFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gamehelpers/recursiveFunctions */ \"./src/Gamehelpers/recursiveFunctions.js\");\n\nclass gameboard {\n    constructor(){\n        this.board = [];\n        this.init();\n        this.initNeighborValues();\n\n    }\n    init() {\n        for(let i = 0; i < 100; i++) {\n            this.board.push( {wasShot: false, hasShip:false, index: Number(i), ship: ''})\n        }\n    }\n    //Set left, right, above, and below values for each cell to corresponding cell\n    initNeighborValues(){\n        this.board.map(cell => {\n \n            //Set above Attribute\n            if(cell.index < 10) {\n                cell.above = null;\n            } else {\n                cell.above = this.board[cell.index - 10];\n            }\n            \n            //Set below Attribute\n            if(cell.index > 89) {\n                cell.below = null;\n            } else {\n                cell.below = this.board[cell.index + 10];\n            }\n\n            //Set left Attribute\n            if(cell.index % 10 === 0) {\n                cell.left = null;\n            } else {\n                cell.left = this.board[cell.index - 1];\n            }\n            //Set right Attribute\n            if((cell.index - 9 )% 10 === 0) {\n                cell.right = null;\n            } else {\n                cell.right = this.board[cell.index + 1];\n            }\n        })\n    }\n\n    testPlacement(ship, index){\n        if ( !this.board[index] )        return false;\n        if ( this.board[index].hasShip ) return false;\n        if(ship.xAxis){\n            return this.#xAxisTest(ship.length-1, index);\n        } else {\n\n            return this.#yAxisTest(ship.length-1, index);\n        } \n        \n    }\n\n    placeShip(ship, index) {\n        if (ship.xAxis){\n            for(let i = index; i <ship.length+index; i++) {\n                ship.location.push(i);\n                this.board[i].hasShip = true;\n                this.board[i].ship = ship;\n            }\n        } else{\n            for(let i = index; i <(ship.length*10) +index; i+=10) {\n                ship.location.push(i);\n                this.board[i].hasShip = true;\n                this.board[i].ship = ship;\n            }\n\n        }\n    }\n\n    //Fires shot onto gameboard cell\n    fireShot(index) {\n        if ( this.board[index].hasShip === true ) {\n\n        }\n        this.board[index].wasShot = true;\n    }\n    \n    \n    //Private Functions\n    #xAxisTest(itt, loc){\n        if(itt === 0 ) return true;\n        if(this.board[loc].right === null || this.board[loc].right.hasShip) return false;\n        loc ++;\n        itt --;\n        return this.#xAxisTest(itt, loc)\n    }\n    #yAxisTest(itt, loc){      \n        if(itt === 0 ) return true;\n        if(this.board[loc].below === null || this.board[loc].below.hasShip) return false;\n        itt --;\n        loc = Number(loc)+10;\n        return this.#yAxisTest(itt, loc)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _Gamehelpers_Shiptypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Gamehelpers/Shiptypes */ \"./src/Gamehelpers/Shiptypes.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\n\n\n//Player with a name, gameboard, their ships\nclass player{\n    constructor(name = 'dummy name'){\n        this.name = name;\n        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.ships = [];\n        this.initShips();\n    }\n    //Add ships from shipTypes to this.ships\n    initShips() {\n        _Gamehelpers_Shiptypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map( sampleShip => {\n            this.ships.push(new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](sampleShip.name));\n        })\n    }\n    shipsRemaining() {\n        let ships = 0;\n        this.ships.map(ship => {\n            if(!ship.isSunk) ships++;\n        })\n        return ships;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gamehelpers_Shiptypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gamehelpers/Shiptypes */ \"./src/Gamehelpers/Shiptypes.js\");\n/* harmony import */ var _Assets_carrier_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/carrier.png */ \"./src/Assets/carrier.png\");\n/* harmony import */ var _Assets_battleship_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assets/battleship.png */ \"./src/Assets/battleship.png\");\n/* harmony import */ var _Assets_sub_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/sub.png */ \"./src/Assets/sub.png\");\n/* harmony import */ var _Assets_destroyer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Assets/destroyer.png */ \"./src/Assets/destroyer.png\");\n/* harmony import */ var _Assets_frigate_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Assets/frigate.png */ \"./src/Assets/frigate.png\");\n\n\n\n\n\n\nconst boats = [ \n        {AircraftCarrier:_Assets_carrier_png__WEBPACK_IMPORTED_MODULE_1__},\n        {Battleship:_Assets_battleship_png__WEBPACK_IMPORTED_MODULE_2__}, \n        {Submarine :_Assets_sub_png__WEBPACK_IMPORTED_MODULE_3__}, \n        {Destroyer:_Assets_destroyer_png__WEBPACK_IMPORTED_MODULE_4__}, \n        {Frigate:_Assets_frigate_png__WEBPACK_IMPORTED_MODULE_5__}]\n\nclass ship{\n    constructor(type) {\n        //Make sure boat exists in Shiptypes.js and set length accordingly\n        if(_Gamehelpers_Shiptypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(x => x.name ===  type)) {\n            this.name = type;\n            this.length = _Gamehelpers_Shiptypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(x => x.name === type ).length;\n        } else {\n            return null;\n        }\n        this.isSunk = false;\n        this.location = [];\n        this.xAxis = true;\n        this.icon = Object.values(boats.filter((boat) => boat[this.name])[0])\n        this.hits = 0;\n    }\n    checkSunk(){\n        if (this.hits === this.length) this.isSunk = true;\n\n    }\n    addHit(){\n        this.hits++;\n        this.checkSunk();\n    }\n    setLocation(index){\n        if (this.xAxis) {\n            for(let i = 0; i<this.length; i++){\n                this.location.push(this.xAxis ? index+i : index+(i*10));\n            }\n        }\n    }\n    // Load ship icons into HTML and place accordingly according to board (query selector??)\n    loadShipIcon(){\n\n        if( this.location.length === 0 ) return;\n        const location = this.location[0];\n        const cell = document.querySelector(`#cell-${location}`)\n        const cord = (cell.getBoundingClientRect())\n        //For calling upon resizing a window.. if it exists, modify exisiting ship, else create a new one\n        const iconImg = (!document.querySelector(`#${this.name}-icon`)) ? document.createElement('img') : (document.querySelector(`#${this.name}-icon`));\n        iconImg.src = this.icon;\n        iconImg.classList.add('ship-icon')\n        iconImg.id = `${this.name}-icon`\n        iconImg.style.position = 'absolute';\n        // If Y Axis change left attr, rotate\n        if(!this.xAxis) {\n            iconImg.style.transform = \"rotate(90deg)\"\n            iconImg.style.left = `${cord.left+40}px`\n        }else iconImg.style.left = `${cord.left}px`; \n        \n        iconImg.style.top = `${cord.top}px`;\n        \n        if (!document.querySelector(`#${this.name}-icon`)){\n            const boardDiv = document.querySelector('.board')\n            \n            boardDiv.append(iconImg)\n        }\n\n   \n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ }),

/***/ "./src/modules/startGameplay.js":
/*!**************************************!*\
  !*** ./src/modules/startGameplay.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _aiController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aiController */ \"./src/modules/aiController.js\");\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ \"./src/modules/ai.js\");\n\n\nconst startGameplay= (gameEndCallback, humanPlayer, computerPlayer) => {\n    \n    const playerTurn = true;\n    let gameEnd = false;\n\n\n    clearInfo();\n    setInfo();\n\n\n    function clearInfo() {\n\n        const info = document.querySelectorAll('.board-holder-info');\n        const infoArr = [...info[0].children]\n        infoArr.map( element => {\n            info[0].removeChild(element)\n        });\n        \n    }\n\n    function setInfo() {\n        const playerInfo = document.querySelector('.player-info')\n        const turn = document.createElement('h1');\n        turn.classList.add('turn-info')\n        turn.innerHTML = playerTurn ? \"Your turn\" : 'Computer Turn';\n        const shipsDiv = document.createElement('div');\n        shipsDiv.classList.add('red-filter')\n        const subtext = document.createElement('p');\n        subtext.classList.add('info-subtext');\n        subtext.innerHTML = `Enemy ships remaining: ${computerPlayer.shipsRemaining()}`;\n        playerInfo.appendChild(subtext);\n        const unsunk = computerPlayer.ships.filter(ship => ship.isSunk === false)\n        unsunk.map(ship => {\n            const shipIcon = document.createElement('img');\n            shipIcon.classList.add('player-info-ship');\n            shipIcon.src = ship.icon;\n            shipsDiv.appendChild(shipIcon);\n        })\n\n        playerInfo.appendChild(turn);\n        playerInfo.appendChild(shipsDiv);\n    }\n\n    function setAttackInfo(attack){\n\n        const board2info = document.querySelector('.board2 .board-holder-info')\n\n        board2info.innerHTML = '';\n        const board2infoheader = document.createElement('h2');\n        board2infoheader.innerHTML = 'Last Attack';\n        board2info.appendChild(board2infoheader);\n        if(attack === 'miss') {\n            const missedAttack = document.createElement('h2');\n            missedAttack.classList.add('missed-attack');\n            missedAttack.innerHTML = 'MISS';\n            board2info.appendChild(missedAttack);\n        }\n        else{\n            const successfulAttack = document.createElement('h2');\n            successfulAttack.classList.add('successful-attack');\n            successfulAttack.innerHTML = `HIT on ${attack.name}`;\n            board2info.appendChild(successfulAttack);\n        }\n\n    }\n    const fireShotListener = (e) => {\n        const pcBoard = document.querySelector('.pc-board')\n        pcBoard.classList.add('no-pointer-events')\n        const div = document.querySelector(`.cell-2${e.target.id}`)\n        interpretAttack(e.target);\n            clearInfo();\n            setInfo();\n        //check for game end\n        checkForGameEnd(computerPlayer, true);\n        const AIC = (0,_aiController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(humanPlayer);\n\n        \n        //PC attack\n        if(!gameEnd) {\n            setTimeout( function(){\n                interpretPCAttack(AIC);\n                //check for game end\n                checkForGameEnd(humanPlayer);\n                pcBoard.classList.remove('no-pointer-events');\n            }, 100);\n        }\n\n\n\n    }\n    const checkForGameEnd = (player, human) => {\n\n        if(player.shipsRemaining() === 0){\n            gameEnd = true;\n            clearInfo();\n            const board2info = document.querySelector('.board2 .board-holder-info')\n            board2info.innerHTML = ''\n            gameEndCallback(human ? 'win' : 'loss');\n        }\n    }\n    const interpretAttack = (cell) => {\n\n        \n        const cellNum = cell.id.slice(6)\n\n        computerPlayer.gameboard.fireShot(cellNum)\n        //If player hits pc ship\n        if(computerPlayer.gameboard.board[cellNum].hasShip) {\n\n            const hitShip = computerPlayer.ships.find(ship => ship.location.includes(Number(cellNum)));\n\n            hitShip.addHit();\n            hit(cell)\n            setAttackInfo(hitShip);\n        }\n        //Player misses\n        else { \n            miss(cell);\n            setAttackInfo('miss');\n        }\n    }\n    const interpretPCAttack = (cellNum) => {\n\n        const cell = document.querySelector(`#cell-${cellNum}`)\n        humanPlayer.gameboard.fireShot(cellNum);\n        //If PC player hits human\n        if(humanPlayer.gameboard.board[cellNum].hasShip) {\n            const hitShip = humanPlayer.ships.find(ship => ship.location.includes(cellNum));\n\n            hitShip.addHit();\n\n            hit(cell)\n        }\n        \n        //Pc player misses\n        else { miss(cell)};\n\n    }\n    const hit = (cell) => {\n\n        cell.classList.add('hit')\n    }\n    const miss = (cell) => {\n\n        cell.classList.add('miss')\n    }\n    return {fireShotListener};\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGameplay);\n\n//# sourceURL=webpack://battleship/./src/modules/startGameplay.js?");

/***/ }),

/***/ "./src/Assets/battleship.png":
/*!***********************************!*\
  !*** ./src/Assets/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a5fb888e6abc93f6944a.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/battleship.png?");

/***/ }),

/***/ "./src/Assets/blue-cell.png":
/*!**********************************!*\
  !*** ./src/Assets/blue-cell.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"37efe5bb7bd4e8f2b562.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/blue-cell.png?");

/***/ }),

/***/ "./src/Assets/carrier.png":
/*!********************************!*\
  !*** ./src/Assets/carrier.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0af37d5c31f7f6143a3.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/carrier.png?");

/***/ }),

/***/ "./src/Assets/destroyer.png":
/*!**********************************!*\
  !*** ./src/Assets/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13a21ae7f7f14cd7585a.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/destroyer.png?");

/***/ }),

/***/ "./src/Assets/frigate.png":
/*!********************************!*\
  !*** ./src/Assets/frigate.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"795170885df7e59d0555.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/frigate.png?");

/***/ }),

/***/ "./src/Assets/hitWater.png":
/*!*********************************!*\
  !*** ./src/Assets/hitWater.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a23b2646e0bee1c0fc6.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/hitWater.png?");

/***/ }),

/***/ "./src/Assets/missWater.png":
/*!**********************************!*\
  !*** ./src/Assets/missWater.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3576c32d94b42cf55bb.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/missWater.png?");

/***/ }),

/***/ "./src/Assets/nextSong.png":
/*!*********************************!*\
  !*** ./src/Assets/nextSong.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b1f69668d013ec9043c1.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/nextSong.png?");

/***/ }),

/***/ "./src/Assets/pause1.png":
/*!*******************************!*\
  !*** ./src/Assets/pause1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53d99f844c8d11ceb391.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/pause1.png?");

/***/ }),

/***/ "./src/Assets/play.png":
/*!*****************************!*\
  !*** ./src/Assets/play.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1fdb3d3d507583b109c.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/play.png?");

/***/ }),

/***/ "./src/Assets/red-cell.png":
/*!*********************************!*\
  !*** ./src/Assets/red-cell.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ddcb00ae459379f14f5.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/red-cell.png?");

/***/ }),

/***/ "./src/Assets/song1.mp3":
/*!******************************!*\
  !*** ./src/Assets/song1.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e395a11dd1b1b633aae0.mp3\";\n\n//# sourceURL=webpack://battleship/./src/Assets/song1.mp3?");

/***/ }),

/***/ "./src/Assets/song2.mp3":
/*!******************************!*\
  !*** ./src/Assets/song2.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ebf7e15e15e79d67fd4.mp3\";\n\n//# sourceURL=webpack://battleship/./src/Assets/song2.mp3?");

/***/ }),

/***/ "./src/Assets/song3.mp3":
/*!******************************!*\
  !*** ./src/Assets/song3.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e64fc27b148aa18edc3.mp3\";\n\n//# sourceURL=webpack://battleship/./src/Assets/song3.mp3?");

/***/ }),

/***/ "./src/Assets/sub.png":
/*!****************************!*\
  !*** ./src/Assets/sub.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b50568139d4aacb71e4.png\";\n\n//# sourceURL=webpack://battleship/./src/Assets/sub.png?");

/***/ }),

/***/ "./src/Assets/water1.jpg":
/*!*******************************!*\
  !*** ./src/Assets/water1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"018c559e146bc61e2863.jpg\";\n\n//# sourceURL=webpack://battleship/./src/Assets/water1.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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