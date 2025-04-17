const toggle = document.getElementById("toggleCheckbox");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

var hourHeading = document.getElementById("hr");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var startBtn = document.getElementById("start");

var hour=0;
var min=0;
var sec=0;
var msec=0;

var interval;

function start() {
    interval = setInterval(setTimer, 10);
    startBtn.disabled = true;
}

function setTimer() {
    msec++;
    msecHeading.innerHTML = msec;

    if(msec>=100) {
        sec++;
        secHeading.innerHTML = sec;
        msec=0;
    }

    if(sec>=60) {
        min++;
        minHeading.innerHTML = min;
        sec=0;
    }

    if(min>=60) {
        hour++;
        hourHeading.innerHTML = hour;
        min=0;
    }
}

function stop() {
    clearInterval(interval);
    startBtn.disabled = false;
}

function reset() {
    hour=0;
    min=0;
    sec=0;
    msec=0;

    hourHeading.innerHTML="00";
    minHeading.innerHTML="00";
    secHeading.innerHTML="00";
    msecHeading.innerHTML="000";

    stop();
}