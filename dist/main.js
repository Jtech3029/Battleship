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

/***/ "./src/areEqual.js":
/*!*************************!*\
  !*** ./src/areEqual.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction areEqual(array1, array2) {\n  var N = array1.length;\n  var M = array2.length;\n  if (N != M) return false;\n  for (var i = 0; i < N; i++) {\n    if (array1[i] != array2[i]) return false;\n  }\n  return true;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (areEqual);\n\n//# sourceURL=webpack://Battleship/./src/areEqual.js?");

/***/ }),

/***/ "./src/factory/Gameboard.js":
/*!**********************************!*\
  !*** ./src/factory/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/factory/ship.js\");\n/* harmony import */ var _areEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../areEqual */ \"./src/areEqual.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar gameboard = function gameboard() {\n  var ships = [];\n  var coordinatesOccupied = [];\n  var shotsMissed = [];\n  var rotation = \"horizontal\";\n  function changeRotation() {\n    if (rotation == \"horizontal\") {\n      rotation = \"vertical\";\n    } else {\n      rotation = \"horizontal\";\n    }\n  }\n  function placeShip(shipLength, shipCoords) {\n    if (rotation == \"horizontal\") {\n      var coords = [];\n      for (var i = 0; i < shipLength; i++) {\n        var temp = shipCoords.map(function (x) {\n          return x;\n        });\n        temp[0] = temp[0] + i;\n        if (temp[0] > 10 || temp[0] < 1 || temp[1] > 10 || temp[1] < 1) {\n          throw new Error(\"cannot place ship here!\");\n        }\n        var _iterator = _createForOfIteratorHelper(coordinatesOccupied),\n          _step;\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var coord = _step.value;\n            if ((0,_areEqual__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(coord, temp)) {\n              throw new Error(\"cannot place ship here!\");\n            }\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n        coords.push(temp);\n      }\n      for (var _i = 0, _coords = coords; _i < _coords.length; _i++) {\n        var _coord = _coords[_i];\n        coordinatesOccupied.push(_coord);\n      }\n      var newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipLength, coords);\n      ships.push(newShip);\n    } else if (rotation == \"vertical\") {\n      var _coords2 = [];\n      for (var _i2 = 0; _i2 < shipLength; _i2++) {\n        var _temp = shipCoords.map(function (x) {\n          return x;\n        });\n        _temp[1] = _temp[1] + _i2;\n        if (_temp[0] > 10 || _temp[0] < 1 || _temp[1] > 10 || _temp[1] < 1) {\n          throw new Error(\"cannot place ship here!\");\n        }\n        var _iterator2 = _createForOfIteratorHelper(coordinatesOccupied),\n          _step2;\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var _coord2 = _step2.value;\n            if ((0,_areEqual__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_coord2, _temp)) {\n              throw new Error(\"cannot place ship here!\");\n            }\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n        _coords2.push(_temp);\n      }\n      for (var _i3 = 0, _coords3 = _coords2; _i3 < _coords3.length; _i3++) {\n        var _coord3 = _coords3[_i3];\n        coordinatesOccupied.push(_coord3);\n      }\n      var _newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipLength, _coords2);\n      ships.push(_newShip);\n    }\n  }\n  function shotsFired(coords) {\n    var _iterator3 = _createForOfIteratorHelper(ships),\n      _step3;\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var _ship = _step3.value;\n        var _iterator4 = _createForOfIteratorHelper(_ship.coords),\n          _step4;\n        try {\n          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n            var shipCoord = _step4.value;\n            if ((0,_areEqual__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shipCoord, coords)) {\n              _ship.hit();\n              return \"hit\";\n            }\n          }\n        } catch (err) {\n          _iterator4.e(err);\n        } finally {\n          _iterator4.f();\n        }\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n    shotsMissed.push(coords);\n    return \"miss\";\n  }\n  function areSunk() {\n    var _iterator5 = _createForOfIteratorHelper(ships),\n      _step5;\n    try {\n      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n        var _ship2 = _step5.value;\n        if (!_ship2.isSunk()) {\n          return false;\n        }\n      }\n    } catch (err) {\n      _iterator5.e(err);\n    } finally {\n      _iterator5.f();\n    }\n    return true;\n  }\n  return {\n    changeRotation: changeRotation,\n    placeShip: placeShip,\n    ships: ships,\n    shotsFired: shotsFired,\n    shotsMissed: shotsMissed,\n    areSunk: areSunk,\n    coordinatesOccupied: coordinatesOccupied\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);\n\n//# sourceURL=webpack://Battleship/./src/factory/Gameboard.js?");

