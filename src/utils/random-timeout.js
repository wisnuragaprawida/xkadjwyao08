function randomTimeout(minSeconds, maxSeconds) {
    minSeconds = Math.ceil(minSeconds);
    maxSeconds = Math.floor(maxSeconds);
    return (Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds) * 1000;
}
module.exports = randomTimeout;