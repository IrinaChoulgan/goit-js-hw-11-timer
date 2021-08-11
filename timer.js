// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
//const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
//const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
//const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
//const secs = Math.floor((time % (1000 * 60)) / 1000);

const refs = {
  // start: document.querySelector('#start'),
  // stop: document.querySelector('#stop'),
  secs: document.querySelector('[data-value="secs"]'),
  mins: document.querySelector('[data-value="mins"]'),
  hours: document.querySelector('[data-value="hours"]'),
  days: document.querySelector('[data-value="days"]'),
  timer: document.querySelector('#timer-1')
}
let id = null;
//let startDate = null;
const targetDate = new Date('Jul 17, 2019');

function culc() {
const currentDate = new Date();
const time = targetDate - currentDate;
const secs = Math.floor((time % (1000 * 60)) / 1000);
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const days = Math.floor(time / (1000 * 60 * 60 * 24));
refs.secs.textContent = secs < 10 ? `0${secs}` : mins;
refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
refs.hours.textContent = mins < 10 ? `0${hours}` : hours;
refs.days.textContent = mins < 10 ? `0${days}` : days;

};



function timerStart() {
  const targetDate = new Date('Jul 17, 2019');
  //startDate = new Date('Jul 17, 2019');
  id = setInterval(culc, 1000);
  console.log(targetDate);
};
function timerStop() {
  clearInterval(id)
};
//refs.start.addEventListener('click', timerStart)
//refs.stop.addEventListener('click', timerStop);
window.addEventListener("DOMContentLoaded", timerStart)