/***/ }),

/***/ "./src/factory/Player.js":
/*!*******************************!*\
  !*** ./src/factory/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/factory/Gameboard.js\");\n/* harmony import */ var _areEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../areEqual */ \"./src/areEqual.js\");\n\n\nvar Player = function Player() {\n  var game = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var shotsMade = [];\n  var shipLengths = [1, 1, 2, 2, 3, 3, 4, 4];\n  var shipCount = 0;\n  function shoot(coords, enemy) {\n    enemy.game.shotsFired(coords);\n    shotsMade.push(coords);\n  }\n  function getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n  function randomShot() {\n    var coords = [getRandomInt(1, 11), getRandomInt(1, 11)];\n    for (var i = 0; i < shotsMade.length; i++) {\n      if ((0,_areEqual__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(coords, shotsMade[i])) {\n        coords = [getRandomInt(1, 11), getRandomInt(1, 11)];\n        i = -1;\n        continue;\n      }\n    }\n    shotsMade.push(coords);\n    return coords;\n  }\n  function randomShips() {\n    if (game.ships.length != 0) {\n      game.ships = [];\n      game.coordinatesOccupied = [];\n    }\n    var count = 0;\n    var coords = [getRandomInt(1, 10), getRandomInt(1, 10)];\n    if (Math.round(Math.random()) == 1) {\n      game.changeRotation();\n    }\n    while (count != shipLengths.length) {\n      try {\n        game.placeShip(shipLengths[count], coords);\n        coords = [getRandomInt(1, 11), getRandomInt(1, 11)];\n      } catch (error) {\n        coords = [getRandomInt(1, 11), getRandomInt(1, 11)];\n        continue;\n      }\n      count++;\n    }\n  }\n  function addShip(e) {\n    var element = e.target;\n    var shot = [parseInt(element.getAttribute(\"data-x\")), parseInt(element.getAttribute(\"data-y\"))];\n    if (shipCount != shipLengths.length) {\n      try {\n        game.placeShip(shipLengths[shipCount], shot);\n        shipCount++;\n      } catch (error) {\n        alert(error);\n      }\n    }\n  }\n  function shipsFull() {\n    return shipCount == shipLengths.length;\n  }\n  return {\n    game: game,\n    shoot: shoot,\n    shotsMade: shotsMade,\n    randomShot: randomShot,\n    randomShips: randomShips,\n    addShip: addShip,\n    shipsFull: shipsFull\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://Battleship/./src/factory/Player.js?");

/***/ }),

