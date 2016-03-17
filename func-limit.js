function limitCalls(cb, maxCalls) {
    var timeout = Math.ceil(1000 / maxCalls);
    var canCall = true;

    return function() {
        if (canCall) {
            canCall = false;

            setTimeout(function() {
                canCall = true;
            }, timeout);

            cb();
        }
    };
}

module.exports = limitCalls;
