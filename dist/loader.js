define(["module"],function(t){var n=t.id;return{load:function(r,e,o,u){function c(t,n){e(n,function(){var n,r={};for(n=0;n<t.length;n++)r[t[n]]=arguments[n];o(r)})}function f(t,n){var r=0,e=[];for(r=0;r<t.length;r++)e.push(n(t[r],r));return e}var u=t.config(),i=Object.keys(u||{});"all"==r||""==r?c(i,f(i,function(t){return n+"!"+t}),u):(i=Object.keys(u[r]||{}),c(i,f(i,function(t){return u[r][t]}),u[r]||{}))}}}),Object.keys||(Object.keys=function(){"use strict";var t=Object.prototype.hasOwnProperty,n=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],e=r.length;return function(o){if("object"!=typeof o&&("function"!=typeof o||null===o))throw new TypeError("Object.keys called on non-object");var u,c,f=[];for(u in o)t.call(o,u)&&f.push(u);if(n)for(c=0;e>c;c++)t.call(o,r[c])&&f.push(r[c]);return f}}());