/***/ "./src/factory/ship.js":
/*!*****************************!*\
  !*** ./src/factory/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * creates a ship object that can determine if it is sunk,\n * add hits and what the coordinates of the ship are\n * @param {integer} length \n * @param {ArrayBufferConstructor} coords \n * @returns length, hit, isSunk, coords\n */\nvar ship = function ship(length, coords) {\n  var hits = 0;\n\n  /**\n   * adds a hit\n   */\n  function hit() {\n    hits++;\n  }\n\n  /**\n   * determines if the ship is sunk\n   * @returns boolean\n   */\n  function isSunk() {\n    return hits >= length;\n  }\n  return {\n    length: length,\n    hit: hit,\n    isSunk: isSunk,\n    coords: coords\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);\n\n//# sourceURL=webpack://Battleship/./src/factory/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/Player */ \"./src/factory/Player.js\");\n/* harmony import */ var _css_battleshipMap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/battleshipMap.css */ \"./src/css/battleshipMap.css\");\n/* harmony import */ var _areEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./areEqual */ \"./src/areEqual.js\");\n\n\n\nvar player;\nvar computer;\nvar body = document.getElementById(\"body\");\nvar playerBoard = document.createElement(\"div\");\nvar computerBoard = document.createElement(\"div\");\nvar boardContainers = document.createElement(\"div\");\nplayerBoard.id = \"player-board\";\ncomputerBoard.id = \"computer-board\";\nboardContainers.id = \"board-container\";\nfunction createBoard(person, personBoard) {\n  for (var i = 1; i < 11; i++) {\n    for (var j = 1; j < 11; j++) {\n      var boardDiv = document.createElement(\"div\");\n      boardDiv.className = \"\".concat(person, \"-board-square\");\n      boardDiv.setAttribute(\"data-y\", i);\n      boardDiv.setAttribute(\"data-x\", j);\n      personBoard.appendChild(boardDiv);\n    }\n  }\n}\nfunction addShips() {\n  computer.randomShips();\n  var playerBoardDivs = document.getElementsByClassName(\"player-board-square\");\n  var rotate = document.createElement(\"div\");\n  body.appendChild(rotate);\n  rotate.id = \"rotate\";\n  rotate.innerText = \"Rotate\";\n  rotate.addEventListener(\"click\", function (e) {\n    player.game.changeRotation();\n  });\n  for (var i = 0; i < playerBoardDivs.length; i++) {\n    playerBoardDivs[i].addEventListener(\"click\", addPlayerShips);\n  }\n}\nfunction addPlayerShips(e) {\n  player.addShip(e);\n  updateShipOnBoard();\n  if (player.shipsFull()) {\n    var playerBoardDivs = document.getElementsByClassName(\"player-board-square\");\n    for (var i = 0; i < playerBoardDivs.length; i++) {\n      playerBoardDivs[i].removeEventListener(\"click\", addPlayerShips);\n    }\n    var start = document.createElement(\"div\");\n    start.innerText = \"Start\";\n    body.appendChild(start);\n    start.id = \"start\";\n    start.addEventListener(\"click\", function () {\n      body.removeChild(start);\n      body.removeChild(document.getElementById(\"rotate\"));\n      var computerBoardDivs = document.getElementsByClassName(\"computer-board-square\");\n      for (var _i = 0; _i < computerBoardDivs.length; _i++) {\n        computerBoardDivs[_i].addEventListener(\"click\", playerTurn);\n      }\n    });\n  }\n}\nfunction updateShipOnBoard() {\n  var placements = player.game.coordinatesOccupied;\n  var playerBoardDivs = document.getElementsByClassName(\"player-board-square\");\n  for (var i = 0; i < placements.length; i++) {\n    for (var j = 0; j < playerBoardDivs.length; j++) {\n      var shot = [parseInt(playerBoardDivs[j].getAttribute(\"data-x\")), parseInt(playerBoardDivs[j].getAttribute(\"data-y\"))];\n      if ((0,_areEqual__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shot, placements[i])) {\n        playerBoardDivs[j].style = \"background-color: pink\";\n      }\n    }\n  }\n}\nfunction updateBoard(board, element) {\n  var shot = [parseInt(element.getAttribute(\"data-x\")), parseInt(element.getAttribute(\"data-y\"))];\n  var playerShotsMissed = player.game.shotsMissed;\n  var computerShotsMissed = computer.game.shotsMissed;\n  if (board.id == \"player-board\") {\n    for (var i = 0; i < playerShotsMissed.length; i++) {\n      if ((0,_areEqual__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shot, playerShotsMissed[i])) {\n        element.style = \"background-color: blue\";\n        return;\n      }\n    }\n    element.style = \"background-color: red\";\n  } else {\n    for (var _i2 = 0; _i2 < computerShotsMissed.length; _i2++) {\n      if ((0,_areEqual__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shot, computerShotsMissed[_i2])) {\n        element.style = \"background-color: blue\";\n        return;\n      }\n    }\n    element.style = \"background-color: red\";\n  }\n}\nfunction computerTurn() {\n  var element;\n  var shot = computer.randomShot();\n  var computerBoardDivs = document.getElementsByClassName(\"computer-board-square\");\n  var playerBoardDivs = document.getElementsByClassName(\"player-board-square\");\n  for (var i = 0; i < playerBoardDivs.length; i++) {\n    if (playerBoardDivs[i].getAttribute(\"data-x\") == shot[0] && playerBoardDivs[i].getAttribute(\"data-y\") == shot[1]) {\n      element = playerBoardDivs[i];\n      break;\n    }\n  }\n  computer.shoot(shot, player);\n  updateBoard(playerBoard, element);\n  if (player.game.areSunk() || computer.game.areSunk()) {\n    endGame();\n  } else {\n    for (var _i3 = 0; _i3 < computerBoardDivs.length; _i3++) {\n      for (var j = 0; j < player.shotsMade.length; j++) {\n        if ((0,_areEqual__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(player.shotsMade[j], [computerBoardDivs[_i3].getAttribute(\"data-x\"), computerBoardDivs[_i3].getAttribute(\"data-y\")])) {\n          break;\n        } else if (j == player.shotsMade.length - 1) {\n          computerBoardDivs[_i3].addEventListener(\"click\", playerTurn);\n        }\n      }\n    }\n  }\n}\nfunction playerTurn(e) {\n  var element = e.target;\n  var shot = [parseInt(element.getAttribute(\"data-x\")), parseInt(element.getAttribute(\"data-y\"))];\n  player.shoot(shot, computer);\n  updateBoard(computerBoard, element);\n  var computerBoardDivs = document.getElementsByClassName(\"computer-board-square\");\n  var playerBoardDivs = document.getElementsByClassName(\"player-board-square\");\n  for (var i = 0; i < computerBoardDivs.length; i++) {\n    computerBoardDivs[i].removeEventListener(\"click\", playerTurn);\n  }\n  if (player.game.areSunk() || computer.game.areSunk()) {\n    endGame();\n  } else {\n    computerTurn();\n  }\n}\nfunction playGame() {\n  player = (0,_factory_Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  computer = (0,_factory_Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  createBoard(\"player\", playerBoard);\n  createBoard(\"computer\", computerBoard);\n  body.appendChild(boardContainers);\n  boardContainers.appendChild(playerBoard);\n  boardContainers.appendChild(computerBoard);\n  var computerBoardDivs = document.getElementsByClassName(\"computer-board-square\");\n  addShips();\n}\nfunction endGame() {\n  var win = document.createElement(\"div\");\n  body.appendChild(win);\n  win.id = \"win\";\n  if (computer.game.areSunk()) {\n    win.innerText = \"you win\";\n  } else if (player.game.areSunk()) {\n    win.innerText = \"you lost\";\n  }\n  boardContainers.style = \"filter: blur(10px)\";\n  var playAgain = document.createElement(\"div\");\n  playAgain.id = \"play-again-button\";\n  body.appendChild(playAgain);\n  playAgain.innerText = \"Play Again?\";\n  playAgain.addEventListener(\"click\", function () {\n    boardContainers.style = \"filter: none\";\n    playerBoard.innerHTML = \"\";\n    computerBoard.innerHTML = \"\";\n    boardContainers.innerHTML = \"\";\n    body.removeChild(playAgain);\n    body.removeChild(win);\n    playGame();\n  });\n}\nplayGame();\n\n//# sourceURL=webpack://Battleship/./src/index.js?");

/***/ }),

/***/ "./src/css/battleshipMap.css":
/*!***********************************!*\
  !*** ./src/css/battleshipMap.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Battleship/./src/css/battleshipMap.css?");

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