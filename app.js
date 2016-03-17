/* jshint loopfunc: true */
var limiter = require('./func-limit');
var emitter = require('./simple-emitter');

var callLimits = [1, 2, 5, 10];
var callCounts = callLimits.slice().fill(0);

var source = emitter.start(10000, 2, function(totalTime) {
    console.log('Total time (s): ' + totalTime);

    callCounts.forEach(function(item, index) {
        console.log(index + ': Total calls = ' + item + '; Calls per second = ' + Math.round(item / totalTime));
    });
});

for (var i = 0; i < callLimits.length; i++) {
    source.on(emitter.EVENT_NAME, limiter((function (index) {
        return function() {
            callCounts[index]++;
        };
    })(i), callLimits[i]));
}
