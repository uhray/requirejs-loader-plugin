
define(['module'], function(module) {
  var id = module.id;

  return {
    load: function(name, req, onload, config) {
      var config = module.config(),
          keys = Object.keys(config || {});

      if (name == 'all' || name == '') {
        // load all modules
        doLoad(keys, map(keys, function(d) { return id + '!' + d; }), config);
      } else {
        // load specific modules
        keys = Object.keys(config[name] || {});
        doLoad(keys, map(keys, function(d) { return config[name][d]; }),
               config[name] || {});
      }

      function doLoad(keys, modules, config) {
        req(modules, function() {
          var o = {}, i;
          for (i = 0; i < keys.length; i++) o[keys[i]] = arguments[i];
          onload(o);
        });
      }

      function map(arr, fn) {
        var i = 0,
            ret = [];

        for (i = 0; i < arr.length; i++) {
          ret.push(fn(arr[i], i));
        }

        return ret;
      }
    }

  }

});

// POLYFILLS
// jscs:disable

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

// jscs:enable
