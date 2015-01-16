# requirejs-loader-plugin

This a requirejs loader for grouping different files into an object and being able to load all at once.

## Examples

If this were you directory structure:

```
app
 \- modules
    \- data.js
    \- tools.js
 \- validators
     \- string.js
     \- number.js
     \- object.js
```

It would be a pain in requirejs to get all the "modules".

With the loader, you can do this:

```js
require.config({
  config: {
    loader: {
      modules: {
        data: 'modules/data',
        tools: 'modules/tools'
      },
      validators: {
        string: 'validators/string',
        number: 'validators/number',
        object: 'validators/object'
      }
    }
  },
  paths: {
    loader: '/path/to/loader/loader'
  }
});

// NOTE: this is the same:
// requirejs(['loader!all'], function(obj) {
requirejs(['loader!'], function(obj) {
    /*
    obj === {
      modules: {
        data: <data.js object>,
        tools: <tools.js object>,
      },
      validators : {
        string: <string.js object>,
        number: <number.js object>,
        object: <object.js object>
      }
    }
    */
});
```

Additionally, you can choose to just load one of the objects:

```js
requirejs(['loader!modules'], function(obj) {
    /*
    obj === {
      data: <data.js object>,
      tools: <tools.js object>,
    }
    */
});
```
