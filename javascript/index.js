const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // getting minutes into a string
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  // setting textContent
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  // getting minutes into a string
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  // setting textContent
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // creating the li element
  const liElement = document.createElement("li");
  liElement.textContent = chronometer.split();
  splitsElement.appendChild(liElement);
}

function clearSplits() {
  // removing all splits from the list
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // toggle class
  btnLeftElement.classList.toggle('start'); // off
  btnLeftElement.classList.toggle('stop'); // on
  // updating textContent
  btnLeftElement.textContent = 'STOP';
}

function setSplitBtn() {
  // toggle class
  btnRightElement.classList.toggle('reset'); // off
  btnRightElement.classList.toggle('split'); // on
  // updating textContent
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  // toggle class
  btnLeftElement.classList.toggle('stop'); // off
  btnLeftElement.classList.toggle('start'); // on
  // updating textContent
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  // toggle class
  btnRightElement.classList.toggle('split'); // off
  btnRightElement.classList.toggle('reset'); // on
  // updating textContent
  btnRightElement.textContent = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // checking the class list to know the expected action
  const isClickStart = btnLeftElement.classList.contains('start') ? true : false;
  // triggering action accordingly
  if (isClickStart) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  }
  else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // checking the class list to know the action to perform
  const isClickReset = btnRightElement.classList.contains('reset') ? true : false;
  // triggering the expected action
  if (isClickReset) {
    clearSplits();
    chronometer.reset();
    printTime();
  }
  else {
    printSplit();
  };
});
