import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "notiflix/dist/notiflix-3.2.5.min.css";

const myInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('.value[data-days]');
const hours = document.querySelector('.value[data-hours]');
const minutes = document.querySelector('.value[data-minutes]');
const seconds = document.querySelector('.value[data-seconds]');
startBtn.disabled = true;
let ms = 0;
let timerId = null;

// console.log(fp);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] < new Date) {
      Notify.failure('Please choose a date in the future');
    }
    startBtn.disabled = false;
    startBtn.addEventListener('click', () => {
      Notify.success('Timer start');
      timerId = setInterval(() => {
        ms = selectedDates[0] - new Date;
        const updateTimerObj = convertMs(ms);
        updateTimer(updateTimerObj);
        if (ms <= 1000) {
        clearInterval(timerId);
        Notify.success('Timer stoped');
      }
      }, 1000);
    })
  },
};
 flatpickr(myInput, options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function updateTimer(updateTimerObj) {
  days.textContent = addLeadingZero(updateTimerObj.days);
  hours.textContent = addLeadingZero(updateTimerObj.hours);
  minutes.textContent = addLeadingZero(updateTimerObj.minutes);
  seconds.textContent = addLeadingZero(updateTimerObj.seconds);
}