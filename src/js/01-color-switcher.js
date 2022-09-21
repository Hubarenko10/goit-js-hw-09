function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = getRandomHexColor();
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.disabled = true;
let timerId = null;
const body = document.querySelector('body');
startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
        const randomColor = getRandomHexColor();
        body.style.background = randomColor;
    
    }, 1000);
    
});
stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
