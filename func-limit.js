function limitCalls(cb, maxCalls) {
    var timeout = Math.ceil(1000 / maxCalls);
    var canCall = true;

    return function() {
        if (canCall) {
            canCall = false;

            var args = Array.prototype.slice.call(arguments);

            setTimeout(function() {
                canCall = true;
            }, timeout);

            cb.apply(this, args);
        }
    };
}

module.exports = limitCalls;
