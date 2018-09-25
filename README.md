# core.plugin.injector


```js
let Core = require('core.constructor');

let core = new Core();

core.plugin([
  require('core.plugin.injector')
]);

core.require(['a', 'c'], (a, c) => {  // require modules 'a' and 'c'
    a; // 2
    c: // 3
});

core.injector.load('a', ['b'], (b) => {    // load a module called 'a' which depends on 'b'
  return b + 1;
});

core.injector.load('b', () => {    // load a module called 'b' which has no dependencies
  return 1;
});

core.injector.load('c', ['b'], (b) => {    // load a module called 'c' which depends on 'b'
  return b + 2;
}, () => {
  // optional callback. module 'c' has finished loading.
});
```
