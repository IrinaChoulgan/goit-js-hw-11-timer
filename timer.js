class CountdownTimer {
  constructor({selector, targetDate}) {
  this.refs = {
    secs: document.querySelector('[data-value="secs"]'),
    mins: document.querySelector('[data-value="mins"]'),
    hours: document.querySelector('[data-value="hours"]'),
    days: document.querySelector('[data-value="days"]')
  }
  this.id = null;
  this.selector = selector;
  this.targetDate = targetDate;
  } 
  culc = () => {
    const currentDate = new Date();
    const time = this.targetDate - currentDate;
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
    this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.hours.textContent = mins < 10 ? `0${hours}` : hours;
    this.refs.days.textContent = mins < 10 ? `0${days}` : days;
    
    };

    timerStart = () => {
      this.id = setInterval(this.culc, 1000);
    };
    init() {
      window.addEventListener("DOMContentLoaded",this.timerStart)
    }
    timeFinish(time) {
      if (time < 0) {
        clearInterval(this.setInterval);
      }
    }
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
})
timer.init();

  

// const refs = {
//   secs: document.querySelector('[data-value="secs"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   days: document.querySelector('[data-value="days"]'),
//   timer: document.querySelector('#timer-1')
// }

// function culc() {
// const currentDate = new Date();
// const time = targetDate - currentDate;
// const secs = Math.floor((time % (1000 * 60)) / 1000);
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
// refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
// refs.hours.textContent = mins < 10 ? `0${hours}` : hours;
// refs.days.textContent = mins < 10 ? `0${days}` : days;

// };

//let id = null;
//const targetDate = new Date('Jul 17, 2022');

// function timerStart() {
//   id = setInterval(culc, 1000);
//   console.log(targetDate);
// };
// function timerStop() {
//   clearInterval(id)
// };
//window.addEventListener("DOMContentLoaded", timerStart)

