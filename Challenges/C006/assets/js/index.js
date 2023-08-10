const clock = document.querySelector(".clock");
const begin = document.querySelector(".begin");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
let seconds = 0;
let timer;

const createHour = (seconds) => {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    timeZone: "GMT",
    hour12: false,
  });
};

const beginClock = () => {
  timer = setInterval(function () {
    seconds++;
    clock.innerHTML = createHour(seconds);
  }, 1000);
};

begin.addEventListener("click", function (e) {
  beginClock();
});
pause.addEventListener("click", function (e) {
  clearInterval(timer);
});
stop.addEventListener("click", function (e) {
  clearInterval(timer);
  clock.innerHTML = "00:00:00";
});
