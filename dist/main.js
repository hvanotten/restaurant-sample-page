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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('div')\n    contact.classList.add('contact');\n    contact.setAttribute(\"id\", \"contact\");\n    contact.setAttribute(\"data-tab-content\", \"\");\n\n    const phoneNumber = document.createElement('p')\n    phoneNumber.textContent = 'Phone: 📞  541 788 5682'\n\n    const address = document.createElement('p');\n    address.textContent = 'Current Location: 🏠 1661 NE 4th St, Bend, OR 97701';\n\n    const hours = document.createElement('p');\n    hours.textContent = 'HOURS: Delivery: 12:00pm - 9:00pm Pickup: 12:00pm - 7:00pm';\n\n    const restaurantLocation = document.createElement('img');\n    restaurantLocation.src = './images/location.png';\n    restaurantLocation.alt = \"Bomb Tot's Truck location\";\n\n    contact.appendChild(phoneNumber)\n    contact.appendChild(address)\n    contact.appendChild(restaurantLocation)\n    contact.appendChild(hours)\n\n    return contact;\n}\n\nfunction loadContact() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://webpack_tots/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction createHome() {\n    const home = document.createElement('div');\n    home.classList.add('home');\n\n    const truckImg = document.createElement(\"img\");\n    truckImg.src = \"./images/tots_truck.jpeg\";\n    truckImg.alt = \"Bomb Tot Food Cart\";\n\n    home.appendChild(createTitle(\"HANDMADE TOTS!\"));\n    home.appendChild(createParagraph(\"Often craving crunchy munchies while enjoying adult beverages, and with no suitable place to turn, an idea was born and magic was made!! Hand Scooped, Homemade tater TOTS! Try them with toppings, seasoning or sauce... YOU be the Boss!\"));\n\n    home.appendChild(truckImg);\n    home.appendChild(\n      createParagraph(\n        \"This food truck is currently located at the MidTown Yacht Club\"\n      )\n    );\n\n\n    return home;\n}\n\nfunction createTitle(text) {\n    const title = document.createElement(\"h2\")\n    title.textContent = text;\n    return title;\n}\n\nfunction createParagraph(text) {\n    const paragraph = document.createElement(\"p\");\n    paragraph.textContent = text;\n    return paragraph;\n}\n\nfunction loadHome() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createHome());\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://webpack_tots/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://webpack_tots/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenu = (() => {\n\n    const contentContainer = document.querySelector(\"#content\");\n    const menu = document.createElement(\"div\");\n    menu.setAttribute(\"id\", \"menu\");\n    menu.setAttribute(\"data-tab-content\", \"\");\n    menu.innerHTML = `\n    <div class=\"hero\">\n    <h1>Menu</h1>\n    </div>\n    <div class=\"menu-container\">\n\n    <div class=\"menu-item\">\n        <img src=\"./images/bak_n_loaded_tot.jpg\" alt=\"loaded tots\" />\n        <div class=\"item-content\">\n            <h4>BAK'D N LOADED BEER CHEESE TOTS: <span>$7.49</span></h4>\n            <p>\n                TOTS!, Sour Cream, Cart made Beer Cheese, Bacon, Green Onion\n            </p>\n        </div>\n    </div>\n\n    <div class=\"menu-item\">\n        <img src=\"./images/buffalo_tots.png\" alt=\"buffalo tots\" />\n        <div class=\"item-content\">\n            <h4>BUFFALO STYLE: <span>$8.49</span></h4>\n            <p>TOTS!, Franks hot sauce, Ranch drizzle, Blue cheese crumbles, Chives</p>\n        </div>\n    </div>\n\n    <div class=\"menu-item\">\n    <img src=\"./images/truffle_tot.jpg\" alt=\"truffle tots\" />\n        <div class=\"item-content\">\n        <h4>TRUFFLE TOTS! SHUFFLE: <span>$6.49</span></h4>\n        <p>TOTS!, Truffle Zest, Fresh Shaved Parmesan, Parsley, White Truffle Oil</p>\n        </div>\n    </div>\n    <div class=\"menu-item\">\n    <img src=\"./images/avo_tot.jpg\" alt=\"Cobb salad Style Tots\" />\n    <div class=\"item-content\">\n      <h4>COBB SALAD STYLE: <span>$7.99</span></h4>\n      <p>\n      TOTS! topped with avocado, bacon, blue cheese crumbles, fresh diced tomatoes, fresh lettuce and cart made ranch dressing\n      </p>\n    </div>\n  </div>\n\n    `;\n    contentContainer.appendChild(menu);\n    return menu;\n})\n\nfunction loadMenu() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://webpack_tots/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n\n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\");\n    restaurantName.textContent = \"BOMB TOTS\";\n\n    header.appendChild(restaurantName);\n    header.appendChild(createNav());\n\n    return header;\n}\n\nfunction createNav() {\n    const nav = document.createElement(\"nav\");\n\n    const homeButton = document.createElement(\"button\");\n    homeButton.classList.add(\"button-nav\");\n    homeButton.textContent = \"HOME\";\n    homeButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(homeButton)\n        ;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const menuButton = document.createElement(\"button\");\n    menuButton.classList.add(\"button-nav\");\n    menuButton.textContent = \"MENU\";\n    menuButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(menuButton);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    const contactButton = document.createElement(\"button\");\n    contactButton.classList.add(\"button-nav\");\n    contactButton.textContent = \"CONTACT\";\n    contactButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(contactButton);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    nav.appendChild(homeButton);\n    nav.appendChild(menuButton);\n    nav.appendChild(contactButton);\n\n    return nav;\n\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll(\".button-nav\");\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove(\"active\");\n        }\n    });\n    button.classList.add(\"active\");\n}\n\nfunction createMain() {\n    const main = document.createElement(\"main\");\n\n    main.classList.add(\"main\");\n    main.setAttribute(\"id\", \"main\");\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n    footer.classList.add(\"footer\");\n\n    const copyright = document.createElement(\"p\");\n    copyright.textContent = \"Copyright @ 2021 hvanotten\";\n\n    const githubLink = document.createElement(\"a\");\n    githubLink.href = \"https://github.com/hvanotten\";\n\n    const githubIcon = document.createElement(\"img\");\n    githubIcon.alt = \"Github Icon\";\n    githubIcon.src = './images/Github-Mark-64px.png';\n\n    githubLink.appendChild(githubIcon);\n    footer.appendChild(copyright);\n    footer.appendChild(githubLink);\n\n    return footer;\n}\n\n//load home page when website loads.\nfunction initializeWebsite() {\n    const content = document.getElementById(\"content\");\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    setActiveButton(document.querySelector(\".button-nav\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://webpack_tots/./src/website.js?");

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