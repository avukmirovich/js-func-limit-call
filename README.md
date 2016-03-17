Callback call limiter
=====================
An example of how we can limit calls of event handler to specific count per second.

About
-----
`func-limit.js` contains module exports a function which limits calls of handler, specified as `cb` argument, to times, specified as `maxCalls` argument.

`simple-emitter.js` contains module exports objects with 2 properties. First property named `ENENT_NAME` is constant, which contains name of event which will be emitting. Second property named `start` is function, which create event emitter, start emitting event `ENENT_NAME` and returning emitter. Function has next arguments:
* `maxCalls` - how much event must be emitted;
* `delay` - a delay between event emits;
* `cb` - a callback, which will be called, when number of event calls reach `maxCalls`.

In `app.js` it requires both modules, staring simple emitter and subscribe on it to `EVENT_NAME` event, using function call limiter. There are 4 sample handlers, their call rate per second specified in `callLimits` variable.

Usage
-----
You need `node` to run this sample. Just execute following command:
```
node app.js
```
You will see spinner, which rotating some time. When scripts finishes, it will show how much time have been taken (in seconds), how much times each handler has been called entire and how much time each handler has been called per second.
