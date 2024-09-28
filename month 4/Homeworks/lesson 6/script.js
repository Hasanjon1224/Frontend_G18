"use strict";

const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const clearButton = document.getElementsByClassName("lap-clear-button")[0];
const secund = document.getElementsByClassName("secund")[0];
const minute = document.getElementsByClassName("minute")[0];
const centiSecund = document.getElementsByClassName("msecund")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("router-circle")[0];

let isPlay = false;
let isReset = false;
let secCounter = 0;
let minuteCounter = 0;
let sentiCounter = 0;
let lapItem = 0;
let min;
let sec;
let sentiSec;

const toggleButton = () => {
  lapButton.classList.remove("hidden");
  resetButton.classList.remove("hidden");
};

const play = () => {
  if (!isPlay && !isReset) {
    playButton.innerHTML = "Pause";
    bg.classList.add("animation-bg");
    min = setInterval(() => {
      minute.innerHTML = ` ${++minuteCounter} : `;
    }, 60 * 1000);

    sec = setInterval(() => {
      if (secCounter === 60) {
        secCounter = 0;
      }
      secund.innerHTML = `${++secCounter} : `;
    }, 1000);

    sentiSec = setInterval(() => {
      if (sentiCounter === 100) {
        sentiCounter = 0;
      }
      centiSecund.innerText = `${++sentiCounter}`;
    }, 10);

    isPlay = true;
    isReset = true;
  } else {
    playButton.innerHTML = "Play";

    clearInterval(min);
    clearInterval(sec);
    clearInterval(sentiSec);

    isPlay = false;
    isReset = false;
    bg.classList.remove("animation-bg");
  }
  toggleButton();
};

const reset = () => {
  clearInterval(min);
  clearInterval(sec);
  clearInterval(sentiSec);
  isPlay = false;
  isReset = true;
  lapButton.classList.add("hidden");
  resetButton.classList.add("hidden");
  secund.innerHTML = "&nbsp;0 : ";
  centiSecund.innerHTML = " &nbsp;0";
  minute.innerHTML = "0 : ";
  secCounter = 0;
  minuteCounter = 0;
  sentiCounter = 0;
  playButton.innerHTML = "Play";
  bg.classList.remove("animation-bg");
};

const lap = () => {
  const li = document.createElement("li");
  const number = document.createElement("span");
  const timeStamp = document.createElement("span");

  li.setAttribute("class", "lap-item");
  number.setAttribute("class", "number");
  timeStamp.setAttribute("class", "time-stamp");
  number.innerText = `#${++lapItem}`;
  timeStamp.innerHTML = `${minuteCounter} : ${secCounter} : ${sentiCounter}`;
  li.append(number, timeStamp);
  laps.append(li);
  clearButton.classList.remove("hidden");
};

const clearAll = () => {
  laps.innerHTML = "";
  laps.append(clearButton);
  clearButton.classList.add("hidden");
  lapItem = 0;
};

lapButton.addEventListener("click", lap);
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
clearButton.addEventListener("click", clearAll);
