function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector(['button[data-start]']);
const stopBtn = document.querySelector(['button[data-stop]']);
stopBtn.disabled = true;
let timerId = null;

startBtn.addEventListener('click', () => { 
  startBtn.disabled = true;
  stopBtn.disabled = false;
  
  timerId = setInterval(() => {
    const changedColor = getRandomHexColor();
    document.body.style.backgroundColor = changedColor;
  },1000)
 });



stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
 })







