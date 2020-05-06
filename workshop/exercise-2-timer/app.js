// Time Display
let span = document.createElement("span");
let h1 = document.querySelector(".time");
h1.appendChild(span);

setInterval(() => {
  let date = new Date();
  let hour =
    date.getHours() < 10
      ? "0" + date.getHours().toString()
      : date.getHours().toString();
  let min =
    date.getMinutes() < 10
      ? "0" + date.getMinutes().toString()
      : date.getMinutes().toString();
  span.innerText = "Current time: " + hour + ":" + min;
}, 1000);

// Stop Watch
let interval;
let mins = 0;
let secs = 0;
let timeEl = document.querySelector(".tick");
let stopwatchStartBtn = document.querySelector(".stopwatchStart");
let stopwatchStopBtn = document.querySelector(".stopwatchStop");

stopwatchStartBtn.addEventListener("click", () => {
  interval = setInterval(() => {
    if (secs === 59) {
      mins++;
      secs = 0;
    } else {
      secs++;
    }
    tempMins = mins < 10 ? "0" + mins.toString() : mins.toString();
    tempSecs = secs < 10 ? "0" + secs.toString() : secs.toString();
    timeEl.innerText = tempMins + ":" + tempSecs;
    if (mins === 59 && secs === 59) {
      clearInterval(interval);
    }
  }, 1000);
});

stopwatchStopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

// Timer
let timerBtn = document.querySelector(".timerBtn");
let timerInput = document.querySelector(".timerInput");
let kaboomEl = document.querySelector(".kaboom");
let player = document.querySelector("#chimeAudio");

timerBtn.addEventListener("click", () => {
  let kaboom = timerInput.value;
  let interval = setInterval(() => {
    kaboomEl.innerText = "Kaboom in " + kaboom + "!";
    if (kaboom === 0) {
      player.play();
      clearInterval(interval);
    } else {
      kaboom--;
    }
  }, 1000);
});
