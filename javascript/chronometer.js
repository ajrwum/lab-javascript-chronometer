class Chronometer {
  constructor() {
    // initialization
    // - contains the current time in seconds waiting a reset
    this.currentTime = 0;
    this.intervalId = null;
    // - for displaying hundredth of a second
    this.currentHundredths = 0;
    this.hundredthsIntervalId = null;
  }

  start(callback) {
    // some initialization
    const timePeriod = 1000; // in milliseconds
    const hundredthPeriod = 10; // hundredth of a second
    // starting the chronometer
    this.intervalId = setInterval(() => {
      // updating the currentTime in seconds
      this.currentTime++;
      // testing callback function presence and running it if present
      // commenting callback here to avoid potential glitches when close to the second
      // if (typeof callback === 'function') callback();
    } , timePeriod);

    // starting the counter for hundredth of a second
    // - it might be slightly off regarding the previous counter though
    this.hundredthsIntervalId = setInterval(() => {
      // updating the counter of hundredth
      this.currentHundredths++;
      // testing callback function presence and running it if present
      // keeping the callback execution here with the smallest interval
      if (typeof callback === 'function') callback();
    }, hundredthPeriod);
  }

  getMinutes() {
    // getting minutes from currentTime in seconds
    return Math.floor(this.currentTime / 60) ;
  }

  getSeconds() {
    // getting remaining seconds (beyond minutes)
    return this.currentTime % 60;
  }

  getHundredths() {
    // getting hundredth of a second (between 0 and 99)
    return this.currentHundredths % 100;
  }

  computeTwoDigitNumber(value) {
    // casting the value into string and adding 0 in front of single-char value
    return String(value).length === 2 ? String(value) : '0' + value;
  }

  stop() {
    // clearing both intervals
    clearInterval(this.intervalId);
    clearInterval(this.hundredthsIntervalId);
  }

  reset() {
    // initializing current time
    this.currentTime = 0;
    // initializing hundredth of a second also
    this.currentHundredths = 0;
  }

  split() {
    // separating the time parts for better legibility
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());
    const hh = this.computeTwoDigitNumber(this.getHundredths());
    // formatting minutes & seconds into "mm:ss:hh"
    return `${mm}:${ss}:${hh}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
