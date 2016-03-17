var EventEmitter = require('events').EventEmitter;
var EVENT_NAME = 'call';

module.exports = {
        EVENT_NAME: EVENT_NAME,
        start: function(maxCalls, delay, cb) {
            var emitter = new EventEmitter();

            var totalTime = 0;

            var startTime = new Date().getTime();

            var callsCount = 0;

            var interval = setInterval(function() {
                callsCount++;

                emitter.emit(EVENT_NAME);

                if (callsCount == maxCalls) {
                    clearInterval(interval);

                    var endTime = new Date().getTime();
                    totalTime = (endTime - startTime) / 1000;

                    cb(totalTime);
                }
            }, delay);

            return emitter;
        }
};
