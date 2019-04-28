(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        realEstate: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/realEstate/realEstate.js", "vendors~realEstate" ]);
    return checkDeferredModules();
})({
    "./assets/js/realEstate/Filter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Filter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Burns\'\n    };\n    this.cities = this.cities.bind(this);\n    this.homeTypes = this.homeTypes.bind(this);\n    this.bedrooms = this.bedrooms.bind(this);\n  }\n\n  componentWillMount() {\n    this.props.populateAction();\n  }\n\n  cities() {\n    if (this.props.globalState.populateFormsData.cities != undefined) {\n      var cities = this.props.globalState.populateFormsData.cities;\n      console.log(cities);\n      return cities.map(item => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n          key: item,\n          value: item\n        }, item);\n      });\n    }\n  }\n\n  homeTypes() {\n    if (this.props.globalState.populateFormsData.homeTypes != undefined) {\n      var homeTypes = this.props.globalState.populateFormsData.homeTypes;\n      console.log(homeTypes);\n      return homeTypes.map(item => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n          key: item,\n          value: item\n        }, item);\n      });\n    }\n  }\n\n  bedrooms() {\n    if (this.props.globalState.populateFormsData.bedrooms != undefined) {\n      var bedrooms = this.props.globalState.populateFormsData.bedrooms;\n      console.log(bedrooms);\n      return bedrooms.map(item => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n          key: item,\n          value: item\n        }, item, "+ BR");\n      });\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "filter"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "inside"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      for: true\n    }, "City"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "city",\n      className: "filters city",\n      onChange: this.props.change\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "All"\n    }, "All"), this.cities()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      for: true\n    }, "House Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "homeType",\n      className: "filters homeType",\n      onChange: this.props.change\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "All"\n    }, "All"), this.homeTypes()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      for: true\n    }, "Rooms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "rooms",\n      className: "rooms",\n      onChange: this.props.change\n    }, this.bedrooms()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters price"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min_price",\n      className: "min_price",\n      onChange: this.props.change,\n      value: this.props.globalState.min_price\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max_price",\n      className: "max-price",\n      onChange: this.props.change,\n      value: this.props.globalState.max_price\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters floor-space"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Floor Space"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min_floor_space",\n      className: "min_floor_space",\n      onChange: this.props.change,\n      value: this.props.globalState.min_floor_space\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max_floor_space",\n      className: "max_floor_space",\n      onChange: this.props.change,\n      value: this.props.globalState.max_floor_space\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Extras"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      for: "extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Elevators"), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "elevator",\n      value: "elevator",\n      type: "checkbox",\n      onChange: this.props.change\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      for: "extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Swimming Pool"), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "swimming_pool",\n      value: "swimming_pool",\n      type: "checkbox",\n      onChange: this.props.change\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      for: "extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Gym"), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "gym",\n      value: "Gym",\n      type: "checkbox",\n      onChange: this.props.change\n    })))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/realEstate/Filter.js?');
    },
    "./assets/js/realEstate/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Burns\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "Logo"\n    }, " Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "Create Ads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "Log In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      className: "register-btn"\n    }, "Register")));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/realEstate/Header.js?');
    },
    "./assets/js/realEstate/Listings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Burns\'\n    };\n    this.loopListings = this.loopListings.bind(this);\n  }\n\n  loopListings() {\n    var listingsData = this.props.listingsData;\n\n    if (listingsData == undefined || listingsData.length == 0) {\n      return \'Sorry your filter did not match any listing.\';\n    }\n\n    return listingsData.map((listing, index) => {\n      if (this.props.globalState.view == \'box\') {\n        // THIS IS THE BOX VIEW\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-3",\n          key: index\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-img",\n          style: {\n            background: `url("${listing.image}") no-repeat center center`\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "address"\n        }, listing.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-3"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-img"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-9"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "user-name"\n        }, "Nina Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "post-date"\n        }, "05/03/19")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "floor-space"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-square"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.floorSpace, " m\\xB2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "bedrooms"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-bed"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.rooms, " bedrooms")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "view-btn"\n        }, "View Listing"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "bottom-info"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "price"\n        }, "$", listing.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "location"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-map-marker"\n        }), listing.suburb, ", ", listing.city))));\n      } else {\n        // THIS IS THE LONG VIEW\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-12 col-lrg-6",\n          key: index\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-img",\n          style: {\n            background: `url("${listing.image}") no-repeat center center`\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "address"\n        }, listing.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-3"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-img"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-9"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "user-name"\n        }, "Nina Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "post-date"\n        }, "05/03/19")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "floor-space"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-square"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.floorSpace, " m\\xB2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "bedrooms"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-bed"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.rooms, " bedrooms")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "view-btn"\n        }, "View Listing"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "bottom-info"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "price"\n        }, "$", listing.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "location"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-map-marker"\n        }), listing.suburb, ", ", listing.city))));\n      }\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "Listings"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "search-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "search",\n      onChange: this.props.change\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "sortby-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "results"\n    }, this.props.globalState.filteredData.length, " results found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "sort-options"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "sortby",\n      className: "sortby",\n      onChange: this.props.change\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-dsc"\n    }, "Lowest Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-asc"\n    }, "Highest Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "view"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-list",\n      onClick: this.props.changeView.bind(null, \'long\')\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-th",\n      onClick: this.props.changeView.bind(null, \'box\')\n    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "row"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "listings-results"\n    }, this.loopListings())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "pagination"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "row"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n      className: "pages"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Previous"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n      className: "active"\n    }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Next")))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/realEstate/Listings.js?');
    },
    "./assets/js/realEstate/data/listingsData.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("var listingsData = [{\n  address: '20 Coronation Rd',\n  suburb: 'Glenfield',\n  city: 'North Shore',\n  rooms: 3,\n  price: 234000,\n  floorSpace: 1000,\n  extras: ['elevator', 'gym'],\n  homeType: 'house',\n  image: 'https://i.postimg.cc/CMvWSCnM/exterior-1597098-640.jpg'\n}, {\n  address: '20 Shakespeare Rd',\n  suburb: 'Milford',\n  city: 'North Shore',\n  rooms: 4,\n  price: 345000,\n  floorSpace: 3000,\n  extras: ['elevator', 'gym'],\n  homeType: 'house',\n  image: 'https://i.postimg.cc/NMBWfpxF/interior-2685522-640.jpg'\n}, {\n  address: '20 Carlton Core',\n  suburb: 'Parnell',\n  city: 'Auckland Central',\n  rooms: 5,\n  price: 765000,\n  floorSpace: 3000,\n  extras: ['elevator', 'gym'],\n  homeType: 'apartment',\n  image: 'https://i.postimg.cc/0Qnh6Dtf/kitchen-1940177-640.jpg'\n}, {\n  address: '54 Parnell Rise',\n  suburb: 'Parnell',\n  city: 'Auckland Central',\n  rooms: 2,\n  price: 546000,\n  floorSpace: 1000,\n  extras: ['elevator', 'gym'],\n  homeType: 'apartment',\n  image: 'https://i.postimg.cc/8cn34Dgf/kitchen-2400367-640.jpg'\n}, {\n  address: '54 New North Road',\n  suburb: 'Kingsland',\n  city: 'Auckland Central',\n  rooms: 3,\n  price: 222000,\n  floorSpace: 4000,\n  extras: ['elevator', 'gym'],\n  homeType: 'house',\n  image: 'https://i.postimg.cc/fybpYyph/luxury-home-2409518-640.jpg'\n}, {\n  address: '34 Botany Road',\n  suburb: 'Botany',\n  city: 'East Auckland',\n  rooms: 4,\n  price: 153000,\n  floorSpace: 4500,\n  extras: ['elevator', 'gym'],\n  homeType: 'house',\n  image: 'https://i.postimg.cc/6QdkXDnF/rec-room-802017-640.jpg'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (listingsData);\n\n//# sourceURL=webpack:///./assets/js/realEstate/data/listingsData.js?");
    },
    "./assets/js/realEstate/realEstate.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ \"./assets/js/realEstate/Header.js\");\n/* harmony import */ var _Filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter.js */ \"./assets/js/realEstate/Filter.js\");\n/* harmony import */ var _Listings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Listings.js */ \"./assets/js/realEstate/Listings.js\");\n/* harmony import */ var _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/listingsData.js */ \"./assets/js/realEstate/data/listingsData.js\");\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n    this.state = {\n      name: 'Burns',\n      listingsData: _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"],\n      city: 'All',\n      homeType: 'All',\n      rooms: '0',\n      min_price: 0,\n      max_price: 10000000,\n      min_floor_space: 0,\n      max_floor_space: 50000,\n      elevator: false,\n      gym: false,\n      swimming_pool: false,\n      filteredData: _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"],\n      populateFormsData: '',\n      sortby: 'price-dsc',\n      view: 'box',\n      search: ''\n    };\n    this.change = this.change.bind(this);\n    this.filteredData = this.filteredData.bind(this);\n    this.populateForms = this.populateForms.bind(this);\n    this.changeView = this.changeView.bind(this);\n  }\n\n  componentWillMount() {\n    var listingsData = this.state.listingsData.sort((a, b) => {\n      return a.price - b.price;\n    });\n    this.setState({\n      listingsData\n    });\n  }\n\n  change(event) {\n    var name = event.target.name;\n    var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;\n    this.setState({\n      [name]: value\n    }, () => {\n      console.log(this.state);\n      this.filteredData();\n    });\n  }\n\n  changeView(viewName) {\n    this.setState({\n      view: viewName\n    });\n  }\n\n  filteredData() {\n    var newData = this.state.listingsData.filter(item => {\n      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.rooms;\n    });\n\n    if (this.state.city != 'All') {\n      newData = newData.filter(item => {\n        return item.city == this.state.city;\n      });\n    }\n\n    if (this.state.homeType != 'All') {\n      newData = newData.filter(item => {\n        return item.homeType == this.state.homeType;\n      });\n    }\n\n    if (this.state.sortby == 'price-dsc') {\n      newData = newData.sort((a, b) => {\n        return a.price - b.price;\n      });\n    }\n\n    if (this.state.sortby == 'price-asc') {\n      newData = newData.sort((a, b) => {\n        return b.price - a.price;\n      });\n    }\n\n    if (this.state.search != '') {\n      newData = newData.filter(item => {\n        var city = item.city.toLowerCase();\n        var searchText = this.state.search.toLowerCase();\n        var n = city.match(searchText);\n\n        if (n != null) {\n          return true;\n        }\n      });\n    }\n\n    this.setState({\n      filteredData: newData\n    });\n  }\n\n  populateForms() {\n    //city\n    var cities = this.state.listingsData.map(item => {\n      return item.city;\n    });\n    cities = new Set(cities);\n    cities = [...cities];\n    cities = cities.sort(); //homeType\n\n    var homeTypes = this.state.listingsData.map(item => {\n      return item.homeType;\n    });\n    homeTypes = new Set(homeTypes);\n    homeTypes = [...homeTypes];\n    homeTypes = homeTypes.sort(); //rooms\n\n    var bedrooms = this.state.listingsData.map(item => {\n      return item.rooms;\n    });\n    bedrooms = new Set(bedrooms);\n    bedrooms = [...bedrooms];\n    bedrooms = bedrooms.sort();\n    this.setState({\n      populateFormsData: {\n        homeTypes,\n        bedrooms,\n        cities\n      }\n    }, () => {\n      console.log(this.state);\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      id: \"content-area\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n      change: this.change,\n      globalState: this.state,\n      populateAction: this.populateForms\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Listings_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n      listingsData: this.state.filteredData,\n      globalState: this.state,\n      change: this.change,\n      changeView: this.changeView\n    })));\n  }\n\n}\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), app);\n\n//# sourceURL=webpack:///./assets/js/realEstate/realEstate.js?");
    }
});