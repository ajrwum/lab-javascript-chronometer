class Chronometer {
  constructor() {
    // initialization
    // - contains the current time in seconds waiting a reset
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // some initialization
    const timePeriod = 1000; // in milliseconds
    // starting the chronometer
    this.intervalId = setInterval(() => {
      // updating the currentTime in seconds
      this.currentTime++;
      // testing callback function presence and running it if present
      if (typeof callback === 'function') callback();
    } , timePeriod);
  }

  getMinutes() {
    // getting minutes from currentTime in seconds
    return Math.floor(this.currentTime / 60) ;
  }

  getSeconds() {
    // getting remaining seconds (beyond minutes)
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // casting the value into string and adding 0 in front of single-char value
    return String(value).length === 2 ? String(value) : '0' + value;

  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    // initializing current time
    this.currentTime = 0;
  }

  split() {
    // formatting minutes & seconds into "mm:ss"
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
