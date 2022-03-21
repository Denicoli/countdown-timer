const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const tomorrow = new Date();

tomorrow.setDate(new Date().getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

function countdown() {
    const now = new Date();

    const diffInSeconds = (tomorrow - now) / 1000;

    const hours = Math.floor(diffInSeconds / 3600) % 24;
    const minutes = Math.floor(diffInSeconds / 60) % 60;
    const seconds = Math.floor(diffInSeconds) % 60;

    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

// Initial call
countdown();

// Function call for each second
setInterval(countdown, 1000);