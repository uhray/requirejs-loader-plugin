
define(['module'], function(module) {
  var id = module.id;

  return {
    load: function(name, req, onload, config) {
      var config = module.config(),
          keys = Object.keys(config || {});

      if (name == 'all' || name == '') {
        // load all modules
        doLoad(keys, keys.map(function(d) { return id + '!' + d; }), config);
      } else {
        // load specific modules
        keys = Object.keys(config[name] || {});
        doLoad(keys, keys.map(function(d) { return config[name][d]; }),
               config[name] || {});
      }

      function doLoad(keys, modules, config) {
        req(modules, function() {
          var o = {}, i;
          for (i = 0; i < keys.length; i++) o[keys[i]] = arguments[i];
          onload(o);
        });
      }
    }

  }

});
