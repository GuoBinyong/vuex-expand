module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("vuex")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);r(2);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){if(!(e instanceof Array))throw new Error("storeConfigs必须是数组类型，但您传的是：".concat(e));return e.reduce((function(e,t){return Object.keys(t).forEach((function(r){var n=t[r],o=e[r],i=null;switch(r){case"plugins":i=[].concat(u(o),u(n));break;case"initState":case"strict":i=o||n;break;case"modules":o&&Object.keys(n).forEach((function(e){var t=o[e];if(t){var r=s([t,n[e]]);n[e]=r;try{delete o[e]}catch(e){}}})),i=a({},o,{},n);break;case"state":"function"==typeof n&&(n=n()),i=a({},o,{},n);break;default:i=a({},o,{},n)}e[r]=i})),e}),{})}function l(e,t,r){if(t){var n=e.modules;n&&(Object.keys(n).forEach((function(e){var o=n[e];o=l(o,t[e],r),n[e]=o;try{delete t[e]}catch(e){}})),e.modules=n);var o=e.state;if(r){if(o&&!e.initState){var i=Object.keys(o);e.state=Object.assignKeys(o,i,t)}}else e.initState?e.state=a({},t,{},o):e.state=a({},o,{},t)}return e}Object.defineProperty(o.a.Store.prototype,"keyName",{get:function(){return this._keyName||(this._keyName="StoreState"),this._keyName},set:function(e){e&&(this._keyName=e)}}),o.a.Store.prototype.saveState=function(e){this.keyName=e,localStorage.setAnyItem(this.keyName,this.state)},o.a.Store.prototype.getLocalState=function(){return localStorage.getParsedItem(this.keyName)},o.a.Store.mergeStoreConfigs=s,o.a.Store.configStoreOptionsWhitInitState=l,o.a.Store.mergeStoreConfigsWhitInitState=function(e,t){if(!(e instanceof Array))throw new Error("storeConfigs必须是数组类型，但您传的是：".concat(e));return s(e.map((function(e){return l(e,t,!0)})))}},function(e,t){e.exports=require("es-expand")}]);
//# sourceMappingURL=vuex-expand.commonjs2.js.map